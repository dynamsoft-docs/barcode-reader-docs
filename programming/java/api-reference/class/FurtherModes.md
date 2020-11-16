---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - FurtherModes Class
description: This page shows the FurtherModes Class of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: FurtherModes, class, api reference, java
needAutoGenerateSidebar: false
---


# FurtherModes
Stores the FurtherModes.
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`colourClusteringModes`](#colourclusteringmodes) | *int\[\]* |
| [`colourConversionModes`](#colourconversionmodes) | *int\[\]* |
| [`grayscaleTransformationModes`](#grayscaletransformationmodes) | *int\[\]* |
| [`regionPredetectionModes`](#regionpredetectionmodes) | *int\[\]* |
| [`imagePreprocessingModes`](#imagepreprocessingmodes) | *int\[\]* |
| [`textureDetectionModes`](#texturedetectionmodes) | *int\[\]* |
| [`textFilterModes`](#textfiltermodes) | *int\[\]* |
| [`textAssistedCorrectionMode`](#textassistedcorrectionmode) | *int* |
| [`dpmCodeReadingModes`](#dpmcodereadingmodes) | *int\[\]* |
| [`deformationResistingModes`](#deformationresistingmodes) | *int\[\]* |
| [`barcodeComplementModes`](#barcodecomplementmodes) | *int\[\]* |
| [`barcodeColourModes`](#barcodecolourmodes) | *int\[\]* |
| [`accompanyingTextRecognitionModes`](#accompanyingtextrecognitionmodes) | *int\[\]* |

### colourClusteringModes
Sets the mode and priority for colour categorization. Not supported yet.  
```java
int[] com.dynamsoft.dbr.FurtherModes.colourClusteringModes
```
- **Value range**  
   Each array item can be any one of the [`EnumColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#enumcolourclusteringmode) Enumeration items.  
     
- **Default value**  
   `[CCM_SKIP,CCM_SKIP,CCM_SKIP,CCM_SKIP,CCM_SKIP,CCM_SKIP,CCM_SKIP,CCM_SKIP]`  
     
- **Remarks**  
   The array index represents the priority of the item. The smaller index is, the higher priority is. 
   
- **See also**  
   [`EnumColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#enumcolourclusteringmode)

### colourConversionModes
Sets the mode and priority for converting a colour image to a grayscale image.
```java
int[] com.dynamsoft.dbr.FurtherModes.colourConversionModes
```
- **Value range**  
   Each array item can be any one of the [`EnumColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#enumcolourconversionmode) Enumeration items. 
     
- **Default value**  
   `[CICM_GENERAL,CICM_SKIP,CICM_SKIP,CICM_SKIP,CICM_SKIP,CICM_SKIP,CICM_SKIP,CICM_SKIP]`  
     
- **Remarks**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`EnumColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#enumcolourconversionmode)
   
### grayscaleTransformationModes
Sets the mode and priority for the grayscale image conversion.
```java
int[] com.dynamsoft.dbr.FurtherModes.grayscaleTransformationModes
```
- **Value range**  
   Each array item can be any one of the [`EnumGrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#enumgrayscaletransformationmode) Enumeration items. 
     
- **Default value**  
   `[GTM_ORIGINAL,GTM_SKIP,GTM_SKIP,GTM_SKIP,GTM_SKIP,GTM_SKIP,GTM_SKIP,GTM_SKIP]`  
     
- **Remarks**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`EnumGrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#enumgrayscaletransformationmode)

### regionPredetectionModes
Sets the region pre-detection mode for barcodes search.
```java
int[] com.dynamsoft.dbr.FurtherModes.regionPredetectionModes
```
- **Value range**  
   Each array item can be any one of the [`EnumRegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#enumregionpredetectionmode) Enumeration items.  
     
- **Default value**  
   `[RPM_GENERAL,RPM_SKIP,RPM_SKIP,RPM_SKIP,RPM_SKIP,RPM_SKIP,RPM_SKIP,RPM_SKIP]`  
     
- **Remarks**  
   The array index represents the priority of the item. The smaller index is, the higher priority is. If the image is large and the barcode on the image is very small, it is recommended to enable region predetection to speed up the localization process and recognition accuracy.
   
- **See also**  
   [`EnumRegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#enumregionpredetectionmode)

### imagePreprocessingModes
Sets the mode and priority for image preprocessing algorithms.
```java
int[] com.dynamsoft.dbr.FurtherModes.imagePreprocessingModes
```
- **Value range**  
   Each array item can be any one of the [`EnumImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#enumimagepreprocessingmode) Enumeration items.  
     
- **Default value**  
   `[IPM_GENERAL,IPM_SKIP,IPM_SKIP,IPM_SKIP,IPM_SKIP,IPM_SKIP,IPM_SKIP,IPM_SKIP]`  
     
- **Remarks**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.
   
- **See also**  
   [`EnumImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#enumimagepreprocessingmode)

### textureDetectionModes
Sets the mode and priority for texture detection. 
```java
int[] com.dynamsoft.dbr.FurtherModes.textureDetectionModes
```
- **Value range**  
   Each array item can be any one of the [`EnumTextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#enumtexturedetectionmode) Enumeration items.  
     
- **Default value**  
   `[TDM_GENERAL_WIDTH_CONCENTRATION,TDM_SKIP,TDM_SKIP,TDM_SKIP,TDM_SKIP,TDM_SKIP,TDM_SKIP,TDM_SKIP]`  
     
- **Remarks**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.
   
- **See also**  
   [`EnumTextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#enumtexturedetectionmode)
   
### textFilterModes
Sets the mode and priority for text filter.
```java
int[] com.dynamsoft.dbr.FurtherModes.textFilterModes
```
- **Value range**  
   Each array item can be any one of the [`EnumTextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#enumtextfiltermode) Enumeration items.  
     
- **Default value**  
   `[TFM_GENERAL_CONTOUR,TFM_SKIP,TFM_SKIP,TFM_SKIP,TFM_SKIP,TFM_SKIP,TFM_SKIP,TFM_SKIP]`  
     
- **Remarks**  
   The array index represents the priority of the item. The smaller index is, the higher priority is. If the image contains a lot of text, you can enable text filter to speed up the localization process.
   
- **See also**  
   [`EnumTextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#enumtextfiltermode)
   
### textAssistedCorrectionMode
Sets the mode of text assisted correction for barcode decoding. ***Not supported yet***.
```java
int com.dynamsoft.dbr.FurtherModes.textAssistedCorrectionMode
```
- **Value range**  
   Any one of the [`EnumTextAssistedCorrectionMode`]({{ site.enumerations }}parameter-mode-enums.html#enumtextassistedcorrectionmode) Enumeration items.  
     
- **Default value**  
   `TACM_VERIFYING`  
   
- **See also**  
   [`EnumTextAssistedCorrectionMode`]({{ site.enumerations }}parameter-mode-enums.html#enumtextassistedcorrectionmode)
   
### dpmCodeReadingModes
Sets the mode and priority for DPM code reading.
```java
int[] com.dynamsoft.dbr.FurtherModes.dpmCodeReadingModes
```
- **Value range**  
   Each array item can be any one of the [`EnumDPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#enumdpmcodereadingmode) Enumeration items.  
     
- **Default value**  
   `[DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP]`  
     
- **Remarks**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`EnumDPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#enumdpmcodereadingmode)

### deformationResistingModes
Sets the mode and priority for deformation resisting.
```java
int[] com.dynamsoft.dbr.FurtherModes.deformationResistingModes
```
- **Value range**  
   Each array item can be any one of the [`EnumDeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#enumdeformationresistingmode) Enumeration items.  
     
- **Default value**  
   `[DRM_SKIP,DRM_SKIP,DRM_SKIP,DRM_SKIP,DRM_SKIP,DRM_SKIP,DRM_SKIP,DRM_SKIP]`  
     
- **Remarks**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`EnumDeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#enumdeformationresistingmode) 

### barcodeComplementModes
Sets the mode and priority to complement the missing parts in the barcode.
```java
int[] com.dynamsoft.dbr.FurtherModes.barcodeComplementModes
```
- **Value range**  
   Each array item can be any one of the [`EnumBarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#enumbarcodecomplementmode) Enumeration items.  
     
- **Default value**  
   `[BCM_SKIP,BCM_SKIP,BCM_SKIP,BCM_SKIP,BCM_SKIP,BCM_SKIP,BCM_SKIP,BCM_SKIP]`  
     
- **Remarks**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`EnumBarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#enumbarcodecomplementmode) 

### barcodeColourModes
Sets the mode and priority for the barcode colour mode used to process the barcode zone.
```java
int[] com.dynamsoft.dbr.FurtherModes.barcodeColourModes
```
- **Value range**  
   Each array item can be any one of the [`EnumBarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html#enumbarcodecolourmode) Enumeration items.  
     
- **Default value**  
   `[BICM_DARK_ON_LIGHT,BICM_SKIP,BICM_SKIP,BICM_SKIP,BICM_SKIP,BICM_SKIP,BICM_SKIP,BICM_SKIP]`  
     
- **Remarks**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`EnumBarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html#enumbarcodecolourmode)

### accompanyingTextRecognitionModes
Sets the mode and priority to recognize accompanying text.
```java
int[] com.dynamsoft.dbr.FurtherModes.accompanyingTextRecognitionModes
```
- **Value range**  
   Each array item can be any one of the [`EnumAccompanyingTextRecognitionMode`]({{ site.enumerations }}parameter-mode-enums.html#enumaccompanyingtextrecognitionmode) Enumeration items.  
     
- **Default value**  
   `[ATRM_SKIP,ATRM_SKIP,ATRM_SKIP,ATRM_SKIP,ATRM_SKIP,ATRM_SKIP,ATRM_SKIP,ATRM_SKIP]`  
     
- **Remarks**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`EnumAccompanyingTextRecognitionMode`]({{ site.enumerations }}parameter-mode-enums.html#enumaccompanyingtextrecognitionmode)
