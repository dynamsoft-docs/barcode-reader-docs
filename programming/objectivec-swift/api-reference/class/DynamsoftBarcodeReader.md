---
layout: default-layout
title: Dynamsoft Barcode Reader Objective-C & Swift API Reference - DynamsoftBarcodeReader Class
description: This page shows the DynamsoftBarcodeReader Class of Dynamsoft Barcode Reader for iOS SDK.
keywords: DynamsoftBarcodeReader, class, api reference, objective-c, oc, swift
needAutoGenerateSidebar: false
---


# DynamsoftBarcodeReader

- [Attributes](#attributes)
- [Methods](#methods)

  - [Initialize](#initialize)
  - [Decode](#decode)
  - [Parameter and Runtime Settings](#parameter-and-runtime-settings)
  - [License related](#license-related)
  - [Result](#result)
  - [Video](#video)

Defines a class that provides functions for working with extracting barcode data. 

Four methods are now supported for editing runtime settings — reset, initialize, append, and update:

- Reset runtime settings: resets all parameters in runtime settings to default values.
- Initialize with template: resets runtime settings firstly and replaces all parameters in runtime settings with the values specified in the given template regardless of the current runtime settings.
- Append template to runtime settings: appends the template and updates runtime settings; the conflicting values will be assigned by the rules in DBRPublicRuntimeSettings.
- Update with struct: updates the current runtime settings with the values specified in the given struct; the parameters not defined in the struct remain unchanged.

## Typedefs

```objc
@interface DynamsoftBarcodeReader
```  
  
---
  

## Attributes 
  
| Attribute | Type |
|---------- | ---- |
| [`license`](#license) | *NSString\** |


### license

Stores the license used in DynamsoftBarcodeReader.

```objc
NSString* license
```

## Methods

### Initialize
  
  | Method               | Description |
  |----------------------|-------------|
  | [`init`](../api/initialize.md#init) | Create an instance of Dynamsoft Barcode Reader. |


### Decode

  | Method               | Description |
  |----------------------|-------------|
  | [`decodeFileWithName`](../api/decode.md#decodefilewithname) | Decode barcodes from a specified image file. |
  | [`decodeImage`](../api/decode.md#decodeimage) | Decode barcodes from an image file in memory. |
  | [`decodeBuffer`](../api/decode.md#decodebuffer) | Decode barcodes from raw buffer. |
  | [`decodeBase64`](../api/decode.md#decodebase64) | Decode barcodes from a base64 encoded string. |


### Parameter and Runtime Settings

#### Basic
  
  | Method               | Description |
  |----------------------|-------------|
  | [`setModeArgument`](../api/parameter-and-runtime-settings-basic.md#setmodeargument) | Set argument value for the specified mode parameter. |
  | [`getModeArgument`](../api/parameter-and-runtime-settings-basic.md#getmodeargument) | Get argument value for the specified mode parameter. |
  | [`getRuntimeSettings`](../api/parameter-and-runtime-settings-basic.md#getruntimesettings) | Get current runtime settings. |
  | [`updateRuntimeSettings`](../api/parameter-and-runtime-settings-basic.md#updateruntimesettings) | Modify and update the current runtime settings. |
  | [`resetRuntimeSettings`](../api/parameter-and-runtime-settings-basic.md#resetruntimesettings) | Reset runtime settings to default. |

#### Advanced
  
  | Method               | Description |
  |----------------------|-------------|
  | [`initRuntimeSettingsWithFile`](../api/parameter-and-runtime-settings-advanced.md#initruntimesettingswithfile) | Initialize runtime settings with the settings in a given JSON file. |
  | [`initRuntimeSettingsWithString`](../api/parameter-and-runtime-settings-advanced.md#initruntimesettingswithstring) | Initialize runtime settings with the settings in a given JSON string. |
  | [`appendTplFileToRuntimeSettings`](../api/parameter-and-runtime-settings-advanced.md#appendtplfiletoruntimesettings) | Append a new template file to the current runtime settings. |
  | [`appendTplStringToRuntimeSettings`](../api/parameter-and-runtime-settings-advanced.md#appendtplstringtoruntimesettings) | Append a new template string to the current runtime settings. |
  | [`allParameterTemplateNames`](../api/parameter-and-runtime-settings-advanced.md#allparametertemplatenames) | Get the count of the parameter templates. |
  | [`outputSettingsToFile`](../api/parameter-and-runtime-settings-advanced.md#outputsettingstofile) | Output runtime settings to a settings file (JSON file). |
  | [`outputSettingsToString`](../api/parameter-and-runtime-settings-advanced.md#outputsettingstostring) | Output runtime settings to a string. |


&nbsp; 


### License related
   
  | Method               | Description |
  |----------------------|-------------|
  | [`initWithLicense`](../api/license.md#initwithlicense) | Read product key and activate the SDK. |
  | [`initWithLicenseFromServer`](../api/license.md#initwithlicensefromserver) | Initialize license and connect to the specified server for online verification. |
  | [`outputLicenseToString`](../api/license.md#outputlicensetostring) | Output the license content to a string from the license server. |


### Result
   
  | Method               | Description |
  |----------------------|-------------|
  | [`getIntermediateResult`](../api/result.md#getintermediateresult) | Get intermediate results. |


&nbsp; 


### Video

#### Decode
   
  | Method               | Description |
  |----------------------|-------------|
  | [`startFrameDecoding`](../api/video.md#startframedecoding) | Decode barcodes from inner frame queue. |
  | [`startFrameDecodingEx`](../api/video.md#startframedecodingex) | Decode barcodes from inner frame queue. |
  | [`appendFrame`](../api/video.md#appendframe) | Append a frame image buffer to the inner frame queue. |
  | [`stopFrameDecoding`](../api/video.md#stopframedecoding) | Stop thread used for frame decoding. |

#### Parameter
   
  | Method               | Description |
  |----------------------|-------------|
  | [`getFrameDecodingParameters`](../api/video.md#getframedecodingparameters) | Initialize frame decoding parameter. |

#### Delegate
   
  | Method               | Description |
  |----------------------|-------------|
  | [`setDBRErrorDelegate`](../api/video.md#setdbrerrordelegate) | Set callback function to process errors generated during frame decoding. |
  | [`setDBRTextResultDelegate`](../api/video.md#setdbrtextresultdelegate) | Set callback function to process text results generated during frame decoding. |
  | [`setDBRIntermediateResultDelegate`](../api/video.md#setdbrintermediateresultdelegate) | Set callback function to process intermediate results generated during frame decoding. |

#### Status retrieval
   
  | Method               | Description |
  |----------------------|-------------|
  | [`getLengthOfFrameQueue`](../api/video.md#getlengthofframequeue) | Get length of current inner frame queue. |
  

&nbsp; 