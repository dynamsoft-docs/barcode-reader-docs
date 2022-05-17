---
layout: default-layout
title: Dynamsoft Barcode Reader C++ API Reference - CBarcodeReader Result Methods
description: This page shows CBarcodeReader Result methods of Dynamsoft Barcode Reader for C++ Language.
keywords: GetAllTextResults, FreeTextResults, GetIntermediateResults, FreeIntermediateResults, result methods, CBarcodeReader, api reference, c++
needAutoGenerateSidebar: true
---


# Result Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`GetAllTextResults`](#getalltextresults) | Get all recognized barcode results. |
  | [`FreeTextResults`](#freetextresults) | Free memory allocated for text results. |
  | [`GetIntermediateResults`](#getintermediateresults) | Get intermediate results. |
  | [`FreeIntermediateResults`](#freeintermediateresults) | Free memory allocated for the intermediate results. |







  
## GetAllTextResults
Get all recognized barcode results.

```cpp
int dynamsoft::dbr::CBarcodeReader::GetAllTextResults (TextResultArray** pResults)	
```   
   
**Parameters**  
`[out] pResults` [`TextResultArray`](../../../c-cplusplus/struct/TextResultArray.md) returned by the last called function [`DecodeFile`](decode.md#decodefile) / [`DecodeFileInMemory`](decode.md#decodefileinmemory) / [`DecodeBuffer`](decode.md#decodebuffer) / [`DecodeBase64String`](decode.md#decodebase64string) / [`DecodeDIB`](decode.md#decodedib). The `pResults` is allocated by the SDK and should be freed by calling the function [`FreeTextResults`](#freetextresults).

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

**Code Snippet**  
```cpp
char errorBuf[512];
dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
CBarcodeReader* reader = new CBarcodeReader();
TextResultArray* pResults;
int errorCode = reader->DecodeFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
reader->GetAllTextResults(&pResults);
dynamsoft::dbr::CBarcodeReader::FreeTextResults(&pResults);
delete reader;
```







## FreeTextResults
Free memory allocated for text results.

```cpp
static void dynamsoft::dbr::CBarcodeReader::FreeTextResults (TextResultArray** pResults)
```   
   
**Parameters**  
`[in]	pResults` Text results.

**Code Snippet**  
```cpp
char errorBuf[512];
dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
CBarcodeReader* reader = new CBarcodeReader();
TextResultArray* pResults;
int errorCode = reader->DecodeFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
reader->GetAllTextResults(&pResults);
dynamsoft::dbr::CBarcodeReader::FreeTextResults(&pResults);
delete reader;
```







## GetIntermediateResults
Get intermediate results containing the original image, the colour clustered image, the binarized Image, contours, Lines, TextBlocks, etc.

```cpp
int dynamsoft::dbr::CBarcodeReader::GetIntermediateResults (IntermediateResultArray** pResults) 
```   
   
**Parameters**  
`[out] pResults` The intermediate results returned by the SDK.

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

**Code Snippet**  
```cpp
char errorBuf[512];
dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
CBarcodeReader* reader = new CBarcodeReader();
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
reader->GetRuntimeSettings(pSettings);
pSettings->intermediateResultTypes = IRT_ORIGINAL_IMAGE | IRT_COLOUR_CLUSTERED_IMAGE | IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE;
char errorMessage[256];
reader->UpdateRuntimeSettings(pSettings, errorMessage, 256);
reader->DecodeFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
IntermediateResultArray* pResults = NULL;
reader->GetIntermediateResults(&pResults);
dynamsoft::dbr::CBarcodeReader::FreeIntermediateResults(&pResults);
delete pSettings;
delete reader;
```








## FreeIntermediateResults
Free memory allocated for the intermediate results.

```cpp
static void dynamsoft::dbr::CBarcodeReader::FreeIntermediateResults (IntermediateResultArray** pResults)
```   
   
**Parameters**  
`[in]	pResults` The intermediate results.

**Code Snippet**  
```cpp
char errorBuf[512];
dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
CBarcodeReader* reader = new CBarcodeReader();
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
reader->GetRuntimeSettings(pSettings);
pSettings->intermediateResultTypes = IRT_ORIGINAL_IMAGE | IRT_COLOUR_CLUSTERED_IMAGE | IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE;
char errorMessage[256];
reader->UpdateRuntimeSettings(pSettings, errorMessage, 256);
reader->DecodeFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
IntermediateResultArray* pResults = NULL;
reader->GetIntermediateResults(&pResults);
dynamsoft::dbr::CBarcodeReader::FreeIntermediateResults(&pResults);
delete pSettings;
delete reader;
```
