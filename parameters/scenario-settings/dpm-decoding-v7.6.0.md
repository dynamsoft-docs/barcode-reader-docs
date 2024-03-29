---   
layout: default-layout
description: This article introduces how to read DPM codes.
title: How to read DPM codes
keywords: DPM, Direct Part Marking
needAutoGenerateSidebar: false
permalink: /parameters/scenario-settings/dpm-decoding-v7.6.0.html
---

# How to read DPM codes

## What is DPM (Direct Part Marking)?

It is the process of creating permanent markings on the surface of a part to help identify it. DPM Codes are used widely in industrial part tracking, from electronics manufacturing to automotive assembly. Atypical from general scenarios, DPM Codes present more challenges, including light reflection interference from the surface the code is printed on, low contrast, and complex background texture. DBR may not be able to handle these problems well by default, so this is where the parameter [`DPMCodeReadingModes`]({{ site.parameters_reference }}dpm-code-reading-modes.html#dpmcodereadingmodes) comes handy. 

For reference, here are two sample images of DPM codes:

![DPM sample image1][1]
![DPM sample image2][2]

## How to configure the Barcode Reader to read DPM Codes

To enable the DPM feature, you first need to add `LM_STATISTICS_MARKS` to the LocalizationModes and then add `DPMCRM_GENERAL` to [`DPMCodeReadingModes`]({{ site.parameters_reference }}dpm-code-reading-modes.html#dpmcodereadingmodes). 

`LM_STATISTICS_MARKS` is a dot matrix-based localization method specifically for DPM code and DotCode. For the allowed enumeration values of [`DPMCodeReadingModes`]({{ site.parameters_reference }}dpm-code-reading-modes.html#dpmcodereadingmodes), please refer to its documentation page.

In order to facilitate the configuration, adding `DPMCRM_GENERAL` to [`DPMCodeReadingModes`]({{ site.parameters_reference }}dpm-code-reading-modes.html#dpmcodereadingmodes) automatically adds `LM_STATISTICS_MARKS` to LocalizationModes. Therefore, if you would like to enable DPM, you only need to set [`DPMCodeReadingModes`]({{ site.parameters_reference }}dpm-code-reading-modes.html#dpmcodereadingmodes) to `DPMCRM_GENERAL`. 

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
CBarcodeReader::FreeTextResults(&paryResult);  
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
