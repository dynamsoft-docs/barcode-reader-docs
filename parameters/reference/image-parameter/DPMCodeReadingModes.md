---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - DPMCodeReadingModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - DPMCodeReadingModes.
keywords: DPMCodeReadingModes, ImageParameter, image process control parameters, parameter reference, parameter
needAutoGenerateSidebar: false
---
# ImageParameter Object | DPMCodeReadingModes

## DPMCodeReadingModes  

### Mode Properties
`DPMCodeReadingModes` is a parameter for setting the mode for DPM code reading. It consisits of one or more `DPMCodeReadingMode` items. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`DPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode) array* | "DPMCRM_SKIP"<br>"DPMCRM_AUTO"<br>"DPMCRM_GENERAL" | ["DPMCRM_SKIP", "DPMCRM_SKIP", "DPMCRM_SKIP", "DPMCRM_SKIP", "DPMCRM_SKIP", "DPMCRM_SKIP", "DPMCRM_SKIP", "DPMCRM_SKIP"] |

**See Also**    :   
    [`DPMCodeReadingMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode)
    
#### Mode Arguments
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

##### LibraryFileName 
Sets the file name of the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing file name. | "" | All `DPMCodeReadingMode` items except DPMCRM_SKIP and DPMCRM_AUTO |         


**Remarks**         
  The library must be in the same place with Dynamsoft Barcode Reader Library.


##### LibraryParameters 
Sets the parameters passed to the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing parameters. | "" | All `DPMCodeReadingMode` items except DPMCRM_SKIP and DPMCRM_AUTO |         


### Setting Methods

#### As JSON Parameter
`DPMCodeReadingModes` as a JSON parameter is a JSON Object array. Each JSON Object has a key `Mode` for setting the mode. The array index decides the priority the mode for DPM code reading. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | DPMCodeReadingModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "DPMCodeReadingModes": [
        {
            "Mode": "DPMCRM_GENERAL"
        }
    ]
}
```


&nbsp;



#### As `PublicRuntimeSettings` Member
`DPMCodeReadingModes` is a [`DPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode) array defines in `furtherModes` which is a struct member of `PublicRuntimeSettings`. It is used for setting the modes and the priority for DPM code reading. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html)->[`furtherModes`]({{ site.structs }}PublicRuntimeSettings.html#furthermodes) | [`dpmCodeReadingModes`]({{ site.structs }}FurtherModes.html#dpmcodereadingmodes) | [`DPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode)[8] |

**See Also**      
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`FurtherModes`]({{ site.structs }}FurtherModes.html)
- [`DPMCodeReadingMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode)

