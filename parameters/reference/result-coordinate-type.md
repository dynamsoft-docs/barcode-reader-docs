---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ResultCoordinateType
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ResultCoordinateType.
keywords: ResultCoordinateType, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/result-coordinate-type.html
---


# ResultCoordinateType 

`ResultCoordinateType` is a parameter to specify the returned coordinate type. 

## Candidate Mode List
- RCT_PIXEL
- RCT_PERCENTAGE

### RCT_PIXEL
Returns the coordinate in pixel value.


### RCT_PERCENTAGE
Returns the coordinate as a percentage value.


## Setting Methods
`ResultCoordinateType` is supported to be set through `RuntimeSetting` or JSON template.

### As `PublicRuntimeSettings` Member
`ResultCoordinateType` can be set dynamically during runtime as a member of `PublicRuntimeSettings` struct, it is one of the [`ResultCoordinateType`]({{ site.enumerations }}result-enums.html#resultcoordinatetype) Enumeration items.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->resultCoordinateType = RCT_PERCENTAGE;
reader->UpdateRuntimeSettings(pSettings);
delete pSettings;
//...other codes
```


**See Also**      
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)
- [`ResultCoordinateType` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#resultcoordinatetype)


### As JSON Parameter
`ResultCoordinateType` as a JSON parameter is a string value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| ResultCoordinateType | Any one in ResultCoordinateType Enumeration as string |



**JSON Parameter Example**   
```
{
    "ResultCoordinateType": "RCT_PERCENTAGE" 
}
```


<!--
## Impacts on Performance
### Speed
`ResultCoordinateType` has no influence on the Speed.

### Read Rate
`ResultCoordinateType` has no influence on the Read Rate.

### Accuracy
`ResultCoordinateType` has no influence on the Accuracy.


-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [How to filter and sort results]({{ site.scenario_settings }}decode-result.html)
