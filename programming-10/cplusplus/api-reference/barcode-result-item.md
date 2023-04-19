---
layout: default-layout
title: CBarcodeResultItem Class
description: This page shows CBarcodeResultItem class definition of Dynamsoft Barcode Reader SDK C++ Edition.
keywords: GetFormat, GetText, GetLocation, GetConfidence, GetModuleSize, CBarcodeResultItem, api reference
permalink: /programming-10/cplusplus/api-reference/barcode-result-item.html
---

# CBarcodeResultItem

The `CBarcodeResultItem` class represents a barcode result item decoded by barcode reader engine. It is derived from `CCapturedResultItem`.

```cpp
class CBarcodeResultItem : public CCapturedResultItem
```

## Methods Summary

| Method               | Description |
|----------------------|-------------|
| [`GetFormat()`](#getformat) | Gets the format of the decoded barcode result. |
| [`GetFormatString()`](#getformatstring) | Gets the format string of the decoded barcode result. |
| [`GetText()`](#gettext) | Gets the text result of the decoded barcode. |
| [`GetBytes()`](#getbytes) | Gets the text bytes of the decoded barcode result. |
| [`GetBytesLength()`](#getbytesLength) | Gets the text length of the decoded barcode result. |
| [`GetLocation()`](#getlocation) | Gets the location of the decoded barcode in a quadrilateral. |
| [`GetConfidence()`](#getconfidence) | Gets the confidence of the decoded barcode result. |
| [`GetAngle()`](#getangle) | Gets the angle of the decoded barcode result. |
| [`GetModuleSize()`](#getmodulesize) | Gets the module size of the decoded barcode result. |
| [`GetDetails()`](#getdetails) | Gets the details of the decoded barcode result. |
| [`IsDPM()`](#isdpm) | Gets whether the decoded barcode is a DPM code. |
| [`IsMirrored()`](#ismirrored) | Gets whether the decoded barcode is a mirrored barcode. |
| [`GetRotationTransformMatrix()`](#getrotationtransformmatrix) | Gets the rotation transform matrix of the decoded barcode result. |


### GetFormat

It is used to get the format of the decoded barcode result.

```cpp
virtual BarcodeFormat GetFormat() const = 0;
```

**Return value**

Returns the format of the decoded barcode result.

### GetFormatString

It is used to get the format string of the decoded barcode result.

```cpp
virtual const char* GetFormatString() const = 0;
```

**Return value**

Returns the format string of the decoded barcode result.

### GetText

It is used to get the text result of the decoded barcode.

```cpp
virtual const char* GetText() const = 0;
```

**Return value**

Returns the text result of the decoded barcode.

### GetBytes

It is used to get the text bytes of the decoded barcode result.

```cpp
virtual unsigned char* GetBytes() const = 0;
```

**Return value**

Returns the text bytes of the decoded barcode result.

### GetBytesLength

It is used to get the text bytes length of the decoded barcode result.

```cpp
virtual int GetBytesLength() const = 0;
```

**Return value**

Returns the text bytes length of the decoded barcode result.

### GetLocation

It is used to get the location of the decoded barcode in a quadrilateral.

```cpp
virtual CQuadrilateral GetLocation() const = 0;
```

**Return value**

Returns the location of the decoded barcode in a quadrilateral.

### GetConfidence

It is used to get the confidence of the decoded barcode result.

```cpp
virtual int GetConfidence() const = 0;
```

**Return value**

Returns the confidence of the decoded barcode result.

### GetAngle

It is used to get the angle of the decoded barcode result.

```cpp
virtual int GetAngle() const = 0;
```

**Return value**

Returns the angle of the decoded barcode result.

### GetModuleSize

It is used to get the module size of the decoded barcode result.

```cpp
virtual int GetModuleSize() const = 0;
```

**Return value**

Returns the module size of the decoded barcode result.

### GetDetails

It is used to get the details of the decoded barcode result.

```cpp
virtual const CBarcodeDetails* GetDetails() const = 0;	
```

**Return value**

Returns the details of the decoded barcode result.

### IsDPM

It is used to get whether the decoded barcode is a DPM code.

```cpp
virtual bool IsDPM() const = 0;
```

**Return value**

Returns whether the decoded barcode is a DPM code.

### IsMirrored

It is used to get whether the decoded barcode is mirrored.

```cpp
virtual bool IsMirrored() const = 0;
```

**Return value**

Returns whether the decoded barcode is mirrored.

### GetRotationTransformMatrix

It is used to get the rotation transform matrix of the decoded barcode.

```cpp
virtual void GetRotationTransformMatrix(double matrix[9]) const = 0;
```

**Parameters**

`[out] matrix` The rotation transform matrix of the decoded barcode.

**Return value**

None.
