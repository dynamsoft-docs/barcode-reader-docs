---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for TerminatePhase
description: This page shows Dynamsoft Barcode Reader Parameter Reference for TerminatePhase.
keywords: TerminatePhase, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# TerminatePhase 

`TerminatePhase` is a parameter to specify the phase where the algorithm stops. It can be one of following values.

## Candidate Value List
- TP_REGION_PREDETECTED
- TP_IMAGE_PREPROCESSED
- TP_IMAGE_BINARIZED
- TP_BARCODE_LOCALIZED
- TP_BARCODE_TYPE_DETERMINED
- TP_BARCODE_RECOGNIZED

### TP_REGION_PREDETECTED
Exits the barcode reading algorithm after the region predetection is done.

### TP_IMAGE_PREPROCESSED
Exits the barcode reading algorithm after the region predetection and image pre-processing is done.

### TP_IMAGE_BINARIZED
Exits the barcode reading algorithm after the region predetection, image pre-processing, and image binarization are done.

### TP_BARCODE_LOCALIZED
Exits the barcode reading algorithm after the region predetection, image pre-processing, image binarization, and barcode localization are done.

### TP_BARCODE_TYPE_DETERMINED
Exits the barcode reading algorithm after the region predetection, image pre-processing, image binarization, barcode localization, and barcode type determining are done.

### TP_BARCODE_RECOGNIZED
Exits the barcode reading algorithm after the region predetection, image pre-processing, image binarization, barcode localization, barcode type determining, and barcode recognition are done.



## Setting Methods

### As `PublicRuntimeSettings` Member
`TerminatePhase` can be set dynamically during runtime as a member of `PublicRuntimeSettings` struct, it is one of the [`TerminatePhase`]({{ site.enumerations }}parameter-mode-enums.html#terminatephase) Enumeration items.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->terminatePhase = TP_BARCODE_LOCALIZED;
reader->UpdateRuntimeSettings(pSettings);
delete pSettings;
//...other codes
```


**See Also**      
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)
- [`TerminatePhase` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#terminatephase)


### As JSON Parameter
`TerminatePhase` as a JSON parameter is a string value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| TerminatePhase | Any one in TerminatePhase Enumeration as string |



**JSON Parameter Example**   
```
{
    "TerminatePhase": "TP_BARCODE_LOCALIZED" 
}
```


<!--
## Impacts on Performance
### Speed
When the recognition result is not desired, this parameter can be set to skip certain processing stages to speed up.    

### Read Rate
Setting this parameter to TP_BARCODE_RECOGNIZED to get the final result improve the Read Rate. 

### Accuracy
`TerminatePhase` has no influence on the Accuracy.


-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [How to terminate the process]({{ site.scenario_settings }}terminate.html)