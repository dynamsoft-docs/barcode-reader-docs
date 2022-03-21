---
layout: default-layout
title: Is HTTPs absolutely required?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, HTTPS
description: Is HTTPs absolutely required?
needAutoGenerateSidebar: false
---

# FAQ - JavaScript

## Is HTTPS absolutely required?

HTTPS is required to utilize `getUserMedia`/`MediaDevices`. If HTTPS is not enabled, and those features are not utilized, the library will default to [singleFrameMode](https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/BarcodeScanner/properties.html?ver=latest#singleframemode) and will not have live video capabilities.
