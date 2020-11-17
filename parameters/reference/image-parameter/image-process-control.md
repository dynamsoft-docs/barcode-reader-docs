---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - Image Process Control Parameters
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - Image Process Control Parameters.
keywords: DeblurLevel, Pages, PDFRasterDPI, PDFReadingMode, ScaleDownThreshold, ImageParameter, image process control parameters, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: false
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
 | [`ImageParameter.Pages`](#pages) | Sets the specific pages or the range of pages of a file (.tiff or .pdf) for barcode searching. |
 | [`ImageParameter.PDFRasterDPI`](#pdfrasterdpi) | Sets the output image resolution. |
 | [`ImageParameter.PDFReadingMode`](#pdfreadingmode) | Sets the way to detect barcodes from a PDF file when using the DecodeFile method. |
 | [`ImageParameter.RegionPredetectionModes`](RegionPredetectionModes.md#regionpredetectionmodes) | Sets the region pre-detection mode for barcodes search. |
 | [`ImageParameter.ScaleDownThreshold`](#scaledownthreshold) | Sets the threshold for the image shrinking. |
 | [`ImageParameter.ScaleUpModes`](ScaleUpModes.md#scaleupmodes) | Sets the mode and priority to control the sampling methods of scale-up for linear barcodes with small module sizes. | 
 | [`ImageParameter.TextAssistedCorrectionMode`](TextAssistedCorrectionMode.md#textassistedcorrectionmode) | Sets the mode of text assisted correction for barcode decoding. Not support yet. |
 | [`ImageParameter.TextFilterModes`](TextFilterModes.md#textfiltermodes) | 	Sets the mode and priority for text filter. |
 | [`ImageParameter.TextureDetectionModes`](TextureDetectionModes.md#texturedetectionmodes) | 	Sets the mode and priority for texture detection. |

---


## DeblurLevel
Sets the degree of blurriness of the barcode.

**Remarks**   
If you have a blurry image, you can set this property to a larger value. The higher value set, the more effort the library will spend to decode images, but it may also slow down the recognition process.


### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| ImageParameter | DeblurLevel | *int* | [0, 9] | 9 |


**Json Parameter Example**   
```
{
    "DeblurLevel":9
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html) | [`deblurLevel`]({{ site.structs }}PublicRuntimeSettings.html#deblurlevel) | *int* | [0, 9] | 9 |

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)



&nbsp;




## Pages
Sets the specific pages or the range of pages of a file (.tiff or .pdf) for barcode searching.

**Remarks**   
1. The value is 0-based;
2. "" represents all pages.


### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| ImageParameter | Pages | *string* | A string of one or more of the following data,separated by commas:<br>1. One int value which represents a specified page index;<br>2. One Expression, start index and stop index connected with ""-"", which represents a specified page index range; | "" |


**Json Parameter Example**   
```
{
    "Pages": "0,3,5,7-10"
}
```



&nbsp;




## PDFRasterDPI
Sets the output image resolution.

**Remarks**   
When you are trying to decode a PDF file using `DecodeFile` method, the library will convert the pdf file to image(s) first, then perform barcode recognition.    
To ensure your barcodes in the PDF files are readable, please set the resolution to at least 300 dpi.    



### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| ImageParameter | PDFRasterDPI | *int * | [100, 600] | 300 |


**Json Parameter Example**   
```
{
    "PDFRasterDPI":300
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html) | [`pdfRasterDPI`]({{ site.structs }}PublicRuntimeSettings.html#pdfrasterdpi) | *int* | [100, 600] | 300 |

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)



&nbsp;




## PDFReadingMode
Sets how to detect barcodes from a PDF file when using DecodeFile method.

##### LibraryFileName 
Sets the file name of the library to load dynamically.

| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing file name. | "" | "RPM_GENERAL"<br>"RPM_GENERAL_GRAY_CONTRAST"<br>"RPM_GENERAL_HSV_CONTRAST"<br>"RPM_GENERAL_RGB_CONTRAST" |         


- **Remarks**     
  - The library must be in the same place with Dynamsoft Barcode Reader Library.


##### LibraryParameters 
Sets the parameters passed to the library to load dynamically.

| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing parameters. | "" | "RPM_GENERAL"<br>"RPM_GENERAL_GRAY_CONTRAST"<br>"RPM_GENERAL_HSV_CONTRAST"<br>"RPM_GENERAL_RGB_CONTRAST" |         


### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| ImageParameter | PDFReadingMode | *string* | Any one of the [`PDFReadingMode` Enumeration]({{ site.enumerations }}result-enums.html#pdfreadingmode) items. | "PDFRM_AUTO" |

**Json Parameter Example**   
```
{
 "PDFReadingMode":"PDFRM_VECTOR",
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html) | [`pdfReadingMode`]({{ site.structs }}PublicRuntimeSettings.html#pdfreadingmode) | *int* | Any one of the [`PDFReadingMode` Enumeration]({{ site.enumerations }}result-enums.html#pdfreadingmode) items. | `PDFRM_AUTO` |

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`PDFReadingMode` Enumeration]({{ site.enumerations }}result-enums.html#pdfreadingmode)



&nbsp;



## ScaleDownThreshold
Sets the threshold for the image shrinking. 

**Remarks**   
If the shorter edge size is larger than the given value, the library will calculate the required height and width of the barcode image and shrink the image to that size before localization. Otherwise, it will perform barcode localization on the original image.   
If you have an image whose shorter edge size is larger than the given value and the barcode is a small part on it, you can set this value to be larger than the shorter edge of this image.   
If you have an image whose shorter edge size is larger than the given value and the barcode is clear and big, you can set this value to a smaller one than the default value.


### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| ImageParameter | ScaleDownThreshold | *int* | [512, 0x7fffffff] | 2300 |


**Json Parameter Example**   
```
{
    "ScaleDownThreshold":2300
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html) | [`scaleDownThreshold`]({{ site.structs }}PublicRuntimeSettings.html#scaledownthreshold) | *int* | [512, 0x7fffffff] | 2300 |

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)



&nbsp;




