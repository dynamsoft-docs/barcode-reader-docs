---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - Image Process Control Parameters
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - Image Process Control Parameters.
keywords: DeblurLevel, Pages, PDFRasterDPI, PDFReadingMode, ScaleDownThreshold, ImageParameter, image process control parameters, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: false
---
# ImageParameter Object | Others

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.DeblurLevel`](#deblurlevel) | Sets the degree of blurriness of the barcode. |
 | [`ImageParameter.Pages`](#pages) | Sets the specific pages or the range of pages of a file (.tiff or .pdf) for barcode searching. |
 | [`ImageParameter.PDFRasterDPI`](#pdfrasterdpi) | Sets the output image resolution. |
 | [`ImageParameter.PDFReadingMode`](#pdfreadingmode) | Sets the way to detect barcodes from a PDF file when using the DecodeFile method. |
 | [`ImageParameter.ScaleDownThreshold`](#scaledownthreshold) | Sets the threshold for the image shrinking. |


## DeblurLevel
Sets the degree of blurriness of the barcode.

**Remarks**     
If you have a blurry image, you can set this property to a larger value. The higher value set, the more effort the library will spend to decode images, but it may also slow down the recognition process.<br>
DeblurLevel is now deprecated. It still works in this version but could be removed in the near future. We recommend using [`DeblurModes`](DeblurModes.md#deblurmodes) instead. Please note that once `DeblurModes` is used, `DeblurLevel` is no longer effective. Migrating mapping:

- For Barcode Format PDF417  

| DeblurLevel |	DeblurModes |  
| ----------- | ------------------- |  
| 0 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION] |
| 1-3 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION] |
| 4-6 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION,DM_SMOOTHING] |
| 7-8 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION,DM_SMOOTHING，DM_GRAY_EQUALIZATION] |
| 9 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION,DM_SMOOTHING，DM_GRAY_EQUALIZATION,DM_MORPHING,DM_DEEP_ANALYSIS] |

- For Barcode Format OneD  

| DeblurLevel |	DeblurModes |
| ----------- | ------------------- |
| 0 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_THRESHOLD_BINARIZATION] |
| 1-3 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION] |
| 4-6 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION,DM_SMOOTHING] |
| 7-8 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION,DM_SMOOTHING，DM_GRAY_EQUALIZATION] |
| 9 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION,DM_DEEP_ANALYSIS,DM_SMOOTHING，DM_GRAY_EQUALIZATION,DM_MORPHING] |

- For other formats

| DeblurLevel |	DeblurModes |
| ----------- | ------------------- |
| 0 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION] |
| 1-3 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION] |
| 4-6 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION,DM_SMOOTHING] |
| 7-8 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION,DM_SMOOTHING，DM_GRAY_EQUALIZATION] |
| 9 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION,DM_DEEP_ANALYSIS,DM_SMOOTHING，DM_GRAY_EQUALIZATION,DM_MORPHING] |



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




