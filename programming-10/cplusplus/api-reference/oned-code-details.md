---
layout: default-layout
title: COneDCodeDetails Class
description: This page shows COneDCodeDetails class definition of Dynamsoft Barcode Reader SDK C++ Edition.
keywords: startchar, stopchars, COneDCodeDetails, api reference
permalink: /programming-10/cplusplus/api-reference/oned-code-details.html
---
# COneDCodeDetails

The COneDCodeDetails class represents detailed information about a one-dimensional barcode. It inherits from the CBarcodeDetails class.

```cpp
class COneDCodeDetails : public CBarcodeDetails
```

---

## Attributes Summary

| Attribute | Type |
|---------- | ---- |
| [`startCharsBytes`](#startcharsbytes) | *unsigned char\** |
| [`startCharsBytesLength`](#startcharsbyteslength) | *int* |
| [`stopCharsBytes`](#stopcharsbytes) | *unsigned char\** |
| [`stopCharsBytesLength`](#stopcharsbyteslength) | *int* |
| [`checkDigitBytes`](#checkdigitbytes) | *unsigned char\** |
| [`checkDigitBytesLength`](#checkdigitbyteslength) | *int* |
| [`startPatternRange`](#startpatternrange) | *float[2]* |
| [`middlePatternRange`](#middlepatternrange) | *float[2]* |
| [`endPatternRange`](#endpatternrange) | *float[2]* |
| [`reserved`](#reserved) | *char[8]* |

## Methods Summary

| Method               | Description |
|----------------------|-------------|
| [`COneDCodeDetails`](#conedcodedetails) | Constructor for the COneDCodeDetails class. |
| [`~COneDCodeDetails`](#~conedcodedetails) | Destructor for the COneDCodeDetails class. |

### startCharsBytes

The start chars of the one-dimensional barcode in a byte array.

```cpp
unsigned char* startCharsBytes
```

### startCharsBytesLength

The length of the start chars byte array.

```cpp
int startCharsBytesLength
```

### stopCharsBytes

The stop chars of the one-dimensional barcode in a byte array.

```cpp
unsigned char* stopCharsBytes
```

### stopCharsBytesLength

The length of the stop chars byte array.

```cpp
int stopCharsBytesLength
```

### checkDigitBytes

The check digit chars of the one-dimensional barcode in a byte array.

```cpp
unsigned char* checkDigitBytes
```

### checkDigitBytesLength

The length of the check digit chars byte array.

```cpp
int checkDigitBytesLength
```

### startPatternRange

The position of the start pattern relative to the barcode location.

```cpp
float startPatternRange[2]
```

| Index | Type | Description |
|-------|------|-------------|
| 0     | *float* | X coordinate of the start position in percentage value. |
| 1     | *float* | X coordinate of the end position in percentage value. |

### middlePatternRange

The position of the middle pattern relative to the barcode location.

```cpp
float middlePatternRange[2]
```

| Index | Type | Description |
|-------|------|-------------|
| 0     | *float* | X coordinate of the start position in percentage value. |
| 1     | *float* | X coordinate of the end position in percentage value. |

### endPatternRange

The position of the end pattern relative to the barcode location.

```cpp
float endPatternRange[2]
```

| Index | Type | Description |
|-------|------|-------------|
| 0     | *float* | X coordinate of the start position in percentage value. |
| 1     | *float* | X coordinate of the end position in percentage value. |

### reserved

Reserved memory for the COneDCodeDetails struct. The length of this array indicates the size of the memory reserved for this struct.

```cpp
char reserved[8]
```

### COneDCodeDetails

Constructor for the COneDCodeDetails class.

```cpp
COneDCodeDetails()
```

### ~COneDCodeDetails

Destructor for the COneDCodeDetails class.

```cpp
virtual ~COneDCodeDetails()
```