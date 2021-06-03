---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API - BarcodeScanner
description: This page shows the BarcodeScanner class of Dynamsoft Barcode Reader JavaScript SDK.
keywords: BarcodeScanner, BarcodeReader, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
breadcrumbText: BarcodeScanner
---


# BarcodeScanner

* `class` BarcodeScanner *extends [BarcodeReader](./BarcodeReader.md)*

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
> |[isOpen](#isopen)|Check if the scanner is open.|

<br>

> [**Play and Pause**](#play-and-pause)
>
> Changing the barcode decoding process will affect the speed and accuracy.
>
> | Event                | Description |
> |----------------------|-------------|
> | [onPlayed](#onplayed) | Triggered when the camera video stream is played. |
>
> | Method               | Description |
> |----------------------|-------------|
> |[play](#play)|Continue the video.|
> |[pause](#pause)|Pause the video. Do not release the camera.|
> |[stop](#stop)|Stop the video, and release the camera.|
> |[pauseScan](#pausescan)|Pause the decoding process.|
> |[resumeScan](#resumescan)|Resume the decoding process.|

<br>

> [**UI**](#ui)
>
> Changing the barcode decoding process will affect the speed and accuracy.
>
> | Property             | Description |
> |----------------------|-------------|
> |[defaultUIElementURL](#defaultuielementurl)|The url of the default scanner UI.|
> |[regionMaskFillStyle](#regionmaskfillstyle)|Set the style used when filling the mask beyond the region.|
> |[regionMaskStrokeStyle](#regionmaskstrokestyle)|Set the style of the region border.|
> |[regionMaskLineWidth](#regionmasklinewidth)|Set the width of the region border.|
> |[barcodeFillStyle](#barcodefillstyle)|Set the style used when filling in located barcode.|
> |[barcodeStrokeStyle](#barcodestrokestyle)|Set the style of the located barcode border.|
> |[barcodeLineWidth](#barcodelinewidth)|Set the width of the located barcode border.|
>
> | Method               | Description |
> |----------------------|-------------|
> |[getUIElement](#getuielement)|Get HTML element containing the `BarcodeScanner` instance.|
> |[setUIElement](#setuielement)|Set HTML element containing the `BarcodeScanner` instance.|

<br>

> [**Camera Settings**](#camera-settings)
>
> Changing the barcode decoding process will affect the speed and accuracy.
>
> | Method               | Description |
> |----------------------|-------------|
> |[getAllCameras](#getallcameras)|Get infomation of all available cameras on the device.|
> |[getCurrentCamera](#getcurrentcamera)|Get information about the currently used camera.|
> |[setCurrentCamera](#setcurrentcamera)|Choose the camera and play it by its information or devide id.|
> |[getResolution](#getresolution)|Get current camera resolution.|
> |[setResolution](#setresolution)|Set current camera resolution.|
> |[getVideoSettings](#getvideosettings)|Get current video settings.|
> |[updateVideoSettings](#updatevideosettings)|Modify and update video settings.|
> |[getCapabilities](#getcapabilities)|Get the camera capabilities. Chrome only.|
> |[turnOnTorch](#turnontorch)|Turn on the torch/flashlight. Chrome only.|
> |[turnOffTorch](#turnofftorch)|Turn off the torch/flashlight. Chrome only.|
> |[setColorTemperature](#setcolortemperature)|Adjusts the color temperature. Chrome only.|
> |[setExposureCompensation](#setexposurecompensation)|Adjusts the exposure level. Chrome only.|
> |[setZoom](#setzoom)|Adjusts the zoom ratio. Chrome only.|
> |[setFrameRate](#setframerate)|Adjusts the frame rate. Chrome only.|

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
> | [licenseServer *(BarcodeReader)*](BarcodeReader.md#licenseserver) | Specify the license server URL. |
> | [handshakeCode *(BarcodeReader)*](BarcodeReader.md#handshakecode) | Use Handshake Code to get authentication from network. |
> | [organizationID *(BarcodeReader)*](BarcodeReader.md#organizationid) | Use organization ID to get authentication from network. |
> | [sessionPassword *(BarcodeReader)*](BarcodeReader.md#sessionpassword) | Specify a password to protect the Handshake Code from abuse. |

<br>

> [**Other**](#other)
>
> | Static Property     | Description |
> |---------------------|-------------|
> | [version *(BarcodeReader)*](BarcodeReader.md#version) | Get the current version. |
>
> | Property            | Description |
> |---------------------|-------------|
> | [bSaveOriCanvas](#bsaveoricanvas) | If set to `true`, save the original image in `oriCanvas`. |
> | [oriCanvas](#oricanvas) |  An [canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas) object that holds the original image. |
> |[bPlaySoundOnSuccessfulRead](#bplaysoundonsuccessfulread)|Whether to play sound when the scanner reads a barcode successfully.|
> |[soundOnSuccessfullRead](#soundonsuccessfullread)|The sound to play when the scanner get successfull read.|
> |[bVibrateOnSuccessfulRead](#bvibrateonsuccessfulread)|Whether to vibrate when the scanner reads a barcode successfully.|
> |[vibrateDuration](#vibrateduration)|Get or set how long (ms) the vibration lasts.|
>
> | Static Method        | Description |
> |----------------------|-------------|
> | [detectEnvironment *(BarcodeReader)*](BarcodeReader.md#detectenvironment) | Detect environment and get a report. |
>
> | Method               | Description |
> |----------------------|-------------|
> | [getScanSettings](#getscansettings) | Get current scan settings. |
> | [updateScanSettings](#updatescansettings) | Modify and update scan settings. |

<br>

## Create and Destroy Instance

### bDestroyed

* bDestroyed: *boolean*

> Indicates whether the instance has been destroyed.

<br>

### createInstance

* `static` createInstance(): *Promise&lt;[BarcodeScanner](#barcodescanner)&gt;*

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

* `event` onUnduplicatedRead?: *(txt: string, result: [TextResult](./interface/TextResult.md)) => void*

> This event is triggered when a new, unduplicated barcode is found.
> `txt` holds the barcode text string. `result` contains more info.
> Old barcodes will be remembered for [duplicateForgetTime](./interface/ScanSettings.md).
> ```js
> scanner.onUnduplicatedRead = (txt, result) => {
>   alert(txt);
>   console.log(result);
> }
> ```

<br>

### onFrameRead

* `event` onFrameRead?: *(results: [TextResult](./interface/TextResult.md)[]) => void*

> The event is triggered after a frame has been scanned.
> The results object contains all the barcode results in this frame.
> ```js
> scanner.onFrameRead = results => {
>     for(let result of results){
>         console.log(result.barcodeText);
>     }
> };
> ```

<br>

### decodeCurrentFrame

* decodeCurrentFrame(): *Promise&lt;[TextResult](./interface/TextResult.md)[]&gt;*

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

<br>

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

<br>

### show

* show(): *Promise&lt;[ScannerPlayCallbackInfo](./interface/ScannerPlayCallbackInfo.md)&gt;*

> Bind UI, open the camera, start decoding, and remove the UIElement `display` style if the original style is `display:none;`.
> ```js
> await scanner.setUIElement("https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.5/dist/dbr.scanner.html");
> scanner.onUnduplicatedRead = (txt, result) => { alert(txt); console.log(result); };
> await scanner.show();
> ```

<br>

### hide

* hide(): *Promise&lt;void&gt;*

> Stop decoding, release camera, unbind UI.
> ```js
> await scanner.open();
> await scanner.hide();
> 
> await scanner.openVideo();
> await scanner.hide();
> ```

<br>

### openVideo

* openVideo(): *Promise&lt;[ScannerPlayCallbackInfo](./interface/ScannerPlayCallbackInfo.md)&gt;*

> Bind UI, open the camera, but not decode.
> ```js
> await scanner.setUIElement(document.getElementById("my-barcode-scanner"));
> await scanner.openVideo();
> console.log(await scanner.decodeCurrentFrame());
> ```

<br>

### showVideo

* showVideo(): *Promise&lt;[ScannerPlayCallbackInfo](./interface/ScannerPlayCallbackInfo.md)&gt;*

> Bind UI, open the camera, but not decode.
> ```js
> await scanner.setUIElement("https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.5/dist/dbr.scanner.html");
> await scanner.showVideo();
> console.log(await scanner.decodeCurrentFrame());
> ```

<br>

### isOpen

* isOpen(): *boolean*

> Check if the scanner is open.

<br>

## Play and Pause

### onPlayed

* `event` onPlayed?: *(info: [ScannerPlayCallbackInfo](./interface/ScannerPlayCallbackInfo.md)) => void*

> Triggered when the camera video stream is played.
> ```js
> scanner.onplayed = rsl=>{ console.log(rsl.width+'x'+rsl.height) };
> await scanner.show(); // or open, play, setCurrentCamera, like these.
> ```

<br>

### play

* play(deviceId?: *string*, width?: *number*, height?: *number*): *Promise&lt;[ScannerPlayCallbackInfo](../interface/ScannerPlayCallbackInfo.md)&gt;*

> Continue the video.
> ```js
> scanner.pause();
> \\*** a lot of work ***
> await scanner.play();
> ```

<br>

### pause

* pause(): *void*

> Pause the video. Do not release the camera.

<br>

### stop

* stop(): *void*

> Stop the video, and release the camera.

<br>

### pauseScan

* pauseScan(): *void*

> Pause the decoding process.

<br>

### resumeScan

* resumeScan(): *void*

> Resume the decoding process.

<br>

## UI

### defaultUIElementURL

* `static` defaultUIElementURL: *string*

> The url of the default scanner UI.
>
> Can only be changed before [createInstance](#createinstance).
>
> ```js
> Dynamsoft.DBR.BarcodeScanner.defaultUIElementURL = "https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.5/dist/dbr.scanner.html";
> let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
> await scanner.show();
> ```

<br>

### regionMaskFillStyle

* regionMaskFillStyle: *string = "rgba(0,0,0,0.5)"*

> Set the style used when filling the mask beyond the region.

<br>

### regionMaskStrokeStyle

* regionMaskStrokeStyle: *string = "rgb(254,142,20)"*

> Set the style of the region border.

<br>

### regionMaskLineWidth

* regionMaskLineWidth: *number = 2*

> Set the style used when filling in located barcode.

<br>

### barcodeFillStyle

* barcodeFillStyle: *string = "rgba(254,180,32,0.3)"*

> Set the style used when filling in located barcode.

<br>

### barcodeStrokeStyle

* barcodeStrokeStyle: *string = "rgba(254,180,32,0.9)"*

> Set the style of the located barcode border.

<br>

### barcodeLineWidth

* barcodeLineWidth: *number = 1*

> Set the width of the located barcode border.

<br>

### getUIElement

* getUIElement(): *HTMLElement*

> Get HTML element containing the [BarcodeScanner](#barcodescanner) instance.

<br>

### setUIElement

* setUIElement(elementOrUrl: *HTMLElement &#124; string*): *Promise&lt;void&gt;*

> Set html element containing the `BarcodeScanner` instance.
> ```html
> <video class="dbrScanner-video" playsinline="true"></video>
> <script>
>   let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
>   await scanner.setUIElement(document.getElementsByClassName("dbrScanner-video")[0]);
>   await scanner.open();
> </script>
> ```
> ```html
> <!-- <video class="dbrScanner-video" playsinline="true"></video> -->
> <script>
>   let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
>   await scanner.setUIElement("https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.5/dist/dbr.scanner.html");
>   await scanner.show();
> </script>
> ```

<br>

## Camera Settings

### getAllCameras

* getAllCameras(): *Promise&lt;[VideoDeviceInfo](./interface/VideoDeviceInfo.md)[]&gt;*

> Get infomation of all available cameras on the device.
> ```js
> let cameras = await scanner.getAllCameras();
> if(cameras.length){
>   await scanner.setCurrentCamera(cameras[0]);
> }
> ```

<br>

### getCurrentCamera

* getCurrentCamera(): *Promise&lt;[VideoDeviceInfo](./interface/VideoDeviceInfo.md) &#124; null&gt;*

> Get information about the currently used camera.
> ```js
> let camera = await scanner.getCurrentCamera();
> ```

<br>

### setCurrentCamera

* setCurrentCamera(cameraInfoOrDeviceId: *any*): *Promise&lt;[ScannerPlayCallbackInfo](./interface/ScannerPlayCallbackInfo.md)&gt;*

> Choose the camera and play it by its information or devide id.
> ```js
> let cameras = await scanner.getAllCameras();
> if(cameras.length){
>   await scanner.setCurrentCamera(cameras[0]);
> }
> ```

<br>

### getResolution

* getResolution(): *number[]*

> Get current camera resolution.
> ```js
> let rsl = await scanner.getResolution();
> console.log(rsl.width + " x " + rsl.height);
> ```

<br>

### setResolution

* setResolution(width: *number &#124; number[]*, height: *number*)

> Set current camera resolution.
> ```js
> await scanner.setResolution(width, height);
> ```

<br>

### getVideoSettings

* getVideoSettings(): *[MediaStreamConstraints](https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API/Constraints)*

> Get current video settings.

<br>

### updateVideoSettings

* updateVideoSettings([MediaStreamConstraints](https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API/Constraints): *any*): *Promise&lt;[ScannerPlayCallbackInfo](./interface/scannerplaycallback.md) &#124; void&gt;*

> Modify and update video settings.
> ```js
> await scanner.updateVideoSettings({ video: {width: {ideal: 1280}, height: {ideal: 720}, facingMode: {ideal: 'environment'}} });
> ```

<br>

### getCapabilities

* getCapabilities(): *[MediaTrackCapabilities](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getCapabilities)*

> Get the camera capabilities. Chrome only.
> Only available when the scanner is open.
> ```console
> > scanner.getCapabilities()
> < {
>   "aspectRatio":{"max":3840,"min":0.000462962962962963},
>   "colorTemperature":{max: 7000, min: 2850, step: 50},
>   "deviceId":"1e...3af7",
>   "exposureCompensation": {max: 2.0000040531158447, min: -2.0000040531158447, step: 0.16666699945926666},
>   "exposureMode":["continuous","manual"],
>   "facingMode":["environment"],
>   "focusMode":["continuous","single-shot","manual"],
>   "frameRate":{"max":30,"min":0},
>   "groupId":"71...a935",
>   "height":{"max":2160,"min":1},
>   "resizeMode":["none","crop-and-scale"],
>   "torch":true,
>   "whiteBalanceMode":["continuous","manual"],
>   "width":{"max":3840,"min":1},
>   "zoom":{max: 606, min: 100, step: 2}
> }
> ```

<br>

### turnOnTorch

* turnOnTorch(): *Promise&lt;void&gt;*

> Turn on the torch/flashlight. Chrome only.
> Only available when the scanner is open.
> Will reject if not support.
> ```js
> await scanner.turnOnTorch();
> ```
> *@see* [turnOffTorch](#turnofftorch) [getCapabilities](#getcapabilities)

<br>

### turnOffTorch

* turnOffTorch(): *Promise&lt;void&gt;*

> Turn off the torch. Chrome only.
> Only available when the scanner is open.
> Will reject if not support.
> ```js
> await scanner.turnOffTorch();
> ```
> *@see* [turnOnTorch](#turnontorch) [getCapabilities](#getcapabilities)

<br>

### setColorTemperature

* setColorTemperature(value: *number*): *Promise&lt;void&gt;*

> Adjusts the color temperature. Chrome only.
> Only available when the scanner is open.
> Will reject if not support.
> ```js
> await scanner.setColorTemperature(5000);
> ```
> *@see* [getCapabilities](#getcapabilities)

<br>

### setExposureCompensation

* setExposureCompensation(value: *number*): *Promise&lt;void&gt;*

> Adjusts the exposure level. Chrome only.
> Only available when the scanner is open.
> Will reject if not support.
> ```js
> await scanner.setExposureCompensation(-0.7);
> ```
> *@see* [getCapabilities](#getcapabilities)

<br>

### setZoom

* setZoom(value: *number*): *Promise&lt;void&gt;*

> Adjusts the zoom ratio. Chrome only.
> Only available when the scanner is open.
> Will reject if not support.
> ```js
> await scanner.setZoom(400);
> ```
> *@see* [getCapabilities](#getcapabilities)

<br>

### setFrameRate

* setFrameRate(value: *number*): *Promise&lt;void&gt;*

> Adjusts the frame rate. Chrome only.
> Only available when the scanner is open.
> Will reject if not support.
> ```js
> await scanner.setFrameRate(10);
> ```
> *@see* [getCapabilities](#getcapabilities)

<br>

## Decoding Settings

### getRuntimeSettings

* getRuntimeSettings(): *Promise&lt;[RuntimeSettings](./interface/RuntimeSettings.md)&gt;*

> Gets current runtime settings.
> ```js
> let settings = await scanner.getRuntimeSettings();
> settings.deblurLevel = 5;
> await scanner.updateRuntimeSettings(settings);
> ```

<br>

### updateRuntimeSettings

* updateRuntimeSettings(settings: *[RuntimeSettings](./interface/RuntimeSettings.md) &#124; string*): *Promise&lt;void&gt;*

> Update runtime settings with a given struct, or a string of `speed`, `balance`, `coverage` and `single` to use preset settings for BarcodeScanner.
>
> We recommend using the speed-optimized `single` preset if scanning only one barcode at a time. The `single` is only available in `BarcodeScanner`.
>
> The default settings for BarcodeScanner is `single`.
>
> ```js
> await scanner.updateRuntimeSettings('balance');
> let settings = await scanner.getRuntimeSettings();
> settings.barcodeFormatIds = Dynamsoft.DBR.EnumBarcodeFormat.BF_ONED;
> await scanner.updateRuntimeSettings(settings);
> ```
> *@see* [RuntimeSettings](./interface/RuntimeSettings.md)

<br>

### resetRuntimeSettings

* resetRuntimeSettings(): *Promise&lt;void&gt;*

> Resets all parameters to default values.
> ```js
> await scanner.resetRuntimeSettings();
> ```

<br>

### getModeArgument

* getModeArgument(modeName: *string*, index: *number*, argumentName: *string*): *Promise&lt;string&gt;*

> Get argument value for the specified mode parameter.
>
> ```js
> let argumentValue = await scanner.getModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy");
> ```
>
> *@see* [C++ getModeArgument](https://www.dynamsoft.com/barcode-reader/programming/cplusplus/api-reference/cbarcodereader-methods/parameter-and-runtime-settings-basic.html?ver=latest#getmodeargument)

<br>

### setModeArgument

* setModeArgument(modeName: *string*, index: *number*, argumentName: *string*, argumentValue: *string*): *Promise&lt;string&gt;*

> Set argument value for the specified mode parameter.
>
> ```js
> await scanner.setModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", "1");
> ```
>
> *@see* [C++ setModeArgument](https://www.dynamsoft.com/barcode-reader/programming/cplusplus/api-reference/cbarcodereader-methods/parameter-and-runtime-settings-basic.html?ver=latest#setmodeargument)

<br>

## Other

### bSaveOriCanvas

* bSaveOriCanvas: *boolean* = false;

> Whether to save the original image into canvas.
> ```js
> scanner.bSaveOriCanvas = true;
> let results = await scanner.decode(source);
> document.body.append(scanner.oriCanvas);
> ```

<br>

### oriCanvas

* `readonly` oriCanvas: *[HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement) &#124; [OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas)*

> An [canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas) object that holds the original image.
> ```js
> scanner.bSaveOriCanvas = true;
> let results = await scanner.decode(source);
> document.body.append(scanner.oriCanvas);
> ```

<br>

### bPlaySoundOnSuccessfulRead

* bPlaySoundOnSuccessfulRead: *(boolean &#124; string) = false*;

> Whether to play sound when the scanner reads a barcode successfully.
> Default value is `false`, which does not play sound.
> Use `frame` or `true` to play a sound when any barcode is found within a frame.
> Use `unduplicated` to play a sound only when any unique/unduplicated barcode is found within a frame.
> ```js
> // A user gesture required. https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#chrome_enterprise_policies
> startPlayButton.addEventListener('click', function() {
>   scanner.bPlaySoundOnSuccessfulRead = true;
> });
> ```
> refer: `favicon bug` https://bugs.chromium.org/p/chromium/issues/detail?id=1069731&q=favicon&can=2

<br>

### soundOnSuccessfullRead

* soundOnSuccessfullRead: [HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)

> The sound to play when the scanner get successfull read.
> ```js
> scanner.soundOnSuccessfullRead = new Audio("./pi.mp3");
> ```

<br>

### bVibrateOnSuccessfulRead

* bVibrateOnSuccessfulRead: *(boolean &#124; string) = false*

> Whether to vibrate when the scanner reads a barcode successfully.
> Default value is `false`, which does not vibrate.
> Use `frame` or `true` to vibrate when any barcode is found within a frame.
> Use `unduplicated` to vibrate only when any unique/unduplicated barcode is found within a frame.
> ```js
> // Can I use? https://caniuse.com/?search=vibrate
> // A user gesture required. https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#chrome_enterprise_policies
> startVibrateButton.addEventListener('click', function() {
>   scanner.bVibrateOnSuccessfulRead = true;
> });
> ```

<br>

### vibrateDuration

* vibrateDuration: *number = 300*

> Get or set how long (ms) the vibration lasts.
>
> *@see* [bVibrateOnSuccessfulRead](#bvibrateonsuccessfulread)

<br>

### getScanSettings

* getScanSettings(): *Promise&lt;[ScanSettings](./interface/ScanSettings.md)&gt;*

> Get current scan settings.
> ```js
> let scanSettings = await scanner.getScanSettings();
> scanSettings.intervalTime = 50;
> scanSettings.duplicateForgetTime = 1000;
> await scanner.updateScanSettings(scanSettings);
> ```

<br>

### updateScanSettings

* updateScanSettings(settings: *[ScanSettings](./interface/ScanSettings.md)*): *Promise&lt;void&gt;*

> Modify and update scan settings.
> ```js
> let scanSettings = await scanner.getScanSettings();
> scanSettings.intervalTime = 50;
> scanSettings.duplicateForgetTime = 1000;
> await scanner.updateScanSettings(scanSettings);
> ```

<br>


