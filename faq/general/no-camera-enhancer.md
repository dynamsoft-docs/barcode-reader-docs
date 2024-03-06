---
layout: default-layout
title: How can I use CameraX or third-party camera modules with Dynamsoft Barcode Reader?
keywords: Dynamsoft Barcode Reader, FAQ, Mobile, tech basic, android, requirements
description: How can I use CameraX or third-party camera modules with Dynamsoft Barcode Reader?
needAutoGenerateSidebar: true
---

# How can I use CameraX or third-party camera modules with Dynamsoft Barcode Reader?

[<< Back to FAQ index](index.md)


You can read this [article](../samples/no-camera-enhancer.md) on how to use the video stream via CameraX such that the output frames from `CameraX` are converted into `imageData` which can be used as input for the barcode reader. If you would like to see a quick code snippet on how to convert these frames from `CameraX` into `ImageData`, please see it <a href="https://www.dynamsoft.com/barcode-reader/docs/mobile/programming/android/api-reference/primary-decode.html?ver=latest#get-imagedata-from-android-camera2" target="_blank">here</a>. 

> **_NOTE:_** The Barcode Reader decodes barcodes from an `ImageData` object. The `ImageData` object stores the pixel buffer, width, height, stride and pixel format of the image. *However, it is always recommended to use DBR in conjunction with DCE for the best results and performance*.