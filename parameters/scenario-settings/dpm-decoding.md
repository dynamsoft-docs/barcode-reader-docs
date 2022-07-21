---   
layout: default-layout
description: This article introduces how to read DPM codes.
title: How to read DPM codes
keywords: DPM, Direct Part Marking
needAutoGenerateSidebar: false
permalink: /parameters/scenario-settings/dpm-decoding.html
---

# How to read DPM codes

## What is DPM (Direct Part Marking)?

It is the process of creating permanent markings on the surface of a part to help identify it. DPM Codes are used widely in industrial part tracking, from electronics manufacturing to automotive assembly. Atypical from general scenarios, DPM Codes present more challenges, including light reflection interference from the surface the code is printed on, low contrast, and complex background texture. DBR may not be able to handle these problems well by default, so this is where the parameter [`DPMCodeReadingModes`]({{ site.parameters_reference }}dpm-code-reading-modes.html#dpmcodereadingmodes) comes handy. 

For reference, here are two sample images of DPM codes:

![DPM sample image1][1]
![DPM sample image2][2]

## How to configure the barcode reader to read DPM codes

To enable the DPM feature, simply add `DPMCRM_GENERAL` to the array of [`DPMCodeReadingModes`]({{ site.parameters_reference }}dpm-code-reading-modes.html#dpmcodereadingmodes). 

>Note: Adding `DPMCRM_GENERAL` to [`DPMCodeReadingModes`]({{ site.parameters_reference }}dpm-code-reading-modes.html#dpmcodereadingmodes) will change the default value of LocalizationModes. It automatically adds a new mode `LM_STATISTICS_MARKS` to LocalizationModes.    
`LM_STATISTICS_MARKS` is a dot matrix-based localization method specifically for DPM code and DotCode. 

## Example

The following code snippet shows how to read DPM code via RuntimeSettings and JSON template individually.

- Set via RuntimeSettings:
```c++
CBarcodeReader* reader = new CBarcodeReader();  
reader->InitLicense("insert your license here");  
PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();  
reader->GetRuntimeSettings(runtimeSettings); //Get the current RuntimeSettings  
runtimeSettings->furtherModes.dpmCodeReadingModes[0] = DPMCRM_GENERAL; // Turn on DPM reading mode
char sError[512];  
reader->UpdateRuntimeSettings(runtimeSettings, sError, 512); // Update RuntimeSettings
reader->DecodeFile("insert your image file path here", ""); // Start decoding
TextResultArray* paryResult = NULL;  
reader->GetAllTextResults(&paryResult); // Get results
dynamsoft::dbr::CBarcodeReader::FreeTextResults(&paryResult);  
delete runtimeSettings;  
delete reader;  
```

- Set via JSON template
```Json
{    
    "Version":"3.0",    
    "ImageParameter":    
    {    
         "Name":"IP1",    
         "BarcodeFormatIds":["BF_ALL"],        
         "DPMCodeReadingModes":["DPMCRM_GENERAL"]
     }    
}   
```

[1]:assets\dpm-decoding\DPM-sample1.png
[2]:assets\dpm-decoding\DPM-sample2.png
