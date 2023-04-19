---
layout: default-layout
title: CDecodedBarcodesResult Class
description: This page shows CDecodedBarcodesResult class definition of Dynamsoft Barcode Reader SDK C++ Edition.
keywords: GetSourceImageHashId, GetCount, GetErrorCode, CDecodedBarcodesResult, api reference
permalink: /programming-10/cplusplus/api-reference/decoded-barcodes-result.html
---
# CDecodedBarcodesResult

The `CDecodedBarcodesResult` class represents the result of a barcode reading process. It provides access to information about the decoded barcodes, the source image, and any errors that occurred during the barcode reading process.

```cpp
class CDecodedBarcodesResult
```

## Methods Summary

| Method               | Description |
|----------------------|-------------|
| [`GetSourceImageHashId()`](#getsourceimagehashid) | Gets the hash ID of the source image. |
| [`GetSourceImageTag()`](#getsourceimagetag) | Gets the tag of the source image. |
| [`GetCount()`](#getcount) | Gets the number of text line result items in the barcode reading result. |
| [`GetItem()`](#getitem) | Gets the text line result item at the specified index. |
| [`GetErrorCode()`](#geterrorcode) | Gets the error code of the barcode reading result, if an error occurred. |
| [`GetErrorString()`](#geterrorstring) | Gets the error message of the barcode reading result, if an error occurred. |

### GetSourceImageHashId

Gets the hash ID of the source image.

```cpp
virtual const char* GetSourceImageHashId() const = 0;
```

**Return value**

Returns a pointer to a null-terminated string containing the hash ID of the source image.

### GetSourceImageTag

Gets the tag of the source image.

```cpp
virtual const CImageTag* GetSourceImageTag() const = 0;
```

**Return value**

Returns a pointer to a CImageTag object representing the tag of the source image.

### GetCount

Gets the number of decoded barcode items in the barcode reading result.

```cpp
virtual int GetCount() const = 0;
```

**Return value**

Returns the number of decoded barcode items in the barcode reading result.

### GetItem

Gets the decoded barcode result item at the specified index.

```cpp
virtual const CTextLineResultItem* GetItem(int index) const = 0;
```

**Parameters**

`[in] index` The zero-based index of the text line result item to retrieve.

**Return value**

Returns a pointer to the CDecodedBarcodesResult object at the specified index.

### GetErrorCode

Gets the error code of the barcode reading result, if an error occurred.

```cpp
virtual int GetErrorCode() const = 0;
```

**Return value**

Returns the error code of the barcode reading result, or 0 if no error occurred.

### GetErrorString

Gets the error message of the barcode reading result, if an error occurred.

```cpp
virtual const char* GetErrorString() const = 0;
```

**Return value**

Returns a pointer to a null-terminated string containing the error message of the barcode reading result, or a pointer to an empty string if no error occurred.
