---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ReturnBarcodeZoneClarity
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ReturnBarcodeZoneClarity.
keywords: ReturnBarcodeZoneClarity, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/return-barcode-zone-clarity.html
---


# ReturnBarcodeZoneClarity 

`ReturnBarcodeZoneClarity` is a parameter to specify whether to return the clarity of the barcode zone. It is defined as below:

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *int* | [0, 1] | 0 |


**Remarks**  
- 0: do not return the clarity of the barcode zone.
- 1: return the clarity of the barcode zone.


    
## Setting Methods
`ReturnBarcodeZoneClarity` is supported to be set through `RuntimeSetting` or JSON template.

### As `PublicRuntimeSettings` Member
`ReturnBarcodeZoneClarity` can be set dynamically during runtime as a member of `PublicRuntimeSettings` struct.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->returnBarcodeZoneClarity = 1;
reader->UpdateRuntimeSettings(pSettings);
delete pSettings;
//...other codes
```


**See Also**      
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)


### As JSON Parameter
`ReturnBarcodeZoneClarity` as a JSON parameter is a number value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| ReturnBarcodeZoneClarity | A number from [0, 1] |


**JSON Example**   
```
{
    "ReturnBarcodeZoneClarity": 1
}
```


<!--
## Impacts on Performance
### Speed
Disabling `ReturnBarcodeZoneClarity` may improve the Speed.

### Read Rate
`ReturnBarcodeZoneClarity` has no influence on the Read Rate.

### Accuracy
`ReturnBarcodeZoneClarity` has no influence on the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [How to filter and sort results]({{ site.scenario_settings }}decode-result.html)
