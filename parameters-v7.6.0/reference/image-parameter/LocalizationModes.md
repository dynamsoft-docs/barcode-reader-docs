---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - LocalizationModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - LocalizationModes.
keywords: LocalizationModes, ImageParameter, image process control parameters, parameter reference, parameter
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
 | [`ImageParameter.LocalizationModes`](#localizationmodes) | 	Sets the mode and priority for localization algorithms. |
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


## LocalizationModes   

### Mode Properties
`LocalizationModes` is a parameter for setting the mode for localization algorithms. It consisits of one or more `LocalizationMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`LocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) array* | "LM_SKIP"<br>"LM_AUTO"<br>"LM_CONNECTED_BLOCKS"<br>"LM_STATISTICS"<br>"LM_LINES"<br>"LM_SCAN_DIRECTLY"<br>"LM_STATISTICS_MARKS"<br>"LM_STATISTICS_POSTAL_CODE" | ["LM_CONNECTED_BLOCKS", "LM_SCAN_DIRECTLY", "LM_STATISTICS", "LM_LINES", "LM_SKIP", "LM_SKIP", "LM_SKIP", "LM_SKIP"] |

- **See also**:   
    [`LocalizationMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#localizationmode)
    
#### Mode Arguments
- [ScanStride](#scanstride)
- [ScanDirection](#scandirection)
 
##### ScanStride 
Sets the stride in pixels between scans when searching for barcodes.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 0x7fffffff] | 0 | "LM_SCAN_DIRECTLY" |         

- **Remark**     
  0: automatically set by the library.   
  When the set value is greater than half the width or height of the current image, the actual processing is 0.  


##### ScanDirection 
Sets the scan direction when searching barcode.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 2] | 0 | "LM_SCAN_DIRECTLY" |             

- **Remark**     
  0: Both vertical and horizontal direction.   
  1: Vertical direction.   
  2: Horizontal direction. 
  

### Setting Methods

#### As JSON Parameter
`LocalizationModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority for localization algorithms. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | LocalizationModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "LocalizationModes": [
        {
            "Mode": "LM_SCAN_DIRECTLY",
            "ScanStride": 5
        },
        {
            "Mode": "LM_STATISTICS"
        }
    ]
}
```

&nbsp;



#### As `PublicRuntimeSettings` Member
`LocalizationModes` as a member of `PublicRuntimeSettings` struct is a [`LocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) array for setting the modes and the priority for localization algorithms. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html) | [`localizationModes`]({{ site.structs }}PublicRuntimeSettings.html#localizationmodes) | [`LocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode)[8] |


**Remark**   
[`GetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).


**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`LocalizationMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#localizationmode)
