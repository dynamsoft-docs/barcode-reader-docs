---
layout: default-layout
title: Dynamsoft Barcode Reader C Language API Reference - Decode Functions
description: This page shows the Decode functions of Dynamsoft Barcode Reader for C Language.
keywords: DBR_DecodeFile, DBR_DecodeFileInMemory, DBR_DecodeBuffer, DBR_DecodeBase64String, DBR_DecodeDIB, decode functions, api reference, c
needAutoGenerateSidebar: true
---


# Decode Functions

  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_DecodeFile`](#dbr_decodefile) | Decode barcodes from a specified image file. |
  | [`DBR_DecodeFileInMemory`](#dbr_decodefileinmemory) | Decode barcodes from an image file in memory. |
  | [`DBR_DecodeBuffer`](#dbr_decodebuffer) | Decode barcodes from raw buffer. |
  | [`DBR_DecodeBase64String`](#dbr_decodebase64string) | Decode barcodes from a base64 encoded string. |
  | [`DBR_DecodeDIB`](#dbr_decodedib) | Decode barcode from a handle of device-independent bitmap (DIB). | 
  | [`DBR_InitIntermediateResult`](#dbr_initintermediateresult) | Inits an intermediateResult struct with default values. |
  | [`DBR_DecodeIntermediateResults`](#dbr_decodeintermediateresults) | Decodes barcode from intermediate results. |
  
 




## DBR_DecodeFile
Decode barcodes from a specified image file.

```c
DBR_API int DBR_DecodeFile (void* barcodeReader, const char* pFileName, const char* pTemplateName)	
```   
   
**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	pFileName` A string defining the file name. It supports BMP, JPEG, PNG, TIFF and PDF files.
`[in]	pTemplateName` The template name.

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Code Snippet**  
```c
char errorBuf[512];
DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
void* barcodeReader = DBR_CreateInstance();
int errorCode = DBR_DecodeFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
DBR_DestroyInstance(barcodeReader);
```

**Remarks**  
If no template name is specified, current runtime settings will be used. To get the actual text results, please refer to [`DBR_GetAllTextResults`](result.md#dbr_getalltextresults).






## DBR_DecodeFileInMemory
Decode barcodes from an image file in memory.

```c
DBR_API int DBR_DecodeFileInMemory (void* barcodeReader, const unsigned char* pFileBytes, const int fileSize, const char* pTemplateName)	
```  
   
**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	pFileBytes` The image file bytes in memory.  
`[in]	fileSize`	The length of the file bytes in memory.  
`[in]	pTemplateName` The template name.  

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Code Snippet**  
```c
char errorBuf[512];
DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
void* barcodeReader = DBR_CreateInstance();
unsigned char* pFileBytes;
int nFileSize = 0;
GetFileStream("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", &pFileBytes, &nFileSize);
int errorCode = DBR_DecodeFileInMemory(barcodeReader, pFileBytes, nFileSize, "");
DBR_DestroyInstance(barcodeReader);
```

**Remarks**  
If no template name is specified, current runtime settings will be used. To get the actual text results, please refer to [`DBR_GetAllTextResults`](result.md#dbr_getalltextresults).







## DBR_DecodeBuffer
Decode barcodes from the memory buffer containing image pixels in defined format.

```c
DBR_API int DBR_DecodeBuffer (void* barcodeReader, const unsigned char* pBufferBytes, const int width, const int height, const int stride, const ImagePixelFormat format, const char* pTemplateName)
```   
   
**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	pBufferBytes` The array of bytes which contain the image data.  
`[in]	width` The width of the image in pixels.  
`[in]	height` The height of the image in pixels.  
`[in]	stride` The stride (or scan width) of the image.  
`[in]	format` The image pixel format used in the image byte array.  
`[in]	pTemplateName` The template name.

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Code Snippet**  
```c
char errorBuf[512];
DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
void* barcodeReader = DBR_CreateInstance();
unsigned char* pBufferBytes;
int iWidth = 0;
int iHeight = 0;
int iStride = 0;
ImagePixelFormat format;
GetBufferFromFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", &pBufferBytes, &iWidth, &iHeight, &iStride, &format);
int errorCode = DBR_DecodeBuffer(barcodeReader, pBufferBytes, iWidth, iHeight, iStride, format, "");
DBR_DestroyInstance(barcodeReader);
```

**Remarks**  
If no template name is specified, current runtime settings will be used. To get the actual text results, please refer to [`DBR_GetAllTextResults`](result.md#dbr_getalltextresults).






## DBR_DecodeBase64String
Decode barcodes from an image file encoded as a base64 string.

```c
DBR_API int DBR_DecodeBase64String (void* barcodeReader, const char* pBase64String, const char* pTemplateName)	
```   

**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.   
`[in]	pBase64String` A base64 encoded string that represents an image.  
`[in]	pTemplateName` The template name.  

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Code Snippet**  
```c
char errorBuf[512];
DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
void* barcodeReader = DBR_CreateInstance();
unsigned char* pBufferBytes;
int nFileSize = 0;
GetFileStream("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", &pFileBytes, &nFileSize);
char* strBase64String;
GetFileBase64String(pBufferBytes, &strBase64String);
int errorCode = DBR_DecodeBase64String(barcodeReader, strBase64String, "");
DBR_DestroyInstance(barcodeReader);
```

**Remarks**  
If no template name is specified, current runtime settings will be used. To get the actual text results, please refer to [`DBR_GetAllTextResults`](result.md#dbr_getalltextresults).







## DBR_DecodeDIB
Decode barcodes from a handle of device-independent bitmap (DIB).

```c
DBR_API int DBR_DecodeDIB (void* barcodeReader, const HANDLE hDIB, const char* pTemplateName)	
```   
   
**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	hDIB` Handle of the device-independent bitmap.  
`[in]	pTemplateName` The template name.  

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Code Snippet**  
```c
char errorBuf[512];
DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
void* barcodeReader = DBR_CreateInstance();
HANDLE pDIB;
GetDIBFromImage("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", &pDIB);
int errorCode = DBR_DecodeDIB(barcodeReader, pDIB, "");
DBR_DestroyInstance(barcodeReader);
```

**Remarks**  
If no template name is specified, current runtime settings will be used. To get the actual text results, please refer to [`DBR_GetAllTextResults`](result.md#dbr_getalltextresults).






## DBR_InitIntermediateResult
Inits an intermediateResult struct with default values.

```c
DBR_API int DBR_InitIntermediateResult (IntermediateResultType intermediateResultType, IntermediateResult* pIntermediateResult)	
```   
   
**Parameters**  
`[in]	intermediateResultType` The type of the intermediate result defined by [`EnumIntermediateResultType`](../../../../parameters/enum/result-enums.md#intermediateresulttype).  
`[in, out]	pIntermediateResult` The intermediate result struct of type [`IntermediateResult`](../../../c-cplusplus/struct/IntermediateResult.md).

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Code Snippet**  
```c
IntermediateResult imResult;
DBR_InitIntermediateResult(IRT_ORIGINAL_IMAGE, &imResult);
```






## DBR_DecodeIntermediateResults
Decodes barcode from intermediate results.

```c
DBR_API int DBR_DecodeIntermediateResults (void* barcodeReader, const IntermediateResultArray *pIntermediateResultArray, const char* pTemplateName)	
```   
   
**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	pIntermediateResultArray` The [`IntermediateResultArray`](../../../c-cplusplus/struct/IntermediateResultArray.md) for decoding.  
`[in]	pTemplateName` The template name.

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Code Snippet**  
```c
char errorBuf[512];
DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
void* barcodeReader = DBR_CreateInstance();
char fileName[] = "Your barcode file";
PublicRuntimeSettings settings;
DBR_GetRuntimeSettings(barcodeReader, &settings);
settings.intermediateResultTypes = IRT_ORIGINAL_IMAGE;
DBR_UpdateRuntimeSettings(barcodeReader, &settings, errorBuf, 512);
DBR_DecodeFile(barcodeReader, fileName, "");
IntermediateResultArray * imResults = NULL;
DBR_GetIntermediateResults(barcodeReader, &imResults);
DBR_DecodeIntermediateResults(barcodeReader, imResults, "");
TextArray * results = NULL;
DBR_GetAllTextResults(barcodeReader, &results);
DBR_FreeTextResults(&results);
DBR_DestroyInstance(barcodeReader);
```







