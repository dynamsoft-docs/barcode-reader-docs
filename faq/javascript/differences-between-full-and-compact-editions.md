---
layout: default-layout
title: What are the differences between the compact edition and the full edition?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, compact edition, full edition
description: What are the differences between the compact edition and the full edition?
needAutoGenerateSidebar: false
---

# FAQ - JavaScript

## What are the differences between the compact edition and the full edition? How do you switch between the two editions?

The main difference between the two is the set of supported barcode formats as well as the size of each edition.

**Compact edition** supports `1D`, `QR`, `PDF417`, and `Datamatrix` (the most popular barcode formats), while the **full edition** supports the complete set of Dynamsoft Barcode Reader’s supported barcode formats.
In terms of API methods, the full edition supports the following features while the compact does not: `getIntermediateCanvas`, `initRuntimeSettingsWithString`, and ` outputSettingsToString`.

As a result of that, the **compact edition** is smaller in size compared to the full edition, offering a slightly faster compilation time when the user first uses the application. Using the **compact edition** can also help in reducing the size of the compiled *wasm*.

By default, the SDK goes with the **full edition** of the Barcode Reader engine. If you would like to switch to the **compact edition**, please refer to the following [article](https://www.dynamsoft.com/barcode-reader/programming/javascript/user-guide/features-requirements.html#compact-and-full-editions).

To switch from the full edition to the compact edition, you need to set `_bUseFullFeature` to `false`

```javascript
Dynamsoft.DBR.BarcodeScanner._bUseFullFeature = false;
```
