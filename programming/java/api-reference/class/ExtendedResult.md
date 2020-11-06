---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - ExtendedResult Class
description: This page shows the ExtendedResult Class of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: ExtendedResult, class, api reference, java
needAutoGenerateSidebar: false
---


# ExtendedResult
Stores the extended result. 


## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`resultType`](#resulttype) | *int * |
| [`barcodeFormat`](#barcodeformat) | *int * |
| [`barcodeFormatString`](#barcodeformatstring) | *String * |
| [`barcodeFormat_2`](#barcodeformat_2) | *int * |
| [`barcodeFormatString_2`](#barcodeformatstring_2) | *String * | 
| [`confidence`](#confidence) | *int* | 
| [`bytes`](#bytes) | *byte\[\]* | 
| [`accompanyingTextBytes`](#accompanyingtextbytes) | *byte\[\]* | 
| [`deformation`](#deformation) | *int* | 
| [`detailedResult`](#detailedresult) | *Object* |
| [`samplingImage`](#samplingimage) | [`SamplingImageData`](SamplingImageData.md) |
| [`clarity`](#clarity) | *int* | 

### resultType
Extended result type. 
```java
int com.dynamsoft.dbr.ExtendedResult.resultType
```

### barcodeFormat
Barcode type in BarcodeFormat group 1. 
```java
int com.dynamsoft.dbr.ExtendedResult.barcodeFormat
```

### barcodeFormatString
Barcode type in BarcodeFormat group 1 as string.
```java
String com.dynamsoft.dbr.ExtendedResult.barcodeFormatString
```

### barcodeFormat_2
Barcode type in BarcodeFormat group 2.
```java
int com.dynamsoft.dbr.ExtendedResult.barcodeFormat_2
```
 
### barcodeFormatString_2
Barcode type in BarcodeFormat group 2 as string.
```java
String com.dynamsoft.dbr.ExtendedResult.barcodeFormatString_2
```

### confidence
The confidence of the result.
```java
int com.dynamsoft.dbr.ExtendedResult.confidence
```

### bytes
The content in a byte array.
```java
byte[] com.dynamsoft.dbr.ExtendedResult.bytes
```

### accompanyingTextBytes
The accompanying text content in a byte array.
```java
byte[] com.dynamsoft.dbr.ExtendedResult.accompanyingTextBytes
```

### deformation
The deformation value.
```java
int com.dynamsoft.dbr.ExtendedResult.deformation
```

### detailedResult
One of the following: [`QRCodeDetails`](QRCodeDetails.md), [`PDF417Details`](PDF417Details.md), [`DataMatrixDetails`](DataMatrixDetails.md), [`AztecDetails`](AztecDetails.md), [`OneDCodeDetails`](OneDCodeDetails.md).
```java
Object com.dynamsoft.dbr.ExtendedResult.detailedResult
```

### samplingImage
The sampling image info.
```java
SamplingImageData com.dynamsoft.dbr.ExtendedResult.samplingImage
```
 
### clarity
The clarity of the barcode zone in percentage.
```java
int com.dynamsoft.dbr.ExtendedResult.clarity
```
