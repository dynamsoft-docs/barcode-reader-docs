---   
layout: default-layout
title: How to control the Terminate Phase for DBR
description: This article describes how to use runtime settings to make DBR terminate at a certain stage.
keywords: terminate timeout
needAutoGenerateSidebar: false
permalink: /parameters/scenario-settings/terminate-v7.6.0.html
---

# How to control the Terminate Phase for DBR

Normally, DBR will terminate after decoding is complete. Considering requirement diversity, we provide the [`TerminatePhase`]({{ site.parameters_reference }}terminate-phase.html) parameter for user to specify a certain point to terminate the DBR instance. The [`Timeout`]({{ site.parameters_reference }}time-out.html) parameter control the time consumed duringthe decoding phase. Should the decoding phase exceed the value of [`Timeout`]({{ site.parameters_reference }}time-out.html), DBR will terminate immediately.

## Timeout
This parameter will control the timeout for DBR algorithm in milliseconds, values ranging from[0,0x7fffffff]. Default value is 10000. When DBR times out, it will terminate and return an error code related to the timeout. When dealing with multiple images, the user needs to consider a comprehensive timeout value to balance the trade-off between speed and accuracy for each image. The following code snippet illustrates how to set the [`Timeout`]({{ site.parameters_reference }}time-out.html):

```c++
char sError[512];   
TextResultArray* paryResult = NULL;   
PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();   
CBarcodeReader* reader = new CBarcodeReader();   
reader->InitLicense("input your license");  
reader->GetRuntimeSettings(runtimeSettings); //Configure runtimesettings   
runtimeSettings->timeout = 1000; //set timeout
reader->UpdateRuntimeSettings(runtimeSettings, sError, 512); //Update runtimesettings     
reader->DecodeFile("input your file path", ""); //Decoding  
reader->GetAllTextResults(&paryResult); //Get results     
CBarcodeReader::FreeTextResults(&paryResult);   
delete runtimeSettings;   
delete reader; 
```

## TerminatePhase

This parameter can specify a certain stage to terminate the DBR algorithm. The main stages for the DBR algorithm are:
- Region Pre-detection
- Image Preprocessing
- Image binarization
- Barcode localization
- Barcode type identification
- Barcode decoding/recognition  

DBR algorithm will terminate after all of the above stages are complete. Customized termination options could be achieved by adjusting [`TerminatePhase`]({{ site.parameters_reference }}terminate-phase.html)parameter to terminate the algorithm in advance. After termination, the user could obtain effective information from  [`IntermediateResult`]({{ site.structs }}IntermediateResult.html). Before demonstrating how to use the parameter, here is a quick overview of the TerminatePhase enumerations:

|Enumeration name|Note|
|---|----|
|TP_REGION_PREDETECTED|Terminate after Region Pre-detected|
|TP_IMAGE_PREPROCESSED|Terminate after Image Preprocessed|
|TP_IMAGE_BINARIZED|Terminate after Image binarized|
|TP_BARCODE_LOCALIZED|Terminate after Barcode localized|
|TP_BARCODE_TYPE_DETERMINED|Terminate after Barcode type identified|
|TP_BARCODE_RECOGENIZED|Terminate after Barcode recognized |

Following code snippet illustrate how to set the [`TerminatePhase`]({{ site.parameters_reference }}terminate-phase.html)

```c++
char sError[512];   
TextResultArray* paryResult = NULL;   
PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();   
CBarcodeReader* reader = new CBarcodeReader();   
reader->InitLicense("input your license");  
reader->GetRuntimeSettings(runtimeSettings); //Configure runtimesettings  
runtimeSettings->terminatePhase = TP_BARCODE_RECOGNIZED; //Specify terminate phase
reader->UpdateRuntimeSettings(runtimeSettings, sError, 512); //Update runtimesettings  
reader->DecodeFile("input your file path", ""); //Decoding
reader->GetAllTextResults(&paryResult); //Get results  
CBarcodeReader::FreeTextResults(&paryResult);   
delete runtimeSettings;   
delete reader;
 
```

## Template
You could also set the [`TerminatePhase`]({{ site.parameters_reference }}terminate-phase.html)parameter via the JSON settings template. In the below JSON template, we set TerminatePhase to TP_BARCODE_LOCALIZED, so that the algorithm terminates once the barcode(s) are localized. In this case, the value of [`Timeout`]({{ site.parameters_reference }}time-out.html)is 1000, which means if the time consumed exceeds 1000 milliseconds, the DBR algorithm will terminate.
```json
{
    "ImageParameter": {
        "BarcodeFormatIds": ["BF_ALL"],
        "TerminatePhase":"TP_BARCODE_LOCALIZED",
        "Timeout": 1000
    },
    "Version": "3.0"
}
```

