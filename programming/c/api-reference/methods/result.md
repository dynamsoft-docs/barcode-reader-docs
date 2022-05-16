---
layout: default-layout
title: Dynamsoft Barcode Reader C Language API Reference - Result Functions
description: This page shows result functions of Dynamsoft Barcode Reader for C Language.
keywords: DBR_GetAllTextResults, DBR_FreeTextResults, DBR_GetIntermediateResults, DBR_FreeIntermediateResults, result functions, api reference, c
needAutoGenerateSidebar: true
---

# Result Functions

  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_GetAllTextResults`](#dbr_getalltextresults) | Get all recognized barcode results.  |
  | [`DBR_FreeTextResults`](#dbr_freetextresults) | Free memory allocated for text results. |
  | [`DBR_GetIntermediateResults`](#dbr_getintermediateresults) | Get intermediate results. |
  | [`DBR_FreeIntermediateResults`](#dbr_freeintermediateresults) | Free memory allocated for the intermediate results. |
  





## DBR_GetAllTextResults
Get all recognized barcode results.

```c
DBR_API int DBR_GetAllTextResults (void* barcodeReader, TextResultArray** pResults)	
```   
   
**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.  
`[out] pResults`	Barcode text results returned by last calling function [`DBR_DecodeFile`](decode.md#dbr_decodefile) / [`DBR_DecodeFileInMemory`](decode.md#dbr_decodefileinmemory) / [`DBR_DecodeBuffer`](decode.md#dbr_decodebuffer) / [`DBR_DecodeBase64String`](decode.md#dbr_decodebase64string) / [`DBR_DecodeDIB`](decode.md#dbr_decodedib). The results is allocated by SDK and should be freed by calling function [`DBR_FreeTextResults`](#dbr_freetextresults).

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Code Snippet**  
```c
char errorBuf[512];
DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
void* barcodeReader = DBR_CreateInstance();
TextResultArray* pResults;
int errorCode = DBR_DecodeFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
DBR_GetAllTextResults(barcodeReader, &pResults);
DBR_FreeTextResults(&pResults);
DBR_DestroyInstance(barcodeReader);
```







## DBR_FreeTextResults
Free memory allocated for text results.

```c
DBR_API void DBR_FreeTextResults (TextResultArray** pResults)	
```   
   
**Parameters**  
`[in]	pResults` Text results.

**Code Snippet**  
```c
char errorBuf[512];
DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
void* barcodeReader = DBR_CreateInstance();
TextResultArray* pResults;
int errorCode = DBR_DecodeFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
DBR_GetAllTextResults(barcodeReader, &pResults);
DBR_FreeTextResults(&pResults);
DBR_DestroyInstance(barcodeReader);
```







## DBR_GetIntermediateResults
Return intermediate results containing the original image, the colour clustered image, the binarized image, contours, lines, text blocks, etc.

```c
DBR_API int DBR_GetIntermediateResults (void* barcodeReader, IntermediateResultArray** pResult)	
```   

   
**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.  
`[out]	pResult` The intermediate results returned by the SDK.

**Return Value**  
Returns error code. Possible return(s): DBR_OK.     
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*


**Code Snippet**  
```c
char errorBuf[512];
DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
void* barcodeReader = DBR_CreateInstance();
PublicRuntimeSettings settings;
DBR_GetRuntimeSettings(barcodeReader, &settings);
settings.intermediateResultTypes = IRT_ORIGINAL_IMAGE | IRT_COLOUR_CLUSTERED_IMAGE | IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE;
char errorMessage[256];
DBR_UpdateRuntimeSettings(barcodeReader, &settings, errorMessage, 256);
DBR_DecodeFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
IntermediateResultArray* pResults = NULL;
DBR_GetIntermediateResults(barcodeReader, &pResults);
DBR_FreeIntermediateResults(&pResults);
DBR_DestroyInstance(barcodeReader);
```







## DBR_FreeIntermediateResults
Frees memory allocated for the intermediate results.


```c
DBR_API void DBR_FreeIntermediateResults (IntermediateResultArray** pResults)
```   
   
**Parameters**  
`[in] pResults` The intermediate results.

**Code Snippet**  
```c
char errorBuf[512];
DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
void* barcodeReader = DBR_CreateInstance();
PublicRuntimeSettings settings;
DBR_GetRuntimeSettings(barcodeReader, &settings);
settings.intermediateResultTypes = IRT_ORIGINAL_IMAGE | IRT_COLOUR_CLUSTERED_IMAGE | IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE;
char errorMessage[256];
DBR_UpdateRuntimeSettings(barcodeReader, &settings, errorMessage, 256);
DBR_DecodeFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
IntermediateResultArray* pResults = NULL;
DBR_GetIntermediateResults(barcodeReader, &pResults);
DBR_FreeIntermediateResults(&pResults);
DBR_DestroyInstance(barcodeReader);
```



