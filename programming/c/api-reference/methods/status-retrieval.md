---
layout: default-layout
title: Dynamsoft Barcode Reader C Language API Reference - Status Retrieval Functions
description: This page shows the status retrieval functions of Dynamsoft Barcode Reader for C Language.
keywords: DBR_GetErrorString, DBR_GetVersion, status retrieval functions, api reference, c
needAutoGenerateSidebar: true
---

# Status Retrieval Functions

  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_GetErrorString`](#dbr_geterrorstring) | Get error message by error code. |
  | [`DBR_GetVersion`](#dbr_getversion) | Get version information of SDK. |
  
---





## DBR_GetErrorString

Get error message by error code.

```c
DBR_API const char* DBR_GetErrorString (int errorCode)	
```   
   
**Parameters**  

`[in]	errorCode` The error code.
 

**Return Value**  

The error message.

**Code Snippet**  

```c
char errorBuf[512];
DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
void* barcodeReader = DBR_CreateInstance();
int errorCode = DBR_DecodeFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
const char* errorString = DBR_GetErrorString(errorCode);
DBR_DestroyInstance(barcodeReader);
```



## DBR_GetVersion

Get version information of SDK.

```c
DBR_API const char* DBR_GetVersion ()
```   

**Return Value**  
The version information string.

**Code Snippet**  

```c
const char* versionInfo = DBR_GetVersion();
```

