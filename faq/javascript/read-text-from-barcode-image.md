---
layout: default-layout
title: How to read the text info usually located around a barcode image?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, text info, barcode image
description: How to read the text info usually located around a barcode image?
needAutoGenerateSidebar: false
---

# FAQ - JavaScript

## How to read the text info usually located around a barcode image?

In order to obtain the text info from a barcode image, we will need to use the `IRT_TEXT_ZONE` intermediate result type. So first we must set that via the runtime settings:

```javascript
let settings = await scanner.getRuntimeSettings();
settings.intermediateResultTypes = 
  Dynamsoft.DBR.EnumIntermediateResultType.IRT_TEXT_ZONE;
await scanner.updateRuntimeSettings(settings);
```

To collect or display the intermediate result(s) that are collected, then please refer to the [Advanced Usage](https://www.dynamsoft.com/barcode-reader/programming/javascript/user-guide/advanced-usage.html?ver=latest#display-the-intermediate-result-images-or-the-original-canvas) guide.