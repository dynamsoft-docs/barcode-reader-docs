---
layout: default-layout
title: MinResultConfidence - Dynamsoft Barcode Reader Parameter Reference
description: This page shows Dynamsoft Barcode Reader Parameter Reference for MinResultConfidence.
keywords: MinResultConfidence, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# MinResultConfidence 

`MinResultConfidence` defines the minimum confidence of the result. It is defined as below:

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *int* | [0, 100] | 0 |

    
## Setting Methods
`MinResultConfidence` is supported to be set through `RuntimeSetting` or JSON template.

### As `PublicRuntimeSettings` Member
`MinResultConfidence` can be set dynamically during runtime as a member of `PublicRuntimeSettings` struct.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->minResultConfidence = 30;
reader->UpdateRuntimeSettings(pSettings);
delete pSettings;
//...other codes
```


**See Also**      
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)


### As JSON Parameter
`MinResultConfidence` as a JSON parameter is a number value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| MinResultConfidence | A number from [0, 100] |


**JSON Example**   
```
{
    "MinResultConfidence": 30
}
```


<!--
## Impacts on Performance
### Speed
`MinResultConfidence` has no influence on the Speed.

### Read Rate
Setting a smaller `MinResultConfidence` may improve the Read Rate.

### Accuracy
Setting a larger `MinResultConfidence` may improve the Accuracy.

-->
## Related Articles
- [Use RuntimeSettings or Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html)
- [How to filter out results]({{ site.scenario_settings }}decode-result.html)