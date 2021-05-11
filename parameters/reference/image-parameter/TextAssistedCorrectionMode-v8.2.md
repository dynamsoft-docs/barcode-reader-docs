---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - TextAssistedCorrectionMode
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - TextAssistedCorrectionMode.
keywords: TextAssistedCorrectionMode, ImageParameter, image process control parameters, parameter reference, parameter 
needAutoGenerateSidebar: false
---
# ImageParameter Object | TextAssistedCorrectionMode



## TextAssistedCorrectionMode  

**Not support yet.**   



### Mode Properties
`TextAssistedCorrectionMode` is a parameter for setting the mode of text assisted correction for barcode decoding. Each mode has several arguments for setting the correction options.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string* or *[`TextAssistedCorrectionMode`]({{ site.enumerations }}parameter-mode-enums.html#textassistedcorrectionmode) enum* | "TACM_SKIP"<br>"TACM_AUTO"<br>"TACM_VERIFYING"<br>"TACM_VERIFYING_PATCHING" | "TACM_VERIFYING" |

- **See also**:   
    [`TextAssistedCorrectionMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#textassistedcorrectionmode)
    
#### Mode Arguments
- [BottomTextPercentageSize](#bottomtextpercentagesize)
- [LeftTextPercentageSize](#lefttextpercentagesize)
- [RightTextPercentageSize](#righttextpercentagesize)
- [TopTextPercentageSize](#toptextpercentagesize)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)
 
##### BottomTextPercentageSize 
Sets the percentage of the bottom accompanying text zone comparing to the barcode zone.


| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 255] | 0 | "TACM_VERIFYING"<br>"TACM_VERIFYING_PATCHING" |         

- **Remarks**     
  255: The accompanying text zone will be detected automatically by the SDK.


##### LeftTextPercentageSize 
Sets the percentage of the left accompanying text zone comparing to the barcode zone.


| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 255] | 0 | "TACM_VERIFYING"<br>"TACM_VERIFYING_PATCHING" |         

- **Remarks**     
  255: The accompanying text zone will be detected automatically by the SDK.


##### RightTextPercentageSize 
Sets the percentage of the right accompanying text zone comparing to the barcode zone.


| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 255] | 0 | "TACM_VERIFYING"<br>"TACM_VERIFYING_PATCHING" |         

- **Remarks**     
  255: The accompanying text zone will be detected automatically by the SDK.


##### TopTextPercentageSize 
Sets the percentage of the top accompanying text zone comparing to the barcode zone.


| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 255] | 0 | "TACM_VERIFYING"<br>"TACM_VERIFYING_PATCHING" |         

- **Remarks**     
  255: The accompanying text zone will be detected automatically by the SDK.


##### LibraryFileName 
Sets the file name of the library to load dynamically.

| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing file name. | "" | All `TextAssistedCorrectionMode` items except TACM_SKIP and TACM_AUTO |         


- **Remarks**     
  - The library must be in the same place with Dynamsoft Barcode Reader Library.


##### LibraryParameters 
Sets the parameters passed to the library to load dynamically.

| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing parameters. | "" | All `TextAssistedCorrectionMode` items except TACM_SKIP and TACM_AUTO |         



### Setting Methods

#### As JSON Parameter
`TextAssistedCorrectionMode` as a JSON parameter is a JSON Object with several keys for setting text assisted correction mode and the value of [arguments](#mode-arguments) correspondingly. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | TextAssistedCorrectionMode | *JSON Object* | 

**Json Parameter Example**   
```
{
    "TextAssistedCorrectionMode": {
            "Mode": "TACM_VERIFYING",
            "BottomTextPercentageSize": 50, 
            "LeftTextPercentageSize": 50,
            "RightTextPercentageSize": 50, 
            "TopTextPercentageSize": 50
        }
}
```


&nbsp;



#### As `PublicRuntimeSettings` Member
`TextAssistedCorrectionMode` is a [`TextAssistedCorrectionMode`]({{ site.enumerations }}result-enums.html#textassistedcorrectionmode) enum type defines in `furtherModes` which is a struct member of `PublicRuntimeSettings`. It is used for setting the mode of text assisted correction for barcode decoding. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html)->[`furtherModes`]({{ site.structs }}PublicRuntimeSettings.html#furthermodes) | [`textAssistedCorrectionMode`]({{ site.structs }}FurtherModes.html#textassistedcorrectionmode) | [`textAssistedCorrectionMode`]({{ site.enumerations }}parameter-mode-enums.html#textassistedcorrectionmode) |


**Remarks**   
[`GetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).


**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`FurtherModes` Struct]({{ site.structs }}FurtherModes.html)
- [`textAssistedCorrectionMode` Enumeration]({{ site.enumerations }}result-enums.html#textassistedcorrectionmode)

