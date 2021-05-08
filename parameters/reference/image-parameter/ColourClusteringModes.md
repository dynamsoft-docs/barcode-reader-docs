---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - ColourClusteringModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - ColourClusteringModes.
keywords: ColourClusteringModes, ImageParameter, image process control parameters, parameter reference, parameter
needAutoGenerateSidebar: false
---

# ImageParameter Object | ColourClusteringModes


## ColourClusteringModes
**Not supported yet.**

### Mode Properties
`ColourClusteringModes` is a parameter for setting the mode for colour categorization. It consisits of one or more `ColourClusteringMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`ColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode) array* | "CCM_SKIP"<br>"CCM_AUTO"<br>"CCM_GENERAL_HSV" | ["CCM_SKIP", "CCM_SKIP", "CCM_SKIP", "CCM_SKIP", "CCM_SKIP", "CCM_SKIP", "CCM_SKIP", "CCM_SKIP"] |

- **See also**:   
    [`ColourClusteringMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode)
    
#### Mode Arguments
- [Sensitivity](#sensitivity)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)
 
##### Sensitivity 
Sets the sensitivity used for colour categorization.

| Value Type | Value Range | Default Value | 
| ---------- | ----------- | ------------- |
| *int* | [1, 9] | 5 |         

- **Remarks**     
  A higher level means less colours will be clustered as the same colour.   
  

##### LibraryFileName 
Sets the file name of the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing file name. | "" | All `ColourClusteringMode` items except CCM_SKIP and CCM_AUTO |         


- **Remarks**     
  The library must be in the same place with Dynamsoft Barcode Reader Library.


##### LibraryParameters 
Sets the parameters passed to the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing parameters. | "" | All `ColourClusteringMode` items except CCM_SKIP and CCM_AUTO |         





### Setting Methods

#### As JSON Parameter
`ColourClusteringModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority of the mode for colour categorization. Default values will be used if there is no manual setting.


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | ColourClusteringModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "ColourClusteringModes": [
        {
            "Mode": "CCM_GENERAL_HSV",
            "Sensitivity": 5
        }
    ]
}
```

&nbsp;


#### As `PublicRuntimeSettings` Member
`ColourClusteringModes` is a [`ColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode) array defines in `furtherModes` which is a struct member of `PublicRuntimeSettings`. It is used for setting the modes and the priority for colour categorization. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html)->[`furtherModes`]({{ site.structs }}PublicRuntimeSettings.html#furthermodes) | [`colourClusteringModes`]({{ site.structs }}FurtherModes.html#colourclusteringmodes) | [`ColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode)[8] |

**Remarks**   
[`GetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).

**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`FurtherModes` Struct]({{ site.structs }}FurtherModes.html)
- [`ColourClusteringMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode)
