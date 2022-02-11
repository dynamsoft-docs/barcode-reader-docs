---
layout: default-layout
title: What is the difference between BarcodeReader class and the BarcodeScanner class? Can they be used interchangeably?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, barcodeReader, barcodeScanner
description: What is the difference between BarcodeReader class and the BarcodeScanner class? Can they be used interchangeably?
needAutoGenerateSidebar: false
---

# Tech Basic

## What is the difference between BarcodeReader class and the BarcodeScanner class? Can they be used interchangeably?

No both offers different functionality, the `BarcodeReader` class is used to decode static images (via one of the decode\* methods) and does not have the ability to open the camera stream and decode barcodes directly from the video stream. The `BarcodeScanner` class on the other hand does have the ability decode barcodes from a video input, but it can also deocde from a still image or capture an image using the camera when being used in singleFrameMode.
