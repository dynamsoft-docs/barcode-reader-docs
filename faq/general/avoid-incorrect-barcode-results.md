---
layout: default-layout
title: How to avoid incorrect barcode results?
keywords: Dynamsoft Barcode Reader, FAQ, JavaScript, Troubleshooting / User Cases, avoid incorrect barcode results
description: How to avoid incorrect barcode results?
needAutoGenerateSidebar: false
---

# How to avoid incorrect barcode results?

[<< Back to FAQ index](index.md)

- One method is to raise the value of [minResultConfidence](https://www.dynamsoft.com/barcode-reader/docs/web/programming/javascript/api-reference/interface/RuntimeSettings.html#minresultconfidence) of the `RuntimeSettings` to a value of 50 or higher. It is set to 30 by default.
- If the issue has to do with the length of the text result, you can try setting a minimum length for the barcode text(s) that are returned by the SDK. By setting the [minBarcodeTextLength](https://www.dynamsoft.com/barcode-reader/docs/web/programming/javascript/api-reference/interface/RuntimeSettings.html#minbarcodetextlength) property of the `RuntimeSettings`, the SDK can ignore results that are consistently coming out shorter than expected.
