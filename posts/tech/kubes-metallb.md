---
slug: c087r
date: 20 November 2024
title: MetalLB in a homelab explainer
description: A bit of an explanation of how MetalLB works and what it does in a bare metal homelab setup. And how to use that with microk8s more specifically
tags:
  - homelab
  - kubernetes
  - networks
  - engineering
---
My homelab setup runs on several mini PCs. Which, I guess, qualifies for a bare metal deployment. In a commercial cloud provider infrastructure this topic doesn't particularly matter, but in a physical homelab setup, once you have more that one machine things get interesting.

It took me a bit of time to figure out the pieces, and I'm basically taking notes here before I forgot everything. But, I also hope it might come handy to someone else too.

## What is MetalLB and why you need one?

Well, okay, in the most basic setup, one doesn't actually need a load balancer. If all you want is to run some web services on port 80/443 and you don't mind an occasional reboot, you can get away with just an ingress controller that listens on a `NodePort` and directs traffic to the right services based on DNS names. As long as the node that the ingress `externalIP` is bound to is up an running you will be fine.

There are several scenarios where that is not enough though. For example you want a failover in case the main node goes offline. Or, you'd like to actually load balance work between several physical nodes. Or, you might have services in your kubernetes setup that have to talk on the same port externally.

The problem with kubernetes is that it can do load balancing _internally_ between pods via `kube-proxy`, that's the job of services. But, it doesn't have load balancing capabilities from the external network perspective. Instead, kubernetes integrates with external infrastructure for that. All cloud providers would normally do that out of the box.

And so, for example, when we mark a service as `spec.type: LoadBalancer`, that service will ask an external load balancer to assign it an external IP address for the service. If there is no such thing, like in a default homelab bare metal deployment, then the external IP will forever stuck in the "pending" state.

The usual workaround for that is to assign `externalIPs` for a service manually and make it talk on the host IP address. That will work for the most simple single node kubernetes setups without high availability features. But, it's not entirely workable for more complex deployments.

And that is what MetalLB does. It is a super low overhead local network load balancer that performs the same role as a more sophisticated load balancing hardware would have in a commercial cloud infrastructure provider.

## How does MetalLB work?

There are multiple ways to setup MetalLB. But, in a most basic scenario MetalLB will be configured with a pre-defined IP range, and it will allocate those IPs to kubernetes services as they come online.

What essentially happens is that MetalLB will advertise all those allocated external IP addresses on the host network interfaces using the L2 ARP protocol. From the external network perspective the host will still have a single IP, but it will advertise to ether devices in the same subnet that it responds to other IP addresses too. The easiest way to think about it is that it's like a machine that has multiple IP addresses: the original host IP, plus all the additional IPs that MetalLB handles.

Then, as the traffic comes into the node it will be directed to services associated with those IP addresses. And after that the traffic will be load balanced internally via `kube-proxy` as it would in a basic kubernetes setup.

It brings couple of important advantages. Firstly, there can be multiple IP addresses attached to different services, each of them is different from the actual host IP address. Meaning services technically can talk on conflicting ports on the same physical machine. Also, if the node suddenly becomes unavailable, metallb will shift those IPs to another available node and the system will continue to operate.

This is called an L2 mode load balancer, and technically it is more like a failover rather than a true network level load balancing implementation since the actual load balancing between the pods will still be done horizontally inside kubernetes by `kube-proxy` that runs services.

Additionally, MetalLB can be configured in BGP mode which integrates with a router on the network. In this case, _all_ nodes in the cluster will advertise the same set of IP addresses and the network router can properly load balance traffic directly to specific nodes. There also would be no failover latency involved in this case; the moment a node goes offline the router stops directing the traffic to that node and keeps feeding traffic other nodes instead.

Admittedly a BGP setup is way more complex that I would ever need in a homelab setup, and frankly it's way over my head in terms of networks knowledge. So, I'll stick to a default L2 setup in the chapter below.

## How to setup MetalLB in microk8s

For all the lengthly preamble above, setting up metallb in ubuntu/microk8s environment is actually dead simple. It's just one command:

```
sudo microk8s enable metallb
```

When you run it, it will ask to give it an IP addresses range that it will later hand over to services. And that is a bit more complicated topic than the installation itself.

Long story short, the way L2 IPs advertisement works, it only affects devices within the same subnetwork. Most household routers would have their DHCP setup to the `192.168.XXX.*` range with a net mask set to `255.255.255.0`. Meaning that only the devices with IPs within the `192.168.XXX.*` range will see the L2 addresses advertisement.

For example if the router network works with the `192.168.66.*` range, the IP addresses that you give to MetalLB will have to come from that same range. Using say `192.168.67.*` won't work. I mean, technically it could, say if you set your net mask to `255.255.0.0`, but that's a whole another can of worms that I don't want to open.

The easiest way to set it up is to basically limit DHCP range to say `192.168.66.1 ... 192.168.66.200` and give the rest `55` addresses to MetalLB. Although, frankly you won't need `55` addresses, you might only use a hand full of them at best, the web ingress controller will only need one and that will probably cover `95%` of your use cases.

And that's more or less that. MetalLB will automatically distribute those IPs to interested services and advertise them to the network. And in case if you'd want to have a predefined IP, say for DNS purposes, you can make the service to ask for that specific address. Here for example my nginx ingress service.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: ingress
  namespace: ingress
spec:
  selector:
    name: nginx-ingress-microk8s
  type: LoadBalancer
  loadBalancerIP: 192.168.88.44
```

Now, regardless which node actually advertises the IPs, all the port 80/443 traffic hitting that IP address will be directed into my nginx ingress service. Also, it won't interfere with the actual physical machine IP that my router's DHCP server assigned to it. Pretty neat, isn't it?

And that's all there is to it. It's not all that complicated as it seemed initially.