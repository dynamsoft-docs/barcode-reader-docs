---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for DeformationResistingModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for DeformationResistingModes.
keywords: DeformationResistingModes, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# DeformationResistingModes 

`DeformationResistingModes` is a parameter to control how to handle distorted and deformed barcodes. It consisits of one or more modes, each mode represents a way to implement the deformation resisting.


## Candidate Mode List

- DRM_GENERAL
- DRM_BROAD_WARP
- DRM_LOCAL_REFERENCE
- DRM_DEWRINKLE
- DRM_AUTO

### DRM_GENERAL

Resists deformation using the general algorithm. This mode has the following arguments for further customizing.

- [Level](#level)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)


### DRM_BROAD_WARP

Resists deformation when the barcode is warped gently.

### DRM_LOCAL_REFERENCE

Resists deformation for barcodes with minor deformation in local modules.

### DRM_DEWRINKLE

Resists deformation for barcodes on a wrinkled surface.

### DRM_AUTO

Lets the library choose a mode automatically. Not supported yet.


    
## Setting Methods

### As `PublicRuntimeSettings` Member
`DeformationResistingModes` can be set dynamically during runtime as a member of `FurtherModes`, which is a member of `PublicRuntimeSettings` struct, it is an array with 8 [`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) Enumeration items.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->deformationResistingModes[0] = DRM_GENERAL;
reader->UpdateRuntimeSettings(pSettings);
reader->SetModeArgument("DeformationResistingModes", 0, "Level", "1");
delete pSettings;
//...other codes
```


**Remarks**     
`GetModeArgument` and `SetModeArgument` need to be called for getting and setting [`Arguments`](#candidate-argument-list).


**See Also**      
- `FurtherModes:` [C]({{ site.structs }}FurtherModes.html?src=c) \| [C++]({{ site.structs }}FurtherModes.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/FurtherModes.html) \| [Java]({{ site.java_api }}class/FurtherModes.html) \| [Java-Android]({{ site.android_api }}auxiliary-FurtherModes.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iFurtherModes.html)
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)
- [`DeformationResistingMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode)
- `GetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#getmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_getmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#get_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument)
- `SetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#setmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_setmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#set_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument)


### As JSON Parameter
`DeformationResistingModes` as a JSON parameter is a JSON Object array. Each JSON object is defined as below.   

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| Mode | Any one in Candidate Mode List as string | (Required) Specifies a mode for deformation resisting.  |
| Level | A number from value range of Level | (Optional) Sets the Argument [Level](#level). |
| LibraryFileName | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |
| LibraryParameters | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |



**JSON Parameter Example**   
```
{
    "DeformationResistingModes": [
        {
            "Mode": "DRM_GENERAL", 
            "Level": 1
        },
        {
            "Mode": "DRM_DEWRINKLE"
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
`DeformationResistingModes` has no influence on the Accuracy.

-->
## Candidate Argument List
- [Level](#level)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)
 
### Level 
Sets the effort level used for deformation resisting. Not supported yet.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [1, 9] | 5 | DRM_GENERAL |         

**Performance Adaptability**        
A larger value may improve the Read Rate but slowdown the Speed. 
    

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
- [How to deal with deformed barcodes]({{ site.scenario_settings }}resist-deformation.html)