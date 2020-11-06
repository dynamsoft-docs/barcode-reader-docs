---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API Reference - BarcodeScanner Accessors
description: This page shows BarcodeScanner Accessors of Dynamsoft Barcode Reader JavaScript SDK.
keywords: defaultUIElementURL, singleFrameMode, soundOnSuccessfulRead, accessors, BarcodeScanner, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# Javascript API Reference - `BarcodeScanner` Accessors

| Accessors            | Description |
|----------------------|-------------|
| [`defaultUIElementURL`](#defaultuielementurl) | Get or set the default scanner UI. | 
| [`singleFrameMode`](#singleframemode) | If set to `true`, single video frames will be used instead of a continuous video stream. | 
| [`soundOnSuccessfulRead`](#soundonsuccessfulread) | Get or set the sound to play when a barcode is read successfully. | 

### Inherited Accessors from `BarcodeReader` 

| Accessors            | Description |
|----------------------|-------------|
| [`engineResourcePath`](../BarcodeReader/accessors.md#engineresourcepath) | Get or set the engine (WASM) location. | 
| [`productKeys`](../BarcodeReader/accessors.md#productkeys) | Get or set the Dynamsoft Barcode Reader SDK product keys. | 
| [`version`](../BarcodeReader/accessors.md#version) | Get current version. |

## defaultUIElementURL

Get or set the default scanner UI. The default scanner UI is defined in the file `dist/dbr.scanner.html`. Follow [these steps](../../user-guide/basic-customizations.md#customizing-the-ui) to customize the UI. 

```javascript
defaultUIElementURL = 'url'
```

### Property Value

`url` *string*  

### :+1: Tips and Tricks 

* Be sure to set `defaultUIElementURL` before you call `createInstance`.

## singleFrameMode

Get or set the camera mode. If `true`, single video frames will be used instead of a continuous video stream. It's especially useful for cameras that lack webcam access (lack of WebRTC support, e.g. Chrome on iOS).

```javascript
singleFrameMode = bool;
``` 

### Property Value

`bool` *boolean* 

### Sample

```javascript
let scanner = await Dynamsoft.BarcodeScanner.createInstance();
scanner.singleFrameMode = true; // use singleFrameMode anyway
scanner.show();
```

### :+1: Tips and Tricks 

* `singleFrameMode` is based on WebRTC support, not actual camera connection. In other words, if a browser supports WebRTC, it won't be using `singleFrameMode` by default even when there is no camera attached.

* By default, when the default UI is used, a camera icon will appear for the `singleFrameMode` which is defined by a SVG (`className` is `dbrScanner-bg-camera`). If you have customized the UI, you will have to provide your own UI implementation for this mode.

## soundOnSuccessfulRead

Get or set the sound played when a barcode is read successfully. 

```javascript
soundOnSuccessfulRead = audio
```

### Property Value

`audio` *HTMLAudioElement*  

### Sample

```javascript
scanner.soundOnSuccessfulRead = new Audio("./pi.mp3");
```