---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - IntermediateResult Class
description: This page shows the IntermediateResult Class of Dynamsoft Barcode Reader for .NET SDK.
keywords: IntermediateResult, class, api reference, .Net
needAutoGenerateSidebar: false
---


# IntermediateResult
Stores the intermediate result.

## Typedefs

```C#
public class IntermediateResult
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`Results`](#results) | *object[ ]* |
| [`DataType`](#datatype) | [`EnumIMResultDataType`]({{ site.enumerations }}result-enums.html#imresultdatatype) |
| [`ResultType`](#resulttype) | [`EnumIntermediateResultType`]({{ site.enumerations }}result-enums.html#intermediateresulttype) |
| [`BarcodeComplementMode`](#barcodecomplementmode) | [`EnumBarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode) |
| [`BCMIndex`](#bcmindex) | *int* |
| [`DeformationResistingMode`](#deformationresistingmode) | [`EnumDeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) |
| [`DRMIndex`](#drmindex) | *int* |
| [`DPMCodeReadingMode`](#dpmcodereadingmode) | [`EnumDPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode) |
| [`DPMCRMIndex`](#dpmcrmindex) | *int* |
| [`RotationMatrix`](#rotationmatrix) | *double[ ]* |
| [`TextFilterMode`](#textfiltermode) | [`EnumTextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode) |
| [`TFMIndex`](#tfmindex) | *int* |
| [`LocalizationMode`](#localizationmode) | [`EnumLocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) |
| [`LMIndex`](#lmindex) | *int* |
| [`BinarizationMode`](#binarizationmode) | [`EnumBinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode) |
| [`BMIndex`](#bmindex) | *int* |
| [`ImagePreprocessingMode`](#imagepreprocessingmode) | [`EnumImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode) |
| [`IPMIndex`](#ipmindex) | *int* |
| [`ROIId`](#roiid) | *int* |
| [`RegionPredetectionMode`](#regionpredetectionmode) | [`EnumRegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode) |
| [`RPMIndex`](#rpmindex) | *int* |
| [`GrayscaleTransformationMode`](#grayscaletransformationmode) | [`EnumGrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode) |
| [`GTMIndex`](#gtmindex) | *int* |
| [`ColourConversionMode`](#colourconversionmode) | [`EnumColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode) |
| [`CICMIndex`](#cicmindex) | *int* |
| [`ColourClusteringMode`](#colourclusteringmode) | [`EnumColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode) |
| [`CCMIndex`](#ccmindex) | *int* |
| [`ScaleDownRatio`](#scaledownratio) | *int* |
| [`FrameId`](#frameid) | *int* |



### Results
One of the following types: Array of [`Contour`](Contour.md), Array of [`ImageData`](ImageData.md), Array of [`LineSegment`](LineSegment.md), Array of [`LocalizationResult`](LocalizationResult.md), Array of [`RegionOfInterest`](RegionOfInterest.md).

```C#
object[] Dynamsoft.Barcode.IntermediateResult.Results
```

### DataType
The data type of the intermediate result

```C#
EnumIMResultDataType Dynamsoft.Barcode.IntermediateResult.DataType
```

### ResultType
Intermediate result type.

```C#
EnumIntermediateResultType Dynamsoft.Barcode.IntermediateResult.ResultType
```

### BarcodeComplementMode
The [`BarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode) used when generating the current intermediate result. 

```C#
EnumBarcodeComplementMode Dynamsoft.Barcode.IntermediateResult.BarcodeComplementMode
```

### BCMIndex
The array index of current used [`BarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode) in the [`BarcodeComplementModes`](../struct/FurtherModes.md#barcodecomplementmodes) setting.

```C#
int Dynamsoft.Barcode.IntermediateResult.BCMIndex
```

### DeformationResistingMode
The [`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) used when generating the current intermediate result.

```C#
EnumDeformationResistingMode Dynamsoft.Barcode.IntermediateResult.DeformationResistingMode
```

### DRMIndex
The array index of current used [`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) in the [`DeformationResistingModes`](../struct/FurtherModes.md#deformationresistingmodes) setting.

```C#
int Dynamsoft.Barcode.IntermediateResult.DRMIndex
```

### DPMCodeReadingMode
The [`DPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode) used when generating the current intermediate result.

```C#
EnumDPMCodeReadingMode Dynamsoft.Barcode.IntermediateResult.DPMCodeReadingMode
```

### DPMCRMIndex
The array index of current used [`DPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode) in the [`DPMCodeReadingModes`](../struct/FurtherModes.md#dpmcodereadingmodes) setting.

```C#
int Dynamsoft.Barcode.IntermediateResult.DPMCRMIndex
```

### RotationMatrix
The rotation matrix.

```C#
double[] Dynamsoft.Barcode.IntermediateResult.RotationMatrix
```

### TextFilterMode
The [`TextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode) used when generating the current intermediate result.

```C#
EnumTextFilterMode Dynamsoft.Barcode.IntermediateResult.TextFilterMode
```

### TFMIndex
The array index of current used [`TextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode) in the [`TextFilterModes`](../struct/FurtherModes.md#textfiltermodes) setting.
```C#
int Dynamsoft.Barcode.IntermediateResult.TFMIndex
```

### LocalizationMode
The [`LocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) used when generating the current intermediate result.

```C#
EnumLocalizationMode Dynamsoft.Barcode.IntermediateResult.LocalizationMode
```

### LMIndex
The array index of current used [`LocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) in the [`LocalizationModes`](../struct/PublicRuntimeSettings.md#localizationmodes) setting.

```C#
int Dynamsoft.Barcode.IntermediateResult.LMIndex
```

### BinarizationMode
The [`BinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode) used when generating the current intermediate result.

```C#
EnumBinarizationMode Dynamsoft.Barcode.IntermediateResult.BinarizationMode
```

### BMIndex
The array index of current used [`BinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode) in the [`BinarizationModes`](../struct/PublicRuntimeSettings.md#binarizationmodes) setting.

```C#
int Dynamsoft.Barcode.IntermediateResult.BMIndex
```

### ImagePreprocessingMode
The [`ImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode) used when generating the current intermediate result.

```C#
EnumImagePreprocessingMode Dynamsoft.Barcode.IntermediateResult.ImagePreprocessingMode
```

### IPMIndex
The array index of current used [`ImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode) in [`ImagePreprocessingModes`](../struct/FurtherModes.md#imagepreprocessingmodes) setting.

```C#
int Dynamsoft.Barcode.IntermediateResult.IPMIndex
```

### ROIId
The ID of the ROI (Region Of Interest) generated by the SDK. -1 means the original image.

```C#
int Dynamsoft.Barcode.IntermediateResult.ROIId
```

### RegionPredetectionMode
The [`RegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode) used when generating the current intermediate result.

```C#
EnumRegionPredetectionMode Dynamsoft.Barcode.IntermediateResult.RegionPredetectionMode
```

### RPMIndex
The array index of current used [`RegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode) in the [`RegionPredetectionModes`](../struct/FurtherModes.md#regionpredetectionmodes) setting.

```C#
int Dynamsoft.Barcode.IntermediateResult.RPMIndex
```

### GrayscaleTransformationMode
The [`GrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode) used when generating the current intermediate result.

```C#
EnumGrayscaleTransformationMode Dynamsoft.Barcode.IntermediateResult.GrayscaleTransformationMode
```

### GTMIndex
The array index of current used [`GrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode) in the [`GrayscaleTransformationModes`](../struct/FurtherModes.md#grayscaletransformationmodes) setting.

```C#
int Dynamsoft.Barcode.IntermediateResult.GTMIndex
```

### ColourConversionMode
The [`ColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode) used when generating the current intermediate result.

```C#
EnumColourConversionMode Dynamsoft.Barcode.IntermediateResult.ColourConversionMode
```

### CICMIndex
The array index of current used [`ColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode) in the [`ColourConversionModes`](../struct/FurtherModes.md#colourconversionmodes) setting.

```C#
int Dynamsoft.Barcode.IntermediateResult.CICMIndex
```

### ColourClusteringMode
The [`ColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode) used when generating the current intermediate result.

```C#
EnumColourClusteringMode Dynamsoft.Barcode.IntermediateResult.ColourClusteringMode
```

### CCMIndex
The array index of current used [`ColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode) in the [`ColourClusteringModes`](../struct/FurtherModes.md#colourclusteringmodes) setting.

```C#
int Dynamsoft.Barcode.IntermediateResult.CCMIndex
```

### ScaleDownRatio
The scale down ratio.

```C#
int Dynamsoft.Barcode.IntermediateResult.ScaleDownRatio
```

### FrameId
The ID of the operated frame.

```C#
int Dynamsoft.Barcode.IntermediateResult.FrameId
```

