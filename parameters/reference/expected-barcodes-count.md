---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ExpectedBarcodesCount
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ExpectedBarcodesCount.
keywords: ExpectedBarcodesCount, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# ExpectedBarcodesCount 

`ExpectedBarcodesCount` is a parameter to control the number of barcodes expected to be detected. It is defined as below:

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *int* | [0, 0x7fffffff] | 0 |


**Remarks**  
- 0: detects at least one barcode.
- N ( N > 0 ): detects N barcodes.
- Dynamsoft Barcode Reader works as a loop trying different parameters to detect barcodes as many as possible. If ExpectedBarcodesCount is 0, the loop stops after a loop round finishes and detects at least one barcode. If ExpectedBarcodesCount is N, the loop stops once N barcodes are detected. 
- ExpectedBarcodesCount applies to each page when decoding a multi-page file.


    
## Setting Methods
`ExpectedBarcodesCount` is supported to be set through `RuntimeSetting` or JSON template.

### As `PublicRuntimeSettings` Member
`ExpectedBarcodesCount` can be set dynamically during runtime as a member of `PublicRuntimeSettings` struct.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->expectedBarcodesCount = 1;
reader->UpdateRuntimeSettings(pSettings);
delete pSettings;
//...other codes
```



**See Also**      
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)


### As JSON Parameter
`ExpectedBarcodesCount` as a JSON parameter is a number value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| ExpectedBarcodesCount | A number from [0, 0x7fffffff] |


**JSON Example**   
```
{
    "ExpectedBarcodesCount": 0
}
```


<!--
## Impacts on Performance
### Speed
Setting `ExpectedBarcodesCount` to a specific number when barcode count is certain may speed up the process.

### Read Rate
Setting `ExpectedBarcodesCount` to a large number when barcode count is uncertain may improve the Read Rate. 

### Accuracy
`ExpectedBarcodesCount` has no influence on the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)