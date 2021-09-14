---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - BarcodeReader Methods
description: This page shows BarcodeReader methods of Dynamsoft Barcode Reader for .NET SDK.
keywords: methods, BarcodeReader, api reference, .Net
needAutoGenerateSidebar: false
breadcrumbText: BarcodeReader Methods
---

# Class Dynamsoft.DBR.BarcodeReader

## Constructor and Destructor
   
  | Method               | Description |
  |----------------------|-------------|
  | [`BarcodeReader`](constructor-and-destructor.md#barcodereader) | Constructor of `BarcodeReader` object.|
  | [`Dispose`](constructor-and-destructor.md#dispose) | Destroys an instance of Dynamsoft Barcode Reader. |
   
 
## License
  
  | Method               | Description |
  |----------------------|-------------|
  | [`InitLicenseFromServer`](license.md#initlicensefromserver) | Initializes license and connect to the specified server for online verification. |
  | [`InitLicenseFromLicenseContent`](license.md#initlicensefromlicensecontent) | Initializes license from the license content on client machine for offline verification. |
  | [`OutputLicenseToString`](license.md#outputlicensetostring) | Outputs the license content as an encrypted string from the license server to be used for offline license verification.|
  | [`InitLTSConnectionParameters`](license.md#initltsconnectionparameters) | Initializes a DMDLSConnectionParameters struct with default values. |
  | [`InitLicenseFromLTS`](license.md#initlicensefromlts) | Initializes the barcode reader license and connects to the specified server for online verification. |
  | [`GetIdleInstancesCount`](license.md#getidleinstancescount) | Gets available instances count when charging by concurrent instances count. |
   
   
   
## Decode
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DecodeFile`](decode.md#decodefile) | Decodes barcodes from a specified image file. |
  | [`DecodeFileInMemory`](decode.md#decodefileinmemory) | Decode barcodes from an image file in memory. |
  | [`DecodeBuffer`](decode.md#decodebuffer) | Decodes barcodes from the memory buffer containing image pixels in defined format. |
  | [`DecodeBase64String`](decode.md#decodebase64string) | Decodes barcodes from a base64 encoded string. |
  | [`DecodeBitmap`](decode.md#decodebitmap) | Decodes barcode from a bitmap. |
  | [`InitIntermediateResult`](decode.md#initintermediateresult) | Inits an intermediateResult struct with default values. |
  | [`DecodeIntermediateResults`](decode.md#decodeintermediateresults) | Decodes barcode from intermediate results. |
  
   

## Basic Settings Functions
   
  | Method               | Description |
  |----------------------|-------------|
  | [`SetModeArgument`](parameter-and-runtime-settings-basic.md#setmodeargument) | Sets the optional argument for a specified mode in Modes parameters. |
  | [`GetModeArgument`](parameter-and-runtime-settings-basic.md#getmodeargument) | Gets the optional argument for a specified mode in Modes parameters.  |
  | [`GetRuntimeSettings`](parameter-and-runtime-settings-basic.md#getruntimesettings) | Gets current runtime settings. |
  | [`UpdateRuntimeSettings`](parameter-and-runtime-settings-basic.md#updateruntimesettings) | Update runtime settings with a given struct. |
  | [`ResetRuntimeSettings`](parameter-and-runtime-settings-basic.md#resetruntimesettings) | Resets all parameters to default values. |

## Advanced Settings Functions
  
  | Method               | Description |
  |----------------------|-------------|
  | [`InitRuntimeSettingsWithFile`](parameter-and-runtime-settings-advanced.md#initruntimesettingswithfile)  | Initializes runtime settings with the settings in a given JSON file. |
  | [`InitRuntimeSettingsWithString`](parameter-and-runtime-settings-advanced.md#initruntimesettingswithstring) | Initializes runtime settings with the settings in a given JSON string. |
  | [`AppendTplFileToRuntimeSettings`](parameter-and-runtime-settings-advanced.md#appendtplfiletoruntimesettings) | Appends a new template file to the current runtime settings. |
  | [`AppendTplStringToRuntimeSettings`](parameter-and-runtime-settings-advanced.md#appendtplstringtoruntimesettings) | Appends a new template string to the current runtime settings. |
  | [`GetAllParameterTemplateNames`](parameter-and-runtime-settings-advanced.md#getallparametertemplatenames) | Gets the parameter templates name array. |
  | [`OutputSettingsToFile`](parameter-and-runtime-settings-advanced.md#outputsettingstofile) | Outputs runtime settings to a settings file (JSON file). |
  | [`OutputSettingsToString`](parameter-and-runtime-settings-advanced.md#outputsettingstostring) | Outputs runtime settings to a string. |
   
   
## Status Retrieval
   
  | Method               | Description |
  |----------------------|-------------|
  | [`GetVersion`](status-retrieval.md#getversion) | Gets version information of SDK. |
   
      
 

   
## Video

### Decode
    
   | Method               | Description |
   |----------------------|-------------|
   | [`StartFrameDecoding`](video.md#startframedecoding) | Starts a new thread to decode barcodes from the inner frame queue. |
   | [`StartFrameDecodingEx`](video.md#startframedecodingex) | Starts a new thread to decode barcodes from the inner frame queue. |
   | [`AppendFrame`](video.md#appendframe) | Appends a frame image buffer to the inner frame queue. |
   | [`StopFrameDecoding`](video.md#stopframedecoding) | Stops the frame decoding thread created by StartFrameDecoding. |

### Parameter
   
   | Method               | Description |
   |----------------------|-------------|
   | [`InitFrameDecodingParameters`](video.md#initframedecodingparameters) | Initializes frame decoding parameters. |


### Callback

   | Method               | Description |
   |----------------------|-------------|
   | [`SetErrorCallback`](video.md#seterrorcallback) | Set callback function to process errors generated during frame decoding. |
   | [`SetTextResultCallback`](video.md#settextresultcallback) | Set callback function to process text results generated during frame decoding. |
   | [`SetIntermediateResultCallback`](video.md#setintermediateresultcallback) | Set callback function to process intermediate results generated during frame decoding. |

### Status retrieval
   
   | Method               | Description |
   |----------------------|-------------|
   | [`GetLengthOfFrameQueue`](video.md#getlengthofframequeue) | Gets length of current inner frame queue. |
 
   
 


## Result

   | Method               | Description |
   |----------------------|-------------|
   | [`GetIntermediateResults`](result.md#getintermediateresults) | Returns intermediate results containing the original image, the colour clustered image, the binarized Image, contours, Lines, TextBlocks, etc.  |


 


## `BarcodeReader` Attributes
  
  | Attribute            | Description |
  |----------------------|-------------|
  | `ProductKeys`  | Product keys used for Dynamsoft Barcode Reader. |
  
   
 
