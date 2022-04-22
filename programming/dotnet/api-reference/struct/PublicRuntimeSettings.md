---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - PublicRuntimeSettings Struct
description: This page shows the PublicRuntimeSettings Struct of Dynamsoft Barcode Reader for .NET SDK.
keywords: PublicRuntimeSettings, struct, api reference, .Net
needAutoGenerateSidebar: false
---


# PublicRuntimeSettings
Defines a struct to configure the barcode reading runtime settings. These settings control the barcode recognition process such as which barcode types to decode.

```csharp
public struct PublicRuntimeSettings
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`TerminatePhase`](#terminatephase) | [`EnumTerminatePhase`]({{ site.enumerations }}parameter-mode-enums.html#terminatephase) |
| [`Timeout`](#timeout) | *int* |
| [`MaxAlgorithmThreadCount`](#maxalgorithmthreadcount) | *int* |
| [`ExpectedBarcodesCount`](#expectedbarcodescount) | *int* |
| [`BarcodeFormatIds`](#barcodeformatids) | *int* |
| [`BarcodeFormatIds_2`](#barcodeformatids_2) | *int* |
| [`PDFRasterDPI`](#pdfrasterdpi) | *int* |
| [`ScaleDownThreshold`](#scaledownthreshold) | *int* |
| [`BinarizationModes`](#binarizationmodes) | [`EnumBinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode)[ ] |
| [`LocalizationModes`](#localizationmodes) | [`EnumLocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode)[ ] |
| [`FurtherModes`](#furthermodes) | [`FurtherModes`](FurtherModes.md) |
| [`DeblurLevel`](#deblurlevel) | *int* |
| [`IntermediateResultTypes`](#intermediateresulttypes) | *int* |
| [`IntermediateResultSavingMode`](#intermediateresultsavingmode) | [`EnumIntermediateResultSavingMode`]({{ site.enumerations }}result-enums.html#intermediateresultsavingmode) |
| [`ResultCoordinateType`](#resultcoordinatetype) | [`EnumResultCoordinateType`]({{ site.enumerations }}result-enums.html#resultcoordinatetype) |
| [`TextResultOrderModes`](#textresultordermodes) | [`EnumTextResultOrderMode`]({{ site.enumerations }}result-enums.html#textresultordermode)[ ] |
| [`ReturnBarcodeZoneClarity`](#returnbarcodezoneclarity) | *int* |
| [`Region`](#region) | [`RegionDefinition`](RegionDefinition.md) |
| [`MinBarcodeTextLength`](#minbarcodetextlength) | *int* |
| [`MinResultConfidence`](#minresultconfidence) | *int* |
| [`ScaleUpModes`](#scaleupmodes) | [`EnumScaleUpMode`]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode)[ ] |
| [`PDFReadingMode`](#pdfreadingmode) | [`EnumPDFReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#pdfreadingmode) | 
| [`DeblurModes`](#deblurmodes) | [`EnumDeblurMode`]({{ site.enumerations }}parameter-mode-enums.html#deblurmode)[ ] |
| [`BarcodeZoneMinDistanceToImageBorders`](#barcodezonemindistancetoimageborders) | *int* |


### TerminatePhase
Sets the phase to stop the barcode reading algorithm.

```csharp
EnumTerminatePhase Dynamsoft.DBR.PublicRuntimeSettings.TerminatePhase
```

**Value Range**     
    Any one of the [`TerminatePhase`]({{ site.enumerations }}parameter-mode-enums.html#terminatephase) Enumeration items
      
**Default Value**     
    `TP_BARCODE_RECOGNIZED`
    
**Remarks**       
    When the recognition result is not desired, you can set this parameter can be set to skip certain processing stages.

### Timeout
Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. It does not include the time taken to load/decode an image (TIFF, PNG, etc.) from disk into memory.

```csharp
int Dynamsoft.DBR.PublicRuntimeSettings.Timeout
```

**Value Range**     
    [0, 0x7fffffff]
      
**Default Value**     
    10000
    
**Remarks**       
    If you want to stop reading barcodes after a certain period of time, you can use this parameter to set a timeout.

### MaxAlgorithmThreadCount
Sets the number of threads the image processing algorithm will use to decode barcodes.

```csharp
int Dynamsoft.DBR.PublicRuntimeSettings.MaxAlgorithmThreadCount
```

**Value Range**     
    [1, 4]
      
**Default Value**     
    4
    
**Remarks**       
    To keep a balance between speed and quality, the library concurrently runs four different threads for barcode decoding by default.

### ExpectedBarcodesCount
Sets the number of barcodes expected to be detected for each image.

```csharp
int Dynamsoft.DBR.PublicRuntimeSettings.ExpectedBarcodesCount
```

**Value Range**     
    [0, 0x7fffffff]
      
**Default Value**     
    0
    
**Remarks**       
    0: means Unknown and it will find at least one barcode. 1: try to find one barcode. If one barcode is found, the library will stop the localization process and perform barcode decoding. n: try to find n barcodes. If the library only finds m (m<n) barcode, it will try different algorithms till n barcodes are found or all algorithms are tried.

### BarcodeFormatIds
Sets the formats of the barcode in BarcodeFormat group 1 to be read. Barcode formats in BarcodeFormat group 1 can be combined.

```csharp
int Dynamsoft.DBR.PublicRuntimeSettings.BarcodeFormatIds
```

**Value Range**     
    A combined value of [`BarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) Enumeration items
      
**Default Value**     
    `BF_ALL`
    
**Remarks**       
    If the barcode type(s) are certain, specifying the barcode type(s) to be read will speed up the recognition process. The barcode format our library will search for is composed of [BarcodeFormat group 1]({{ site.enumerations }}format-enums.html#barcodeformat) and [BarcodeFormat group 2]({{ site.enumerations }}format-enums.html#barcodeformat_2), so you need to specify the barcode format in group 1 and group 2 individually.
    
**See Also**      
    [`EnumBarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat), [`EnumBarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2)
      
### BarcodeFormatIds_2
Sets the formats of the barcode in BarcodeFormat group 2 to be read. Barcode formats in BarcodeFormat group 2 can be combined.

```csharp
int Dynamsoft.DBR.PublicRuntimeSettings.BarcodeFormatIds_2
```

**Value Range**     
    A combined value of [`BarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2) Enumeration items
      
**Default Value**     
    `BF2_NULL`
    
**Remarks**       
    If the barcode type(s) are certain, specifying the barcode type(s) to be read will speed up the recognition process. The barcode format our library will search for is composed of [BarcodeFormat group 1]({{ site.enumerations }}format-enums.html#barcodeformat) and [BarcodeFormat group 2]({{ site.enumerations }}format-enums.html#barcodeformat_2), so you need to specify the barcode format in group 1 and group 2 individually.
    
**See Also**      
    [`EnumBarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat), [`EnumBarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2)

### PDFRasterDPI
Sets the output image resolution.

```csharp
EnumPDFReadingMode Dynamsoft.DBR.PublicRuntimeSettings.PDFReadingMode
```

**Value Range**     
    [100, 600]
      
**Default Value**     
    300
    
**Remarks**       
    When decoding barcodes from a PDF file using the DecodeFile method, the library will convert the PDF file to image(s) first, then perform barcode recognition.

### ScaleDownThreshold
Sets the threshold for the image shrinking.

```csharp
int Dynamsoft.DBR.PublicRuntimeSettings.ScaleDownThreshold
```

**Value Range**     
    [512, 0x7fffffff]
      
**Default Value**     
    2300
    
**Remarks**       
    If the shorter edge size is larger than the given threshold value, the library will calculate the required height and width of the barcode image and shrink the image to that size before localization. Otherwise, the library will perform barcode localization on the original image.

### BinarizationModes
Sets the mode and priority for binarization.

```csharp
EnumBinarizationMode[] Dynamsoft.DBR.PublicRuntimeSettings.BinarizationModes
```

**Value Range**     
    Each array item can be any one of the [`BinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode) Enumeration items.
      
**Default Value**     
    `[EnumBinarizationMode.BM_LOCAL_BLOCK, EnumBinarizationMode.BM_SKIP, EnumBinarizationMode.BM_SKIP, EnumBinarizationMode.BM_SKIP, EnumBinarizationMode.BM_SKIP, EnumBinarizationMode.BM_SKIP, EnumBinarizationMode.BM_SKIP, EnumBinarizationMode.BM_SKIP]`
    
**Remarks**       
    The array index represents the priority of the item. The smaller index is, the higher priority is.

### LocalizationModes
Sets the mode and priority for localization algorithms.

```csharp
EnumLocalizationMode[] Dynamsoft.DBR.PublicRuntimeSettings.LocalizationModes
```

**Value Range**     
    Each array item can be any one of the [`LocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) Enumeration items.
      
**Default Value**     
    `[EnumLocalizationMode.LM_CONNECTED_BLOCKS, EnumLocalizationMode.LM_SCAN_DIRECTLY, EnumLocalizationMode.LM_STATISTICS, EnumLocalizationMode.LM_LINES, EnumLocalizationMode.LM_SKIP, EnumLocalizationMode.LM_SKIP, EnumLocalizationMode.LM_SKIP, EnumLocalizationMode.LM_SKIP]`
    
**Remarks**       
    The array index represents the priority of the item. The smaller index is, the higher priority is.

### FurtherModes
Sets further modes.

```csharp
FurtherModes Dynamsoft.DBR.PublicRuntimeSettings.FurtherModes
```

**See Also**      
    [`FurtherModes`](FurtherModes.md)

### DeblurLevel
Sets the degree of blurriness of the barcode.

```csharp
int Dynamsoft.DBR.PublicRuntimeSettings.DeblurLevel
```

**Value Range**     
    [0, 9]
      
**Default Value**     
    9
    
**Remarks**       
    If you have a blurry image, you can set this property to a larger value. The higher the value set, the more effort the library will spend to decode images, but it may also slow down the recognition process.

### IntermediateResultTypes
Sets which types of intermediate result to be kept for further reference. Intermediate result types can be combined.

```csharp
int Dynamsoft.DBR.PublicRuntimeSettings.IntermediateResultTypes
```

**Value Range**     
    A combined value of [`IntermediateResultType`]({{ site.enumerations }}result-enums.html#intermediateresulttype) Enumeration items
      
**Default Value**     
    0

### IntermediateResultSavingMode
Sets the mode for saving intermediate result.

```csharp
EnumIntermediateResultSavingMode Dynamsoft.DBR.PublicRuntimeSettings.IntermediateResultSavingMode
```

**Value Range**     
    A value of [`IntermediateResultSavingMode`]({{ site.enumerations }}result-enums.html#intermediateresultsavingmode) Enumeration items
      
**Default Value**     
    `EnumIntermediateResultSavingMode.IRSM_MEMORY`

### ResultCoordinateType
Specifies the format for the coordinates returned.

```csharp
EnumResultCoordinateType Dynamsoft.DBR.PublicRuntimeSettings.ResultCoordinateType
```

**Value Range**     
    Any one of the [`ResultCoordinateType`]({{ site.enumerations }}result-enums.html#resultcoordinatetype) Enumeration items
      
**Default Value**     
    EnumResultCoordinateType.RCT_PIXEL

### TextResultOrderModes
Sets the mode and priority for the order of the text results returned.

```csharp
EnumTextResultOrderMode[] Dynamsoft.DBR.PublicRuntimeSettings.TextResultOrderModes
```

**Value Range**     
    Each array item can be any one of the [`TextResultOrderMode`]({{ site.enumerations }}result-enums.html#textresultordermode) Enumeration items.
      
**Default Value**     
    `[EnumTextResultOrderMode.TROM_CONFIDENCE, EnumTextResultOrderMode.TROM_POSITION, EnumTextResultOrderMode.TROM_FORMAT, EnumTextResultOrderMode.TROM_SKIP, EnumTextResultOrderMode.TROM_SKIP, EnumTextResultOrderMode.TROM_SKIP, EnumTextResultOrderMode.TROM_SKIP, EnumTextResultOrderMode.TROM_SKIP]`
    
**Remarks**       
    The array index represents the priority of the item. The smaller the index, the higher the priority.   

### ReturnBarcodeZoneClarity
Sets whether or not to return the clarity of the barcode zone.

```csharp
int Dynamsoft.DBR.PublicRuntimeSettings.ReturnBarcodeZoneClarity
```

**Value Range**     
    [0,1]
      
**Default Value**     
    0
    
**Remarks**       
    0: Do not return the clarity of the barcode zone; 1: Return the clarity of the barcode zone.  

### Region
Sets the region definition including regionTop, regionLeft, regionRight, regionBottom, and regionMeasuredByPercentage.

```csharp
RegionDefinition Dynamsoft.DBR.PublicRuntimeSettings.Region
```

### MinBarcodeTextLength
Sets the range of barcode text length for barcodes search.

```csharp
int Dynamsoft.DBR.PublicRuntimeSettings.MinBarcodeTextLength
```

**Value Range**     
    [0, 0x7fffffff]
      
**Default Value**     
    0
    
**Remarks**       
    0: means no limitation on the barcode text length. 

### MinResultConfidence
The minimum confidence of the result.

```csharp
int Dynamsoft.DBR.PublicRuntimeSettings.MinResultConfidence
```

**Value Range**     
    [0, 100]
      
**Default Value**     
    30
    
**Remarks**       
    0: means no limitation on the result confidence.

### ScaleUpModes
Sets the mode and priority to control the sampling methods of scale-up for linear barcode with small module sizes.

```csharp
EnumScaleUpMode[] Dynamsoft.DBR.PublicRuntimeSettings.ScaleUpModes
```

**Value Range**     
    Each array item can be any one of the [`ScaleUpMode`]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode) Enumeration items.
      
**Default Value**     
    `[EnumScaleUpMode.SUM_AUTO, EnumScaleUpMode.SUM_SKIP, EnumScaleUpMode.SUM_SKIP, EnumScaleUpMode.SUM_SKIP, EnumScaleUpMode.SUM_SKIP, EnumScaleUpMode.SUM_SKIP, EnumScaleUpMode.SUM_SKIP, EnumScaleUpMode.SUM_SKIP]`
    
**Remarks**       
    The array index represents the priority of the item. The smaller the index, the higher the priority.

### PDFReadingMode
Sets the way to detect barcodes from a PDF file when using the DecodeFile method.

```csharp
EnumPDFReadingMode Dynamsoft.DBR.PublicRuntimeSettings.PDFReadingMode
```

**Value Range**     
    Any one of the [`PDFReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#pdfreadingmode) Enumeration items. 
      
**Default Value**     
    `EnumPDFReadingMode.PDFRM_AUTO`  


### DeblurModes
Sets the mode and priority for deblurring.

```csharp
EnumDeblurMode[] Dynamsoft.DBR.PublicRuntimeSettings.DeblurModes
```

**Value Range**     
    Each array item can be any one of the [`EnumDeblurMode`]({{ site.enumerations }}parameter-mode-enums.html#deblurmode) Enumeration items.
      
**Default Value**     
    `[EnumDeblurMode.DM_SKIP, EnumDeblurMode.DM_SKIP, EnumDeblurMode.DM_SKIP, EnumDeblurMode.DM_SKIP, EnumDeblurMode.DM_SKIP, EnumDeblurMode.DM_SKIP, EnumDeblurMode.DM_SKIP, EnumDeblurMode.DM_SKIP, EnumDeblurMode.DM_SKIP, EnumDeblurMode.DM_SKIP]`
    
**Remarks**       
    The array index represents the priority of the item. The smaller index is, the higher priority is.

### BarcodeZoneMinDistanceToImageBorders
Sets the minimum distance (in pixels) between the barcode zone and image borders.
```csharp
int Dynamsoft.DBR.PublicRuntimeSettings.BarcodeZoneMinDistanceToImageBorders
```
**Value Range**     
    [0, 0x7fffffff]
      
**Default Value**     
    0
    
**Remarks**       
    0: means no limitation on the distance. 
