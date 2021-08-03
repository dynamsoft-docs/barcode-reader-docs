---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - ScaleUpModes 
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - ScaleUpModes.
keywords: ScaleUpModes, ImageParameter, image process control parameters, parameter reference, parameter
needAutoGenerateSidebar: false
---
# ImageParameter Object | ScaleUpModes



## ScaleUpModes  

### Mode Properties
`ScaleUpModes` is an array that consists of one or more `ScaleUpMode` items. Each mode represents a sampling method of scale-up. Each mode has its own arguments. The array index represents the priority of the sampling methods. A smaller index means higher priority. This API is typically used for linear and 2D barcodes with small module sizes.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`ScaleUpMode`]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode) array* | "SUM_SKIP"<br>"SUM_AUTO"<br>"SUM_LINEAR_INTERPOLATION"<br>"SUM_NEAREST_NEIGHBOUR_INTERPOLATION" | ["SUM_AUTO", "SUM_SKIP", "SUM_SKIP", "SUM_SKIP", "SUM_SKIP", "SUM_SKIP", "SUM_SKIP", "SUM_SKIP"] |

**See Also**    :   
    [`ScaleUpMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode)
    
#### Mode Arguments
- [AcuteAngleWithXThreshold](#acuteanglewithxthreshold)
- [ModuleSizeThreshold](#modulesizethreshold)
- [TargetModuleSize](#targetmodulesize)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

If the module size of the barcode is smaller than the [ModuleSizeThreshold](#modulesizethreshold) and the acute angle with X of the barcode is larger than the [AcuteAngleWithXThreshold](#acuteanglewithxthreshold), the barcode will be enlarged by a scale factor of N (N=1,2,3…) till N * modulesize >= [TargetModuleSize](#targetmodulesize).
 
##### AcuteAngleWithXThreshold 
Sets the minimum acute angle threshold for scale-up


| Value Type | Value Range | Default Value | 
| ---------- | ----------- | ------------- |
| *int* | [-1, 90] | -1 |         

**Remarks**         
  -1: means automatically set by the library.



##### ModuleSizeThreshold 
Sets the minimum module size threshold for scale-up


| Value Type | Value Range | Default Value | 
| ---------- | ----------- | ------------- |
| *int* | [0, 0x7fffffff] | 0 |         

**Remarks**         
  0: means automatically set by the library.


##### TargetModuleSize 
Sets the target module size for scale-up


| Value Type | Value Range | Default Value | 
| ---------- | ----------- | ------------- |
| *int* | [0, 0x7fffffff] | 0 |         

**Remarks**         
  0: means automatically set by the library.

##### LibraryFileName 
Sets the file name of the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing file name. | "" | All `ScaleUpMode` items except SUM_SKIP and SUM_AUTO |         


**Remarks**         
  The library must be in the same place as Dynamsoft Barcode Reader Library.



##### LibraryParameters 
Sets the parameters passed to the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing parameters. | "" | All `ScaleUpMode` items except SUM_SKIP and SUM_AUTO |         



### Setting Methods

#### As JSON Parameter
`ScaleUpModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority the mode to control the sampling methods of scale-up for linear barcodes with small module sizes. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | ScaleUpModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "ScaleUpModes": [
        {
            "Mode": "SUM_AUTO",
            "AcuteAngleWithXThreshold": 20, 
            "ModuleSizeThreshold": 1,
            "TargetModuleSize": 5
        }
]
}
```


&nbsp;



#### As `PublicRuntimeSettings` Member
`ScaleUpModes` as a member of `PublicRuntimeSettings` struct is a [`ScaleUpMode`]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode) array for setting the modes and the priority to control the sampling methods of scale-up for linear barcodes with small module sizes. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html) | [`scaleUpModes`]({{ site.structs }}PublicRuntimeSettings.html#scaleupmodes) | [`ScaleUpMode`]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode)[8] |


**Remarks**     
[`GetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).


**See Also**      
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`ScaleUpMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode)

