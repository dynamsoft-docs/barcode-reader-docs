---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - LocalizationResult Class
description: This page shows the LocalizationResult Class of Dynamsoft Barcode Reader for .NET SDK.
keywords: LocalizationResult, class, api reference, .Net
needAutoGenerateSidebar: false
---


# LocalizationResult
Stores the localization result.

```csharp
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
| [`ResultCoordinateType`](#resultcoordinatetype) | [`EnumResultCoordinateType`]({{ site.parameters_reference }}image-parameter/result-control.html#resultcoordinatetype) |
| [`AccompanyingTextBytes`](#accompanyingtextbytes) | *byte[ ]* |
| [`Confidence`](#confidence) | *int* |


### TerminatePhase
The terminate phase of localization result.

```csharp
EnumTerminatePhase Dynamsoft.DBR.LocalizationResult.TerminatePhase
```

### BarcodeFormat
Barcode type in BarcodeFormat group 1.

```csharp
EnumBarcodeFormat Dynamsoft.DBR.LocalizationResult.BarcodeFormat
```

### BarcodeFormatString
Barcode type in BarcodeFormat group 1 as string.

```csharp
string Dynamsoft.DBR.LocalizationResult.BarcodeFormatString
```

### BarcodeFormat_2
Barcode type in BarcodeFormat group 2.

```csharp
EnumBarcodeFormat_2 Dynamsoft.DBR.LocalizationResult.BarcodeFormat_2
```

### BarcodeFormatString_2
Barcode type in BarcodeFormat group 2 as string.

```csharp
string Dynamsoft.DBR.LocalizationResult.BarcodeFormatString_2
```

### ResultPoints
The array which stores the coordinates of four result points. 

```csharp
Point[] Dynamsoft.DBR.LocalizationResult.ResultPoints
```

### Angle
The angle of a barcode. Values range is from 0 to 360.

```csharp
int Dynamsoft.DBR.LocalizationResult.Angle
```

### ModuleSize
The barcode module size (the minimum bar width in pixel).

```csharp
int Dynamsoft.DBR.LocalizationResult.ModuleSize
```

### PageNumber
The page number the barcode located in. The index is 0-based.

```csharp
int Dynamsoft.DBR.LocalizationResult.PageNumber
```

### RegionName
The region name the barcode located in.

```csharp
string Dynamsoft.DBR.LocalizationResult.RegionName
```

### DocumentName
The document name.

```csharp
string Dynamsoft.DBR.LocalizationResult.DocumentName
```

### ResultCoordinateType
The coordinate type.

```csharp
EnumResultCoordinateType Dynamsoft.DBR.LocalizationResult.ResultCoordinateType
```

### AccompanyingTextBytes
The accompanying text content in a byte array.

```csharp
byte[] Dynamsoft.DBR.LocalizationResult.AccompanyingTextBytes
```

### Confidence
The confidence of the localization result.

```csharp
int Dynamsoft.DBR.LocalizationResult.Confidence
```
