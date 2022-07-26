---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for DeblurLevel
description: This page shows Dynamsoft Barcode Reader Parameter Reference for DeblurLevel.
keywords: DeblurLevel, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/deblur-level.html
---


# DeblurLevel 

`DeblurLevel` is a parameter to control the efforts used to process the blurriness of the barcode. It is defined as below:

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *int* | [0, 9] | 9 |


**Remarks**  
If you have a blurry image, you can set this property to a larger value. The higher value set, the more effort the library will spend to decode images, but it may also slow down the recognition process.<br>
DeblurLevel is now deprecated. It still works in this version but could be removed in the near future. We recommend using [`DeblurModes`](deblur-modes.md#deblurmodes) instead. Migrating mapping:

- For Barcode Format PDF417  

| DeblurLevel |	DeblurModes |  
| ----------- | ------------------- |  
| 0 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION] |
| 1-3 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION] |
| 4-6 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION,DM_SMOOTHING] |
| 7-8 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION,DM_SMOOTHING，DM_GRAY_EQUALIZATION] |
| 9 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION,DM_SMOOTHING，DM_GRAY_EQUALIZATION,DM_MORPHING,DM_DEEP_ANALYSIS] |

- For Barcode Format OneD  

| DeblurLevel |	DeblurModes |
| ----------- | ------------------- |
| 0 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_THRESHOLD_BINARIZATION] |
| 1-3 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION] |
| 4-6 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION,DM_SMOOTHING] |
| 7-8 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION,DM_SMOOTHING，DM_GRAY_EQUALIZATION] |
| 9 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION,DM_DEEP_ANALYSIS,DM_SMOOTHING，DM_GRAY_EQUALIZATION,DM_MORPHING] |

- For other formats

| DeblurLevel |	DeblurModes |
| ----------- | ------------------- |
| 0 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION] |
| 1-3 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION] |
| 4-6 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION,DM_SMOOTHING] |
| 7-8 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION,DM_SMOOTHING，DM_GRAY_EQUALIZATION] |
| 9 | [DM_BASED_ON_LOC_BIN,DM_THRESHOLD_BINARIZATION,DM_DIRECT_BINARIZATION,DM_DEEP_ANALYSIS,DM_SMOOTHING，DM_GRAY_EQUALIZATION,DM_MORPHING] |


    
## Setting Methods
`DeblurLevel` is supported to be set through `RuntimeSetting` or JSON template.

### As `PublicRuntimeSettings` Member
`DeblurLevel` can be set dynamically during runtime as a member of `PublicRuntimeSettings` struct.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->deblurLevel = 1;
reader->UpdateRuntimeSettings(pSettings);
delete pSettings;
//...other codes
```



**See Also**      
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)


### As JSON Parameter
`DeblurLevel` as a JSON parameter is a number value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| DeblurLevel | A number from [0, 9] |


**JSON Example**   
```
{
    "DeblurLevel": 0
}
```


<!--
## Impacts on Performance
### Speed
Setting `DeblurLevel` to a smaller number when the image is clear may speed up the process.

### Read Rate
Setting `DeblurLevel` to a larger number when the image is blurry may improve the Read Rate. 

### Accuracy
Setting `DeblurLevel` to a larger number when the image is blurry may improve the Accuracy. 

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
