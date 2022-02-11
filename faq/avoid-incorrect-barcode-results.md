---
layout: default-layout
title: How to avoid incorrect barcode results?
keywords: Dynamsoft Barcode Reader, FAQ, Troubleshooting / User Cases, avoid incorrect barcode results
description: How to avoid incorrect barcode results?
needAutoGenerateSidebar: false
---

# Troubleshooting / User Cases

## How to avoid incorrect barcode results?

- One method to try out is to raise the value of `minConfidenceResult` of the [RuntimeSettings](https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/interface/RuntimeSettings.html?ver=8.6.0) to a value of 50 or higher.
- If the issue has to do with the length of the text result, you can try setting it and more specifically that the length is consistently shorter than it should be, you can try setting the `minBarcodeTextLength` property of the RuntimeSettings.
