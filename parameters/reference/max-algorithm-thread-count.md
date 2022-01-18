---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for MaxAlgorithmThreadCount
description: This page shows Dynamsoft Barcode Reader Parameter Reference for MaxAlgorithmThreadCount.
keywords: MaxAlgorithmThreadCount, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# MaxAlgorithmThreadCount 

`MaxAlgorithmThreadCount` is a parameter to specify the number of threads the image processing algorithm will use to decode barcodes. It is defined as below:

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *int* | [1, 4] | 4 |

    
## Setting Methods
`MaxAlgorithmThreadCount` is supported to be set through `RuntimeSetting` or JSON template.

### As `PublicRuntimeSettings` Member
`MaxAlgorithmThreadCount` can be set dynamically during runtime as a member of `PublicRuntimeSettings` struct.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->maxAlgorithmThreadCount = 1;
reader->UpdateRuntimeSettings(pSettings);
delete pSettings;
//...other codes
```


**See Also**      
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)


### As JSON Parameter
`MaxAlgorithmThreadCount` as a JSON parameter is a number value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| MaxAlgorithmThreadCount | A number from [1, 4] |


**JSON Example**   
```
{
    "MaxAlgorithmThreadCount": 1
}
```


<!--
## Impacts on Performance
### Speed
Setting `MaxAlgorithmThreadCount` to a appropriate number based on the CPU core number may speed up the process.

### Read Rate
`MaxAlgorithmThreadCount` has no influence on the Read Rate.

### Accuracy
`MaxAlgorithmThreadCount` has no influence on the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)