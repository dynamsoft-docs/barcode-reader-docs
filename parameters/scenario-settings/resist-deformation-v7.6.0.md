---   
layout: default-layout
description: This article introduces how to deal with deformed barcodes
title: How to deal with deformed barcodes
keywords: resist deformation
needAutoGenerateSidebar: false
permalink: /parameters/scenario-settings/resist-deformation-v7.6.0.html
---

# How to deal with deformed barcodes

The barcodes on the surface of some flexible packaging or cylindrical objects tend to be distorted and deformed. DBR may not be able to handle such cases well by default, but we can configure [`DeformationResistingModes`]({{ site.parameters_reference }}deformation-resisting-modes.html#deformationresistingmodes) to deal with these problems. 

The following images show two kinds of barcode images with deformation:

Wrinkled distortion:
![Deformation sample image1][1]
![after deformation qr][3]

Columnar distortion:

![Deformation sample image2][2]
![Deformation sample image2][4]

Currently, [`DeformationResistingModes`]({{ site.parameters_reference }}deformation-resisting-modes.html#deformationresistingmodes) only works for QR Code and DataMatrix codes. 

## How to configure

As mentioned above, you can configure the anti-deformation mode via the setting [`DeformationResistingModes`]({{ site.parameters_reference }}deformation-resisting-modes.html#deformationresistingmodes). DBR does not turn on anti-deformation by default. If you want to turn it on, you need to add `DRM_GENERAL` to [`DeformationResistingModes`]({{ site.parameters_reference }}deformation-resisting-modes.html#deformationresistingmodes). By the way, multiple modes can also be set at the same time. For example, if DRM_SKIP and DRM_GENERAL are configured at the same time, our algorithm will try to turn off and turn on the anti-deformation mode in turn, until the decoding result meets the requirements.

## Example

The following code snippet shows how to enable deformation resisting mode via RuntimeSettings and JSON template individually.

- Set via RuntimeSettings:

```c++
CBarcodeReader* reader = new CBarcodeReader();  
reader->InitLicense("Insert your license");  
PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();  
reader->GetRuntimeSettings(runtimeSettings); //Get the current runtimesettings  
runtimeSettings->furtherModes.deformationResistingModes[0] = DRM_GENERAL; // Turn on anti-deformation
char sError[512];  
reader->UpdateRuntimeSettings(runtimeSettings, sError, 512); // Update the runtimesettings
reader->DecodeFile("Insert your image file path", ""); // Start decoding
TextResultArray* paryResult = NULL;  
reader->GetAllTextResults(&paryResult); // Get results
CBarcodeReader::FreeTextResults(&paryResult);  
delete runtimeSettings;  
delete reader;  
```

- Set via JSON template:
   
```Json
{    
    "Version":"3.0",    
    "ImageParameter":    
    {    
         "Name":"IP1",    
         "BarcodeFormatIds":["BF_ALL"],        
         "DeformationResistingModes":["DRM_GENERAL"]
     }    
}   
```

[1]:assets\resist-deformation\resist-deformation-sample1.jpg
[2]:assets\resist-deformation\resist-deformation-sample2.png
[3]:assets\resist-deformation\after-drm-qr.png
[4]:assets\resist-deformation\after-drm-dm.png
