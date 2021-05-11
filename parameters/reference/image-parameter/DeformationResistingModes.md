---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - DeformationResistingModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - DeformationResistingModes.
keywords: DeformationResistingModes, ImageParameter, image process control parameters, parameter reference, parameter
needAutoGenerateSidebar: false
---
# ImageParameter Object | DeformationResistingModes

## DeformationResistingModes  

### Mode Properties
`DeformationResistingModes` is a parameter for setting the mode for deformation resisting. It consisits of one or more `DeformationResistingMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) array* | "DRM_SKIP"<br>"DRM_AUTO"<br>"DRM_GENERAL" | ["DRM_SKIP", "DRM_SKIP", "DRM_SKIP", "DRM_SKIP", "DRM_SKIP", "DRM_SKIP", "DRM_SKIP", "DRM_SKIP"] |

- **See also**:   
    [`DeformationResistingMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode)
    
#### Mode Arguments
- [Level](#level)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

##### Level 
Sets the effort level used for deformation resisting. **Not supported yet.**


| Value Type | Value Range | Default Value | 
| ---------- | ----------- | ------------- |
| *int* | [1, 9] | 5 |         

- **Remarks**     
  A larger value means the library will take more effort to resist deformation.


##### LibraryFileName 
Sets the file name of the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing file name. | "" | All `DeformationResistingMode` items except DRM_SKIP and DRM_AUTO |         


- **Remarks**     
  The library must be in the same place with Dynamsoft Barcode Reader Library.


##### LibraryParameters 
Sets the parameters passed to the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing parameters. | "" | All `DeformationResistingMode` items except DRM_SKIP and DRM_AUTO |         


### Setting Methods

#### As JSON Parameter
`DeformationResistingModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority the mode for deformation resisting. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | DeformationResistingModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "DeformationResistingModes": [
        {
            "Mode": "DRM_GENERAL",
            "Level": 5
        }
    ]
}
```


&nbsp;



#### As `PublicRuntimeSettings` Member
`DeformationResistingModes` is a [`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) array defines in `furtherModes` which is a struct member of `PublicRuntimeSettings`. It is used for setting the modes and the priority for deformation resisting. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html)->[`furtherModes`]({{ site.structs }}PublicRuntimeSettings.html#furthermodes) | [`deformationResistingModes`]({{ site.structs }}FurtherModes.html#deformationresistingmodes) | [`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode)[8] |

**Remarks**   
[`GetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).

**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`FurtherModes` Struct]({{ site.structs }}FurtherModes.html)
- [`DeformationResistingMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode)

