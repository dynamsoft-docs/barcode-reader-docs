---   
layout: default-layout
description: This article describes how to filter and sort decoding results and related parameters
title: How to filter and sort decoding results
keywords: decode result
permalink: /parameters/scenario-settings/decode-result.html
---

# How to filter and sort decoding results

The `DBR` decoding result contains a variety of information, and we provide flexible parameters to filter and sort the results you care about.

## Angle, width, height and text length of the decoded result

You can set the angle, width, height, and text length requirements that the decoded result should meet through parameters, and the results that do not meet the setting requirements will be filtered out.

- [`BarcodeAngleRangeArray`]({{ site.parameters_reference }}barcode-angle-range-array.html)   

    Set the angle range that the returned result needs to meet, the value range is [0,360] (in degrees). 

    The definition of Angle in `DBR` is: the angle between the vector at the lower left corner of the barcode as the starting point and the end point at the lower right corner of the barcode and the X axis, clockwise is positive. Let us take actual pictures to illustrate the angle
   
   ![1D Angle Example][4]   
   
   ![QR Angle Example][5]   
   
   ![DataMatrix Angle Example][2]   
   
   ![Aztec Angle Example][1]   
   
   ![Maxicode Angle Example][3]   
- [`BarcodeHeightRangeArray`]({{ site.parameters_reference }}barcode-height-range-array.html)

    Set the height range that the returned result needs to meet, the value range is [0,0x7ffffffff] (in pixels);
    
- [`BarcodeWidthRangeArray`]({{ site.parameters_reference }}barcode-width-range-array.html)   

    Set the width range that the returned result needs to meet, the value range is [0,0x7ffffffff] (in pixels);
    
- [`BarcodeBytesLengthRangeArray`]({{ site.parameters_reference }}barcode-bytes-length-range-array.html)   

    Set the length range that Bytes needs to meet in the returned result, the value range is [0,0x7ffffffff] (in bytes);

- [`BarcodeTextLengthRangeArray`]({{ site.parameters_reference }}barcode-text-length-range-array.html)   

    Set the length range of the Text in the returned result, the value range is [0,0x7ffffffff] (in the number of characters).

## Use Regular Expression

You can use [`BarcodeTextRegExPattern`]({{ site.parameters_reference }}barcode-text-regex-pattern.html) to specify the regular expression requirements that must be met when `DBR` returns the result text. The default value is empty which means there is no limitation.

For example, if we set [`BarcodeTextRegExPattern`]({{ site.parameters_reference }}barcode-text-regex-pattern.html) as "[0-9]\d{4,11}", then the result text should be 5 to 12 digits. If the result is 123456 which matches the expression, it will be returned. If it is 123 which has only 3 digits or a123456 which has a letter in it, they don 't match the expression and will not be returned.

For more info, check out About Regular [Expression](https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2010/28hw3sce(v=vs.100))

## Use Confidence Score

The decoding result of `DBR` will have a confidence score, and the result with too low score may be wrong. You can use [`MinResultConfidence`]({{ site.parameters_reference }}min-result-confidence.html) to specify the minimum score that `DBR` needs to meet to return results. The default value is 0, which means there is no limit on the score of the returned result.

Please refer to the following sample program for how to obtain the confidence of the returned result

```cpp
CBarcodeReader* reader = new CBarcodeReader();     
reader->InitLicense("LICENSE-KEY");     
reader->DecodeFile("FILE-PATH", "");             
TextResultArray* pResult = NULL;     
reader->GetAllTextResults(&pResult);
int iCount = pResult->resultsCount;  
for(int j = 0; j < iCount; j++)
{  
    TextResult* pBarcode = pResults->results[j];  
    LocalizationResult* pLocRes = pBarcode->localizationResult;  
    printf("confidence:%d\n",pLocRes->confidence);
}  
dynamsoft::dbr::CBarcodeReader::FreeTextResults(&pResult);     
delete reader;  
```

## Coordinate format of decoding result position

For the position coordinates of the decoding result, the parameter [`ResultCoordinateType`]({{ site.parameters_reference }}result-coordinate-type.html) can be used to specify whether the coordinates are in pixels or percentage.

|Name|Notes|
|------|-----|
|RCT_PERCENTAGE|The x of the returned coordinate point is the percentage of the image width, and y is the percentage of the image height|
|RCT_PIXEL|The default. The coordinate point of the returned result is the pixel coordinate point|

## Ordering

[`TextResultOrderModes`]({{ site.parameters_reference }}text-result-order-modes.html#textresultordermodes) is used to sort the decoding results.

|Name|Notes|
|------|-----|
|TROM_CONFIDENCE|Sort in descending order according to the score of the returned result|
|TROM_POSITION|According to the coordinate position of the returned result, sort from top to bottom and from left to right|
|TROM_FORMAT|Sort letters and numbers according to the code type string of the returned result|
|TROM_SKIP|Skip the sorting|

## Clarity

[`ReturnBarcodeZoneClarity`]({{ site.parameters_reference }}return-barcode-zone-clarity.html) specifies whether to return the clarity of the barcode region detected on the image. It can be set to 0 or 1. The default value is 0 which means no clarity is returned. To return the clarity, set it to 1.

`DBR` uses the gray gradient changes of adjacent pixels to measure the clarity of the code area. The value range of `BarcodeZoneClarity` is 0~100, the larger the number, the clearer it is.

Please refer to the following sample program on how to obtain 

```cpp
CBarcodeReader* reader = new CBarcodeReader();     
reader->InitLicense("LICENSE-KEY");    
PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();     
reader->GetRuntimeSettings(runtimeSettings); 
runtimeSettings->returnBarcodeZoneClarity = 1;
char sError[512];  
reader->UpdateRuntimeSettings(runtimeSettings, sError, 512);
reader->DecodeFile("FILE-PATH", "");
TextResultArray* pResult = NULL;     
reader->GetAllTextResults(&pResult); 
int iCount = pResult->resultsCount;  
for(int j = 0; j < iCount; j++)
{  
    TextResult* pBarcode = pResults->results[j];  
    ExtendResult* pExResult = pBarcode->result[0];  
    printf("clarity:%d\n", pExResult->clarity);
}  
dynamsoft::dbr::CBarcodeReader::FreeTextResults(&pResult);
delete runtimeSettings;
delete reader;
```

## Sample template

```json
{
    "Version": "3.0", 
    "ImageParameter": {
        "FormatSpecificationNameArray": [
            "FP_1"
        ], 
        "TextResultOrderModes": [
            {
                "Mode": "TROM_CONFIDENCE"
            }
        ],  //Order the results by confidence score
        "ResultCoordinateType": "RCT_PIXEL", //Return the coordinates in pixels
        "ReturnBarcodeZoneClarity": 0        //Do not return the clarity
    }, 
    "FormatSpecification": {
        "Name": " FP_1", 
        "BarcodeAngleRangeArray": null,    //Do not limit the angle
        "BarcodeBytesLengthRangeArray": [
            {
                "MaxValue": 20, 
                "MinValue": 0
            }
        ], // Limit the number of the resulting bytes to 0~20
        "BarcodeFormatIds": [
            "BF_CODE_39"
        ], 
        "BarcodeTextRegExPattern": "[0-9]{4}", //Limit the result to be a 4-digit string
        "BarcodeHeightRangeArray": [
            {
                "MaxValue": 500, 
                "MinValue": 0
            }
        ], // Limit the resulting barcode height to 0~500 px
        "BarcodeWidthRangeArray": [
            {
                "MaxValue": 200, 
                "MinValue": 100
            }
        ],//Limit the resulting barcode width to 100~200 px
        "MinResultConfidence": 30 // Limit the results by confidence score (>30)
    }
}

```

[1]:assets\decode-result\aztec_angle_example.png
[2]:assets\decode-result\dm_angle_example.png
[3]:assets\decode-result\maxicode_angle_example.png
[4]:assets\decode-result\oned_angle_example.png
[5]:assets\decode-result\qr_angle_example.png





