---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API - Main Page
description: This is the main page of Dynamsoft Barcode Reader JavaScript SDK API Reference.
keywords: api reference, javascript, js
needAutoGenerateSidebar: false
breadcrumbText: API Reference
---


#  Reference

[BarcodeReader](#barcodereader)  -- Decode barcodes from images
   * [Methods](#barcodereader-methods)  
   * [Properties](#barcodereader-properties)  
   * [Accessors](#barcodereader-accessors) 
   
   
[BarcodeScanner](#barcodescanner)  -- Decode barcodes from videos
   * [Methods](#barcodescanner-methods)  
   * [Properties](#barcodescanner-properties)  
   * [Accessors](#barcodescanner-accessors) 
   * [Interfaces](#barcodescanner-interfaces) 

[Global Interfaces](#global-interfaces)  

[Enumerations](#enumerations) 


---

## BarcodeReader

The `BarcodeReader` class is used for **image** decoding.

### `BarcodeReader` Methods

#### Initialize and Destroy

The following methods are related to initializing and destroying the `BarcodeReader` object.

| Method               | Description |
|----------------------|-------------|
| [`createInstance`](BarcodeReader/methods/initialize-and-destroy.md#createinstance) | Create a  `BarcodeReader` object. |
| [`destroy`](BarcodeReader/methods/initialize-and-destroy.md#destroy) | Destroy the `BarcodeReader` object. |
| [`detectEnvironment`](BarcodeReader/methods/initialize-and-destroy.md#detectenvironment) | Detect the current environment. |
| [`isLoaded`](BarcodeReader/methods/initialize-and-destroy.md#isloaded) | Check if the decoding module is loaded. |
| [`loadWasm`](BarcodeReader/methods/initialize-and-destroy.md#loadwasm) | Manually load and compile the decoding WASM module. |

#### Decode

The following methods are related to decoding barcodes.

| Method               | Description |
|----------------------|-------------|
| [`decode`](BarcodeReader/methods/decode.md#decode) | Decode barcodes from images, binary data, URLs, and more. |
| [`decodeBase64String`](BarcodeReader/methods/decode.md#decodebase64string) | Decode barcodes from a base64 encoded string. |
| [`decodeBuffer`](BarcodeReader/methods/decode.md#decodebuffer) | Decode barcodes from raw buffer. |
| [`decodeUrl`](BarcodeReader/methods/decode.md#decodeurl) | Decode barcodes from a URL. |

#### Parameter and Runtime Settings

The following methods are related to customizing mode and runtime settings.

| Method               | Description |
|----------------------|-------------|
| [`getModeArgument`](BarcodeReader/methods/parameter-and-runtime-settings.md#getmodeargument) | Get argument value for the specified mode parameter. |
| [`setModeArgument`](BarcodeReader/methods/parameter-and-runtime-settings.md#setmodeargument) | Set argument value for the specified mode parameter. |
| [`getRuntimeSettings`](BarcodeReader/methods/parameter-and-runtime-settings.md#getruntimesettings) | Get current runtime settings. |
| [`resetRuntimeSettings`](BarcodeReader/methods/parameter-and-runtime-settings.md#resetruntimesettings) | Reset runtime settings to default. |
| [`updateRuntimeSettings`](BarcodeReader/methods/parameter-and-runtime-settings.md#updateruntimesettings) | Modify and update the current runtime settings. |

### `BarcodeReader` Properties

| Property             | Description |
|----------------------|-------------|
| [`_bUseFullFeature`](BarcodeReader/properties.md#_busefullfeature) | If set to `true`, use the fully-featured WASM module. |
| `bDestroyed` | Indicates whether a `BarcodeScanner` object has been destroyed. | 
| `bSaveOriCanvas` | If set to `true`, save the original image to canvas. | 
| `oriCanvas` | The original canvas element. | 


### `BarcodeReader` Accessors

| Accessors            | Description |
|----------------------|-------------|
| [`engineResourcePath`](BarcodeReader/accessors.md#engineresourcepath) | Get or set the engine (WASM) location. | 
| [`productKeys`](BarcodeReader/accessors.md#productkeys) | Get or set the Dynamsoft Barcode Reader SDK product keys. | 
| [`version`](BarcodeReader/accessors.md#version) | Get current version. | 

---    
## BarcodeScanner

The `BarcodeScanner` class is used for **video** decoding.

### `BarcodeScanner` Methods

#### Initialize and Destroy

The following methods are related to initializing and destroying the `BarcodeScanner` object.

| Method               | Description |
|----------------------|-------------|
| [`createInstance`](BarcodeScanner/methods/initialize-and-destroy.md#createinstance) | Create a  `BarcodeScanner` object. |
| [`destroy`](BarcodeScanner/methods/initialize-and-destroy.md#destroy) | Destroy the `BarcodeScanner` object. |
| [`getUIElement`](BarcodeScanner/methods/initialize-and-destroy.md#getuielement) | Get HTML element containing the `BarcodeScanner` object. |
| [`setUIElement`](BarcodeScanner/methods/initialize-and-destroy.md#setuielement) | set html element containing the `barcodescanner` object. |

#### Camera Controls

The following methods are related to controlling the camera and its settings.

| Method               | Description |
|----------------------|-------------|
| [`getAllCameras`](BarcodeScanner/methods/camera-controls.md#getallcameras) | Get information of all available cameras on the device. |
| [`getCurrentCamera`](BarcodeScanner/methods/camera-controls.md#getcurrentcamera) | Get information about the currently used camera. |
| [`setCurrentCamera`](BarcodeScanner/methods/camera-controls.md#setcurrentcamera) | Set camera by its information or device ID. |
| [`hide`](BarcodeScanner/methods/camera-controls.md#hide) | Stop the camera and hide the camera UI element. |
| [`show`](BarcodeScanner/methods/camera-controls.md#show) | Show the camera UI element, open the camera, and start decoding. |
| [`close`](BarcodeScanner/methods/camera-controls.md#close) | Close and release the camera. |
| [`isOpen`](BarcodeScanner/methods/camera-controls.md#isopen) | Check if the camera is open. |
| [`open`](BarcodeScanner/methods/camera-controls.md#open) | Open the camera. |
| [`pause`](BarcodeScanner/methods/camera-controls.md#pause) | Pause the video stream. |
| [`play`](BarcodeScanner/methods/camera-controls.md#play) | Continue the video stream. |
| [`stop`](BarcodeScanner/methods/camera-controls.md#stop) | Stop the video and release the camera. |
| [`pauseScan`](BarcodeScanner/methods/camera-controls.md#pausescan) | Pause the video decoding process. |
| [`resumeScan`](BarcodeScanner/methods/camera-controls.md#resumescan) | Resume the video decoding process. |

#### Capture Settings

The following methods are related to the camera's capture settings.

| Method               | Description |
|----------------------|-------------|
| [`getCapabilities`](BarcodeScanner/methods/capture-settings.md#getcapabilities) | Get the camera capabilities. |
| [`getResolution`](BarcodeScanner/methods/capture-settings.md#getresolution) | Get current video resolution. |
| [`setResolution`](BarcodeScanner/methods/capture-settings.md#setresolution) | Set current video resolution. |
| [`getScanSettings`](BarcodeScanner/methods/capture-settings.md#getscansettings) | Get current scan settings. |
| [`updateScanSettings`](BarcodeScanner/methods/capture-settings.md#updatescansettings) | Modify and update scan settings. |
| [`getVideoSettings`](BarcodeScanner/methods/capture-settings.md#getvideosettings) | Get current video settings. |
| [`updateVideoSettings`](BarcodeScanner/methods/capture-settings.md#updatevideosettings) | Modify and update video settings. |
| [`setColorTemperature`](BarcodeScanner/methods/capture-settings.md#setcolortemperature) | Adjust the video colour temperature. |
| [`setExposureCompensation`](BarcodeScanner/methods/capture-settings.md#setexposurecompensation) | Adjust the video exposure level. |
| [`setFrameRate`](BarcodeScanner/methods/capture-settings.md#setframerate) | Adjust the video frame rate. |
| [`setZoom`](BarcodeScanner/methods/capture-settings.md#setzoom) | Adjust the video zoom ratio. |
| [`turnOffTorch`](BarcodeScanner/methods/capture-settings.md#turnofftorch) | Turn off the torch/flashlight. |
| [`turnOnTorch`](BarcodeScanner/methods/capture-settings.md#turnontorch) | Turn on the torch/flashlight. |

#### Runtime Settings

The following methods are related to customizing runtime settings.

| Method               | Description |
|----------------------|-------------|
| [`updateRuntimeSettings`](BarcodeScanner/methods/runtime-settings.md#updateruntimesettings.md) | Modify and update the current runtime settings. |


#### Inherited Methods

The following methods are inherited from the `BarcodeReader` class. 

* [`detectEnvironment`](BarcodeReader/methods/initialize-and-destroy.md#detectenvironment) 
* [`isLoaded`](BarcodeReader/methods/initialize-and-destroy.md#isloaded)
* [`loadWasm`](BarcodeReader/methods/initialize-and-destroy.md#loadwasm)
* [`getModeArgument`](BarcodeReader/methods/parameter-and-runtime-settings.md#getmodeargument) 
* [`setModeArgument`](BarcodeReader/methods/parameter-and-runtime-settings.md#setmodeargument) 
* [`getRuntimeSettings`](BarcodeReader/methods/parameter-and-runtime-settings.md#getruntimesettings) 
* [`resetRuntimeSettings`](BarcodeReader/methods/parameter-and-runtime-settings.md#resetruntimesettings)

### `BarcodeScanner` Properties

| Property             | Description |
|----------------------|-------------|
| `bPlaySoundOnSuccessfulRead` | If set to `true`, a sound will be played when a barcode is read successfully. |
| [`barcodeFillStyle`](BarcodeScanner/properties.md#barcodefillstyle) | Set the style used when filling in located barcode. | 
| `barcodeLineWidth` | Set the width of the located barcode border. | 
| [`barcodeStrokeStyle`](BarcodeScanner/properties.md#barcodestrokestyle) | Set the style of the located barcode border. | 
| [`regionMaskFillStyle`](BarcodeScanner/properties.md#regionmaskfillstyle) | Set the style used when filling the mask beyond the region. | 
| `regionMaskLineWidth` | Set the width of the region border. | 
| [`regionMaskStrokeStyle`](BarcodeScanner/properties.md#regionmaskstrokestyle) | Set the style of the region border. | 
| [`onFrameRead`](BarcodeScanner/properties.md#onframeread) | Triggered a frame has been scanned. | 
| [`onPlayed`](BarcodeScanner/properties.md#onplayed) | Triggered when the camera video stream is played. | 
| [`onUnduplicatedRead`](BarcodeScanner/properties.md#onunduplicatedread) | Triggered when a new, unduplicated barcode is found. | 

#### Inherited Properties

The following properties are inherited from the `BarcodeReader` class.

* [`_bUseFullFeature`](BarcodeReader/properties.md#_busefullfeature)  
* `bDestroyed`
* `bSaveOriCanvas`
* `oriCanvas`

### `BarcodeScanner` Accessors

| Accessors            | Description |
|----------------------|-------------|
| [`singleFrameMode`](BarcodeScanner/accessors.md#singleframemode) | If set to `true`, single video frames will be used instead of a continuous video stream. | 
| [`soundOnSuccessfulRead`](BarcodeScanner/accessors.md#soundonsuccessfulread) | Get or set the sound to play when a barcode is read successfully. | 
| [`defaultUIElementURL`](BarcodeScanner/accessors.md#defaultuielementurl) | Get or set the default scanner UI. | 

#### Inherited Accessors

The following accessors are inherited from the `BarcodeReader` class.

* [`engineResourcePath`](BarcodeReader/accessors.md#engineresourcepath) 
* [`productKeys`](BarcodeReader/accessors.md#productkeys) 
* [`version`](BarcodeReader/accessors.md#version)

### `BarcodeScanner` Interfaces

| Interface            | Description |
|----------------------|-------------|
| [`FrameFilter`](BarcodeScanner/interfaces.md#framefilter) | Filter and discard video frames while focusing. |
| [`ScanSettings`](BarcodeScanner/interfaces.md#scansettings) | Configures the video stream settings. |
| [`ScannerPlayCallbackInfo`](BarcodeScanner/interfaces.md#scannerplaycallbackinfo) | Stores the height and width constraints of the video stream. |
| [`VideoDeviceInfo`](BarcodeScanner/interfaces.md#videodeviceinfo) | Stores the video device information. | 


---
## Global Interfaces

| Interface            | Description |
|----------------------|-------------|
| [`BarcodeReaderException`](global-interfaces.md#barcodereaderexception) | Exceptions raised for Barcode Reader errors. |
| [`FurtherModes`](global-interfaces.md#furthermodes) | Stores additional modes. |
| [`LocalizationResult`](global-interfaces.md#localizationresult) | Stores the localization result of the detected barcode. |
| [`RegionDefinition`](global-interfaces.md#regiondefinition) | Stores the barcode region information.|  
| [`RuntimeSettings`](global-interfaces.md#runtimesettings) | Stores the barcode reading runtime settings. | 
| [`TextResult`](global-interfaces.md#textresult) | Stores the decoded barcode text results. | 

---
## Enumerations

* [`EnumAccompanyingTextRecognitionMode`]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode)	
* [`EnumBarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode)
* [`EnumBarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode)
* [`EnumBarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat)
* [`EnumBarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2)
* [`EnumBinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode)
* [`EnumColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode)
* [`EnumColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode)
* [`EnumDeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode)
* [`EnumDPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode)
* [`EnumErrorCode`]({{ site.enumerations }}error-code.html)
* [`EnumGrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode)
* [`EnumImagePixelFormat`]({{ site.enumerations }}other-enums.html#imagepixelformat)
* [`EnumImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode)
* [`EnumIMResultDataType`]({{ site.enumerations }}result-enums.html#imresultdatatype)
* [`EnumIntermediateResultSavingMode`]({{ site.enumerations }}result-enums.html#intermediateresultsavingmode)
* [`EnumIntermediateResultType`]({{ site.enumerations }}result-enums.html#intermediateresulttype)
* [`EnumLocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode)
* [`EnumRegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode)
* [`EnumResultCoordinateType`]({{ site.enumerations }}result-enums.html#resultcoordinatetype)
* [`EnumResultType`]({{ site.enumerations }}result-enums.html#resulttype)
* [`EnumScaleUpMode`]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode)
* [`EnumTerminatePhase`]({{ site.enumerations }}parameter-mode-enums.html#terminatephase)
* [`EnumTextAssistedCorrectionMode`]({{ site.enumerations }}parameter-mode-enums.html#textassistedcorrectionmode)
* [`EnumTextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode)
* [`EnumTextResultOrderMode`]({{ site.enumerations }}result-enums.html#textresultordermode)
* [`EnumTextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode)