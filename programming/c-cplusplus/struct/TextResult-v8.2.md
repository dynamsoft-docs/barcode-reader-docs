---
layout: default-layout
title: Dynamsoft Barcode Reader C & C++ Struct - TextResult
description: This page shows the TextResult struct of Dynamsoft Barcode Reader for C & C++ Language.
keywords: TextResult, struct, c, c++
needAutoGenerateSidebar: false
---


# TextResult
Stores the text result.

## Typedefs

```cpp
typedef struct tagTextResult  TextResult
typedef struct tagTextResult*  PTextResult
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`barcodeFormat`](#barcodeformat) | [`BarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) |
| [`barcodeFormatString`](#barcodeformatstring) | *const char \** |
| [`barcodeFormat_2`](#barcodeformat_2) | [`BarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2) |
| [`barcodeFormatString_2`](#barcodeformatstring_2) | *const char \** |
| [`barcodeText`](#barcodetext) | *const char \** |
| [`barcodeBytes`](#barcodebytes) | *unsigned char \** |
| [`barcodeBytesLength`](#barcodebyteslength) | *int* |
| [`localizationResult`](#localizationresult) | [`LocalizationResult`](LocalizationResult.md)\* |
| [`detailedResult`](#detailedresult) | *void \** |
| [`resultsCount`](#resultscount) | *int* |
| [`results`](#results) | [`PExtendedResult`](ExtendedResult.md)\* |
| [`exception`](#exception) | *const char \** |
| [`reserved`](#reserved) | *char\[52\]* |


### barcodeFormat
Barcode type in BarcodeFormat group 1.
```cpp
BarcodeFormat tagTextResult::barcodeFormat
```

### barcodeFormatString
Barcode type in BarcodeFormat group 1 as string.
```cpp
const char* tagTextResult::barcodeFormatString
```

### barcodeFormat_2
Barcode type in BarcodeFormat group 2.
```cpp
BarcodeFormat_2 tagTextResult::barcodeFormat_2
```

### barcodeFormatString_2
Barcode type in BarcodeFormat group 2 as string.
```cpp
const char* tagTextResult::barcodeFormatString_2
```

### barcodeText
The barcode text, ends by '\0'.
```cpp
const char* tagTextResult::barcodeText
```

### barcodeBytes
The barcode content in a byte array.
```cpp
unsigned char* tagTextResult::barcodeBytes
```

### barcodeBytesLength
The length of the byte array.
```cpp
int tagTextResult::barcodeBytesLength
```

### localizationResult
The corresponding localization result.
```cpp
LocalizationResult* tagTextResult::localizationResult
```

### detailedResult
One of the following: [`QRCodeDetails`](QRCodeDetails.md), [`PDF417Details`](PDF417Details.md), [`DataMatrixDetails`](DataMatrixDetails.md), [`AztecDetails`](AztecDetails.md), [`OneDCodeDetails`](OneDCodeDetails.md).
```cpp
void* tagTextResult::detailedResult
```

### resultsCount
The total count of extended result.
```cpp
int tagTextResult::resultsCount
```

### results
The extended result array.
```cpp
PExtendedResult* tagTextResult::results
```

### exception
The exception message.
```cpp
const char* tagTextResult::exception
```

### reserved
Reserved memory for the struct. The length of this array indicates the size of the memory reserved for this struct.
```cpp
char tagTextResult::reserved[56]
```
