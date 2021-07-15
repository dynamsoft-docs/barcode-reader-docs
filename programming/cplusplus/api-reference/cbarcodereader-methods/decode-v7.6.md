---
layout: default-layout
title: Dynamsoft Barcode Reader C++ API Reference - CBarcodeReader Decode Methods
description: This page shows CBarcodeReader Decode methods of Dynamsoft Barcode Reader for C++ Language.
keywords: DecodeFile, DecodeFileInMemory, DecodeBuffer, DecodeBase64String, DecodeDIB, decode methods, CBarcodeReader, api reference, c++
needAutoGenerateSidebar: true
---


# C++ API Reference - CBarcodeReader Decode Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`DecodeFile`](#decodefile) | Decode barcodes from a specified image file. |
  | [`DecodeFileInMemory`](#decodefileinmemory) | Decode barcodes from an image file in memory. |
  | [`DecodeBuffer`](#decodebuffer) | Decode barcodes from raw buffer. |
  | [`DecodeBase64String`](#decodebase64string) | Decode barcodes from a base64 encoded string. |
  | [`DecodeDIB`](#decodedib) | Decode barcode from a handle of device-independent bitmap (DIB). |

  ---




## DecodeFile

Decode barcodes from a specified image file.

```cpp
int CBarcodeReader::DecodeFile (const char* pFileName, const char* pTemplateName = "")	
```   
   
#### Parameters
`[in] pFileName`	A string defining the file name.   
`[in] pTemplateName`<sub>Optional</sub> The template name.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Remark
If no template name is specified, current runtime settings will be used.

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
int errorCode = reader->DecodeFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
delete reader;
```

&nbsp;





## DecodeFileInMemory

Decode barcodes from an image file in memory.   

```cpp
int CBarcodeReader::DecodeFileInMemory (const unsigned char* pFileBytes, int fileSize, const char* pTemplateName = "")	
```   
   
#### Parameters
`[in]	pFileBytes` The image file bytes in memory.   
`[in]	fileSize` The length of the file bytes in memory.   
`[in] pTemplateName`<sub>Optional</sub> The template name.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [GetErrorString()](status-retrieval.md#geterrorstring) to get detailed error message.*   

#### Remark
If no template name is specified, current runtime settings will be used.

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
unsigned char* pFileBytes;
int nFileSize = 0;
GetFileStream("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", &pFileBytes, &nFileSize);
int errorCode = reader->DecodeFileInMemory(pFileBytes, nFileSize, "");
delete reader;
```

&nbsp;





## DecodeBuffer

Decode barcodes from the memory buffer containing image pixels in defined format.

```cpp
int CBarcodeReader::DecodeBuffer (const unsigned char* pBufferBytes, const int iWidth, const int iHeight, const int iStride, const ImagePixelFormat format, const char* pszTemplateName = "")		
```   
   
#### Parameters
`[in]	pBufferBytes` The array of bytes which contain the image data.   
`[in]	iWidth` The width of the image in pixels.   
`[in]	iHeight` The height of the image in pixels.   
`[in]	iStride` The stride (or scan width) of the image.   
`[in]	format` The image pixel format used in the image byte array.   
`[in] pTemplateName`<sub>Optional</sub> The template name.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*   

#### Remark
If no template name is specified, current runtime settings will be used.

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
unsigned char* pBufferBytes;
int iWidth = 0;
int iHeight = 0;
int iStride = 0;
ImagePixelFormat format;
GetBufferFromFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", &pBufferBytes, &iWidth, &iHeight, &iStride, &format);
int errorCode = reader->DecodeBuffer(pBufferBytes, iWidth, iHeight, iStride, format, "");
delete reader;
```

&nbsp;





## DecodeBase64String

Decode barcode from an image file encoded as a base64 string.

```cpp
int CBarcodeReader::DecodeBase64String (const char* pBase64String, const char* pTemplateName = "")	
```   
   
#### Parameters
`[in]	pBase64String`	A base64 encoded string that represents an image.   
`[in] pTemplateName`<sub>Optional</sub> The template name.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Remark
If no template name is specified, current runtime settings will be used.

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
unsigned char* pFileBytes;
int nFileSize = 0;
GetFileStream("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", &pFileBytes, &nFileSize);
char* strBase64String;
GetFileBase64String(pBufferBytes, &strBase64String);
int errorCode = reader->DecodeBase64String(strBase64String, "");
delete reader;
```

&nbsp;





## DecodeDIB

Decode barcode from a handle of device-independent bitmap (DIB).

```cpp
int CBarcodeReader::DecodeDIB (const HANDLE hDIB, const char* pszTemplateName = "")	
```   
   
#### Parameters
`[in]	hDIB` Handle of the device-independent bitmap.    
`[in] pTemplateName`<sub>Optional</sub> The template name.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*   

#### Remark
If no template name is specified, current runtime settings will be used.

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
HANDLE pDIB;
GetDIBFromImage("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", &pDIB);
int errorCode = reader->DecodeDIB(pDIB "");
delete reader;
```



