---
slug: 
date: 2 January 2025
title: How to integrate PMW3610 optical sensor into keyboard/mouse
description: Capturing some info about wiring a pmw3610 optical sensor to a ProMicro based keyboard/mouse or anything else really
tags:
  - keyboard
  - electronics
  - promicro
  - engineering
draft: true
---
So, I had this itch to make a keyboard with an integrated trackball. Which took me onto a spelunking quest of figuring out how optical sensors work, SPI interfaces, and such. The information is not all that great on the subject because keyboards with integrated pointy devices are still a bit niche. So, I'm dumping everything I know here in hope that it might help someone down the track.

## How SPI interfaces work

If you know everything about SPIs, just skip this section, but I think it's a fundamental piece that leads to understanding how to connect peripherals to chips. Which is a bit on oxymoron because everything is a chip. And in the world of chips when two or more of them want to talk to each other, like an optical sensor and a ProMicro MCU for example, they use protocols.

The most standard way to wire things together is known as Serial Peripheral Interface or SPI for short. It is normally consists of 6 wires and otherwise known as "4 wire SPI", which is a bit confusing, but easily explained because we have 2 wires for power and 4 wires for data. It looks like so.

The 4 data wires is basically a full-duplex interface used like so

* `PICO` (formerly known as MISO)- stands for "Processor In Chip Out" and used for the chip to send data to the processor
* `POCI` (formerly known as MOSI) - stands for "Processor Out Chip In" and used for the processor to send data to the chip
* `SCK` (sometimes called `SCLK`) - stands for "System ClocK" and as you might guess used for comms synchronisation
* `CS` (sometimes called `NCS`) - is used for selecting a device, more on that in a second

## SPI and multiple devices

The reason why SPI has so many wires and that mystical `CS` wire is that multiple devices can be daisy chained on the same set of wires. 4 wires might be an overkill for a single device, but if you need to attach six of them to the same controller, SPI very quickly becomes a live saviour because micro-controllers usually have a limited number of pins.

When we daisy chain several devices on the same SPI bus, here how it looks like:

Now notice that every device has a separate `CS` wire, and that is what lets the micro-controller to choose which device it talks to on the SPI bus at every single moment.

## 3-wire SPI

Another quirk of SPI interfaces that we need to be aware in this instance is a SPI variation called a "3-wire SPI". What it basically does it uses one single wire to communicate between chips and a processor instead of two like in a 4-wire SPI:


As you can see in this instance instead of dedicated `PICO`/`POCI` wires, we have a single wire which is traditionally called `SDIO` which a short for "Serial Data In/Out". There is some software magic to make the half-duplex work. But otherwise it acts as a normal SPI bus. Including the ability to daisy chaining devices with extra `CS` wires.

## SPI IRQ wire

And the last piece of the puzzle is called `IRQ` wire. It is a term used for SPI interrupt signal; I know it doesn't abbreviate to `IRQ`. I honestly don't know what it stands for, but my theory it is for "InterRupt Queue".

The basic idea is the following. There can be all sorts of things happening over an SPI bus, including the controller going into a low power mode. Now imagine you have an optical chip that watches a mouse or a trackball. What happens when you move trackball/mouse and your processor is either busy with other stuff or went to sleep? That's right we need a way to interrupt it start processing the movement data right away. Hence the IRQ wire.

While the sensor is detecting movement it can send an IRQ signal to the processor to prioritise the movement data processing.

## Back to our optical sensor

The easiest way to think about the pmw3610 optical sensor is a 3-wire SPI device with an IRQ. The complicating factor here is that it also needs two separate sources of power `3.3v` and `1.8v`, so one will need a power step-down MOSFET and such. Otherwise it just some usual capacitors for killing the parasite signals and such. Here is the schematic for my trackball sensor for a reference.

![[pmw3610-schematic.png]]

You can see the 6 wire standard SPI socket with labels at the bottom right corner where everything come together. Well except it is not entirely a standard 6 wire SPI, because instead of `PICO/POCI` wires we have `SDIO` for a 3-wire SPI and an `IRQ` wire.