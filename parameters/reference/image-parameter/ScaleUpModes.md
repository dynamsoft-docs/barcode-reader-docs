---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - ScaleUpModes 
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - ScaleUpModes.
keywords: ScaleUpModes, ImageParameter, image process control parameters, parameter reference, parameter
needAutoGenerateSidebar: false
---


# ImageParameter Object - Image Process Control Parameters

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.BarcodeColourModes`](BarcodeColourModes.md#barcodecolourmodes) | Sets the mode and priority for the barcode colour mode used to process the barcode zone. |
 | [`ImageParameter.BarcodeComplementModes`](BarcodeComplementModes.md#barcodecomplementmodes) | Sets the mode and priority to complement the missing parts in the barcode. |
 | [`ImageParameter.BinarizationModes`](BinarizationModes.md#binarizationmodes) | 	Sets the mode and priority for binarization. |
 | [`ImageParameter.ColourClusteringModes`](ColourClusteringModes.md#colourclusteringmodes) | Sets the mode and priority for colour categorization. Not supported yet. |
 | [`ImageParameter.ColourConversionModes`](ColourConversionModes.md#colourconversionmodes) | Sets the mode and priority for converting a colour image to a grayscale image. |
 | [`ImageParameter.DeblurLevel`](image-process-control.md#deblurlevel) | Sets the degree of blurriness of the barcode. |
 | [`ImageParameter.DeblurModes`](DeblurModes.md#deblurmodes) | Sets the mode and priority for deblurring. |
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
 | [`ImageParameter.ScaleUpModes`](#scaleupmodes) | Sets the mode and priority to control the sampling methods of scale-up for linear barcodes with small module sizes. | 
 | [`ImageParameter.TextAssistedCorrectionMode`](TextAssistedCorrectionMode.md#textassistedcorrectionmode) | Sets the mode of text assisted correction for barcode decoding. Not support yet. |
 | [`ImageParameter.TextFilterModes`](TextFilterModes.md#textfiltermodes) | 	Sets the mode and priority for text filter. |
 | [`ImageParameter.TextureDetectionModes`](TextureDetectionModes.md#texturedetectionmodes) | 	Sets the mode and priority for texture detection. |

---



## ScaleUpModes  

### Mode Properties
`ScaleUpModes` is a parameter for setting the mode to control the sampling methods of scale-up for linear barcodes with small module sizes. It consisits of one or more `ScaleUpMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`ScaleUpMode`]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode) array* | "SUM_SKIP"<br>"SUM_AUTO"<br>"SUM_LINEAR_INTERPOLATION"<br>"SUM_NEAREST_NEIGHBOUR_INTERPOLATION" | ["SUM_AUTO", "SUM_SKIP", "SUM_SKIP", "SUM_SKIP", "SUM_SKIP", "SUM_SKIP", "SUM_SKIP", "SUM_SKIP"] |

- **See also**:   
    [`ScaleUpMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode)
    
#### Mode Arguments
- [AcuteAngleWithXThreshold](#acuteanglewithxthreshold)
- [ModuleSizeThreshold](#modulesizethreshold)
- [TargetModuleSize](#targetmodulesize)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

If the module size of the barcode is smaller than the [ModuleSizeThreshold](#modulesizethreshold) and the acute angle with X of the barcode is larger than the [AcuteAngleWithXThreshold](#acuteanglewithxthreshold), the barcode will be enlarged to N times (N=1,2,3…) till N * modulesize >= [TargetModuleSize](#targetmodulesize).
 
##### AcuteAngleWithXThreshold 
Sets the acute angle threshold for scale-up.


| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-1, 90] | -1 | "SUM_LINEAR_INTERPOLATION"<br>"SUM_NEAREST_NEIGHBOUR_INTERPOLATION" |         

- **Remarks**     
  -1 : means automatically set by the library.


##### ModuleSizeThreshold 
Sets the module size threshold for scale-up.


| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 0x7fffffff] | 0 | "SUM_LINEAR_INTERPOLATION"<br>"SUM_NEAREST_NEIGHBOUR_INTERPOLATION" |         

- **Remarks**     
  0 : means automatically set by the library.


##### TargetModuleSize 
Sets the target module size for scale-up.


| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 0x7fffffff] | 0 | "SUM_LINEAR_INTERPOLATION"<br>"SUM_NEAREST_NEIGHBOUR_INTERPOLATION" |         

- **Remarks**     
  0 : means automatically set by the library.

##### LibraryFileName 
Sets the file name of the library to load dynamically.

| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing file name. | "" | All `ScaleUpMode` items except SUM_SKIP and SUM_AUTO |         


- **Remarks**     
  - The library must be in the same place with Dynamsoft Barcode Reader Library.


##### LibraryParameters 
Sets the parameters passed to the library to load dynamically.

| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing parameters. | "" | All `ScaleUpMode` items except SUM_SKIP and SUM_AUTO |         



### Setting Methods

#### As JSON Parameter
`ScaleUpModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority the mode to control the sampling methods of scale-up for linear barcodes with small module sizes. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | ScaleUpModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "ScaleUpModes": [
        {
            "Mode": "SUM_AUTO",
            "AcuteAngleWithXThreshold": 20, 
            "ModuleSizeThreshold": 1,
            "TargetModuleSize": 5
        }
]
}
```


&nbsp;



#### As `PublicRuntimeSettings` Member
`ScaleUpModes` as a member of `PublicRuntimeSettings` struct is a [`ScaleUpMode`]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode) array for setting the modes and the priority to control the sampling methods of scale-up for linear barcodes with small module sizes. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html) | [`scaleUpModes`]({{ site.structs }}PublicRuntimeSettings.html#scaleupmodes) | [`ScaleUpMode`]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode)[8] |


**Remarks**   
[`GetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).


**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`ScaleUpMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode)

