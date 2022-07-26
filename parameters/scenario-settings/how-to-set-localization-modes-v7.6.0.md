---   
layout: default-layout
description: This article introduces how to use different localization modes to obtain the best barcode localization results for further decoding.
title: How to use different localization modes
keywords: localization, barcode area
needAutoGenerateSidebar: false
permalink: /parameters/scenario-settings/how-to-set-localization-modes-v7.6.0.html
---

# How to use different localization modes

DBR provides a few localization modes to localize the barcode area. This article will introduce how to select the appropriate localization mode in different scenarios to obtain the best barcode localization results for further decoding.

## LM_CONNECTED_BLOCKS

Localizes barcodes by searching for connected blocks. This is optimized for clear images with obvious connected blocks, as shown below:

![original-barcode][1]

The image has clear connected blocks, which are highlighted below: 

![original-barcode-contours][5]

## LM_LINES

Localizes barcodes by searching for groups of lines. It is optimized for images with obvious straight lines. Compared with the LM_CONNECTED_BLOCKS mode, it can handle the situation where some bars (or lines) of the barcode stick to each other.

As shown in the image below, the connected blocks are destroyed because of the existence of two extra lines, which cannot be found by using LM_CONNECTED_BLOCKS.

![contaminated-barcode][2]

But it still has obvious straight line characteristics, as shown in the image below. In this case, using LM_LINES is able to localize the barcode.

![contaminated-barcode-lines][7]

## LM_STATISTICS

Localizes barcodes based on colour statistics. This mode is suitable for scenarios where the barcode area is severely damaged. For example, the original image is very large but the barcode area is small, so the barcode area may be severely damaged after image binarization, as shown in the image below:

<img src ="./assets/how-to-set-localization-modes/small-qrcode.png" width = "200" height = "214" alt="small-qrcode"/>

After binarization, the position patterns is damaged, as shown below:

![contaminated-barcode-lines][9]

There are obvious black and white contrast near the barcode area, so the barcode can be successfully localized using LM_STATISTICS mode.

## LM_SCAN_DIRECTLY

Localizes barcodes based on the direct scanning mode. It is the fastest among all localization modes, but it requires high barcode image quality, and the direction of the barcode must be horizontal or vertical. This mode is recommended in the real-time video scanning scenarios.

There are two additional argument parameters ScanStride and ScanDirection in this mode:

- ScanStride   

 Sets the interval between adjacent scan lines. The unit is pixel. The default value is 0, which means that DBR automatically calculates the interval. The smaller the value is, the more likely it is to locate the code area, but it will also increase the time.

- ScanDirection   

 Sets the scan direction, the allowed values are 0, 1, 2. The default value is 0, which means scanning in both horizontal and vertical directions. 1 means scanning only in the vertical direction, and 2 means scanning only in the horizontal direction. Setting the appropriate scanning direction can decrease the processing speed.

## LM_STATISTICS_MARKS

Localizes barcodes by dot matrix information. This mode is only applicable to DPM Code and DotCode. Below is a sample image of DotCode:

![dotcode][3]

## LM_STATISTICS_POSTAL_CODE

Localizes barcodes by statistics, connected blocks and straight lines. This mode is only applicable to Postal Code. Below is a sample image of Postal Code:

![postalcode][4]

## LM_CENTRE

Localizes barcodes from centre. This mode uses the central area of the image as the suspected code area and then try to localize and decode.

## Use intermediate results to obtain the localization result

If DBR successfully localizes the barcode zone, you can use the intermediate result IRT_TYPED_BARCODE_ZONE to obtain the localization result. The localization result includes "angle" (the angle of the barcode zone), "barcodeFormat" (barcode format), "confidence" (the confidence value of the barcode zone), "moduleSize" (barcode module size), "pageNumber" (0-based page number), "terminatePhase" (terminate phase), "x1y1x2y2x3y3x4y4" (the coordinates of the barcode zone).

## Example

Code snippet in C++:

```cpp
    char sError[512];
    CBarcodeReader* reader = new CBarcodeReader();
    reader->InitLicense("Insert your license here");
    PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();
    reader->GetRuntimeSettings(runtimeSettings);          // Get the current runtime settings
    runtimeSettings->localizationModes[0] = LM_LINES;     // Only use LM_LINES as the localization mode
    runtimeSettings->localizationModes[1] = LM_SKIP;
    runtimeSettings->localizationModes[2] = LM_SKIP;
    runtimeSettings->localizationModes[3] = LM_SKIP;
    reader->UpdateRuntimeSettings(runtimeSettings);
    reader->DecodeFile("Insert the image file path here", "");// Start decoding
    TextResultArray* result = NULL;
    reader->GetAllTextResults(&result);                   // Get results
    int icount = result->resultsCount;
    CBarcodeReader::FreeTextResults(&result);
    delete runtimeSettings;
    delete reader;
```

Example JSON template:

```json
{
    "ImageParameter": {
        "Name": "ImageParameter1", 
        "Description": "This is LocalizationMode demonstrate", 
        "LocalizationModes":[
            {
              "Mode":"LM_CONNECTED_BLOCKS"
            },
            {
              "Mode":"LM_SCAN_DIRECTLY",
              "ScanStride":0,
              "ScanDirection":0
            },
            {
              "Mode":"LM_STATISTICS"
            },
            {
              "Mode":"LM_LINES"
            }
          ],
         "DeblurLevel":9
    }, 
    "Version": "3.0"
}   
```




[1]:assets\how-to-set-localization-modes\original-barcode.png

[2]:assets\how-to-set-localization-modes\contaminated-barcode.png

[3]:assets\how-to-set-localization-modes\dotcode.png

[4]:assets\how-to-set-localization-modes\postalcode.png

[5]:assets\how-to-set-localization-modes\original-barcode-contours.png

[6]:assets\how-to-set-localization-modes\contaminated-barcode-contours.png

[7]:assets\how-to-set-localization-modes\contaminated-barcode-lines.png

[8]:assets\how-to-set-localization-modes\original-barcode-lines.png

[9]:assets\how-to-set-localization-modes\binarized-qrcode.png
