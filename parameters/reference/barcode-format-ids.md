---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for BarcodeFormatIds
description: This page shows Dynamsoft Barcode Reader Parameter Reference for BarcodeFormatIds.
keywords: BarcodeFormatIds, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/barcode-format-ids.html
---


# BarcodeFormatIds 

`BarcodeFormatIds` defines the formats of the barcode in `BarcodeFormat group 1` to be read. It is a combined value of `BarcodeFormat` Enumeration items.

**Remarks**  

- The default value is all supported barcode formats in `BarcodeFormat group 1`.
- The barcode format our library will search for is composed of `BarcodeFormat group 1` and [`BarcodeFormat group 2`](barcode-format-ids-2.md), so you need to specify the barcode format in group 1 and group 2 individually.

## Setting Methods
`BarcodeFormatIds` can be set through `RuntimeSetting` or JSON template.

### As `PublicRuntimeSettings` Member
`BarcodeFormatIds` can be set dynamically during runtime as a member of `PublicRuntimeSettings` struct.


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
- `BarcodeFormat:` [JavaScript]({{ site.js_enumerations }}EnumBarcodeFormat.html) \| [C]({{ site.c_cpp_enumerations }}format-enums.html?src=c#barcodeformat) \| [C++]({{ site.c_cpp_enumerations }}format-enums.html?src=cpp#barcodeformat) \| [.NET]({{ site.dotnet_enumerations }}format-enums.html#barcodeformat) \| [Python]({{ site.python_enumerations }}format-enums.html#barcodeformat) \| [Java]({{ site.java_enumerations }}format-enums.html#barcodeformat) \| [Java-Android]({{ site.mobile_enumerations }}barcode-format.html?lang=android) \| [Objective-C & Swift]({{ site.mobile_enumerations }}barcode-format.html?lang=objc,swift)
- `BarcodeFormat_2:` [JavaScript]({{ site.js_enumerations }}EnumBarcodeFormat_2.html) \| [C]({{ site.c_cpp_enumerations }}format-enums.html?src=c#barcodeformat_2) \| [C++]({{ site.c_cpp_enumerations }}format-enums.html?src=cpp#barcodeformat_2) \| [.NET]({{ site.dotnet_enumerations }}format-enums.html#barcodeformat_2) \| [Python]({{ site.python_enumerations }}format-enums.html#barcodeformat_2) \| [Java]({{ site.java_enumerations }}format-enums.html#barcodeformat_2) \| [Java-Android]({{ site.mobile_enumerations }}barcode-format2.html?lang=android) \| [Objective-C & Swift]({{ site.mobile_enumerations }}barcode-format2.html?lang=objc,swift)


### As JSON Parameter
`BarcodeFormatIds` as a JSON parameter is a string Array defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| BarcodeFormatIds | A string array while each array item is one of the [`BarcodeFormat` Enumeration]({{ site.c_cpp_enumerations }}format-enums.html?src=cpp#barcodeformat) items. |


**JSON Example**   
```
{
    "BarcodeFormatIds": ["BF_ONED", "BF_DATAMATRIX"]
}
```


<!--
## Impacts on Performance
### Speed
Setting `BarcodeFormatIds` to a specific value when barcode formats are certain may speed up the process.

### Read Rate
Setting `BarcodeFormatIds` to all formats when barcode formats are uncertain may improve the Read Rate. 

### Accuracy
Setting `BarcodeFormatIds` to a specific value when barcode formats are certain may improve the Accuracy.

-->
## Related Articles
- [Use RuntimeSettings or Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html)
