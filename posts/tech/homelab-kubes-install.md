---
slug: czFmXY
date: 16 November 2024
title: Setting up a microk8s cluster in a homelab
description: A quick guide how to setup a working kubernetes cluster for a homelab using ubuntu server and microk8s
tags:
  - kubernetes
  - linux
  - homelab
---
I run almost everything in my homelab in a kubernetes cluster. There is no other reason to that other than my personal preference tbh, so I'm not going to dive into the why kubes topic here. But, I think I'll have to give the microk8s over k3s idea a bit of an explanation though.

Traditionally k3s is the go to choice for anything small like a homelab; and it's great! But, lately, I spent some quality time with microk8s and ended up liking it a lot. To the point where i have chosen it over k3s for my homelab. Mostly because how low touch it is to setup and maintain a baseline cluster, and how well it is integrated with ubuntu ecosystem.

Unfortunately, microk8s being a bit of a niche choice, the documentation might be a bit sparse. So, I figured an extra tutorial won't hurt, and hence the article. I'll walk you through my choices as we go through them.

## Initial server setup

I'm presuming here that we have a fresh ubuntu server 24.04 installed on two machines. It could be a full or a minimal setup, doesn't particularly matter. One of them will me main server and another is a secondary worker. Again, you might have more than two units in your cluster, it doesn't matter either; you'll just have to repeat a few steps on those extra machines.

I strongly recommend setting up SSH on each node though. I mean unless you _really_ want to manually type all the commands below in terminals for some reason. All my infra lives behind firewalls so, to me an SSH connection is a nobrainer.

Okay, with that out of the way, first off lets run the updates and add couple of standard tools

```sh
sudo apt update  
sudo apt upgrade
sudo apt install nano btop
```

Second, you want to disable swap on all of your machines, and comment out the swap line of your `fstab` file, then reboot. Long story short for this is that kubes resources scheduler gets real confused when your pod ends up in swap. You don't want that to happen.

```sh
sudo swapoff -a
sudo nano /etc/fstab

sudo reboot
```

Than brings us to the base line setup.

## Kubes install

Once your machines are back from the reboot run those two commands on each of them.

```sh
sudo snap install microk8s --classic
sudo snap install canonical-livepatch
```

The first one installs microk8s and the second one installs kernel livepatch. Technically you don't need the second one, but we also don't need to live like backward savages either, do we?

Once that's done switch to your _master_ node and run the following

```sh
sudo microk8s status --wait-ready
sudo microk8s disable ha-cluster --force

sudo microk8s add-node
```

The first one waits for the kubes instance to boot. By default it will boot in high availability mode, running extra stuff on your nodes. For homelab purposes I don't really need that and could easily suffer an occasional reboot if I have to. So the second command will disable all of that and switch the cluster into a more lightweight mode and use `flaneld` and `etcd`, similar to a standard k3s default setup.

The last command will spit out a new command that looks something like this:

```sh
microk8s join [IP ADDRESS]:[LONG SECRET STRING]
```

copy that command, add `sudo ` in front of it and run it on _every_ worker node. This will connect all your nodes into a single kubernetes cluster.

From this point on, everything you do runs from the _main_ node _only_!

## Initial tooling setup

Start by running the following set of commands. It will install aliases and such for you to move forward. Microk8s is actually pretty handy as it comes with all the tools, including helm, preinstalled and namespaced:

```sh
sudo usermod -a -G microk8s $USER
mkdir -p ~/.kube
chmod 0700 ~/.kube

echo "alias kubectl='microk8s kubectl'" >> ~/.bashrc
echo "alias helm='microk8s helm'" >> ~/.bashrc
echo "export EDITOR=nano" >> ~/.bashrc
source ~/.bashrc 

su - $USER
```

After that you want to enable the following two microk8s addons:

```sh
microk8s enable dns
microk8s enable ingress
```

The first one installs CoreDNS to resolve kubes _internal_ DNS names, the second one will install nginx based reverse proxy to serve as an ingress controller for all your kubes services.

Technically you might want to choose `traefik` over the `nginx` here to follow the k3s standards. It is available as a community addon in microk8s. But, it will basically do a bare bone helm install under the hood and you'll be on your own after that. I'm a huge fan of traefik and its middleware based design, but i'm not a huge fun of chugging lots of custom yaml files around. In my experience the default nginx ingress server just as lightweight and better overall integrated with microk8s ecosystem. So I use that as the default option.

## Kubes dashboard

Microk8s doesn't come with Rancher dashboard for obvious reasons. But, it has the standard kubernetes dashboard available as an addon. Which serves me just fine.

```sh
microk8s enable dashboard

kubectl apply -f - <<EOF
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: kubernetes-dashboard
  namespace: kube-system
  annotations:
    nginx.ingress.kubernetes.io/backend-protocol: HTTPS
    nginx.ingress.kubernetes.io/force-ssl-redirect: "true"
    nginx.ingress.kubernetes.io/ssl-passthrough: "true"
    nginx.ingress.kubernetes.io/whitelist-source-range: 127.0.0.1/8,192.168.0.0/16
spec:
  ingressClassName: public
  rules:
  - host: [YOUR LOCAL DOMAIN NAME GOES HERE]
    http:
      paths:
      - backend:
          service:
            name: kubernetes-dashboard
            port:
              number: 443
        path: /
        pathType: Prefix
EOF
```

The first command will install everything except an ingress config. I honestly don't know why not. But, that's a consistent choice with all the plugins in microk8s. And chucking it in doesn't take long. Just don't forget to enter your own domain name. And then add that host name into your laptop's `/etc/hosts` file.

To access your dashboard you'll need a token which you get with the following command.

```sh
kubectl describe secret -n kube-system microk8s-dashboard-token
```

## Longhorn

Microk8s comes with several options for storage. It's not like I particularly dislike any of them, it's just I really like longhorn. I always had a solid experience with the thing and it's super simple to install, because it comes with an official helm script.

```sh
helm repo add longhorn https://charts.longhorn.io
helm repo update
```

Then run the following to install it in the `longhorn` namespace

```sh
kubectl create namespace longhorn
helm install longhorn longhorn/longhorn --namespace longhorn \
  --set defaultSettings.defaultDataPath="/longhorn" \
  --set csi.kubeletRootDir="/var/snap/microk8s/common/var/lib/kubelet"
```

Then watch the pods until you see them all fully spawned and running

```sh
kubectl -n longhorn get pods
```

After that the only thing you'll need is to add an ingress controller.

```sh
cat <<EOF | microk8s kubectl apply -f -
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: longhorn
  namespace: longhorn
  annotations:
    nginx.ingress.kubernetes.io/whitelist-source-range: 127.0.0.1/8,192.168.0.0/16
spec:
  rules:
  - host: [LONGHORN LOCAL DNS NAME]
    http:
      paths:
        - path: /
          pathType: Prefix
          backend:
            service:
              name: longhorn-frontend
              port:
                number: 80
EOF
```

And that's pretty much all to it. Just add the DNS name into your `/etc/hosts` and you should be good to go.

## Bottom line

Well, that's your baseline kubes cluster up an running ready for apps and extensions. And if you did kubes installs in the past I hope you do appreciate the fact that one barely needs to wrestle with any YAML configs to get it up and running. The only thing I had to feed the kubes were really the ingress controller configs. Which, depending on how you look at it, might be a fair call actually. After all it's up to the admin how they want their services to be exposed.

There is actually more great and useful addons in microk8s ecosystem. The `observability` plugin for example adds promethius, graphana, and loki. Then there is `metallb` if you need some decent low overhead load balancer. There is `cert-manager` for let's encrypt integration. The `registry` sets up local private docker image registry. There is `cloudnative-pg` for all your PostgreSQL needs. Etc etc.

What I really like about the microk8s addons is that they are very sensibly chosen and you can get them up and running in literally one single command. Which makes a base line kubernetes setup and maintenance into a very nice and civilised process.