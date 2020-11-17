---
layout: default-layout
title: Dynamsoft Barcode Reader How-to Guides - Set Custom Area for HSV Pre-detection 
description: This page shows how to set custom area for HSV Pre-detection.
keywords: pre-detection, pre-detected region, hsv, custom setting, how-to guides
needAutoGenerateSidebar: false
---


# How-to Guides - Set Custom Area for HSV Pre-detection 

Since version 7.4, Dynamsoft Barcode Reader SDK is able to detect ROI (region of interest) using the HSV colour space.    

It will be useful if the barcode you want to detect is near to a colour zone. For example, in supermarkets and shopping malls, the price is highlighted in red and the barcode might be near to the red zone. To boost the speed of localizing the barcode region, you can preset the colour value of the price label and the position of the barcode relative to the colour zone.    

Let's take the following image for example:     

![HSV Color Image][1]    

Suppose the red rectangle is the price tag and the barcode under the red rectangle (highlighted in green) is what we want to recognize.     


![Pre-detect Region Image][2]   

Here is the code snippet in C++:   


```cpp
PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings;
reader->GetRuntimeSettings(runtimeSettings);
runtimeSettings->furtherModes.regionPredetectionModes[0] = RPM_GENERAL_HSV_CONTRAST;
reader->UpdateRuntimeSettings(runtimeSettings, errorMessage, 256);
reader.SetModeArgument("regionPredetectionModes", 0, "RelativeBarcodeRegions", "[50,100,100,200,0]", errorMessage, 256); 
// [50,100,100,200,0] is the green rectangle in the image below, which is the searching area for the barcode (relative to the colour zone). 
reader.SetModeArgument("regionPredetectionModes", 0, "ForeAndBackgroundColours", "[0,-1,5]", errorMessage, 256); 
// "[0,-1,5]" - define red colour zone as ROI
reader.SetModeArgument("regionPredetectionModes", 0, "HeightRange", "[300,400]", errorMessage, 256);
reader.SetModeArgument("regionPredetectionModes", 0, "WidthRange", "[600,700]", errorMessage, 256);
reader.SetModeArgument("regionPredetectionModes", 0, "AspectRatioRange", "[0.1,1]", errorMessage, 256);
// invoke decode method...
```  


For more information about region pre-detection, please see [How to Use Region Predetection]({{ site.scenario_settings }}how-to-use-region-predetection.html).    



[1]: assets/set-custom-area-for-hsv-pre-detection/hsv-predetection-sample.png

[2]: assets/set-custom-area-for-hsv-pre-detection/hsv-predetection-explanation.png



