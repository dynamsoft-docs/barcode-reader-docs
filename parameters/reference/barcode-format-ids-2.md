---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for BarcodeFormatIds_2
description: This page shows Dynamsoft Barcode Reader Parameter Reference for BarcodeFormatIds_2.
keywords: BarcodeFormatIds_2, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# BarcodeFormatIds_2 

`BarcodeFormatIds_2` is a parameter to specify the formats of the barcode in BarcodeFormat group 2 to be read. It is a combined value of [`BarcodeFormat_2` Enumeration]({{ site.enumerations }}format-enums.html#barcodeformat_2) items.

**Remarks**  
- The default value is all supported barcode formats in BarcodeFormat group 2.
- The barcode format our library will search for is composed of [BarcodeFormat group 1]({{ site.enumerations }}format-enums.html#barcodeformat) and [BarcodeFormat group 2]({{ site.enumerations }}format-enums.html#barcodeformat_2), so you need to specify the barcode format in group 1 and group 2 individually.


    
## Setting Methods
`BarcodeFormatIds_2` is supported to be set through `RuntimeSetting` or JSON template.

### As `PublicRuntimeSettings` Member
`BarcodeFormatIds_2` can be set dynamically during runtime as a member of `PublicRuntimeSettings` struct.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->barcodeFormatIds = BF_ALL;
pSettings->barcodeFormatIds_2 = BF2_POSTALCODE | BF2_DOTCODE;
reader->UpdateRuntimeSettings(pSettings);
delete pSettings;
//...other codes
```



**See Also**      
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)
- [`BarcodeFormat` Enumeration]({{ site.enumerations }}format-enums.html#barcodeformat)
- [`BarcodeFormat_2` Enumeration]({{ site.enumerations }}format-enums.html#barcodeformat_2)


### As JSON Parameter
`BarcodeFormatIds_2` as a JSON parameter is a string Array defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| BarcodeFormatIds_2 | A string array while each array item is one of the [`BarcodeFormat_2` Enumeration]({{ site.enumerations }}format-enums.html#barcodeformat_2) items. |


**JSON Example**   
```
{
    "BarcodeFormatIds_2": ["BF2_POSTALCODE", "BF2_DOTCODE"]
}
```


<!--
## Impacts on Performance
### Speed
Setting `BarcodeFormatIds_2` to a specific value when barcode formats are certain may speed up the process.

### Read Rate
Setting `BarcodeFormatIds_2` to all formats when barcode formats are uncertain may improve the Read Rate. 

### Accuracy
Setting `BarcodeFormatIds_2` to a specific value when barcode formats are certain may improve the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)