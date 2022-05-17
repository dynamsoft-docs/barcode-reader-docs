---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - AccompanyingTextRecognitionModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - AccompanyingTextRecognitionModes.
keywords: AccompanyingTextRecognitionModes, ImageParameter, image process control parameters, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---

# ImageParameter Object - Image Process Control Parameters

## AccompanyingTextRecognitionModes  

### Mode Properties

`AccompanyingTextRecognitionModes` is a parameter for setting the mode to recognize accompanying text. It consists of one or more `AccompanyingTextRecognitionMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`AccompanyingTextRecognitionMode`]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode) array* | "ATRM_SKIP"<br>"ATRM_GENERAL" | ["ATRM_SKIP", "ATRM_SKIP", "ATRM_SKIP", "ATRM_SKIP", "ATRM_SKIP", "ATRM_SKIP", "ATRM_SKIP", "ATRM_SKIP"] |

- **See also**:
    [`AccompanyingTextRecognitionMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode)

#### Mode Arguments

- [RegionBottom](#regionbottom)
- [RegionLeft](#regionleft)
- [RegionRight](#regionright)
- [RegionTop](#regiontop)

If [RegionBottom](#regionbottom), [RegionLeft](#regionleft), [RegionRight](#regionright) and [RegionTop](#regiontop) are all equal to 0, the accompanying text zone will be detected automatically by the SDK.

##### RegionBottom

Specifies the y-coordinate of the bottom-right corner of the region in percentage. This value is relative to the top-left corner of the barcode.

| Value Type | Value Range | Default Value | Vaild Modes |
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-255, 255] | 0 | "ATRM_GENERAL" |

##### RegionLeft

Specifies the x-coordinate of the top-left corner of the region in percentage. This value is relative to the top-left corner of the barcode.

| Value Type | Value Range | Default Value | Vaild Modes |
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-255, 255] | 0 | "ATRM_GENERAL" |  

##### RegionRight

Specifies the x-coordinate of the bottom-right corner of the region in percentage. This value is relative to the top-left corner of the barcode.

| Value Type | Value Range | Default Value | Vaild Modes |
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-255, 255] | 0 | "ATRM_GENERAL" |  

##### RegionTop

Specifies the y-coordinate of the top-left corner of the region in percentage. This value is relative to the top-left corner of the barcode.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-255, 255] | 0 | "ATRM_GENERAL" |  

### Setting Methods

#### As JSON Parameter

`AccompanyingTextRecognitionModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority the mode to recognize accompanying text. Default values will be used if there is no manual setting.

| Json Object | Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | AccompanyingTextRecognitionModes | *JSON Object Array* |

**JSON Parameter Example**

```json
{
    "AccompanyingTextRecognitionModes": [
        {
            "Mode": "ATRM_GENERAL",
            "RegionBottom": 50, 
            "RegionLeft": 50,
            "RegionRight": 50, 
            "RegionTop": 50
        }
]
}
```

&nbsp;

#### As `PublicRuntimeSettings` Member

`AccompanyingTextRecognitionModes` is a [`AccompanyingTextRecognitionMode`]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode) array defines in `furtherModes` which is a struct member of `PublicRuntimeSettings`. It is used for setting the modes and the priority to recognize accompanying text. Default value will be used if there is no manual setting.

| Struct | Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html)->[`furtherModes`]({{ site.structs }}PublicRuntimeSettings.html#furthermodes) | [`accompanyingTextRecognitionModes`]({{ site.structs }}FurtherModes.html#accompanyingtextrecognitionmodes) | [`AccompanyingTextRecognitionMode`]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode)[8] |

**Remark**

[`GetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).

**See Also**

- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`FurtherModes` Struct]({{ site.structs }}FurtherModes.html)
- [`AccompanyingTextRecognitionMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode)
