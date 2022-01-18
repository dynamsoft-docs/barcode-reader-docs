---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for PDFRasterDPI
description: This page shows Dynamsoft Barcode Reader Parameter Reference for PDFRasterDPI.
keywords: PDFRasterDPI, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# PDFRasterDPI 

`PDFRasterDPI` is a parameter to specify the resolution used for rasterizing a PDF file. It is defined as below:

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *int* | [100, 600] | 300 |


**Remarks**     
When decoding a PDF file using `DecodeFile` method, the library will convert the pdf file to image(s) first, then perform barcode recognition.    


    
## Setting Methods
`PDFRasterDPI` is supported to be set through `RuntimeSetting` or JSON template.

### As `PublicRuntimeSettings` Member
`PDFRasterDPI` can be set dynamically during runtime as a member of `PublicRuntimeSettings` struct.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->pdfRasterDPI = 300;
reader->UpdateRuntimeSettings(pSettings);
delete pSettings;
//...other codes
```



**See Also**      
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)


### As JSON Parameter
`PDFRasterDPI` as a JSON parameter is a number value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| PDFRasterDPI | A number from [100, 600] |


**JSON Example**   
```
{
    "PDFRasterDPI": 300
}
```


<!--
## Impacts on Performance
### Speed
Setting `PDFRasterDPI` to a smaller number may speed up the process.

### Read Rate
Setting `PDFRasterDPI` to a larger number may improve the Read Rate. 

### Accuracy
`PDFRasterDPI` has no influence on the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [How to process multi-page TIF & PDF]({{ site.scenario_settings }}multipage-imgs-and-pdf.html)