---
layout: default-layout
title: Dynamsoft Barcode Reader How-to Guides - Decode DPM Data Matrix  
description: This page shows how to decode DPM Data Matrix.
keywords: dmp, decode, how-to guides
needAutoGenerateSidebar: false
---

# How-to Guides - Decode DPM Data Matrix   


Since version 7.2 of Dynamsoft Barcode Reader SDK, direct part mark (DPM) Data Matrix scanning is supported. To decode DPM codes, some particular settings are required:

The value `DPMCRM_GENERAL` needs to be set for the parameter [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html)->[`FurtherModes`]({{ site.structs }}FurtherModes.html)->[`DPMCodeReadingModes`]({{ site.structs }}FurtherModes.html#dpmcodereadingmodes).    
   

The value `LM_STATISTICS_MARKS` needs to be set for the parameter [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html)->[`LocalizationModes`]({{ site.structs }}PublicRuntimeSettings.html#localizationmodes).    


For more information about decoding DPM, see [DPM Decoding]({{ site.scenario_settings }}dpm-decoding.html).   


The following code shows how to set the runtime settings for DPM decoding:   

```cpp
char sError[512];
TextResultArray* paryResult = NULL;
CBarcodeReader reader;
PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();
reader.InitLicense("<your license key here>");
reader.GetRuntimeSettings(runtimeSettings);
//turn on the DPM mode
runtimeSettings->furtherModes.dpmCodeReadingModes[0] = DPMCRM_GENERAL;
runtimeSettings->localizationModes[0] = LM_STATISTICS_MARKS;
//update the runtime settings
reader.UpdateRuntimeSettings(runtimeSettings, sError, 512);
reader.DecodeFile("<your image file full path>", "");
reader.GetAllTextResults(&paryResult);
CBarcodeReader::FreeTextResults(&paryResult);
```


