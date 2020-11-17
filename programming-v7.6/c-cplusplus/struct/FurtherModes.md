---
layout: default-layout
title: Dynamsoft Barcode Reader C & C++ Struct - FurtherModes
description: This page shows the FurtherModes struct of Dynamsoft Barcode Reader for C & C++ Language.
keywords: FurtherModes, struct, c, c++
needAutoGenerateSidebar: false
---


# FurtherModes
Stores the FurtherModes. 

## Typedefs

```cpp
typedef struct tagFurtherModes  FurtherModes
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`colourClusteringModes`](#colourclusteringmodes) | [`ColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode)\[8\] |
| [`colourConversionModes`](#colourconversionmodes) | [`ColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode)\[8\] |
| [`grayscaleTransformationModes`](#grayscaletransformationmodes) | [`GrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode)\[8\] |
| [`regionPredetectionModes`](#regionpredetectionmodes) | [`RegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode)\[8\] |
| [`imagePreprocessingModes`](#imagepreprocessingmodes) | [`ImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode)\[8\] |
| [`textureDetectionModes`](#texturedetectionmodes) | [`TextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode)\[8\] |
| [`textFilterModes`](#textfiltermodes) | [`TextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode)\[8\] |
| [`textAssistedCorrectionMode`](#textassistedcorrectionmode) | [`TextAssistedCorrectionMode`]({{ site.enumerations }}parameter-mode-enums.html#textassistedcorrectionmode) |
| [`dpmCodeReadingModes`](#dpmcodereadingmodes) | [`DPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode)\[8\] |
| [`deformationResistingModes`](#deformationresistingmodes) | [`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode)\[8\] |
| [`barcodeComplementModes`](#barcodecomplementmodes) | [`BarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode)\[8\] |
| [`barcodeColourModes`](#barcodecolourmodes) | [`BarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode)\[8\] |
| [`accompanyingTextRecognitionModes`](#accompanyingtextrecognitionmodes) | [`AccompanyingTextRecognitionMode`]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode)\[8\] |
| [`reserved`](#reserved) | *char\[32\]* |

### colourClusteringModes
Sets the mode and priority for colour categorization. Not supported yet.  
```cpp
ColourClusteringMode tagFurtherModes::colourClusteringModes[8]
```
- **Value range**  
   Each array item can be any one of the [`ColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode) Enumeration items.  
     
- **Default value**  
   `[CCM_SKIP,CCM_SKIP,CCM_SKIP,CCM_SKIP,CCM_SKIP,CCM_SKIP,CCM_SKIP,CCM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is. 
   
- **See also**  
   [`ColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode)

### colourConversionModes
Sets the mode and priority for converting a colour image to a grayscale image.
```cpp
ColourConversionMode tagFurtherModes::colourConversionModes[8]
```
- **Value range**  
   Each array item can be any one of the [`ColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode) Enumeration items. 
     
- **Default value**  
   `[CICM_GENERAL,CICM_SKIP,CICM_SKIP,CICM_SKIP,CICM_SKIP,CICM_SKIP,CICM_SKIP,CICM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`ColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode)
   
### grayscaleTransformationModes
Sets the mode and priority for the grayscale image conversion.
```cpp
GrayscaleTransformationMode tagFurtherModes::grayscaleTransformationModes[8]
```
- **Value range**  
   Each array item can be any one of the [`GrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode) Enumeration items. 
     
- **Default value**  
   `[GTM_ORIGINAL,GTM_SKIP,GTM_SKIP,GTM_SKIP,GTM_SKIP,GTM_SKIP,GTM_SKIP,GTM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`GrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode)

### regionPredetectionModes
Sets the region pre-detection mode for barcodes search.
```cpp
RegionPredetectionMode tagFurtherModes::regionPredetectionModes[8]
```
- **Value range**  
   Each array item can be any one of the [`RegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode) Enumeration items.  
     
- **Default value**  
   `[RPM_GENERAL,RPM_SKIP,RPM_SKIP,RPM_SKIP,RPM_SKIP,RPM_SKIP,RPM_SKIP,RPM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is. If the image is large and the barcode on the image is very small, it is recommended to enable region predetection to speed up the localization process and recognition accuracy.
   
- **See also**  
   [`RegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode)

### imagePreprocessingModes
Sets the mode and priority for image preprocessing algorithms.
```cpp
ImagePreprocessingMode tagFurtherModes::imagePreprocessingModes[8]
```
- **Value range**  
   Each array item can be any one of the [`ImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode) Enumeration items.  
     
- **Default value**  
   `[IPM_GENERAL,IPM_SKIP,IPM_SKIP,IPM_SKIP,IPM_SKIP,IPM_SKIP,IPM_SKIP,IPM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.
   
- **See also**  
   [`ImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode)

### textureDetectionModes
Sets the mode and priority for texture detection. 
```cpp
TextureDetectionMode tagFurtherModes::textureDetectionModes[8]
```
- **Value range**  
   Each array item can be any one of the [`TextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode) Enumeration items.  
     
- **Default value**  
   `[TDM_GENERAL_WIDTH_CONCENTRATION,TDM_SKIP,TDM_SKIP,TDM_SKIP,TDM_SKIP,TDM_SKIP,TDM_SKIP,TDM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.
   
- **See also**  
   [`TextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode)
   
### textFilterModes
Sets the mode and priority for text filter.
```cpp
TextFilterMode tagFurtherModes::textFilterModes[8]
```
- **Value range**  
   Each array item can be any one of the [`TextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode) Enumeration items.  
     
- **Default value**  
   `[TFM_GENERAL_CONTOUR,TFM_SKIP,TFM_SKIP,TFM_SKIP,TFM_SKIP,TFM_SKIP,TFM_SKIP,TFM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is. If the image contains a lot of text, you can enable text filter to speed up the localization process.
   
- **See also**  
   [`TextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode)
   
### textAssistedCorrectionMode
Sets the mode of text assisted correction for barcode decoding. ***Not supported yet***.
```cpp
TextAssistedCorrectionMode tagFurtherModes::textAssistedCorrectionMode
```
- **Value range**  
   Any one of the [`TextAssistedCorrectionMode`]({{ site.enumerations }}parameter-mode-enums.html#textassistedcorrectionmode) Enumeration items.  
     
- **Default value**  
   `TACM_VERIFYING`  
   
- **See also**  
   [`TextAssistedCorrectionMode`]({{ site.enumerations }}parameter-mode-enums.html#textassistedcorrectionmode)
   
### dpmCodeReadingModes
Sets the mode and priority for DPM code reading.
```cpp
DPMCodeReadingMode tagFurtherModes::dpmCodeReadingModes[8]
```
- **Value range**  
   Each array item can be any one of the [`DPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode) Enumeration items.  
     
- **Default value**  
   `[DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`DPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode)

### deformationResistingModes
Sets the mode and priority for deformation resisting.
```cpp
DeformationResistingMode tagFurtherModes::deformationResistingModes[8]
```
- **Value range**  
   Each array item can be any one of the [`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) Enumeration items.  
     
- **Default value**  
   `[DRM_SKIP,DRM_SKIP,DRM_SKIP,DRM_SKIP,DRM_SKIP,DRM_SKIP,DRM_SKIP,DRM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) 

### barcodeComplementModes
Sets the mode and priority to complement the missing parts in the barcode.
```cpp
BarcodeComplementMode tagFurtherModes::barcodeComplementModes[8]
```
- **Value range**  
   Each array item can be any one of the [`BarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode) Enumeration items.  
     
- **Default value**  
   `[BCM_SKIP,BCM_SKIP,BCM_SKIP,BCM_SKIP,BCM_SKIP,BCM_SKIP,BCM_SKIP,BCM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`BarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode) 

### barcodeColourModes
Sets the mode and priority for the barcode colour mode used to process the barcode zone.
```cpp
BarcodeColourMode tagFurtherModes::barcodeColourModes[8]
```
- **Value range**  
   Each array item can be any one of the [`BarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode) Enumeration items.  
     
- **Default value**  
   `[BICM_DARK_ON_LIGHT,BICM_SKIP,BICM_SKIP,BICM_SKIP,BICM_SKIP,BICM_SKIP,BICM_SKIP,BICM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`BarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode)

### accompanyingTextRecognitionModes
Sets the mode and priority to recognize accompanying text.
```cpp
AccompanyingTextRecognitionMode tagFurtherModes::accompanyingTextRecognitionModes[8]
```
- **Value range**  
   Each array item can be any one of the [`AccompanyingTextRecognitionMode`]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode) Enumeration items.  
     
- **Default value**  
   `[ATRM_SKIP,ATRM_SKIP,ATRM_SKIP,ATRM_SKIP,ATRM_SKIP,ATRM_SKIP,ATRM_SKIP,ATRM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`AccompanyingTextRecognitionMode`]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode)

### reserved
Reserved memory for struct. The length of this array indicates the size of the memory reserved for this struct.
```cpp
char tagFurtherModes::reserved[32]
```
