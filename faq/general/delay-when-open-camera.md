---
layout: default-layout
title: How to get rid of the delay when opening the camera?
keywords: Dynamsoft Barcode Reader, FAQ, delay,camera,loadwasm
description: How to get rid of the delay when opening the camera?
needAutoGenerateSidebar: false
---

# How to get rid of the delay when opening the camera?

[<< Back to FAQ index](index.md)


## 1. Invoke loadWasm in advance

```javascript
Dynamsoft.DBR.BarcodeReader.loadWasm();
```

## 2. Pre-open the camera in advance

Run the following code before calling `createInstance`.
```
navigator.mediaDevices.getUserMedia({video: true}).then(mediaStream=>{
  mediaStream.getTracks().forEach((track) => {
    track.stop();
  });
}, err=>{});
```

## 3. Skip Camera inspection(use default camera)

```javascript
scanner.ifSkipCameraInspection = true;
```
