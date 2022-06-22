---   
layout: default-layout 
description: This article describes how to configure the FormatSpecification parameter to decode a particular barcode type
title: Format Specification
keywords: nonstandard barcode, specification
needAutoGenerateSidebar: false
---

# Barcode format specification
If you want to configure parameters for a certain barcode type, you can use the FormatSpecification. If the FormatSpecification configuration conflicts with the global Image Parameter, the configuration of the FormatSpecification has a higher priority. In this guide, we will introduce the following parameters and their applicable scenarios:

-  [BarcodeFormatIds,BarcodeFormatIds_2](#BarcodeFormatIds,BarcodeFormatIds_2)

    Specifies the barcode type to which the current FormatSpecification configuration applies

-  [MirrorMode](#MirrorMode)

    Specifies the image processing mode for decoding
 
-  [RequireStartStopChars](#RequireStartStopChars)

    Specifies whether the start and end characters are required for decoding

-  [AllModuleDeviation](#AllModuleDeviation)

    Specifies The deviation of the specified bar size from the standard bar size

-  [HeadModuleRati,TailModuleRatio](#HeadModuleRatio,TailModuleRatio)

    Species the number and size of customized bars at the head and tail of non-standard 1D barcode

-  [StandardFormat](#StandardFormat)

    Species a standard barcode format for non-standard 1D character set

-  [AustralianPostEncodingTable](#AustralianPostEncodingTable)

    Species the decoding table used by the Customer Information Field in the AustralianPost Code 

-  [MinQuietZoneWidth](#MinQuietZoneWidth)

    Species the minimum width of the barcode quite zone

-  [ModuleSizeRangeArray](#ModuleSizeRangeArray)

    Species the size range of the module size to search for barcode

-  [Others](#Others)

## BarcodeFormatIds,BarcodeFormatIds_2
This parameter specifies the code type of the current FormatSpecification setting.

## MirrorMode
This parameter specifies the mirroring mode for decoding. Sometimes the image and the real scene happen to be mirror images of each other. For 2D barcodes, mirroring may cause the decoding to fail. In this case, we could configure the MirrorMode to correct the situation. The default value of MirrorMode is MM_BOTH for QRCode, DataMatrix, PDF417, AZTEC, Micro QR Code, Micro PDF417, DotCode and Pharmacode Two-Track, and MM_NORMAL for other barcode types.



| Enumerations    | Value | Note                 |
|-----------|--------|----------------------|
| MM_NORMAL | 0x01   | Keep the original image for the decoding process        |
| MM_MIRROR | 0x02   | Decode the mirror image         |
| MM_BOTH   | 0x04   | Try both of the above methods. |

Below are two sample diagrams of normal and mirror QR

Normal QR

![normal QR][1] 

Mirror QR

![mirror QR][2]

Here is an JSON template where we configure the QR code type for mirroring
```javascript
{
    "ImageParameter": {
        "Name": "ImageParameter1", 
        "Description": "This is mirror mode demonstrate", 
        "FormatSpecificationNameArray": ["FP_1"]
    }, 
    "FormatSpecificationArray": [
        {
            "Name": "FP_1", 
            "BarcodeFormatIds": ["BF_QR_CODE"], 
            "MirrorMode":"MM_MIRROR"
        }
    ], 
    "Version": "3.0"
}   
```

## RequireStartStopChars
1D barcodes usually have fixed start and end characters. Normally, DBR can only decode a barcode properly if it finds the start and end characters. However, in some cases, the actual situation may be missing the start and end characters. RequireStartStopChars is designed to read these non-standard barcodes and is used to specify whether the start and end characters need to be found during 1D decoding. This parameter can be set to 0 or 1. 0 means no start and end characters are needed; 1 represents the need for a start and end.

The figure below shows a standard Code39 with start and end characters

![standard-code39][3]

Below is a Code39 with the same code value but no start and end characters

![code39 without start and end pattern][4]

Here is an JSON template where we don't need a start and end character to decode Code39

```json
{
    "ImageParameter": {
        "Name": "ImageParameter1", 
        "Description": "This is RequireStartStopChars demonstrate", 
        "FormatSpecificationNameArray": ["FP_1"]
    }, 
    "FormatSpecificationArray": [
        {
            "Name": "FP_1", 
            "BarcodeFormatIds": ["BF_CODE_39"],                      
            "RequireStartStopChars":0
        }
    ], 
    "Version": "3.0"
}   
```

## AllModuleDeviation

This parameter specifies the width deviation value of a non-standard 1D barcode type, in moduleSize, with the default value of 0.

In some cases, it is possible for the real 1D barcode width to have an X moduleSize deviation relative to the standard barcode width. By default, DBR will not be able to handle these non-standard cases. Thus, you need to set the AllModuleDeviation to a certain deviation value when facing a non-standard barcode.


When this parameter is used, the following parameters should be used together  
- `FormatSpecification.BarcodeFormatIds_2`  
You need to set `FormatSpecification.BarcodeFormatIds_2` to `NON_STANDARD_BARCODE`, which indicates that you will now define a new non-standard barcode format.
- `FormatSpecification.StandardFormat`    
You need to set `StandardFormat` to a certain standard 1D barcode format, which specifics barcode format you are currently referring to as a non-standard character standard, such as `BF_CODE128`
- `ImageParameter.BarcodeFormatIds_2`   
You need to set `ImageParameter.BarcodeFormatIds_2` to `NON_STANDARD_BARCODE`, which means you will deal with just defined non-standard barcode.

To illustrate this with a practical example, below is a standard Code128, moduleSize 2px

![standard-code128][5]

Next is a non-standard Code128, each bar of which is 4px (2 module size) larger than the standard bar

![code128-deviation][6]

We can set AllModuleDeviation to 2, so that the deviation value of 2 moduleSize will be used during decoding, as a result, the barcode value will be correctly extracted. The following Json template demonstrates the complete configuration.

```json
{
    "ImageParameter": {
        "Name": "ImageParameter1", 
        "Description": "This is deviation demonstrate", 
        "FormatSpecificationNameArray": ["FP_1"],
        "BarcodeFormatIds_2": ["BF2_NONSTANDARD_BARCODE"]
    }, 
    "FormatSpecificationArray": [
        {
            "Name": "FP_1", 
            "BarcodeFormatIds_2": ["BF2_NONSTANDARD_BARCODE"],                          
            "StandardFormat": "BF_CODE_128",    
            "AllModuleDeviation":2          
           
        }
    ], 
    "Version": "3.0"
}   
```

## HeadModuleRatio, TailModuleRatio
Normally, the start and stop characters of 1D barcodes have a standard fixed proportion, but in reality, there may also be situations where the proportion is not standard.

In this situation, If there is a fixed deviation between standard proportion and the non-standard proportion, we could try to set the value of [`AllModuleDeviation`](##AllModuleDeviation) to customize the proportion; If there is an irregular deviation, you can customize the proportion using `HeadModuleRatio` and `TailModuleRatio`.

The following parameters are also needed to customize the head-tail proportion  
- `FormatSpecification.BarcodeFormatIds_2`  
You need to set `FormatSpecification.BarcodeFormatIds_2` to `NON_STANDARD_BARCODE`, which indicates that you will now define a new non-standard barcode format.
- `FormatSpecification.StandardFormat`    
You need to set `StandardFormat` to a certain standard 1D barcode format, which specifies the barcode format you are currently referring to as a non-standard character standard. In the case that `BF_CODE128` is set, subset (A, B and C) needs to specify in `Code128Subset`.
- `ImageParameter.BarcodeFormatIds_2`   
You need to set `ImageParameter.BarcodeFormatIds_2` to `NON_STANDARD_BARCODE`, which means you will deal with just defined non-standard barcode.

Here we use a non-standard Code128 for illustration.
As shown in the figure below, The start character proportion is 2:1:1:3:3:1, which does not conform to the proportion of start characters as defined in the Code128 standard, and its stop character proportion is 2:3:3:2:2:2:2:3, which also does not conform to the stop character proportion.


![nonstandard-start-end][7]

Standard code128 with the same value is shown below

![standard-start-end][8]

By default, DBR will not be able to read the above code128. In this case, in order to read the above non-standard code128, you could set  `HeadModuleRatio` and `TailModuleRatio` as `"211331"` and `"2332223"` respectively. And set `Code128Subset` to `"C"`. The complete JSON configuration is as follows

```json
{
    "ImageParameter": {
        "Name": "ImageParameter1", 
        "Description": "This is HeadModuleRatio and TailModuleRatio demonstrate", 
        "FormatSpecificationNameArray": ["FP_1"],
        "BarcodeFormatIds_2": ["BF2_NONSTANDARD_BARCODE"] 
    }, 
    "FormatSpecificationArray": [
        {
            "Name": "FP_1", 
            "BarcodeFormatIds_2": [                 
                "BF2_NONSTANDARD_BARCODE"
            ],  
            "StandardFormat":"BF_CODE_128", 
            "HeadModuleRatio": "211331",          
            "TailModuleRatio": "2332223", 
            "Code128Subset": "C"                 
        }
    ], 
    "Version": "3.0"
}   
```

## StandardFormat

This parameter specifies the character set of the standard barcode type referenced by the non-standard 1D character set. It should be used together with [`AllModuleDeviation`](##AllModuleDeviation), [`HeadModuleRatio`](##HeadModuleRatio,TailModuleRatio), [`TailModuleRatio`](##HeadModuleRatio,TailModuleRatio), we will not explain this parameter in detail here.

## AustralianPostEncodingTable

The AustralianPost Code has a section of customer information area, which can be decoded using two standard defined decoding tables (N table, C table). This parameter can be set to specify either N table or C table for decoding. Please refer to the AustralianPostcode standard documentation for specific definitions of these two code tables.

This parameter can be set to "C" or "N" and the default value is "C".

You also need to set `FormatSpecification.BarcodeFormatIds_2` to `BF2_AUSTRALIANPOST`.


## MinQuietZoneWidth

There should be enough white space on both sides of the standard barcode as a quiet area. But in reality, there may not be enough white space. In this case, we can use the  `MinQuietZoneWidth` to set the minimum quiet area size, in ModuleSize, with a default value of 4. 

![barcode-quietzone-definition][9]

Here is a sample image with a very narrow quite zone

![barcode-narrow-wide-quietzone][11]

We can set MinQuietZoneWidth to 1 or less, as a result, the above sample image can be properly decoded.

```json
{
    "ImageParameter": {
        "Name": "ImageParameter1", 
        "Description": "This is quiet zone demonstrate", 
        "FormatSpecificationNameArray":["FP_1"],
        "DeblurLevel": 1
    }, 
    "FormatSpecificationArray": [
        {
            "Name": "FP_1", 
            "BarcodeFormatIds": ["BF_CODE_128"],                
            "MinQuietZoneWidth":3
        }
    ], 
    "Version": "3.0"
}   
```

## ModuleSizeRangeArray

This parameter specifies a certain modulesize range for barcode searching,  barcodes which do not meet the criteria will not be decoded,

The default value is null, meaning that the moduleSize of the barcode is not limited

You can set the range to [0,0x7fffffff] in pixels.

JSON template

```json
{
    "ImageParameter": {
        "Name": "ImageParameter1", 
        "Description": "This is template demonstrate", 
        "FormatSpecificationNameArray":["FP_1"]
    }, 
    "FormatSpecificationArray": [
        {
            "Name": "FP_1", 
            "BarcodeFormatIds": [                 
                "BF_CODE_39"
            ], 
            "ModuleSizeRangeArray":[
                {
                  "MaxValue":100,
                  "MinValue":10
                }
            ] 
        }
    ], 
    "Version": "3.0"
}   
```



## Others
The usage of the other parameters in `FormatSpecification` will be covered in more detail in other related documentation than we will expand on in this article.
- BarcodeAngleRangeArray, BarcodeBytesLengthRangeArray, BarcodeHeightRangeArray, BarcodeTextLengthRangeArray, BarcodeWidthRangeArray, BarcodeTextRegExPattern, MinResultConfidence.    

Please refer to [Barcode Results][12]

[1]:assets/format-specification/normal-qr.png

[2]:assets/format-specification/mirror-qr.png

[3]:assets/format-specification/standard-code39.png

[4]:assets/format-specification/code39-without-start-end.png

[5]:assets/format-specification/standard-code128.png

[6]:assets/format-specification/code128-deviation.png

[7]:assets/format-specification/nonstandard-start-end.png

[8]:assets/format-specification/standard-start-end.png

[9]:assets/format-specification/barcode-quietzone-definition.png

[10]:assets/format-specification/barcode-with-wide-quietzone.png

[11]:assets/format-specification/barcode-with-narrow-quietzone.png

[12]:decode-result.html


