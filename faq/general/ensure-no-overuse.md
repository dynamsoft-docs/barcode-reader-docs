---
layout: default-layout
title: How to ensure that a device does not overuse its allotted number of instances?
keywords: Dynamsoft Barcode Reader, FAQ, Pricing/Licensing, General, ensure no overuse
description: How to ensure that a device does not overuse its allotted number of instances?
needAutoGenerateSidebar: false
permalink: /faq/general/ensure-no-overuse.html
---

# FAQ - General

## How to ensure that a device does not overuse its allotted number of instances?

Sometimes a device might run into an error that says that "Instance count is over limited". This occurs when a single device tries to create a new instance after one has already been created. By default, the max that a single device can have is one, so if you try to create more than that, the error is produced.

- One way to avoid this error from occurring is to check the number of allowed instances (on the local machine rather than the total available on this license) using the [GetIdleInstancesCount](https://www.dynamsoft.com/barcode-reader/programming/dotnet/api-reference/BarcodeReader/license.html?ver=latest#getidleinstancescount) method. If the result of that method is over 0 then proceed with creating the DBR instance, and no if not.
- If you would like for a single machine to be able to operate more than one instance, that can be defined using the [MaxConcurrentInstanceCount parameter](https://www.dynamsoft.com/barcode-reader/programming/dotnet/api-reference/class/DMDLSConnectionParameters.html?ver=latest#maxconcurrentinstancecount).
