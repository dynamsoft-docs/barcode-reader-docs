---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - ExtendedResult Class
description: This page shows the ExtendedResult Class of Dynamsoft Barcode Reader for .NET SDK.
keywords: ExtendedResult, class, api reference, .Net
needAutoGenerateSidebar: false
---


# ExtendedResult
Stores the extended result. 

```C#
public class ExtendedResult
```  

---

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`ResultType`](#resulttype) | [`EnumResultType`]({{ site.enumerations }}result-enums.html#resulttype) |
| [`BarcodeFormat`](#barcodeformat) | [`EnumBarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) |
| [`BarcodeFormatString`](#barcodeformatstring) | *string* |
| [`BarcodeFormat_2`](#barcodeformat_2) | [`EnumBarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2) |
| [`BarcodeFormatString_2`](#barcodeformatstring_2) | *string* | 
| [`Confidence`](#confidence) | *int* | 
| [`Bytes`](#bytes) | *byte[ ]* | 
| [`AccompanyingTextBytes`](#accompanyingtextbytes) | *byte[ ]* | 
| [`Deformation`](#deformation) | *int* | 
| [`DetailedResult`](#detailedresult) | *object* |
| [`SamplingImage`](#samplingimage) | *[`SamplingImageData`](SamplingImageData.md)* |
| [`Clarity`](#clarity) | *int* | 

### ResultType
Extended result type. 

```C#
EnumResultType Dynamsoft.Barcode.ExtendedResult.ResultType
```

### BarcodeFormat
Barcode type in BarcodeFormat group 1. 

```C#
EnumBarcodeFormat Dynamsoft.Barcode.ExtendedResult.BarcodeFormat
```

### BarcodeFormatString
Barcode type in BarcodeFormat group 1 as string.

```C#
string Dynamsoft.Barcode.ExtendedResult.BarcodeFormatString
```

### BarcodeFormat_2
Barcode type in BarcodeFormat group 2.

```C#
EnumBarcodeFormat_2 Dynamsoft.Barcode.ExtendedResult.BarcodeFormat_2
```
 
### BarcodeFormatString_2
Barcode type in BarcodeFormat group 2 as string.

```C#
string Dynamsoft.Barcode.ExtendedResult.BarcodeFormatString_2
```

### Confidence
The confidence of the result.

```C#
int Dynamsoft.Barcode.ExtendedResult.Confidence
```

### Bytes
The content in a byte array.

```C#
byte[] Dynamsoft.Barcode.ExtendedResult.Bytes
```

### AccompanyingTextBytes
The accompanying text content in a byte array.

```C#
byte[] Dynamsoft.Barcode.ExtendedResult.AccompanyingTextBytes
```

### Deformation
The deformation value.

```C#
int Dynamsoft.Barcode.ExtendedResult.Deformation
```

### DetailedResult
One of the following: [`QRCodeDetails`](QRCodeDetails.md), [`PDF417Details`](PDF417Details.md), [`DataMatrixDetails`](DataMatrixDetails.md), [`AztecDetails`](AztecDetails.md), [`OneDCodeDetails`](OneDCodeDetails.md).

```C#
object Dynamsoft.Barcode.ExtendedResult.DetailedResult
```

### SamplingImage
The sampling image info.

```C#
SamplingImageData Dynamsoft.Barcode.ExtendedResult.SamplingImage
```
 
### Clarity
The clarity of the barcode zone in percentage.

```C#
int Dynamsoft.Barcode.ExtendedResult.Clarity
```
