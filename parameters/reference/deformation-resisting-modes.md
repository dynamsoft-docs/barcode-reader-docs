---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for DeformationResistingModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for DeformationResistingModes.
keywords: DeformationResistingModes, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/deformation-resisting-modes.html
---


# DeformationResistingModes 

`DeformationResistingModes` describes how to handle distorted and deformed barcodes. It consists of one or more modes, each mode representing a different way to implement the deformation resistance algorithm.

## Candidate Mode List

- DRM_GENERAL
- DRM_BROAD_WARP
- DRM_LOCAL_REFERENCE
- DRM_DEWRINKLE
- DRM_AUTO

### DRM_GENERAL

Resists deformation using the general algorithm. This mode has the following arguments for further customizing.

- [Level](#level)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### DRM_BROAD_WARP

Resists deformation when the barcode is warped gently. This mode has the following arguments for further customizing.

- [BinarizationMode](#binarizationmode)
- [GrayscaleEnhancementMode](#grayscaleenhancementmode)

### DRM_LOCAL_REFERENCE

Resists deformation for barcodes with minor deformation in local modules. This mode has the following arguments for further customizing.

- [BinarizationMode](#binarizationmode)
- [GrayscaleEnhancementMode](#grayscaleenhancementmode)

### DRM_DEWRINKLE

Resists deformation for barcodes on a wrinkled surface. This mode has the following arguments for further customizing.

- [BinarizationMode](#binarizationmode)
- [GrayscaleEnhancementMode](#grayscaleenhancementmode)

### DRM_AUTO

Lets the library choose a mode automatically.

## Setting Methods

### As `PublicRuntimeSettings` Member

`DeformationResistingModes` can be set dynamically during runtime as a member of `FurtherModes`, which is a member of `PublicRuntimeSettings` struct, it is an array with 8 [`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) Enumeration items.

**Code Snippet in C++**

```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->deformationResistingModes[0] = DRM_GENERAL;
reader->UpdateRuntimeSettings(pSettings);
reader->SetModeArgument("DeformationResistingModes", 0, "Level", "1");
delete pSettings;
//...other codes
```

**Remarks**  
`GetModeArgument` and `SetModeArgument` need to be called for getting and setting [`Arguments`](#candidate-argument-list).

**See Also**  

- `FurtherModes:` [C]({{ site.structs }}FurtherModes.html?src=c) \| [C++]({{ site.structs }}FurtherModes.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/FurtherModes.html) \| [Java]({{ site.java_api }}class/FurtherModes.html) \| [Java-Android]({{ site.android_api }}auxiliary-FurtherModes.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iFurtherModes.html)
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)
- `DeformationResistingMode Enumeration:` [JavaScript]({{ site.js_enumerations }}EnumDeformationResistingMode.html) \| [C]({{ site.c_cpp_enumerations }}parameter-mode-enums.html?src=c#deformationresistingmode) \| [C++]({{ site.c_cpp_enumerations }}parameter-mode-enums.html?src=cpp#deformationresistingmode) \| [.NET]({{ site.dotnet_enumerations }}parameter-mode-enums.html#deformationresistingmode)) \| [Python]({{ site.python_enumerations }}parameter-mode-enums.html#deformationresistingmode) \| [Java]({{ site.java_enumerations }}parameter-mode-enums.html#deformationresistingmode)) \| [Java-Android]({{ site.mobile_enumerations }}deformation-resisting-mode.html?lang=android)) \| [Objective-C & Swift]({{ site.mobile_enumerations }}deformation-resisting-mode.html?lang=objc,swift))
- `GetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#getmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_getmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#get_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument)
- `SetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#setmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_setmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#set_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument)

### As JSON Parameter

`DeformationResistingModes` as a JSON parameter is a JSON Object array. Each JSON object is defined as below.

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| Mode | Any one in Candidate Mode List as string | (Required) Specifies a mode for deformation resisting.  |
| Level | A number from value range of Level | (Optional) Sets the Argument [Level](#level). |
| GrayscaleEnhancementMode | A JSON object defined as GrayscaleEnhancementMode | (Optional) Sets the Argument [GrayscaleEnhancementMode](#grayscaleenhancementmode). |
| BinarizationMode | A JSON object defined as BinarizationMode | (Optional) Sets the Argument [BinarizationMode](#binarizationmode). |
| LibraryFileName | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |
| LibraryParameters | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |

**JSON Parameter Example**

```json
{
    "DeformationResistingModes": [
        {
            "Mode": "DRM_GENERAL", 
            "Level": 1
        },
        {
            "Mode": "DRM_DEWRINKLE",
            "GrayscaleEnhancementMode":{
                "Mode": "GEM_SHARPEN_SMOOTH", 
                "SmoothBlockSizeX": 3, 
                "SmoothBlockSizeY": 3, 
                "SharpenBlockSizeX": 3, 
                "SharpenBlockSizeY": 3 
            },
            "BinarizationMode":{
                "Mode": "BM_LOCAL_BLOCK", 
                "BlockSizeX": 3, 
                "BlockSizeY": 3
            }
        }
    ]
}
```

<!--
## Impacts on Performance
### Speed
The SDK will loop the setting modes one by one until find as many barcodes as `ExpectedBarcodesCount` specified or timeout. The more modes you set, the more time the process may take. Setting an appropriate mode first in order or setting only necessary modes may speed up the process.

### Read Rate
Setting more modes along with different arguments may improve the Read Rate. 

### Accuracy
`DeformationResistingModes` has no influence on the Accuracy.

-->
## Candidate Argument List

- [BinarizationMode](#binarizationmode)
- [GrayscaleEnhancementMode](#grayscaleenhancementmode)
- [Level](#level)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### BinarizationMode

Sets the binarization process used for deformation resisting. It is a JSON object defined as below.

| Key Name | Value Type | Value Range | Default Value |  Description |
| -------- | ---------- | ----------- | ------------- |------------- |
| Mode | *string* | `BM_LOCAL_BLOCK`<br>`BM_THRESHOLD` | `BM_LOCAL_BLOCK` | (Required) Sets a binarization mode. |
| BlockSizeX | *int* | [0, 1000] | 0 | (Optional) Sets the horizontal block size for the binarization process.<br>Valid when mode is `BM_LOCAL_BLOCK`.<br>0: The value will be set automatically by the SDK. |
| BlockSizeY | *int* | [0, 1000] | 0 | (Optional) Sets the vertical block size for the binarization process.<br>Valid when mode is `BM_LOCAL_BLOCK`.<br>0: The value will be set automatically by the SDK. |
| EnableFillBinaryVacancy | *int* | [0, 1] | 1 | (Optional) Sets whether to enable binary vacancy filling.<br>Valid when mode is `BM_LOCAL_BLOCK`.<br>0: disable<br>1: enable |
| ThresholdCompensation | *int* | [-255, 255]<br>or -10000 | 10 | (Optional) Sets the constant subtracted from the mean or weighted mean used for calculating the threshold.<br>Valid when mode is `BM_LOCAL_BLOCK`.<br>-10000: The library may try multiple values for current process. |
| BinarizationThreshold | *int* | [-1, 255] | -1 | (Optional) Sets the binarization threshold.<br>Valid when mode is `BM_THRESHOLD`.<br>-1: The value will be set automatically by the SDK. |
| MorphOperation | *string* | `Erode`<br>`Dilate`<br>`Open`<br>`Close` | `Close` | (Optional) Sets the morph operation for the morphology process.<br>Valid when mode is `BM_LOCAL_BLOCK` or `BM_THRESHOLD`. |
| MorphShape | *string* | `Rectangle`<br>`Cross`<br>`Ellipse` | `Optional` | (Optional) Sets the morph shape for the morphology process.<br>Valid when mode is `BM_LOCAL_BLOCK` or `BM_THRESHOLD`. |
| MorphOperationKernelSizeX | *int* | [-1, 1000]  | -1 | (Optional) Sets the horizontal kernel size for the morphology process.<br>Valid when mode is `BM_LOCAL_BLOCK` or `BM_THRESHOLD`.<br>- 0: The value will be set automatically by the SDK.<br>-1: Skip the morph operation. |
| MorphOperationKernelSizeY | *int* | [-1, 1000]  | -1 | (Optional) Sets the vertical kernel size for the morphology process.<br>Valid when mode is `BM_LOCAL_BLOCK` or `BM_THRESHOLD`.<br>- 0: The value will be set automatically by the SDK.<br>-1: Skip the morph operation. |

### GrayscaleEnhancementMode

Sets the process used to enhance the quality of the grayscale image for deformation resisting. It is a JSON object defined as below.

| Key Name | Value Type | Value Range | Default Value |  Description |
| -------- | ---------- | ----------- | ------------- |------------- |
| Mode | *string* | `GEM_GENERAL`<br>`GEM_GRAY_EQUALIZE`<br>`GEM_GRAY_SMOOTH`<br>`GEM_SHARPEN_SMOOTH` | `GEM_GENERAL` | (Required) Sets a grayscale enhancement mode. |
| Sensitivity | *int* | [1, 9] | 5 | (Optional) Sets the sensitivity to perform the equalization process.<br>Valid when mode is `GEM_GRAY_EQUALIZE`.<br>A larger value means a higher possibility that gray equalization will be activated. |
| SmoothBlockSizeX | *int* | [3, 1000] | 3 | (Optional) Sets the horizontal block size (neighborhood pixel counts) for the smoothing process.<br>Valid when mode is `GEM_GRAY_SMOOTH` or `GEM_SHARPEN_SMOOTH`. |
| SmoothBlockSizeX | *int* | [3, 1000] | 3 | (Optional) Sets the vertical block size (neighborhood pixel counts) for the smoothing process.<br>Valid when mode is `GEM_GRAY_SMOOTH` or `GEM_SHARPEN_SMOOTH`. |
| SharpenBlockSizeX | *int* | [3, 1000] | 3 | (Optional) Sets the horizontal block size (neighborhood pixel counts) for the sharpening process.<br>Valid when mode is `GEM_SHARPEN_SMOOTH`. |
| SharpenBlockSizeY | *int* | [3, 1000] | 3 | (Optional) Sets the vertical block size (neighborhood pixel counts) for the sharpening process.<br>Valid when mode is `GEM_SHARPEN_SMOOTH`. |

### Level

Sets the effort level used for deformation resisting. Not supported yet.

| Value Type | Value Range | Default Value | Valid For |
| ---------- | ----------- | ------------- | --------- |
| *int* | [1, 9] | 5 | DRM_GENERAL |

**Performance Adaptability**  
A larger value may improve the Read Rate but slowdown the Speed.

### LibraryFileName

Sets the file name of the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For |
| ---------- | ----------- | ------------- | --------- |
| *string* | A string value representing file name. | "" | All modes |

**Remarks**  
The library must be in the same place with Dynamsoft Barcode Reader Library.

### LibraryParameters

Sets the parameters passed to the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For |
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing parameters. | "" | All modes |

## Related Articles

- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [How to deal with deformed barcodes]({{ site.scenario_settings }}resist-deformation.html)
