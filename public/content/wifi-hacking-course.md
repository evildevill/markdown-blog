---
title: "Complete Wifi Hacking Course 2025"
description: "This course is designed to be hands-on and beginner-friendly, so even if you’re new to the world of network security, you’ll be able to follow along with ease. By the end, you'll have a"
slug: "wifi-hacking-course"
date: "2024-11-14"
author: "Waseem Akram"
image: "/images/posts/wifi-hack/wifi-hacking-course.webp"
---

# About Course

Hello everyone! I’m **Waseem Akram**, and I’m thrilled to introduce you to my **completely free Wi-Fi hacking course**! In this course, I’ll take you through every step, from the very basics to more advanced techniques, covering everything you need to know to perform comprehensive Wi-Fi audits and assess the security of various wireless networks.

This course is designed to be hands-on and beginner-friendly, so even if you’re new to the world of network security, you’ll be able to follow along with ease. By the end, you'll have a solid foundation and the tools needed to start auditing Wi-Fi networks on your own.

If you have any questions or need extra help, feel free to reach out to me on Discord my username is **hackerwasii**.

> **Disclaimer:** This course is intended solely for educational and ethical purposes. I am not responsible for any misuse of the information provided.

## Course Requirements

To perform the tasks and various Wi-Fi attack techniques covered in this course, there are a few essential requirements to keep in mind:

### 1. Network Antenna with Monitor Mode Capability
One crucial piece of equipment you’ll need is a **network antenna that supports monitor mode**. You might be wondering, “Why is this necessary?” Here’s why: to inject Wi-Fi packets into the network, a typical antenna (like those built into most laptops and PCs) won’t be effective. You need a specialized network antenna capable of monitor mode, which allows the system to capture and inject packets freely, providing the flexibility needed for Wi-Fi auditing.

### 2. Compatible Operating System
You’ll also need a compatible **operating system to conduct these attacks**. Although this course won’t cover OS installation, there are plenty of online guides for installing systems like **Kali Linux**, **Parrot OS**, or **Wifislax** (a distribution specifically designed for Wi-Fi hacking).

Based on my experience, I recommend **Parrot OS**. While Kali Linux may require driver installations to support the network antenna, Parrot OS generally does not. When I first plugged in my antenna with Parrot, it worked right away—no setup needed!

> **Note:** Choose an OS that suits your setup and ease of use, and ensure your network antenna is properly configured for the best experience during the course.

### How to Choose a Good Antenna

Selecting the right network antenna can make a significant difference in your Wi-Fi auditing experience. Personally, I use the **Alfa AWUS036ACM**, and I can attest that it's worth the investment (priced around €46 in the official European store). This model performs excellently on both 2.4 GHz and 5 GHz frequencies.

To choose the antenna that best fits your needs, consider the following factors:

### 1. Key Factors to Consider
- **Chipset**: The chipset is the core component of the antenna that enables monitor mode, making it the most critical factor in your decision.
- **Brand**: Some of the most reputable brands for Wi-Fi auditing are **Alfa** (highly recommended), as well as **Panda** and **TP-Link**.
- **Power and Frequency Compatibility**: Many modern antennas support both 2.4 GHz and 5 GHz frequencies. Older models might only support 2.4 GHz, so consider your frequency requirements and the desired range.
- **Price**: Antenna prices range widely, from budget models under €20 to premium options over €60, depending on brand and features. 

### 2. Recommended Antennas
Here’s a list of recommended antennas that are known for their performance and reliability:

- **Alfa AWUS036ACM**
- **Alfa AWUS1900**
- **Alfa AWUS036AC**
- **Alfa AWUS036ACH v.2**
- **TP-Link TL-WN722N**

For more details on compatible antennas, check out the [official Airgeddon Wiki](https://airgeddon.com/wiki) for additional guidance.

### Introduction

If you’ve got your antenna ready, power up your **Kali** or **Parrot OS** and prepare yourself, because today you’re going to learn how to perform various attacks and techniques to fully audit Wi-Fi networks. While some automatic tools allow you to conduct attacks without any technical knowledge, they don’t teach you the essential principles or techniques behind Wi-Fi auditing. I recommend using automated tools only after you understand the fundamentals—this way, you can operate confidently, minimize risks, and truly grasp what each attack does.

Before diving into the attacks, I’ll walk you through **configuring your antenna** and introduce the key **commands and functions**. This setup will help you better understand each process, so don’t worry if it seems complex initially. At the end of the course, I’ve included a handy **Cheat Sheet** summarizing the most useful tools and commands to reinforce your learning. 

One fascinating aspect of Wi-Fi auditing is that, even from outside a Wi-Fi network, you can often gather information, such as the number of connected clients and other network data. Throughout the course, I’ll guide you step-by-step on how to approach these tasks safely and effectively, ensuring you’re well-equipped for thorough network auditing.

### Configuration

Let’s start by checking if your antenna is properly recognized by the system and if the network interface has been created successfully. This is an essential step to ensure your setup is ready for Wi-Fi auditing.

To verify, execute the following command:

```bash
ip link show
```

If your network interface is recognized, you should see an output similar to this:

```bash
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: wlan0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    link/ether 00:00:00:00:00:00 brd ff:ff:ff:ff:ff:ff
```
The name of your interface may vary—it could appear as `wlan1`, `wlan2`, or something similar. If you see an interface listed, it means everything is functioning as expected.

To further explore your wireless interfaces, run the following command:

```bash
iw dev
```

This command will display all available wireless interfaces, confirming that your antenna and system are set up correctly for the tasks ahead.


```bash
## output 
phy#0
    Interface wlan0
        ifindex 3
        wdev 0x1
        addr 00:00:00:00:00:00
        type managed
        txpower 20.00 dBm
```

You should now see a list of interfaces, such as `wlan0`. This display provides key details, including:

- **Interface Mode**: This shows the current mode, which could be `Managed`, `Monitor`, `Promiscuous`, or others.
- **Associated Access Point**: This indicates the access point your interface is connected to, if any. In this example, it’s not currently linked to any access point.
- **Additional Antenna Information**: Further data about your antenna’s configuration and status.

These details confirm that the interface is recognized and provide useful insights into its current operational state.

### Activating Monitor Mode

To begin auditing networks, you’ll need to set your antenna to **monitor mode**. This can be done in two primary ways—either with `airmon-ng` (recommended) or `iw`. Should you encounter any issues with commands during the course, check the **Common Errors** section, where I’ve provided solutions to some typical Wi-Fi-related problems.

To enable monitor mode, run:

```bash
airmon-ng start wlan0
```

> **Note:** Replace wlan0 with the name of your specific interface if it differs.

After executing this command, list the interfaces again to confirm. You should see that the interface name has changed, often with “mon” added (e.g., `wlan0mon`), and the mode has switched to monitor. This indicates that your setup is ready for network auditing.

```bash
Found wireless interfaces:
    wlan0    interface found

Interface wlan0 is now in monitor mode.
```

### Alternative Method: Activating Monitor Mode with `iw`

Another way to enable **monitor mode** is by using the `iw` tool. While this method doesn’t append “mon” to the interface name, it still works just fine. Here’s how to do it:

1. First, bring the interface down:

```bash
ip link set wlan0 down
 ```
  
2. Then, set the interface type to monitor:
```bash
iw wlan0 set type monitor
```
3. Finally, bring the interface back up:
 ```bash
 ip link set wlan0 up
 ```

In this method, the interface name won’t have "mon" appended to it, but it should still function properly. Just remember to replace wlan0 with your actual interface name if it differs. Once done, you're ready to start network auditing with the interface in monitor mode.

### Disable monitor mode

To return the interface to managed (normal) mode is very simple, just run one command (current version):

```bash
sudo airmon-ng stop wlan0mon
ip link set wlan0 up
```

The command is airmon-ngresponsible for removing monitor mode and the command is ipresponsible for activating the interface once it has been reconfigured.

```bash
## output
PHY Interface   Driver      Chipset

phy0    wlan0       ath9k       Qualcomm Atheros QCA9565 / AR9565 Wireless Network Adapter (rev 01)
```

And when listing the virtual interfaces we see that everything is as it was at the beginning.

```bash
## output
phy#0
    Interface wlan0
        ifindex 3
        wdev 0x1
        addr 00:00:00:00:00:00
        type managed
        txpower 20.00 dBm
```

To do this task the other way, (with iw) run the following:

```bash
ip link set wlan0 down
iw wlan0 set type managed
ip link set wlan0 up
```

And your interface should return to managed mode without any problems.


### Necessary Concepts

It’s important to understand that during Wi-Fi attacks, your connection will be temporarily lost. This happens because two key services in the system, **wpa_supplicant** and **NetworkManager**, are responsible for maintaining the Wi-Fi connection. 

When you attempt to inject packets into the air for an attack, some of those packets may be lost and fail to reach their destination. To avoid this, it's recommended to "kill" these services temporarily. Fortunately, `airmon-ng` offers an option to stop these processes.

While it’s possible to perform attacks without killing these processes, doing so can lead to interference that might hinder the attack. The downside, however, is that you’ll lose your connection while performing the attack.

In short, it’s advisable to stop these services during attacks to ensure the smooth operation of your audit, but be aware that it will disconnect you from the network temporarily.

To kill conflicting processes

> **Note:** This command will disconnect you from the network temporarily.

```bash
airmon-ng check kill
```

That should do the trick.

```bash
Killing these processes:
  PID Name
  1234 wpa_supplicant
  5678 NetworkManager
```

When you stop attacking and want to have wifi again you must run these two commands to restore the two services:

> **Note:** These command will restore your network connection.

```bash
systemctl restart NetworkManager
systemctl restart wpa_supplicant
```

- Another very important thing that wifi hacking is based on is handshakes.

### What is a Handshake?

A **handshake** is an encrypted password that is transmitted in Wi-Fi packets whenever a client connects to an access point. For example, when you connect your mobile phone to your personal Wi-Fi network, a handshake is generated as part of the connection process.

Many attacks target this process by attempting to **deauthenticate** a device from the Wi-Fi network. The goal is to force the device to disconnect and then reconnect automatically. During this reconnection process, the attacker can capture the handshake. 

Once the handshake is obtained, tools like **Hashcat** can be used to crack the password and gain access to the Wi-Fi network. Essentially, capturing the handshake is a crucial step in many Wi-Fi network attacks, enabling the attacker to attempt password recovery.

### wifi hacking methodology

- Network Scanning: You discover nearby access point and decide which one to attack.
- Denial of Service Attack: You deauthenticate a device from the network to capture the handshake.
- Get the Handshake: Once the device reconnects, you capture the handshake containing the encrypted password.
- Password Cracking: Use tools like Hashcat to crack the password and gain access to the network.
- Network Access: Once you have the password, you can connect to the network and perform further attacks.

So far, the configuration and basic concepts part. You can also see more commands and content here and here

### Change MAC address

In this section we will see what the MAC address is, what it is used for, why to change it and what it has to do with wifi hacking.

Well, the truth is that they are simple questions. The MAC address is a unique identifier that each physical device has, such as your mobile phone or your television, and as I have already said, it allows devices to be identified, so when auditing Wi-Fi networks they can see your MAC address (identifier that sends the packets) and that is why it is good practice to change it with the tool macchanger(installed by default in Kali and Parrot).