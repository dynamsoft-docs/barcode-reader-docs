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
| [`mode`](#mode) | *int* |
| [`page`](#page) | *int* |
| [`totalPage`](#totalpage) | *int* |
| [`parityData`](#paritydata) | *byte* |


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

### mode

Identify the first data encoding mode.

```java
int com.dynamsoft.dbr.QRCodeDetails.mode
```

### page

Identify the position of the particular symbol.

```java
int com.dynamsoft.dbr.QRCodeDetails.page
```

### totalPage

Identify the total number of symbols to be concatenated in the Structured Append format.

```java
int com.dynamsoft.dbr.QRCodeDetails.totalPage
```

### parityData

The Parity Data shall be an 8 bit byte following the Symbol Sequence Indicator. The parity data is a value obtained by XORing byte by byte the ASCII/JIS values of all the original input data before division into symbol blocks.

```java
byte com.dynamsoft.dbr.QRCodeDetails.parityData
```
