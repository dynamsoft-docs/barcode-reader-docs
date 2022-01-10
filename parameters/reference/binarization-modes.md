---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for BinarizationModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for BinarizationModes.
keywords: BinarizationModes, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# BinarizationModes 

This parameter helps control the process of binarization, i.e., converting grayscale image to binary image. A better binary image helps a lot for barcode reading. During the binarization, as we know, the threshold is the key criteria. If the pixel value is smaller than the threshold, it is set to 0, otherwise, it is set to a maximum value (255 in the library). By default, the library automatically calculates the adaptive size of the neighbourhood area and then binarizes the grayscale image with the adaptive threshold based on a small neighbourhood area with an adaptive size around it. Assume this field is in your wheelhouse, this parameter may help specify the appropriate settings for getting a better binary image.

It consisits of one or more modes, each mode is a way to implement the binarization.


## Candidate Mode List
- BM_LOCAL_BLOCK
- BM_THRESHOLD

### BM_LOCAL_BLOCK
Binarizes the image for each pixel based on a threshold which is calculated based on a small region around it. This mode has the following arguments for further customizing.
- [BlockSizeX](#blocksizex)
- [BlockSizeY](#blocksizey)
- [EnableFillBinaryVacancy](#enablefillbinaryvacancy)
- [ImagePreprocessingModesIndex](#imagepreprocessingmodesindex)
- [ThresholdCompensation](#thresholdcompensation)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)



### BM_THRESHOLD
Binarizes the image for each pixel based on a unified threshold. If the gray value of the pixel is less than the threshold, it will be black in the binary image, otherwise it will be white. This mode has the following arguments for further customizing.
- [ImagePreprocessingModesIndex](#imagepreprocessingmodesindex)
- [BinarizationThreshold](#binarizationThreshold)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)


    
## Setting Methods

### As `PublicRuntimeSettings` Member
`BinarizationModes` can be set dynamically during runtime as a member of `PublicRuntimeSettings` struct, it is an array with 8 [`BinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode) Enumeration items.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->binarizationModes[0] = BM_LOCAL_BLOCK;
pSettings->binarizationModes[1] = BM_THRESHOLD;
reader->UpdateRuntimeSettings(pSettings);
reader->SetModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", "0");
reader->SetModeArgument("BinarizationModes", 1, "BinarizationThreshold", "125");
delete pSettings;
//...other codes
```


**Remarks**     
`GetModeArgument` and `SetModeArgument` need to be called for getting and setting [`Arguments`](#candidate-argument-list).


**See Also**      
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)
- [`BinarizationMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode)
- `GetModeArgument:` [JavaScript]({{ site.cpp_methods }}BarcodeReader.html#getmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_getmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#get_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument)
- `SetModeArgument:` [JavaScript]({{ site.cpp_methods }}BarcodeReader.html#setmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_setmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#set_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument)



### As JSON Parameter
`BinarizationModes` as a JSON parameter is a JSON Object array. Each JSON object is defined as below.   

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| Mode | Any one in Candidate Mode List as string | (Required) Sets a binarization mode.  |
| BinarizationThreshold | A number from value range of BinarizationThreshold | (Optional) Sets the Argument [BinarizationThreshold](#binarizationThreshold). |
| BlockSizeX | A number from value range of BlockSizeX | (Optional) Sets the Argument [BlockSizeX](#blocksizex). |
| BlockSizeY | A number from value range of BlockSizeY | (Optional) Sets the Argument [BlockSizeY](#blocksizey). |
| EnableFillBinaryVacancy | A number from value range of EnableFillBinaryVacancy | (Optional) Sets the Argument [EnableFillBinaryVacancy](#enablefillbinaryvacancy). |
| ImagePreprocessingModesIndex | A number from value range of ImagePreprocessingModesIndex | (Optional) Sets the Argument [ImagePreprocessingModesIndex](#imagepreprocessingmodesindex). |
| ThresholdCompensation | A number from value range of ThresholdCompensation | (Optional) Sets the Argument [ThresholdCompensation](#thresholdcompensation). |
| LibraryFileName | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |
| LibraryParameters | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |



**JSON Parameter Example**   
```
{
    "BinarizationModes": [
        {
            "Mode": "BM_LOCAL_BLOCK", 
            "BlockSizeX": 5,
            "BlockSizeY": 5
        },
        {
            "Mode": "BM_THRESHOLD", 
            "BinarizationThreshold": 125
        }
    ]
}
```





## Impacts on Performance
### Speed
The SDK will loop the setting modes one by one until find as many barcodes as `ExpectedBarcodesCount` specified or timeout. The more modes you set, the more time the process may take. Setting an appropriate mode first in order or setting only necessary modes may speed up the process.

### Read Rate
Setting more binarization modes along with different arguments may improve the Read Rate. 

### Accuracy
`BinarizationModes` has no influence on the Accuracy.

## Candidate Argument List
- [BlockSizeX](#blocksizex)
- [BlockSizeY](#blocksizey)
- [EnableFillBinaryVacancy](#enablefillbinaryvacancy)
- [ImagePreprocessingModesIndex](#imagepreprocessingmodesindex)
- [ThresholdCompensation](#thresholdcompensation)
- [ThreshValueCoefficient](#threshvaluecoefficient)
- [BinarizationThreshold](#binarizationThreshold)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)
 
### BlockSizeX 
Sets the horizontal block size for the binarization process.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [0, 1000] | 0 | BM_LOCAL_BLOCK |         

**Remarks**        
  Block size refers to the size of a pixel neighborhood used to calculate a threshold value for the pixel. 

  - 0: the block size used for binarization will be set to a value which is calculated automatically.   
  - N:
     - 1 <= N <= 3: the block size used for binarization will be set to 3.
     - N > 3: the block size used for binarization will be set to N.
     
**Performance Adaptability**        
Setting this to an appropriate value ( 5 - 8 times module size is recommended ) may improve the Read Rate.


### BlockSizeY 
Sets the vertical block size for the binarization process.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [0, 1000] | 0 | BM_LOCAL_BLOCK |        

**Remarks**         
  Block size refers to the size of a pixel neighborhood used to calculate a threshold value for the pixel.    

  - 0: the block size used for binarization will be set to a value which is calculated automatically.   
  - N:
     - 1 <= N <= 3: the block size used for binarization will be set to 3.
     - N > 3: the block size used for binarization will be set to N.

**Performance Adaptability**        
Setting this to an appropriate value ( 5 - 8 times module size is recommended ) may improve the Read Rate.


### EnableFillBinaryVacancy 
Sets whether to enable binary vacancy filling.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [0, 1] | 1 | BM_LOCAL_BLOCK |         

**Remarks**         
  - 0: disable.   
  - 1: enable.
  
  For barcodes with a large module size, there might be a vacant area in the position detection pattern after binarization. The vacant area may result in decoding failure. Setting this to True will fill in the vacant area with black and may help improve the decoding success rate. 

**Performance Adaptability**        
Enabling this may improve the Read Rate but slowdown the Speed. 
  

### ImagePreprocessingModesIndex 
The index of a specific image preprocessing mode in the [ImagePreprocessingModes](image-preprocessing-modes.md#imagepreprocessingmodes) parameter which the current binarization mode is applied to.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [-1, 0x7fffffff] | -1 | BM_LOCAL_BLOCK<br>BM_THRESHOLD |        

**Remarks**         
  -1: The current binarization mode is applied to all modes in parameter [ImagePreprocessingModes](image-preprocessing-modes.md#imagepreprocessingmodes).


### ThresholdCompensation 
Constant subtracted from the mean or weighted mean used for calculating the threshold. Normally, it is positive but may be zero or negative as well.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [-255, 255] | 10 | BM_LOCAL_BLOCK |         

### ThreshValueCoefficient 
Deprecated. Use [ThresholdCompensation](#thresholdcompensation) instead.

### BinarizationThreshold
Sets the binarization threshold.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [-1, 255] | -1 | BM_THRESHOLD |   

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
- [How to configure the binarization parameters]({{ site.scenario_settings }}how-to-set-binarization-modes.html)
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)