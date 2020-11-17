---
layout: default-layout
title: Dynamsoft Barcode Reader Objective-C & Swift API Reference - Methods
description: This page shows all methods of Dynamsoft Barcode Reader for iOS SDK.
keywords: methods, api reference, objective-c, oc, swift
needAutoGenerateSidebar: false
breadcrumbText: Methods
---

# Dynamsoft Barcode Reader SDK - Objective-C & Swift Methods

## Initialize
  
  | Method               | Description |
  |----------------------|-------------|
  | [`init`](initialize.md#init) | Create an instance of Dynamsoft Barcode Reader. |


&nbsp; 


## Decode

  | Method               | Description |
  |----------------------|-------------|
  | [`decodeFileWithName`](decode.md#decodefilewithname) | Decode barcodes from a specified image file. |
  | [`decodeImage`](decode.md#decodeimage) | Decode barcodes from an image file in memory. |
  | [`decodeBuffer`](decode.md#decodebuffer) | Decode barcodes from raw buffer. |
  | [`decodeBase64`](decode.md#decodebase64) | Decode barcodes from a base64 encoded string. |
  | [`createIntermediateResult`](decode.md#createintermediateresult) | Inits an intermediateResult struct with default values. |
  | [`decodeIntermediateResults`](decode.md#decodeintermediateresults) | Decodes barcode from intermediate results. |


&nbsp; 


## Parameter and Runtime Settings

### Basic
  
  | Method               | Description |
  |----------------------|-------------|
  | [`setModeArgument`](parameter-and-runtime-settings-basic.md#setmodeargument) | Set argument value for the specified mode parameter. |
  | [`getModeArgument`](parameter-and-runtime-settings-basic.md#getmodeargument) | Get argument value for the specified mode parameter. |
  | [`getRuntimeSettings`](parameter-and-runtime-settings-basic.md#getruntimesettings) | Get current runtime settings. |
  | [`updateRuntimeSettings`](parameter-and-runtime-settings-basic.md#updateruntimesettings) | Modify and update the current runtime settings. |
  | [`resetRuntimeSettings`](parameter-and-runtime-settings-basic.md#resetruntimesettings) | Reset runtime settings to default. |

### Advanced
  
  | Method               | Description |
  |----------------------|-------------|
  | [`initRuntimeSettingsWithFile`](parameter-and-runtime-settings-advanced.md#initruntimesettingswithfile) | Initialize runtime settings with the settings in a given JSON file. |
  | [`initRuntimeSettingsWithString`](parameter-and-runtime-settings-advanced.md#initruntimesettingswithstring) | Initialize runtime settings with the settings in a given JSON string. |
  | [`appendTplFileToRuntimeSettings`](parameter-and-runtime-settings-advanced.md#appendtplfiletoruntimesettings) | Append a new template file to the current runtime settings. |
  | [`appendTplStringToRuntimeSettings`](parameter-and-runtime-settings-advanced.md#appendtplstringtoruntimesettings) | Append a new template string to the current runtime settings. |
  | [`allParameterTemplateNames`](parameter-and-runtime-settings-advanced.md#allparametertemplatenames) | Get the count of the parameter templates. |
  | [`outputSettingsToFile`](parameter-and-runtime-settings-advanced.md#outputsettingstofile) | Output runtime settings to a settings file (JSON file). |
  | [`outputSettingsToString`](parameter-and-runtime-settings-advanced.md#outputsettingstostring) | Output runtime settings to a string. |


&nbsp; 


## License
   
  | Method               | Description |
  |----------------------|-------------|
  | [`initWithLicense`](license.md#initwithlicense) | Read product key and activate the SDK. |
  | [`initWithLicenseFromServer`](license.md#initwithlicensefromserver) | Initialize license and connect to the specified server for online verification. |
  | [`outputLicenseToString`](license.md#outputlicensetostring) | Output the license content to a string from the license server. |
  | [`initLicenseFromLTS`](license.md#initlicensefromlts) | Initializes the barcode reader license and connects to the specified server for online verification. |

&nbsp; 


## Result
   
  | Method               | Description |
  |----------------------|-------------|
  | [`getIntermediateResult`](result.md#getintermediateresult) | Get intermediate results. |


&nbsp; 


## Video

### Decode
   
  | Method               | Description |
  |----------------------|-------------|
  | [`startFrameDecoding`](video.md#startframedecoding) | Decode barcodes from inner frame queue. |
  | [`startFrameDecodingEx`](video.md#startframedecodingex) | Decode barcodes from inner frame queue. |
  | [`appendFrame`](video.md#appendframe) | Append a frame image buffer to the inner frame queue. |
  | [`stopFrameDecoding`](video.md#stopframedecoding) | Stop thread used for frame decoding. |

### Parameter
   
  | Method               | Description |
  |----------------------|-------------|
  | [`getFrameDecodingParameters`](video.md#getframedecodingparameters) | Initialize frame decoding parameter. |

### Delegate
   
  | Method               | Description |
  |----------------------|-------------|
  | [`setDBRErrorDelegate`](video.md#setdbrerrordelegate) | Set callback function to process errors generated during frame decoding. |
  | [`setDBRTextResultDelegate`](video.md#setdbrtextresultdelegate) | Set callback function to process text results generated during frame decoding. |
  | [`setDBRIntermediateResultDelegate`](video.md#setdbrintermediateresultdelegate) | Set callback function to process intermediate results generated during frame decoding. |

### Status retrieval
   
  | Method               | Description |
  |----------------------|-------------|
  | [`getLengthOfFrameQueue`](video.md#getlengthofframequeue) | Get length of current inner frame queue. |
  