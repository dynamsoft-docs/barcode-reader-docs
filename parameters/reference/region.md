---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for Region
description: This page shows Dynamsoft Barcode Reader Parameter Reference for Region.
keywords: Region, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/region.html
---


# Region 

`Region` is a parameter to specify a region in where to search barcodes. It is defined with RegionTop, RegionLeft, RegionRight, RegionBottom, and RegionMeasuredByPercentage:

    
## Setting Methods
`Region` is supported to be set through `RuntimeSetting` or JSON template.

### As `PublicRuntimeSettings` Member
`Region` can be set dynamically during runtime as a member of `PublicRuntimeSettings` struct.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->region.regionTop = 25;
pSettings->region.regionLeft = 25;
pSettings->region.regionBottom = 75;
pSettings->region.regionRight = 75;
pSettings->region.regionMeasuredByPercentage = 1;
reader->UpdateRuntimeSettings(pSettings);
delete pSettings;
//...other codes
```


**See Also**      
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)


### As JSON Parameter
`Region` as a JSON parameter is a RegionDefinition Object defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| RegionDefinition | A JSON object defined as below |

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| Name | A string value representing a unique name | The name of the RegionDefinition object. |
| Top | A number from [0, 0x7fffffff] when MeasuredByPercentage=0 or [0, 100] when MeasuredByPercentage=1 | The top-most coordinate or percentage of the region. |
| Left | A number from [0, 0x7fffffff] when MeasuredByPercentage=0 or [0, 100] when MeasuredByPercentage=1 | The left-most coordinate or percentage of the region. |
| Right | A number from [0, 0x7fffffff] when MeasuredByPercentage=0 or [0, 100] when MeasuredByPercentage=1 | The right-most coordinate or percentage of the region. |
| Bottom | A number from [0, 0x7fffffff] when MeasuredByPercentage=0 or [0, 100] when MeasuredByPercentage=1 | The bottom-most coordinate or percentage of the region. |
| MeasuredByPercentage | A number from [0, 1] | Sets whether or not to use percentages to measure the Region size. |


**JSON Example**   
```
{
    "RegionDefinition": 
        {
            "Name": "RD1", 
            "Top": 25, 
            "Left": 25, 
            "Right": 75, 
            "Bottom": 75, 
            "MeasuredByPercentage": 1
        }
}
```


<!--
## Impacts on Performance
### Speed
Setting `Region` to a appropriate value may speed up the process.

### Read Rate
`Region` has no influence on the Read Rate.

### Accuracy
`Region` has no influence on the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
