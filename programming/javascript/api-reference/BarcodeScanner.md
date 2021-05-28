---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API Reference - BarcodeScanner
description: This page shows the BarcodeScanner class of Dynamsoft Barcode Reader JavaScript SDK.
keywords: BarcodeScanner, api reference, javascript, js
needAutoGenerateSidebar: true
breadcrumbText: BarcodeScanner
---

Dynamsoft Barcode Reader SDK - JavaScript API
# BarcodeScanner

* `Class` BarcodeScanner *extends [BarcodeReader](./BarcodeReader.md)*

> The `BarcodeScanner` class is used for **video** decoding.
> `Node.js` does not support `BarcodeScanner`.
> ```js
> let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
> scanner.onUnduplicatedRead = txt => console.log(txt);
> await scanner.show();
> ```

<br>

## Index

> [**Initialize the Engine** *(Inherited from BarcodeReader)*](BarcodeReader.md#initialize-the-engine)
>
> | Static Property      | Description |
> |----------------------|-------------|
> | [engineResourcePath *(BarcodeReader)*](BarcodeReader.md#engineresourcepath) | Specify the engine (WASM) url. | 
> | [_bUseFullFeature *(BarcodeReader)*](BarcodeReader.md#_busefullfeature) | If set to `true`, use the full-featured WASM module. |
>
> | Static Method        | Description |
> |----------------------|-------------|
> | [isLoaded *(BarcodeReader)*](BarcodeReader.md#isloaded) | Check if the decoding module is loaded. |
> | [loadWasm *(BarcodeReader)*](BarcodeReader.md#loadwasm) | Manually load and compile the decoding WASM module. |

<br>

> [**Create and Destroy Instance**](#create-and-destroy-instance)
>
> | Property             | Description |
> |----------------------|-------------|
> | [bDestroyed](#bDestroyed) | Indicates whether the `BarcodeReader` instance has been destroyed. | 
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
> | Event                | Description |
> |----------------------|-------------|
> | [onUnduplicatedRead](#onUnduplicatedRead) | Triggered when a new, unduplicated barcode is found. |
> | [onFrameRead](#onFrameRead) | Triggered after a frame has been scanned. |
>
> | Method               | Description |
> |----------------------|-------------|
> | [decodeCurrentFrame](#decodeCurrentFrame) | Decode barcodes from the current frame of the video. |

<br>

> [**Open and Close**](#open-and-close)
>
> Changing the barcode decoding process will affect the speed and accuracy.
>
> | Method               | Description |
> |----------------------|-------------|
> |[open](#open)|Bind UI, open the camera, start decoding.|
> |[close](#close)|Stop decoding, release camera, unbind UI.|
> |[show](#show)|Bind UI, open the camera, start decoding, and remove the `UIElement` `display` style if the original style is `display:none;`|
> |[hide](#hide)|Stop decoding, release camera, unbind UI, and set the Element as `display:none;`.|
> |[openVideo](#open)|Bind UI, open the camera, but not decode.|
> |[showVideo](#show)|Bind UI, open the camera, but not decode, and remove the UIElement `display` style if the original style is `display:none;`.|
> |[isOpen](#isOpen)|Check if the scanner is open.|

<br>

> [**Play and Pause**](#play-and-pause)
>
> Changing the barcode decoding process will affect the speed and accuracy.
>
> | Event                | Description |
> |----------------------|-------------|
> | [onPlayed](#onPlayed) | Triggered when the camera video stream is played. |
>
> | Method               | Description |
> |----------------------|-------------|
> |[play](#play)|Continue the video.|
> |[pause](#pause)|Pause the video. Do not release the camera.|
> |[stop](#stop)|Stop the video, and release the camera.|
> |[pauseScan](#pauseScan)|Pause the decoding process.|
> |[resumeScan](#resumeScan)|Resume the decoding process.|

<br>

> [**UI**](#ui)
>
> Changing the barcode decoding process will affect the speed and accuracy.
>
> | Property             | Description |
> |----------------------|-------------|
> |[defaultUIElementURL](#defaultUIElementURL)|The url of the default scanner UI.|
> |[regionMaskFillStyle](#regionMaskFillStyle)|Set the style used when filling the mask beyond the region.|
> |[regionMaskStrokeStyle](#regionMaskStrokeStyle)|Set the style of the region border.|
> |[regionMaskLineWidth](#regionMaskLineWidth)|Set the width of the region border.|
> |[barcodeFillStyle](#barcodeFillStyle)|Set the style used when filling in located barcode.|
> |[barcodeStrokeStyle](barcodeStrokeStyle)|Set the style of the located barcode border.|
> |[barcodeLineWidth](barcodeLineWidth)|Set the width of the located barcode border.|
>
> | Method               | Description |
> |----------------------|-------------|
> |[getUIElement](#getUIElement)|Get HTML element containing the `BarcodeScanner` instance.|
> |[setUIElement](#setUIElement)|Set HTML element containing the `BarcodeScanner` instance.|

<br>

> [**Camera Settings**](#camera-settings)
>
> Changing the barcode decoding process will affect the speed and accuracy.
>
> | Method               | Description |
> |----------------------|-------------|
> |[getAllCameras](getAllCameras)|Get infomation of all available cameras on the device.|
> |[getCurrentCamera](getCurrentCamera)|Get information about the currently used camera.|
> |[setCurrentCamera](setCurrentCamera)|Choose the camera and play it by its information or devide id.|
> |[getResolution](getResolution)|Get current camera resolution.|
> |[setResolution](setResolution)|Set current camera resolution.|
> |[getVideoSettings](getVideoSettings)|Get current video settings.|
> |[updateVideoSettings](updateVideoSettings)|Modify and update video settings.|
> |[getCapabilities](getCapabilities)|Get the camera capabilities. Chrome only.|
> |[turnOnTorch](turnOnTorch)|Turn on the torch/flashlight. Chrome only.|
> |[turnOffTorch](turnOffTorch)|Turn off the torch/flashlight. Chrome only.|
> |[setColorTemperature](setColorTemperature)|Adjusts the color temperature. Chrome only.|
> |[setExposureCompensation](setExposureCompensation)|Adjusts the exposure level. Chrome only.|
> |[setZoom](setZoom)|Adjusts the zoom ratio. Chrome only.|
> |[setFrameRate](setFrameRate)|Adjusts the frame rate. Chrome only.|

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

> [**License** *(Inherited from BarcodeReader)*](BarcodeReader.md#license)
>
> | Property            | Description |
> |---------------------|-------------|
> | [productKeys *(BarcodeReader)*](BarcodeReader.md#productkeys) | Get or set the Dynamsoft Barcode Reader SDK product keys. | 
> | [licenseServer *(BarcodeReader)*](BarcodeReader.md#licenseServer) | Specify the license server URL. |
> | [handshakeCode *(BarcodeReader)*](BarcodeReader.md#handshakeCode) | Use Handshake Code to get authentication from network. |
> | [organizationID *(BarcodeReader)*](BarcodeReader.md#organizationID) | Use organization ID to get authentication from network. |
> | [sessionPassword *(BarcodeReader)*](BarcodeReader.md#sessionPassword) | Specify a password to protect the Handshake Code from abuse. |

<br>

> [**Other**](#other)
>
> | Static Property     | Description |
> |---------------------|-------------|
> | [version *(BarcodeReader)*](BarcodeReader.md#version) | Get the current version. |
>
> | Property            | Description |
> |---------------------|-------------|
> | [bSaveOriCanvas](#bSaveOriCanvas) | If set to `true`, save the original image in `oriCanvas`. |
> | [oriCanvas](#oriCanvas) |  An [canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas) object that holds the original image. |
> |[bPlaySoundOnSuccessfulRead](#bPlaySoundOnSuccessfulRead)|Whether to play sound when the scanner reads a barcode successfully.|
> |[soundOnSuccessfullRead](#soundOnSuccessfullRead)|The sound to play when the scanner get successfull read.|
> |[bVibrateOnSuccessfulRead](#bVibrateOnSuccessfulRead)|Whether to vibrate when the scanner reads a barcode successfully.|
> |[vibrateDuration](#vibrateDuration)|Get or set how long (ms) the vibration lasts.|
>
> | Static Method        | Description |
> |----------------------|-------------|
> | [detectEnvironment *(BarcodeReader)*](BarcodeReader.md#detectenvironment) | Detect environment and get a report. |
>
> | Method               | Description |
> |----------------------|-------------|
> | [getScanSettings](#getScanSettings) | Get current scan settings. |
> | [updateScanSettings](#updateScanSettings) | Modify and update scan settings. |

<br>

## Create and Destroy Instance

### bDestroyed

* bDestroyed: *boolean*

> Indicates whether the instance has been destroyed.

<br>

### createInstance

* `static` createInstance(): *Promise&lt;[BarcodeScanner](#BarcodeScanner)&gt;*

> Create a `BarcodeScanner` instance.
>
> ```js
> let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
> ```

<br>

### destroy

* destroy(): *Promise&lt;void&gt;*

> Destroy the `BarcodeScanner` instance. If your page needs to create new instances from time to time, don't forget to destroy unused old instances, otherwise it will cause memory leaks.

<br>

## Decode Barcode

### onUnduplicatedRead

* onUnduplicatedRead?: *(txt: string, result: [TextResult](./interface/textresult.md)) => void*

> This event is triggered when a new, unduplicated barcode is found.
> `txt` holds the barcode text string. `result` contains more info.
> Old barcodes will be remembered for [duplicateForgetTime](TODO).
> ```js
> scanner.onUnduplicatedRead = (txt, result) => {
>   alert(txt);
>   console.log(result);
> }
> ```

### onFrameRead

* onFrameRead?: *(results: [TextResult](./interface/textresult.md)[]) => void*

> The event is triggered after a frame has been scanned.
> The results object contains all the barcode results in this frame.
> ```js
> scanner.onFrameRead = results => {
>     for(let result of results){
>         console.log(result.barcodeText);
>     }
> };
> ```

### decodeCurrentFrame

* decodeCurrentFrame(): *Promise&lt;[TextResult](./interface/textresult.md)[]&gt;*

> Decode barcodes from the current frame of the video.
> ```js
> await scanner.showVideo();
> console.log(await scanner.decodeCurrentFrame());
> ```

## Open and Close

### open

* open(): *Promise&lt;[ScannerPlayCallbackInfo](./interface/ScannerPlayCallbackInfo.md)&gt;*

> Bind UI, open the camera, start decoding.
> ```js
> await scanner.setUIElement(document.getElementById("my-barcode-scanner"));
> scanner.onUnduplicatedRead = (txt, result) => { alert(txt); console.log(result); };
> await scanner.open();
> ```
> *@see* [show](#show)

### close

* close(): *Promise&lt;void&gt;*

> Stop decoding, release camera, unbind UI.
> ```js
> await scanner.open();
> await scanner.close();
> 
> await scanner.openVideo();
> await scanner.close();
> ```

### show

* show(): *Promise&lt;[ScannerPlayCallbackInfo](./interface/ScannerPlayCallbackInfo.md)&gt;*

> Bind UI, open the camera, start decoding, and remove the UIElement `display` style if the original style is `display:none;`.
> ```js
> await scanner.setUIElement("https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.5/dist/dbr.scanner.html");
> scanner.onUnduplicatedRead = (txt, result) => { alert(txt); console.log(result); };
> await scanner.show();
> ```

### hide

### openVideo

### showVideo

### isOpen

## Play and Pause

### onPlayed

### play

### pause

### stop

### pauseScan

### resumeScan

## UI

### defaultUIElementURL

### regionMaskFillStyle

### regionMaskStrokeStyle

### regionMaskLineWidth

### barcodeFillStyle

### barcodeStrokeStyle

### barcodeLineWidth

### getUIElement

### setUIElement

## Camera Settings

### getAllCameras

### getCurrentCamera

### setCurrentCamera

### getResolution

### setResolution

### getVideoSettings

### updateVideoSettings

### getCapabilities

### turnOnTorch

### turnOffTorch

### setColorTemperature

### setExposureCompensation

### setZoom

### setFrameRate

## Decoding Settings

### getRuntimeSettings

### updateRuntimeSettings

### resetRuntimeSettings

### getModeArgument

### setModeArgument

## Other

### bSaveOriCanvas

### oriCanvas

### bPlaySoundOnSuccessfulRead

### soundOnSuccessfullRead

### bVibrateOnSuccessfulRead

### vibrateDuration

### getScanSettings

### updateScanSettings
