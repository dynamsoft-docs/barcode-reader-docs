---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API Reference - BarcodeScanner Properties
description: This page shows BarcodeScanner Properties of Dynamsoft Barcode Reader JavaScript SDK.
keywords: defaultUIElementURL, singleFrameMode, soundOnSuccessfulRead, bPlaySoundOnSuccessfulRead, barcodeFillStyle, barcodeLineWidth, barcodeStrokeStyle, regionMaskFillStyle, regionMaskLineWidth, regionMaskStrokeStyle, onFrameRead, onPlayed, onUnduplicatedRead, properties, BarcodeScanner, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: false
---

# `BarcodeScanner` Properties

* *Class* Properties

| Property            | Description |
|----------------------|-------------|
| [`defaultUIElementURL`](#defaultuielementurl) | Get or set the default scanner UI. | 
| [`bUseFullFeature`](../BarcodeReader/properties.md#_busefullfeature) | If set to `true`, use the full-featured WASM module. Inherited from the `BarcodeReader` class. |
| [`engineResourcePath`](../BarcodeReader/properties.md#engineresourcepath) | Get or set the engine (WASM) location. Inherited from the `BarcodeReader` class. | 
| [`productKeys`](../BarcodeReader/properties.md#productkeys) | Get or set the Dynamsoft Barcode Reader SDK product keys. Inherited from the `BarcodeReader` class. | 
| [`version`](../BarcodeReader/properties.md#version) | Get the current version. Inherited from the `BarcodeReader` class. | 
| [`licenseServer`](../BarcodeReader/properties.md#licenseServer) | Specify by URL the license server from where authorization is acquired at runtime. Inherited from the `BarcodeReader` class. |
| [`handshakeCode`](../BarcodeReader/properties.md#handshakeCode) | Specify the Handshake Code which determines what authorization is acquired. Inherited from the `BarcodeReader` class. |
| [`sessionPassword`](../BarcodeReader/properties.md#sessionPassword) | Specify a password which protects the Handshake Code from abuse. Inherited from the `BarcodeReader` class. |

* *Instance* Properties

| Property             | Description |
|----------------------|-------------|
| `bDestroyed` | Indicates whether a `BarcodeScanner` instance has been destroyed. Inherited from the `BarcodeReader` class. |
| `bSaveOriCanvas` | If set to `true`, save the original image in `oriCanvas`. Inherited from the `BarcodeReader` class. |
| `oriCanvas` |  An [OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas) object that holds the original image. Inherited from the `BarcodeReader` class. |
| `_bUseWebgl` | Whether to enable image preprocessing with WebGL APIs, this API may change in the future. Inherited from the `BarcodeReader` class. |
| [`bPlaySoundOnSuccessfulRead`](#bplaysoundonsuccessfulread) | If set to `true`, a sound will be played when a barcode is read successfully. You can change the sound using [`soundOnSuccessfulRead`](#soundonsuccessfulread)|
| [`barcodeFillStyle`](#barcodefillstyle) | Set the style used when filling in located barcode. | 
| `barcodeLineWidth` | Set the width of the located barcode border. | 
| [`barcodeStrokeStyle`](#barcodestrokestyle) | Set the style of the located barcode border. | 
| [`regionMaskFillStyle`](#regionmaskfillstyle) | Set the style used when filling the mask beyond the region. | 
| `regionMaskLineWidth` | Set the width of the region border. | 
| [`regionMaskStrokeStyle`](#regionmaskstrokestyle) | Set the style of the region border. | 
| [`onFrameRead`](#onframeread) | Triggered a frame has been scanned. | 
| [`onPlayed`](#onplayed) | Triggered when the camera video stream is played. | 
| [`onUnduplicatedRead`](#onunduplicatedread) | Triggered when a new, unduplicated barcode is found. |
| [`singleFrameMode`](#singleframemode) | If set to `true`, single video frames will be used instead of a continuous video stream. | 
| [`soundOnSuccessfulRead`](#soundonsuccessfulread) | Get or set the sound to play when a barcode is read successfully. | 

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

Get or set the camera mode. If `true`, single video frames will be used instead of a continuous video stream. It's especially useful for cameras that lack webcam access (lack of WebRTC support, e.g. Chrome on iOS 14.2 and below).

```javascript
singleFrameMode = bool;
``` 

### Property Value

`bool` *boolean* 

### Sample

```javascript
let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
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

## bPlaySoundOnSuccessfulRead

Set when a sound is played if a barcode is read successfully. Default value is `false`, which does not play a sound. 

Use `frame` or `true` to play a sound when any barcode is found within a frame. Use `unduplicated` to play a sound only when any unique/unduplicated barcode is found within a frame.

```javascript
scanner.bPlaySoundOnSuccessfulRead = false;

scanner.bPlaySoundOnSuccessfulRead = true;

scanner.bPlaySoundOnSuccessfulRead = "frame";

scanner.bPlaySoundOnSuccessfulRead = "unduplicated";
```

## barcodeFillStyle

Set the style used when filling in the located barcode.

```javascript
barcodeFillStyle = "rgba(red, green, blue, alpha)"
```

### Property Values

- `red` *number*  
- `green` *number*  
- `blue` *number*  
- `alpha` *number*

## barcodeStrokeStyle

Set the style of the located barcode border.

```javascript
barcodeStrokeStyle = "rgba(red, green, blue, alpha)"
```

### Property Values

- `red` *number*  
- `green` *number*  
- `blue` *number*  
- `alpha` *number*

## regionMaskFillStyle

Set the style used when filling the mask beyond the region.

```javascript
regionMaskFillStyle = "rgba(red, green, blue, alpha)"
```

### Property Values

- `red` *number*  
- `green` *number*  
- `blue` *number*  
- `alpha` *number*

## regionMaskStrokeStyle

Set the style of the region border.

```javascript
regionMaskStrokeStyle = "rgb(red, green, blue)"
```

### Property Values

- `red` *number*  
- `green` *number*  
- `blue` *number*  

## onFrameRead

This event is triggered when a single frame has been scanned. The results object contains all the barcode results that the reader was able to decode.

### Type Declaration

```javascript
(results: TextResult[]): void
```

### Parameters

`results` [*`TextResult`*](interfaces.md#textresult)[]

### Return Value

`void`

### Sample

```javascript
scanner.onFrameRead = results => {
    for(let result of results){
        console.log(result.barcodeText);
    }
};
```
[Read barcodes from live camera](https://demo.dynamsoft.com/barcode-reader-js/)

## onPlayed

This event is triggered the camera video stream is played.

### Type Declaration

```javascript
(info: ScannerPlayCallbackInfo): void
```

### Parameters

`info` [*`ScannerPlayCallbackInfo`*](interfaces.md#scannerplaycallbackinfo)

### Return Value

`void`

### Sample

[Read barcodes from live camera](https://demo.dynamsoft.com/barcode-reader-js/)

## onUnduplicatedRead

This event is triggered when a new, unduplicated barcode is found. `txt` holds the barcode text result. `result` contains the actual barcode result, including the text result. Old barcodes will be remembered for [`duplicateForgetTime`](interfaces.md#scansettings).

### Type Declaration

```javascript
(txt: string, result: TextResult): void
```

### Parameters

- `txt` *string*   
- `result` [*`TextResult`*](../global-interfaces.md#textresult)[]

### Return Value

`void`

### Sample

```javascript
scanner.onUnduplicatedRead = (txt, result) => {
    alert(txt);
    console.log(result);
};
```

[Read barcodes from live camera](https://demo.dynamsoft.com/barcode-reader-js/)
