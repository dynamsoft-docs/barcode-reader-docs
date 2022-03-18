---
layout: default-layout
title: Sometimes the barcode reader SDK returns incorrect results with four or less characters. How to avoid it?
keywords: Dynamsoft Barcode Reader, FAQ, DBR Introduction, General, incorrect results
description: Sometimes the barcode reader SDK returns incorrect results with four or less characters. How to avoid it?
needAutoGenerateSidebar: false
---

# FAQ - General

## Sometimes the Barcode Reader SDK returns incorrect results with four or less characters. How do you avoid that?

One way to avoid this is to set the [minBarcodeTextLength](https://www.dynamsoft.com/barcode-reader/programming/c-cplusplus/struct/PublicRuntimeSettings.html?src=cpp&&ver=latest#minbarcodetextlength) to the correct length that the barcode results should be. Say that the barcode results should at least be 10 characters long, and the results are sometimes coming out with just 6 or 7 characters. By setting the minBarcodeTextLength to 10, the SDK will ignore results that are shorter than 10 characters.
