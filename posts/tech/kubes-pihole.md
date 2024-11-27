---
slug: iNGVk
date: 26 November 2024
title: Run pi-hole in kubernetes cluster
description: A recipe how to install and pi-hole inside of a kubernetes deployment
tags:
  - kubernetes
  - homelab
  - linux
  - engineering
---
I've been using [Steven Black](https://github.com/StevenBlack/hosts) `/etc/hosts` lists on my laptops for years, and it's been great. But, I always wished it was a thing on my other devices like smartphones, tablets, and that I didn't have to rely on dodgy browser extensions in closed systems. I wish my wife didn't have to deal with the crazy world of ads and trackers and malware either.

And then I've discovered for myself [pi-hole](https://pi-hole.net/) which is basically a lightweight DNS proxy that runs on a raspberry pi. One can plug it into their home network and block the bulk of the internet garbage for everyone on all devices at the same time. It's quite brilliant actually.

The cool thing about the project is that one doesn't actually have to run it on a raspberry pi device. Pihole can just as well deploy in any homelab environment, such as a docker image or a full on kubernetes deployment. It's not entirely complicated, but it has a few pitfalls. So, here I just wanted to share how it works for me and how I run it in my kubes deployment.

## Helm chart

Thankfully pi-hole has an official [helm chart](https://artifacthub.io/packages/helm/mojo2600/pihole) that simplifies the deployment dramatically. All we really have to do is to setup a namespace, an admin password secret, and create a configuration file for the helm chart. The first two could be done with the following commands

```sh
kubectl create namespace pihole
kubectl -n pihole create secret generic pihole-admin \
		--from-literal='password=[THE SUPER SECRET PASSWORD]'
```

And for the second one you'll have to create a yaml file that you'll feed to helm during the installation process. There can be a few variations, so I'll start with the most simplest version here. Lets assume you're running on a single node, there is no load balancer and you are accessing your services via  NodePorts. Here the config

```yaml
# DNS servers that pi-hole will use
DNS1: 9.9.9.9
DNS2: 1.1.1.1

persistentVolumeClaim:
  enabled: true

admin:
  # use the secret we just created 
  existingSecret: "pihole-admin"

serviceDns:
  # combine the TCP and UDP services
  mixedService: true

# we won't need that
serviceDhcp:
  enabled: false

podDnsConfig:
  enabled: true
  policy: "None"
  nameservers:
  - 127.0.0.1
  - 9.9.9.9
```

It's mostly self explanatory. The last bit with podDns part you might or might not need depending on your setup. The problem here is that in some circumstances pi-hole will set itself up as the primary DNS during the deployment process. And in case things get borked with pi-hole DNS it's better for the pod to rely on something that actually works.

Now to the helm part. It's basically a two step operation: register the pi-hole helm chart and then use that to deploy everything.

```sh
helm repo add mojo2600 https://mojo2600.github.io/pihole-kubernetes/
helm repo update

# and now install
helm install pihole mojo2600/pihole -f pihole.yaml -n pihole
```

Wait until the pihole pod is up and running. Check the `pihole` service too, it should connect to NodePort on port `53`. If everything is okay, you should be able to run the following from outside of the node, like on your laptop for example:

```sh
# put your node IP address here
dig @192.168.NN.NN google.com
```

If everything works fine, this command should resolve the `google.com` domain name for you using pi-hole. Congratulations your pi-hole is up and running.

And if my congratulations are premature, use the following command to blow it all away and try again

```sh
helm uninstall pihole -n pihole
```

## A load balancer option

If you're running multiple nodes and using metallb as your load balancer, you don't have to limit yourself to the host IP, and can dedicate an IP from your load balancer range. Read my [recent article](/posts/c087r) about metallb if you're unsure how that works.

In this case, you might want to modify your config file `serviceDns` to the following

```yaml
serviceDns:
  mixedService: true
  # tell it which IP do you want pre-allocated for this service
  loadBalancerIP: 192.168.68.253
  type: LoadBalancer
```

You can also set a load balancer for the web-face service too here, and even collocate both services on the same IP address. If you need any of those options, I recommend consulting with the official chart docs. Or just edit your services yourself manually if you know your way around kubes.

## Web Interface

Pi-hole comes with a very neat web-server that you can use to further configure the thing. Depending on your setup, we could have set the web service along with everything else in the helm config. But, I personally run a separate `ngnix` ingress controller in my deployment, and I like managing my ingress through that. And to that end, I usually feed it a config that looks like this.

```sh
kubectl apply -f - <<EOF
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: pihole-web
  namespace: pihole
  annotations:
    nginx.ingress.kubernetes.io/whitelist-source-range: 127.0.0.1/8,192.168.0.0/16
spec:
  ingressClassName: public
  rules:
  - host: YOUR.LOCAL.DNS.NAME
    http:
      paths:
      - backend:
          service:
            name: pihole-web
            port:
              number: 80
        path: /
        pathType: Prefix
EOF
```

To access the interface, you'll have to add that local domain name with your ingress controller service IP address into you laptop's `/etc/hosts`; or `/private/etc/hosts` if you're on macos.

Then go to `http://your.domain.name/admin` address (don't forget the `/admin` part at the end), type the super secret password you created at the very beginning of the process, and that should lead you to the pi-hole dashboard.

## How to use it

Well this is the easy part actually, and here you have a few options.

1. Set it as your DNS server locally on your devices in their network settings
2. Set it globally as a default DNS server in your wifi router and that will automatically work for _all_ devices on the network

There are couple of things you might want to keep in mind though. Because pi-hole will run it's DNS service on a _local network_ IP address, two things might happen.

1. Your router might want to ask you to put the address in the DHCP server settings rather than main DNS settings in the router. That's normal. Do that, it works
2. MacOS will warn you that you might be being hacked. That's normal too, it's a good thing they warn you about those things. I mean, you never know.

You also might want to watch out for things getting broken after you've plugged it in. For example google ads in the search results won't be clickable anymore. That annoyed some of my family members and I added it to the whitelist in the admin panel. After all, google has to eat too, right?

## Extra lists

And the last bit I wanted to touch on here is this. By default pi-hole comes with basically the baseline steven-black list preinstalled. It's actually a pretty great list that will block probably close to 90% of garbage. But you can add more lists to fortify your system even further.

The https://firebog.net/ service is a great place to start. All the green links are generally considered safe to use. Just go to your admin panel,  click on `Adlists` and plug them all there.

Once you're done, you'll need to do one more thing. Go to `Tools > Update Gravity` and press the `Update` button. It will download and recompile all the block lists into a binary search thing that pi-hole can use for fast DNS name search.

---
And that's pretty much it. Feel free to ping me on mastodon if you need help.