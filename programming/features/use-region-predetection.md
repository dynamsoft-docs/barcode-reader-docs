---   
layout: default-layout
description: This article describes how to configure the region predetection mode for different scenario and automatically detect ROI.
title: Use Region Predetection
keywords: region predetection, ROI, region of interest
needAutoGenerateSidebar: false
---

# How To Use Region Predetection

Dynamsoft Barcode Reader (DBR) can automatically detect Region of Interest (ROI) from image. A ROI is a sub area of the image where the barcodes may exist. Enabling ROI detection helps speed up the process since the decoding will only be applied on these ROIs instead of the entire image. For example, in the case of a small barcode in a large image, the time to process the entire image is relatively slow. If the background of the image itself is not very complicated and the barcode is clear, you can enable ROI detection by configuring the parameter  [`RegionPredetectionModes`]({{ site.dcv_parameters_reference }}image-parameter/region-predetection-modes.html), the time to process the small barcode area is much more faster. DBR currently supports three ROI detection modes and supports setting multiple modes at the same time.

## Black & White or Gray Barcode on a Colored Background

If the image is a color image, but the code is black & white or gray, you can use `RPM_GENERAL_RGB_CONTRAST` mode for region detection. As shown in the figure below, there is a small barcode in the lower right corner of the picture. If region detection is turned on, the approximate position of the barcode (the area marked by the red frame) will be detected first. DBR will recognize the barcode in the detection area, not in the entire image, which greatly shortens the recognition time.

![region-predetection-rgb][1]

JSON Template:

```json
{
    "CaptureVisionTemplates": [
        {
            "Name": "CV_0",
            "ImageROIProcessingNameArray": ["TA_0" ]
        }       
    ],
    "TargetROIDefOptions" : [
        {
            "Name": "TA_0",
            "TaskSettingNameArray": [ "BR_0" ]
        }
    ],
    "BarcodeReaderTaskSettingOptions": [
        {
            "Name" : "BR_0",
            "SectionImageParameterArray": [
                {
                    "Section": "ST_REGION_PREDETECTION",
                    "ImageParameterName": "IP_0"
                }
            ]
        }
    ],
    "ImageParameterOptions": [
        {
            "Name": "IP_0",
            "RegionPredetectionModes": [
                {
                    "Mode": "RPM_GENERAL_RGB_CONTRAST"
                }
            ]
        }
    ]
}
```

## Grayscale

If the image is a grayscale image, `RPM_GENERAL_GRAY_CONTRAST` mode is used for region detection. The JSON template of this mode is as follows:

```json
{
    "CaptureVisionTemplates": [
        {
            "Name": "CV_0",
            "ImageROIProcessingNameArray": ["TA_0" ]
        }       
    ],
    "TargetROIDefOptions" : [
        {
            "Name": "TA_0",
            "TaskSettingNameArray": [ "BR_0" ]
        }
    ],
    "BarcodeReaderTaskSettingOptions": [
        {
            "Name" : "BR_0",
            "SectionImageParameterArray": [
                {
                    "Section": "ST_REGION_PREDETECTION",
                    "ImageParameterName": "IP_0"
                }
            ]
        }
    ],
    "ImageParameterOptions": [
        {
            "Name": "IP_0",
            "RegionPredetectionModes": [
                {
                    "Mode": "RPM_GENERAL_GRAY_CONTRAST"
                }
            ]
        }
    ]
}
```

## Colored Barcode on a Colored Background

If the image is a color image and the barcode itself is also colored, `RPM_GENERAL_HSV_CONTRAST` can be used for region detection. At this time, the foreground, background color and fault tolerance rate of the barcode must be specified. The color value is Hue in the HSV space. The value range is [0, 360]. As shown in the figure below, the code in the middle of the picture is colored, the foreground and background colors are yellow and green. If the foreground color of the specified barcode is 46, the background color is 100, and the fault tolerance rate is 28 (at this time, only the foreground color is in the range [46-28 , 46+28], the background color is in the range [100-28, 100+28]), then the region detection can detect the approximate position of the barcode (the area marked by the red frame).

![region-predetection-hsv][2]

JSON Template:

```json
{
    "CaptureVisionTemplates": [
        {
            "Name": "CV_0",
            "ImageROIProcessingNameArray": ["TA_0" ]
        }       
    ],
    "TargetROIDefOptions" : [
        {
            "Name": "TA_0",
            "TaskSettingNameArray": [ "BR_0" ]
        }
    ],
    "BarcodeReaderTaskSettingOptions": [
        {
            "Name" : "BR_0",
            "SectionImageParameterArray": [
                {
                    "Section": "ST_REGION_PREDETECTION",
                    "ImageParameterName": "IP_0"
                }
            ]
        }
    ],
    "ImageParameterOptions": [
        {
            "Name": "IP_0",
            "RegionPredetectionModes": [
                {
                    "Mode": "RPM_GENERAL_HSV_CONTRAST",
                    "MinImageDimension": 16384,
                    "ForeAndBackgroundColours":"[46, 100, 28]"
                }
            ]
        }
    ]
}
```

## Other color characteristic regions in the image

For some special images, the code area has no obvious features to be detected directly, but there are some other regions with color features on the image. At this time, `RPM_GENERAL_HSV_CONTRAST` mode can also be used to detect these areas with color features. If the position of the barcode is fixed relative to the position of these areas, the position of the barcode can be deduced from the position of these areas, thereby realizing a quick barcode recognition.  
As shown in the figure below, there is a clear yellow label area. If the background color is set to yellow 54 and the fault tolerance is 28, the exact position of the label can be detected (the area marked by the red frame), and then use `RelativeRegions` parameter to get the relative position of the barcode region (the area marked by the green frame).


![region-predetection-label][3]

JSON Template:

```json
{
    "CaptureVisionTemplates": [
        {
            "Name": "CV_0",
            "ImageROIProcessingNameArray": ["TA_0" ]
        }       
    ],
    "TargetROIDefOptions" : [
        {
            "Name": "TA_0",
            "TaskSettingNameArray": [ "BR_0" ]
        }
    ],
    "BarcodeReaderTaskSettingOptions": [
        {
            "Name" : "BR_0",
            "SectionImageParameterArray": [
                {
                    "Section": "ST_REGION_PREDETECTION",
                    "ImageParameterName": "IP_0"
                }
            ]
        }
    ],
    "ImageParameterOptions": [
        {
            "Name": "IP_0",
            "RegionPredetectionModes": [
                {
                    "Mode": "RPM_GENERAL_HSV_CONTRAST",
                    "MinImageDimension": 16384,
                    "ForeAndBackgroundColours":"[-1, 54, 28]",
                    "RelativeRegions":"[35, 130, 88, 170, -1]"
                }
            ]
        }
    ]
}
```

[1]:assets/use-region-predetection/region-predetection-rgb.png
[2]:assets/use-region-predetection/region-predetection-hsv.png
[3]:assets/use-region-predetection/region-predetection-label.png

## Related Articles

- [Use Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html#json-template)
