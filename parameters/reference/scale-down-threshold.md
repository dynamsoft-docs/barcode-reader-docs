---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ScaleDownThreshold
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ScaleDownThreshold.
keywords: ScaleDownThreshold, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# ScaleDownThreshold 

`ScaleDownThreshold` is a parameter to specify the threshold for image shrinking. It is defined as below:

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *int* | [512, 0x7fffffff] | 2300 |


**Remarks**     
If the shorter edge size is larger than the given value, the library will calculate the required height and width of the barcode image and shrink the image to that size before localization. Otherwise, it will perform barcode localization on the original image.   


    
## Setting Methods
`ScaleDownThreshold` is supported to be set through `RuntimeSetting` or JSON template.

### As `PublicRuntimeSettings` Member
`ScaleDownThreshold` can be set dynamically during runtime as a member of `PublicRuntimeSettings` struct.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->scaleDownThreshold = 2300;
reader->UpdateRuntimeSettings(pSettings);
delete pSettings;
//...other codes
```



**See Also**      
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)


### As JSON Parameter
`ScaleDownThreshold` as a JSON parameter is a number value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| ScaleDownThreshold | A number from [512, 0x7fffffff] |


**JSON Example**   
```
{
    "ScaleDownThreshold": 2300
}
```


<!--
## Impacts on Performance
### Speed
Setting `ScaleDownThreshold` to a smaller value than the shorter edge size of the image may speed up the process when the barcode is clear and big on the image.

### Read Rate
Setting `ScaleDownThreshold` to a larger value than the shorter edge of the image may improve the Read Rate when the barcode is a small part on the image.   

### Accuracy
`ScaleDownThreshold` has no influence on the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
