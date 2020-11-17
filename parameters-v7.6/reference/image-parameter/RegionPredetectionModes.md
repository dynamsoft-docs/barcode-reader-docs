---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - RegionPredetectionModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - RegionPredetectionModes.
keywords: RegionPredetectionModes, ImageParameter, image process control parameters, parameter reference, parameter
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
 | [`ImageParameter.RegionPredetectionModes`](#regionpredetectionmodes) | Sets the region pre-detection mode for barcodes search. |
 | [`ImageParameter.ScaleDownThreshold`](image-process-control.md#scaledownthreshold) | Sets the threshold for the image shrinking. |
 | [`ImageParameter.ScaleUpModes`](ScaleUpModes.md#scaleupmodes) | Sets the mode and priority to control the sampling methods of scale-up for linear barcodes with small module sizes. | 
 | [`ImageParameter.TextAssistedCorrectionMode`](TextAssistedCorrectionMode.md#textassistedcorrectionmode) | Sets the mode of text assisted correction for barcode decoding. Not support yet. |
 | [`ImageParameter.TextFilterModes`](TextFilterModes.md#textfiltermodes) | 	Sets the mode and priority for text filter. |
 | [`ImageParameter.TextureDetectionModes`](TextureDetectionModes.md#texturedetectionmodes) | 	Sets the mode and priority for texture detection. |

---


## RegionPredetectionModes

**Remark**   
If the image is large and the barcode on the image is very small, it is recommended to enable region predetection to speed up the localization process and recognition accuracy.   

### Mode Properties
`RegionPredetectionModes` is a parameter for setting the mode for region pre-detection. It consisits of one or more `RegionPredetectionMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`RegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode) array* | "RPM_SKIP"<br>"RPM_AUTO"<br>"RPM_GENERAL"<br>"RPM_GENERAL_RGB_CONTRAST"<br>"RPM_GENERAL_GRAY_CONTRAST"<br>"RPM_GENERAL_HSV_CONTRAST" | ["RPM_GENERAL", "RPM_SKIP", "RPM_SKIP", "RPM_SKIP", "RPM_SKIP", "RPM_SKIP", "RPM_SKIP", "RPM_SKIP"] |

- **See also**:   
    [`RegionPredetectionMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode)
    
#### Mode Arguments
- [MinImageDimension](#minimagedimension)
- [Sensitivity](#sensitivity)
- [RelativeBarcodeRegions](#relativebarcoderegions)
- [ForeAndBackgroundColours](#foreandbackgroundcolours )
- [AspectRatioRange](#aspectratiorange )
- [HeightRange](#heightrange)
- [WidthRange](#widthrange)
 
##### MinImageDimension 
Sets the minimum image dimension (in pixels) to pre-detect barcode regions.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [16384, 0x7fffffff] | 262144 | "RPM_GENERAL_GRAY_CONTRAST"<br>"RPM_GENERAL_HSV_CONTRAST"<br>"RPM_GENERAL_RGB_CONTRAST" |         

- **Remark**     
  If the image dimension is larger than the given value, the library will enable the feature of pre-detecting barcode regions. Otherwise, it will skip this step when searching for barcodes.  


##### Sensitivity 
Sets the sensitivity used for region predetection algorithm.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [1, 9] | 1 | "RPM_GENERAL_GRAY_CONTRAST"<br>"RPM_GENERAL_HSV_CONTRAST"<br>"RPM_GENERAL_RGB_CONTRAST" |         

- **Remark**     
  A larger value means the library will take more effort to detect regions.  


##### RelativeBarcodeRegions 
 Sets the barcode regions relative to the predetected region.  

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing one or more regions. | "" | "RPM_GENERAL_HSV_CONTRAST" |         


- **Remark**     
  - Each region need to be defined as [`Left`, `Top`, `Right`, `Bottom`, `Index`]. If you want to define multiple regions, you can use a "";"" to separate them. If there is no region defined, the library will consider the predetected regions as barcode regions.    
  - `Left`, `Top`, `Right`, `Bottom` are four percentage values relative to top-left corner of the predetected region. 
  - `Index` means the index of a specific colour set in [`ForeAndBackgroundColours`](#foreandbackgroundcolours) which the current region is applied to. If the value of `index` is set to -1, the current region will be applied to all colour sets in [`ForeAndBackgroundColours`](#foreandbackgroundcolours).
  - Value range of `Left`, `Top`, `Right`, `Bottom`: [-10000,10000]
  - Value range of `Index`: [-1, 0x7fffffff]
  
  
##### ForeAndBackgroundColours 
Specifies a set (or multiple sets) of the foreground and background colours used for region predetection algorithm.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing one or more colour sets. | "" | "RPM_GENERAL_HSV_CONTRAST" |         


- **Remark**     
  - Each set of the foreground and background colours need to be defined as [`ForegroundColour`, `BackgroundColour`, `Tolerance`]. If you want to define multiple sets, you can use a "";"" to separate them. This argument is **mandatory**. If there is no manual setting, no region can be detected.
  - `ForegroundColour`and `BackgroundColour` are the Hue values in the HSV colour space for defining the foreground and background colours of the regions you want to predetect. The value -1 means black, gray, white.
  - `Tolerance` is the allowable deviation of the Hue value defined by `ForegroundColour`. 
  - Value range of `ForegroundColour`, `BackgroundColour`: [-1,360]
  - Value range of `Tolerance`: [0, 360]
  
 
 
##### AspectRatioRange 
Sets the aspect ratio range of the bounding rectangle of the predetected region.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing aspect ratio range. | "" | "RPM_GENERAL_HSV_CONTRAST" |         


- **Remark**     
  -  The aspect ratio range need to be defined as [`MinAspectRatio`, `MaxAspectRatio`]. There will be no limitation without manual setting.
  - Aspect ratio equals to *height/width\*100*. `MinAspectRatio` and `MaxAspectRatio` are used for limiting the aspect ratio range of the predetected region.
  - Value range of `MinAspectRatio`, `MaxAspectRatio`: [1,10000]
  
  
  
##### HeightRange 
Sets the height range of the bounding rectangle of the predetected region.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing height range. | "" | "RPM_GENERAL_HSV_CONTRAST" |         


- **Remark**     
  - The height range need to be defined as [`MinHeight`, `MaxHeight`]. There will be no limitation without manual setting.
  - Value range of `MinHeight`, `MaxHeight`: [1,0x7fffffff]


##### WidthRange 
Sets the width range of the bounding rectangle of the predetected region.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing width range. | "" | "RPM_GENERAL_HSV_CONTRAST" |         


- **Remark**     
  - The width range need to be defined as [`MinWidth`, `MaxWidth`]. There will be no limitation without manual setting.
  - Value range of `MinWidth`, `MaxWidth`: [1,0x7fffffff]


### Setting Methods

#### As JSON Parameter
`RegionPredetectionModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority the region pre-detection mode for barcodes search. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | RegionPredetectionModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "RegionPredetectionModes": [
        {
            "Mode": "RPM_GENERAL_GRAY_CONTRAST",
            "Sensitivity": 5,
            "MinImageDimension":262144
        }
    ]
}
```


&nbsp;



#### As `PublicRuntimeSettings` Member
`RegionPredetectionModes` is a [`RegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode) array defines in `furtherModes` which is a struct member of `PublicRuntimeSettings`. It is used for setting the modes and the priority for region pre-detection. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html)->[`furtherModes`]({{ site.structs }}PublicRuntimeSettings.html#furthermodes) | [`regionPredetectionModes`]({{ site.structs }}FurtherModes.html#regionpredetectionmodes) | [`RegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode)[8] |


**Remark**   
[`GetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).


**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`FurtherModes` Struct]({{ site.structs }}FurtherModes.html)
- [`RegionPredetectionMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode)
