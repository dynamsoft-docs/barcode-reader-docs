---
layout: default-layout
title: Dynamsoft Barcode Reader C++ API Reference - CBarcodeReader Status Retrieval Methods
description: This page shows CBarcodeReader status retrieval methods of Dynamsoft Barcode Reader for C++ Language.
keywords: GetErrorString, GetVersion, status retrieval methods, CBarcodeReader, api reference, c++
needAutoGenerateSidebar: true
---

# C++ API Reference - CBarcodeReader Status Retrieval Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`GetErrorString`](#geterrorstring) | Get error message by error code.|
  | [`GetVersion`](#getversion) | Get version information of SDK.|

  ---





  
## GetErrorString

Get error message by error code.

```cpp
static const char* CBarcodeReader::GetErrorString (const int iErrorCode)
```

#### Parameters
`[in] iErrorCode`	Error code.

#### Return value
The error message.

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
int errorCode = reader->DecodeFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
const char* errorString = CBarcodeReader::GetErrorString(errorCode);
delete reader;
```

&nbsp;





## GetVersion

Get version information of SDK.

```cpp
static const char* CBarcodeReader::GetVersion ()
```

#### Return value
The version information string.

#### Code Snippet
```cpp
const char* versionInfo = CBarcodeReader::GetVersion();
```
