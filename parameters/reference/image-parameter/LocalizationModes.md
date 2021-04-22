---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - LocalizationModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - LocalizationModes.
keywords: LocalizationModes, ImageParameter, image process control parameters, parameter reference, parameter
needAutoGenerateSidebar: false
---

# ImageParameter Object | LocalizationModes



## LocalizationModes   

### Mode Properties
`LocalizationModes` is a parameter for setting the mode for localization algorithms. It consisits of one or more `LocalizationMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`LocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) array* | "LM_SKIP"<br>"LM_AUTO"<br>"LM_CONNECTED_BLOCKS"<br>"LM_STATISTICS"<br>"LM_LINES"<br>"LM_SCAN_DIRECTLY"<br>"LM_STATISTICS_MARKS"<br>"LM_STATISTICS_POSTAL_CODE" | ["LM_CONNECTED_BLOCKS", "LM_SCAN_DIRECTLY", "LM_STATISTICS", "LM_LINES", "LM_SKIP", "LM_SKIP", "LM_SKIP", "LM_SKIP"] |

- **See also**:   
    [`LocalizationMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#localizationmode)
    
#### Mode Arguments
- [ScanStride](#scanstride)
- [ScanDirection](#scandirection)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)
 
##### ScanStride 
Sets the stride in pixels between scans when searching for barcodes.

| Value Type | Value Range | Default Value | 
| ---------- | ----------- | ------------- |
| *int* | [0, 0x7fffffff] | 0 |         

- **Remarks**     
  - 0: automatically set by the library.   
  - When the set value is greater than half the width or height of the current image, the actual processing is 0.  


##### ScanDirection 
Sets the scan direction when searching barcode.

| Value Type | Value Range | Default Value | 
| ---------- | ----------- | ------------- |
| *int* | [0, 2] | 0 |             

- **Remarks**     
  - 0: Both vertical and horizontal direction.   
  - 1: Vertical direction.   
  - 2: Horizontal direction. 
  

##### LibraryFileName 
Sets the file name of the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing file name. | "" | All `LocalizationMode` items except LM_SKIP and LM_AUTO |         


- **Remarks**     
  The library must be in the same place with Dynamsoft Barcode Reader Library.


##### LibraryParameters 
Sets the parameters passed to the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing parameters. | "" | All `LocalizationMode` items except LM_SKIP and LM_AUTO |         

### Setting Methods

#### As JSON Parameter
`LocalizationModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority for localization algorithms. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | LocalizationModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "LocalizationModes": [
        {
            "Mode": "LM_SCAN_DIRECTLY",
            "ScanStride": 5
        },
        {
            "Mode": "LM_STATISTICS"
        }
    ]
}
```

&nbsp;



#### As `PublicRuntimeSettings` Member
`LocalizationModes` as a member of `PublicRuntimeSettings` struct is a [`LocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) array for setting the modes and the priority for localization algorithms. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html) | [`localizationModes`]({{ site.structs }}PublicRuntimeSettings.html#localizationmodes) | [`LocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode)[8] |


**Remarks**   
[`GetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).


**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`LocalizationMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#localizationmode)
