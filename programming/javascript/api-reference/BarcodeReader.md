---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API - BarcodeReader
description: This page shows the BarcodeReader Class of Dynamsoft Barcode Reader JavaScript SDK.
keywords: BarcodeReader, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
breadcrumbText: BarcodeReader
---


# BarcodeReader

* `class BarcodeReader`

  The `BarcodeReader` class is used for decoding barcodes from images.

  ```js
  let reader = await Dynamsoft.DBR.BarcodeReader.createInstance();
  let results = await reader.decode(imageSource);
  for(let result of results){
    console.log(result.barcodeText);
  }
  ```

## Index

[**Initialize the Engine**](#initialize-the-engine)

| Static Property      | Description |
|----------------------|-------------|
| [engineResourcePath](#engineresourcepath) | Specifies the WASM engine URL. | 
| [_bUseFullFeature](#_busefullfeature) | If set to `true`, uses the full WASM engine. |

| Static Method        | Description |
|----------------------|-------------|
| [isLoaded](#isloaded) | Checks if the decoding module is loaded. |
| [loadWasm](#loadwasm) | Manually loads and compiles the decoding WASM module. |

<br>

[**Create and Destroy Instance**](#create-and-destroy-instance)

| Property             | Description |
|----------------------|-------------|
| [bDestroyed](#bdestroyed) | Indicates whether the instance has been destroyed. | 

| Static Method        | Description |
|----------------------|-------------|
| [createInstance](#createinstance) | Creates a `BarcodeReader` instance. |

| Method               | Description |
|----------------------|-------------|
| [destroy](#destroy) | Destroies the `BarcodeReader` instance. |

<br>

[**Decode Barcodes**](#decode-barcode)

| Method               | Description |
|----------------------|-------------|
| [decode](#decode) | Decodes barcodes from images, binary data, URLs, and more. |
| [decodeBase64String](#decodebase64string) | Decodes barcodes from a base64 encoded string. |
| [decodeUrl](#decodeurl) | Decodes barcodes from a URL. |
| [decodeBuffer](#decodebuffer) | Decodes barcodes from raw image data. |

<br>

[**Decoding Settings**](#decoding-settings)

| Method               | Description |
|----------------------|-------------|
| [getRuntimeSettings](#getruntimesettings) | Gets current runtime settings. |
| [updateRuntimeSettings](#updateruntimesettings) | Modifies and updates the current runtime settings. |
| [resetRuntimeSettings](#resetruntimesettings) | Resets runtime settings to default. |
| [getModeArgument](#getmodeargument) | Gets argument value for the specified mode parameter. |
| [setModeArgument](#setmodeargument) | Sets argument value for the specified mode parameter. |

<br>

[**License**](#license)

| Property            | Description |
|---------------------|-------------|
| [productKeys](#productkeys) | Gets or sets the Dynamsoft Barcode Reader SDK product keys. | 
| [licenseServer](#licenseserver) | Specifies the license server URL. |
| [handshakeCode](#handshakecode) | Uses Handshake Code to get authentication. |
| [organizationID](#organizationid) | Uses Organization ID to get authentication. |
| [sessionPassword](#sessionpassword) | Specifies a password to protect the Handshake Code from abuse. |

<br>

[**Others**](#other)

| Static Property     | Description |
|---------------------|-------------|
| [version](#version) | Gets the current product version. |

| Property            | Description |
|---------------------|-------------|
| [bSaveOriCanvas](#bsaveoricanvas) | If set to `true`, saves the original image in `oriCanvas` . |
| [oriCanvas](#oricanvas) |  An [canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas) object that holds the original image. |

| Static Method        | Description |
|----------------------|-------------|
| [detectEnvironment](#detectenvironment) | Detects environments and gets a report. |

## Initialize the Engine

### engineResourcePath

* `static` engineResourcePath: *string*

  Manually specifies the URL of Barcode Reader SDK engine (WASM) . The property needs to be set before [loadWasm](#loadwasm).

  ```js
  Dynamsoft.DBR.BarcodeReader.engineResourcePath = "https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.5/dist/";
  await Dynamsoft.DBR.BarcodeReader.loadWasm();
  ```

<br>

### _bUseFullFeature

* `static` _bUseFullFeature: *boolean* = false

  Whether to use full WASM engine. The property needs to be set before [loadWasm](#loadwasm). The default is 'false'.

   ```js
   DBR.BarcodeReader._bUseFullFeature = true;
   await DBR.BarcodeReader.loadWasm();
   ```
   Learn more about [differences between compact and full WASM engines](./user-guide/?ver=latest#specify-which-engine-to-use).

<br>

### isLoaded

* `static` isLoaded&#40;&#41;: *boolean*

  Checks if the decoding module is loaded.

<br>

### loadWasm

* `static` loadWasm&#40;&#41;: *Promise&lt;void&gt;*

  Before most operations, `loadWasm` needs to be excuted firstly.

  Most time, you do not need excute `loadWasm` manually. Because when you excute [createInstance](#createinstance), `loadWasm` will be excuted implicitly.
 
  Some properties can't be changed after `loadWasm`.
 
  Calling `loadWasm` in advance can avoid the long wait when `createInstance`. 
 
  ```js
  window.addEventListener('DOMContentLoaded', (event) => {
     DBR.BarcodeReader.loadWasm();
   });
  ```

<br>

## Create and Destroy Instance

### bDestroyed

* bDestroyed: *boolean*

  Indicates whether the instance has been destroyed.

<br>

### createInstance

* `static` createInstance&#40;&#41;: *Promise&lt;[BarcodeReader](#barcodereader)&gt;*

  Create a `BarcodeReader` instance.

   ```js
   let reader = await Dynamsoft.DBR.BarcodeReader.createInstance();
   ```

<br>

### destroy

* destroy&#40;&#41;: *Promise&lt;void&gt;*

  Destroies the `BarcodeReader` instance. If your page needs to create new instances from time to time, don't forget to destroy unused old instances to avoid possible memory leaks.

<br>

## Decode Barcode

### decode

* decode &#40;source: *[Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) &#124; [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer) &#124; [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) &#124; [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) &#124; [Uint8ClampedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)*<br>
  
  *&#124; [HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement) &#124; [HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement) &#124; [HTMLVideoElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement)*<br>
  
  *&#124; string*&#41;: *Promise&lt;[TextResult](./interface/TextResult.md)&#91;&#93;&gt;*

  Decodes barcodes from an image.

  The main decoding method can accept a variety of data types, including binary data, images, base64 (with MIME), URL, etc.

  The image format can be `png`, `jpeg`, `bmp`, `gif` and a few others (some browsers support `webp`, `tif`).

  ```js
  let results = await reader.decode(blob);
  for(let result of results){
      console.log(result.barcodeText);
  }

  let results2 = await reader.decode(htmlImageElement);
  let results2 = await reader.decode(url);
 
  // like `data:image/png;base64,iV************`
  let results3 = await reader.decode(strBase64WithMime);
  ```

  And you can get a frame from the `HTMLVideoElement` for barcode scanning.

  ```js
  // The frame currently played will be decoded.
  let results;
  try{
    results = await reader.decode(htmlVideoElement);
  }catch(ex){
    // If no frame in the video, throws an exception.   
  }
  ```
  If you need to continuously decode a video, you can use [BarcodeScanner](./BarcodeScanner.md) instead.

  *@see* [decodeBase64String](#decodebase64string), [decodeUrl](#decodeurl)

<br>

### decodeBase64String

* decodeBase64String&#40;base64: *string*&#41;: *Promise&lt;[TextResult](./interface/TextResult.md)&#91;&#93;&gt;*

  The decoding method can accept base64 with or without MIME.
  e.g. `data:image/jpg;base64,Xfjshekk....` or `Xfjshekk...`.
  
  ```js
  let results = await reader.decodeBase64String(strBase64);
  for(let result of results){
    console.log(result.barcodeText);
  }
  ```

<br>

### decodeUrl

* decodeUrl&#40;url: *string*&#41;: *Promise&lt;[TextResult](./interface/TextResult.md)&#91;&#93;&gt;*

  The decoding method can accept an URL. The URL source needs to be in the same domain or allowed Cross-Origin Resource Sharing (CORS).

  ```js
  let results = await reader.decodeUrl("./1.png");
  for(let result of results){
      console.log(result.barcodeText);
  }
  ```

<br>

### decodeBuffer

* decodeBuffer&#40;<br>
  &nbsp;&nbsp;&nbsp;&nbsp;buffer: *[Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) &#124; [Uint8ClampedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray) &#124; [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) &#124; [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) &#124; [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer)*,<br>
  &nbsp;&nbsp;&nbsp;&nbsp;width: *number*, height: *number*, stride: *number*,<br>
  &nbsp;&nbsp;&nbsp;&nbsp;format: *[EnumImagePixelFormat](./enum/EnumImagePixelFormat.md)*<br>
  &#41;: *Promise&lt;[TextResult](./interface/TextResult.md)&#91;&#93;&gt;*

  Decodes barcodes from raw image data.

<br>

## Decoding Settings

### getRuntimeSettings

* getRuntimeSettings&#40;&#41;: *Promise&lt;[RuntimeSettings](./interface/RuntimeSettings.md)&gt;*

  Gets current runtime settings.
  
  ```js
  let settings = await reader.getRuntimeSettings();
  settings.deblurLevel = 5;
  await reader.updateRuntimeSettings(settings);
  ```

<br>

### updateRuntimeSettings

* updateRuntimeSettings&#40;settings: *[RuntimeSettings](./interface/RuntimeSettings.md) &#124; string*&#41;: *Promise&lt;void&gt;*

  Updates runtime settings with a given struct or a string of `speed`, `balance` or `coverage` to use preset settings for `BarcodeReader`.
  
  The default runtime setting for BarcodeReader is `coverage`.

  ```js
  await reader.updateRuntimeSettings('balance');
  let settings = await reader.getRuntimeSettings();
  settings.barcodeFormatIds = Dynamsoft.DBR.EnumBarcodeFormat.BF_ONED;
  await reader.updateRuntimeSettings(settings);
  ```

<br>

### resetRuntimeSettings

* resetRuntimeSettings&#40;&#41;: *Promise&lt;void&gt;*

  Resets all parameters to default values.
  
  ```js
  await reader.resetRuntimeSettings();
  ```

<br>

### getModeArgument

* getModeArgument&#40;modeName: *string*, index: *number*, argumentName: *string*&#41;: *Promise&lt;string&gt;*

  Gets argument value for the specified mode parameter.
 
  ```js
  let argumentValue = await reader.getModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy");
  ```

  *@see* [C++ getModeArgument](https://www.dynamsoft.com/barcode-reader/programming/cplusplus/api-reference/cbarcodereader-methods/parameter-and-runtime-settings-basic.html?ver=latest#getmodeargument)

<br>

### setModeArgument

* setModeArgument&#40;modeName: *string*, index: *number*, argumentName: *string*, argumentValue: *string*&#41;: *Promise&lt;string&gt;*

  Sets argument value for the specified mode parameter.

  ```js
  await reader.setModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", "1");
  ```

  *@see* [C++ setModeArgument](https://www.dynamsoft.com/barcode-reader/programming/cplusplus/api-reference/cbarcodereader-methods/parameter-and-runtime-settings-basic.html?ver=latest#setmodeargument)

<br>

## License

### productKeys

* `static` productKeys: *string*

  Gets or sets the Dynamsoft Barcode Reader SDK product keys.
  
  ```js
  Dynamsoft.DBR.BarcodeReader.productKeys = "PRODUCT-KEYS";
  ```
  For convenience, you can set `productKeys` in `script` tag instead.
  
  ```html
  <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.5/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
  ```

<br>

### licenseServer

* `static` licenseServer: *string&#91;&#93; &#124; string*

  Specifies the license server URL.

<br>

### handshakeCode

* `static` handshakeCode: *string*

  Gets or sets the Dynamsoft Barcode Reader SDK handshake code. The `handshakeCode` is an alias of `productKeys`. Specifically refers to the key that requires network authentication.
  
  ```js
  Dynamsoft.DBR.BarcodeReader.handshakeCode = "123****-mytest";
  ```
  For convenience, you can set `handshakeCode` in `script` tag instead.

  ```html
  <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.5/dist/dbr.js" data-handshakeCode="123****-mytest"></script>
  ```

<br>

### organizationID

* `static` organizationID: *string*

  Use organization ID to get authentication from network. Keep handshakeCode empty if you want to use default [handshake](#handshakeCode) of the organization.

  ```js
  Dynamsoft.DBR.BarcodeReader.organizationID = "123****";
  ```
  For convenience, you can set `organizationID` in `script` tag instead.

  ```html
  <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.5/dist/dbr.js" data-organizationID="123****"></script>
  ```

<br>

### sessionPassword

* `static` sessionPassword: *string*

  Specifies a password to protect the [Handshake Code](#handshakeCode).

  ```js
  Dynamsoft.DBR.BarcodeReader.handshakeCode = "123****-mytest";
  Dynamsoft.DBR.BarcodeReader.sessionPassword = "@#$%****";
  ```
  For convenience, you can set `organizationID` in `script` tag instead.

  ```html
  <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.5/dist/dbr.js" data-handshakeCode="123****-mytest" data-sessionPassword="@#$%****"></script>
  ```

<br>

## Other

### bSaveOriCanvas

* bSaveOriCanvas: *boolean* = false;

  Whether to save the original image into canvas.

  ```js
  reader.bSaveOriCanvas = true;
  let results = await reader.decode(source);
  document.body.append(reader.oriCanvas);
  ```

<br>

### oriCanvas

* `readonly` oriCanvas: *[HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement) &#124; [OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas)*

  A [canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas) object that holds the original image.

  ```js
  reader.bSaveOriCanvas = true;
  let results = await reader.decode(source);
  document.body.append(reader.oriCanvas);
  ```

<br>

### version

* `readonly` `static` version: *string*

  Gets the current product version.
  Needs to call after [loadWasm](#loadwasm).

  ```js
  console.log(Dynamsoft.DBR.BarcodeReader.version); // "loading...(JS 8.2.5.20210426)"
  await Dynamsoft.DBR.BarcodeReader.loadWasm();
  console.log(Dynamsoft.DBR.BarcodeReader.version); // "8.4.0.8960(JS 8.2.5.20210426)"
  ```

<br>

### detectEnvironment

* `static` detectEnvironment&#40;&#41;: *Promise&lt;any&gt;*

  Detects environments and gets a report.

  ```js
  console.log(Dynamsoft.DBR.BarcodeReader.detectEnvironment());
  // {"wasm":true, "worker":true, "getUserMedia":true, "camera":true, "browser":"Chrome", "version":90, "OS":"Windows"}
  ```

<br>


