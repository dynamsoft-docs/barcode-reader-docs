---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - TextureDetectionModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - TextureDetectionModes.
keywords: TextureDetectionModes, ImageParameter, image process control parameters, parameter reference, parameter 
needAutoGenerateSidebar: false
---


# ImageParameter Object - Image Process Control Parameters

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.AccompanyingTextRecognitionModes`](AccompanyingTextRecognitionModes.md#accompanyingtextrecognitionmodes) | Sets the mode and priority to recognize accompanying text. |
 | [`ImageParameter.BarcodeColourModes`](BarcodeColourModes.md#barcodecolourmodes) | Sets the mode and priority for the barcode colour mode used to process the barcode zone. |
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
 | [`ImageParameter.TextureDetectionModes`](#texturedetectionmodes) | 	Sets the mode and priority for texture detection. |

---


## TextureDetectionModes 

### Mode Properties
`TextureDetectionModes` is a parameter for setting the mode  for texture detection. It consisits of one or more `TextureDetectionMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`TextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode) array* | "TDM_SKIP"<br>"TDM_AUTO"<br>"TDM_GENERAL_WIDTH_CONCENTRATION" | ["TDM_GENERAL_WIDTH_CONCENTRATION", "TDM_SKIP", "TDM_SKIP", "TDM_SKIP", "TDM_SKIP", "TDM_SKIP", "TDM_SKIP", "TDM_SKIP"] |

- **See also**:   
    [`TextureDetectionMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode)
    
#### Mode Arguments
- [Sensitivity](#sensitivity)

##### Sensitivity 
Sets the sensitivity used for texture detection.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [1, 9] | 5 | "TDM_GENERAL_WIDTH_CONCENTRATION" |         

- **Remark**    
  A larger value means the library will take more effort to detect texture.
     
### Setting Methods

#### As JSON Parameter
`TextureDetectionModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority the mode  for texture detection. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | TextureDetectionModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "TextureDetectionModes": [
        {
            "Mode": "TDM_GENERAL_WIDTH_CONCENTRATION",
            "Sensitivity": 5
        }
    ]
}
```


&nbsp;



#### As `PublicRuntimeSettings` Member
`TextureDetectionModes` is a [`TextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode) array defines in `furtherModes` which is a struct member of `PublicRuntimeSettings`. It is used for setting the modes and the priority  for texture detection. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html)->[`furtherModes`]({{ site.structs }}PublicRuntimeSettings.html#furthermodes) | [`textureDetectionModes`]({{ site.structs }}FurtherModes.html#texturedetectionmodes) | [`TextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode)[8] |


**Remark**   
[`GetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).


**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`FurtherModes` Struct]({{ site.structs }}FurtherModes.html)
- [`TextureDetectionMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode)
