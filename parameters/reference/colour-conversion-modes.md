---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ColourConversionModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ColourConversionModes.
keywords: ColourConversionModes, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/colour-conversion-modes.html
---


# ColourConversionModes 

This parameter helps control the process of colour conversion, i.e., converting colour image to grayscale image. If you input a colour image, the library will convert it to the grayscale image first for further processes. By default, the conversion will base on the RGB channels with the default weights of three channels. This parameter allows you to specify the referred colour channel (RGB or HSV) and the weight of each channel during the colour conversion. Assume your image has a disgusting contrast of one colour channel between the barcode area and background, this parameter may help specify the appropriate settings for getting a higher quality grayscale image. 

It consisits of one or more modes, each mode represents a way to implement the convertion.


## Candidate Mode List
- CICM_GENERAL

### CICM_GENERAL
Converts a colour image to a grayscale image using the general algorithm. This mode has the following arguments for further customizing.

- [BlueChannelWeight](#bluechannelweight)
- [GreenChannelWeight](#greenchannelweight)
- [RedChannelWeight](#redchannelweight)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)


    
## Setting Methods

### As `PublicRuntimeSettings` Member
`ColourConversionModes` can be set dynamically during runtime as a member of `FurtherModes`, which is a member of `PublicRuntimeSettings` struct, it is an array with 8 [`ColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode) Enumeration items.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->colourConversionModes[0] = CICM_GENERAL;
reader->UpdateRuntimeSettings(pSettings);
reader->SetModeArgument("ColourConversionModes", 0, "BlueChannelWeight", "1000");
delete pSettings;
//...other codes
```


**Remarks**     
`GetModeArgument` and `SetModeArgument` need to be called for getting and setting [`Arguments`](#candidate-argument-list).


**See Also**      
- `FurtherModes:` [C]({{ site.structs }}FurtherModes.html?src=c) \| [C++]({{ site.structs }}FurtherModes.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/FurtherModes.html) \| [Java]({{ site.java_api }}class/FurtherModes.html) \| [Java-Android]({{ site.android_api }}auxiliary-FurtherModes.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iFurtherModes.html)
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)
- [`ColourConversionMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode)
- `GetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#getmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_getmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#get_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument)
- `SetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#setmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_setmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#set_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument)


### As JSON Parameter
`ColourConversionModes` as a JSON parameter is a JSON Object array. Each JSON object is defined as below.   

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| Mode | Any one in Candidate Mode List as string | (Required) Specifies a mode for colour convertion.  |
| BlueChannelWeight | A number from value range of BlueChannelWeight | (Optional) Sets the Argument [BlueChannelWeight](#bluechannelweight). |
| GreenChannelWeight | A number from value range of GreenChannelWeight | (Optional) Sets the Argument [GreenChannelWeight](#greenchannelweight). |
| RedChannelWeight | A number from value range of RedChannelWeight | (Optional) Sets the Argument [RedChannelWeight](#redchannelweight). |
| LibraryFileName | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |
| LibraryParameters | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |



**JSON Parameter Example**   
```
{
    "ColourConversionModes": [
        {
            "Mode": "CICM_GENERAL", 
            "BlueChannelWeight": 1000,
            "GreenChannelWeight": 0,
            "RedChannelWeight": 0
        },
        {
            "Mode": "CICM_GENERAL", 
            "BlueChannelWeight": 0,
            "GreenChannelWeight": 500,
            "RedChannelWeight": 500
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
`ColourConversionModes` has no influence on the Accuracy.

-->
## Candidate Argument List
- [BlueChannelWeight](#bluechannelweight)
- [GreenChannelWeight](#greenchannelweight)
- [RedChannelWeight](#redchannelweight)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)
 
### BlueChannelWeight 
Sets the weight value of Blue Colour Channel used for converting a colour image to a grayscale image.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [-1, 1000] | -1 | CICM_GENERAL |         

**Remarks**         
- -1: The weight value will be set automatically by the SDK. 
- -1 will be used if the sum of BlueChannelWeight, GreenChannelWeight and RedChannelWeight is not 1000.

### GreenChannelWeight 
Sets the weight value of Green Colour Channel used for converting a colour image to a grayscale image.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [-1, 1000] | -1 | CICM_GENERAL |         

**Remarks**         
- -1: The weight value will be set automatically by the SDK. 
- -1 will be used if the sum of BlueChannelWeight, GreenChannelWeight and RedChannelWeight is not 1000.


### RedChannelWeight 
Sets the weight value of Red Colour Channel used for converting a colour image to a grayscale image.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [-1, 1000] | -1 | CICM_GENERAL |         

**Remarks**         
- -1: The weight value will be set automatically by the SDK. 
- -1 will be used if the sum of BlueChannelWeight, GreenChannelWeight and RedChannelWeight is not 1000.


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
- [How to configure ColourConversionModes]({{ site.scenario_settings }}image-scale-and-colour-conversion.html#convert-colour-image-to-grayscale)
