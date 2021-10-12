---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - LocalizationResult Class
description: This page shows the LocalizationResult Class of Dynamsoft Barcode Reader for .NET SDK.
keywords: LocalizationResult, class, api reference, .Net
needAutoGenerateSidebar: false
---


# LocalizationResult
Stores the localization result.

```C#
public class LocalizationResult
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`TerminatePhase`](#terminatephase) | [`EnumTerminatePhase`]({{ site.enumerations }}parameter-mode-enums.html#terminatephase) |
| [`BarcodeFormat`](#barcodeformat) | [`EnumBarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) |
| [`BarcodeFormatString`](#barcodeformatstring) | *string* |
| [`BarcodeFormat_2 `](#barcodeformat_2 ) | [`EnumBarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2) |
| [`BarcodeFormatString_2`](#barcodeformatstring_2) | *string* |
| [`ResultPoints`](#resultpoints) | *Point[ ]* |
| [`Angle`](#angle) | *int* |
| [`ModuleSize`](#modulesize) | *int* |
| [`PageNumber`](#pagenumber) | *int* |
| [`RegionName`](#regionname) | *string* |
| [`DocumentName`](#documentname)| *string* |
| [`ResultCoordinateType`](#resultcoordinatetype) | [`EnumResultCoordinateType`]({{ site.parameters_reference }}result-coordinate-type.html) |
| [`AccompanyingTextBytes`](#accompanyingtextbytes) | *byte[ ]* |
| [`Confidence`](#confidence) | *int* |


### TerminatePhase
The terminate phase of localization result.

```C#
EnumTerminatePhase Dynamsoft.Barcode.LocalizationResult.TerminatePhase
```

### BarcodeFormat
Barcode type in BarcodeFormat group 1.

```C#
EnumBarcodeFormat Dynamsoft.Barcode.LocalizationResult.BarcodeFormat
```

### BarcodeFormatString
Barcode type in BarcodeFormat group 1 as string.

```C#
string Dynamsoft.Barcode.LocalizationResult.BarcodeFormatString
```

### BarcodeFormat_2
Barcode type in BarcodeFormat group 2.

```C#
EnumBarcodeFormat_2 Dynamsoft.Barcode.LocalizationResult.BarcodeFormat_2
```

### BarcodeFormatString_2
Barcode type in BarcodeFormat group 2 as string.

```C#
string Dynamsoft.Barcode.LocalizationResult.BarcodeFormatString_2
```

### ResultPoints
The array which stores the coordinates of four result points. 

```C#
Point[] Dynamsoft.Barcode.LocalizationResult.ResultPoints
```

### Angle
The angle of a barcode. Values range is from 0 to 360.

```C#
int Dynamsoft.Barcode.LocalizationResult.Angle
```

### ModuleSize
The barcode module size (the minimum bar width in pixel).

```C#
int Dynamsoft.Barcode.LocalizationResult.ModuleSize
```

### PageNumber
The page number the barcode located in. The index is 0-based.

```C#
int Dynamsoft.Barcode.LocalizationResult.PageNumber
```

### RegionName
The region name the barcode located in.

```C#
string Dynamsoft.Barcode.LocalizationResult.RegionName
```

### DocumentName
The document name.

```C#
string Dynamsoft.Barcode.LocalizationResult.DocumentName
```

### ResultCoordinateType
The coordinate type.

```C#
EnumResultCoordinateType Dynamsoft.Barcode.LocalizationResult.ResultCoordinateType
```

### AccompanyingTextBytes
The accompanying text content in a byte array.

```C#
byte[] Dynamsoft.Barcode.LocalizationResult.AccompanyingTextBytes
```

### Confidence
The confidence of the localization result.

```C#
int Dynamsoft.Barcode.LocalizationResult.Confidence
```
