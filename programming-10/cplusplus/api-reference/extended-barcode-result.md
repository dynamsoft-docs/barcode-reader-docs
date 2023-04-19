---
layout: default-layout
title: CExtendedBarcodeResult Class
description: This page shows CExtendedBarcodeResult class definition of Dynamsoft Barcode Reader SDK C++ Edition.
keywords: GetDeformation, GetClarity, GetSamplingImage, GetExtendedBarcodeResultType, CExtendedBarcodeResult, api reference
permalink: /programming-10/cplusplus/api-reference/extended-barcode-result.html
---
# CExtendedBarcodeResult

The CExtendedBarcodeResult class represents an extended barcode result in a decoded barcode element. It contains information such as the type of extended barcode, deformation, clarity, and a sampling image of the barcode.

```cpp
class CExtendedBarcodeResult : public CDecodedBarcodeElement
```

*Namespace:* dynamsoft::dbr::intermediate_results

---

## Methods Summary

| Method | Description |
|--------|-------------|
| [`GetExtendedBarcodeResultType()`](#getextendedbarcoderesulttype) | Gets the type of extended barcode result. |
| [`GetDeformation()`](#getdeformation) | Gets the deformation of the barcode. |
| [`GetClarity()`](#getclarity) | Gets the clarity of the barcode. |
| [`GetSamplingImage()`](#getsamplingimage) | Gets the sampling image of the barcode. |

### GetExtendedBarcodeResultType

Gets the type of extended barcode result.

```cpp
virtual ExtendedBarcodeResultType GetExtendedBarcodeResultType() const = 0;
```

**Return value**

Returns the type of the extended barcode result.

### GetDeformation

Gets the deformation of the barcode.

```cpp
virtual int GetDeformation() const = 0;
```

**Return value**

Returns the deformation of the barcode.

### GetClarity

Gets the clarity of the barcode.

```cpp
virtual int GetClarity() const = 0;
```

**Return value**

Returns the clarity of the barcode.

### GetSamplingImage

Gets the sampling image of the barcode.

```cpp
virtual const CImageData* GetSamplingImage() const = 0;
```

**Return value**

Returns a pointer to the sampling image of the barcode.
