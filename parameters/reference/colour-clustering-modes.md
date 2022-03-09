---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ColourClusteringModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ColourClusteringModes.
keywords: ColourClusteringModes, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# ColourClusteringModes 

`ColourClusteringModes` is a parameter to control the process for colour categorization. It consisits of one or more modes, each mode represents a way to implement the categorization.


## Candidate Mode List
- CCM_GENERAL_HSV
- CCM_AUTO

### CCM_GENERAL_HSV
Clusters colours using the general algorithm based on HSV. This mode has the following arguments for further customizing.

- [Sensitivity](#sensitivity)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)


### CCM_AUTO
Lets the library choose a mode automatically. Not supported yet.


    
## Setting Methods

### As `PublicRuntimeSettings` Member
`ColourClusteringModes` can be set dynamically during runtime as a member of `FurtherModes`, which is a member of `PublicRuntimeSettings` struct, it is an array with 8 [`ColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode) Enumeration items.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->colourClusteringModes[0] = CCM_GENERAL_HSV;
reader->UpdateRuntimeSettings(pSettings);
reader->SetModeArgument("ColourClusteringModes", 0, "Sensitivity", "1");
delete pSettings;
//...other codes
```


**Remarks**     
`GetModeArgument` and `SetModeArgument` need to be called for getting and setting [`Arguments`](#candidate-argument-list).


**See Also**      
- `FurtherModes:` [C]({{ site.structs }}FurtherModes.html?src=c) \| [C++]({{ site.structs }}FurtherModes.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/FurtherModes.html) \| [Java]({{ site.java_api }}class/FurtherModes.html) \| [Java-Android]({{ site.android_api }}auxiliary-FurtherModes.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iFurtherModes.html)
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)
- [`ColourClusteringMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode)
- `GetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#getmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_getmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#get_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument)
- `SetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#setmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_setmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#set_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument)


### As JSON Parameter
`ColourClusteringModes` as a JSON parameter is a JSON Object array. Each JSON object is defined as below.   

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| Mode | Any one in Candidate Mode List as string | (Required) Specifies a mode for colour categorization.  |
| Sensitivity | A number from value range of Sensitivity | (Optional) Sets the Argument [Sensitivity](#sensitivity). |
| LibraryFileName | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |
| LibraryParameters | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |



**JSON Parameter Example**   
```
{
    "ColourClusteringModes": [
        {
            "Mode": "CCM_GENERAL_HSV", 
            "Sensitivity": 1
        },
        {
            "Mode": "CCM_GENERAL_HSV", 
            "Sensitivity": 9
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
`ColourClusteringModes` has no influence on the Accuracy.

-->
## Candidate Argument List
- [Sensitivity](#sensitivity)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)
 
### Sensitivity 
Sets the sensitivity used for colour categorization. A bigger value means less colours will be clustered as the same colour.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [1, 9] | 5 | CCM_GENERAL_HSV |         

     

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