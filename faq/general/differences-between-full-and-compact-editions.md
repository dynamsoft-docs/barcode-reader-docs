---
layout: default-layout
title: What are the differences between the compact edition and the full edition?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, compact edition, full edition
description: What are the differences between the compact edition and the full edition?
needAutoGenerateSidebar: false
---

# What are the differences between the compact edition and the full edition? How do you switch between the two editions?

[<< Back to FAQ index](index.md)

*Please note that starting from v8.6 of the JavaScript Edition, the default engine that the library uses is the **full edition** engine.*

The main difference between the two is the set of supported barcode formats as well as the size of each edition. For the full list of differences between the two, please refer to this [article](https://www.dynamsoft.com/barcode-reader/programming/javascript/user-guide/features-requirements.html#compact-and-full-editions).

**Compact edition** supports `1D`, `QR`, `PDF417`, and `Datamatrix` (the most popular barcode formats), while the **full edition** supports the complete set of Dynamsoft Barcode Reader's supported barcode formats.
In terms of API methods, the full edition supports the following features while the compact does not: `getIntermediateCanvas`, `initRuntimeSettingsWithString`, and ` outputSettingsToString`.

As a result of that, the **compact edition** is smaller in size compared to the full edition, offering a slightly faster compilation time when the user first uses the application. Using the **compact edition** can also help in reducing the size of the compiled *wasm*.

To switch from the full edition to the compact edition, you need to set `_bUseFullFeature` to `false` before `createInstance` or `loadWasm` is called.

```javascript
Dynamsoft.DBR.BarcodeScanner._bUseFullFeature = false;
```