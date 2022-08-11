---   
layout: default-layout
description: This article describes how to configure the region predetection mode for different scenario and automatically detect ROI.
title: How To Use Region Predetection
keywords: region predetection,ROI,region of interest
needAutoGenerateSidebar: false
permalink: /parameters/scenario-settings/how-to-use-region-predetection.html
---

# How To Use Region Predetection

DBR can automatically detect barcodes in a Region of Interest (ROI) through configuration parameters. For example, in the case of small barcodes in a large image, if the background of the image itself is not very complicated and the barcode is clear, then the time to process the entire image is relatively fast. You can use region detection to pre-detect the ROI of the large image to get several areas where the barcodes may exist to reduce processing time. You can enable region detection by configuring the parameter  [`RegionPredetectionModes`]({{ site.parameters_reference }}region-predetection-modes.html#regionpredetectionmodes). DBR currently supports three area detection modes and supports setting multiple modes at the same time.

## Black & White or gray barcode on a colored background

If the image is a color image, but the code is black & white or gray, you can use RPM_GENERAL_RGB_CONTRAST mode for region detection. As shown in the figure below, there is a small barcode in the lower right corner of the picture. If region detection is turned on, the approximate position of the barcode (the area marked by the red frame) will be detected first. DBR will recognize the barcode in the detection area, not in the entire image, which greatly shortens the recognition time. You can observe the location of the detected area through the intermediate result IRT_PREDETECTED_REGION.

![region-predetection-rgb][1]

JSON Template:

```json
{
    "ImageParameter": {
        "BarcodeFormatIds": ["BF_ALL"],
        "RegionPredetectionModes":[
            {
                "Mode":"RPM_GENERAL_RGB_CONTRAST"
            }
        ]
    },
    "Version": "3.0"
} 
```

## Grayscale

If the image is a grayscale image, RPM_GENERAL_GRAY_CONTRAST mode is used for region detection. The JSON template of this mode is as follows:

```json
{
    "ImageParameter": {
        "BarcodeFormatIds": ["BF_ALL"],
        "RegionPredetectionModes":[
            {
                "Mode":"RPM_GENERAL_GRAY_CONTRAST"
            }
        ]
    },
    "Version": "3.0"
} 
```

## Colored barcode on a colored background

If the image is a color image and the barcode itself is also colored, RPM_GENERAL_HSV_CONTRAST can be used for region detection. At this time, the foreground, background color and fault tolerance rate of the barcode must be specified. The color value is Hue in the HSV space. The value range is [0, 360). As shown in the figure below, the code in the middle of the picture is colored, the foreground and background colors are yellow and green. If the foreground color of the specified barcode is 46, the background color is 100, and the fault tolerance rate is 28 (at this time, only the foreground color is in the range [46-28 , 46+28], the background color is in the range [100-28, 100+28]), then the region detection can detect the approximate position of the barcode (the area marked by the red frame). You can observe the location of the detected region through the intermediate result IRT_PREDETECTED_REGION.

![region-predetection-hsv][2]

JSON Template:

```json
{
    "ImageParameter": {
        "BarcodeFormatIds": ["BF_ALL"],
        "RegionPredetectionModes":[
            {
                "Mode":"RPM_GENERAL_HSV_CONTRAST",
                "MinImageDimension":16384,
                "ForeAndBackgroundColours":"[46, 100, 28]"
            }
        ]
    },
    "Version": "3.0"
} 
```

## Other color characteristic regions in the image

For some special images, the code area has no obvious features to be detected directly, but there are some other regions with color features on the image. At this time, RPM_GENERAL_HSV_CONTRAST mode can also be used to detect these areas with color features. If the position of the barcode is fixed relative to the position of these areas, the position of the barcode can be deduced from the position of these areas, thereby realizing a quick barcode recognition. 
As shown in the figure below, there is a clear yellow label area. If the background color is set to yellow 54 and the fault tolerance is 28, the exact position of the label can be detected (the area marked by the red frame, can be observed through the intermediate result IRT_PREDETECTED_QUADRILATERAL), and then use RelativeBarcodeRegions parameter to get the relative position of the barcode region (the area marked by the green frame).


![region-predetection-label][3]

JSON Template:

```json
{
    "ImageParameter": {
        "BarcodeFormatIds": ["BF_ALL"],
        "RegionPredetectionModes":[
            {
                "Mode":"RPM_GENERAL_HSV_CONTRAST",
                "MinImageDimension":16384,
                "ForeAndBackgroundColours":"[-1, 54, 28]",
                "RelativeBarcodeRegions":"[35, 130, 88, 170, -1]"
            }
        ]
    },
    "Version": "3.0"
} 
```

[1]:assets/how-to-use-region-predetection/region-predetection-rgb.png
[2]:assets/how-to-use-region-predetection/region-predetection-hsv.png
[3]:assets/how-to-use-region-predetection/region-predetection-label.png



