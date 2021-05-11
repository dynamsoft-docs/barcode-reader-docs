---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - DeblurModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - DeblurModes.
keywords: DeblurModes, ImageParameter, image process control parameters, parameter reference, parameter
needAutoGenerateSidebar: false
---

# ImageParameter Object | DeblurModes


## DeblurModes  

### Mode Properties
`DeblurModes` is a parameter for setting the mode for deblurring. It consisits of one or more `DeblurMode` items. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *[`DeblurMode`]({{ site.enumerations }}parameter-mode-enums.html#deblurmode) array* | "DM_SKIP"<br>"DM_DIRECT_BINARIZATION"<br>"DM_THRESHOLD_BINARIZATION"<br>"DM_GRAY_EQUALIZATION"<br>"DM_SMOOTHING"<br>"DM_MORPHING"<br>"DM_DEEP_ANALYSIS"<br>"DM_SHARPENING" | ["DM_SKIP", "DM_SKIP", "DM_SKIP", "DM_SKIP", "DM_SKIP", "DM_SKIP", "DM_SKIP", "DM_SKIP"] |

- **See also**:   
    [`DeblurMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#deblurmode)
    
#### Mode Arguments
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

##### LibraryFileName 
Sets the file name of the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing file name. | "" | All `DeblurMode` items except DM_SKIP |         


- **Remarks**     
  The library must be in the same place with Dynamsoft Barcode Reader Library.


##### LibraryParameters 
Sets the parameters passed to the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing parameters. | "" | All `DeblurMode` items except DM_SKIP |         


### Setting Methods

#### As JSON Parameter
`DeblurModes` as a JSON parameter is a JSON Object array. Each JSON Object has a key `Mode` for setting the mode. The array index decides the priority of the mode for deblurring. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | DeblurModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "DeblurModes": [
        {
            "Mode": "DM_DIRECT_BINARIZATION"
        }
    ]
}
```


&nbsp;



#### As `PublicRuntimeSettings` Member
`DeblurModes` is a [`DeblurMode`]({{ site.enumerations }}parameter-mode-enums.html#deblurmode) array defines in `PublicRuntimeSettings`. It is used for setting the modes and the priority for deblurring. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html) | [`deblurModes`]({{ site.structs }}PublicRuntimeSettings.html#deblurmodes) | [`DeblurMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode)[10] |

**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`DeblurMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#deblurmode)

