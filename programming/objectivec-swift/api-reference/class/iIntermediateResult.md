---
layout: default-layout
title: Dynamsoft Barcode Reader Objective-C & Swift API Reference - iIntermediateResult Class
description: This page shows the iIntermediateResult Class of Dynamsoft Barcode Reader for iOS SDK.
keywords: iIntermediateResult, class, api reference, objective-c, oc, swift
needAutoGenerateSidebar: false
---


# iIntermediateResult

Stores the intermediate result.

## Typedefs

```objc
@interface iIntermediateResult 
```  

---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`resultsCount`](#resultscount) | *NSInteger* |
| [`results`](#results) | *NSObject\** |
| [`dataType`](#datatype) | [`EnumIMResultDataType`]({{ site.enumerations }}result-enums.html#imresultdatatype) |
| [`resultType`](#resulttype) | [`EnumIntermediateResultType`]({{ site.enumerations }}result-enums.html#intermediateresulttype) |
| [`barcodeComplementMode`](#barcodecomplementmode) | [`EnumBarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode) |
| [`bcmIndex`](#bcmindex) | *NSInteger* |
| [`deformationResistingMode`](#deformationresistingmode) | [`EnumDeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) |
| [`drmIndex`](#drmindex) | *NSInteger* |
| [`dpmCodeReadingMode`](#dpmcodereadingmode) | [`EnumDPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode) |
| [`dpmcrmIndex`](#dpmcrmindex) | *NSInteger* |
| [`transformationMatrix`](#transformationMatrix) | *NSArray \** |
| [`textFilterMode`](#textfiltermode) | [`EnumTextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode) |
| [`tfmIndex`](#tfmindex) | *NSInteger* |
| [`localizationMode`](#localizationmode) | [`EnumLocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) |
| [`lmIndex`](#lmindex) | *NSInteger* |
| [`binarizationMode`](#binarizationmode) | [`EnumBinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode) |
| [`bmIndex`](#bmindex) | *NSInteger* |
| [`imagePreprocessingMode`](#imagepreprocessingmode) | [`EnumImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode) |
| [`ipmIndex`](#ipmindex) | *NSInteger* |
| [`roiId`](#roiid) | *NSInteger* |
| [`regionPredetectionMode`](#regionpredetectionmode) | [`EnumRegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode) |
| [`rpmIndex`](#rpmindex) | *NSInteger* |
| [`grayscaleTransformationMode`](#grayscaletransformationmode) | [`EnumGrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode) |
| [`gtmIndex`](#gtmindex) | *NSInteger* |
| [`colourConversionMode`](#colourconversionmode) | [`EnumColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode) |
| [`cicmIndex`](#cicmindex) | *NSInteger* |
| [`colourClusteringMode`](#colourclusteringmode) | [`EnumColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode) |
| [`ccmIndex`](#ccmindex) | *NSInteger* |
| [`scaleDownRatio`](#scaledownratio) | *NSInteger* |
| [`frameId`](#frameid) | *NSInteger* |


### resultsCount

The total result count.

```objc
NSInteger resultsCount
```

### results

One of the following types: Array of [`iContour`](iContour.md), Array of [`iImageData`](iImageData.md), Array of [`iLineSegment`](iLineSegment.md), Array of [`iLocalizationResult`](iLocalizationResult.md), Array of [`iRegionOfInterest`](iRegionOfInterest.md).

```objc
NSObject* results
```

### dataType

The data type of the intermediate result

```objc
EnumIMResultDataType dataType
```

### resultType

Intermediate result type.

```objc
EnumIntermediateResultType resultType
```

### barcodeComplementMode

The [`EnumBarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode) used when generating the current intermediate result. 

```objc
EnumBarcodeComplementMode barcodeComplementMode
```

### bcmIndex

The array index of current used [`EnumBarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode) in the [`barcodeComplementModes`](iFurtherModes.md#barcodecomplementmodes) setting.

```objc
NSInteger bcmIndex
```

### deformationResistingMode

The [`EnumDeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) used when generating the current intermediate result.

```objc
EnumDeformationResistingMode deformationResistingMode
```

### drmIndex

The array index of current used [`EnumDeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) in the [`deformationResistingModes`](iFurtherModes.md#deformationresistingmodes) setting.

```objc
NSInteger drmIndex
```

### dpmCodeReadingMode
The [`EnumDPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode) used when generating the current intermediate result.
```objc
EnumDPMCodeReadingMode dpmCodeReadingMode
```

### dpmcrmIndex

The array index of current used [`EnumDPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode) in the [`dpmCodeReadingModes`](iFurtherModes.md#dpmcodereadingmodes) setting.

```objc
NSInteger dpmcrmIndex
```

### transformationMatrix

The rotation matrix.

```objc
NSArray* transformationMatrix[9]
```

### textFilterMode

The [`EnumTextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode) used when generating the current intermediate result.

```objc
EnumTextFilterMode textFilterMode
```

### tfmIndex

The array index of current used [`EnumTextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode) in the [`textFilterModes`](iFurtherModes.md#textfiltermodes) setting.

```objc
NSInteger tfmIndex
```

### localizationMode

The [`EnumLocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) used when generating the current intermediate result.

```objc
EnumLocalizationMode localizationMode
```

### lmIndex

The array index of current used [`EnumLocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) in the [`localizationModes`](iPublicRuntimeSettings.md#localizationmodes) setting.

```objc
NSInteger lmIndex
```

### binarizationMode

The [`EnumBinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode) used when generating the current intermediate result.

```objc
EnumBinarizationMode binarizationMode
```

### bmIndex

The array index of current used [`EnumBinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode) in the [`binarizationModes`](iPublicRuntimeSettings.md#binarizationmodes) setting.

```objc
NSInteger bmIndex
```

### imagePreprocessingMode

The [`EnumImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode) used when generating the current intermediate result.

```objc
EnumImagePreprocessingMode imagePreprocessingMode
```

### ipmIndex

The array index of current used [`EnumImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode) in [`imagePreprocessingModes`](iFurtherModes.md#imagepreprocessingmodes) setting.

```objc
NSInteger ipmIndex
```

### roiId

The ID of the ROI (Region Of Interest) generated by the SDK. -1 means the original image.

```objc
NSInteger roiId
```

### regionPredetectionMode

The [`EnumRegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode) used when generating the current intermediate result.

```objc
EnumRegionPredetectionMode regionPredetectionMode
```

### rpmIndex

The array index of current used [`EnumRegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode) in the [`regionPredetectionModes`](iFurtherModes.md#regionpredetectionmodes) setting.

```objc
NSInteger rpmIndex
```

### grayscaleTransformationMode

The [`EnumGrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode) used when generating the current intermediate result.

```objc
EnumGrayscaleTransformationMode grayscaleTransformationMode
```

### gtmIndex

The array index of current used [`EnumGrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode) in the [`grayscaleTransformationModes`](iFurtherModes.md#grayscaletransformationmodes) setting.

```objc
NSInteger gtmIndex
```

### colourConversionMode

The [`EnumColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode) used when generating the current intermediate result.

```objc
EnumColourConversionMode colourConversionMode
```

### cicmIndex

The array index of current used [`EnumColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode) in the [`colourConversionModes`](iFurtherModes.md#colourconversionmodes) setting.

```objc
NSInteger cicmIndex
```

### colourClusteringMode

The [`EnumColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode) used when generating the current intermediate result.

```objc
EnumColourClusteringMode colourClusteringMode
```

### ccmIndex

The array index of current used [`EnumColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode) in the [`colourClusteringModes`](iFurtherModes.md#colourclusteringmodes) setting.

```objc
NSInteger ccmIndex
```

### scaleDownRatio

The scale down ratio.

```objc
NSInteger scaleDownRatio
```

### frameId

The ID of the operated frame.

```objc
NSInteger frameId
```

