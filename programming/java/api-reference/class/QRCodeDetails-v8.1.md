---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - QRCodeDetails Class
description: This page shows the QRCodeDetails Class of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: QRCodeDetails, class, api reference, java
needAutoGenerateSidebar: false
---


# QRCodeDetails
Stores the QRCode details.  
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`moduleSize`](#modulesize) | *int* |
| [`rows`](#rows) | *int* |
| [`columns`](#columns) | *int* |
| [`errorCorrectionLevel`](#errorcorrectionlevel) | [`EnumQRCodeErrorCorrectionLevel`]({{ site.enumerations }}other-enums.html#qrcodeerrorcorrectionlevel) |
| [`version`](#version) | *int* |
| [`model`](#model) | *int* |


### moduleSize
The barcode module size (the minimum bar width in pixel).  
```java
int com.dynamsoft.dbr.QRCodeDetails.moduleSize
```

### rows
The row count of the barcode.  
```java
int com.dynamsoft.dbr.QRCodeDetails.rows
```

### columns
The column count of the barcode. 
```java
int com.dynamsoft.dbr.QRCodeDetails.columns
```

### errorCorrectionLevel
The error correction level of the barcode.  
```java
int com.dynamsoft.dbr.QRCodeDetails.errorCorrectionLevel
```

### version
The version of the QR Code.
```java
int com.dynamsoft.dbr.QRCodeDetails.version
```

### model
Number of the models.
```java
int com.dynamsoft.dbr.QRCodeDetails.model
```

