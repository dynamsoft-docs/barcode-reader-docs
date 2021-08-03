---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - GrayscaleTransformationModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - GrayscaleTransformationModes.
keywords: GrayscaleTransformationModes, ImageParameter, image process control parameters, parameter reference, parameter
needAutoGenerateSidebar: false
---

# ImageParameter Object | GrayscaleTransformationModes


## GrayscaleTransformationModes

### Mode Properties
`GrayscaleTransformationModes` is a parameter for setting the mode for the grayscale image conversion. It consisits of one or more `GrayscaleTransformationMode` items. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`GrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode) array* | "GTM_SKIP"<br>"GTM_INVERTED"<br>"GTM_ORIGINAL" | ["GTM_ORIGINAL", "GTM_SKIP", "GTM_SKIP", "GTM_SKIP", "GTM_SKIP", "GTM_SKIP", "GTM_SKIP", "GTM_SKIP"] |

**See Also**    :   
    [`GrayscaleTransformationMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode)
    
#### Mode Arguments
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

##### LibraryFileName 
Sets the file name of the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing file name. | "" | All `GrayscaleTransformationMode` items except GTM_SKIP |         


**Remarks**         
  The library must be in the same place with Dynamsoft Barcode Reader Library.


##### LibraryParameters 
Sets the parameters passed to the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing parameters. | "" | All `GrayscaleTransformationMode` items except GTM_SKIP |         


### Setting Methods

#### As JSON Parameter
`GrayscaleTransformationModes` as a JSON parameter is a JSON Object array. ach JSON Object has a key `Mode` for setting the mode, and the array index decides the priority of the mode for the grayscale image conversion. Default values will be used if there is no manual setting.


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | GrayscaleTransformationModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "GrayscaleTransformationModes": [
        {
            "Mode": "GTM_INVERTED"
        },
        {
            "Mode": "GTM_ORIGINAL"
        }
    ]
}
```

&nbsp;


#### As `PublicRuntimeSettings` Member
`GrayscaleTransformationModes` is a [`GrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode) array defines in `furtherModes` which is a struct member of `PublicRuntimeSettings`. It is used for setting the modes and the priority for the grayscale image conversion. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html)->[`furtherModes`]({{ site.structs }}PublicRuntimeSettings.html#furthermodes) | [`grayscaleTransformationModes`]({{ site.structs }}FurtherModes.html#grayscaletransformationmodes) | [`GrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode)[8] |

**See Also**      
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`FurtherModes` Struct]({{ site.structs }}FurtherModes.html)
- [`GrayscaleTransformationMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode)
