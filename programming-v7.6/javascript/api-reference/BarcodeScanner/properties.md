---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API - BarcodeScanner Properties
description: This page shows BarcodeScanner Properties of Dynamsoft Barcode Reader JavaScript SDK.
keywords: bPlaySoundOnSuccessfulRead, barcodeFillStyle, barcodeLineWidth, barcodeStrokeStyle, regionMaskFillStyle, regionMaskLineWidth, regionMaskStrokeStyle, onFrameRead, onPlayed, onUnduplicatedRead, properties, BarcodeScanner, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# Javascript API Reference - `BarcodeScanner` Properties

| Property             | Description |
|----------------------|-------------|
| [`bPlaySoundOnSuccessfulRead`](#bplaysoundonsuccessfulread) | Set when a sound is played if a barcode is read successfully. |
| [`barcodeFillStyle`](#barcodefillstyle) | Set the style used when filling in located barcode. | 
| `barcodeLineWidth` | Set the width of the located barcode border. | 
| [`barcodeStrokeStyle`](#barcodestrokestyle) | Set the style of the located barcode border. | 
| [`regionMaskFillStyle`](#regionmaskfillstyle) | Set the style used when filling the mask beyond the region. | 
| `regionMaskLineWidth` | Set the width of the region border. | 
| [`regionMaskStrokeStyle`](#regionmaskstrokestyle) | Set the style of the region border. | 
| [`onFrameRead`](#onframeread) | Triggered a frame has been scanned. | 
| [`onPlayed`](#onplayed) | Triggered when the camera video stream is played. | 
| [`onUnduplicatedRead`](#onunduplicatedread) | Triggered when a new, unduplicated barcode is found. | 

### Inherited Properties From `BarcodeReader`

| Property             | Description |
|----------------------|-------------|
| [`_bUseFullFeature`](../BarcodeReader/properties.md#_busefullfeature) | If set to `true`, use the fully-featured WASM module. |
| `bDestroyed` | Indicates whether a `BarcodeScanner` object has been destroyed. | 
| `bSaveOriCanvas` | If set to `true`, save the original image to canvas. | 
| `oriCanvas` | The original canvas element. | 

---

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
[Read barcodes from live camera](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html)

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

[Read barcodes from live camera](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html)

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

[Read barcodes from live camera](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html)
