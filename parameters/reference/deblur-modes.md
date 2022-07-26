---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for DeblurModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for DeblurModes.
keywords: DeblurModes, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/deblur-modes.html
---


# DeblurModes 

Sets the mode and priority for deblurring.  

It consisits of one or more modes, each mode represents a way to transform the grayscale image.


## Candidate Mode List
- DM_DIRECT_BINARIZATION
- DM_THRESHOLD_BINARIZATION
- DM_GRAY_EQUALIZATION
- DM_SMOOTHING
- DM_MORPHING
- DM_DEEP_ANALYSIS
- DM_SHARPENING
- DM_BASED_ON_LOC_BIN
- DM_SHARPENING_SMOOTHING

### DM_DIRECT_BINARIZATION
Performs deblur process using the binarization algorithm. This mode has the following arguments for further customizing.

- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### DM_THRESHOLD_BINARIZATION
Performs deblur process using the threshold binarization algorithm. This mode has the following arguments for further customizing.

- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### DM_GRAY_EQUALIZATION
Performs deblur process using the gray equalization algorithm. This mode has the following arguments for further customizing.

- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### DM_SMOOTHING
Performs deblur process using the smoothing algorithm. This mode has the following arguments for further customizing.

- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### DM_MORPHING
Performs deblur process using the morphing algorithm. This mode has the following arguments for further customizing.

- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### DM_DEEP_ANALYSIS
Performs deblur process using the deep analysis algorithm. This mode has the following arguments for further customizing.

- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### DM_SHARPENING
Performs deblur process using the sharpening algorithm. This mode has the following arguments for further customizing.

- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### DM_BASED_ON_LOC_BIN
Performs deblur process based on the binary image from the localization process. This mode has the following arguments for further customizing.

- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### DM_SHARPENING_SMOOTHING
Performs deblur process using the sharpening and smoothing algorithm. This mode has the following arguments for further customizing.

- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

    
## Setting Methods

### As `PublicRuntimeSettings` Member
`DeblurModes` can be set dynamically during runtime as a member of `PublicRuntimeSettings` struct, it is an array with 10 [`DeblurMode`]({{ site.enumerations }}parameter-mode-enums.html#deblurmode) Enumeration items.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->deblurModes[0] = DM_BASED_ON_LOC_BIN;
reader->UpdateRuntimeSettings(pSettings);
delete pSettings;
//...other codes
```


**Remarks**     
`GetModeArgument` and `SetModeArgument` need to be called for getting and setting [`Arguments`](#candidate-argument-list).


**See Also**      
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)
- [`DeblurMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#deblurmode)
- `GetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#getmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_getmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#get_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument)
- `SetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#setmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_setmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#set_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument)


### As JSON Parameter
`DeblurModes` as a JSON parameter is a JSON Object array. Each JSON object is defined as below.   

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| Mode | Any one in Candidate Mode List as string | (Required) Specifies a mode for deblurring.  |
| LibraryFileName | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |
| LibraryParameters | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |



**JSON Parameter Example**   
```
{
    "DeblurModes": [
        {
            "Mode": "DM_BASED_ON_LOC_BIN"
        },
        {
            "Mode": "DM_THRESHOLD_BINARIZATION" 
        }
    ]
}
```


<!--
## Impacts on Performance
### Speed
The SDK will loop the setting modes one by one until find as many barcodes as `ExpectedBarcodesCount` specified or timeout. The more modes you set, the more time the process may take. Setting an appropriate mode first in order or setting only necessary modes may speed up the process.

### Read Rate
Setting more modes along with different arguments may improve the Read Rate. 

### Accuracy
`DeblurModes` has no influence on the Accuracy.

-->
## Candidate Argument List
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)
 


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
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
