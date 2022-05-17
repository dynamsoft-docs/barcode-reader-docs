---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for LocalizationModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for LocalizationModes.
keywords: LocalizationModes, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# LocalizationModes 

`LocalizationModes` is a parameter to control how to localize barcodes. It consisits of one or more modes, each mode represents a way to implement the localization.


## Candidate Mode List
- LM_CONNECTED_BLOCKS
- LM_STATISTICS
- LM_LINES
- LM_SCAN_DIRECTLY
- LM_STATISTICS_MARKS
- LM_STATISTICS_POSTAL_CODE
- LM_CENTRE

### LM_CONNECTED_BLOCKS
Localizes barcodes by searching for connected blocks. This algorithm usually gives best result and it is recommended to set ConnectedBlocks to the highest priority. This mode has the following arguments for further customizing.

- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### LM_STATISTICS
Localizes barcodes by groups of contiguous black-white regions. This is optimized for QRCode and DataMatrix. This mode has the following arguments for further customizing.

- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### LM_LINES
Localizes barcodes by searching for groups of lines. This is optimized for 1D and PDF417 barcodes. This mode has the following arguments for further customizing.

- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### LM_SCAN_DIRECTLY
Localizes barcodes quickly. This mode is recommended in interactive scenario. This mode has the following arguments for further customizing.

- [ScanStride](#scanstride)
- [ScanDirection](#scandirection)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### LM_STATISTICS_MARKS
Localizes barcodes by groups of marks.This is optimized for DPM codes. This mode has the following arguments for further customizing.

- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### LM_STATISTICS_POSTAL_CODE
Localizes barcodes by groups of connected blocks and lines.This is optimized for postal codes. This mode has the following arguments for further customizing.

- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

### LM_CENTRE
Localizes barcodes from the centre of the image. This mode has the following arguments for further customizing.

- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)
    
## Setting Methods

### As `PublicRuntimeSettings` Member
`LocalizationModes` can be set dynamically during runtime as a member of `PublicRuntimeSettings` struct, it is an array with 8 [`LocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) Enumeration items.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->localizationModes[0] = LM_SCAN_DIRECTLY;
pSettings->localizationModes[1] = LM_CONNECTED_BLOCKS;
reader->UpdateRuntimeSettings(pSettings);
reader->SetModeArgument("LocalizationModes", 0, "ScanStride", "5");
delete pSettings;
//...other codes
```


**Remarks**     
`GetModeArgument` and `SetModeArgument` need to be called for getting and setting [`Arguments`](#candidate-argument-list).


**See Also**      
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)
- [`LocalizationMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#localizationmode)
- `GetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#getmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_getmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#getmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#get_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#getmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#getmodeargument)
- `SetModeArgument:` [JavaScript]({{ site.js_api}}BarcodeReader.html#setmodeargument) \| [C]({{ site.c_methods }}parameter-and-runtime-settings-basic.html#dbr_setmodeargument) \| [C++]({{ site.cpp_methods }}parameter-and-runtime-settings-basic.html#setmodeargument) \| [.NET]({{ site.dotnet_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Python]({{ site.python_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#set_mode_argument) \| [Java]({{ site.java_api }}BarcodeReader/parameter-and-runtime-settings-basic.html#setmodeargument) \| [Java-Android]({{ site.android_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument) \| [Objective-C & Swift]({{ site.oc_api }}primary-parameter-and-runtime-settings-basic.html#setmodeargument)


### As JSON Parameter
`LocalizationModes` as a JSON parameter is a JSON Object array. Each JSON object is defined as below.   

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| Mode | Any one in Candidate Mode List as string | (Required) Specifies a mode for deformation resisting.  |
| ScanStride | A number from value range of ScanStride | (Optional) Sets the Argument [ScanStride](#scanstride). |
| ScanDirection | A number from value range of ScanDirection | (Optional) Sets the Argument [ScanDirection](#scandirection). |
| LibraryFileName | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |
| LibraryParameters | A string from value range of LibraryFileName | (Optional) Sets the Argument [LibraryFileName](#libraryfilename). |



**JSON Parameter Example**   
```
{
    "LocalizationModes": [
        {
            "Mode": "LM_SCAN_DIRECTLY", 
            "ScanStride": 5
        },
        {
            "Mode": "LM_CONNECTED_BLOCKS" 
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
`LocalizationModes` has no influence on the Accuracy.

-->
## Candidate Argument List
- [ScanStride](#scanstride)
- [ScanDirection](#scandirection)
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)
 
### ScanStride 
Sets the stride in pixels between scans when searching for barcodes.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [0, 0x7fffffff] | 0 | LM_SCAN_DIRECTLY |         

**Remarks**         
  - 0: automatically set by the library.   
  - When the set value is greater than half the width or height of current image, the actual processing is 0.  

**Performance Adaptability**        
A smaller value may improve the Read Rate but slow down the Speed. 
    
### ScanDirection 
Sets the scan direction when searching barcode.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
| *int* | [0, 2] | 0 | LM_SCAN_DIRECTLY |            

**Remarks**         
  - 0: Both vertical and horizontal direction.   
  - 1: Vertical direction.   
  - 2: Horizontal direction. 

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
- [How to use different localization modes]({{ site.scenario_settings }}how-to-set-localization-modes.html)