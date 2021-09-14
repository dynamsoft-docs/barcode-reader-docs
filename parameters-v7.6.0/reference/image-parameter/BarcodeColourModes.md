---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - BarcodeColourModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - BarcodeColourModes.
keywords: BarcodeColourModes, ImageParameter, image process control parameters, parameter reference, parameter
needAutoGenerateSidebar: false
---


# ImageParameter Object - Image Process Control Parameters

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.AccompanyingTextRecognitionModes`](AccompanyingTextRecognitionModes.md#accompanyingtextrecognitionmodes) | Sets the mode and priority to recognize accompanying text. |
 | [`ImageParameter.BarcodeColourModes`](#barcodecolourmodes) | Sets the mode and priority for the barcode colour mode used to process the barcode zone. |
 | [`ImageParameter.BarcodeComplementModes`](BarcodeComplementModes.md#barcodecomplementmodes) | Sets the mode and priority to complement the missing parts in the barcode. |
 | [`ImageParameter.BinarizationModes`](BinarizationModes.md#binarizationmodes) | 	Sets the mode and priority for binarization. |
 | [`ImageParameter.ColourClusteringModes`](ColourClusteringModes.md#colourclusteringmodes) | Sets the mode and priority for colour categorization. Not supported yet. |
 | [`ImageParameter.ColourConversionModes`](ColourConversionModes.md#colourconversionmodes) | Sets the mode and priority for converting a colour image to a grayscale image. |
 | [`ImageParameter.DeblurLevel`](image-process-control.md#deblurlevel) | Sets the degree of blurriness of the barcode. |
 | [`ImageParameter.DeformationResistingModes`](DeformationResistingModes.md#deformationresistingmodes) | Sets the mode and priority for deformation resisting. |
 | [`ImageParameter.DPMCodeReadingModes`](DPMCodeReadingModes.md#dpmcodereadingmodes) | Sets the mode and priority for DPM code reading. Not support yet. |
 | [`ImageParameter.GrayscaleTransformationModes`](GrayscaleTransformationModes.md#grayscaletransformationmodes) | Sets the mode and priority for the grayscale image conversion. |
 | [`ImageParameter.ImagePreprocessingModes`](ImagePreprocessingModes.md#imagepreprocessingmodes) | Sets the mode and priority for image preprocessing algorithms. |
 | [`ImageParameter.LocalizationModes`](LocalizationModes.md#localizationmodes) | 	Sets the mode and priority for localization algorithms. |
 | [`ImageParameter.Pages`](image-process-control.md#pages) | Sets the specific pages or the range of pages of a file (.tiff or .pdf) for barcode searching. |
 | [`ImageParameter.PDFRasterDPI`](image-process-control.md#pdfrasterdpi) | Sets the output image resolution. |
 | [`ImageParameter.PDFReadingMode`](image-process-control.md#pdfreadingmode) | Sets the way to detect barcodes from a PDF file when using the DecodeFile method. |
 | [`ImageParameter.RegionPredetectionModes`](RegionPredetectionModes.md#regionpredetectionmodes) | Sets the region pre-detection mode for barcodes search. |
 | [`ImageParameter.ScaleDownThreshold`](image-process-control.md#scaledownthreshold) | Sets the threshold for the image shrinking. |
 | [`ImageParameter.ScaleUpModes`](ScaleUpModes.md#scaleupmodes) | Sets the mode and priority to control the sampling methods of scale-up for linear barcodes with small module sizes. | 
 | [`ImageParameter.TextAssistedCorrectionMode`](TextAssistedCorrectionMode.md#textassistedcorrectionmode) | Sets the mode of text assisted correction for barcode decoding. Not support yet. |
 | [`ImageParameter.TextFilterModes`](TextFilterModes.md#textfiltermodes) | 	Sets the mode and priority for text filter. |
 | [`ImageParameter.TextureDetectionModes`](TextureDetectionModes.md#texturedetectionmodes) | 	Sets the mode and priority for texture detection. |

---



## BarcodeColourModes  

### Mode Properties
`BarcodeColourModes` is a parameter for setting the mode Sets for the barcode colour mode used to process the barcode zone. It consisits of one or more `BarcodeColourMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`BarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode) array* | "BICM_SKIP"<br>"BICM_DARK_ON_LIGHT"<br>"BICM_LIGHT_ON_DARK"<br>"BICM_DARK_ON_DARK"<br>"BICM_LIGHT_ON_LIGHT"<br>"BICM_DARK_LIGHT_MIXED"<br>"BICM_DARK_ON_LIGHT_DARK_SURROUNDING" | ["BICM_DARK_ON_LIGHT", "BICM_SKIP", "BICM_SKIP", "BICM_SKIP", "BICM_SKIP", "BICM_SKIP", "BICM_SKIP", "BICM_SKIP"] |

- **See also**:   
    [`BarcodeColourMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode)
    
#### Mode Arguments
- [LightReflection](#lightreflection)
 
##### LightReflection 
Sets the minimum image dimension (in pixels) to filter the text.


| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 1] | 1 | "BICM_DARK_ON_LIGHT"<br>"BICM_LIGHT_ON_DARK"<br>"BICM_DARK_ON_DARK"<br>"BICM_LIGHT_ON_LIGHT"<br>"BICM_DARK_LIGHT_MIXED"<br>"BICM_DARK_ON_LIGHT_DARK_SURROUNDING" |         

- **Remark**     
  0: no light reflection.   
  1: has light reflection.


### Setting Methods

#### As JSON Parameter
`BarcodeColourModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority the mode Sets for the barcode colour mode used to process the barcode zone. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | BarcodeColourModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "BarcodeColourModes": [
        {
            "Mode": "BICM_DARK_ON_LIGHT",
            "LightReflection": 0
        }
    ]
}
```


&nbsp;



#### As `PublicRuntimeSettings` Member
`BarcodeColourModes` is a [`BarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode) array defines in `furtherModes` which is a struct member of `PublicRuntimeSettings`. It is used for setting the modes and the priority Sets for the barcode colour mode used to process the barcode zone. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html)->[`furtherModes`]({{ site.structs }}PublicRuntimeSettings.html#furthermodes) | [`barcodeColourModes`]({{ site.structs }}FurtherModes.html#barcodecolourmodes) | [`BarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode)[8] |

**Remark**   
[`GetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).


**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`FurtherModes` Struct]({{ site.structs }}FurtherModes.html)
- [`BarcodeColourMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode)

