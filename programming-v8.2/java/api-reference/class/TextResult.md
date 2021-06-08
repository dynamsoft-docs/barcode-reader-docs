---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - TextResult Class
description: This page shows the TextResult Class of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: TextResult, class, api reference, java
needAutoGenerateSidebar: false
---


# TextResult
Stores the text result.
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`barcodeFormat`](#barcodeformat) | *int* |
| [`barcodeFormatString`](#barcodeformatstring) | *String* |
| [`barcodeFormat_2`](#barcodeformat_2) | *int* |
| [`barcodeFormatString_2`](#barcodeformatstring_2) | *String* |
| [`barcodeText`](#barcodetext) | *String* |
| [`barcodeBytes`](#barcodebytes) | *byte\[\]* |
| [`localizationResult`](#localizationresult) | [`LocalizationResult`](LocalizationResult.md)\* |
| [`detailedResult`](#detailedresult) | *Object* |
| [`results`](#results) | [`ExtendedResult`](ExtendedResult.md)\[\] |
| [`exception`](#exception) | *String* |


### barcodeFormat
Barcode type in BarcodeFormat group 1.
```java
int com.dynamsoft.dbr.TextResult.barcodeFormat
```

### barcodeFormatString
Barcode type in BarcodeFormat group 1 as string.
```java
String com.dynamsoft.dbr.TextResult.barcodeFormatString
```

### barcodeFormat_2
Barcode type in BarcodeFormat group 2.
```java
int com.dynamsoft.dbr.TextResult.barcodeFormat_2
```

### barcodeFormatString_2
Barcode type in BarcodeFormat group 2 as string.
```java
String com.dynamsoft.dbr.TextResult.barcodeFormatString_2
```

### barcodeText
The barcode text, ends by '\0'.
```java
String com.dynamsoft.dbr.TextResult.barcodeText
```

### barcodeBytes
The barcode content in a byte array.
```java
byte[] com.dynamsoft.dbr.TextResult.barcodeBytes
```

### barcodeBytesLength
The length of the byte array.
```java
int com.dynamsoft.dbr.TextResult.barcodeBytesLength
```

### localizationResult
The corresponding localization result.
```java
LocalizationResult com.dynamsoft.dbr.TextResult.localizationResult
```

### detailedResult
One of the following: [`QRCodeDetails`](QRCodeDetails.md), [`PDF417Details`](PDF417Details.md), [`DataMatrixDetails`](DataMatrixDetails.md), [`AztecDetails`](AztecDetails.md), [`OneDCodeDetails`](OneDCodeDetails.md).
```java
Object com.dynamsoft.dbr.TextResult.detailedResult
```

### results
The extended result array.
```java
ExtendedResult[] com.dynamsoft.dbr.TextResult.results
```

### exception
The exception message.
```java
String com.dynamsoft.dbr.TextResult.exception
```
