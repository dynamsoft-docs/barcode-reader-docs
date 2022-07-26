---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for TextureDetectionModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for TextureDetectionModes.
keywords: TextureDetectionModes, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/texture-detection-modes.html
---


# TextureDetectionModes 

`TextureDetectionModes` is a parameter to control how to detect texture on an image. It consisits of one or more modes, each mode represents a way to implement the detection.


## Candidate Mode List
- TDM_GENERAL_WIDTH_CONCENTRATION


### TDM_GENERAL_WIDTH_CONCENTRATION
Detects texture using the general algorithm. This mode has the following arguments for further customizing.

- [Sensitivity](#sensitivity)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)


    
## Setting Methods

### As `PublicRuntimeSettings` Member
`TextureDetectionModes` can be set dynamically during runtime as a member of `FurtherModes`, which is a member of `PublicRuntimeSettings` struct, it is an array with 8 [`TextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode) Enumeration items.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->textureDetectionModes[0] = TDM_GENERAL_WIDTH_CONCENTRATION;
reader->UpdateRuntimeSettings(pSettings);
reader->SetModeArgument("TextureDetectionModes", 0, "Sensitivity", "5");
delete pSettings;
//...other codes
```


**Remarks**     
`GetModeArgument` and `SetModeArgument` need to be called for getting and setting [`Arguments`](#candidate-argument-list).


**See Also**      
- `FurtherModes:` [C]({{ site.structs }}FurtherModes.html?src=c) \| [C++]({{ site.structs }}FurtherModes.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/FurtherModes.html) \| [Java]({{ site.java_api }}class/FurtherModes.html) \| [Java-Android]({{ site.android_api }}auxiliary-FurtherModes.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iFurtherModes.html)
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)
- [`TextureDetectionMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode)
- `GetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#getmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_getmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#get_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument)
- `SetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#setmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_setmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#set_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument)


### As JSON Parameter
`TextureDetectionModes` as a JSON parameter is a JSON Object array. Each JSON object is defined as below.   

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| Mode | Any one in Candidate Mode List as string | (Required) Specifies a mode for text filtering.  |
| Sensitivity | A number from value range of Sensitivity | (Optional) Sets the Argument [Sensitivity](#sensitivity). |
| LibraryFileName | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |
| LibraryParameters | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |



**JSON Parameter Example**   
```
{
    "TextureDetectionModes": [
        {
            "Mode": "TDM_GENERAL_WIDTH_CONCENTRATION", 
            "Sensitivity": 5
        }
    ]
}
```


<!--
## Impacts on Performance
### Speed
Enabling texture detection may slow down the Speed when the image has clean background.

### Read Rate
For barcodes surrounded by a textured background, enabling texture detection may improve the Accuracy.

### Accuracy
For barcodes surrounded by a textured background, enabling texture detection may improve the Accuracy.

-->
## Candidate Argument List
- [Sensitivity](#sensitivity)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)
 

### Sensitivity 
Sets the sensitivity used for texture detection.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [1, 9] | 5 | TDM_GENERAL_WIDTH_CONCENTRATION |         

**Remarks**         
 A larger value means the library will take more effort to detect texture.



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
- [How to deal with image textures]({{ site.scenario_settings }}texture-detection.html#)
