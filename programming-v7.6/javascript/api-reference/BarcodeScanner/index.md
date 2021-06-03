---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API - BarcodeScanner
description: This page shows the BarcodeScanner class of Dynamsoft Barcode Reader JavaScript SDK.
keywords: BarcodeScanner, api reference, javascript, js
needAutoGenerateSidebar: false
breadcrumbText: BarcodeScanner
---


# Dynamsoft Barcode Reader SDK - Javascript BarcodeScanner Class

The `BarcodeScanner` class is used for **video** decoding.

## `BarcodeScanner` Methods

### Initialize and Destroy

The following methods are related to initializing and destroying the `BarcodeScanner` object.

| Method               | Description |
|----------------------|-------------|
| [`createInstance`](methods/initialize-and-destroy.md#createinstance) | Create a  `BarcodeScanner` object. |
| [`destroy`](methods/initialize-and-destroy.md#destroy) | Destroy the `BarcodeScanner` object. |
| [`getUIElement`](methods/initialize-and-destroy.md#getuielement) | Get HTML element containing the `BarcodeScanner` object. |
| [`setUIElement`](methods/initialize-and-destroy.md#setuielement) | Set html element containing the `BarcodeScanner` object. |

### Camera Control

The following methods are related to controlling the camera and its settings.

| Method               | Description |
|----------------------|-------------|
| [`getAllCameras`](methods/camera-controls.md#getallcameras) | Get information of all available cameras on the device. |
| [`getCurrentCamera`](methods/camera-controls.md#getcurrentcamera) | Get information about the currently used camera. |
| [`setCurrentCamera`](methods/camera-controls.md#setcurrentcamera) | Set camera by its information or device ID. |
| [`hide`](methods/camera-controls.md#hide) | Stop the camera and hide the camera UI element. |
| [`show`](methods/camera-controls.md#show) | Show the camera UI element, open the camera, and start decoding. |
| [`close`](methods/camera-controls.md#close) | Close and release the camera. |
| [`isOpen`](methods/camera-controls.md#isopen) | Check if the camera is open. |
| [`open`](methods/camera-controls.md#open) | Open the camera. |
| [`pause`](methods/camera-controls.md#pause) | Pause the video stream. |
| [`play`](methods/camera-controls.md#play) | Continue the video stream. |
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
| [`turnOffTorch`](methods/capture-settings.md#turnofftorch) | Turn off the torch/flashlight. |
| [`turnOnTorch`](methods/capture-settings.md#turnontorch) | Turn on the torch/flashlight. |

### Runtime Settings

The following methods are related to customizing runtime settings.

| Method               | Description |
|----------------------|-------------|
| [`updateRuntimeSettings`](methods/runtime-settings.md#updateruntimesettings.md) | Modify and update the current runtime settings. |


### Inherited Methods

The following methods are inherited from the `BarcodeReader` class. 

* [`detectEnvironment`](../BarcodeReader/methods/initialize-and-destroy.md#detectenvironment) 
* [`isLoaded`](../BarcodeReader/methods/initialize-and-destroy.md#isloaded)
* [`loadWasm`](../BarcodeReader/methods/initialize-and-destroy.md#loadwasm)
* [`getModeArgument`](../BarcodeReader/methods/parameter-and-runtime-settings.md#getmodeargument) 
* [`setModeArgument`](../BarcodeReader/methods/parameter-and-runtime-settings.md#setmodeargument) 
* [`getRuntimeSettings`](../BarcodeReader/methods/parameter-and-runtime-settings.md#getruntimesettings) 
* [`resetRuntimeSettings`](../BarcodeReader/methods/parameter-and-runtime-settings.md#resetruntimesettings)

## `BarcodeScanner` Properties

| Property             | Description |
|----------------------|-------------|
| `bPlaySoundOnSuccessfulRead` | If set to `true`, a sound will be played when a barcode is read successfully. |
| [`barcodeFillStyle`](properties.md#barcodefillstyle) | Set the style used when filling in located barcode. | 
| `barcodeLineWidth` | Set the width of the located barcode border. | 
| [`barcodeStrokeStyle`](properties.md#barcodestrokestyle) | Set the style of the located barcode border. | 
| [`regionMaskFillStyle`](properties.md#regionmaskfillstyle) | Set the style used when filling the mask beyond the region. | 
| `regionMaskLineWidth` | Set the width of the region border. | 
| [`regionMaskStrokeStyle`](properties.md#regionmaskstrokestyle) | Set the style of the region border. | 
| [`onFrameRead`](properties.md#onframeread) | Triggered a frame has been scanned. | 
| [`onPlayed`](properties.md#onplayed) | Triggered when the camera video stream is played. | 
| [`onUnduplicatedRead`](properties.md#onunduplicatedread) | Triggered when a new, unduplicated barcode is found. | 

### Inherited Properties

The following properties are inherited from the `BarcodeReader` class.

* [`_bUseFullFeature`](../BarcodeReader/properties.md#_busefullfeature)  
* `bDestroyed`
* `bSaveOriCanvas`
* `oriCanvas`

## `BarcodeScanner` Accessors

| Accessors            | Description |
|----------------------|-------------|
| [`singleFrameMode`](accessors.md#singleframemode) | If set to `true`, single video frames will be used instead of a continuous video stream. | 
| [`soundOnSuccessfulRead`](accessors.md#soundonsuccessfulread) | Get or set the sound to play when a barcode is read successfully. | 
| [`defaultUIElementURL`](accessors.md#defaultuielementurl) | Get or set the default scanner UI. | 

### Inherited Accessors

The following accessors are inherited from the `BarcodeReader` class.

* [`engineResourcePath`](../BarcodeReader/accessors.md#engineresourcepath) 
* [`productKeys`](../BarcodeReader/accessors.md#productkeys) 
* [`version`](../BarcodeReader/accessors.md#version)

## `BarcodeScanner` Interfaces

| Interface            | Description |
|----------------------|-------------|
| [`FrameFilter`](interfaces.md#framefilter) | Filter and discard video frames while focusing. |
| [`ScanSettings`](interfaces.md#scansettings) | Configures the video stream settings. |
| [`ScannerPlayCallbackInfo`](interfaces.md#scannerplaycallbackinfo) | Stores the height and width constraints of the video stream. |
| [`VideoDeviceInfo`](interfaces.md#videodeviceinfo) | Stores the video device information. | 
