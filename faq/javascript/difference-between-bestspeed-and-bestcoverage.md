---
layout: default-layout
title: What are the differences between the 'speed', 'coverage', 'balance, and 'single' runtime templates?
keywords: Dynamsoft Barcode Reader, FAQ, Troubleshooting / User Cases, speed, coverage
description: What are the differences between the 'speed', 'coverage', 'balance, and 'single' runtime templates?
needAutoGenerateSidebar: false
---

# FAQ - JavaScript

## What are the differences between the 'speed', 'coverage', 'balance, and 'single' runtime templates?

`speed`, as the name suggests, prioritizes time cost over the accuracy of the results, and `coverage` is vice versa. 

`balance` is the perfect middle ground between `speed` and `coverage`. Lastly, the `single` template is optimized for interactive video scenarios, and is recommended when using the `BarcodeScanner` class.

In terms of the individual settings, the exact breakdown between the different templates is explained [here](https://www.dynamsoft.com/barcode-reader/parameters/structure-and-interfaces-of-parameters.html?ver=latest#using-runtime-settings-templates).

To choose the runtime settings template that you want the SDK to utilize, please use the [`updateRuntimeSettings`](https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/BarcodeReader.html#updateruntimesettings) method.