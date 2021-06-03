---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API - BarcodeReader
description: This page shows the BarcodeReader Class of Dynamsoft Barcode Reader JavaScript SDK.
keywords: BarcodeReader, api reference, javascript, js
needAutoGenerateSidebar: false
breadcrumbText: BarcodeReader
---


# Dynamsoft Barcode Reader SDK - Javascript BarcodeReader Class

The `BarcodeReader` class is used for **image** decoding.

## `BarcodeReader` Methods

### Initialize and Destroy

The following methods are related to initializing and destroying the `BarcodeReader` object.

| Method               | Description |
|----------------------|-------------|
| [`createInstance`](methods/initialize-and-destroy.md#createinstance) | Create a  `BarcodeReader` object. |
| [`destroy`](methods/initialize-and-destroy.md#destroy) | Destroy the `BarcodeReader` object. |
| [`detectEnvironment`](methods/initialize-and-destroy.md#detectenvironment) | Detect the current environment. |
| [`isLoaded`](methods/initialize-and-destroy.md#isloaded) | Check if the decoding module is loaded. |
| [`loadWasm`](methods/initialize-and-destroy.md#loadwasm) | Manually load and compile the decoding WASM module. |

### Decode

The following methods are related to decoding barcodes.

| Method               | Description |
|----------------------|-------------|
| [`decode`](methods/decode.md#decode) | Decode barcodes from images, binary data, URLs, and more. |
| [`decodeBase64String`](methods/decode.md#decodebase64string) | Decode barcodes from a base64 encoded string. |
| [`decodeBuffer`](methods/decode.md#decodebuffer) | Decode barcodes from raw buffer. |
| [`decodeUrl`](methods/decode.md#decodeurl) | Decode barcodes from a URL. |

### Parameter and Runtime Settings

The following methods are related to customizing mode and runtime settings.

| Method               | Description |
|----------------------|-------------|
| [`getModeArgument`](methods/parameter-and-runtime-settings.md#getmodeargument) | Get argument value for the specified mode parameter. |
| [`setModeArgument`](methods/parameter-and-runtime-settings.md#setmodeargument) | Set argument value for the specified mode parameter. |
| [`getRuntimeSettings`](methods/parameter-and-runtime-settings.md#getruntimesettings) | Get current runtime settings. |
| [`resetRuntimeSettings`](methods/parameter-and-runtime-settings.md#resetruntimesettings) | Reset runtime settings to default. |
| [`updateRuntimeSettings`](methods/parameter-and-runtime-settings.md#updateruntimesettings) | Modify and update the current runtime settings. |

## `BarcodeReader` Properties

| Property             | Description |
|----------------------|-------------|
| [`_bUseFullFeature`](properties.md#_busefullfeature) | If set to `true`, use the fully-featured WASM module. |
| `bDestroyed` | Indicates whether a `BarcodeScanner` object has been destroyed. | 
| `bSaveOriCanvas` | If set to `true`, save the original image to canvas. | 
| `oriCanvas` | The original canvas element. | 


## `BarcodeReader` Accessors

| Accessors            | Description |
|----------------------|-------------|
| [`engineResourcePath`](accessors.md#engineresourcepath) | Get or set the engine (WASM) location. | 
| [`productKeys`](accessors.md#productkeys) | Get or set the Dynamsoft Barcode Reader SDK product keys. | 
| [`version`](accessors.md#version) | Get current version. | 

