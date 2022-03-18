---
layout: default-layout
title: How to read an inverted barcode?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, inverted barcode
description: How to read an inverted barcode?
needAutoGenerateSidebar: false
---

# FAQ - JavaScript

## How to read an inverted barcode?

Typically, normal barcode images include a dark barcode on a light background. An inverted image in this case would have a light barcode on a dark background instead. In order to read those types of barcodes, the `grayscaleTransformationModes` array of `furtherModes` must prioritize `GTM_INVERTED` like shown in the below example.

```javascript
settings.furtherModes.grayscaleTransformationMode[0] =
  Dynamsoft.DBR.EnumGrayscaleTransformationMode.GTM_INVERTED;
await scanner.updateRuntimeSettings(settings);
```
