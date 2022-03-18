---
layout: default-layout
title: What is the difference between BarcodeReader class and the BarcodeScanner class? Can they be used interchangeably?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, barcodeReader, barcodeScanner
description: What is the difference between BarcodeReader class and the BarcodeScanner class? Can they be used interchangeably?
needAutoGenerateSidebar: false
---

# FAQ - JavaScript

## What is the difference between the BarcodeReader class and the BarcodeScanner class? Can they be used interchangeably?

No, as each offers a different functionality than the other. The `BarcodeReader` class is used to decode static images (via one of the decode\* methods) and does not have the ability to open the camera stream and decode barcodes directly from the video stream. The `BarcodeScanner` class on the other hand does have the ability to decode barcodes directly from a video input, but it can also decode a still image from local memory or capture a still image using the camera when `singleFrameMode` is toggled.