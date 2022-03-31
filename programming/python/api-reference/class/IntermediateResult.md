---
layout: default-layout
title: Dynamsoft Barcode Reader Python API Reference - IntermediateResult Class
description: This page shows the IntermediateResult Class of Dynamsoft Barcode Reader for Python SDK.
keywords: IntermediateResult, class, api reference, python
needAutoGenerateSidebar: false
---


# IntermediateResult
Stores the intermediate result.

```python
class IntermediateResult
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`results`](#results) | *One of the following types: List of [`class Contour`](Contour.md), List of [`class ImageData`](ImageData.md), List of [`class LineSegment`](LineSegment.md), List of [`class LocalizationResult`](LocalizationResult.md), List of [`class RegionOfInterest`](RegionOfInterest.md), List of [`class Quadrilateral`](Quadrilateral.md)* |
| [`data_type`](#data_type) | [`IMResultDataType`]({{ site.enumerations }}result-enums.html#imresultdatatype) |
| [`result_type`](#result_type) | [`IntermediateResultType`]({{ site.enumerations }}result-enums.html#intermediateresulttype) |
| [`barcode_complement_mode`](#barcode_complement_mode) | [`BarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode) |
| [`bcm_index`](#bcm_index) | *int* |
| [`deformation_resisting_mode`](#deformation_resisting_mode) | [`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) |
| [`drm_index`](#drm_index) | *int* |
| [`dpm_code_reading_mode`](#dpm_code_reading_mode) | [`DPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode) |
| [`dpmcrm_index`](#dpmcrm_index) | *int* |
| [`rotation_matrix`](#rotation_matrix) | *list[double]* |
| [`text_filter_mode`](#text_filter_mode) | [`TextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode) |
| [`tfm_index`](#tfm_index) | *int* |
| [`localization_mode`](#localization_mode) | [`LocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) |
| [`lm_index`](#lm_index) | *int* |
| [`binarization_mode`](#binarization_mode) | [`BinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode) |
| [`bm_index`](#bm_index) | *int* |
| [`image_preprocessing_mode`](#image_preprocessing_mode) | [`ImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode) |
| [`ipm_index`](#ipm_index) | *int* |
| [`roi_id`](#roi_id) | *int* |
| [`region_predetection_mode`](#region_predetection_mode) | [`RegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode) |
| [`rpm_index`](#rpm_index) | *int* |
| [`grayscale_transformation_mode`](#grayscale_transformation_mode) | [`GrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode) |
| [`gtm_index`](#gtm_index) | *int* |
| [`colour_conversion_mode`](#colour_conversion_mode) | [`ColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode) |
| [`cicm_index`](#cicm_index) | *int* |
| [`colour_clustering_mode`](#colour_clustering_mode) | [`ColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode) |
| [`ccm_index`](#ccm_index) | *int* |
| [`scale_down_ratio`](#scale_down_ratio) | *int* |
| [`frame_id`](#frame_id) | *int* |
| [`rpm_colour_argument_index`](#rpm_colour_argument_index) | *int* |



### results
One of the following types: List of [`class Contour`](Contour.md), List of [`class ImageData`](ImageData.md), List of [`class LineSegment`](LineSegment.md), List of [`class LocalizationResult`](LocalizationResult.md), List of [`class RegionOfInterest`](RegionOfInterest.md), List of [`class Quadrilateral`](Quadrilateral.md).

```python
IntermediateResult.results
```

### data_type
The data type of the intermediate result

```python
IntermediateResult.data_type
```

### result_type
Intermediate result type.

```python
IntermediateResult.result_type
```

### barcode_complement_mode
The [`BarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode) used when generating the current intermediate result. 

```python
IntermediateResult.barcode_complement_mode
```

### bcm_index
The array index of current used [`BarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode) in the [`BarcodeComplementModes`](PublicRuntimeSettings.md#barcode_complement_modes) setting.

```python
IntermediateResult.bcm_index
```

### deformation_resisting_mode
The [`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) used when generating the current intermediate result.

```python
IntermediateResult.deformation_resisting_mode
```

### drm_index
The array index of current used [`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) in the [`DeformationResistingModes`](PublicRuntimeSettings.md#deformation_resisting_modes) setting.

```python
IntermediateResult.drm_index
```

### dpm_code_readingMode
The [`DPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode) used when generating the current intermediate result.

```python
IntermediateResult.dpm_code_reading_mode
```

### dpmcrm_index
The array index of current used [`DPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode) in the [`DPMCodeReadingModes`](PublicRuntimeSettings.md#dpm_code_reading_modes) setting.

```python
IntermediateResult.dpmcrm_index
```

### rotation_matrix
The rotation matrix.

```python
IntermediateResult.rotation_matrix
```

### text_filter_mode
The [`TextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode) used when generating the current intermediate result.

```python
IntermediateResult.text_filter_mode
```

### tfm_index
The array index of current used [`TextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode) in the [`TextFilterModes`](PublicRuntimeSettings.md#text_filter_modes) setting.
```python
IntermediateResult.tfm_index
```

### localization_mode
The [`LocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) used when generating the current intermediate result.

```python
IntermediateResult.localization_mode
```

### lm_index
The array index of current used [`LocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) in the [`LocalizationModes`](PublicRuntimeSettings.md#localization_modes) setting.

```python
IntermediateResult.lm_index
```

### binarization_mode
The [`BinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode) used when generating the current intermediate result.

```python
IntermediateResult.binarization_mode
```

### bm_index
The array index of current used [`BinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode) in the [`BinarizationModes`](PublicRuntimeSettings.md#binarization_modes) setting.

```python
IntermediateResult.bm_index
```

### image_preprocessing_mode
The [`ImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode) used when generating the current intermediate result.

```python
IntermediateResult.image_preprocessing_mode
```

### ipm_index
The array index of current used [`ImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode) in [`ImagePreprocessingModes`](PublicRuntimeSettings.md#image_preprocessing_modes) setting.

```python
IntermediateResult.ipm_index
```

### roi_id
The ID of the ROI (Region Of Interest) generated by the SDK. -1 means the original image.

```python
IntermediateResult.roi_id
```

### region_predetection_mode
The [`RegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode) used when generating the current intermediate result.

```python
IntermediateResult.region_predetection_mode
```

### rpm_index
The array index of current used [`RegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode) in the [`RegionPredetectionModes`](PublicRuntimeSettings.md#region_predetection_modes) setting.

```python
IntermediateResult.rpm_index
```

### grayscale_transformation_mode
The [`GrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode) used when generating the current intermediate result.

```python
IntermediateResult.grayscale_transformation_mode
```

### gtm_index
The array index of current used [`GrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode) in the [`GrayscaleTransformationModes`](PublicRuntimeSettings.md#grayscale_transformation_modes) setting.

```python
IntermediateResult.gtm_index
```

### colour_conversion_mode
The [`ColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode) used when generating the current intermediate result.

```python
IntermediateResult.colour_conversion_mode
```

### cicm_index
The array index of current used [`ColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode) in the [`ColourConversionModes`](PublicRuntimeSettings.md#colour_conversion_modes) setting.

```python
IntermediateResult.cicm_index
```

### colour_clustering_mode
The [`ColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode) used when generating the current intermediate result.

```python
IntermediateResult.colour_clustering_mode
```

### ccm_index
The array index of current used [`ColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode) in the [`ColourClusteringModes`](PublicRuntimeSettings.md#colour_clustering_modes) setting.

```python
IntermediateResult.ccm_index
```

### scale_down_ratio
The scale down ratio.

```python
IntermediateResult.scale_down_ratio
```

### frame_id
The ID of the operated frame.

```python
IntermediateResult.frame_id
```

### rpm_colour_argument_index
The index of ForeAndBackgroundColour argument used for RegionPredetectionMode.

```python
IntermediateResult.rpm_colour_argument_index
```