---
layout: default-layout
title: CDecodedBarcodesResultArray Class
description: This page shows CDecodedBarcodesResultArray class definition of Dynamsoft Barcode Reader SDK C++ Edition.
keywords: GetCount, GetResult, CDecodedBarcodesResultArray, api reference
permalink: /programming-10/cplusplus/api-reference/decoded-barcode-result-array.html
---
# CDecodedBarcodesResultArray

The `CDecodedBarcodesResultArray` class represents an array of decoded barcodes. It is an abstract class that provides an interface for accessing the results.

```cpp
class CDecodedBarcodesResultArray
```

## Methods Summary

| Method                            | Description |
|-----------------------------------|-------------|
| [`GetCount()`](#getcount)           | Gets the number of decoded barcodes in the array.|
| [`GetResult()`](#getresult)           | Gets the decoded barcode at the specified index.|

### GetCount

Gets the number of localized barcodes in the unit.

```cpp
virtual int GetCount() const = 0;
```

**Return value**

Returns the number of decoded barcodes in the array.


### GetResult

It is used to get the decoded barcode at the specified index.

```cpp
virtual const CDecodedBarcodesResult* GetResult(int index) const = 0;
```

**Parameters**
`[in] index` The index of the decoded barcode.

**Return value**

Returns a pointer to the CDecodedBarcodesResult object at the specified index.