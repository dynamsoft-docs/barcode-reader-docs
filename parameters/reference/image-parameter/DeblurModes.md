---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - DeblurModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - DeblurModes.
keywords: DeblurModes, ImageParameter, image process control parameters, parameter reference, parameter
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
 | [`ImageParameter.DPMCodeReadingModes`](#dpmcodereadingmodes) | Sets the mode and priority for DPM code reading. Not support yet. |
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



## DeblurModes  

### Mode Properties
`DeblurModes` is a parameter for setting the mode for deblurring. It consisits of one or more `DeblurMode` items. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *[`DeblurMode`]({{ site.enumerations }}parameter-mode-enums.html#deblurmode) array* | "DM_SKIP"<br>"DM_DIRECT_BINARIZATION"<br>"DM_THRESHOLD_BINARIZATION"<br>"DM_GRAY_EQUALIZATION"<br>"DM_SMOOTHING"<br>"DM_MORPHING"<br>"DM_DEEP_ANALYSIS"<br>"DM_SHARPENING" | ["DM_SKIP", "DM_SKIP", "DM_SKIP", "DM_SKIP", "DM_SKIP", "DM_SKIP", "DM_SKIP", "DM_SKIP"] |

- **See also**:   
    [`DeblurMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#deblurmode)
    
#### Mode Arguments
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

##### LibraryFileName 
Sets the file name of the library to load dynamically.

| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing file name. | "" | All `DeblurMode` items except DM_SKIP |         


- **Remarks**     
  - The library must be in the same place with Dynamsoft Barcode Reader Library.


##### LibraryParameters 
Sets the parameters passed to the library to load dynamically.

| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing parameters. | "" | All `DeblurMode` items except DM_SKIP |         


### Setting Methods

#### As JSON Parameter
`DeblurModes` as a JSON parameter is a JSON Object array. Each JSON Object has a key `Mode` for setting the mode. The array index decides the priority of the mode for deblurring. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | DeblurModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "DeblurModes": [
        {
            "Mode": "DM_DIRECT_BINARIZATION"
        }
    ]
}
```


&nbsp;



#### As `PublicRuntimeSettings` Member
`DeblurModes` is a [`DeblurMode`]({{ site.enumerations }}parameter-mode-enums.html#deblurmode) array defines in `PublicRuntimeSettings`. It is used for setting the modes and the priority for deblurring. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html) | [`deblurModes`]({{ site.structs }}PublicRuntimeSettings.html#deblurmodes) | [`DeblurMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode)[10] |

**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`DeblurMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#deblurmode)

