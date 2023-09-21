---
layout: default-layout
title: How to Filter and Sort Barcode Results
description: This page shows how to filter and sort barcode results.
keywords: filter, decode result, barcode confidence, result length, how-to guides
needAutoGenerateSidebar: false
---


# How to Filter and Sort Barcode Results

Dynamsoft Barcode Reader SDK is able to read multiple barcodes at once and return results of all the decoded barcodes. However, you may not want all the results. For example, you may need only the results of a specific barcode format, or you may need only the barcodes with a certain text string. The SDK provides the following parameters to help you filter the barcode results by barcode format, confidence, etc and order the results by confidence, position or format. These parameters can work both individually and in combination.

- [BarcodeFormatIds]({{ site.dcv_parameters_reference }}barcode-reader-task-settings/barcode-format-ids.html)
- [BarcodeAngleRangeArray]({{ site.dcv_parameters_reference }}barcode-format-specification/barcode-angle-range-array.html)
- [BarcodeWidthRangeArray]({{ site.dcv_parameters_reference }}barcode-format-specification/barcode-width-range-array.html)
- [BarcodeHeightRangeArray]({{ site.dcv_parameters_reference }}barcode-format-specification/barcode-height-range-array.html)
- [MinRatioOfBarcodeZoneWidthToHeight]({{ site.dcv_parameters_reference }}barcode-format-specification/min-ratio-of-barcode-zone-width-to-height.html)
- [BarcodeTextLengthRangeArray]({{ site.dcv_parameters_reference }}barcode-format-specification/barcode-text-length-range-array.html)
- [BarcodeTextRegExPattern]({{ site.dcv_parameters_reference }}barcode-format-specification/barcode-text-regex-pattern.html)
- [MinResultConfidence]({{ site.dcv_parameters_reference }}barcode-format-specification/min-result-confidence.html)
- [ModuleSizeRangeArray]({{ site.dcv_parameters_reference }}barcode-format-specification/module-size-range-array.html)
- [TextResultOrderModes]({{ site.dcv_parameters_reference }}barcode-reader-task-settings/text-result-order-modes.html)


## Sample Code

Below is an example illustrating how to filter out QR Code results with confidence higher than 50 and then order the results by position.

* update parameters in your JSON template

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
* apply settings by calling method `InitSettingsFromFile`

    <div class="sample-code-prefix template2"></div>
       >- C++
       >
    >
    ```c++
    char szErrorMsg[256] = {0};
    CCaptureVisionRouter* cvr = new CCaptureVisionRouter;
    cvr->InitSettingsFromFile("PATH-TO-YOUR-SETTING-FILE", szErrorMsg, 256);
    // more process here
    ```
