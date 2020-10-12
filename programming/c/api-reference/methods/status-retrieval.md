---
layout: default-layout
title: Dynamsoft Barcode Reader C Language API Reference - Status Retrieval Methods
description: This page shows the status retrieval methods of Dynamsoft Barcode Reader for C Language.
keywords: DBR_GetErrorString, DBR_GetVersion, status retrieval methods, api reference, c
needAutoGenerateSidebar: true
---

# C API Reference - Status Retrieval Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_GetErrorString`](#dbr_geterrorstring) | Get error message by error code. |
  | [`DBR_GetVersion`](#dbr_getversion) | Get version information of SDK. |
  
---





## DBR_GetErrorString

Get error message by error code.

```c
DBR_API const char* DBR_GetErrorString (int errorCode)	
```   
   
### Parameters

`[in]	errorCode` The error code.
 

### Return value

The error message.

### Code Snippet

```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
int errorCode = DBR_DecodeFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
const char* errorString = DBR_GetErrorString(errorCode);
DBR_DestroyInstance(barcodeReader);
```

&nbsp;

## DBR_GetVersion

Get version information of SDK.

```c
DBR_API const char* DBR_GetVersion ()
```   

### Return value
The version information string.

### Code Snippet

```c
const char* versionInfo = DBR_GetVersion();
```

