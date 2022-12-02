---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for IntermediateResultTypes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for IntermediateResultTypes.
keywords: IntermediateResultTypes, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/intermediate-result-types.html
---


# IntermediateResultTypes 

`IntermediateResultTypes` defines the types of intermediate result(s) to be kept for further reference. It is a combined value of [`IntermediateResultType` Enumeration]({{ site.enumerations }}result-enums.html#intermediateresulttype) items. No intermediate result will be kept by default.

| Value Type | Value Range | Default Value | Template Structure Type |
| ---------- | ----------- | ------------- | ----------------------- |
| [*`IntermediateResultType`*]({{ site.enumerations }}result-enums.html#intermediateresulttype) | N/A | `IRT_NO_RESULT` | `ImageParameter` |
    
## Setting Methods
`IntermediateResultTypes` can be set through `PublicRuntimeSettings` or JSON template.

### As `PublicRuntimeSettings` Member
`IntermediateResultTypes` can be set dynamically during runtime as a member of `PublicRuntimeSettings` struct.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->intermediateResultTypes = IRT_BINARIZED_IMAGE;
reader->UpdateRuntimeSettings(pSettings);
delete pSettings;
//...other codes
```



**See Also**      
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)
- `IntermediateResultType:` [JavaScript]({{ site.js_enumerations }}EnumIntermediateResultType.html) \| [C]({{ site.c_cpp_enumerations }}result-enums.html?src=c#intermediateresulttype) \| [C++]({{ site.c_cpp_enumerations }}result-enums.html?src=cpp#intermediateresulttype) \| [.NET]({{ site.dotnet_enumerations }}result-enums.html#intermediateresulttype) \| [Python]({{ site.python_enumerations }}result-enums.html#intermediateresulttype) \| [Java]({{ site.java_enumerations }}result-enums.html#intermediateresulttype) \| [Java-Android]({{ site.mobile_enumerations }}intermediate-result-type.html?lang=android) \| [Objective-C & Swift]({{ site.mobile_enumerations }}intermediate-result-type.html?lang=objc,swift)


### As JSON Parameter
`IntermediateResultTypes` as a JSON parameter is a string Array defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| IntermediateResultTypes | A string array while each array item is one of the [`IntermediateResultType` Enumeration]({{ site.enumerations }}result-enums.html#intermediateresulttype) items. |


**JSON Example**   
```
{
    "IntermediateResultTypes": ["IRT_BINARIZED_IMAGE", "IRT_PREDETECTED_REGION"]
}
```


<!--
## Impacts on Performance
### Speed
The more types you set, the more time the process may take.

### Read Rate
`IntermediateResultTypes` has no influence on the Accuracy.

### Accuracy
`IntermediateResultTypes` has no influence on the Accuracy.

-->
## Related Articles
- [Use RuntimeSettings or Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html)
- [How to obtain and use intermediate results]({{ site.scenario_settings }}intermediate-result.html)
