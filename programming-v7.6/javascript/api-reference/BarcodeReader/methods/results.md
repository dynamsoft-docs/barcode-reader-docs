---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API - BarcodeReader Result Methods
description: This page shows BarcodeReader Result methods of Dynamsoft Barcode Reader JavaScript SDK.
keywords: getIntermediateResults, result methods, BarcodeReader, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# Javascript API Reference - `BarcodeReader` Result Methods

| Method             | Description |
|----------------------|-------------|
| [`getIntermediateResults`](#getintermediateresults) | Get intermediate results. |

---

## getIntermediateResults

Get the intermediate results containing the original image, colour clustered image, binarized image, contours, lines, etc.

The method is only supported in the **full feature edition**.

```javascript
getIntermediateResults() returns Promise
```

### Return Value

`Promise<any>`

### Sample

[Read barcodes from live camera](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html)
