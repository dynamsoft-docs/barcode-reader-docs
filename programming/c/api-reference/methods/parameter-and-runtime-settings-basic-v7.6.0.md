---
layout: default-layout
title: Dynamsoft Barcode Reader C Language API Reference - Parameter and Runtime Settings Basic Methods
description: This page shows basic Runtime Settings methods of Dynamsoft Barcode Reader for C Language.
keywords: DBR_SetModeArgument, DBR_GetModeArgument, DBR_GetRuntimeSettings, DBR_UpdateRuntimeSettings, DBR_ResetRuntimeSettings, parameter and runtime settings basic methods, api reference, c
needAutoGenerateSidebar: true
---

# C API Reference - Parameter and Runtime Settings Basic Methods
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_SetModeArgument`](#dbr_setmodeargument) | Set argument value for the specified mode parameter. |
  | [`DBR_GetModeArgument`](#dbr_getmodeargument) | Get argument value for the specified mode parameter. |
  | [`DBR_GetRuntimeSettings`](#dbr_getruntimesettings) | Get current runtime settings. |
  | [`DBR_UpdateRuntimeSettings`](#dbr_updateruntimesettings) | Modify and update the current runtime settings. |
  | [`DBR_ResetRuntimeSettings`](#dbr_resetruntimesettings) | Reset runtime settings to default. |

---






## DBR_SetModeArgument
Set argument value for the specified mode parameter.


```c
DBR_API int DBR_SetModeArgument (void* barcodeReader, const char* pModesName, const int index, const char* pArgumentName, const char* pArgumentValue, char errorMsgBuffer[], const int errorMsgBufferLen)
```   
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.   
`[in]	pModesName` The mode parameter name to set argument.  
`[in]	index` The array index of mode parameter to indicate a specific mode.  
`[in]	pArgumentName` The name of the argument to set.  
`[in]	pArgumentValue` The value of the argument to set.  
`[in,out]` errorMsgBuffer	The buffer is allocated by the caller and the recommended length is 256. The error message will be copied to the buffer.  
`[in] errorMsgBufferLen` The length of the allocated buffer.

#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_SET_MODE_ARGUMENT_ERROR.   
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*
  
#### Remark
Check follow link for available modes and arguments:
- [`AccompanyingTextRecognitionModes`]({{ site.parameters_reference }}accompanying-text-recognition-modes.html)
- [`BarcodeColourModes`]({{ site.parameters_reference }}barcode-colour-modes.html)
- [`BinarizationModes`]({{ site.parameters_reference }}binarization-modes.html)
- [`ColourClusteringModes`]({{ site.parameters_reference }}colour-clustering-modes.html)
- [`ColourConversionModes`]({{ site.parameters_reference }}colour-conversion-modes.html)
- [`DeformationResistingModes`]({{ site.parameters_reference }}deformation-resisting-modes.html)
- [`ImagePreprocessingModes`]({{ site.parameters_reference }}image-preprocessing-modes.html)
- [`IntermediateResultSavingMode`]({{ site.parameters_reference }}intermediate-result-saving-mode.html)
- [`LocalizationModes`]({{ site.parameters_reference }}localization-modes.html)
- [`RegionPredetectionModes`]({{ site.parameters_reference }}region-predetection-modes.html)
- [`ScaleUpModes`]({{ site.parameters_reference }}scale-up-modes.html)
- [`TextAssistedCorrectionMode`]({{ site.parameters_reference }}text-assisted-correction-mode.html)
- [`TextFilterModes`]({{ site.parameters_reference }}text-filter-modes.html)
- [`TextureDetectionModes`]({{ site.parameters_reference }}texture-detection-modes.html) 

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
PublicRuntimeSettings settings;
DBR_GetRuntimeSettings(barcodeReader, &settings);
settings.binarizationModes[0] = BM_LOCAL_BLOCK;
char errorMessage[256];
DBR_UpdateRuntimeSettings(barcodeReader, &settings, errorMessage, 256);
DBR_SetModeArgument(barcodeReader, "BinarizationModes", 0, "EnableFillBinaryVacancy", "1", errorMessage, 256);
DBR_DestroyInstance(barcodeReader);
```

&nbsp;





## DBR_GetModeArgument
Get argument value for the specified mode parameter.

```c
DBR_API int DBR_GetModeArgument (void* barcodeReader, const char* pModesName, const int index, const char* pArgumentName, char valueBuffer[], const int valueBufferLen, char errorMsgBuffer[], const int errorMsgBufferLen)
```   
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.   
`[in]	pModesName` The mode parameter name to get argument.  
`[in]	index` The array index of mode parameter to indicate a specific mode.  
`[in]	pArgumentName` The name of the argument to get.  
`[in,out]	valueBuffer` The buffer is allocated by caller and the recommended length is 480. The argument value would be copied to the buffer.  
`[in]	valueBufferLen` The length of allocated buffer.  
`[in,out]	errorMsgBuffer` The buffer is allocated by the caller and the recommended length is 256. The error message will be copied to the buffer.  
`[in]	errorMsgBufferLen` The length of the allocated buffer.  

#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_GET_MODE_ARGUMENT_ERROR.  
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

#### Remark
Check follow link for available modes and arguments:
- [`AccompanyingTextRecognitionModes`]({{ site.parameters_reference }}accompanying-text-recognition-modes.html)
- [`BarcodeColourModes`]({{ site.parameters_reference }}barcode-colour-modes.html)
- [`BinarizationModes`]({{ site.parameters_reference }}binarization-modes.html)
- [`ColourClusteringModes`]({{ site.parameters_reference }}colour-clustering-modes.html)
- [`ColourConversionModes`]({{ site.parameters_reference }}colour-conversion-modes.html)
- [`DeformationResistingModes`]({{ site.parameters_reference }}deformation-resisting-modes.html)
- [`ImagePreprocessingModes`]({{ site.parameters_reference }}image-preprocessing-modes.html)
- [`IntermediateResultSavingMode`]({{ site.parameters_reference }}intermediate-result-saving-mode.html)
- [`LocalizationModes`]({{ site.parameters_reference }}localization-modes.html)
- [`RegionPredetectionModes`]({{ site.parameters_reference }}region-predetection-modes.html)
- [`ScaleUpModes`]({{ site.parameters_reference }}scale-up-modes.html)
- [`TextAssistedCorrectionMode`]({{ site.parameters_reference }}text-assisted-correction-mode.html)
- [`TextFilterModes`]({{ site.parameters_reference }}text-filter-modes.html)
- [`TextureDetectionModes`]({{ site.parameters_reference }}texture-detection-modes.html)  

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
PublicRuntimeSettings settings;
DBR_GetRuntimeSettings(barcodeReader, &settings);
settings.binarizationModes[0] = BM_LOCAL_BLOCK;
char errorMessage[256];
char argumentValue[480];
DBR_UpdateRuntimeSettings(barcodeReader, &settings, errorMessage, 256);
DBR_SetModeArgument(barcodeReader, "BinarizationModes", 0, "EnableFillBinaryVacancy", "1", errorMessage, 256);
DBR_GetModeArgument(barcodeReader, "BinarizationModes", 0, "EnableFillBinaryVacancy", argumentValue, 480, errorMessage, 256);
DBR_DestroyInstance(barcodeReader);
```

&nbsp;





## DBR_GetRuntimeSettings
Get current settings and save them into a [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html) struct.

```c
DBR_API int DBR_GetRuntimeSettings (void* barcodeReader, PublicRuntimeSettings* pSettings)
```   
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in,out]	pSettings` The struct of template settings.  

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
PublicRuntimeSettings settings;
int errorCode = DBR_GetRuntimeSettings(barcodeReader, &settings);
DBR_DestroyInstance(barcodeReader);
```

&nbsp;





## DBR_UpdateRuntimeSettings
Update runtime settings with a given [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html) struct.

```c
DBR_API int DBR_UpdateRuntimeSettings (void* barcodeReader, PublicRuntimeSettings* pSettings, char errorMsgBuffer[], const int errorMsgBufferLen)
```   
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	pSettings` The struct of template settings.  
`[in,out]	errorMsgBuffer` The buffer is allocated by caller and the recommended length is 256.The error message will be copied to the buffer.  
`[in]	errorMsgBufferLen` The length of the allocated buffer.  

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
PublicRuntimeSettings settings;
int errorCode = DBR_GetRuntimeSettings(barcodeReader, &settings);
settings.deblurLevel = 9;
char errorMessage[256];
DBR_UpdateRuntimeSettings(barcodeReader, &settings, errorMessage, 256);
DBR_DestroyInstance(barcodeReader);
```

&nbsp;





## DBR_ResetRuntimeSettings
Reset all parameters to default values.


```c
DBR_API int DBR_ResetRuntimeSettings (void* barcodeReader)
```   
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
PublicRuntimeSettings settings;
int errorCode = DBR_GetRuntimeSettings(barcodeReader, &settings);
settings.deblurLevel = 9;
DBR_UpdateRuntimeSettings(barcodeReader, &settings);
DBR_ResetRuntimeSettings(barcodeReader);
DBR_DestroyInstance(barcodeReader);
```
