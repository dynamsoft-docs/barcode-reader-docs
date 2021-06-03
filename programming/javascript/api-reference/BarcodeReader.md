---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API Reference - BarcodeReader
description: This page shows the BarcodeReader Class of Dynamsoft Barcode Reader JavaScript SDK.
keywords: BarcodeReader, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
breadcrumbText: BarcodeReader
---

Dynamsoft Barcode Reader SDK - JavaScript API
# BarcodeReader

* `class` BarcodeReader

> The `BarcodeReader` class is used for **image** decoding.
>
> Comparing to [BarcodeScanner](./BarcodeScanner.md), the default [decoding settings](#decoing-settings) are more accurate but slower.
>
> ```js
> let reader = await Dynamsoft.DBR.BarcodeReader.createInstance();
> let results = await reader.decode(imageSource);
> for(let result of results){
>   console.log(result.barcodeText);
> }
> ```

<br>

## Index

> [**Initialize the Engine**](#initialize-the-engine)
>
> | Static Property      | Description |
> |----------------------|-------------|
> | [engineResourcePath](#engineresourcepath) | Specify the engine (WASM) url. | 
> | [_bUseFullFeature](#_busefullfeature) | If set to `true`, use the full-featured WASM module. |
>
> | Static Method        | Description |
> |----------------------|-------------|
> | [isLoaded](#isloaded) | Check if the decoding module is loaded. |
> | [loadWasm](#loadwasm) | Manually load and compile the decoding WASM module. |

<br>

> [**Create and Destroy Instance**](#create-and-destroy-instance)
>
> | Property             | Description |
> |----------------------|-------------|
> | [bDestroyed](#bdestroyed) | Indicates whether the instance has been destroyed. | 
>
> | Static Method        | Description |
> |----------------------|-------------|
> | [createInstance](#createinstance) | Create a `BarcodeReader` instance. |
>
> | Method               | Description |
> |----------------------|-------------|
> | [destroy](#destroy) | Destroy the `BarcodeReader` instance. |

<br>

> [**Decode Barcode**](#decode-barcode)
>
> | Method               | Description |
> |----------------------|-------------|
> | [decode](#decode) | Decode barcodes from images, binary data, URLs, and more. |
> | [decodeBase64String](#decodebase64string) | Decode barcodes from a base64 encoded string. |
> | [decodeUrl](#decodeurl) | Decode barcodes from a URL. |
> | [decodeBuffer](#decodebuffer) | Decode barcodes from raw image data. |

<br>

> [**Decoding Settings**](#decoding-settings)
>
> Changing the barcode decoding process will affect the speed and accuracy.
>
> | Method               | Description |
> |----------------------|-------------|
> | [getRuntimeSettings](#getruntimesettings) | Get current runtime settings. |
> | [updateRuntimeSettings](#updateruntimesettings) | Modify and update the current runtime settings. |
> | [resetRuntimeSettings](#resetruntimesettings) | Reset runtime settings to default. |
> | [getModeArgument](#getmodeargument) | Get argument value for the specified mode parameter. |
> | [setModeArgument](#setmodeargument) | Set argument value for the specified mode parameter. |

<br>

> [**License**](#license)
>
> | Property            | Description |
> |---------------------|-------------|
> | [productKeys](#productkeys) | Get or set the Dynamsoft Barcode Reader SDK product keys. | 
> | [licenseServer](#licenseserver) | Specify the license server URL. |
> | [handshakeCode](#handshakecode) | Use Handshake Code to get authentication from network. |
> | [organizationID](#organizationid) | Use organization ID to get authentication from network. |
> | [sessionPassword](#sessionpassword) | Specify a password to protect the Handshake Code from abuse. |

<br>

> [**Other**](#other)
>
> | Static Property     | Description |
> |---------------------|-------------|
> | [version](#version) | Get the current version. |
>
> | Property            | Description |
> |---------------------|-------------|
> | [bSaveOriCanvas](#bsaveoricanvas) | If set to `true`, save the original image in `oriCanvas`. |
> | [oriCanvas](#oricanvas) |  An [canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas) object that holds the original image. |
>
> | Static Method        | Description |
> |----------------------|-------------|
> | [detectEnvironment](#detectenvironment) | Detect environment and get a report. |

<br>

## Initialize the Engine

### engineResourcePath

* `static` engineResourcePath: *string*

> Specify the Barcode Reader SDK engine (WASM) url. The SDK tries to automatically explore the engine location. If the auto-explored engine location is incorrect, you can manually specify the engine location. The property needs to be set before [loadWasm](#loadwasm).
>
> ```js
> Dynamsoft.DBR.BarcodeReader.engineResourcePath = "https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.5/dist/";
> await Dynamsoft.DBR.BarcodeReader.loadWasm();
>```

<br>

### _bUseFullFeature

* `static` _bUseFullFeature: *boolean* = false

> Whether to use full feature wasm. The property needs to be set before [loadWasm](#loadwasm).
>
> For web, `_bUseFullFeature` is `false` as default.
>
> For Node.js, `_bUseFullFeature` does not work, and the Barcode Reader SDK always works on the full feature.
>
> The api may change in later version.
>
> <br>
>
> Compact wasm:
>
> oned + qr + pdf417 + datamatrix
>
> <br>
>
> Full wasm:
>
> all supported barcode format + 
>
> high level deblur available (lv8, 9) + 
>
> DPM +
>
> template API +
>
> intermediate results API
>
> <br>
>
> e.g.:
>
> Use min in video deocode (small, download and initialization fast).
>
> Use full in file decode (need high level deblur).
>
> ```js
> DBR.BarcodeReader._bUseFullFeature = true;
> await DBR.BarcodeReader.loadWasm();
> ```

<br>

### isLoaded

* `static` isLoaded(): *boolean*

> Check if the decoding module is loaded.

<br>

### loadWasm

* `static` loadWasm(): *Promise&lt;void&gt;*

> Before most operations, `loadWasm` needs to be excuted firstly.
>
> Most time, you do not need excute `loadWasm` manually. Because when you excute [createInstance](#createinstance), `loadWasm` will be excuted implicitly.
>
> Some properties can't be changed after `loadWasm`.
>
> Calling `loadWasm` in advance can avoid the long wait when `createInstance`. 
>
> ```js
> window.addEventListener('DOMContentLoaded', (event) => {
>   DBR.BarcodeReader.loadWasm();
> });
> ```

<br>

## Create and Destroy Instance

### bDestroyed

* bDestroyed: *boolean*

> Indicates whether the instance has been destroyed.

<br>

### createInstance

* `static` createInstance(): *Promise&lt;[BarcodeReader](#barcodereader)&gt;*

> Create a `BarcodeReader` instance.
>
> ```js
> let reader = await Dynamsoft.DBR.BarcodeReader.createInstance();
> ```

<br>

### destroy

* destroy(): *Promise&lt;void&gt;*

> Destroy the `BarcodeReader` instance. If your page needs to create new instances from time to time, don't forget to destroy unused old instances, otherwise it will cause memory leaks.

<br>

## Decode Barcode

### decode

* decode(source: *[Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) &#124; [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer) &#124; [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) &#124; [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) &#124; [Uint8ClampedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)*<br>
  
  *&#124; [HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement) &#124; [HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement) &#124; [HTMLVideoElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement)*<br>
  
  *&#124; string*): *Promise&lt;[TextResult](./interface/textresult.md)[]&gt;*

> Decode barcodes from a image.
>
> The main decoding method can accept a variety of data types, including binary data, images, base64 (with mime), urls, etc.
>
> The image format can be `png`, `jpeg`, `bmp`, `gif` and a few other (some browsers support `webp`, `tif`).
>
> ```js
> let results = await reader.decode(blob);
> for(let result of results){
>     console.log(result.barcodeText);
> }
>
> let results2 = await reader.decode(htmlImageElement);
> let results2 = await reader.decode(url);
>
> // like `data:image/png;base64,iV************`
> let results3 = await reader.decode(strBase64WithMime);
> ```
>
> And you can get a frame to decode from the `HTMLVideoElement`.
>
> ```js
> // The frame currently played will be decode.
> let results;
> try{
>   results = await reader.decode(htmlVideoElement);
> }catch(ex){
>   // If no frame in the video, will throw an exception.   
> }
> ```
> If you need to continuously decode a video, you can use [BarcodeScanner](./BarcodeScanner.md) instead.
>
> *@see* [decodeBase64String](#decodebase64string), [decodeUrl](#decodeurl)

<br>

### decodeBase64String

* decodeBase64String(base64: *string*): *Promise&lt;[TextResult](./interface/TextResult.md)[]&gt;*

> The decoding method can accept base64 with or without mime.
> e.g. `data:image/jpg;base64,Xfjshekk....` or `Xfjshekk...`.
> ```js
> let results = await reader.decodeBase64String(strBase64);
> for(let result of results){
>   console.log(result.barcodeText);
> }
> ```

<br>

### decodeUrl

* decodeUrl(url: *string*): *Promise&lt;[TextResult](./interface/TextResult.md)[]&gt;*

> The decoding method can accept url. The url source need to be in the same domain or allowed cors.
> ```js
> let results = await reader.decodeUrl("./1.png");
> for(let result of results){
>     console.log(result.barcodeText);
> }
> ```

<br>

### decodeBuffer

* decodeBuffer(<br>
  &nbsp;&nbsp;&nbsp;&nbsp;buffer: *[Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) &#124; [Uint8ClampedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray) &#124; [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) &#124; [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) &#124; [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer)*,<br>
  &nbsp;&nbsp;&nbsp;&nbsp;width: *number*, height: *number*, stride: *number*,<br>
  &nbsp;&nbsp;&nbsp;&nbsp;format: *[EnumImagePixelFormat](./enum/enumimagepixelformat.md)*<br>
  ): *Promise&lt;[TextResult](./interface/textresult.md)[]&gt;*

> Decode barcodes from raw image data.

<br>

## Decoding Settings

### getRuntimeSettings

* getRuntimeSettings(): *Promise&lt;[RuntimeSettings](./interface/RuntimeSettings.md)&gt;*

> Gets current runtime settings.
> ```js
> let settings = await reader.getRuntimeSettings();
> settings.deblurLevel = 5;
> await reader.updateRuntimeSettings(settings);
> ```

<br>

### updateRuntimeSettings

* updateRuntimeSettings(settings: *[RuntimeSettings](./interface/RuntimeSettings.md) &#124; string*): *Promise&lt;void&gt;*

> Update runtime settings with a given struct, or a string of `speed`, `balance` or `coverage` to use preset settings for BarcodeReader.
> The default settings for BarcodeReader is `coverage`.
> ```js
> await reader.updateRuntimeSettings('balance');
> let settings = await reader.getRuntimeSettings();
> settings.barcodeFormatIds = Dynamsoft.DBR.EnumBarcodeFormat.BF_ONED;
> await reader.updateRuntimeSettings(settings);
> ```

<br>

### resetRuntimeSettings

* resetRuntimeSettings(): *Promise&lt;void&gt;*

> Resets all parameters to default values.
> ```js
> await reader.resetRuntimeSettings();
> ```

<br>

### getModeArgument

* getModeArgument(modeName: *string*, index: *number*, argumentName: *string*): *Promise&lt;string&gt;*

> Get argument value for the specified mode parameter.
>
> ```js
> let argumentValue = await reader.getModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy");
> ```
>
> *@see* [C++ getModeArgument](https://www.dynamsoft.com/barcode-reader/programming/cplusplus/api-reference/cbarcodereader-methods/parameter-and-runtime-settings-basic.html?ver=latest#getmodeargument)

<br>

### setModeArgument

* setModeArgument(modeName: *string*, index: *number*, argumentName: *string*, argumentValue: *string*): *Promise&lt;string&gt;*

> Set argument value for the specified mode parameter.
>
> ```js
> await reader.setModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", "1");
> ```
>
> *@see* [C++ setModeArgument](https://www.dynamsoft.com/barcode-reader/programming/cplusplus/api-reference/cbarcodereader-methods/parameter-and-runtime-settings-basic.html?ver=latest#setmodeargument)

<br>

## License

### productKeys

* `static` productKeys: *string*

> Get or set the Dynamsoft Barcode Reader SDK product keys.
> ```js
> Dynamsoft.DBR.BarcodeReader.productKeys = "PRODUCT-KEYS";
> ```
> For convenience, you can set `productKeys` in `script` tag instead.
> ```html
> <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.5/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
> ```

<br>

### licenseServer

* `static` licenseServer: *string[] &#124; string*

> Specify the license server URL.

<br>

### handshakeCode

* `static` handshakeCode: *string*

> Get or set the Dynamsoft Barcode Reader SDK handshake code. The `handshakeCode` is an alias of `productKeys`. Specifically refers to the key that requires **network** authentication.
> ```js
> Dynamsoft.DBR.BarcodeReader.handshakeCode = "123****-mytest";
> ```
> For convenience, you can set `handshakeCode` in `script` tag instead.
> ```html
> <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.5/dist/dbr.js" data-handshakeCode="123****-mytest"></script>
> ```

<br>

### organizationID

* `static` organizationID: *string*

> Use organization ID to get authentication from network. Keep handshakeCode empty if you want to use default [handshake](#handshakeCode) of the organization.
> ```js
> Dynamsoft.DBR.BarcodeReader.organizationID = "123****";
> ```
> For convenience, you can set `organizationID` in `script` tag instead.
> ```html
> <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.5/dist/dbr.js" data-organizationID="123****"></script>
> ```

<br>

### sessionPassword

* `static` sessionPassword: *string*

> Specify a password to protect the [Handshake Code](#handshakeCode) from abuse.
> ```js
> Dynamsoft.DBR.BarcodeReader.handshakeCode = "123****-mytest";
> Dynamsoft.DBR.BarcodeReader.sessionPassword = "@#$%****";
> ```
> For convenience, you can set `organizationID` in `script` tag instead.
> ```html
> <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.5/dist/dbr.js" data-handshakeCode="123****-mytest" data-sessionPassword="@#$%****"></script>
> ```

<br>

## Other

### bSaveOriCanvas

* bSaveOriCanvas: *boolean* = false;

> Whether to save the original image into canvas.
> ```js
> reader.bSaveOriCanvas = true;
> let results = await reader.decode(source);
> document.body.append(reader.oriCanvas);
> ```

<br>

### oriCanvas

* `readonly` oriCanvas: *[HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement) &#124; [OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas)*

> An [canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas) object that holds the original image.
> ```js
> reader.bSaveOriCanvas = true;
> let results = await reader.decode(source);
> document.body.append(reader.oriCanvas);
> ```

<br>

### version

* `readonly` `static` version: *string*

> Get the current version: Algorithm version (js wrapper version).
> Algorithm version can only get after [loadWasm](#loadwasm).
> ```js
> console.log(Dynamsoft.DBR.BarcodeReader.version); // "loading...(JS 8.2.5.20210426)"
> await Dynamsoft.DBR.BarcodeReader.loadWasm();
> console.log(Dynamsoft.DBR.BarcodeReader.version); // "8.4.0.8960(JS 8.2.5.20210426)"
> ```

<br>

### detectEnvironment

* `static` detectEnvironment(): *Promise&lt;any&gt;*

> Detect environment and get a report.
> ```js
> console.log(Dynamsoft.DBR.BarcodeReader.detectEnvironment());
> // {"wasm":true, "worker":true, "getUserMedia":true, "camera":true, "browser":"Chrome", "version":90, "OS":"Windows"}
> ```

<br>


