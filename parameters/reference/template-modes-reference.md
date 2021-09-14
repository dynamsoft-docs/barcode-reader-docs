---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - BinarizationModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - BinarizationModes.
keywords: BinarizationModes, ImageParameter, image process control parameters, parameter reference, parameter
needAutoGenerateSidebar: false
---


# ModesParameterName 
Descriptions for ModesParameterName;

## Candidate Mode List
- Mode1
- ...ModeN

### Mode1
Description for Mode1; 
This mode can be used for ...(image scenario)   
This mode has the following arguments for further customizing: [Argument](), ...

## Setting Methods

### As `PublicRuntimeSettings` Member
Description.
P.S. C++ language as example.

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------- | ---------- | ---------- | ---------- |
|  |  |  | | |

**Code Snippet**

**Remarks**     


**See Also**      
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`ModesParameterName` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#)
- [`SetModeArgument`]()
- [`GetModeArgument`]()


### As JSON Parameter
`BinarizationModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority the mode  for binarization. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | BinarizationModes | *JSON Object Array* | 

**JSON Parameter Example**   
```
{
    "BinarizationModes": [
        {
            "Mode": "BM_LOCAL_BLOCK",
            "BlockSizeX": 5,
            "BlockSizeY": 5,
        }
    ]
}
```





## Impacts on Performance     
### Speed
The SDK will loop the setting modes one by one until find as many barcodes as `ExpectedBarcodesCount` specified or timeout. The more modes you set, the more time the process may take. Setting an appropriate mode first in order or setting only necessary modes may speed up the process.

### Read Rate
Setting more xxx modes along with different arguments may improve the Read Rate. 

### Accuracy
`ModesParameterName` has no influence on the Accuracy.

## Candidate Argument List
- [Argument1](#argument1)
- [...ArgumentN](#)
 
### Argument1 
Description for Argument1.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | --------- |
|  |  |  |  |         

## Related Articles
- [How to configure the ModesParameterName parameters]({{ site.scenario_settings }}how-to-set-xxx-modes.html)  
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)