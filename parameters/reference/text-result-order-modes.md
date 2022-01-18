---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for TextResultOrderModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for TextResultOrderModes.
keywords: TextResultOrderModes, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# TextResultOrderModes 

`TextResultOrderModes` is a parameter to specify the order of the returned text results. It consisits of one or more modes, each mode represents a way to order the result.


## Candidate Mode List
- TROM_CONFIDENCE
- TROM_POSITION
- TROM_FORMAT


### TROM_CONFIDENCE
Returns the text results in descending order by confidence.

### TROM_POSITION
Returns the text results in position order, from top to bottom, then left to right.

### TROM_FORMAT
Returns the text results in alphabetical and numerical order by barcode format string.

    
## Setting Methods

### As `PublicRuntimeSettings` Member
`TextResultOrderModes` can be set dynamically during runtime as a member of `PublicRuntimeSettings` struct, it is an array with 8 [`TextResultOrderMode`]({{ site.enumerations }}parameter-mode-enums.html#textresultordermode) Enumeration items.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->textResultOrderModes[0] = TROM_CONFIDENCE;
reader->UpdateRuntimeSettings(pSettings);
delete pSettings;
//...other codes
```


**See Also**      
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)
- [`TextResultOrderMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#textresultordermode)


### As JSON Parameter
`TextResultOrderModes` as a JSON parameter is a JSON Object array defined as below.   
| Key Name | Key Value |
| -------- | --------- | 
| TextResultOrderModes | a JSON object defined as below |


| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| Mode | Any one in Candidate Mode List as string | (Required) Specifies a mode for ordering.  |



**JSON Parameter Example**   
```
{
    "TextResultOrderModes": [
        {"Mode"":"TROM_CONFIDENCE"},
        {"Mode":"TROM_POSITION"},
        {"Mode":"TROM_FORMAT"}
    ]
}
```


<!--
## Impacts on Performance
### Speed
`TextResultOrderModes` has no influence on the Speed.

### Read Rate
`TextResultOrderModes` has no influence on the Read Rate.

### Accuracy
`TextResultOrderModes` has no influence on the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [How to filter and order results]({{ site.scenario_settings }}decode-result.html)