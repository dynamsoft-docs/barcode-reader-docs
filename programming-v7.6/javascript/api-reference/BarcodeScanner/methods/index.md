---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API - BarcodeScanner Methods
description: This page shows BarcodeScanner Methods of Dynamsoft Barcode Reader JavaScript SDK.
keywords: methods, BarcodeScanner, api reference, javascript, js
needAutoGenerateSidebar: false
breadcrumbText: Methods
---


# Dynamsoft Barcode Reader SDK - Javascript  BarcodeScanner Methods

The `BarcodeScanner` class is used for **video** decoding.

## Initialize and Destroy
The following methods are related to initializing and destroying the `BarcodeScanner` object.

| Method               | Description |
|----------------------|-------------|
| [`createInstance`](initialize-and-destroy.md#createinstance) | Create a  `BarcodeScanner` object. |
| [`destroy`](initialize-and-destroy.md#destroy) | Destroy the `BarcodeScanner` object. |
| [`getUIElement`](initialize-and-destroy.md#getuielement) | Get HTML element containing the `BarcodeScanner` object. |
| [`setUIElement`](initialize-and-destroy.md#setuielement) | Set html element containing the `BarcodeScanner` object. |

## Camera Controls
The following methods are related to controlling the camera and its settings.

| Method               | Description |
|----------------------|-------------|
| [`getAllCameras`](camera-controls.md#getallcameras) | Get information of all available cameras on the device. |
| [`getCurrentCamera`](camera-controls.md#getcurrentcamera) | Get information about the currently used camera. |
| [`setCurrentCamera`](camera-controls.md#setcurrentcamera) | Set camera by its information or device ID. |
| [`hide`](camera-controls.md#hide) | Stop the camera and hide the camera UI element. |
| [`show`](camera-controls.md#show) | Show the camera UI element, open the camera, and start decoding. |
| [`close`](camera-controls.md#close) | Close and release the camera. |
| [`isOpen`](camera-controls.md#isopen) | Check if the camera is open. |
| [`open`](camera-controls.md#open) | Open the camera. |
| [`pause`](camera-controls.md#pause) | Pause the video stream. |
| [`play`](camera-controls.md#play) | Continue the video stream. |
| [`stop`](camera-controls.md#stop) | Stop the video and release the camera. |
| [`pauseScan`](camera-controls.md#pausescan) | Pause the video decoding process. |
| [`resumeScan`](camera-controls.md#resumescan) | Resume the video decoding process. |

## Capture Settings
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
| [`turnOffTorch`](capture-settings.md#turnofftorch) | Turn off the torch/flashlight. |
| [`turnOnTorch`](capture-settings.md#turnontorch) | Turn on the torch/flashlight. |


## Runtime Settings
The following methods are related to customizing runtime settings.

| Method               | Description |
|----------------------|-------------|
| [`updateRuntimeSettings`](runtime-settings.md#updateruntimesettings.md) | Modify and update the current runtime settings. |


## Inherited Methods
The following methods are inherited from the `BarcodeReader` class. 

* [`detectEnvironment`](../../BarcodeReader/methods/initialize-and-destroy.md#detectenvironment) 
* [`isLoaded`](../../BarcodeReader/methods/initialize-and-destroy.md#isloaded)
* [`loadWasm`](../../BarcodeReader/methods/initialize-and-destroy.md#loadwasm)
* [`getModeArgument`](../../BarcodeReader/methods/parameter-and-runtime-settings.md#getmodeargument) 
* [`setModeArgument`](../../BarcodeReader/methods/parameter-and-runtime-settings.md#setmodeargument) 
* [`getRuntimeSettings`](../../BarcodeReader/methods/parameter-and-runtime-settings.md#getruntimesettings) 
* [`resetRuntimeSettings`](../../BarcodeReader/methods/parameter-and-runtime-settings.md#resetruntimesettings)
