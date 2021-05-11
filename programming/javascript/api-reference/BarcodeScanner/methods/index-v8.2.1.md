---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API Reference - BarcodeScanner Methods
description: This page shows BarcodeScanner Methods of Dynamsoft Barcode Reader JavaScript SDK.
keywords: methods, BarcodeScanner, api reference, javascript, js
needAutoGenerateSidebar: false
breadcrumbText: Methods
---

# `BarcodeScanner` Methods

## *Class* Methods

### Initialize

The following methods are related to the initialization of `BarcodeScanner` instances.

| Method               | Description |
|----------------------|-------------|
| [`createInstance`](initialize-and-destroy.md#createinstance) | Create a  `BarcodeScanner` instance. |
| [`detectEnvironment`](../BarcodeReader/methods/initialize-and-destroy.md#detectenvironment) | Detect the current environment. Inherited from the `BarcodeReader` class. |
| [`isLoaded`](../BarcodeReader/methods/initialize-and-destroy.md#isloaded) | Check if the decoding module is loaded. Inherited from the `BarcodeReader` class. |
| [`loadWasm`](../BarcodeReader/methods/initialize-and-destroy.md#loadwasm) | Manually load and compile the decoding WASM module. Inherited from the `BarcodeReader` class. |

## *Instance* Methods

The `BarcodeScanner` class is used for **video** decoding.

### Destroy

| Method               | Description |
|----------------------|-------------|
| [`destroy`](initialize-and-destroy.md#destroy) | Destroy the `BarcodeScanner` instance. |

### UI Element

| Method               | Description |
|----------------------|-------------|
| [`getUIElement`](initialize-and-destroy.md#getuielement) | Get HTML element containing the `BarcodeScanner` instance. |
| [`setUIElement`](initialize-and-destroy.md#setuielement) | Set html element containing the `BarcodeScanner` instance. |

### Camera Control

The following methods are related to controlling the camera and its settings.

| Method               | Description |
|----------------------|-------------|
| [`getAllCameras`](camera-controls.md#getallcameras) | Get information of all available cameras on the device. |
| [`getCurrentCamera`](camera-controls.md#getcurrentcamera) | Get information about the currently used camera. |
| [`setCurrentCamera`](camera-controls.md#setcurrentcamera) | Set camera by its information or device ID. |
| [`show`](camera-controls.md#show) | Show the camera UI element, open the camera, and start decoding. |
| [`hide`](camera-controls.md#hide) | Stop the camera and hide the camera UI element. |
| [`open`](camera-controls.md#open) | Open the camera. |
| [`close`](camera-controls.md#close) | Close and release the camera. |
| [`isOpen`](camera-controls.md#isopen) | Check if the camera is open. |
| [`play`](camera-controls.md#play) | Continue the video stream. |
| [`pause`](camera-controls.md#pause) | Pause the video stream. |
| [`stop`](camera-controls.md#stop) | Stop the video and release the camera. |
| [`pauseScan`](camera-controls.md#pausescan) | Pause the video decoding process. |
| [`resumeScan`](camera-controls.md#resumescan) | Resume the video decoding process. |

### Capture Settings

The following methods are related to the camera's capture settings.

| Method               | Description |
|----------------------|-------------|
| [`getCapabilities`](capture-settings.md#getcapabilities) | Get the camera capabilities. |
| [`getResolution`](capture-settings.md#getresolution) | Get current video resolution. |
| [`setResolution`](capture-settings.md#setresolution) | Set current video resolution. |
| [`getScanSettings`](capture-settings.md#getscansettings) | Get current scan settings. |
| [`updateScanSettings`](capture-settings.md#updatescansettings) | Modify and update scan settings. |
| [`getVideoSettings`](capture-settings.md#getvideosettings) | Get current video settings. |
| [`updateVideoSettings`](capture-settings.md#updatevideosettings) | Modify and update video settings. |
| [`setColorTemperature`](capture-settings.md#setcolortemperature) | Adjust the video colour temperature. |
| [`setExposureCompensation`](capture-settings.md#setexposurecompensation) | Adjust the video exposure level. |
| [`setFrameRate`](capture-settings.md#setframerate) | Adjust the video frame rate. |
| [`setZoom`](capture-settings.md#setzoom) | Adjust the video zoom ratio. |
| [`turnOnTorch`](capture-settings.md#turnontorch) | Turn on the torch/flashlight. |
| [`turnOffTorch`](capture-settings.md#turnofftorch) | Turn off the torch/flashlight. |

### Runtime Settings

The following methods are related to customizing runtime settings.

| Method               | Description |
|----------------------|-------------|
| [`getRuntimeSettings`](../BarcodeReader/methods/parameter-and-runtime-settings.md#getruntimesettings) | Get current runtime settings. Inherited from the `BarcodeReader` class. |
| [`resetRuntimeSettings`](../BarcodeReader/methods/parameter-and-runtime-settings.md#resetruntimesettings) | Reset runtime settings to default.Inherited from the `BarcodeReader` class. |
| [`updateRuntimeSettings`](runtime-settings.md#updateruntimesettings.md) | Modify and update the current runtime settings. |
| [`getModeArgument`](../BarcodeReader/methods/parameter-and-runtime-settings.md#getmodeargument) | Get argument value for the specified mode parameter. Inherited from the `BarcodeReader` class. |
| [`setModeArgument`](../BarcodeReader/methods/parameter-and-runtime-settings.md#setmodeargument) | Set argument value for the specified mode parameter. Inherited from the `BarcodeReader` class. |
