---
layout: default-layout
title: How to avoid incorrect barcode results?
keywords: Dynamsoft Barcode Reader, FAQ, JavaScript, Troubleshooting / User Cases, avoid incorrect barcode results
description: How to avoid incorrect barcode results?
needAutoGenerateSidebar: false
---

# FAQ - JavaScript

## How to avoid incorrect barcode results?

- One method is to raise the value of `minResultConfidence` of the [RuntimeSettings](https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/interface/RuntimeSettings.html) to a value of 50 or higher. It is set to 30 by default.
- If the issue has to do with the length of the text result, you can try setting a minimum length for the barcode text(s) that are returned by the SDK. By setting the `minBarcodeTextLength` property of the [RuntimeSettings](https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/interface/RuntimeSettings.html), the SDK can ignore results that are consistently coming out shorter than expected.
