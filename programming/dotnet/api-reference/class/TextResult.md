---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - TextResult Class
description: This page shows the TextResult Class of Dynamsoft Barcode Reader for .NET SDK.
keywords: TextResult, class, api reference, .Net
needAutoGenerateSidebar: false
---


# TextResult
Stores the text result.

```C#
public class TextResult
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`BarcodeFormat`](#barcodeformat) | [`EnumBarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) |
| [`BarcodeFormatString`](#barcodeformatstring) | *string* |
| [`BarcodeFormat_2`](#barcodeformat_2) | [`EnumBarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2) |
| [`BarcodeFormatString_2`](#barcodeformatstring_2) | *string* |
| [`BarcodeText`](#barcodetext) | *string* |
| [`BarcodeBytes`](#barcodebytes) | *byte[ ]* |
| [`LocalizationResult`](#localizationresult) | *[`LocalizationResult`](LocalizationResult.md)* |
| [`DetailedResult`](#detailedresult) | *object* |
| [`Results`](#results) | *[`ExtendedResult`](ExtendedResult.md)[ ]* |


### BarcodeFormat
Barcode type in BarcodeFormat group 1.

```C#
EnumBarcodeFormat Dynamsoft.Barcode.TextResult.BarcodeFormat
```

### BarcodeFormatString
Barcode type in BarcodeFormat group 1 as string.

```C#
string Dynamsoft.Barcode.TextResult.BarcodeFormatString
```

### BarcodeFormat_2
Barcode type in BarcodeFormat group 2.

```C#
EnumBarcodeFormat_2 Dynamsoft.Barcode.TextResult.BarcodeFormat_2
```

### BarcodeFormatString_2
Barcode type in BarcodeFormat group 2 as string.

```C#
string Dynamsoft.Barcode.TextResult.BarcodeFormatString_2
```

### BarcodeText
The barcode text, ends by '\0'.

```C#
string Dynamsoft.Barcode.TextResult.BarcodeText
```

### BarcodeBytes
The barcode content in a byte array.

```C#
byte[] Dynamsoft.Barcode.TextResult.BarcodeBytes
```

### LocalizationResult
The corresponding localization result.

```C#
LocalizationResult Dynamsoft.Barcode.TextResult.LocalizationResult
```

### DetailedResult
One of the following: [`QRCodeDetails`](QRCodeDetails.md), [`PDF417Details`](PDF417Details.md), [`DataMatrixDetails`](DataMatrixDetails.md), [`AztecDetails`](AztecDetails.md), [`OneDCodeDetails`](OneDCodeDetails.md).

```C#
object Dynamsoft.Barcode.TextResult.DetailedResult
```

### Results
The extended result array.

```C#
ExtendedResult[] Dynamsoft.Barcode.TextResult.Results
```
