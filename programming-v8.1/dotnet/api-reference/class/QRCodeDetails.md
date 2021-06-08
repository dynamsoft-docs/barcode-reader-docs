---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - QRCodeDetails Class
description: This page shows the QRCodeDetails Class of Dynamsoft Barcode Reader for .NET SDK.
keywords: QRCodeDetails, class, api reference, .Net
needAutoGenerateSidebar: false
---


# QRCodeDetails
Stores the QRCode details.  


```csharp
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

```csharp
int Dynamsoft.DBR.QRCodeDetails.ModuleSize
```

### Rows
The row count of the barcode.  

```csharp
int Dynamsoft.DBR.QRCodeDetails.Rows
```

### Columns
The column count of the barcode. 

```csharp
int Dynamsoft.DBR.QRCodeDetails.Columns
```

### ErrorCorrectionLevel
The error correction level of the barcode.  

```csharp
EnumQRCodeErrorCorrectionLevel Dynamsoft.DBR.QRCodeDetails.ErrorCorrectionLevel
```

### Version
The version of the QR Code.

```csharp
int Dynamsoft.DBR.QRCodeDetails.Version
```

### Model
Number of the models.

```csharp
int Dynamsoft.DBR.QRCodeDetails.Model
```
