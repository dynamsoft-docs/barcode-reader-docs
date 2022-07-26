---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for TextFilterModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for TextFilterModes.
keywords: TextFilterModes, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/text-filter-modes.html
---


# TextFilterModes 

`TextFilterModes` is a parameter to control how to filter texts on an image. It consisits of one or more modes, each mode represents a way to implement the filtering.


## Candidate Mode List
- TFM_GENERAL_CONTOUR

### TFM_GENERAL_CONTOUR
Filters text using the general algorithm based on contour. This mode has the following arguments for further customizing.

- [MinImageDimension](#minimagedimension)
- [Sensitivity](#sensitivity)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)


    
## Setting Methods

### As `PublicRuntimeSettings` Member
`TextFilterModes` can be set dynamically during runtime as a member of `FurtherModes`, which is a member of `PublicRuntimeSettings` struct, it is an array with 8 [`TextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode) Enumeration items.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->textFilterModes[0] = TFM_GENERAL_CONTOUR;
reader->UpdateRuntimeSettings(pSettings);
reader->SetModeArgument("TextFilterModes", 0, "Sensitivity", "5");
delete pSettings;
//...other codes
```


**Remarks**     
`GetModeArgument` and `SetModeArgument` need to be called for getting and setting [`Arguments`](#candidate-argument-list).


**See Also**      
- `FurtherModes:` [C]({{ site.structs }}FurtherModes.html?src=c) \| [C++]({{ site.structs }}FurtherModes.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/FurtherModes.html) \| [Java]({{ site.java_api }}class/FurtherModes.html) \| [Java-Android]({{ site.android_api }}auxiliary-FurtherModes.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iFurtherModes.html)
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)
- [`TextFilterMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode)
- `GetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#getmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_getmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#get_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument)
- `SetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#setmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_setmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#set_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument)


### As JSON Parameter
`TextFilterModes` as a JSON parameter is a JSON Object array. Each JSON object is defined as below.   

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| Mode | Any one in Candidate Mode List as string | (Required) Specifies a mode for text filtering.  |
| MinImageDimension | A number from value range of MinImageDimension | (Optional) Sets the Argument [MinImageDimension](#minimagedimension). |
| Sensitivity | A number from value range of Sensitivity | (Optional) Sets the Argument [Sensitivity](#sensitivity). |
| LibraryFileName | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |
| LibraryParameters | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |



**JSON Parameter Example**   
```
{
    "TextFilterModes": [
        {
            "Mode": "TFM_GENERAL_CONTOUR", 
            "Sensitivity": 5
        }
    ]
}
```


<!--
## Impacts on Performance
### Speed
To detect barcodes surrounded by a large number of irrelevant characters, enabling text filtering may improve the Speed. However, enabling text filtering may slow down the Speed when barcodes are the only content of the image.

### Read Rate
`TextFilterModes` has no influence on the Read Rate.

### Accuracy
For barcodes surrounded by a large number of irrelevant characters, enabling text filtering may improve the Accuracy.

-->
## Candidate Argument List
- [MinImageDimension](#minimagedimension)
- [Sensitivity](#sensitivity)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)
 
### MinImageDimension 
Sets the minimum image dimension (in pixels) to enable text filtering.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [65536, 0x7fffffff] | 65536 | TFM_GENERAL_CONTOUR |         

**Remarks**         
The library will enable the region pre-detection feature only when the image dimension is larger than the given value.  

### Sensitivity 
Sets the sensitivity used for text filtering.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [0, 9] | 0 | TFM_GENERAL_CONTOUR |         

**Remarks**         
  - 0: automatically set by the library.   
  - A larger value means the library will take more effort to filter text.



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
- [How to configure TextFilterModes]({{ site.scenario_settings }}text-filter.html#)
