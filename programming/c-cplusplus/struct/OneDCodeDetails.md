---
layout: default-layout
title: Dynamsoft Barcode Reader C & C++ Struct - OneDCodeDetails
description: This page shows the OneDCodeDetails struct of Dynamsoft Barcode Reader for C & C++ Language.
keywords: OneDCodeDetails, struct, c, c++
needAutoGenerateSidebar: false
---

# OneDCodeDetails
Stores the OneD code details.

## Typedefs

```cpp
typedef struct tagOneDCodeDetails  OneDCodeDetails
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`moduleSize`](#modulesize) | *int* |
| [`startCharsBytes`](#startcharsbytes) | *unsigned char \** |
| [`startCharsBytesLength`](#startcharsbyteslength) | *int* |
| [`stopCharsBytes`](#stopcharsbytes) | *unsigned char \** |
| [`stopCharsBytesLength`](#stopcharsbyteslength) | *int* |
| [`checkDigitBytes`](#checkdigitbytes) | *unsigned char \** |
| [`checkDigitBytesLength`](#checkdigitbyteslength) | *int* |
| [`reserved`](#reserved) | *char\[32\]* |


### moduleSize
The barcode module size (the minimum bar width in pixel).
```cpp
int tagOneDCodeDetails::moduleSize
```

### startCharsBytes
The start chars in a byte array.
```cpp
unsigned char* tagOneDCodeDetails::startCharsBytes
```

### startCharsBytesLength
The length of the start chars byte array.
```cpp
int tagOneDCodeDetails::startCharsBytesLength
```

### stopCharsBytes
The stop chars in a byte array.
```cpp
unsigned char* tagOneDCodeDetails::stopCharsBytes
```

### stopCharsBytesLength
The length of the stop chars byte array.
```cpp
int tagOneDCodeDetails::stopCharsBytesLength
```

### checkDigitBytes
The check digit chars in a byte array.
```cpp
unsigned char* tagOneDCodeDetails::checkDigitBytes
```

### checkDigitBytesLength
The length of the check digit chars byte array.
```cpp
int tagOneDCodeDetails::checkDigitBytesLength
```

### reserved
Reserved memory for the struct. The length of this array indicates the size of the memory reserved for this struct.
```cpp
char tagOneDCodeDetails::reserved[32]
```
