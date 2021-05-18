---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API Reference - BarcodeReader
description: This page shows the BarcodeReader Class of Dynamsoft Barcode Reader JavaScript SDK.
keywords: BarcodeReader, api reference, javascript, js
needAutoGenerateSidebar: false
breadcrumbText: BarcodeReader
---

# Dynamsoft Barcode Reader SDK - JavaScript BarcodeReader Class

The `BarcodeReader` class is used for **image** decoding.

## `BarcodeReader` *Class* Methods

### Initialize

The following methods are related to the initialization of `BarcodeReader` instances.

| Method               | Description |
|----------------------|-------------|
| [`createInstance`](methods/initialize-and-destroy.md#createinstance) | Create a  `BarcodeReader` instance. |
| [`detectEnvironment`](methods/initialize-and-destroy.md#detectenvironment) | Detect the current environment. |
| [`isLoaded`](methods/initialize-and-destroy.md#isloaded) | Check if the decoding module is loaded. |
| [`loadWasm`](methods/initialize-and-destroy.md#loadwasm) | Manually load and compile the decoding WASM module. |

## `BarcodeReader` *Instance* Methods

### Destroy

| Method               | Description |
|----------------------|-------------|
| [`destroy`](methods/initialize-and-destroy.md#destroy) | Destroy the `BarcodeReader` instance. |

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
| [`getRuntimeSettings`](methods/parameter-and-runtime-settings.md#getruntimesettings) | Get current runtime settings. |
| [`resetRuntimeSettings`](methods/parameter-and-runtime-settings.md#resetruntimesettings) | Reset runtime settings to default. |
| [`updateRuntimeSettings`](methods/parameter-and-runtime-settings.md#updateruntimesettings) | Modify and update the current runtime settings. |
| [`getModeArgument`](methods/parameter-and-runtime-settings.md#getmodeargument) | Get argument value for the specified mode parameter. |
| [`setModeArgument`](methods/parameter-and-runtime-settings.md#setmodeargument) | Set argument value for the specified mode parameter. |

## `BarcodeReader` *Class* Properties

| Property            | Description |
|----------------------|-------------|
| [`_bUseFullFeature`](properties.md#_busefullfeature) | If set to `true`, use the full-featured WASM module. |
| [`engineResourcePath`](properties.md#engineresourcepath) | Get or set the engine (WASM) location. | 
| [`productKeys`](properties.md#productkeys) | Get or set the Dynamsoft Barcode Reader SDK product keys. | 
| [`version`](properties.md#version) | Get the current version. | 
| [`licenseServer`](properties.md#licenseServer) | Specify by URL the license server from where authorization is acquired at runtime. |
| [`organizationID`](properties.md#organizationid) | Specify the Organization ID which determines which licenses are available. |
| [`handshakeCode`](properties.md#handshakeCode) | Specify the Handshake Code which determines what authorization is acquired. |
| [`sessionPassword`](properties.md#sessionPassword) | Specify a password which protects the Handshake Code from abuse. | 

## `BarcodeReader` *Instance* Properties

| Property             | Description |
|----------------------|-------------|
| `bDestroyed` | Indicates whether a `BarcodeReader` instance has been destroyed. | 
| `bSaveOriCanvas` | If set to `true`, save the original image in `oriCanvas`. | 
| `oriCanvas`<sup>1</sup> |  An [OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas) object that holds the original image. |
| `_bUseWebgl` | Whether to enable image preprocessing with WebGL APIs, this API may change in the future. |

<sup>1</sup> The original canvas means the actual canvas which holds the image to be passed to the barcode reader engine for decoding. Read more [here]({{ site.js }}user-guide/advanced-customizations.html#display-the-intermediate-result-images-or-the-original-canvas).

