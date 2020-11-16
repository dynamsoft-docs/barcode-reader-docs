---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - IntermediateResult Class
description: This page shows the IntermediateResult Class of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: IntermediateResult, class, api reference, java
needAutoGenerateSidebar: false
---


# IntermediateResult
Stores the intermediate result.


## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`results`](#results) | *Object\[\]* |
| [`dataType`](#datatype) | *int* |
| [`resultType`](#resulttype) | *int* |
| [`barcodeComplementMode`](#barcodecomplementmode) | *int* |
| [`bcmIndex`](#bcmindex) | *int* |
| [`deformationResistingMode`](#deformationresistingmode) | *int* |
| [`drmIndex`](#drmindex) | *int* |
| [`dpmCodeReadingMode`](#dpmcodereadingmode) | *int* |
| [`dpmcrmIndex`](#dpmcrmindex) | *int* |
| [`rotationMatrix`](#rotationmatrix) | *double\[\]* |
| [`textFilterMode`](#textfiltermode) | *int* |
| [`tfmIndex`](#tfmindex) | *int* |
| [`localizationMode`](#localizationmode) | *int* |
| [`lmIndex`](#lmindex) | *int* |
| [`binarizationMode`](#binarizationmode) | *int* |
| [`bmIndex`](#bmindex) | *int* |
| [`imagePreprocessingMode`](#imagepreprocessingmode) | *int* |
| [`ipmIndex`](#ipmindex) | *int* |
| [`roiId`](#roiid) | *int* |
| [`regionPredetectionMode`](#regionpredetectionmode) | *int* |
| [`rpmIndex`](#rpmindex) | *int* |
| [`grayscaleTransformationMode`](#grayscaletransformationmode) | *int* |
| [`gtmIndex`](#gtmindex) | *int* |
| [`colourConversionMode`](#colourconversionmode) | *int* |
| [`cicmIndex`](#cicmindex) | *int* |
| [`colourClusteringMode`](#colourclusteringmode) | *int* |
| [`ccmIndex`](#ccmindex) | *int* |
| [`scaleDownRatio`](#scaledownratio) | *int* |
| [`frameId`](#frameid) | *int* |


### results
One of the following types: Array of [`Contour`](Contour.md), Array of [`ImageData`](ImageData.md), Array of [`LineSegment`](LineSegment.md), Array of [`LocalizationResult`](LocalizationResult.md), Array of [`RegionOfInterest`](RegionOfInterest.md).
```java
Object[] com.dynamsoft.barcode.IntermediateResult.results
```

### dataType
The data type of the intermediate result
```java
int com.dynamsoft.barcode.IntermediateResult.dataType
```

### resultType
Intermediate result type.
```java
int com.dynamsoft.barcode.IntermediateResult.resultType
```

### barcodeComplementMode
The [`EnumBarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode) used when generating the current intermediate result. 
```java
iny com.dynamsoft.barcode.IntermediateResult.barcodeComplementMode
```

### bcmIndex
The array index of current used [`EnumBarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode) in the [`barcodeComplementModes`](FurtherModes.md#barcodecomplementmodes) setting.
```java
int com.dynamsoft.barcode.IntermediateResult.bcmIndex
```

### deformationResistingMode
The [`EnumDeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) used when generating the current intermediate result.
```java
int com.dynamsoft.barcode.IntermediateResult.deformationResistingMode
```

### drmIndex
The array index of current used [`EnumDeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) in the [`deformationResistingModes`](FurtherModes.md#deformationresistingmodes) setting.
```java
int com.dynamsoft.barcode.IntermediateResult.drmIndex
```

### dpmCodeReadingMode
The [`EnumDPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode) used when generating the current intermediate result.
```java
int com.dynamsoft.barcode.IntermediateResult.dpmCodeReadingMode
```

### dpmcrmIndex
The array index of current used [`EnumDPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode) in the [`dpmCodeReadingModes`](FurtherModes.md#dpmcodereadingmodes) setting.
```java
int com.dynamsoft.barcode.IntermediateResult.dpmcrmIndex
```

### rotationMatrix
The rotation matrix.
```java
double[] com.dynamsoft.barcode.IntermediateResult.rotationMatrix
```

### textFilterMode
The [`EnumTextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode) used when generating the current intermediate result.
```java
int com.dynamsoft.barcode.IntermediateResult.textFilterMode
```

### tfmIndex
The array index of current used [`EnumTextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode) in the [`textFilterModes`](FurtherModes.md#textfiltermodes) setting.
```java
int com.dynamsoft.barcode.IntermediateResult.tfmIndex
```

### localizationMode
The [`EnumLocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) used when generating the current intermediate result.
```java
int com.dynamsoft.barcode.IntermediateResult.localizationMode
```

### lmIndex
The array index of current used [`EnumLocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) in the [`localizationModes`](PublicRuntimeSettings.md#localizationmodes) setting.
```java
int com.dynamsoft.barcode.IntermediateResult.lmIndex
```

### binarizationMode
The [`EnumBinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode) used when generating the current intermediate result.
```java
int com.dynamsoft.barcode.IntermediateResult.binarizationMode
```

### bmIndex
The array index of current used [`EnumBinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode) in the [`binarizationModes`](PublicRuntimeSettings.md#binarizationmodes) setting.
```java
int com.dynamsoft.barcode.IntermediateResult.bmIndex
```

### imagePreprocessingMode
The [`EnumImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode) used when generating the current intermediate result.
```java
int com.dynamsoft.barcode.IntermediateResult.imagePreprocessingMode
```

### ipmIndex
The array index of current used [`EnumImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode) in [`imagePreprocessingModes`](FurtherModes.md#imagepreprocessingmodes) setting.
```java
int com.dynamsoft.barcode.IntermediateResult.ipmIndex
```

### roiId
The ID of the ROI (Region Of Interest) generated by the SDK. -1 means the original image.
```java
int com.dynamsoft.barcode.IntermediateResult.roiId
```

### regionPredetectionMode
The [`EnumRegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode) used when generating the current intermediate result.
```java
int com.dynamsoft.barcode.IntermediateResult.regionPredetectionMode
```

### rpmIndex
The array index of current used [`EnumRegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode) in the [`regionPredetectionModes`](FurtherModes.md#regionpredetectionmodes) setting.
```java
int com.dynamsoft.barcode.IntermediateResult.rpmIndex
```

### grayscaleTransformationMode
The [`EnumGrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode) used when generating the current intermediate result.
```java
int com.dynamsoft.barcode.IntermediateResult.grayscaleTransformationMode
```

### gtmIndex
The array index of current used [`EnumGrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode) in the [`grayscaleTransformationModes`](FurtherModes.md#grayscaletransformationmodes) setting.
```java
int com.dynamsoft.barcode.IntermediateResult.gtmIndex
```

### colourConversionMode
The [`EnumColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode) used when generating the current intermediate result.
```java
int com.dynamsoft.barcode.IntermediateResult.colourConversionMode
```

### cicmIndex
The array index of current used [`EnumColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode) in the [`colourConversionModes`](FurtherModes.md#colourconversionmodes) setting.
```java
int com.dynamsoft.barcode.IntermediateResult.cicmIndex
```

### colourClusteringMode
The [`EnumColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode) used when generating the current intermediate result.
```java
int com.dynamsoft.barcode.IntermediateResult.colourClusteringMode
```

### ccmIndex
The array index of current used [`EnumColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode) in the [`colourClusteringModes`](FurtherModes.md#colourclusteringmodes) setting.
```java
int com.dynamsoft.barcode.IntermediateResult.ccmIndex
```

### scaleDownRatio
The scale down ratio.
```java
int com.dynamsoft.barcode.IntermediateResult.scaleDownRatio
```

### frameId
The ID of the operated frame.
```java
int com.dynamsoft.barcode.IntermediateResult.frameId
```

