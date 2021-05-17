---
layout: default-layout
title: Dynamsoft Barcode Reader Objective-C & Swift API Reference - Camera Methods
description: This page shows Camera methods of Dynamsoft Barcode Reader for iOS SDK.
keywords: getIntermediateResult, Camera methods, api reference, objective-c, oc, swift
needAutoGenerateSidebar: true
---

# Objective-C API Reference - Camera Methods

| Method | Description |
|--------|-------------|
| [`SetCameraEnhancerParam`](#setcameraenhancerparam) | Set the parameters for Dynamsoft Camera Enhancer in Barcode reader |

This page illustrates the controlling of `Dynamsoft Camera Enhancer`. To get a better understanding of this section, please read more about [`Dynamsoft Camera Enhancer`](https://www.dynamsoft.com/camera-enhancer/docs/introduction/?ver=latest).

## SetCameraEnhancerParam

Set the callback parameters for Camera Enhancer

Objective-C:

```objectivec
DCESettingParameters* para = [[DCESettingsParameters alloc] init];
para.cameraInstance = _dce;
para.textResultDelegate = self;
[_barcodeReader setCameraEnhancerPara:para];
```

Swift:

```swift
let para = DCESettingParameters.init()
para.cameraInstance = dce
para.textResultDelegate = self
barcodeReader.setCameraEnhancerPara(para)
```
