---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - PublicRuntimeSettings Struct
description: This page shows the PublicRuntimeSettings Struct of Dynamsoft Barcode Reader for .NET SDK.
keywords: PublicRuntimeSettings, struct, api reference, .Net
needAutoGenerateSidebar: false
---


# PublicRuntimeSettings
Defines a struct to configure the barcode reading runtime settings. These settings control the barcode recognition process such as which barcode types to decode.

```C#
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


### TerminatePhase
Sets the phase to stop the barcode reading algorithm.

```C#
EnumTerminatePhase Dynamsoft.Barcode.PublicRuntimeSettings.TerminatePhase
```

- **Value range**   
    Any one of the [`TerminatePhase`]({{ site.enumerations }}parameter-mode-enums.html#terminatephase) Enumeration items
      
- **Default value**   
    `TP_BARCODE_RECOGNIZED`
    
- **Remark**   
    When the recognition result is not desired, you can set this parameter can be set to skip certain processing stages.

### Timeout
Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. It does not include the time taken to load/decode an image (TIFF, PNG, etc.) from disk into memory.

```C#
int Dynamsoft.Barcode.PublicRuntimeSettings.Timeout
```

- **Value range**   
    [0, 0x7fffffff]
      
- **Default value**   
    10000
    
- **Remark**   
    If you want to stop reading barcodes after a certain period of time, you can use this parameter to set a timeout.

### MaxAlgorithmThreadCount
Sets the number of threads the image processing algorithm will use to decode barcodes.

```C#
int Dynamsoft.Barcode.PublicRuntimeSettings.MaxAlgorithmThreadCount
```

- **Value range**   
    [1, 4]
      
- **Default value**   
    4
    
- **Remark**   
    To keep a balance between speed and quality, the library concurrently runs four different threads for barcode decoding by default.

### ExpectedBarcodesCount
Sets the number of barcodes expected to be detected for each image.

```C#
int Dynamsoft.Barcode.PublicRuntimeSettings.ExpectedBarcodesCount
```

- **Value range**   
    [0, 0x7fffffff]
      
- **Default value**   
    0
    
- **Remark**   
    0: means Unknown and it will find at least one barcode. 1: try to find one barcode. If one barcode is found, the library will stop the localization process and perform barcode decoding. n: try to find n barcodes. If the library only finds m (m<n) barcode, it will try different algorithms till n barcodes are found or all algorithms are tried.

### BarcodeFormatIds
Sets the formats of the barcode in BarcodeFormat group 1 to be read. Barcode formats in BarcodeFormat group 1 can be combined.

```C#
int Dynamsoft.Barcode.PublicRuntimeSettings.BarcodeFormatIds
```

- **Value range**   
    A combined value of [`BarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) Enumeration items
      
- **Default value**   
    `BF_ALL`
    
- **Remark**   
    If the barcode type(s) are certain, specifying the barcode type(s) to be read will speed up the recognition process. The barcode format our library will search for is composed of [BarcodeFormat group 1]({{ site.enumerations }}format-enums.html#barcodeformat) and [BarcodeFormat group 2]({{ site.enumerations }}format-enums.html#barcodeformat_2), so you need to specify the barcode format in group 1 and group 2 individually.
    
- **See also**  
    [`EnumBarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat), [`EnumBarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2)
      
### BarcodeFormatIds_2
Sets the formats of the barcode in BarcodeFormat group 2 to be read. Barcode formats in BarcodeFormat group 2 can be combined.

```C#
int Dynamsoft.Barcode.PublicRuntimeSettings.BarcodeFormatIds_2
```

- **Value range**   
    A combined value of [`BarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2) Enumeration items
      
- **Default value**   
    `BF2_NULL`
    
- **Remark**   
    If the barcode type(s) are certain, specifying the barcode type(s) to be read will speed up the recognition process. The barcode format our library will search for is composed of [BarcodeFormat group 1]({{ site.enumerations }}format-enums.html#barcodeformat) and [BarcodeFormat group 2]({{ site.enumerations }}format-enums.html#barcodeformat_2), so you need to specify the barcode format in group 1 and group 2 individually.
    
- **See also**  
    [`EnumBarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat), [`EnumBarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2)

### PDFRasterDPI
Sets the output image resolution.

```C#
EnumPDFReadingMode Dynamsoft.Barcode.PublicRuntimeSettings.PDFReadingMode
```

- **Value range**   
    [100, 600]
      
- **Default value**   
    300
    
- **Remark**   
    When decoding barcodes from a PDF file using the DecodeFile method, the library will convert the PDF file to image(s) first, then perform barcode recognition.

### ScaleDownThreshold
Sets the threshold for the image shrinking.

```C#
int Dynamsoft.Barcode.PublicRuntimeSettings.ScaleDownThreshold
```

- **Value range**   
    [512, 0x7fffffff]
      
- **Default value**   
    2300
    
- **Remark**   
    If the shorter edge size is larger than the given threshold value, the library will calculate the required height and width of the barcode image and shrink the image to that size before localization. Otherwise, the library will perform barcode localization on the original image.

### BinarizationModes
Sets the mode and priority for binarization.

```C#
EnumBinarizationMode[] Dynamsoft.Barcode.PublicRuntimeSettings.BinarizationModes
```

- **Value range**   
    Each array item can be any one of the [`BinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode) Enumeration items.
      
- **Default value**   
    `[EnumBinarizationMode.BM_LOCAL_BLOCK, EnumBinarizationMode.BM_SKIP, EnumBinarizationMode.BM_SKIP, EnumBinarizationMode.BM_SKIP, EnumBinarizationMode.BM_SKIP, EnumBinarizationMode.BM_SKIP, EnumBinarizationMode.BM_SKIP, EnumBinarizationMode.BM_SKIP]`
    
- **Remark**   
    The array index represents the priority of the item. The smaller index is, the higher priority is.

### LocalizationModes
Sets the mode and priority for localization algorithms.

```C#
EnumLocalizationMode[] Dynamsoft.Barcode.PublicRuntimeSettings.LocalizationModes
```

- **Value range**   
    Each array item can be any one of the [`LocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) Enumeration items.
      
- **Default value**   
    `[EnumLocalizationMode.LM_CONNECTED_BLOCKS, EnumLocalizationMode.LM_SCAN_DIRECTLY, EnumLocalizationMode.LM_STATISTICS, EnumLocalizationMode.LM_LINES, EnumLocalizationMode.LM_SKIP, EnumLocalizationMode.LM_SKIP, EnumLocalizationMode.LM_SKIP, EnumLocalizationMode.LM_SKIP]`
    
- **Remark**   
    The array index represents the priority of the item. The smaller index is, the higher priority is.

### FurtherModes
Sets further modes.

```C#
FurtherModes Dynamsoft.Barcode.PublicRuntimeSettings.FurtherModes
```

- **See also**  
    [`FurtherModes`](FurtherModes.md)

### DeblurLevel
Sets the degree of blurriness of the barcode.

```C#
int Dynamsoft.Barcode.PublicRuntimeSettings.DeblurLevel
```

- **Value range**   
    [0, 9]
      
- **Default value**   
    9
    
- **Remark**   
    If you have a blurry image, you can set this property to a larger value. The higher the value set, the more effort the library will spend to decode images, but it may also slow down the recognition process.

### IntermediateResultTypes
Sets which types of intermediate result to be kept for further reference. Intermediate result types can be combined.

```C#
int Dynamsoft.Barcode.PublicRuntimeSettings.IntermediateResultTypes
```

- **Value range**   
    A combined value of [`IntermediateResultType`]({{ site.enumerations }}result-enums.html#intermediateresulttype) Enumeration items
      
- **Default value**   
    0

### IntermediateResultSavingMode
Sets the mode for saving intermediate result.

```C#
EnumIntermediateResultSavingMode Dynamsoft.Barcode.PublicRuntimeSettings.IntermediateResultSavingMode
```

- **Value range**   
    A value of [`IntermediateResultSavingMode`]({{ site.enumerations }}result-enums.html#intermediateresultsavingmode) Enumeration items
      
- **Default value**   
    `EnumIntermediateResultSavingMode.IRSM_MEMORY`

### ResultCoordinateType
Specifies the format for the coordinates returned.

```C#
EnumResultCoordinateType Dynamsoft.Barcode.PublicRuntimeSettings.ResultCoordinateType
```

- **Value range**   
    Any one of the [`ResultCoordinateType`]({{ site.enumerations }}result-enums.html#resultcoordinatetype) Enumeration items
      
- **Default value**   
    EnumResultCoordinateType.RCT_PIXEL

### TextResultOrderModes
Sets the mode and priority for the order of the text results returned.

```C#
EnumTextResultOrderMode[] Dynamsoft.Barcode.PublicRuntimeSettings.TextResultOrderModes
```

- **Value range**   
    Each array item can be any one of the [`TextResultOrderMode`]({{ site.enumerations }}result-enums.html#textresultordermode) Enumeration items.
      
- **Default value**   
    `[EnumTextResultOrderMode.TROM_CONFIDENCE, EnumTextResultOrderMode.TROM_POSITION, EnumTextResultOrderMode.TROM_FORMAT, EnumTextResultOrderMode.TROM_SKIP, EnumTextResultOrderMode.TROM_SKIP, EnumTextResultOrderMode.TROM_SKIP, EnumTextResultOrderMode.TROM_SKIP, EnumTextResultOrderMode.TROM_SKIP]`
    
- **Remark**   
    The array index represents the priority of the item. The smaller the index, the higher the priority.   

### ReturnBarcodeZoneClarity
Sets whether or not to return the clarity of the barcode zone.

```C#
int Dynamsoft.Barcode.PublicRuntimeSettings.ReturnBarcodeZoneClarity
```

- **Value range**   
    [0,1]
      
- **Default value**   
    0
    
- **Remark**   
    0: Do not return the clarity of the barcode zone; 1: Return the clarity of the barcode zone.  

### Region
Sets the region definition including regionTop, regionLeft, regionRight, regionBottom, and regionMeasuredByPercentage.

```C#
RegionDefinition Dynamsoft.Barcode.PublicRuntimeSettings.Region
```

### MinBarcodeTextLength
Sets the range of barcode text length for barcodes search.

```C#
int Dynamsoft.Barcode.PublicRuntimeSettings.MinBarcodeTextLength
```

- **Value range**   
    [0, 0x7fffffff]
      
- **Default value**   
    0
    
- **Remark**   
    0: means no limitation on the barcode text length. 

### MinResultConfidence
The minimum confidence of the result.

```C#
int Dynamsoft.Barcode.PublicRuntimeSettings.MinResultConfidence
```

- **Value range**   
    [0, 100]
      
- **Default value**   
    0
    
- **Remark**   
    0: means no limitation on the result confidence.

### ScaleUpModes
Sets the mode and priority to control the sampling methods of scale-up for linear barcode with small module sizes.

```C#
EnumScaleUpMode[] Dynamsoft.Barcode.PublicRuntimeSettings.ScaleUpModes
```

- **Value range**   
    Each array item can be any one of the [`ScaleUpMode`]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode) Enumeration items.
      
- **Default value**   
    `[EnumScaleUpMode.SUM_AUTO, EnumScaleUpMode.SUM_SKIP, EnumScaleUpMode.SUM_SKIP, EnumScaleUpMode.SUM_SKIP, EnumScaleUpMode.SUM_SKIP, EnumScaleUpMode.SUM_SKIP, EnumScaleUpMode.SUM_SKIP, EnumScaleUpMode.SUM_SKIP]`
    
- **Remark**   
    The array index represents the priority of the item. The smaller the index, the higher the priority.

### PDFReadingMode
Sets the way to detect barcodes from a PDF file when using the DecodeFile method.

```C#
EnumPDFReadingMode Dynamsoft.Barcode.PublicRuntimeSettings.PDFReadingMode
```

- **Value range**   
    Any one of the [`PDFReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#pdfreadingmode) Enumeration items. 
      
- **Default value**   
    `EnumPDFReadingMode.PDFRM_AUTO`  
