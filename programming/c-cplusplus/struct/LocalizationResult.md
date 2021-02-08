---
layout: default-layout
title: Dynamsoft Barcode Reader C & C++ Struct - LocalizationResult
description: This page shows the LocalizationResult struct of Dynamsoft Barcode Reader for C & C++ Language.
keywords: LocalizationResult, struct, c, c++
needAutoGenerateSidebar: false
---


# LocalizationResult
Stores the localization result.

## Typedefs

```cpp
typedef struct tagLocalizationResult  LocalizationResult
typedef struct tagLocalizationResult*  PLocalizationResult
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`terminatePhase`](#terminatephase) | [`TerminatePhase`]({{ site.enumerations }}parameter-mode-enums.html#terminatephase) |
| [`barcodeFormat`](#barcodeformat) | [`BarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) |
| [`barcodeFormatString`](#barcodeformatstring) | *const char \** |
| [`barcodeFormat_2 `](#barcodeformat_2 ) | [`BarcodeFormat_2 `]({{ site.enumerations }}format-enums.html#barcodeformat_2) |
| [`barcodeFormatString_2`](#barcodeformatstring_2) | *const char \** |
| [`x1`](#x1) | *int* |
| [`y1`](#y1) | *int* |
| [`x2`](#x2) | *int* |
| [`y2`](#y2) | *int* |
| [`x3`](#x3) | *int* |
| [`y3`](#y3) | *int* |
| [`x4`](#x4) | *int* |
| [`y4`](#y4) | *int* |
| [`angle`](#angle) | *int* |
| [`moduleSize`](#modulesize) | *int* |
| [`pageNumber`](#pagenumber) | *int* |
| [`regionName`](#regionname) | *const char \** |
| [`documentName`](#documentname)| *const char \** |
| [`resultCoordinateType`](#resultcoordinatetype) | [`ResultCoordinateType`]({{ site.enumerations }}result-enums.html#resultcoordinatetype) |
| [`confidence`](#confidence) | *int* |
| [`reserved`](#reserved) | *char\[52\]* |


### terminatePhase
The terminate phase of localization result.
```cpp
TerminatePhase tagLocalizationResult::terminatePhase
```

### barcodeFormat
Barcode type in BarcodeFormat group 1.
```cpp
BarcodeFormat tagLocalizationResult::barcodeFormat
```

### barcodeFormatString
Barcode type in BarcodeFormat group 1 as string.
```cpp
const char* tagLocalizationResult::barcodeFormatString
```

### barcodeFormat_2
Barcode type in BarcodeFormat group 2.
```cpp
BarcodeFormat_2 tagLocalizationResult::barcodeFormat_2
```

### barcodeFormatString_2
Barcode type in BarcodeFormat group 2 as string.
```cpp
const char* tagLocalizationResult::barcodeFormatString_2
```

### x1
The X coordinate of the left-most point.
```cpp
int tagLocalizationResult::x1
```

### y1
The Y coordinate of the left-most point.
```cpp
int tagLocalizationResult::y1
```

### x2
The X coordinate of the second point in a clockwise direction.
```cpp
int tagLocalizationResult::x2
```

### y2
The Y coordinate of the second point in a clockwise direction.
```cpp
int tagLocalizationResult::y2
```

### x3
The X coordinate of the third point in a clockwise direction.
```cpp
int tagLocalizationResult::x3
```

### y3
The Y coordinate of the third point in a clockwise direction.
```cpp
int tagLocalizationResult::y3
```

### x4
The X coordinate of the fourth point in a clockwise direction.
```cpp
int tagLocalizationResult::x4
```

### y4
The Y coordinate of the fourth point in a clockwise direction.
```cpp
int tagLocalizationResult::y4
```

### angle
The angle of a barcode. Values range is from 0 to 360.
```cpp
int tagLocalizationResult::angle
```

### moduleSize
The barcode module size (the minimum bar width in pixel).
```cpp
int tagLocalizationResult::moduleSize
```

### pageNumber
The page number the barcode located in. The index is 0-based.
```cpp
int tagLocalizationResult::pageNumber
```

### regionName
The region name the barcode located in.
```cpp
const char* tagLocalizationResult::regionName
```

### documentName
The document name.
```cpp
const char* tagLocalizationResult::documentName
```

### resultCoordinateType
The coordinate type.
```cpp
ResultCoordinateType tagLocalizationResult::resultCoordinateType
```

### confidence
The confidence of the localization result.
```cpp
int tagLocalizationResult::confidence
```

### reserved
Reserved memory for the struct. The length of this array indicates the size of the memory reserved for this struct.
```cpp
char tagLocalizationResult::reserved[52]
```
