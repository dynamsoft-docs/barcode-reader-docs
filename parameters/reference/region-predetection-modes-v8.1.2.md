---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for RegionPredetectionModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for RegionPredetectionModes.
keywords: RegionPredetectionModes, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# RegionPredetectionModes 

`RegionPredetectionModes` is a parameter to control how to find a region of interesting. It consisits of one or more modes, each mode represents a way to find a region.


## Candidate Mode List
- RPM_AUTO
- RPM_GENERAL
- RPM_GENERAL_RGB_CONTRAST
- RPM_GENERAL_GRAY_CONTRAST
- RPM_GENERAL_HSV_CONTRAST

### RPM_AUTO
Lets the library choose a mode automatically.

### RPM_GENERAL
Takes the whole image as a region. 
This mode has the following arguments for further customizing.

### RPM_GENERAL_RGB_CONTRAST
Detects region using the general algorithm based on RGB colour contrast. 
This mode has the following arguments for further customizing.

- [MinImageDimension](#minimagedimension)
- [Sensitivity](#sensitivity)
- [SpatialIndexBlockSize](#spatialindexblocksize)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### RPM_GENERAL_GRAY_CONTRAST
Detects region using the general algorithm based on gray contrast. 
This mode has the following arguments for further customizing.

- [MinImageDimension](#minimagedimension)
- [Sensitivity](#sensitivity)
- [SpatialIndexBlockSize](#spatialindexblocksize)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### RPM_GENERAL_HSV_CONTRAST
Detects region using the general algorithm based on HSV colour contrast. 
This mode has the following arguments for further customizing.

- [AspectRatioRange](#aspectratiorange )
- [ForeAndBackgroundColours](#foreandbackgroundcolours)
- [HeightRange](#heightrange)
- [MinImageDimension](#minimagedimension)
- [RelativeBarcodeRegions](#relativebarcoderegions)
- [Sensitivity](#sensitivity)
- [SpatialIndexBlockSize](#spatialindexblocksize)
- [WidthRange](#widthrange)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)


    
## Setting Methods

### As `PublicRuntimeSettings` Member
`RegionPredetectionModes` can be set dynamically during runtime as a member of `FurtherModes`, which is a member of `PublicRuntimeSettings` struct, it is an array with 8 [`RegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode) Enumeration items.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->regionPredetectionModes[0] = RPM_GENERAL_RGB_CONTRAST;
reader->UpdateRuntimeSettings(pSettings);
reader->SetModeArgument("RegionPredetectionModes", 0, "Sensitivity", "5");
delete pSettings;
//...other codes
```


**Remarks**     
`GetModeArgument` and `SetModeArgument` need to be called for getting and setting [`Arguments`](#candidate-argument-list).


**See Also**      
- `FurtherModes:` [C]({{ site.structs }}FurtherModes.html?src=c) \| [C++]({{ site.structs }}FurtherModes.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/FurtherModes.html) \| [Java]({{ site.java_api }}class/FurtherModes.html) \| [Java-Android]({{ site.android_api }}auxiliary-FurtherModes.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iFurtherModes.html)
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)
- [`RegionPredetectionMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode)
- `GetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#getmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_getmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#get_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument)
- `SetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#setmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_setmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#set_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument)


### As JSON Parameter
`RegionPredetectionModes` as a JSON parameter is a JSON Object array. Each JSON object is defined as below.   

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| Mode | Any one in Candidate Mode List as string | (Required) Specifies a mode to find a region.  |
| AspectRatioRange | A string from value range of AspectRatioRange | (Optional) Sets the Argument [AspectRatioRange](#aspectratiorange). |
| ForeAndBackgroundColours | A string from value range of ForeAndBackgroundColours | (Optional) Sets the Argument [ForeAndBackgroundColours](#foreandbackgroundcolours). |
| HeightRange | A string from value range of HeightRange | (Optional) Sets the Argument [HeightRange](#heightrange). |
| MinImageDimension | A number from value range of MinImageDimension | (Optional) Sets the Argument [MinImageDimension](#minimagedimension). |
| RelativeBarcodeRegions | A string from value range of RelativeBarcodeRegions | (Optional) Sets the Argument [RelativeBarcodeRegions](#relativebarcoderegions). |
| Sensitivity | A number from value range of Sensitivity | (Optional) Sets the Argument [Sensitivity](#sensitivity). |
| SpatialIndexBlockSize | A number from value range of SpatialIndexBlockSize | (Optional) Sets the Argument [SpatialIndexBlockSize](#spatialindexblocksize). |
| WidthRange | A string from value range of WidthRange | (Optional) Sets the Argument [WidthRange](#widthrange). |
| LibraryFileName | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |
| LibraryParameters | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |



**JSON Parameter Example**   
```
{
    "RegionPredetectionModes": [
        {
            "Mode": "RPM_GENERAL_RGB_CONTRAST", 
            "Sensitivity": 5
        },
        {
            "Mode": "RPM_GENERAL_HSV_CONTRAST", 
            "WidthRange": "[100, 200]"
        }
    ]
}
```


<!--
## Impacts on Performance
### Speed
The SDK will loop the setting modes one by one until find as many barcodes as `ExpectedBarcodesCount` specified or timeout. The more modes you set, the more time the process may take. Setting an appropriate mode first in order or setting only necessary modes may speed up the process.
Enabling region predetection on images with obvious colour features may speed up the process.
### Read Rate
Setting more modes along with different arguments may improve the Read Rate. 

### Accuracy
`RegionPredetectionModes` has no influence on the Accuracy.

-->
## Candidate Argument List
- [AspectRatioRange](#aspectratiorange )
- [ForeAndBackgroundColours](#foreandbackgroundcolours)
- [HeightRange](#heightrange)
- [MinImageDimension](#minimagedimension)
- [RelativeBarcodeRegions](#relativebarcoderegions)
- [Sensitivity](#sensitivity)
- [SpatialIndexBlockSize](#spatialindexblocksize)
- [WidthRange](#widthrange)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)


### AspectRatioRange 
Specifies a set (or multiple sets) of aspect ratio range for filtering the predetected region.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *string* | A string value representing aspect ratio range sets. | "" | RPM_GENERAL_HSV_CONTRAST |       


**Remarks**         
  - A set of aspect ratio range is defined as [`MinAspectRatio`, `MaxAspectRatio`].
  - Using a "";"" to separate multiple sets.
  - Value range of `MinAspectRatio`, `MaxAspectRatio`: [1,10000]
  - Aspect ratio equals to *height/width\*100*, while the height and width is from the bounding rectangle of the predetected region. 



### ForeAndBackgroundColours 
Specifies a set (or multiple sets) of the foreground and background colours used for region predetection algorithm.

| Value Type | Value Range | Default Value | 
| ---------- | ----------- | ------------- |
| *string* | A string value representing one or more colour sets. | "" |         


**Remarks**         
  - This argument is **mandatory** for RPM_GENERAL_HSV_CONTRAST mode. If there is no manual setting, no region can be detected.
  - A set of the foreground and background colours is defined as [`ForegroundColour`, `BackgroundColour`, `Tolerance`]. 
  - Using a "";"" to separate multiple sets.
  - `ForegroundColour`and `BackgroundColour` are the Hue values in the HSV colour space for defining the foreground and background colours of the regions you want to predetect. The value -1 means black, gray, white.
  - `Tolerance` is the allowable deviation of the Hue value defined by `ForegroundColour`. 
  - Value range of `ForegroundColour`, `BackgroundColour`: [-1,360]
  - Value range of `Tolerance`: [0, 360]


### HeightRange 
Specifies a set (or multiple sets) of height range for filtering the predetected region.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *string* | A string value representing height range sets. | "" | RPM_GENERAL_HSV_CONTRAST |       


**Remarks**         
  - A set of height is defined as [`MinHeight`, `MaxHeight`].
  - Using a "";"" to separate multiple sets.
  - Value range of `MinHeight`, `MaxHeight`: [1, 0x7fffffff]
  - The height value is the height of the bounding rectangle of the predetected region. 


### MinImageDimension 
Sets the minimum image dimension (in pixels) to enable region pre-detection.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [16384, 0x7fffffff] | 262144 | RPM_GENERAL_HSV_CONTRAST<br>RPM_GENERAL_RGB_CONTRAST<br>RPM_GENERAL_GRAY_CONTRAST |       

**Remarks**         
  The library will enable the region pre-detection feature only when the image dimension is larger than the given value.  


### RelativeBarcodeRegions 
 Sets the barcode regions relative to the predetected region.  

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *string* | A string value representing one or more regions. | "" | RPM_GENERAL_HSV_CONTRAST |         


**Remarks**         
  - Each region need to be defined as [`Left`, `Top`, `Right`, `Bottom`, `Index`]. If you want to define multiple regions, you can use a "";"" to separate them. If there is no region defined, the library will consider the predetected regions as barcode regions.    
  - `Left`, `Top`, `Right`, `Bottom` are four percentage values relative to top-left corner of the predetected region. 
  - `Index` means the index of a specific colour set in [`ForeAndBackgroundColours`](#foreandbackgroundcolours) which the current region is applied to. If the value of `index` is set to -1, the current region will be applied to all colour sets in [`ForeAndBackgroundColours`](#foreandbackgroundcolours).
  - Value range of `Left`, `Top`, `Right`, `Bottom`: [-10000,10000]
  - Value range of `Index`: [-1, 0x7fffffff]


### Sensitivity 
Sets the sensitivity used for region predetection algorithm.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [1, 9] | 1 | RPM_GENERAL_HSV_CONTRAST<br>RPM_GENERAL_RGB_CONTRAST<br>RPM_GENERAL_GRAY_CONTRAST |        

**Remarks**         
  A larger value means the library will take more effort to detect regions.  


### SpatialIndexBlockSize 
Sets the spatial index block size used for region predetection algorithm.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [1, 32] | 5 | RPM_GENERAL_HSV_CONTRAST<br>RPM_GENERAL_RGB_CONTRAST<br>RPM_GENERAL_GRAY_CONTRAST |        

**Remarks**         
  The block size used for region predetection would be 2 to the power of N. The allowed values of SpatialIndexBlockSize is the power number (N=1,2,3...).


### WidthRange 
Specifies a set (or multiple sets) of width range for filtering the predetected region.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *string* | A string value representing width range sets. | "" | RPM_GENERAL_HSV_CONTRAST |       


**Remarks**         
  - A set of width is defined as [`MinWidth`, `MaxWidth`].
  - Using a "";"" to separate multiple sets.
  - Value range of `MinWidth`, `MaxWidth`: [1, 0x7fffffff]
  - The width value is the width of the bounding rectangle of the predetected region. 



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
- [How to configure region predetection]({{ site.scenario_settings }}how-to-use-region-predetection.html)