---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - GrayscaleTransformationModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - GrayscaleTransformationModes.
keywords: GrayscaleTransformationModes, ImageParameter, image process control parameters, parameter reference, parameter
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
 | [`ImageParameter.GrayscaleTransformationModes`](#grayscaletransformationmodes) | Sets the mode and priority for the grayscale image conversion. |
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


## GrayscaleTransformationModes

### Mode Properties
`GrayscaleTransformationModes` is a parameter for setting the mode for the grayscale image conversion. It consisits of one or more `GrayscaleTransformationMode` items. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`GrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode) array* | "GTM_SKIP"<br>"GTM_INVERTED"<br>"GTM_ORIGINAL" | ["GTM_ORIGINAL", "GTM_SKIP", "GTM_SKIP", "GTM_SKIP", "GTM_SKIP", "GTM_SKIP", "GTM_SKIP", "GTM_SKIP"] |

- **See also**:   
    [`GrayscaleTransformationMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode)
    
#### Mode Arguments
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

##### LibraryFileName 
Sets the file name of the library to load dynamically.

| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing file name. | "" | All `GrayscaleTransformationMode` items except GTM_SKIP |         


- **Remarks**     
  - The library must be in the same place with Dynamsoft Barcode Reader Library.


##### LibraryParameters 
Sets the parameters passed to the library to load dynamically.

| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing parameters. | "" | All `GrayscaleTransformationMode` items except GTM_SKIP |         


### Setting Methods

#### As JSON Parameter
`GrayscaleTransformationModes` as a JSON parameter is a JSON Object array. ach JSON Object has a key `Mode` for setting the mode, and the array index decides the priority of the mode for the grayscale image conversion. Default values will be used if there is no manual setting.


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | GrayscaleTransformationModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "GrayscaleTransformationModes": [
        {
            "Mode": "GTM_INVERTED"
        },
        {
            "Mode": "GTM_ORIGINAL"
        }
    ]
}
```

&nbsp;


#### As `PublicRuntimeSettings` Member
`GrayscaleTransformationModes` is a [`GrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode) array defines in `furtherModes` which is a struct member of `PublicRuntimeSettings`. It is used for setting the modes and the priority for the grayscale image conversion. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html)->[`furtherModes`]({{ site.structs }}PublicRuntimeSettings.html#furthermodes) | [`grayscaleTransformationModes`]({{ site.structs }}FurtherModes.html#grayscaletransformationmodes) | [`GrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode)[8] |

**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`FurtherModes` Struct]({{ site.structs }}FurtherModes.html)
- [`GrayscaleTransformationMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode)
