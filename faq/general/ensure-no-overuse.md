---
layout: default-layout
title: How to ensure that a device does not overuse its allotted number of instances?
keywords: Dynamsoft Barcode Reader, FAQ, Pricing/Licensing, General, ensure no overuse
description: How to ensure that a device does not overuse its allotted number of instances?
needAutoGenerateSidebar: false
permalink: /faq/general/ensure-no-overuse.html
---

## How to ensure that a device does not overuse its allotted number of instances?

[<< Back to FAQ index](index.md)

Sometimes a device might run into an error that says that "Instance count is over limited". This occurs when a single device tries to create a new instance after one has already been created. By default, the max that a single device can have is one, so if you try to create more than that, the error is produced.

- If you would like for a single machine to be able to operate more than one instance, that can be defined using the [SetMaxConcurrentInstanceCount](https://www.dynamsoft.com/capture-vision/docs/server/programming/cplusplus/api-reference/license/license-manager.html?product=dbr&repoType=server#setmaxconcurrentinstancecount) API.
