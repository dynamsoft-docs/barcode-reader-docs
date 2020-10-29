---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - BinarizationModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - BinarizationModes.
keywords: BinarizationModes, ImageParameter, image process control parameters, parameter reference, parameter
needAutoGenerateSidebar: false
---

# ImageParameter Object - Image Process Control Parameters

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.AccompanyingTextRecognitionModes`](AccompanyingTextRecognitionModes.md#accompanyingtextrecognitionmodes) | Sets the mode and priority to recognize accompanying text. |
 | [`ImageParameter.BarcodeColourModes`](BarcodeColourModes.md#barcodecolourmodes) | Sets the mode and priority for the barcode colour mode used to process the barcode zone. |
 | [`ImageParameter.BarcodeComplementModes`](BarcodeComplementModes.md#barcodecomplementmodes) | Sets the mode and priority to complement the missing parts in the barcode. |
 | [`ImageParameter.BinarizationModes`](#binarizationmodes) | 	Sets the mode and priority for binarization. |
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


## BinarizationModes 

### Mode Properties
`BinarizationModes` is a parameter for setting the mode  for binarization. It consisits of one or more `BinarizationMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`BinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode) array* | "BM_SKIP"<br>"BM_AUTO"<br>"BM_LOCAL_BLOCK" | ["BM_LOCAL_BLOCK", "BM_SKIP", "BM_SKIP", "BM_SKIP", "BM_SKIP", "BM_SKIP", "BM_SKIP", "BM_SKIP"] |

- **See also**:   
    [`BinarizationMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode)
    
#### Mode Arguments
- [BlockSizeX](#blocksizex)
- [BlockSizeY](#blocksizey)
- [EnableFillBinaryVacancy](#enablefillbinaryvacancy)
- [ImagePreprocessingModesIndex](#imagepreprocessingmodesindex)
- [ThreshValueCoefficient](#threshvaluecoefficient)
 
##### BlockSizeX 
Sets the horizontal block size for the binarization process.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 1000] | 0 | "BM_LOCAL_BLOCK" |         

- **Remark**    
  Block size refers to the size of a pixel neighborhood used to calculate a threshold value for the pixel. An appropriate value for binarizationBlockSize can help generate a high quality binary image and increase the accuracy of barcode localization.   

  - 0: the block size used for binarization will be set to a value which is calculated automatically.   
  - N:
     - 1 <= N <= 3: the block size used for binarization will be set to 3.
     - N > 3: the block size used for binarization will be set to N.
     
  


##### BlockSizeY 
Sets the vertical block size for the binarization process.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 1000] | 0 | "BM_LOCAL_BLOCK" |         

- **Remark**     
  Block size refers to the size of a pixel neighborhood used to calculate a threshold value for the pixel. An appropriate value for binarizationBlockSize can help generate a high quality binary image and increase the accuracy of barcode localization.   

  - 0: the block size used for binarization will be set to a value which is calculated automatically.   
  - N:
     - 1 <= N <= 3: the block size used for binarization will be set to 3.
     - N > 3: the block size used for binarization will be set to N..


##### EnableFillBinaryVacancy 
Sets whether to enable binary vacancy filling.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 1] | 1 | "BM_LOCAL_BLOCK" |         

- **Remark**     
  0: disable.   
  1: enable.

  For barcodes with a large module size, there might be a vacant area in the position detection pattern after binarization. The vacant area may result in decoding failure. Setting this to True will fill in the vacant area with black and may help improve the decoding success rate. Better accuracy for images with a large module size.  
  

##### ImagePreprocessingModesIndex 
The index of a specific image preprocessing mode in the [ImagePreprocessingModes](ImagePreprocessingModes.md#imagepreprocessingmodes) parameter which the current binarization mode is applied to.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-1, 0x7fffffff] | -1 | "BM_LOCAL_BLOCK" |         

- **Remark**     
  -1: The current binarization mode is applied to all modes in parameter [ImagePreprocessingModes](ImagePreprocessingModes.md#imagepreprocessingmodes).


##### ThreshValueCoefficient 
Constant subtracted from the mean or weighted mean. Normally, it is positive but may be zero or negative as well.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-255, 255] | 10 | "BM_LOCAL_BLOCK" |         



### Setting Methods

#### As JSON Parameter
`BinarizationModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority the mode  for binarization. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | BinarizationModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "BinarizationModes": [
        {
            "Mode": "BM_LOCAL_BLOCK",
            "BlockSizeX": 5,
            "BlockSizeY": 5,
        }
    ]
}
```


&nbsp;



#### As `PublicRuntimeSettings` Member
`BinarizationModes` as a member of `PublicRuntimeSettings` struct is a [`BinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode) array for setting the modes and the priority  for binarization. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html) | [`binarizationModes`]({{ site.structs }}PublicRuntimeSettings.html#binarizationmodes) | [`BinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode)[8] |

**Remark**   
[`GetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).


**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`BinarizationMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode)
