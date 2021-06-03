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
| [`Mode`](#mode) | *int* |
| [`Page`](#page) | *int* |
| [`TotalPage`](#totalpage) | *int* |
| [`ParityData`](#paritydata) | *byte* |


### ModuleSize
The barcode module size (the minimum bar width in pixel).  

```csharp
int Dynamsoft.QRCodeDetails.ModuleSize
```

### Rows
The row count of the barcode.  

```csharp
int Dynamsoft.QRCodeDetails.Rows
```

### Columns
The column count of the barcode. 

```csharp
int Dynamsoft.QRCodeDetails.Columns
```

### ErrorCorrectionLevel
The error correction level of the barcode.  

```csharp
EnumQRCodeErrorCorrectionLevel Dynamsoft.QRCodeDetails.ErrorCorrectionLevel
```

### Version
The version of the QR Code.

```csharp
int Dynamsoft.QRCodeDetails.Version
```

### Model
Number of the models.

```csharp
int Dynamsoft.QRCodeDetails.Model
```

### Mode

Identify the first data encoding mode.

```csharp
int Dynamsoft.QRCodeDetails.Mode
```

### Page

Identify the position of the particular symbol.

```csharp
int Dynamsoft.QRCodeDetails.Page
```

### TotalPage

Identify the total number of symbols to be concatenated in the Structured Append format.

```csharp
int Dynamsoft.QRCodeDetails.TotalPage
```

### ParityData

The Parity Data shall be an 8 bit byte following the Symbol Sequence Indicator. The parity data is a value obtained by XORing byte by byte the ASCII/JIS values of all the original input data before division into symbol blocks.

```csharp
byte Dynamsoft.QRCodeDetails.ParityData
```
