---
layout: default-layout
title: Why am I unable to scan an Aztec code in the helloworld sample?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, hello world sample, aztec code
description: Why am I unable to scan an Aztec code in the helloworld sample?
needAutoGenerateSidebar: false
---

# FAQ - JavaScript

## Why am I unable to scan an Aztec code in the helloworld sample?

The reason for this is that the JavaScript edition defaults to the `compact engine`, rather than the `full engine`. The compact engine currently only supports `1D`, `QR`, `PDF417`, and `DataMatrix` codes.

To switch to the full engine, please call the following before creating the `BarcodeReader/BarcodeScanner` instance:

```javascript
Dynamsoft.DBR.BarcodeScanner._bUseFullFeature = true;
```
