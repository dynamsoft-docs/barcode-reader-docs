---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API Reference - BarcodeScanner
description: This page shows the BarcodeScanner class of Dynamsoft Barcode Reader JavaScript SDK.
keywords: BarcodeScanner, api reference, javascript, js
needAutoGenerateSidebar: false
breadcrumbText: BarcodeScanner
---

# Dynamsoft Barcode Reader SDK - JavaScript BarcodeScanner Class

The `BarcodeScanner` class is used for **video** decoding.

## `BarcodeScanner` *Class* Methods

### Initialize

The following methods are related to the initialization of `BarcodeScanner` instances.

| Method               | Description |
|----------------------|-------------|
| [`createInstance`](methods/initialize-and-destroy.md#createinstance) | Create a  `BarcodeScanner` instance. |
| [`detectEnvironment`](../BarcodeReader/methods/initialize-and-destroy.md#detectenvironment) | Detect the current environment. Inherited from the `BarcodeReader` class. |
| [`isLoaded`](../BarcodeReader/methods/initialize-and-destroy.md#isloaded) | Check if the decoding module is loaded. Inherited from the `BarcodeReader` class. |
| [`loadWasm`](../BarcodeReader/methods/initialize-and-destroy.md#loadwasm) | Manually load and compile the decoding WASM module. Inherited from the `BarcodeReader` class. |

## `BarcodeScanner` *Instance* Methods

### Destroy

| Method               | Description |
|----------------------|-------------|
| [`destroy`](methods/initialize-and-destroy.md#destroy) | Destroy the `BarcodeScanner` instance. |

### UI Element

| Method               | Description |
|----------------------|-------------|
| [`getUIElement`](methods/initialize-and-destroy.md#getuielement) | Get HTML element containing the `BarcodeScanner` instance. |
| [`setUIElement`](methods/initialize-and-destroy.md#setuielement) | Set html element containing the `BarcodeScanner` instance. |

### Camera Control

The following methods are related to controlling the camera and its settings.

| Method               | Description |
|----------------------|-------------|
| [`getAllCameras`](methods/camera-controls.md#getallcameras) | Get information of all available cameras on the device. |
| [`getCurrentCamera`](methods/camera-controls.md#getcurrentcamera) | Get information about the currently used camera. |
| [`setCurrentCamera`](methods/camera-controls.md#setcurrentcamera) | Set camera by its information or device ID. |
| [`show`](methods/camera-controls.md#show) | Show the camera UI element, open the camera, and start decoding. |
| [`hide`](methods/camera-controls.md#hide) | Stop the camera and hide the camera UI element. |
| [`open`](methods/camera-controls.md#open) | Open the camera. |
| [`close`](methods/camera-controls.md#close) | Close and release the camera. |
| [`isOpen`](methods/camera-controls.md#isopen) | Check if the camera is open. |
| [`play`](methods/camera-controls.md#play) | Continue the video stream. |
| [`pause`](methods/camera-controls.md#pause) | Pause the video stream. |
| [`stop`](methods/camera-controls.md#stop) | Stop the video and release the camera. |
| [`pauseScan`](methods/camera-controls.md#pausescan) | Pause the video decoding process. |
| [`resumeScan`](methods/camera-controls.md#resumescan) | Resume the video decoding process. |

### Capture Settings

The following methods are related to the camera's capture settings.

| Method               | Description |
|----------------------|-------------|
| [`getCapabilities`](methods/capture-settings.md#getcapabilities) | Get the camera capabilities. |
| [`getResolution`](methods/capture-settings.md#getresolution) | Get current video resolution. |
| [`setResolution`](methods/capture-settings.md#setresolution) | Set current video resolution. |
| [`getScanSettings`](methods/capture-settings.md#getscansettings) | Get current scan settings. |
| [`updateScanSettings`](methods/capture-settings.md#updatescansettings) | Modify and update scan settings. |
| [`getVideoSettings`](methods/capture-settings.md#getvideosettings) | Get current video settings. |
| [`updateVideoSettings`](methods/capture-settings.md#updatevideosettings) | Modify and update video settings. |
| [`setColorTemperature`](methods/capture-settings.md#setcolortemperature) | Adjust the video colour temperature. |
| [`setExposureCompensation`](methods/capture-settings.md#setexposurecompensation) | Adjust the video exposure level. |
| [`setFrameRate`](methods/capture-settings.md#setframerate) | Adjust the video frame rate. |
| [`setZoom`](methods/capture-settings.md#setzoom) | Adjust the video zoom ratio. |
| [`turnOnTorch`](methods/capture-settings.md#turnontorch) | Turn on the torch/flashlight. |
| [`turnOffTorch`](methods/capture-settings.md#turnofftorch) | Turn off the torch/flashlight. |

### Runtime Settings

The following methods are related to customizing runtime settings.

| Method               | Description |
|----------------------|-------------|
| [`getRuntimeSettings`](../BarcodeReader/methods/parameter-and-runtime-settings.md#getruntimesettings) | Get current runtime settings. Inherited from the `BarcodeReader` class. |
| [`resetRuntimeSettings`](../BarcodeReader/methods/parameter-and-runtime-settings.md#resetruntimesettings) | Reset runtime settings to default.Inherited from the `BarcodeReader` class. |
| [`updateRuntimeSettings`](methods/runtime-settings.md#updateruntimesettings.md) | Modify and update the current runtime settings. |
| [`getModeArgument`](../BarcodeReader/methods/parameter-and-runtime-settings.md#getmodeargument) | Get argument value for the specified mode parameter. Inherited from the `BarcodeReader` class. |
| [`setModeArgument`](../BarcodeReader/methods/parameter-and-runtime-settings.md#setmodeargument) | Set argument value for the specified mode parameter. Inherited from the `BarcodeReader` class. |

## `BarcodeScanner` *Class* Properties

| Property            | Description |
|----------------------|-------------|
| [`defaultUIElementURL`](properties.md#defaultuielementurl) | Get or set the default scanner UI. | 
| [`_bUseFullFeature`](../BarcodeReader/properties.md#_busefullfeature) | If set to `true`, use the full-featured WASM module. Inherited from the `BarcodeReader` class. |
| [`engineResourcePath`](../BarcodeReader/properties.md#engineresourcepath) | Get or set the engine (WASM) location. Inherited from the `BarcodeReader` class. | 
| [`productKeys`](../BarcodeReader/properties.md#productkeys) | Get or set the Dynamsoft Barcode Reader SDK product keys. Inherited from the `BarcodeReader` class. | 
| [`version`](../BarcodeReader/properties.md#version) | Get the current version. Inherited from the `BarcodeReader` class. | 
| [`licenseServer`](../BarcodeReader/properties.md#licenseServer) | Specify by URL the license server from where authorization is acquired at runtime. Inherited from the `BarcodeReader` class. |
| [`handshakeCode`](../BarcodeReader/properties.md#handshakeCode) | Specify the Handshake Code which determines what authorization is acquired. Inherited from the `BarcodeReader` class. |
| [`sessionPassword`](../BarcodeReader/properties.md#sessionPassword) | Specify a password which protects the Handshake Code from abuse. Inherited from the `BarcodeReader` class. |

## `BarcodeScanner` *Instance* Properties

| Property             | Description |
|----------------------|-------------|
| `bDestroyed` | Indicates whether a `BarcodeScanner` instance has been destroyed. Inherited from the `BarcodeReader` class. |
| `bSaveOriCanvas` | If set to `true`, save the original image in `oriCanvas`. Inherited from the `BarcodeReader` class. |
| `oriCanvas` |  An [OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas) object that holds the original image. Inherited from the `BarcodeReader` class. |
| `_bUseWebgl` | Whether to enable image preprocessing with WebGL APIs, this API may change in the future. Inherited from the `BarcodeReader` class. |
| `bPlaySoundOnSuccessfulRead` | If set to `true`, a sound will be played when a barcode is read successfully. You can change the sound using [`soundOnSuccessfulRead`](properties.md#soundonsuccessfulread)|
| [`barcodeFillStyle`](properties.md#barcodefillstyle) | Set the style used when filling in located barcode. | 
| `barcodeLineWidth` | Set the width of the located barcode border. | 
| [`barcodeStrokeStyle`](properties.md#barcodestrokestyle) | Set the style of the located barcode border. | 
| [`regionMaskFillStyle`](properties.md#regionmaskfillstyle) | Set the style used when filling the mask beyond the region. | 
| `regionMaskLineWidth` | Set the width of the region border. | 
| [`regionMaskStrokeStyle`](properties.md#regionmaskstrokestyle) | Set the style of the region border. | 
| [`onFrameRead`](properties.md#onframeread) | Triggered a frame has been scanned. | 
| [`onPlayed`](properties.md#onplayed) | Triggered when the camera video stream is played. | 
| [`onUnduplicatedRead`](properties.md#onunduplicatedread) | Triggered when a new, unduplicated barcode is found. |
| [`singleFrameMode`](properties.md#singleframemode) | If set to `true`, single video frames will be used instead of a continuous video stream. | 
| [`soundOnSuccessfulRead`](properties.md#soundonsuccessfulread) | Get or set the sound to play when a barcode is read successfully. | 

## `BarcodeScanner` Interfaces

| Interface            | Description |
|----------------------|-------------|
| [`FrameFilter`](interfaces.md#framefilter) | Filter and discard video frames while focusing. |
| [`ScanSettings`](interfaces.md#scansettings) | Configures the video stream settings. |
| [`ScannerPlayCallbackInfo`](interfaces.md#scannerplaycallbackinfo) | Stores the height and width constraints of the video stream. |
| [`VideoDeviceInfo`](interfaces.md#videodeviceinfo) | Stores the video device information. | 
