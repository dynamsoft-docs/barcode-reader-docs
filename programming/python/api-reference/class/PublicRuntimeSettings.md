---
layout: default-layout
title: Dynamsoft Barcode Reader Python API Reference - PublicRuntimeSetting Class
description: This page shows the PublicRuntimeSetting Class of Dynamsoft Barcode Reader for Python SDK.
keywords: PublicRuntimeSetting, class, api reference, python
needAutoGenerateSidebar: false
---


# PublicRuntimeSetting
Defines a class to configure the barcode reading runtime settings. These settings control the barcode recognition process such as which barcode types to decode.

```python
class PublicRuntimeSetting
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`accompanying_text_recognition_modes`](#accompanying_text_recognition_modes) | list[ [`EnumAccompanyingTextRecognitionMode`]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode) ] |
| [`barcode_format_ids`](#barcode_format_ids) | *int* |
| [`barcode_format_ids_2`](#barcode_format_ids_2) | *int* |
| [`barcode_colour_modes`](#barcode_colour_modes) | list[ [`EnumBarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode) ] |
| [`barcode_complement_modes`](#barcode_complement_modes) | list[ [`EnumBarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode) ] |
| [`barcode_zone_min_distance_to_image_borders`](#barcode_zone_min_distance_to_image_borders) | *int* |
| [`binarization_modes`](#binarization_modes) | list[ [`EnumBinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode) ] |
| [`colour_clustering_modes`](#colour_clustering_modes) | list[ [`EnumColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode) ] |
| [`colour_conversion_modes`](#colour_conversion_modes) | list[ [`EnumColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode) ] |
| [`deblur_level`](#deblurlevel) | *int* |
| [`deblur_modes`](#deblur_modes) | list[ [`EnumDeblurMode`]({{ site.enumerations }}parameter-mode-enums.html#deblurmode) ] |
| [`deformation_resisting_modes`](#deformation_resisting_modes) | list[ [`EnumDeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) ] |
| [`dpm_code_reading_modes`](#dpm_code_reading_modes) | list[ [`EnumDPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode) ] |
| [`expected_barcodes_count`](#expected_barcodes_count) | *int* |
| [`grayscale_transformation_modes`](#grayscale_transformation_modes) | list[ [`EnumGrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode) ] |
| [`image_preprocessing_modes`](#image_preprocessing_modes) | list[ [`EnumImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode) ] |
| [`intermediate_result_saving_mode`](#intermediate_result_saving_mode) | [`EnumIntermediateResultSavingMode`]({{ site.enumerations }}result-enums.html#intermediateresultsavingmode) |
| [`intermediate_result_types`](#intermediate_result_types) | *int* |
| [`localization_modes`](#localization_modes) | list[ [`EnumLocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) ] |
| [`max_algorithm_thread_count`](#max_algorithm_thread_count) | *int* |
| [`min_barcode_text_length`](#min_barcode_text_length) | *int* |
| [`min_result_confidence`](#min_result_confidence) | *int* |
| [`pdf_raster_dpi`](#pdf_raster_dpi) | *int* |
| [`pdf_reading_mode`](#pdf_reading_mode) | [`EnumPDFReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#pdfreadingmode) | 
| [`region_bottom`](#region_bottom) | *int* |
| [`region_left`](#region_left) | *int* |
| [`region_measured_by_percentage`](#region_measured_by_percentage) | *int* |
| [`region_predetection_modes`](#region_predetection_modes) | list[ [`EnumRegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode) ] |
| [`region_right`](#region_right) | *int* |
| [`region_top`](#region_top) | *int* |
| [`result_coordinate_type`](#result_coordinate_type) | [`EnumResultCoordinateType`]({{ site.enumerations }}result-enums.html#resultcoordinatetype) |
| [`return_barcode_zone_clarity`](#return_barcode_zone_clarity) | *int* |
| [`scale_down_threshold`](#scale_down_threshold) | *int* |
| [`scale_up_modes`](#scale_up_modes) | list[ [`EnumScaleUpMode`]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode) ] |
| [`terminate_phase`](#terminate_phase) | [`EnumTerminatePhase`]({{ site.enumerations }}parameter-mode-enums.html#terminatephase) |
| [`texture_detection_modes`](#texture_detection_modes) | list[ [`EnumTextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode) ] |
| [`text_assisted_correction_mode`](#text_assisted_correction_mode) | list[ [`EnumTextResultOrderMode`]({{ site.enumerations }}result-enums.html#textresultordermode) ] |
| [`text_filter_modes`](#text_filter_modes) | list[ [`EnumTextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode) ] |
| [`text_result_order_modes`](#text_result_order_modes) | list[ [`TextResultOrderMode`]({{ site.enumerations }}result-enums.html#textresultordermode) ] |
| [`timeout`](#timeout) | *int* |


### accompanying_text_recognition_modes
Sets the mode and priority to recognize accompanying text.

```python
PublicRuntimeSetting.accompanying_text_recognition_modes
```

**Value Range**     
    Each list item can be any one of the [`AccompanyingTextRecognitionMode`]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode) Enumeration items.
      
**Default Value**     
    [EnumAccompanyingTextRecognitionMode.ATRM_SKIP, EnumAccompanyingTextRecognitionMode.ATRM_SKIP, EnumAccompanyingTextRecognitionMode.ATRM_SKIP, EnumAccompanyingTextRecognitionMode.ATRM_SKIP, EnumAccompanyingTextRecognitionMode.ATRM_SKIP, EnumAccompanyingTextRecognitionMode.ATRM_SKIP, EnumAccompanyingTextRecognitionMode.ATRM_SKIP, EnumAccompanyingTextRecognitionMode.ATRM_SKIP]
    
**Remarks**       
    The list index represents the priority of the item. The smaller index is, the higher priority is.
      

### barcode_format_ids
Sets the formats of the barcode in BarcodeFormat group 1 to be read. Barcode formats in BarcodeFormat group 1 can be combined.

```python
PublicRuntimeSetting.barcode_format_ids
```

**Value Range**     
    A combined value of [`BarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) Enumeration items
      
**Default Value**     
    EnumBarcodeFormat.BF_ALL
    
**Remarks**       
    If the barcode type(s) are certain, specifying the barcode type(s) to be read will speed up the recognition process.

### barcode_format_ids_2
Sets the formats of the barcode in BarcodeFormat group 2 to be read. Barcode formats in BarcodeFormat group 2 can be combined.

```python
PublicRuntimeSetting.barcode_format_ids_2
```

**Value Range**     
    A combined value of [`BarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2) Enumeration items
      
**Default Value**     
    EnumBarcodeFormat_2.BF2_NULL
    
**Remarks**       
    If the barcode type(s) are certain, specifying the barcode type(s) to be read will speed up the recognition process.    

### barcode_colour_modes
Sets the mode and priority for the barcode colour mode used to process the barcode zone.

```python
PublicRuntimeSetting.barcode_colour_modes
```

**Value Range**     
    Each list item can be any one of the [`BarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode) Enumeration items.
      
**Default Value**     
    [EnumBarcodeColourMode.BICM_DARK_ON_LIGHT, EnumBarcodeColourMode.BICM_SKIP, EnumBarcodeColourMode.BICM_SKIP, EnumBarcodeColourMode.BICM_SKIP, EnumBarcodeColourMode.BICM_SKIP, EnumBarcodeColourMode.BICM_SKIP, EnumBarcodeColourMode.BICM_SKIP, EnumBarcodeColourMode.BICM_SKIP]
    
**Remarks**       
    The list index represents the priority of the item. The smaller index is, the higher priority is.

### barcode_complement_modes
Sets the mode and priority to complement the missing parts in the barcode.

```python
PublicRuntimeSetting.barcode_complement_modes
```

**Value Range**     
    Each list item can be any one of the [`BarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode) Enumeration items.
      
**Default Value**     
    [EnumBarcodeComplementMode.BCM_SKIP, EnumBarcodeComplementMode.BCM_SKIP, EnumBarcodeComplementMode.BCM_SKIP, EnumBarcodeComplementMode.BCM_SKIP, EnumBarcodeComplementMode.BCM_SKIP, EnumBarcodeComplementMode.BCM_SKIP, EnumBarcodeComplementMode.BCM_SKIP, EnumBarcodeComplementMode.BCM_SKIP]
    
**Remarks**       
    The list index represents the priority of the item. The smaller index is, the higher priority is.

### barcode_zone_min_distance_to_image_borders
Sets the minimum distance (in pixels) between the barcode zone and image borders.
```python
PublicRuntimeSetting.barcode_zone_min_distance_to_image_borders
```

**Value Range**     
    [0, 0x7fffffff]
      
**Default Value**     
    0
    
**Remarks**       
    0: means no limitation on the distance. 


### binarization_modes
Sets the mode and priority for binarization.

```python
PublicRuntimeSetting.binarization_modes
```

**Value Range**     
    Each list item can be any one of the [`BinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode) Enumeration items.
      
**Default Value**     
    [EnumBinarizationMode.BM_LOCAL_BLOCK, EnumBinarizationMode.BM_SKIP, EnumBinarizationMode.BM_SKIP, EnumBinarizationMode.BM_SKIP, EnumBinarizationMode.BM_SKIP, EnumBinarizationMode.BM_SKIP, EnumBinarizationMode.BM_SKIP, EnumBinarizationMode.BM_SKIP]
    
**Remarks**       
    The list index represents the priority of the item. The smaller index is, the higher priority is.

### colour_clustering_modes
Sets the mode and priority for colour categorization. Not supported yet.

```python
PublicRuntimeSetting.colour_clustering_modes
```

**Value Range**     
    Each list item can be any one of the [`ColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode) Enumeration items.
      
**Default Value**     
    [EnumColourClusteringMode.CCM_SKIP, EnumColourClusteringMode.CCM_SKIP, EnumColourClusteringMode.CCM_SKIP, EnumColourClusteringMode.CCM_SKIP, EnumColourClusteringMode.CCM_SKIP, EnumColourClusteringMode.CCM_SKIP, EnumColourClusteringMode.CCM_SKIP, EnumColourClusteringMode.CCM_SKIP]
    
**Remarks**       
    The list index represents the priority of the item. The smaller index is, the higher priority is.

### colour_conversion_modes
Sets the mode and priority for converting a colour image to a grayscale image.

```python
PublicRuntimeSetting.colour_conversion_modes
```

**Value Range**     
    Each list item can be any one of the [`ColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode) Enumeration items.
      
**Default Value**     
    [EnumColourConversionMode.CICM_GENERAL, EnumColourConversionMode.CICM_SKIP, EnumColourConversionMode.CICM_SKIP, EnumColourConversionMode.CICM_SKIP, EnumColourConversionMode.CICM_SKIP, EnumColourConversionMode.CICM_SKIP, EnumColourConversionMode.CICM_SKIP, EnumColourConversionMode.CICM_SKIP]
    
**Remarks**       
    The list index represents the priority of the item. The smaller index is, the higher priority is.

### deblur_level
Sets the degree of blurriness of the barcode.

```python
PublicRuntimeSettings.deblur_level
```

**Value Range**     
    [0, 9]
      
**Default Value**     
    9
    
**Remarks**       
    If you have a blurry image, you can set this property to a larger value. The higher the value set, the more effort the library will spend to decode images, but it may also slow down the recognition process.


### deblur_modes
Sets the mode and priority for deblurring.

```python
PublicRuntimeSetting.deblur_modes
```

**Value Range**     
    Each list item can be any one of the [`EnumDeblurMode`]({{ site.enumerations }}parameter-mode-enums.html#deblurmode) Enumeration items.
      
**Default Value**     
    [EnumDeblurMode.DM_SKIP, EnumDeblurMode.DM_SKIP, EnumDeblurMode.DM_SKIP, EnumDeblurMode.DM_SKIP, EnumDeblurMode.DM_SKIP, EnumDeblurMode.DM_SKIP, EnumDeblurMode.DM_SKIP, EnumDeblurMode.DM_SKIP, EnumDeblurMode.DM_SKIP, EnumDeblurMode.DM_SKIP]
    
**Remarks**       
    The list index represents the priority of the item. The smaller index is, the higher priority is.


### deformation_resisting_modes
Sets the mode and priority for deformation resisting.

```python
PublicRuntimeSetting.deformation_resisting_modes
```

**Value Range**     
    Each list item can be any one of the [`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) Enumeration items.
      
**Default Value**     
    [EnumDeformationResistingMode.DRM_SKIP, EnumDeformationResistingMode.DRM_SKIP, EnumDeformationResistingMode.DRM_SKIP, EnumDeformationResistingMode.DRM_SKIP, EnumDeformationResistingMode.DRM_SKIP, EnumDeformationResistingMode.DRM_SKIP, EnumDeformationResistingMode.DRM_SKIP, EnumDeformationResistingMode.DRM_SKIP]
    
**Remarks**       
    The list index represents the priority of the item. The smaller index is, the higher priority is.

### dpm_code_reading_modes
Sets the mode and priority for DPM code reading.

```python
PublicRuntimeSetting.dpm_code_reading_modes
```

**Value Range**     
    Each list item can be any one of the [`DPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode) Enumeration items.
      
**Default Value**     
    [EnumDeformationResistingMode.DRM_SKIP, EnumDeformationResistingMode.DRM_SKIP, EnumDeformationResistingMode.DRM_SKIP, EnumDeformationResistingMode.DRM_SKIP, EnumDeformationResistingMode.DRM_SKIP, EnumDeformationResistingMode.DRM_SKIP, EnumDeformationResistingMode.DRM_SKIP, EnumDeformationResistingMode.DRM_SKIP]
    
**Remarks**       
    The list index represents the priority of the item. The smaller index is, the higher priority is.

### expected_barcodes_count
Sets the number of barcodes expected to be detected for each image.

```python
PublicRuntimeSettings.expected_barcodes_count
```

**Value Range**     
    [0, 0x7fffffff]
      
**Default Value**     
    0
    
**Remarks**       
    - 0: means Unknown and it will find at least one barcode.
    - 1: try to find one barcode. If one barcode is found, the library will stop the localization process and perform barcode decoding.
    - n: try to find n barcodes. If the library only finds m \(m\<n\) barcode, it will try different algorithms till n barcodes are found or all algorithms are tried.

### grayscale_transformation_modes
Sets the mode and priority for the grayscale image conversion.

```python
PublicRuntimeSetting.grayscale_transformation_modes
```

**Value Range**     
    Each list item can be any one of the [`GrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode) Enumeration items.
      
**Default Value**     
    [EnumGrayscaleTransformationMode.GTM_ORIGINAL, EnumGrayscaleTransformationMode.GTM_SKIP, EnumGrayscaleTransformationMode.GTM_SKIP, EnumGrayscaleTransformationMode.GTM_SKIP, EnumGrayscaleTransformationMode.GTM_SKIP, EnumGrayscaleTransformationMode.GTM_SKIP, EnumGrayscaleTransformationMode.GTM_SKIP, EnumGrayscaleTransformationMode.GTM_SKIP]
    
**Remarks**       
    The list index represents the priority of the item. The smaller index is, the higher priority is.

### intermediate_result_saving_mode
Sets the mode for saving intermediate result.

```python
PublicRuntimeSetting.intermediate_result_saving_mode
```

**Value Range**     
    One of the [`IntermediateResultSavingMode`]({{ site.enumerations }}result-enums.html#intermediateresultsavingmode) Enumeration items.
      
**Default Value**     
    EnumIntermediateResultSavingMode.IRSM_MEMORY

### intermediate_result_types
Sets which types of intermediate result to be kept for further reference. Intermediate result types can be combined.

```python
PublicRuntimeSettings.intermediate_result_types
```

**Value Range**     
    A combined value of IntermediateResultType Enumeration items
      
**Default Value**     
    0
    
### localization_modes
Sets the mode and priority for localization algorithms.

```python
PublicRuntimeSetting.localization_modes
```

**Value Range**     
    Each list item can be any one of the [`LocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) Enumeration items.
      
**Default Value**     
    [EnumLocalizationMode.LM_CONNECTED_BLOCKS, EnumLocalizationMode.LM_SCAN_DIRECTLY, EnumLocalizationMode.LM_STATISTICS, EnumLocalizationMode.LM_LINES, EnumLocalizationMode.LM_SKIP, EnumLocalizationMode.LM_SKIP, EnumLocalizationMode.LM_SKIP, EnumLocalizationMode.LM_SKIP]
    
**Remarks**       
    The list index represents the priority of the item. The smaller index is, the higher priority is.


### max_algorithm_thread_count
Sets the number of threads the image processing algorithm will use to decode barcodes.

```python
PublicRuntimeSetting.max_algorithm_thread_count
```

**Value Range**     
    [1, 4]
      
**Default Value**     
    4
    
**Remarks**       
    To keep a balance between speed and quality, the library concurrently runs four different threads for barcode decoding by default.

### min_barcode_text_length
Sets the range of barcode text length for barcodes search.

```python
PublicRuntimeSetting.min_barcode_text_length
```

**Value Range**     
    [0, 0x7fffffff]
      
**Default Value**     
    0
    
**Remarks**       
    0: means no limitation on the barcode text length.

### min_result_confidence
The minimum confidence of the result.

```python
PublicRuntimeSetting.min_result_confidence
```

**Value Range**     
    [0, 100]
      
**Default Value**     
    30
    
**Remarks**       
    0: means no limitation on the result confidence.
      
### pdf_raster_dpi
Sets the output image resolution.

```python
PublicRuntimeSetting.pdf_raster_dpi
```

**Value Range**     
    [100, 600]
      
**Default Value**     
    300
    
**Remarks**       
    When decoding barcodes from a PDF file using the DecodeFile method, the library will convert the PDF file to image(s) first, then perform barcode recognition.
    
### pdf_reading_mode
Sets the way to detect barcodes from a PDF file when using the DecodeFile method.

```python
PublicRuntimeSetting.pdf_reading_mode
```

**Value Range**     
    Any one of the [`PDFReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#pdfreadingmode) Enumeration items. 
      
**Default Value**     
    `PDFRM_AUTO`  

### region_bottom
The bottom-most coordinate or percentage of the region.

```python
PublicRuntimeSetting.region_bottom
```

**Value Range**     
    - if region_measured_by_percentage = 0, [0,0x7fffffff] 
    - if region_measured_by_percentage = 1, [0,100]
      
**Default Value**     
    0

### region_left
The left-most coordinate or percentage of the region.

```python
PublicRuntimeSetting.region_left
```

**Value Range**     
    - if region_measured_by_percentage = 0, [0,0x7fffffff] 
    - if region_measured_by_percentage = 1, [0,100]
      
**Default Value**     
    0

### region_measured_by_percentage
Sets whether or not to use percentage to measure the region size.

```python
PublicRuntimeSetting.region_measured_by_percentage
```

**Value Range**     
    [0,1]
      
**Default Value**     
    0

**Remarks**    
    When it's set to 1, the values of Top, Left, Right, Bottom indicate percentage (from 0 to 100); Otherwise, they indicate coordinates. 0: not by percentage; 1: by percentage.

### region_predetection_modes
Sets the region pre-detection mode for barcodes search.

```python
PublicRuntimeSetting.region_predetection_modes
```

**Value Range**     
    Each list item can be any one of the [`RegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode) Enumeration items.
      
**Default Value**     
    [EnumRegionPredetectionMode.RPM_GENERAL, EnumRegionPredetectionMode.RPM_SKIP, EnumRegionPredetectionMode.RPM_SKIP, EnumRegionPredetectionMode.RPM_SKIP, EnumRegionPredetectionMode.RPM_SKIP, EnumRegionPredetectionMode.RPM_SKIP, EnumRegionPredetectionMode.RPM_SKIP, EnumRegionPredetectionMode.RPM_SKIP]

    
**Remarks**       
    The list index represents the priority of the item. The smaller index is, the higher priority is.If the image is large and the barcode on the image is very small, it is recommended to enable region predetection to speed up the localization process and recognition accuracy.

### region_right
The right-most coordinate or percentage of the region.

```python
PublicRuntimeSetting.region_right
```

**Value Range**     
    - if region_measured_by_percentage = 0, [0,0x7fffffff] 
    - if region_measured_by_percentage = 1, [0,100]
      
**Default Value**     
    0

### region_top
The top-most coordinate or percentage of the region.

```python
PublicRuntimeSetting.region_top
```

**Value Range**     
    - if region_measured_by_percentage = 0, [0,0x7fffffff] 
    - if region_measured_by_percentage = 1, [0,100]
      
**Default Value**     
    0

### result_coordinate_type
Specifies the format for the coordinates returned.

```python
PublicRuntimeSetting.result_coordinate_type
```

**Value Range**     
    Any one of the [`ResultCoordinateType`]({{ site.enumerations }}result-enums.html#resultcoordinatetype) Enumeration items
      
**Default Value**     
    EnumResultCoordinateType.RCT_PIXEL

### return_barcode_zone_clarity
Sets whether or not to return the clarity of the barcode zone.

```python
PublicRuntimeSetting.return_barcode_zone_clarity
```

**Value Range**     
    [0, 1]
      
**Default Value**     
    0

### scale_down_threshold
Sets the threshold for the image shrinking.

```python
PublicRuntimeSetting.scale_down_threshold
```

**Value Range**     
    [512, 0x7fffffff]
      
**Default Value**     
    2300
    
**Remarks**       
    If the shorter edge size is larger than the given threshold value, the library will calculate the required height and width of the barcode image and shrink the image to that size before localization. Otherwise, the library will perform barcode localization on the original image.

### scale_up_modes
Sets the mode and priority to control the sampling methods of scale-up for linear barcode with small module sizes.

```python
PublicRuntimeSetting.scale_up_modes
```

**Value Range**     
    Each array item can be any one of the [`ScaleUpMode`]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode) Enumeration items.
      
**Default Value**     
    [EnumScaleUpMode.SUM_AUTO, EnumScaleUpMode.SUM_SKIP, EnumScaleUpMode.SUM_SKIP, EnumScaleUpMode.SUM_SKIP, EnumScaleUpMode.SUM_SKIP, EnumScaleUpMode.SUM_SKIP, EnumScaleUpMode.SUM_SKIP, EnumScaleUpMode.SUM_SKIP]
    
**Remarks**       
    The array index represents the priority of the item. The smaller the index, the higher the priority.   

### terminate_phase
Sets the phase to stop the barcode reading algorithm.

```python
PublicRuntimeSetting.terminate_phase
```

**Value Range**     
    A combined value of [`TerminatePhase`]({{ site.enumerations }}parameter-mode-enums.html#terminatephase) Enumeration items
      
**Default Value**     
    EnumTerminatePhase.TP_BARCODE_RECOGNIZED

### texture_detection_modes
Sets the mode and priority for texture detection.

```python
PublicRuntimeSetting.texture_detection_modes
```

**Value Range**     
    Each array item can be any one of the [`TextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode) Enumeration items.
      
**Default Value**     
    [EnumTextureDetectionMode.TDM_GENERAL_WIDTH_CONCENTRATION, EnumTextureDetectionMode.TDM_SKIP, EnumTextureDetectionMode.TDM_SKIP, EnumTextureDetectionMode.TDM_SKIP, EnumTextureDetectionMode.TDM_SKIP, EnumTextureDetectionMode.TDM_SKIP, EnumTextureDetectionMode.TDM_SKIP, EnumTextureDetectionMode.TDM_SKIP]
    
**Remarks**       
    The array index represents the priority of the item. The smaller the index, the higher the priority.  

    
### text_filter_modes
Sets the mode and priority for text filter.

```python
PublicRuntimeSetting.text_filter_modes
```

**Value Range**     
    Each array item can be any one of the [`TextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode) Enumeration items.
      
**Default Value**     
    [EnumTextFilterMode.TFM_GENERAL_CONTOUR, EnumTextFilterMode.TFM_SKIP, EnumTextFilterMode.TFM_SKIP, EnumTextFilterMode.TFM_SKIP, EnumTextFilterMode.TFM_SKIP, EnumTextFilterMode.TFM_SKIP, EnumTextFilterMode.TFM_SKIP, EnumTextFilterMode.TFM_SKIP]
    
**Remarks**       
    The array index represents the priority of the item. The smaller the index, the higher the priority. If the image contains a lot of text, you can enable text filter to speed up the localization process.

### text_result_order_modes
Sets the mode and priority for the order of the text results returned.

```python
PublicRuntimeSetting.text_result_order_modes
```

**Value Range**     
    Each array item can be any one of the [`TextResultOrderMode`]({{ site.enumerations }}result-enums.html#textresultordermode) Enumeration items.
      
**Default Value**     
    [EnumTextResultOrderMode.TROM_CONFIDENCE, EnumTextResultOrderMode.TROM_POSITION, EnumTextResultOrderMode.TROM_FORMAT, EnumTextResultOrderMode.TROM_SKIP, EnumTextResultOrderMode.TROM_SKIP, EnumTextResultOrderMode.TROM_SKIP, EnumTextResultOrderMode.TROM_SKIP, EnumTextResultOrderMode.TROM_SKIP]
    
**Remarks**       
    The array index represents the priority of the item. The smaller the index, the higher the priority.

### timeout
Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. It does not include the time taken to load/decode an image (TIFF, PNG, etc.) from disk into memory.

```python
PublicRuntimeSetting.timeout
```

**Value Range**     
    [0, 0x7fffffff]
      
**Default Value**     
    10000

**Remarks**       
    If you want to stop reading barcodes after a certain period of time, you can use this parameter to set a timeout.