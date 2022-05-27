---
layout: default-layout
title: Dynamsoft Barcode Reader C Language API Reference - Functions
description: This page shows all functions of Dynamsoft Barcode Reader for C Language.
keywords: functions, api reference, c
needAutoGenerateSidebar: true
---

# Global Functions

## Initialize and Destroy
  
  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_CreateInstance`](initialize-and-destroy.md#dbr_createinstance) | Create an instance of Dynamsoft Barcode Reader. |
  | [`DBR_DestroyInstance`](initialize-and-destroy.md#dbr_destroyinstance) | Destroy the instance of Dynamsoft Barcode Reader. |



## License
   
  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_InitLicense`](license.md#dbr_initlicense) | Initializes license key and activate the SDK. |
  | [`DBR_GetIdleInstancesCount`](license.md#dbr_getidleinstancescount) | Gets available instances count when charging by concurrent instances count. |
  | [`DBR_SetDeviceFriendlyName`](license.md#dbr_setdevicefriendlyname) | Sets a human-readable name that identifies the device. |
  | [`DBR_InitLicenseFromServer`](license.md#dbr_initlicensefromserver) | `Deprecated` |
  | [`DBR_InitLicenseFromLicenseContent`](license.md#dbr_initlicensefromlicensecontent) | `Deprecated` |
  | [`DBR_OutputLicenseToString`](license.md#dbr_outputlicensetostring) | `Deprecated` |
  | [`DBR_OutputLicenseToStringPtr`](license.md#dbr_outputlicensetostringptr) | `Deprecated` |
  | [`DBR_FreeLicenseString`](license.md#dbr_freelicensestring) | `Deprecated` |
  | [`DBR_InitDLSConnectionParameters`](license.md#dbr_initdlsconnectionparameters) | `Deprecated` |
  | [`DBR_InitLicenseFromDLS`](license.md#dbr_initlicensefromdls) | `Deprecated` |
  | [`DBR_InitLTSConnectionParameters`](license.md#dbr_initltsconnectionparameters) | `Deprecated` |
  | [`DBR_InitLicenseFromLTS`](license.md#dbr_initlicensefromlts) | `Deprecated` |


## Decode

  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_DecodeFile`](decode.md#dbr_decodefile) | Decode barcodes from a specified image file. |
  | [`DBR_DecodeFileInMemory`](decode.md#dbr_decodefileinmemory) | Decode barcodes from an image file in memory. |
  | [`DBR_DecodeBuffer`](decode.md#dbr_decodebuffer) | Decode barcodes from raw buffer. |
  | [`DBR_DecodeBase64String`](decode.md#dbr_decodebase64string) | Decode barcodes from a base64 encoded string. |
  | [`DBR_DecodeDIB`](decode.md#dbr_decodedib) | Decode barcode from a handle of device-independent bitmap (DIB). | 
  | [`DBR_InitIntermediateResult`](decode.md#dbr_initintermediateresult) | Inits an intermediateResult struct with default values. |
  | [`DBR_DecodeIntermediateResults`](decode.md#dbr_decodeintermediateresults) | Decodes barcode from intermediate results. |



## Basic Settings Functions
  
  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_SetModeArgument`](parameter-and-runtime-settings-basic.md#dbr_setmodeargument) | Set argument value for the specified mode parameter. |
  | [`DBR_GetModeArgument`](parameter-and-runtime-settings-basic.md#dbr_getmodeargument) | Get argument value for the specified mode parameter. |
  | [`DBR_GetRuntimeSettings`](parameter-and-runtime-settings-basic.md#dbr_getruntimesettings) | Get current runtime settings. |
  | [`DBR_UpdateRuntimeSettings`](parameter-and-runtime-settings-basic.md#dbr_updateruntimesettings) | Modify and update the current runtime settings. |
  | [`DBR_ResetRuntimeSettings`](parameter-and-runtime-settings-basic.md#dbr_resetruntimesettings) | Reset runtime settings to default. |

## Advanced Settings Functions
  
  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_InitRuntimeSettingsWithFile`](parameter-and-runtime-settings-advanced.md#dbr_initruntimesettingswithfile) | Initialize runtime settings with the settings in a given JSON file. |
  | [`DBR_InitRuntimeSettingsWithString`](parameter-and-runtime-settings-advanced.md#dbr_initruntimesettingswithstring) | Initialize runtime settings with the settings in a given JSON string. |
  | [`DBR_AppendTplFileToRuntimeSettings`](parameter-and-runtime-settings-advanced.md#dbr_appendtplfiletoruntimesettings) | Append a new template file to the current runtime settings. |
  | [`DBR_AppendTplStringToRuntimeSettings`](parameter-and-runtime-settings-advanced.md#dbr_appendtplstringtoruntimesettings) | Append a new template string to the current runtime settings. |
  | [`DBR_GetParameterTemplateCount`](parameter-and-runtime-settings-advanced.md#dbr_getparametertemplatecount) | Get the count of the parameter templates. |
  | [`DBR_GetParameterTemplateName`](parameter-and-runtime-settings-advanced.md#dbr_getparametertemplatename) | Get the parameter template name by index. |
  | [`DBR_OutputSettingsToFile`](parameter-and-runtime-settings-advanced.md#dbr_outputsettingstofile) | Output runtime settings to a settings file (JSON file). |
  | [`DBR_OutputSettingsToString`](parameter-and-runtime-settings-advanced.md#dbr_outputsettingstostring) | Output runtime settings to a string. |
  | [`DBR_OutputSettingsToStringPtr`](parameter-and-runtime-settings-advanced.md#dbr_outputsettingstostringptr) | Output runtime settings to a string. |
  | [`DBR_FreeSettingsString`](parameter-and-runtime-settings-advanced.md#dbr_freesettingsstring) | Free memory allocated for runtime settings string. |





## Result
   
  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_GetAllTextResults`](result.md#dbr_getalltextresults) | Get all recognized barcode results.  |
  | [`DBR_FreeTextResults`](result.md#dbr_freetextresults) | Free memory allocated for text results. |
  | [`DBR_GetIntermediateResults`](result.md#dbr_getintermediateresults) | Get intermediate results. |
  | [`DBR_FreeIntermediateResults`](result.md#dbr_freeintermediateresults) | Free memory allocated for the intermediate results. |





## Status Retrieval
  
  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) | Get error message by error code. |
  | [`DBR_GetVersion`](status-retrieval.md#dbr_getversion) | Get version information of SDK. |





## Video
### Decode
   
  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_StartFrameDecoding`](video.md#dbr_startframedecoding) | Decode barcodes from inner frame queue. |
  | [`DBR_StartFrameDecodingEx`](video.md#dbr_startframedecodingex) | Decode barcodes from inner frame queue. |
  | [`DBR_AppendFrame`](video.md#dbr_appendframe) | Append a frame image buffer to the inner frame queue. |
  | [`DBR_StopFrameDecoding`](video.md#dbr_stopframedecoding) | Stop thread used for frame decoding. |

### Parameter
   
  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_InitFrameDecodingParameters`](video.md#dbr_initframedecodingparameters) | Initialize frame decoding parameter. |

### Callback
   
  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_SetErrorCallback`](video.md#dbr_seterrorcallback) | Set callback function to process errors generated during frame decoding. |
  | [`DBR_SetTextResultCallback`](video.md#dbr_settextresultcallback) | Set callback function to process text results generated during frame decoding. |
  | [`DBR_SetIntermediateResultCallback`](video.md#dbr_setintermediateresultcallback) | Set callback function to process intermediate results generated during frame decoding. |

### Status retrieval
   
  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_GetLengthOfFrameQueue`](video.md#dbr_getlengthofframequeue) | Get length of current inner frame queue. |
  

