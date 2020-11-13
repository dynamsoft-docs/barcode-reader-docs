---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - ImagePreprocessingModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - ImagePreprocessingModes.
keywords: ImagePreprocessingModes, ImageParameter, image process control parameters, parameter reference, parameter
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
 | [`ImageParameter.ImagePreprocessingModes`](#imagepreprocessingmodes) | Sets the mode and priority for image preprocessing algorithms. |
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


## ImagePreprocessingModes  

### Mode Properties
`ImagePreprocessingModes` is a parameter for setting the mode for image preprocessing algorithms. It consisits of one or more `ImagePreprocessingMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`ImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode) array* | "IPM_SKIP"<br>"IPM_AUTO"<br>"IPM_GENERAL"<br>"IPM_GRAY_EQUALIZE"<br>"IPM_GRAY_SMOOTH"<br>"IPM_SHARPEN_SMOOTH"<br>"IPM_MORPHOLOGY" | ["IPM_GENERAL", "IPM_SKIP", "IPM_SKIP", "IPM_SKIP", "IPM_SKIP", "IPM_SKIP", "IPM_SKIP", "IPM_SKIP"] |

- **See also**:   
    [`ImagePreprocessingMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode)
    
#### Mode Arguments
- [Sensitivity](#sensitivity)
- [SmoothBlockSizeX](#smoothblocksizex)
- [SmoothBlockSizeY](#smoothblocksizey)
- [SharpenBlockSizeX](#sharpenblocksizex)
- [SharpenBlockSizeY](#sharpenblocksizey)
- [MorphOperation](#morphoperation)
- [MorphShape](#morphshape)
- [MorphOperationKernelSizeX](#morphoperationkernelsizex )
- [MorphOperationKernelSizeY](#morphoperationkernelsizey)
 
##### Sensitivity 
Sets the sensitivity used for gray equalization.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [1, 9] | 5 | "IPM_GRAY_EQUALIZE" |         

- **Remark**     
  If you have an image with a low level of contrast, you can set the property to a larger value. A larger value means a higher possibility that gray equalization will be activated. This may cause adverse effect on images with a high level of contrast.  


##### SmoothBlockSizeX 
Sets the horizontal block size for the smoothing process.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [3, 1000] | 3 | "IPM_GRAY_SMOOTH"<br>"IPM_SHARPEN_SMOOTH" |         

- **Remark**     
  Block size refers to the size of a pixel neighborhood used to calculate the threshold for the pixel. An appropriate value can help increase the accuracy of barcode localization.


##### SmoothBlockSizeY 
Sets the vertical block size for the smoothing process.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [3, 1000] | 3 | "IPM_GRAY_SMOOTH"<br>"IPM_SHARPEN_SMOOTH" |         

- **Remark**     
  Block size refers to the size of a pixel neighborhood used to calculate the threshold for the pixel. An appropriate value can help increase the accuracy of barcode localization.  
  

##### SharpenBlockSizeX 
Sets the horizontal block size for the sharpening process.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [3, 1000] | 3 | "IPM_SHARPEN_SMOOTH" |         

- **Remark**     
  Block size refers to the size of a pixel neighborhood used to calculate the threshold for the pixel. An appropriate value can help increase the accuracy of barcode localization.


##### SharpenBlockSizeY 
Sets the vertical block size for the sharpening process.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [3, 1000] | 3 | "IPM_SHARPEN_SMOOTH" |         

- **Remark**     
  Block size refers to the size of a pixel neighborhood used to calculate the threshold for the pixel. An appropriate value can help increase the accuracy of barcode localization.
  


##### MorphOperation 
Sets the morph operation for the morphology process. 

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | "Erode"<br>"Dilate"<br>"Open"<br>"Close" | "Close" | "IPM_MORPHOLOGY" |         

- **Remark**    
   - "Erode": Perform erosion process.
   - "Dilate": Perform dilation process.
   - "Open": Perform erosion first, then perform dilation.
   - "Close": Perform dilation first, then perform erosion.
   
   For more information, please check out [Image Processing in OpenCV - Morphological Transformations](https://docs.opencv.org/master/d9/d61/tutorial_py_morphological_ops.html) for reference.


##### MorphShape  
 Sets the morph shape for the morphology process.  

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | "Rectangle"<br>"Cross"<br>"Ellipse" | "Rectangle" | "IPM_MORPHOLOGY" |         

- **Remark**    
   - "Rectangle": 
   - "Cross": 
   - "Ellipse": 



##### MorphOperationKernelSizeX  
Sets the horizontal kernel size for the morphology process. 

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 1000]  | 0 | "IPM_MORPHOLOGY" |         



##### MorphOperationKernelSizeY  
 Sets the vertical kernel size for the morphology process.  

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 1000]  | 0 | "IPM_MORPHOLOGY" |       


### Setting Methods

#### As JSON Parameter
`ImagePreprocessingModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority the mode for image preprocessing algorithms.
Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | ImagePreprocessingModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "ImagePreprocessingModes": [
        {
            "Mode": "IPM_GRAY_EQUALIZE",
            "Sensitivity": 5
        },
        {
            "Mode": "IPM_SHARPEN_SMOOTH",
            "SmoothBlockSizeX": 5,
            "SmoothBlockSizeY": 5,
            "SharpenBlockSizeX": 5,
            "SharpenBlockSizeY": 5
        }
    ]
}
```


&nbsp;



#### As `PublicRuntimeSettings` Member
`ImagePreprocessingModes` is a [`ImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode) array defines in `furtherModes` which is a struct member of `PublicRuntimeSettings`. It is used for setting the modes and the priority for image preprocessing algorithms. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html)->[`furtherModes`]({{ site.structs }}PublicRuntimeSettings.html#furthermodes) | [`imagePreprocessingModes`]({{ site.structs }}FurtherModes.html#imagepreprocessingmodes) | [`ImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode)[8] |


**Remark**   
[`GetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).


**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`FurtherModes` Struct]({{ site.structs }}FurtherModes.html)
- [`ImagePreprocessingMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode)
