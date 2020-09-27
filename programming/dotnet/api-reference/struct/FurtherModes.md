---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - FurtherModes Struct
description: This page shows the FurtherModes Struct of Dynamsoft Barcode Reader for .NET SDK.
keywords: FurtherModes, struct, api reference, .Net
needAutoGenerateSidebar: false
---


# FurtherModes
Stores the FurtherModes. 

```C#
public struct FurtherModes
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`ColourClusteringModes`](#colourclusteringmodes) | [`ColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode)[ ] |
| [`ColourConversionModes`](#colourconversionmodes) | [`ColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode)[ ] |
| [`GrayscaleTransformationModes`](#grayscaletransformationmodes) | [`GrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode)[ ] |
| [`RegionPredetectionModes`](#regionpredetectionmodes) | [`RegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode)[ ] |
| [`ImagePreprocessingModes`](#imagepreprocessingmodes) | [`ImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode)[ ] |
| [`TextureDetectionModes`](#texturedetectionmodes) | [`TextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode)[ ] |
| [`TextFilterModes`](#textfiltermodes) | [`TextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode)[ ] |
| [`TextAssistedCorrectionMode`](#textassistedcorrectionmode) | [`TextAssistedCorrectionMode`]({{ site.parameters_reference }}image-parameter/TextAssistedCorrectionMode.html#textassistedcorrectionmode) |
| [`DPMCodeReadingModes`](#dpmcodereadingmodes) | [`DPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode)[ ] |
| [`DeformationResistingModes`](#deformationresistingmodes) | [`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode)[ ] |
| [`BarcodeComplementModes`](#barcodecomplementmodes) | [`BarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode)[ ] |
| [`BarcodeColourModes`](#barcodecolourmodes) | [`BarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode)[ ] |
| [`AccompanyingTextRecognitionModes`](#accompanyingtextrecognitionmodes) | [`AccompanyingTextRecognitionMode`]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode)[ ] |

### ColourClusteringModes
Sets the mode and priority for colour categorization. Not supported yet.  

```C#
EnumColourClusteringMode[] Dynamsoft.Barcode.FurtherModes.ColourClusteringModes
```

- **Value range**  
   Each array item can be any one of the [`ColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode) Enumeration items.  
     
- **Default value**  
   `[CCM_SKIP,CCM_SKIP,CCM_SKIP,CCM_SKIP,CCM_SKIP,CCM_SKIP,CCM_SKIP,CCM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is. 
   
- **See also**  
   [`ColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode)

### ColourConversionModes
Sets the mode and priority for converting a colour image to a grayscale image.

```C#
EnumColourConversionMode[] Dynamsoft.Barcode.FurtherModes.ColourConversionModes
```

- **Value range**  
   Each array item can be any one of the [`ColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode) Enumeration items. 
     
- **Default value**  
   `[CICM_GENERAL,CICM_SKIP,CICM_SKIP,CICM_SKIP,CICM_SKIP,CICM_SKIP,CICM_SKIP,CICM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`ColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode)
   
### GrayscaleTransformationModes
Sets the mode and priority for the grayscale image conversion.

```C#
EnumGrayscaleTransformationMode[] Dynamsoft.Barcode.FurtherModes.GrayscaleTransformationModes
```

- **Value range**  
   Each array item can be any one of the [`GrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode) Enumeration items. 
     
- **Default value**  
   `[GTM_ORIGINAL,GTM_SKIP,GTM_SKIP,GTM_SKIP,GTM_SKIP,GTM_SKIP,GTM_SKIP,GTM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`GrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode)

### RegionPredetectionModes
Sets the region pre-detection mode for barcodes search.

```C#
EnumRegionPredetectionMode[] Dynamsoft.Barcode.FurtherModes.RegionPredetectionModes
```

- **Value range**  
   Each array item can be any one of the [`RegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode) Enumeration items.  
     
- **Default value**  
   `[RPM_GENERAL,RPM_SKIP,RPM_SKIP,RPM_SKIP,RPM_SKIP,RPM_SKIP,RPM_SKIP,RPM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is. If the image is large and the barcode on the image is very small, it is recommended to enable region predetection to speed up the localization process and recognition accuracy.
   
- **See also**  
   [`RegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode)

### ImagePreprocessingModes
Sets the mode and priority for image preprocessing algorithms.

```C#
EnumImagePreprocessingMode[] Dynamsoft.Barcode.FurtherModes.ImagePreprocessingModes
```

- **Value range**  
   Each array item can be any one of the [`ImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode) Enumeration items.  
     
- **Default value**  
   `[IPM_GENERAL,IPM_SKIP,IPM_SKIP,IPM_SKIP,IPM_SKIP,IPM_SKIP,IPM_SKIP,IPM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.
   
- **See also**  
   [`ImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode)

### TextureDetectionModes
Sets the mode and priority for texture detection. 

```C#
EnumTextureDetectionMode[] Dynamsoft.Barcode.FurtherModes.TextureDetectionModes
```

- **Value range**  
   Each array item can be any one of the [`TextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode) Enumeration items.  
     
- **Default value**  
   `[TDM_GENERAL_WIDTH_CONCENTRATION,TDM_SKIP,TDM_SKIP,TDM_SKIP,TDM_SKIP,TDM_SKIP,TDM_SKIP,TDM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.
   
- **See also**  
   [`TextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode)
   
### TextFilterModes
Sets the mode and priority for text filter.

```C#
EnumTextFilterMode[] Dynamsoft.Barcode.FurtherModes.TextFilterModes
```

- **Value range**  
   Each array item can be any one of the [`TextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode) Enumeration items.  
     
- **Default value**  
   `[TFM_GENERAL_CONTOUR,TFM_SKIP,TFM_SKIP,TFM_SKIP,TFM_SKIP,TFM_SKIP,TFM_SKIP,TFM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is. If the image contains a lot of text, you can enable text filter to speed up the localization process.
   
- **See also**  
   [`TextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode)
   
### TextAssistedCorrectionMode
Sets the mode of text assisted correction for barcode decoding. ***Not supported yet***.

```C#
EnumTextAssistedCorrectionMode Dynamsoft.Barcode.FurtherModes.TextAssistedCorrectionMode
```

- **Value range**  
   Any one of the [`TextAssistedCorrectionMode`]({{ site.parameters_reference }}image-parameter/TextAssistedCorrectionMode.html#textassistedcorrectionmode) Enumeration items.  
     
- **Default value**  
   `TACM_VERIFYING`  
   
- **See also**  
   [`TextAssistedCorrectionMode`]({{ site.parameters_reference }}image-parameter/TextAssistedCorrectionMode.html#textassistedcorrectionmode)
   
### DPMCodeReadingModes
Sets the mode and priority for DPM code reading.

```C#
EnumDPMCodeReadingMode[] Dynamsoft.Barcode.FurtherModes.DPMCodeReadingModes
```

- **Value range**  
   Each array item can be any one of the [`DPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode) Enumeration items.  
     
- **Default value**  
   `[DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`DPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode)

### DeformationResistingModes
Sets the mode and priority for deformation resisting.

```C#
EnumDeformationResistingMode[] Dynamsoft.Barcode.FurtherModes.DeformationResistingModes
```

- **Value range**  
   Each array item can be any one of the [`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) Enumeration items.  
     
- **Default value**  
   `[DRM_SKIP,DRM_SKIP,DRM_SKIP,DRM_SKIP,DRM_SKIP,DRM_SKIP,DRM_SKIP,DRM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) 

### BarcodeComplementModes
Sets the mode and priority to complement the missing parts in the barcode.

```C#
EnumColourConversionMode[] Dynamsoft.Barcode.FurtherModes.ColourConversionModes
```

- **Value range**  
   Each array item can be any one of the [`BarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode) Enumeration items.  
     
- **Default value**  
   `[BCM_SKIP,BCM_SKIP,BCM_SKIP,BCM_SKIP,BCM_SKIP,BCM_SKIP,BCM_SKIP,BCM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`BarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode) 

### BarcodeColourModes
Sets the mode and priority for the barcode colour mode used to process the barcode zone.

```C#
EnumBarcodeColourMode[] Dynamsoft.Barcode.FurtherModes.BarcodeColourModes
```

- **Value range**  
   Each array item can be any one of the [`BarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode) Enumeration items.  
     
- **Default value**  
   `[BICM_DARK_ON_LIGHT,BICM_SKIP,BICM_SKIP,BICM_SKIP,BICM_SKIP,BICM_SKIP,BICM_SKIP,BICM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`BarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode)

### AccompanyingTextRecognitionModes
Sets the mode and priority to recognize accompanying text.

```C#
EnumAccompanyingTextRecognitionMode[] Dynamsoft.Barcode.FurtherModes.AccompanyingTextRecognitionModes
```

- **Value range**  
   Each array item can be any one of the [`AccompanyingTextRecognitionMode`]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode) Enumeration items.  
     
- **Default value**  
   `[ATRM_SKIP,ATRM_SKIP,ATRM_SKIP,ATRM_SKIP,ATRM_SKIP,ATRM_SKIP,ATRM_SKIP,ATRM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`AccompanyingTextRecognitionMode`]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode)

