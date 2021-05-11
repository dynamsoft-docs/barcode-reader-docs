---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - TextFilterModes 
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - TextFilterModes.
keywords: TextFilterModes, ImageParameter, image process control parameters, parameter reference, parameter 
needAutoGenerateSidebar: false
---
# ImageParameter Object | TextFilterModes

## TextFilterModes  

### Mode Properties
`TextFilterModes` is a parameter for setting the mode for text filter. It consists of one or more `TextFilterMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`TextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode) array* | "TFM_SKIP"<br>"TFM_AUTO"<br>"TFM_GENERAL_CONTOUR" | ["TFM_GENERAL_CONTOUR", "TFM_SKIP", "TFM_SKIP", "TFM_SKIP", "TFM_SKIP", "TFM_SKIP", "TFM_SKIP", "TFM_SKIP"] |

- **See also**:   
    [`TextFilterMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode)
    
#### Mode Arguments
- [MinImageDimension](#minimagedimension)
- [Sensitivity](#sensitivity)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)
 
##### MinImageDimension 
Sets the minimum image dimension (in pixels) to filter the text.


| Value Type | Value Range | Default Value | 
| ---------- | ----------- | ------------- |
| *int* | [65536, 0x7fffffff] | 65536 |         

- **Remarks**     
  If the image dimension is larger than the given value, the library will enable the text filtering feature. Otherwise, it will skip this step when doing barcode recognition. The feature can speed up the recognition process.

##### Sensitivity 
Sets the sensitivity used for text filtering.

| Value Type | Value Range | Default Value | 
| ---------- | ----------- | ------------- |
| *int* | [0, 9] | 0 |         

- **Remarks**     
  - 0: automatically set by the library.   
  - A larger value means the library will take more effort to filter text.


##### LibraryFileName 
Sets the file name of the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing file name. | "" | All `TextFilterMode` items except TFM_SKIP and TFM_AUTO |         


- **Remarks**     
  The library must be in the same place with Dynamsoft Barcode Reader Library.


##### LibraryParameters 
Sets the parameters passed to the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing parameters. | "" | All `TextFilterMode` items except TFM_SKIP and TFM_AUTO |         


### Setting Methods

#### As JSON Parameter
`TextFilterModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority the mode for text filter. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | TextFilterModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "TextFilterModes": [
        {
            "Mode": "TFM_GENERAL_CONTOUR",
            "MinImageDimension":262144,
            "Sensitivity": 5
        }
    ]
}
```


&nbsp;



#### As `PublicRuntimeSettings` Member
`TextFilterModes` is a [`TextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode) array defines in `furtherModes` which is a struct member of `PublicRuntimeSettings`. It is used for setting the modes and the priority for text filter. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html)->[`furtherModes`]({{ site.structs }}PublicRuntimeSettings.html#furthermodes) | [`textFilterModes`]({{ site.structs }}FurtherModes.html#textfiltermodes) | [`TextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode)[8] |


**Remarks**   
[`GetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).


**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`FurtherModes` Struct]({{ site.structs }}FurtherModes.html)
- [`TextFilterMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode)


