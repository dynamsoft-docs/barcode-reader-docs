---
layout: default-layout
title: Dynamsoft Barcode Reader Android API Reference - Camera Methods
description: This page shows Camera methods of Dynamsoft Barcode Reader for Android SDK.
keywords: Camera methods, BarcodeReader, api reference, android
needAutoGenerateSidebar: true
---


# Android API Reference - Camera Methods

| Method | Description |
|--------|-------------|
| `StartCameraEnhancer` | Start using Dynamsoft Camera Enhancer |
| `StopCameraEnhancer` | Stop using Dynamsoft Camera Enhancer |
| `PauseCameraEnhancer` | Pause the process of Dynamsoft Camera Enhancer |
| `ResumeCameraEnhancer` | Pause the process of Dynamsoft Camera Enhancer |
| `SetCameraEnhancerParam` | Set the parameters for Dynamsoft Camera Enhancer in Barcode reader |

This page illustrates the controlling of `Dynamsoft Camera Enhancer`. To get a better understanding of this section, please read more about [`Dynamsoft Camera Enhancer`](https://www.dynamsoft.com/camera-enhancer/docs/introduction/?ver=latest).

## Start, Stop, Pause, Resume Camera Enhancer

APIs that controlling the start, stop, pause and resume of  `Dynamsoft Camera Enhancer`.

Start

```java
    reader.StartCameraEnhancer();
```

Stop

```java
    reader.StopCameraEnhancer();
```

Pause

```java
    reader.PauseCameraEnhancer();
```

Resume

```java
    reader.ResumeCameraEnhancer();
```

## SetCameraEnhancerParam

Set the callback parameters for Camera Enhancer

```java
    DCESettingParameters dceSettingParameters = new DCESettingParameters();
    dceSettingParameters._cameraInstance = mCameraEnhancer;
    dceSettingParameters._textResultCallback = mTextResultCallback;
    dceSettingParameters._irtCallback = mIntermediateResultCallback;
    reader.SetCameraEnhancerParam(dceSettingParameters);
```
