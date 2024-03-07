---
layout: default-layout
title: Is HTTPs absolutely required?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, HTTPS
description: Is HTTPs absolutely required?
needAutoGenerateSidebar: false
---

# Is HTTPS absolutely required?

[<< Back to FAQ index](index.md)

HTTPS is required to utilize `getUserMedia`/`MediaDevices` and initialize online license keys. If HTTPS is not enabled, you won't be able to use a camera and you will need an offline license key.

> 1. If you don't want to use a camera, you can enable [singleFrameMode](https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/BarcodeScanner/properties.html?ver=latest#singleframemode) to scan barcodes on exisiting images.
> 2. During evaluation & testing, you can use 'http://localhost' which allows camera usage as well as online licensing.

