---
layout: default-layout
title: What is the difference between BarcodeReader class and the BarcodeScanner class? Can they be used interchangeably?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, barcodeReader, barcodeScanner
description: What is the difference between BarcodeReader class and the BarcodeScanner class? Can they be used interchangeably?
needAutoGenerateSidebar: false
---

# What is the difference between the BarcodeReader class and the BarcodeScanner class? Can they be used interchangeably?

[<< Back to FAQ index](index.md)

No, as each offers a different functionality than the other. The `BarcodeReader` class is used to decode static images (via one of the [decode\*](https://www.dynamsoft.com/barcode-reader/docs/web/programming/javascript/api-reference/BarcodeReader.html#decode-barcodes) methods) and does not have the ability to open the camera stream and decode barcodes directly from the video stream. 

The `BarcodeScanner` class on the other hand has the ability to decode barcodes directly from a video input, but it can also capture a still image using the camera when `singleFrameMode` is toggled.
