---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - ColourConversionModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - ColourConversionModes.
keywords: ColourConversionModes, ImageParameter, image process control parameters, parameter reference, parameter
needAutoGenerateSidebar: false
---


# ImageParameter Object | ColourConversionModes


## ColourConversionModes

### Mode Properties
`ColourConversionModes` is a parameter for setting the mode for converting a colour image to a grayscale image. It consisits of one or more `ColourConversionMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`ColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode) array* | "CICM_SKIP"<br>"CICM_GENERAL" | ["CICM_GENERAL", "CICM_SKIP", "CICM_SKIP", "CICM_SKIP", "CICM_SKIP", "CICM_SKIP", "CICM_SKIP", "CICM_SKIP"] |

- **See also**:   
    [`ColourConversionMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode)
    
#### Mode Arguments
- [BlueChannelWeight](#bluechannelweight)
- [GreenChannelWeight](#greenchannelweight)
- [RedChannelWeight](#redchannelweight)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)
 
##### BlueChannelWeight 
Sets the weight value of Blue Colour Channel used for converting a colour image to a grayscale image.

| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-1, 1000] | -1 | "CICM_GENERAL" |         

- **Remarks**     
  -1: The weight value will be set automatically by the SDK. 
  

##### GreenChannelWeight 
Sets the weight value of Green Colour Channel used for converting a colour image to a grayscale image.

| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-1, 1000] | -1 | "CICM_GENERAL" |         

- **Remarks**     
  -1: The weight value will be set automatically by the SDK. 


##### RedChannelWeight 
Sets the weight value of Red Colour Channel used for converting a colour image to a grayscale image.

| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-1, 1000] | -1 | "CICM_GENERAL" |         

- **Remarks**     
  -1: The weight value will be set automatically by the SDK. 


##### LibraryFileName 
Sets the file name of the library to load dynamically.

| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing file name. | "" | All `ColourConversionMode` items except CICM_SKIP |         


- **Remarks**     
  - The library must be in the same place with Dynamsoft Barcode Reader Library.


##### LibraryParameters 
Sets the parameters passed to the library to load dynamically.

| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing parameters. | "" | All `ColourConversionMode` items except CICM_SKIP |         


### Setting Methods

#### As JSON Parameter
`ColourConversionModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority of the mode for converting a colour image to a grayscale image. Default values will be used if there is no manual setting.


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | ColourConversionModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "ColourConversionModes": [
        {
            "Mode": "CICM_GENERAL"
        }
    ]
}
```

&nbsp;


#### As `PublicRuntimeSettings` Member
`ColourConversionModes` is a [`ColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode) array defines in `furtherModes` which is a struct member of `PublicRuntimeSettings`. It is used for setting the modes and the priority for converting a colour image to a grayscale image. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html)->[`furtherModes`]({{ site.structs }}PublicRuntimeSettings.html#furthermodes) | [`colourConversionModes`]({{ site.structs }}FurtherModes.html#colourconversionmodes) | [`ColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode)[8] |

**Remarks**   
[`GetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).


**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`FurtherModes` Struct]({{ site.structs }}FurtherModes.html)
- [`ColourConversionMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode)
