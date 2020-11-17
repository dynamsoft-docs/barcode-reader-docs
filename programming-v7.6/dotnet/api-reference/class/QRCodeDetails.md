---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - QRCodeDetails Class
description: This page shows the QRCodeDetails Class of Dynamsoft Barcode Reader for .NET SDK.
keywords: QRCodeDetails, class, api reference, .Net
needAutoGenerateSidebar: false
---


# QRCodeDetails
Stores the QRCode details.  


```C#
public class QRCodeDetails
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`ModuleSize`](#modulesize) | *int* |
| [`Rows`](#rows) | *int* |
| [`Columns`](#columns) | *int* |
| [`ErrorCorrectionLevel`](#errorcorrectionlevel) | [`EnumQRCodeErrorCorrectionLevel`]({{ site.enumerations }}other-enums.html#qrcodeerrorcorrectionlevel) |
| [`Version`](#version) | *int* |
| [`Model`](#model) | *int* |


### ModuleSize
The barcode module size (the minimum bar width in pixel).  

```C#
int Dynamsoft.Barcode.QRCodeDetails.ModuleSize
```

### Rows
The row count of the barcode.  

```C#
int Dynamsoft.Barcode.QRCodeDetails.Rows
```

### Columns
The column count of the barcode. 

```C#
int Dynamsoft.Barcode.QRCodeDetails.Columns
```

### ErrorCorrectionLevel
The error correction level of the barcode.  

```C#
EnumQRCodeErrorCorrectionLevel Dynamsoft.Barcode.QRCodeDetails.ErrorCorrectionLevel
```

### Version
The version of the QR Code.

```C#
int Dynamsoft.Barcode.QRCodeDetails.Version
```

### Model
Number of the models.

```C#
int Dynamsoft.Barcode.QRCodeDetails.Model
```
