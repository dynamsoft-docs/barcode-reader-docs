---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for MinResultConfidence
description: This page shows Dynamsoft Barcode Reader Parameter Reference for MinResultConfidence.
keywords: MinResultConfidence, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/min-result-confidence.html
---


# MinResultConfidence 

`MinResultConfidence` is a parameter to specify the minimum confidence of the result. It is defined as below:

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *int* | [0, 100] | 30 |

    
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
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [How to filter out results]({{ site.scenario_settings }}decode-result.html)
