---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - BarcodeColourModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - BarcodeColourModes.
keywords: BarcodeColourModes, ImageParameter, image process control parameters, parameter reference, parameter
needAutoGenerateSidebar: false
---

# ImageParameter Object | BarcodeColourModes

## BarcodeColourModes  

### Mode Properties
`BarcodeColourModes` is a parameter for setting the mode Sets for the barcode colour mode used to process the barcode zone. It consisits of one or more `BarcodeColourMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`BarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode) array* | "BICM_SKIP"<br>"BICM_DARK_ON_LIGHT"<br>"BICM_LIGHT_ON_DARK"<br>"BICM_DARK_ON_DARK"<br>"BICM_LIGHT_ON_LIGHT"<br>"BICM_DARK_LIGHT_MIXED"<br>"BICM_DARK_ON_LIGHT_DARK_SURROUNDING" | ["BICM_DARK_ON_LIGHT", "BICM_SKIP", "BICM_SKIP", "BICM_SKIP", "BICM_SKIP", "BICM_SKIP", "BICM_SKIP", "BICM_SKIP"] |

- **See also**:   
    [`BarcodeColourMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode)
    
#### Mode Arguments
- [LightReflection](#lightreflection)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)
 
##### LightReflection 
Sets if there is light reflection on the barocde zone.


| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 1] | 1 | "BICM_DARK_ON_LIGHT"<br>"BICM_LIGHT_ON_DARK"<br>"BICM_DARK_ON_DARK"<br>"BICM_LIGHT_ON_LIGHT"<br>"BICM_DARK_LIGHT_MIXED"<br>"BICM_DARK_ON_LIGHT_DARK_SURROUNDING" |         

- **Remarks**     
  0: no light reflection.   
  1: has light reflection.


##### LibraryFileName 
Sets the file name of the library to load dynamically.

| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing the file name. | "" | All `BarcodeColourMode` items except BICM_SKIP |         


- **Remarks**     
  - The library must be in the same place with Dynamsoft Barcode Reader Library.


##### LibraryParameters 
Sets the parameters passed to the library to load dynamically.

| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing parameters. | "" | All `BarcodeColourMode` items except BICM_SKIP |         


### Setting Methods

#### As JSON Parameter
`BarcodeColourModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority of the modes. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | BarcodeColourModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "BarcodeColourModes": [
        {
            "Mode": "BICM_DARK_ON_LIGHT",
            "LightReflection": 0
        }
    ]
}
```


&nbsp;



#### As `PublicRuntimeSettings` Member
`BarcodeColourModes` is a [`BarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode) array defines in `furtherModes` which is a struct member of `PublicRuntimeSettings`. It is used for setting the modes and the priority. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html)->[`furtherModes`]({{ site.structs }}PublicRuntimeSettings.html#furthermodes) | [`barcodeColourModes`]({{ site.structs }}FurtherModes.html#barcodecolourmodes) | [`BarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode)[8] |

**Remarks**   
[`GetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).


**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`FurtherModes` Struct]({{ site.structs }}FurtherModes.html)
- [`BarcodeColourMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode)
