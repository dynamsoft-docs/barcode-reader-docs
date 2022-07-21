---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImagePreprocessingModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImagePreprocessingModes.
keywords: ImagePreprocessingModes, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/image-preprocessing-modes.html
---


# ImagePreprocessingModes 

This parameter provides some image processing methods to enhance the quality of the grayscale image before reading barcodes. By default, the library does no preprocessing method. Assume your image has distorted features that can be solved by common image processing methods, this parameter may help set the processing mode(s) for getting a higher quality grayscale image.  

It consisits of one or more modes, each mode is a way to implement the preprocessing algorithm.


## Candidate Mode List
- IPM_GENERAL
- IPM_GRAY_EQUALIZE
- IPM_GRAY_SMOOTH
- IPM_SHARPEN_SMOOTH
- IPM_MORPHOLOGY

### IPM_GENERAL
Keeps the original grayscale. This mode has the following arguments for further customizing.
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### IPM_GRAY_EQUALIZE
Preprocesses the image using the gray equalization algorithm. This mode can be used for images with low contrast on barcode and background colour. This mode has the following arguments for further customizing.
- [Sensitivity](#sensitivity)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### IPM_GRAY_SMOOTH
Preprocesses the image using the gray smoothing algorithm. This mode can be used for for images with noise or texture. This mode has the following arguments for further customizing.
- [SmoothBlockSizeX](#smoothblocksizex)
- [SmoothBlockSizeY](#smoothblocksizey)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### IPM_SHARPEN_SMOOTH
Preprocesses the image using the sharpening and smoothing algorithm. This mode can be used for blur images. This mode has the following arguments for further customizing.
- [SmoothBlockSizeX](#smoothblocksizex)
- [SmoothBlockSizeY](#smoothblocksizey)
- [SharpenBlockSizeX](#sharpenblocksizex)
- [SharpenBlockSizeY](#sharpenblocksizey)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### IPM_MORPHOLOGY
Preprocesses the image using the morphology algorithm. It can be used for images where the barcode area is polluted or destroyed. This mode has the following arguments for further customizing.
- [MorphOperation](#morphoperation)
- [MorphShape](#morphshape)
- [MorphOperationKernelSizeX](#morphoperationkernelsizex)
- [MorphOperationKernelSizeY](#morphoperationkernelsizey)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)


    
## Setting Methods

### As `PublicRuntimeSettings` Member
`ImagePreprocessingModes` can be set dynamically during runtime as a member of `FurtherModes`, which is a member of `PublicRuntimeSettings` struct, it is an array with 8 [`ImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode) Enumeration items.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->imagePreprocessingModes[0] = IPM_GRAY_SMOOTH;
pSettings->imagePreprocessingModes[1] = IPM_GRAY_EQUALIZE;
reader->UpdateRuntimeSettings(pSettings);
reader->SetModeArgument("ImagePreprocessingModes", 1, "Sensitivity", "1");
delete pSettings;
//...other codes
```


**Remarks**     
`GetModeArgument` and `SetModeArgument` need to be called for getting and setting [`Arguments`](#candidate-argument-list).


**See Also**      
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)
- [`ImagePreprocessingMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode)
- `GetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#getmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_getmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#get_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument)
- `SetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#setmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_setmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#set_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument)


### As JSON Parameter
`ImagePreprocessingModes` as a JSON parameter is a JSON Object array. Each JSON object is defined as below.   

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| Mode | Any one in Candidate Mode List as string | (Required) Sets a preprocessing mode.  |
| Sensitivity | A number from value range of Sensitivity | (Optional) Sets the Argument [Sensitivity](#sensitivity). |
| SmoothBlockSizeX | A number from value range of SmoothBlockSizeX | (Optional) Sets the Argument [SmoothBlockSizeX](#smoothblocksizex). |
| SmoothBlockSizeY | A number from value range of SmoothBlockSizeY | (Optional) Sets the Argument [SmoothBlockSizeY](#smoothblocksizey). |
| SharpenBlockSizeX | A number from value range of SharpenBlockSizeX | (Optional) Sets the Argument [SmoothBlockSizeX](#sharpenblocksizex). |
| SharpenBlockSizeY | A number from value range of SharpenBlockSizeY | (Optional) Sets the Argument [SmoothBlockSizeY](#sharpenblocksizey). |
| MorphOperation | A string from value range of MorphOperation | (Optional) Sets the Argument [MorphOperation](#morphoperation). |
| MorphOperation | A string from value range of MorphOperation | (Optional) Sets the Argument [MorphOperation](#morphoperation). |
| MorphOperationKernelSizeX | A number from value range of MorphOperationKernelSizeX | (Optional) Sets the Argument [MorphOperationKernelSizeX](#morphoperationkernelsizex). |
| MorphOperationKernelSizeY | A number from value range of MorphOperationKernelSizeY | (Optional) Sets the Argument [MorphOperationKernelSizeY](#morphoperationkernelsizey). |
| LibraryFileName | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |
| LibraryParameters | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |



**JSON Parameter Example**   
```
{
    "ImagePreprocessingModes": [
        {
            "Mode": "IPM_GRAY_SMOOTH", 
            "SmoothBlockSizeX": 5,
            "SmoothBlockSizeY": 5
        },
        {
            "Mode": "IPM_GRAY_EQUALIZE", 
            "Sensitivity": 1
        }
    ]
}
```





<!--
## Impacts on Performance
### Speed
The SDK will loop the setting modes one by one until find as many barcodes as `ExpectedBarcodesCount` specified or timeout. The more modes you set, the more time the process may take. Setting an appropriate mode first in order or setting only necessary modes may speed up the process.

### Read Rate
Setting more image preprocessing modes along with different arguments may improve the Read Rate. 

### Accuracy
`ImagePreprocessingModes` has no influence on the Accuracy.

-->
## Candidate Argument List
- [Sensitivity](#sensitivity)
- [SmoothBlockSizeX](#smoothblocksizex)
- [SmoothBlockSizeY](#smoothblocksizey)
- [SharpenBlockSizeX](#sharpenblocksizex)
- [SharpenBlockSizeY](#sharpenblocksizey)
- [MorphOperation](#morphoperation)
- [MorphShape](#morphshape)
- [MorphOperationKernelSizeX](#morphoperationkernelsizex)
- [MorphOperationKernelSizeY](#morphoperationkernelsizey)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)


### Sensitivity 
Sets the sensitivity to perform the equalization process. A larger value means a higher possibility that gray equalization will be activated.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [1, 9] | 5 | IPM_GRAY_EQUALIZE |         

**Performance Adaptability**        
A larger value may cause adverse effect on Speed and Read Rate on images with a high level of contrast.

### SmoothBlockSizeX 
Sets the horizontal block size for the smoothing process.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [3, 1000] | 3 | IPM_GRAY_SMOOTH<br>IPM_SHARPEN_SMOOTH |         

**Remarks**        
Block size refers to the size of a pixel neighborhood used to calculate a threshold value for the pixel. 

     
**Performance Adaptability**        
Setting this to an appropriate value ( 5 - 8 times module size is recommended ) may improve the Read Rate.


### SmoothBlockSizeY 
Sets the vertical block size for the smoothing process.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [3, 1000] | 3 | IPM_GRAY_SMOOTH<br>IPM_SHARPEN_SMOOT |        

**Remarks**         
Block size refers to the size of a pixel neighborhood used to calculate a threshold value for the pixel.    

**Performance Adaptability**        
Setting this to an appropriate value ( 5 - 8 times module size is recommended ) may improve the Read Rate.

### SharpenBlockSizeX 
Sets the horizontal block size for the sharpening process.

| Value Type | Value Range | Default Value | 
| ---------- | ----------- | ------------- |
| *int* | [3, 1000] | 3 | IPM_SHARPEN_SMOOTH |         

**Remarks**         
  Block size refers to the size of a pixel neighborhood used to calculate the threshold for the pixel. An appropriate value can help increase the accuracy of barcode localization.


### SharpenBlockSizeY 
Sets the vertical block size for the sharpening process.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [3, 1000] | 3 | IPM_SHARPEN_SMOOTH |         

**Remarks**         
  Block size refers to the size of a pixel neighborhood used to calculate the threshold for the pixel. An appropriate value can help increase the accuracy of barcode localization.
  


### MorphOperation 
Sets the morph operation for the morphology process. 

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *string* | "Erode"<br>"Dilate"<br>"Open"<br>"Close" | "Close" | IPM_MORPHOLOGY |         

**Remarks**        
   - "Erode": Perform erosion process.
   - "Dilate": Perform dilation process.
   - "Open": Perform erosion first, then perform dilation.
   - "Close": Perform dilation first, then perform erosion.
   
   For more information, please check out [Image Processing in OpenCV - Morphological Transformations](https://docs.opencv.org/master/d9/d61/tutorial_py_morphological_ops.html) for reference.


### MorphShape  
 Sets the morph shape for the morphology process.  

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *string* | "Rectangle"<br>"Cross"<br>"Ellipse" | "Rectangle" |  IPM_MORPHOLOGY |        

**Remarks**        
   - "Rectangle": 
   - "Cross": 
   - "Ellipse": 



### MorphOperationKernelSizeX  
Sets the horizontal kernel size for the morphology process. 

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [0, 1000]  | 0 | IPM_MORPHOLOGY |        



### MorphOperationKernelSizeY  
 Sets the vertical kernel size for the morphology process.  

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [0, 1000]  | 0 | IPM_MORPHOLOGY |       



### LibraryFileName 
Sets the file name of the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *string* | A string value representing file name. | "" | All modes |         


**Remarks**         
  The library must be in the same place with Dynamsoft Barcode Reader Library.


### LibraryParameters 
Sets the parameters passed to the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing parameters. | "" | All modes |         


## Related Articles
- [How to configure the ImagePreprocessingModes parameter]({{ site.scenario_settings }}image-preprocessing.html)
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
