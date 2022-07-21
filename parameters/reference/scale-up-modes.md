---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ScaleUpModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ScaleUpModes.
keywords: ScaleUpModes, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/scale-up-modes.html
---


# ScaleUpModes 

`ScaleUpModes` is a parameter to control the process for scaling up an image used for detecting barcodes with small module size. It consisits of one or more modes, each mode represents a way to implement the scale-up.


## Candidate Mode List
- SUM_AUTO
- SUM_LINEAR_INTERPOLATION
- SUM_NEAREST_NEIGHBOUR_INTERPOLATION

### CCM_AUTO
Lets the library choose a mode automatically.

### SUM_LINEAR_INTERPOLATION
Scales up using the linear interpolation method. This mode has the following arguments for further customizing.

- [AcuteAngleWithXThreshold](#acuteanglewithxthreshold)
- [ModuleSizeThreshold](#modulesizethreshold)
- [TargetModuleSize](#targetmodulesize)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### SUM_NEAREST_NEIGHBOUR_INTERPOLATION
Scales up using the linear interpolation method. This mode has the following arguments for further customizing.

- [AcuteAngleWithXThreshold](#acuteanglewithxthreshold)
- [ModuleSizeThreshold](#modulesizethreshold)
- [TargetModuleSize](#targetmodulesize)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

    
## Setting Methods

### As `PublicRuntimeSettings` Member
`ScaleUpModes` can be set dynamically during runtime as a member of `FurtherModes`, which is a member of `PublicRuntimeSettings` struct, it is an array with 8 [`ScaleUpMode`]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode) Enumeration items.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->scaleUpModes[0] = SUM_LINEAR_INTERPOLATION;
reader->UpdateRuntimeSettings(pSettings);
reader->SetModeArgument("ScaleUpModes", 0, "ModuleSizeThreshold", "4");
delete pSettings;
//...other codes
```


**Remarks**     
`GetModeArgument` and `SetModeArgument` need to be called for getting and setting [`Arguments`](#candidate-argument-list).


**See Also**      
- `FurtherModes:` [C]({{ site.structs }}FurtherModes.html?src=c) \| [C++]({{ site.structs }}FurtherModes.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/FurtherModes.html) \| [Java]({{ site.java_api }}class/FurtherModes.html) \| [Java-Android]({{ site.android_api }}auxiliary-FurtherModes.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iFurtherModes.html)
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)
- [`ScaleUpMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode)
- `GetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#getmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_getmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#get_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument)
- `SetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#setmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_setmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#set_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument)


### As JSON Parameter
`ScaleUpModes` as a JSON parameter is a JSON Object array. Each JSON object is defined as below.   

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| Mode | Any one in Candidate Mode List as string | (Required) Specifies a mode for scaling up an image.  |
| AcuteAngleWithXThreshold | A number from value range of AcuteAngleWithXThreshold | (Optional) Sets the Argument [AcuteAngleWithXThreshold](#acuteanglewithxthreshold). |
| ModuleSizeThreshold | A number from value range of ModuleSizeThreshold | (Optional) Sets the Argument [modulesizethreshold](#modulesizethreshold). |
| TargetModuleSize | A number from value range of TargetModuleSize | (Optional) Sets the Argument [TargetModuleSize](#targetmodulesize). |
| LibraryFileName | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |
| LibraryParameters | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |



**JSON Parameter Example**   
```
{
    "ScaleUpModes": [
        {
            "Mode": "SUM_LINEAR_INTERPOLATION", 
            "ModuleSizeThreshold": 4,
            "TargetModuleSize": 8
        },
        {
            "Mode": "SUM_NEAREST_NEIGHBOUR_INTERPOLATION", 
            "ModuleSizeThreshold": 4,
            "TargetModuleSize": 6
        }
    ]
}
```


<!--
## Impacts on Performance
### Speed
The SDK will loop the setting modes one by one until find as many barcodes as `ExpectedBarcodesCount` specified or timeout. The more modes you set, the more time the process may take. Setting an appropriate mode first in order or setting only necessary modes may speed up the process.

### Read Rate
Setting more modes along with different arguments may improve the Read Rate. For barcodes with small module size, setting this parameter may improve the Read Rate.

### Accuracy
`ScaleUpModes` has no influence on the Accuracy.

-->
## Candidate Argument List
- [AcuteAngleWithXThreshold](#acuteanglewithxthreshold)
- [ModuleSizeThreshold](#modulesizethreshold)
- [TargetModuleSize](#targetmodulesize)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)
 
### AcuteAngleWithXThreshold 
Sets the acute angle threshold for scale-up.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [-1, 90] | -1 | SUM_LINEAR_INTERPOLATION<br>SUM_NEAREST_NEIGHBOUR_INTERPOLATION |         

**Remarks**         
- -1: means automatically set by the library.
- If the module size of the barcode is smaller than the [ModuleSizeThreshold](#modulesizethreshold) and the acute angle with X of the barcode is larger than the [AcuteAngleWithXThreshold](#acuteanglewithxthreshold), the barcode will be enlarged by a scale factor of N (the value of N is a power of 2) till N * modulesize >= [TargetModuleSize](#targetmodulesize).

### ModuleSizeThreshold 
Sets the module size threshold for scale-up.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [0, 0x7fffffff] | 0 | SUM_LINEAR_INTERPOLATION<br>SUM_NEAREST_NEIGHBOUR_INTERPOLATION |         

**Remarks**         
- 0: means automatically set by the library.
- If the module size of the barcode is smaller than the [ModuleSizeThreshold](#modulesizethreshold) and the acute angle with X of the barcode is larger than the [AcuteAngleWithXThreshold](#acuteanglewithxthreshold), the barcode will be enlarged by a scale factor of N (the value of N is a power of 2) till N * modulesize >= [TargetModuleSize](#targetmodulesize).



### TargetModuleSize 
Sets the target module size for scale-up.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [0, 0x7fffffff] | 0 | SUM_LINEAR_INTERPOLATION<br>SUM_NEAREST_NEIGHBOUR_INTERPOLATION |         

**Remarks**         
- 0: means automatically set by the library.
- If the module size of the barcode is smaller than the [ModuleSizeThreshold](#modulesizethreshold) and the acute angle with X of the barcode is larger than the [AcuteAngleWithXThreshold](#acuteanglewithxthreshold), the barcode will be enlarged by a scale factor of N (the value of N is a power of 2) till N * modulesize >= [TargetModuleSize](#targetmodulesize).


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
- [How to configure ScaleUpModes]({{ site.scenario_settings }}how-to-set-scaleup-modes.html)
