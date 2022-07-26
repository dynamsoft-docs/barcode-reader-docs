---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for BarcodeColourModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for BarcodeColourModes.
keywords: BarcodeColourModes, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/barcode-colour-modes.html
---


# BarcodeColourModes 

`BarcodeColourModes` is a parameter to specify the barcode colour modes. It consisits of one or more modes, each mode represents a colour mode.


## Candidate Mode List
- BICM_DARK_ON_LIGHT
- BICM_LIGHT_ON_DARK
- BICM_DARK_ON_DARK
- BICM_LIGHT_ON_LIGHT
- BICM_DARK_LIGHT_MIXED
- BICM_DARK_ON_LIGHT_DARK_SURROUNDING

### BICM_DARK_ON_LIGHT
The target barcode is a dark item on a light background. This mode has the following arguments for further customizing.

- [LightReflection](#lightreflection)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)



### BICM_DARK_ON_LIGHT_DARK_SURROUNDING
The target barcode is a dark item on a light background surrounded by dark. This mode has the following arguments for further customizing.

- [LightReflection](#lightreflection)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)


### BICM_LIGHT_ON_DARK
The target barcode is a light item on a dark background. Not supported yet.

### BICM_DARK_ON_DARK
The target barcode is a dark item on a dark background. Not supported yet.

### BICM_LIGHT_ON_LIGHT
The target barcode is a light item on a light background. Not supported yet.

### BICM_DARK_LIGHT_MIXED
The target barcode is on background which is mixed by dark and light. Not supported yet.


    
## Setting Methods

### As `PublicRuntimeSettings` Member
`BarcodeColourModes` can be set dynamically during runtime as a member of `FurtherModes`, which is a member of `PublicRuntimeSettings` struct, it is an array with 8 [`BarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode) Enumeration items.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->barcodeColourModes[0] = BICM_DARK_ON_LIGHT;
reader->UpdateRuntimeSettings(pSettings);
reader->SetModeArgument("BarcodeColourModes", 0, "LightReflection", "1");
delete pSettings;
//...other codes
```


**Remarks**     
`GetModeArgument` and `SetModeArgument` need to be called for getting and setting [`Arguments`](#candidate-argument-list).


**See Also**      
- `FurtherModes:` [C]({{ site.structs }}FurtherModes.html?src=c) \| [C++]({{ site.structs }}FurtherModes.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/FurtherModes.html) \| [Java]({{ site.java_api }}class/FurtherModes.html) \| [Java-Android]({{ site.android_api }}auxiliary-FurtherModes.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iFurtherModes.html)
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)
- [`BarcodeColourMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode)
- `GetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#getmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_getmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#get_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument)
- `SetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#setmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_setmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#set_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument)


### As JSON Parameter
`BarcodeColourModes` as a JSON parameter is a JSON Object array. Each JSON object is defined as below.   

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| Mode | Any one in Candidate Mode List as string | (Required) Specifies a target barcode colour mode.  |
| LightReflection | A number from value range of LightReflection | (Optional) Sets the Argument [LightReflection](#lightreflection). |
| LibraryFileName | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |
| LibraryParameters | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |



**JSON Parameter Example**   
```
{
    "BarcodeColourModes": [
        {
            "Mode": "BICM_DARK_ON_LIGHT", 
            "LightReflection": 1
        },
        {
            "Mode": "BICM_DARK_ON_LIGHT", 
            "LightReflection": 0
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
`BarcodeColourModes` has no influence on the Accuracy.

-->
## Candidate Argument List
- [LightReflection](#lightreflection)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)
 
### LightReflection 
Sets if there is light reflection on the barocde zone.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [0, 1] | 1 | BICM_DARK_ON_LIGHT<br>BICM_DARK_ON_LIGHT_DARK_SURROUNDING |         

**Remarks**        
  - 0: no light reflection.   
  - 1: has light reflection.
     

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
