---
layout: default-layout
title: How to Filter and Sort Barcode Results
description: This page shows how to filter and sort barcode results.
keywords: filter, decode result, barcode confidence, result length, how-to guides
needAutoGenerateSidebar: false
---


# How to Filter and Sort Barcode Results

Dynamsoft Barcode Reader SDK is able to read multiple barcodes at once and return results of all the decoded barcodes. However, you may not want all the results. For example, you may need only the results of a specific barcode format, or you may need only the barcodes with a certain text string. The SDK provides the following parameters to help you filter the barcode results by barcode format, confidence, etc and order the results by confidence, position or format. These parameters can work both individually and in combination.

**Available Filter Parameters:**

| Parameter | Description |
|-----------|-------------|
| [BarcodeFormatIds]({{ site.dcvb_parameters_reference }}barcode-reader-task-settings/barcode-format-ids.html) | Filter by barcode format |
| [BarcodeAngleRangeArray]({{ site.dcvb_parameters_reference }}barcode-format-specification/barcode-angle-range-array.html) | Filter by barcode angle (0-360 degrees) |
| [BarcodeWidthRangeArray]({{ site.dcvb_parameters_reference }}barcode-format-specification/barcode-width-range-array.html) | Filter by barcode width in pixels |
| [BarcodeHeightRangeArray]({{ site.dcvb_parameters_reference }}barcode-format-specification/barcode-height-range-array.html) | Filter by barcode height in pixels |
| [MinRatioOfBarcodeZoneWidthToHeight]({{ site.dcvb_parameters_reference }}barcode-format-specification/min-ratio-of-barcode-zone-width-to-height.html) | Filter by width-to-height ratio |
| [BarcodeTextLengthRangeArray]({{ site.dcvb_parameters_reference }}barcode-format-specification/barcode-text-length-range-array.html) | Filter by decoded text length |
| [BarcodeTextRegExPattern]({{ site.dcvb_parameters_reference }}barcode-format-specification/barcode-text-regex-pattern.html) | Filter by regular expression pattern |
| [MinResultConfidence]({{ site.dcvb_parameters_reference }}barcode-format-specification/min-result-confidence.html) | Filter by minimum confidence score |
| [ModuleSizeRangeArray]({{ site.dcvb_parameters_reference }}barcode-format-specification/module-size-range-array.html) | Filter by module size |

**Available Sort Parameter:**

| Parameter | Description |
|-----------|-------------|
| [TextResultOrderModes]({{ site.dcvb_parameters_reference }}barcode-reader-task-settings/text-result-order-modes.html) | Specify how to order the results |

## Filter by Barcode Angle, Width and Height

You can set the angle, width, and height requirements that the decoded result should meet. Results that do not meet the requirements will be filtered out.

### BarcodeAngleRangeArray

Set the angle range that the returned result needs to meet. The value range is [0, 360] (in degrees).

The `Angle` is defined as the angle between the vector from the lower left corner to the lower right corner of the barcode and the X axis, measured clockwise. Here are some examples:

![1D Barcode Angle Example][4]

![QR Code Angle Example][5]

![DataMatrix Angle Example][2]

![Aztec Code Angle Example][1]

![Maxicode Angle Example][3]

### BarcodeWidthRangeArray

Set the width range that the returned result needs to meet. The value range is [0, 0x7fffffff] (in pixels).

### BarcodeHeightRangeArray

Set the height range that the returned result needs to meet. The value range is [0, 0x7fffffff] (in pixels).

## Filter by Text Length

Use `BarcodeTextLengthRangeArray` to set the length range of the decoded text. The value range is [0, 0x7fffffff] (in characters).

## Filter by Regular Expression

Use `BarcodeTextRegExPattern` to specify a regular expression pattern that the decoded text must match. The default value is empty, which means there is no limitation.

For example, if you set `BarcodeTextRegExPattern` to `"[0-9]\d{4,11}"`, then the result text should be 5 to 12 digits. A result like "123456" matches the expression and will be returned, while "123" (only 3 digits) or "a123456" (contains a letter) will not be returned.

For more information about regular expressions, check out [About Regular Expression](https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2010/28hw3sce(v=vs.100)).

## Filter by Confidence Score

The decoding results include a confidence score, and results with too low a score may be incorrect. Use `MinResultConfidence` to specify the minimum confidence score required for results to be returned. The default value is 30, which is the recommended value for 1D barcodes.

## Sort Results with TextResultOrderModes

`TextResultOrderModes` is used to sort the decoding results. The following modes are available:

| Mode | Description |
|------|-------------|
| TROM_CONFIDENCE | Sort in descending order by confidence score |
| TROM_POSITION | Sort by coordinate position, from top to bottom and left to right |
| TROM_FORMAT | Sort alphabetically by barcode format string |
| TROM_SKIP | Skip sorting |

## Example

Below is an example illustrating how to filter out QR Code results with confidence higher than 50 and then order the results by position.

* Update parameters in your JSON template

    ```json
    {
        "CaptureVisionTemplates": [
            {
                "Name" : "CV_0",
                "ImageROIProcessingNameArray": ["TA_0" ]
            }       
        ],
        "TargetROIDefOptions" : [
            {
                "Name" : "TA_0",
                "TaskSettingNameArray": [ "BR_0" ]
            }
        ],
        "BarcodeReaderTaskSettingOptions": [
            {
                "Name" : "BR_0",
                "BarcodeFormatIds" : ["BF_QR_CODE"],
                "TextResultOrderModes" : [
                    {
                        "Mode" : "TROM_POSITION"
                    }
                ],
                "BarcodeFormatSpecificationNameArray": "FS_0"
            }
        ],
        "BarcodeFormatSpecificationOptions": [
            {
                "Name" : "FS_0",
                "MinResultConfidence" : 50
            }
        ]
    }
    ```

* Apply the above settings following the article [Use Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html#json-template).

## Advanced Example

Below is a more comprehensive example that demonstrates multiple filter and sort parameters:

```json
{
    "CaptureVisionTemplates": [
        {
            "Name": "CV_0",
            "ImageROIProcessingNameArray": ["TA_0"]
        }
    ],
    "TargetROIDefOptions": [
        {
            "Name": "TA_0",
            "TaskSettingNameArray": ["BR_0"]
        }
    ],
    "BarcodeReaderTaskSettingOptions": [
        {
            "Name": "BR_0",
            "BarcodeFormatIds": ["BF_CODE_39"],
            "TextResultOrderModes": [
                {
                    "Mode": "TROM_CONFIDENCE"
                }
            ],
            "BarcodeFormatSpecificationNameArray": ["FS_0"]
        }
    ],
    "BarcodeFormatSpecificationOptions": [
        {
            "Name": "FS_0",
            "BarcodeAngleRangeArray": [
                {
                    "MinValue": 0,
                    "MaxValue": 90
                }
            ],
            "BarcodeHeightRangeArray": [
                {
                    "MinValue": 0,
                    "MaxValue": 500
                }
            ],
            "BarcodeWidthRangeArray": [
                {
                    "MinValue": 100,
                    "MaxValue": 200
                }
            ],
            "BarcodeTextLengthRangeArray": [
                {
                    "MinValue": 4,
                    "MaxValue": 20
                }
            ],
            "BarcodeTextRegExPattern": "[0-9]{4,}",
            "MinResultConfidence": 30
        }
    ]
}
```

This template:
- Decodes only CODE_39 barcodes
- Filters results by angle (0-90 degrees), height (0-500 px), width (100-200 px), and text length (4-20 characters)
- Only returns results matching a regular expression (4 or more digits)
- Requires a minimum confidence score of 30
- Orders results by confidence score in descending order

[1]:assets/filter-and-sort/aztec_angle_example.png
[2]:assets/filter-and-sort/dm_angle_example.png
[3]:assets/filter-and-sort/maxicode_angle_example.png
[4]:assets/filter-and-sort/oned_angle_example.png
[5]:assets/filter-and-sort/qr_angle_example.png
