---
title: "Running Debian Linux on an Apple Silicon Mac with HVF"
description: "A step-by-step guide to running Debian GNU/Linux on newer Macs using the Hypervisor.framework (HVF)."
date: 2023-09-23 15:00:00 +02:00
updated: 2023-11-05 20:30:00 +01:00
category: "web-development"
type: "article"
author: 1
---

## Running Debian on an Apple Silicon Mac via Hypervisor.framework (HVF)

Apple's shift to arm64-based Apple Silicon processors, such as the M1 and M2, has provided developers with powerful and energy-efficient Macs. However, these come with some limitations, notably that most software is not yet compatible with the new architecture. However, Debian GNU/Linux supports arm64, making it something that can run on this new hardware. This article will show you how to run Debian GNU/Linux on your Apple Silicon Mac using [Hypervisor.framework (HVF)](https://developer.apple.com/documentation/hypervisor).

Hypervisor.framework offers a way for developers to create virtual machines on macOS. While it may appear daunting at first, it's completely free of charge, and it's the official way to run virtual machines on macOS. Docker Desktop, for example, uses Hypervisor.framework to run Linux containers on macOS.

### Setting Up Debian (arm64) on Apple Silicon

Here's a comprehensive guide to getting Debian up and running on an Apple Silicon Mac.

#### 1. Prerequisites:
- A brave heart ready to face potential challenges.
- Familiarity with Linux and working with the Terminal.
- The `brew` package manager installed.
- Root access (via `sudo`), kinda obvious for this kind of stuff.

#### 2. Setting Up the Virtual Machine:

Let's keep it clean. Start by creating a directory for your VMs:

```sh
mkdir -p ~/VMs && cd $_
```

#### 3. Installing Necessary Packages:
To run VMs, you'll need some packages like QEMU:

```sh
brew install curl qemu libvirt virt-manager
```

#### 4. Creating a Virtual Disk Image:

Set up a virtual hard drive for Debian:
```sh
qemu-img create -f qcow2 debian-arm64.qcow2 20G
```

This creates a 20GB virtual hard drive for Debian. You can change the size to suit your needs.

#### 5. Downloading Essential Debian Components:

In this step, you'll download the kernel, initrd, and Debian netinstaller. These files will be used to install Debian on the virtual machine. You can download them using `curl`:

**Kernel**

```sh
curl -o debian-kernel-arm64 http://ftp.au.debian.org/debian/dists/stable/main/installer-arm64/current/images/netboot/debian-installer/arm64/linux
```

**Initial ramdisk (initrd)**

```sh
curl -o debian-initrd-arm64.gz http://ftp.au.debian.org/debian/dists/stable/main/installer-arm64/current/images/netboot/debian-installer/arm64/initrd.gz
```

**Debian netinstaller**

```sh
curl -o debian-stable-arm64-netinst.iso http://ftp.au.debian.org/debian/dists/stable/main/installer-arm64/current/images/netboot/mini.iso
```

#### 6. Preparing the (Virtual) System:

Before you can install Debian, you need to prepare the system. This involves copying a UEFI firmware file from QEMU and creating a file to store the virtual machine's UEFI variables:

```sh
cp $(dirname $(which qemu-img))/../share/qemu/edk2-aarch64-code.fd ~/VMs/
dd if=/dev/zero conv=sync bs=1m count=64 of=ovmf_vars.fd
```

The first command copies the `edk2-aarch64-code.fd` file to the VMs directory. This file is required to boot the virtual machine. The second command creates a 64MB file that will be used to store the virtual machine's UEFI variables, which are used to store the virtual machine's settings.

#### 7. Installing Debian:

Now that you've prepared the system, you can install Debian. To do this, you'll need to run the following command:

```sh
qemu-system-aarch64 -M virt -cpu host -smp 4 -m 1G -accel hvf \
                    -usb \
                    -cdrom "debian-stable-arm64-netinst.iso" \
                    -drive "format=raw,file=edk2-aarch64-code.fd,if=pflash,readonly=on" \
                    -drive "format=raw,file=ovmf_vars.fd,if=pflash" \
                    -drive "format=qcow2,file=debian-arm64.qcow2" \
                    -device virtio-gpu-pci \
                    -device usb-ehci \
                    -device usb-kbd \
                    -device usb-tablet \
                    -display cocoa,show-cursor=on
```

This command will start the virtual machine and boot the Debian installer. You can now install Debian as you would on a physical machine.

<details>
  <summary>Click to explain the command</summary>

  - `-M virt` tells QEMU to emulate a virtual machine.
  - `-cpu host` tells QEMU to use the CPU of the host machine. In this case, the host machine is a Mac with Apple Silicon (arm64), so the virtual machine will use the CPU directly, without emulation. This allows the virtual machine run on full speed.
  - `-smp 4` tells QEMU to use 4 CPU cores. You can change this to suit your needs, but keep in mind that Macs with Apple Silicon have a varying number of CPU cores, which are also split into performance and efficiency cores.
  - `-m 1G` tells QEMU to use 1GB of RAM. You can change this to suit your needs.
  - `-accel hvf` tells QEMU to use Hypervisor.framework (HVF) to accelerate the virtual machine.
  - `-usb` tells QEMU to emulate a USB controller.
  - `-cdrom "debian-stable-arm64-netinst.iso"` tells QEMU to use the Debian netinstaller as the virtual machine's CD-ROM drive.
  - `-drive "format=raw,file=edk2-aarch64-code.fd,if=pflash,readonly=on"` tells QEMU to use the `edk2-aarch64-code.fd` file as the virtual machine's UEFI firmware. This file is required to boot the virtual machine.
  - `-drive "format=raw,file=ovmf_vars.fd,if=pflash"` tells QEMU to use the `ovmf_vars.fd` file as the virtual machine's UEFI variables. This file is required to store the virtual machine's settings.
  - `-drive "format=qcow2,file=debian-arm64.qcow2"` tells QEMU to use the `debian-arm64.qcow2` file as the virtual machine's hard drive.
  - `-device virtio-gpu-pci` tells QEMU to emulate a graphics card.
  - `-device usb-ehci` tells QEMU to emulate a USB controller.
  - `-device usb-kbd` tells QEMU to emulate a USB keyboard.
  - `-device usb-tablet` tells QEMU to emulate a USB tablet.
  - `-display cocoa,show-cursor=on` tells QEMU to use the Cocoa display backend and show the cursor.

</details>

#### 8. **Booting Up the System**:

Once installation is complete, you can start the system:

```sh
qemu-system-aarch64 -M virt -cpu host -smp cores=4,threads=2,sockets=1 -m 1G -accel hvf \
                    -usb \
                    -drive "format=raw,file=edk2-aarch64-code.fd,if=pflash,readonly=on" \
                    -drive "format=raw,file=ovmf_vars.fd,if=pflash" \
                    -drive "format=qcow2,file=debian-arm64.qcow2" \
                    -device virtio-gpu-pci \
                    -device usb-ehci \
                    -device usb-kbd \
                    -device usb-tablet \
                    -display cocoa,show-cursor=on
```

### Conclusion

This article has shown you how to run Debian GNU/Linux on your Apple Silicon Mac using Hypervisor.framework (HVF). I hope you found it useful and that it helped you get started with using Debian on your Mac.

### Acknowledgements

I've gathered, adapted, and tailored the knowledge in this article from various sources to suit my specific needs. Here are the references I consulted during my research:

- [HVF Documentation](https://developer.apple.com/documentation/hypervisor)
- [StackOverflow: Header Files](https://stackoverflow.com/questions/43332877/does-autoconf-discover-header-files-present-on-system)
- [Sox Dev Mailing List](https://public-inbox.org/sox-devel/yw1xwo1snpza.fsf@mansr.com/T/)
- [Earthly Dev Blog](https://earthly.dev/blog/make-flags/)
- [OS Dev UEFI Wiki](https://wiki.osdev.org/UEFI)
- [Gist by Nrjdalal](https://gist.github.com/nrjdalal/e70249bb5d2e9d844cc203fd11f74c55)