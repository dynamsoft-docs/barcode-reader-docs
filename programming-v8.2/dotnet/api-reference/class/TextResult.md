---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - TextResult Class
description: This page shows the TextResult Class of Dynamsoft Barcode Reader for .NET SDK.
keywords: TextResult, class, api reference, .Net
needAutoGenerateSidebar: false
---


# TextResult
Stores the text result.

```csharp
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
| [`Exception`](#Exception) | *string* |


### BarcodeFormat
Barcode type in BarcodeFormat group 1.

```csharp
EnumBarcodeFormat Dynamsoft.TextResult.BarcodeFormat
```

### BarcodeFormatString
Barcode type in BarcodeFormat group 1 as string.

```csharp
string Dynamsoft.TextResult.BarcodeFormatString
```

### BarcodeFormat_2
Barcode type in BarcodeFormat group 2.

```csharp
EnumBarcodeFormat_2 Dynamsoft.TextResult.BarcodeFormat_2
```

### BarcodeFormatString_2
Barcode type in BarcodeFormat group 2 as string.

```csharp
string Dynamsoft.TextResult.BarcodeFormatString_2
```

### BarcodeText
The barcode text, ends by '\0'.

```csharp
string Dynamsoft.TextResult.BarcodeText
```

### BarcodeBytes
The barcode content in a byte array.

```csharp
byte[] Dynamsoft.TextResult.BarcodeBytes
```

### LocalizationResult
The corresponding localization result.

```csharp
LocalizationResult Dynamsoft.TextResult.LocalizationResult
```

### DetailedResult
One of the following: [`QRCodeDetails`](QRCodeDetails.md), [`PDF417Details`](PDF417Details.md), [`DataMatrixDetails`](DataMatrixDetails.md), [`AztecDetails`](AztecDetails.md), [`OneDCodeDetails`](OneDCodeDetails.md).

```csharp
object Dynamsoft.TextResult.DetailedResult
```

### Results
The extended result array.

```csharp
ExtendedResult[] Dynamsoft.TextResult.Results
```

### Exception
The exception message.

```csharp
string Dynamsoft.TextResult.Exception
```
