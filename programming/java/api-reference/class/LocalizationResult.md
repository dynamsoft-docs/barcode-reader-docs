---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - LocalizationResult Class
description: This page shows the LocalizationResult Class of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: LocalizationResult, class, api reference, java
needAutoGenerateSidebar: false
---


# LocalizationResult
Stores the localization result.
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`terminatePhase`](#terminatephase) | *int* |
| [`barcodeFormat`](#barcodeformat) | *int* |
| [`barcodeFormatString`](#barcodeformatstring) | *String* |
| [`barcodeFormat_2 `](#barcodeformat_2 ) | *int* |
| [`barcodeFormatString_2`](#barcodeformatstring_2) | *String* |
| [`resultPoints`](#resultpoints) | [`Point`](Point.md)\[\] |
| [`angle`](#angle) | *int* |
| [`moduleSize`](#modulesize) | *int* |
| [`pageNumber`](#pagenumber) | *int* |
| [`regionName`](#regionname) | *String* |
| [`documentName`](#documentname)| *String* |
| [`resultCoordinateType`](#resultcoordinatetype) | *int* |
| [`accompanyingTextBytes`](#accompanyingtextbytes) | *byte\[\]* |
| [`confidence`](#confidence) | *int* |


### terminatePhase
The terminate phase of localization result.
```java
int com.dynamsoft.dbr.LocalizationResult.terminatePhase
```

### barcodeFormat
Barcode type in BarcodeFormat group 1.
```java
int com.dynamsoft.dbr.LocalizationResult.barcodeFormat
```

### barcodeFormatString
Barcode type in BarcodeFormat group 1 as string.
```java
String com.dynamsoft.dbr.LocalizationResult.barcodeFormatString
```

### barcodeFormat_2
Barcode type in BarcodeFormat group 2.
```java
int com.dynamsoft.dbr.LocalizationResult.barcodeFormat_2
```

### barcodeFormatString_2
Barcode type in BarcodeFormat group 2 as string.
```java
String com.dynamsoft.dbr.LocalizationResult.barcodeFormatString_2
```

### resultPoints
The vertices coordinates information of the barcode region.
```java
Point[] com.dynamsoft.dbr.LocalizationResult.resultPoints
```

### angle
The angle of a barcode. Values range is from 0 to 360.
```java
int com.dynamsoft.dbr.LocalizationResult.angle
```

### moduleSize
The barcode module size (the minimum bar width in pixel).
```java
int com.dynamsoft.dbr.LocalizationResult.moduleSize
```

### pageNumber
The page number the barcode located in. The index is 0-based.
```java
int com.dynamsoft.dbr.LocalizationResult.pageNumber
```

### regionName
The region name the barcode located in.
```java
String com.dynamsoft.dbr.LocalizationResult.regionName
```

### documentName
The document name.
```java
String com.dynamsoft.dbr.LocalizationResult.documentName
```

### resultCoordinateType
The coordinate type.
```java
int com.dynamsoft.dbr.LocalizationResult.resultCoordinateType
```

### accompanyingTextBytes
The accompanying text content in a byte array.
```java
byte[] com.dynamsoft.dbr.LocalizationResult.accompanyingTextBytes
```

### confidence
The confidence of the localization result.
```java
int com.dynamsoft.dbr.LocalizationResult.confidence
```

