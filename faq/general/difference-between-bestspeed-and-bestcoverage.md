---
layout: default-layout
title: What are the differences between the 'speed', 'coverage', 'balance, and 'single' runtime templates?
keywords: Dynamsoft Barcode Reader, FAQ, Troubleshooting / User Cases, speed, coverage
description: What are the differences between the 'speed', 'coverage', 'balance, and 'single' runtime templates?
needAutoGenerateSidebar: false
---

# What are the differences between the 'speed', 'coverage', 'balance, and 'single' runtime templates?

[<< Back to FAQ index](index.md)

`speed`, as the name suggests, prioritizes time cost over the accuracy of the results, and `coverage` is vice versa.

`balance` is the perfect middle ground between `speed` and `coverage`. 

Lastly, the `single` template is optimized for interactive video scenarios, and is the default mode when using the `BarcodeScanner` class.

In terms of the individual settings, if you would like to learn of the exact breakdown between the different templates, please contact the [Dynamsoft support team](https://www.dynamsoft.com/contact/).

To choose the runtime settings template that you want the SDK to utilize and learn about some of the other templates we offer, please use the [updateRuntimeSettings](https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/BarcodeReader.html#updateruntimesettings) method.
