---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - BarcodeReader Methods
description: This page shows all BarcodeReader methods of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: methods, BarcodeReader, api reference, java
needAutoGenerateSidebar: true
---


# Class com.dynamsoft.dbr.BarcodeReader

## Initialize and Destroy
   
  | Method               | Description |
  |----------------------|-------------|
  | [`BarcodeReader`](initialize-and-destroy.md#barcodereader) | Initialization of `BarcodeReader` object.|
  | [`destroy`](initialize-and-destroy.md#destroy) | Destroys an instance of `BarcodeReader` object.|
   
   

   

## License
  
  | Method               | Description |
  |----------------------|-------------|
  | [`initLicense`](license.md#initlicense) | Read product key and activate the SDK. |
  | [`initLicenseFromServer`](license.md#initlicensefromserver) | Initialize license and connect to the specified server for online verification. |
  | [`initLicenseFromLicenseContent`](license.md#initlicensefromlicensecontent) | Initialize license from the license content on client machine for offline verification. |
  | [`outputLicenseToString`](license.md#outputlicensetostring) | Output the license content to a string from the license server. |
  | [`initDLSConnectionParameters`](license.md#initdlsconnectionparameters) | Initializes a DMDLSConnectionParameters struct with default values. |
  | [`initLicenseFromDLS`](license.md#initlicensefromdls) | Initializes the barcode reader license and connects to the specified server for online verification. |
  | [`getIdleInstancesCount`](license.md#getidleinstancescount) | Gets available instances count when charging by concurrent instances count. |
  | [`initLTSConnectionParameters`](license.md#initltsconnectionparameters) | `Deprecated`. Use [initDLSConnectionParameters](license.md#initdlsconnectionparameters) instead. |
  | [`initLicenseFromLTS`](license.md#initlicensefromlts) | `Deprecated`. Use [initLicenseFromDLS](license.md#initlicensefromdls) instead. |


## Decode
   
  | Method               | Description |
  |----------------------|-------------|
  | [`decodeFile`](decode.md#decodefile) | Decode barcodes from a specified image file. |
  | [`decodeFileInMemory`](decode.md#decodefileinmemory) | Decode barcodes from an image file in memory. |
  | [`decodeBuffer`](decode.md#decodebuffer) | Decode barcodes from raw buffer. |
  | [`decodeBase64String`](decode.md#decodebase64string) | Decode barcodes from a base64 encoded string. |
  | [`decodeBufferedImage`](decode.md#decodebufferedimage) | Decodes barcode from a buffered imag (bitmap). |
  | [`initIntermediateResult`](decode.md#initintermediateresult) | Inits an intermediateResult struct with default values. |
  | [`decodeIntermediateResults`](decode.md#decodeintermediateresults) | Decodes barcode from intermediate results. |
   
   
   
## Basic Settings Functions
   
  | Method               | Description |
  |----------------------|-------------|
  | [`setModeArgument`](parameter-and-runtime-settings-basic.md#setmodeargument) | Set argument value for the specified mode parameter. |
  | [`getModeArgument`](parameter-and-runtime-settings-basic.md#getmodeargument) | Get argument value for the specified mode parameter. |
  | [`getRuntimeSettings`](parameter-and-runtime-settings-basic.md#getruntimesettings) | Get current runtime settings. |
  | [`updateRuntimeSettings`](parameter-and-runtime-settings-basic.md#updateruntimesettings) | Modify and update the current runtime settings. |
  | [`resetRuntimeSettings`](parameter-and-runtime-settings-basic.md#resetruntimesettings) | Reset runtime settings to default. |

## Advanced Settings Functions
  
  | Method               | Description |
  |----------------------|-------------|
  | [`initRuntimeSettingsWithFile`](parameter-and-runtime-settings-advanced.md#initruntimesettingswithfile)  | Initialize runtime settings with the settings in a given JSON file. |
  | [`initRuntimeSettingsWithString`](parameter-and-runtime-settings-advanced.md#initruntimesettingswithstring) | Initialize runtime settings with the settings in a given JSON string. |
  | [`appendTplFileToRuntimeSettings`](parameter-and-runtime-settings-advanced.md#appendtplfiletoruntimesettings) | Append a new template file to the current runtime settings. |
  | [`appendTplStringToRuntimeSettings`](parameter-and-runtime-settings-advanced.md#appendtplstringtoruntimesettings) | Append a new template string to the current runtime settings. |
  | [`getAllParameterTemplateNames`](parameter-and-runtime-settings-advanced.md#getallparametertemplatenames) | Gets the parameter templates name array. |
  | [`outputSettingsToFile`](parameter-and-runtime-settings-advanced.md#outputsettingstofile) | Output runtime settings to a settings file (JSON file). |
  | [`outputSettingsToString`](parameter-and-runtime-settings-advanced.md#outputsettingstostring) | Output runtime settings to a string. |
   
      
   
   
## Result
   
  | Method               | Description |
  |----------------------|-------------|
  | [`getIntermediateResults`](result.md#getintermediateresults) | Get intermediate results. |
   
      


   
## Status Retrieval
   
  | Method               | Description |
  |----------------------|-------------|
  | [`getVersion`](status-retrieval.md#getversion) | Get version information of SDK.|
   
      


   
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
   | [`initFrameDecodingParameters`](video.md#initframedecodingparameters) | Initialize frame decoding parameter. |

### Callback
   
   | Method               | Description |
   |----------------------|-------------|
   | [`setErrorCallback`](video.md#seterrorcallback) | Set callback interface to process errors generated during frame decoding. |
   | [`setTextResultCallback`](video.md#settextresultcallback) | Set callback interface to process text results generated during frame decoding. |
   | [`setIntermediateResultCallback`](video.md#setintermediateresultcallback) | Set callback interface to process intermediate results generated during frame decoding. |

### Status retrieval
   
   | Method               | Description |
   |----------------------|-------------|
   | [`getLengthOfFrameQueue`](video.md#getlengthofframequeue) | Get length of current inner frame queue. |
 
   