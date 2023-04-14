---
layout: default-layout
title: CBarcodeReader Class
description: This page shows CBarcodeReader class definition of Dynamsoft Barcode Reader SDK C++ Edition.
keywords: BarcodeReader, Decode, Instance, api reference
permalink: /programming/cplusplus/api-reference/barcode-reader.html
---

# CBarcodeReader

The CBarcodeReader class provides functionality for reading barcodes from various sources such as images, files, and base64 strings. It is also capable of initializing and updating settings for reading barcodes.

```cpp
class CBarcodeReader
```
*Namespace:* dynamsoft::dbr

---
## Methods Summary

| Method               | Description |
|----------------------|-------------|
| [`CBarcodeReader`](#cbarcodereader) | Constructor. |
| [`~CBarcodeReader`](#cbarcodereader) | Destructor. |
| [`InitSettings`](#initsettings) | Initializes barcode reading settings with a JSON string. |
| [`InitSettingsFromFile`](#initsettingsfromfile) | Initializes barcode reading settings with a JSON file. |
| [`OutputSettings`](#outputsettings) | Outputs barcode reading settings as a JSON string. |
| [`OutputSettingsToFile`](#outputsettingstofile) | Outputs barcode reading settings to a JSON file. |
| [`GetSimplifiedSettings`](#getsimplifiedsettings) | Retrieves simplified barcode reading settings. |
| [`UpdateSettings`](#updatesettings) | Updates barcode reading settings with a simplified settings structure. |
| [`ResetSettings`](#resetsettings) | Resets barcode reading settings to default values. |
| [`SetModeArgument`](#setmodeargument) | Sets an argument for a specified mode. |
| [`GetModeArgument`](#getmodeargument) | Gets the value of an argument for a specified mode. |
| [`Decode`](#decode) | Decodes barcodes from an image file or buffer. |
| [`DecodeBase64String`](#decodebase64string) | Decodes barcodes from a base64 string. |
| [`GetVersion`](#getversion) | Gets the version of the Dynamsoft Barcode Reader SDK. |
| [`FreeString`](#freestring) | Frees a string allocated by the SDK. |
| [`IsInstanceValid`](#isinstancevalid) | Checks if the current instance of the CBarcodeReader class is valid. |
| [`GetInstance`](#getinstance) | Gets the singleton instance of the CBarcodeReader class. |
| [`Recycle`](#recycle) | Recycles the current instance of the CBarcodeReader class. |

### m_DLRInner

The inner object of the CBarcodeReader class.

```cpp
BarcodeReaderInner * m_DLRInner;
```

### CBarcodeReader

The constructor of the CBarcodeReader class.

```cpp
CBarcodeReader();
```

### ~CBarcodeReader

The destructor of the CBarcodeReader class.

```cpp
~CBarcodeReader();
```

### InitSettings

Initializes barcode reading settings with a JSON string.

```cpp
int InitSettings(const char* content, char errorMsgBuffer[] = NULL, int errorMsgBufferLen = 0);
```

**Parameters**

`[in] content` The JSON string containing the barcode reading settings.

`[in] errorMsgBuffer` A buffer to receive error messages if the function fails.

`[in] errorMsgBufferLen` The length of the error message buffer.

**Return value**

Returns 0 if the function succeeds, or an error code if the function fails.

### InitSettingsFromFile

Initializes barcode reading settings with a JSON file.

```cpp
int InitSettingsFromFile(const char* filePath, char errorMsgBuffer[] = NULL, int errorMsgBufferLen = 0);
```

**Parameters**

`[in] filePath` The path of the JSON file containing the barcode reading settings.

`[in] errorMsgBuffer` A buffer to receive error messages if the function fails.

`[in] errorMsgBufferLen` The length of the error message buffer.

**Return value**

Returns 0 if the function succeeds, or an error code if the function fails.

### OutputSettings

Outputs barcode reading settings as a JSON string.

```cpp
char* OutputSettings(const char* templateName, int* pErrorCode = NULL);
```

**Parameters**

`[in] templateName` The name of the template to use for the output.

`[out] pErrorCode` A pointer to receive the error code if the function fails.

**Return value**

Returns a pointer to the JSON string containing the barcode reading settings, or NULL if the function fails.

### OutputSettingsToFile

Outputs barcode reading settings to a JSON file.

```cpp
int OutputSettingsToFile(const char* templateName,const char* outputFilePath);
```

**Parameters**

`[in] templateName` The name of the template to use for the output.

`[in] outputFilePath` The path of the output JSON file.

**Return value**

Returns 0 if the function succeeds, or an error code if the function fails.

### GetSimplifiedSettings

Retrieves simplified barcode reading settings.

```cpp
int GetSimplifiedSettings(SimplifiedBarcodeReaderSettings* pSettings);
```

**Parameters**

`[out] pSettings` A pointer to receive the simplified barcode reading settings.

**Return value**

Returns 0 if the function succeeds, or an error code if the function fails.

### UpdateSettings

Updates barcode reading settings with a simplified settings structure.

```cpp
int UpdateSettings(const SimplifiedBarcodeReaderSettings* pSettings, char errorMsgBuffer[] = NULL, const int errorMsgBufferLen = 0);
```

**Parameters**

`[in] pSettings` A pointer to the simplified barcode reading settings structure.

`[in] errorMsgBuffer` A buffer to receive error messages if the function fails.

`[in] errorMsgBufferLen` The length of the error message buffer.

**Return value**

Returns 0 if the function succeeds, or an error code if the function fails.

### ResetSettings

Resets barcode reading settings to default values.

```cpp
void ResetSettings();
```

### SetModeArgument

Sets an argument for a specified mode.

```cpp
int SetModeArgument(const char *pModesName, const int index, const char *pArgumentName, const char *pArgumentValue, char errorMsgBuffer[] = NULL, const int errorMsgBufferLen = 0);
```

**Parameters**

`[in] pModesName` The name of the mode.

`[in] index` The index of the mode.

`[in] pArgumentName` The name of the argument.

`[in] pArgumentValue` The value of the argument.

`[in] errorMsgBuffer` A buffer to receive error messages if the function fails.

`[in] errorMsgBufferLen` The length of the error message buffer.

**Return value**

Returns 0 if the function succeeds, or an error code if the function fails.

### GetModeArgument

Gets the value of an argument for a specified mode.

```cpp
int GetModeArgument(const char *pModesName, const int index, const char *pArgumentName, char valueBuffer[], const int valueBufferLen, char errorMsgBuffer[] = NULL, const int errorMsgBufferLen = 0);
```

**Parameters**

`[in] pModesName` The name of the mode.

`[in] index` The index of the mode.

`[in] pArgumentName` The name of the argument.

`[out] valueBuffer` A buffer to receive the value of the argument.

`[in] valueBufferLen` The length of the value buffer.

`[in] errorMsgBuffer` A buffer to receive error messages if the function fails.

`[in] errorMsgBufferLen` The length of the error message buffer.

**Return value**

Returns 0 if the function succeeds, or an error code if the function fails.

### Decode

Decodes barcodes from an image file or buffer.

```cpp
CDecodedBarcodesResultArray* Decode(const char* fileName, const char* templateName="");
CDecodedBarcodesResultArray* Decode(const unsigned char* pFileBytes, int fileSize, const char* templateName="");
CDecodedBarcodesResult* Decode(const CImageData* pImageData, const char* templateName="");
CDecodedBarcodesResult* Decode(const HANDLE  hDIB, const char* templateName = "");
```

**Parameters**

`[in] fileName` The path of the image file.

`[in] pFileBytes` The buffer containing the image file.

`[in] fileSize` The size of the image file buffer.

`[in] pImageData` The image data object.

`[in] hDIB` The handle of the device-independent bitmap.

`[in] templateName` The name of the template.

**Return value**

Returns a pointer to the barcode decoding result, or NULL if the function fails.

### DecodeBase64String

Decodes barcodes from a base64 string.

```cpp
CDecodedBarcodesResultArray* DecodeBase64String(const char* pBase64String, const char* templateName = "");
```

**Parameters**

`[in] pBase64String` The base64 string.

`[in] templateName` The name of the template.

**Return value**

Returns a pointer to the barcode decoding result, or NULL if the function fails.

### GetVersion

Gets the version of the Dynamsoft Barcode Reader SDK.

```cpp
static const char* GetVersion();
```

**Return value**

Returns a string containing the version of the Dynamsoft Barcode Reader SDK.

### FreeString

Frees a string allocated by the SDK.

```cpp
static void FreeString (char* content);
```

**Parameters**

`[in] content` The string to free.

### IsInstanceValid

Checks if the current instance of the CBarcodeReader
