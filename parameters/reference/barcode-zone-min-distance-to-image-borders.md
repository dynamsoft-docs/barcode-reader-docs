---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for BarcodeZoneMinDistanceToImageBorders
description: This page shows Dynamsoft Barcode Reader Parameter Reference for BarcodeZoneMinDistanceToImageBorders.
keywords: BarcodeZoneMinDistanceToImageBorders, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# BarcodeZoneMinDistanceToImageBorders 

`BarcodeZoneMinDistanceToImageBorders` is a parameter to specify the minimum distance (in pixels) between the barcode zone and image borders. It is defined as below:

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *int* | [0, 0x7fffffff] | 0 |


**Remarks**  
- If a barcode region has been set, this parameter should not be used.


    
## Setting Methods
`BarcodeZoneMinDistanceToImageBorders` is supported to be set through `RuntimeSetting` or JSON template.

### As `PublicRuntimeSettings` Member
`BarcodeZoneMinDistanceToImageBorders` can be set dynamically during runtime as a member of `PublicRuntimeSettings` struct.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->barcodeZoneMinDistanceToImageBorders = 1;
reader->UpdateRuntimeSettings(pSettings);
delete pSettings;
//...other codes
```



**See Also**      
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)


### As JSON Parameter
`BarcodeZoneMinDistanceToImageBorders` as a JSON parameter is a number value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| BarcodeZoneMinDistanceToImageBorders | A number from [0, 0x7fffffff] |


**JSON Example**   
```
{
    "BarcodeZoneMinDistanceToImageBorders": 1
}
```


<!--
## Impacts on Performance
### Speed
Setting `BarcodeZoneMinDistanceToImageBorders` to a appropriate value may speed up the process when barcodes are partly out of the iamge border.

### Read Rate
`BarcodeZoneMinDistanceToImageBorders` has no influence on the Read Rate.

### Accuracy
`BarcodeZoneMinDistanceToImageBorders` has no influence on the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)