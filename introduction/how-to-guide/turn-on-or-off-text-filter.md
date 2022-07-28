---
layout: default-layout
title: Dynamsoft Barcode Reader How-to Guides - Turn On or Turn Off Text Filter
description: This page shows how to turn on/off Text Filter.
keywords: text filter, TextFilterModes, how-to guides
needAutoGenerateSidebar: false
permalink: /introduction/how-to-guide/turn-on-or-off-text-filter.html
---


# How-to Guides - Turn On or Turn Off Text Filter     

In some cases, the image may be filled with a lot of characters and numbers. This could affect the barcode recognition. With text filter on, it can filter and remove the characters and numbers from the image and improve the barcode recognition accuracy. However, you may want to turn off text filter when barcodes are the only content of the image or when the speed is the prority.    

The text filter is on by default.    

The following code snippet shows how to set text filter function by changing the [`TextFilterModes`]({{ site.parameters_reference }}text-filter-modes.html#textfiltermodes) parameter:    


```cpp
char sError[512];
TextResultArray* paryResult = NULL;
PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();
CBarcodeReader* reader = new CBarcodeReader();
//Initialize license prior to any decoding
//Replace "Put your license key here" with your own license
reader->InitLicense("Put your license key here");
   
reader->GetRuntimeSettings(runtimeSettings);
//Turn off the text filter function. The enumeration includes TFM_GENERAL_CONTOUR,
//which is used to turn on the function, and TFM_AUTO.
runtimeSettings->furtherModes.textFilterModes[0] = TFM_SKIP;
reader->UpdateRuntimeSettings(runtimeSettings, sError, 512);

//Replace "Put the path of your file here" with your own file path
reader->DecodeFile("Put your file path here", "");
// If succeeds
reader->GetAllTextResults(&paryResult);
CBarcodeReader::FreeTextResults(&paryResult);
delete runtimeSettings;
delete reader;
```



For more information about text filter, please see [Text Filter]({{ site.scenario_settings }}text-filter.html).   


