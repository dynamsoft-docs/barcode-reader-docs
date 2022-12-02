---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for PDFReadingMode
description: This page shows Dynamsoft Barcode Reader Parameter Reference for PDFReadingMode.
keywords: PDFReadingMode, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/pdf-reading-mode.html
---


# PDFReadingMode 

`PDFReadingMode` determines how to read barcodes from PDF files. 

## Candidate Mode List
- PDFRM_AUTO
- PDFRM_VECTOR
- PDFRM_RASTER

### PDFRM_AUTO
Lets the library choose a mode automatically.


### PDFRM_VECTOR
Detects barcode from vector data in PDF file.

### PDFRM_RASTER
Converts the PDF file to image(s) first, then detects barcode.


## Setting Methods

### As `PublicRuntimeSettings` Member
`PDFReadingMode` can be set dynamically during runtime as a member of `PublicRuntimeSettings` struct, it is one of the `PDFReadingMode` Enumeration items.


**Code Snippet in C++**
```cpp
//...other codes
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->pdfReadingMode = PDFRM_VECTOR;
reader->UpdateRuntimeSettings(pSettings);
delete pSettings;
//...other codes
```


**See Also**      
- `PublicRuntimeSettings:` [JavaScript]({{ site.js_api }}interface/RuntimeSettings.html) \| [C]({{ site.structs }}PublicRuntimeSettings.html?src=c) \| [C++]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) \| [.NET]({{ site.dotnet_api }}struct/PublicRuntimeSettings.html) \| [Python]({{ site.python_api }}class/PublicRuntimeSettings.html) \| [Java]({{ site.java_api }}class/PublicRuntimeSettings.html) \| [Java-Android]({{ site.android_api }}auxiliary-PublicRuntimeSettings.html) \| [Objective-C & Swift]({{ site.oc_api }}auxiliary-iPublicRuntimeSettings.html)
- `PDFReadingMode:` [JavaScript]({{ site.js_enumerations }}EnumPDFReadingMode.html) \| [C]({{ site.c_cpp_enumerations }}parameter-mode-enums.html?src=c#pdfreadingmode) \| [C++]({{ site.c_cpp_enumerations }}parameter-mode-enums.html?src=cpp#pdfreadingmode) \| [.NET]({{ site.dotnet_enumerations }}parameter-mode-enums.html#pdfreadingmode) \| [Python]({{ site.python_enumerations }}parameter-mode-enums.html#pdfreadingmode) \| [Java]({{ site.java_enumerations }}parameter-mode-enums.html#pdfreadingmode) \| [Java-Android]({{ site.mobile_enumerations }}pdf-reading-mode.html?lang=android) \| [Objective-C & Swift]({{ site.mobile_enumerations }}pdf-reading-mode.html?lang=objc,swift)


### As JSON Parameter
`PDFReadingMode` as a JSON parameter is a JSON Object defined as below.

| Key Name | Key Value |
| -------- | --------- |
| Mode | Any one in Candidate Mode List as string |



**JSON Parameter Example**   
```
{
    "PDFReadingMode": {
        "Mode" : "PDFRM_VECTOR"
    } 
}
```


<!--
## Impacts on Performance
### Speed
Setting `PDFReadingMode` to PDFRM_VECTOR or PDFRM_RASTER when barcode type (image or vector) in PDF file is certain may speed up the process. 

### Read Rate
Setting `PDFReadingMode` to PDFRM_AUTO when barcode type (image or vector) in PDF file is uncertain may improve the Read Rate. 

### Accuracy
`PDFReadingMode` has no influence on the Accuracy.


-->
## Related Articles
- [Use RuntimeSettings or Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html)
