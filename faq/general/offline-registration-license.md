---
layout: default-layout
title: How to use offline registration license type?
keywords: Dynamsoft Barcode Reader, FAQ, offline, license type
description: How to use offline registration license type?
needAutoGenerateSidebar: false
permalink: /faq/general/non-english-characters.html
---

## How to use offline registration license type?

[<< Back to FAQ index](index.md)


1. Download [UUID generation tool](https://download.dynamsoft.com/tools/GenerateUUID.zip)
> Note: If your device is an arm based architecture, please use get device uuid API to generate the uuid: 
> ```python
> print(BarcodeReader.get_device_uuid(1))
> ```
2. Run the UUID generation tool(or get_device_uuid API if arm based architecture) in your device and it will create a .Dynamsoft folder in the system user home directory(or root directory if the user has no home directory)
> Note: If you are want multiple users in operating system to use the license, you will need to move the .Dynamsoft folder to a path where all the users can access. Let us say `/Home/shared/.Dynamsoft`.
> For all the programs in the devices, you will need to set the license cache path to `/Home/shared` before initialize the license
> ```python
> # set license cache path before initialize the license
> BarcodeReader.set_license_cache_path("/Home/shared")
> ```
3. Go to the [license portal](https://www.dynamsoft.com/customer/license/).
4. Choose the offline registration license.
5. Click on add device, input the UUID and Device Name and click submit.
6. You should see a new license is generated.
