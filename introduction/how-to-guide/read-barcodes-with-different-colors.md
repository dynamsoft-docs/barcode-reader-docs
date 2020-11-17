---
layout: default-layout
title: Dynamsoft Barcode Reader How-to Guides - Read Barcodes with Different Colours
description: This page shows how to read barcodes with different colours.
keywords: colour mode, colourful barcode, how-to guides
needAutoGenerateSidebar: false
---


# How-to Guides - Read Barcodes with Different Colours

Common barcodes are black and white. However, some barcodes could be in different colors such as the below left barcode. Also, in some cases, a QR code may appear with an image or a logo inside as shown below right. Dynamsoft can decode such special barcodes as well.   


![Colour Barcode][1]   ![Colour Barcode][2] 

In some other cases, the barcodes can be white with a dark background color as shown on the right part of the image below:   

![Dark Background Barcode][3]    

To decode such kind of barcodes, the default runtime settings may fail. You can adjust the `PublicRuntimeSettings` like below:   

```cpp
char sError[512];
TextResultArray* paryResult = NULL;
PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();
CBarcodeReader* reader = new CBarcodeReader();
//Initialize license prior to any decoding
//Replace "<Put your license key here>" with your own license
reader->InitLicense("<Put your license key here>");
    
//Change the runtime settings to read both normal and inverted barcodes
reader->GetRuntimeSettings(runtimeSettings);
runtimeSettings->furtherModes.grayscaleTransformationModes[0] = GTM_ORIGINAL;
runtimeSettings->furtherModes.grayscaleTransformationModes[1] = GTM_INVERTED;
reader->UpdateRuntimeSettings(runtimeSettings, sError, 512);

//Replace "<Put your file path here>" with your own file path
reader->DecodeFile("<Put your file path here>", "");
// If succeeds
reader->GetAllTextResults(&paryResult);
CBarcodeReader::FreeTextResults(&paryResult);
delete runtimeSettings;
delete reader;
```


See [Image Scale and Colour Conversion]({{ site.scenario_settings }}image-scale-and-colour-conversion.html) for more information about what you can do during image pre-processing.    



[1]: assets/read-barcodes-with-different-colors/color-barcode.png

[2]: assets/read-barcodes-with-different-colors/color-barcode-2.png

[3]: assets/read-barcodes-with-different-colors/dark-background-barcode.png


