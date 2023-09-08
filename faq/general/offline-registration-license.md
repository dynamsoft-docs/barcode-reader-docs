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


1. Download [UUID generation tool](https://download.dynamsoft.com/tools/GenerateUUID.zip) and run the UUID generation tool in your device.
> Note: If your device is an arm based architecture, please use get device uuid API to generate the uuid: 
> ```python
> # sample code in python
> print(BarcodeReader.get_device_uuid(1))
> ```
2. A `.Dynamsoft` folder is created in the current system user `home` directory(or root directory if the user has no home directory)
> Note: If you are want multiple users in operating system to use the license, you will need to move the .Dynamsoft folder to a path where all the users can access. Let us say `/Home/shared/.Dynamsoft`.
> For all the programs in the devices, you will need to set the license cache path to `/Home/shared` before initialize the license
> ```python
> # set license cache path before initialize the license
> BarcodeReader.set_license_cache_path("/Home/shared")
> ```
3. Go to the [license portal](https://www.dynamsoft.com/customer/license/).
4. Choose the offline registration license.
5. Click on add device, input the UUID and Device Name and click submit. New license should be generated.
6. Initialize the license in your program!

