---
layout: default-layout
title: Sometimes the barcode reader SDK returns incorrect results with four or less characters. How to avoid it?
keywords: Dynamsoft Barcode Reader, FAQ, DBR Introduction, General, incorrect results
description: Sometimes the barcode reader SDK returns incorrect results with four or less characters. How to avoid it?
needAutoGenerateSidebar: false
permalink: /faq/general/avoid-incorrect-results.html
---

## Sometimes the Barcode Reader SDK returns incorrect results with four or less characters. How do you avoid that?

[<< Back to FAQ index](index.md)

One way to avoid this is to set the [minBarcodeTextLength](https://www.dynamsoft.com/barcode-reader/docs/server/programming/cplusplus/api-reference/simplified-barcode-reader-settings.html#:~:text=int%20minResultConfidence%3B-,int%20minBarcodeTextLength%3B,-char%20barcodeTextRegExPattern%5B) in [SimplifiedBarcodeReaderSettings](https://www.dynamsoft.com/barcode-reader/docs/server/programming/cplusplus/api-reference/simplified-barcode-reader-settings.html#:~:text=SimplifiedBarcodeReaderSettings-,SimplifiedBarcodeReaderSettings,-The%20SimplifiedBarcodeReaderSettings%20struct) of [SimplifiedCaptureVisionSettings](https://www.dynamsoft.com/capture-vision/docs/server/programming/cplusplus/api-reference/capture-vision-router/structs/simplified-capture-vision-settings.html?product=dbr&repoType=server) to the correct length that the barcode results should be. Say that the barcode results should at least be 10 characters long, and the results are sometimes coming out with just 6 or 7 characters. By setting the minBarcodeTextLength to 10, the SDK will ignore results that are shorter than 10 characters.
