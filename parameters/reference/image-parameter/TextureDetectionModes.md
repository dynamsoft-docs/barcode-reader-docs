---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - TextureDetectionModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - TextureDetectionModes.
keywords: TextureDetectionModes, ImageParameter, image process control parameters, parameter reference, parameter 
needAutoGenerateSidebar: false
---
# ImageParameter Object | TextureDetectionModes



## TextureDetectionModes 

### Mode Properties
`TextureDetectionModes` is a parameter for setting the mode  for texture detection. It consisits of one or more `TextureDetectionMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`TextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode) array* | "TDM_SKIP"<br>"TDM_AUTO"<br>"TDM_GENERAL_WIDTH_CONCENTRATION" | ["TDM_GENERAL_WIDTH_CONCENTRATION", "TDM_SKIP", "TDM_SKIP", "TDM_SKIP", "TDM_SKIP", "TDM_SKIP", "TDM_SKIP", "TDM_SKIP"] |

- **See also**:   
    [`TextureDetectionMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode)
    
#### Mode Arguments
- [Sensitivity](#sensitivity)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

##### Sensitivity 
Sets the sensitivity used for texture detection.

| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [1, 9] | 5 | "TDM_GENERAL_WIDTH_CONCENTRATION" |         

- **Remarks**    
  A larger value means the library will take more effort to detect texture.
     
##### LibraryFileName 
Sets the file name of the library to load dynamically.

| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing file name. | "" | All `TextureDetectionMode` items except TDM_SKIP and TDM_AUTO|         


- **Remarks**     
  - The library must be in the same place with Dynamsoft Barcode Reader Library.


##### LibraryParameters 
Sets the parameters passed to the library to load dynamically.

| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing parameters. | "" | All `TextureDetectionMode` items except TDM_SKIP and TDM_AUTO |         



### Setting Methods

#### As JSON Parameter
`TextureDetectionModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority the mode  for texture detection. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | TextureDetectionModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "TextureDetectionModes": [
        {
            "Mode": "TDM_GENERAL_WIDTH_CONCENTRATION",
            "Sensitivity": 5
        }
    ]
}
```


&nbsp;



#### As `PublicRuntimeSettings` Member
`TextureDetectionModes` is a [`TextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode) array defines in `furtherModes` which is a struct member of `PublicRuntimeSettings`. It is used for setting the modes and the priority  for texture detection. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html)->[`furtherModes`]({{ site.structs }}PublicRuntimeSettings.html#furthermodes) | [`textureDetectionModes`]({{ site.structs }}FurtherModes.html#texturedetectionmodes) | [`TextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode)[8] |


**Remarks**   
[`GetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).


**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`FurtherModes` Struct]({{ site.structs }}FurtherModes.html)
- [`TextureDetectionMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode)
