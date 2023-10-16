---   
layout: default-layout 
description: This article describes how to configure the BarcodeFormatSpecification parameter in a template to decode a particular barcode type
title: Use Format Specific Configuration
keywords: nonstandard barcode, specification, template
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
---

# Use Format Specific Configuration

`BarcodeFormatSpecification` is part of the Dynamsoft Barcode Reader (DBR) template and allows you to configure settings that apply only to the specified barcode format.

This article covers the following parameters provided in a `BarcodeFormatSpecification` object:

- [Use Format Specific Configuration](#use-format-specific-configuration)
  - [BarcodeFormatIds](#barcodeformatids)
  - [MirrorMode](#mirrormode)
  - [RequireStartStopChars](#requirestartstopchars)
  - [AllModuleDeviation](#allmoduledeviation)
  - [HeadModuleRatio, TailModuleRatio](#headmoduleratio-tailmoduleratio)
  - [StandardFormat](#standardformat)
  - [AustralianPostEncodingTable](#australianpostencodingtable)
  - [MinQuietZoneWidth](#minquietzonewidth)
  - [ModuleSizeRangeArray](#modulesizerangearray)

## BarcodeFormatIds

Specifies the barcode type(s) for which all settings under the `BarcodeFormatSpecification` object are applicable exclusively. This is essential to make any format specific configuration. Read on to see how it is used in actual templates.

## MirrorMode

This parameter specifies whether to decode mirror barcodes.

Sometimes the image we get is a mirror image of the actual scene. For example, the following is a normal QR code

![normal QR][1]

and this is the same code when mirrored:

![mirror QR][2]

For 2D barcodes, mirroring may cause the decoding to fail. In this case, we can configure `MirrorMode` to handle it. 

The following template configures DBR to read mirrored QR codes only:

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
            "BarcodeFormatSpecificationNameArray": "FS_0"
        }
    ],
    "BarcodeFormatSpecificationOptions": [
        {
            "Name" : "FS_0",
            "BarcodeFormatIds" : ["BF_QR_CODE"],
            "MirrorMode" : "MM_MIRROR"
        }
    ]
}
```

## RequireStartStopChars

This parameter specifies whether decoding requires start and stop symbols.

1D barcodes usually have fixed start and stop symbols. Normally, DBR can only decode a barcode properly if it finds the start and stop symbols. However, in some cases, the actual barcode symbol may be missing the start and/or stop symbols. `RequireStartStopChars` is designed to read these non-standard barcodes and is used to specify whether the start and stop symbols are required for decoding. The allowed values are

* 0: start and stop symbols are optional
* 1: start and stop symbols are required

The figure below shows a standard Code39 with start and stop symbols:

![standard-code39][3]

This one shows the same barcode without start and stop symbols:

![code39 without start and end pattern][4]

The following template configures DBR to read Code39 barcodes that don't have start and/or stop symbols:

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
            "BarcodeFormatIds" : ["BF_CODE_39"],
            "BarcodeFormatSpecificationNameArray": "FS_0"
        }
    ],
    "BarcodeFormatSpecificationOptions": [
        {
            "Name" : "FS_0",
            "BarcodeFormatIds": ["BF_CODE_39"],
            "RequireStartStopChars" : 0
        }
    ]
}
```

## AllModuleDeviation

This parameter specifies the deviation (in moduleSize) of the bar width from the standard bar width for 1D barcodes. The default value is 0.

Occasionally, due to typographical errors, 1D barcodes may contain bars of non-standard widths. Such barcodes are considered invalid and ignored by DBR. If you want DBR to read these barcodes, you can use the parameter `AllModuleDeviation`.

Note that "all" in the parameter name means it only works if all bars (black & white) of the barcode are off (have the same deviation). For example, if the width (in moduleSize) of bars for a standard barcode are [6, 2, 4, 1], a deviation of 2 would mean the widths become [8, 4, 6, 3], whereas the widths [12, 4, 8, 2] would be considered correctly enlarged.

To utilize this parameter, you need to set the following parameters as well:

1. `BarcodeFormatSpecification.BarcodeFormatIds` should be set to `BF_NONSTANDARD_BARCODE`, which indicates that settings in current `BarcodeFormatSpecification` apply only to non-standard barcodes.

2. `BarcodeFormatSpecification.StandardFormat` should be set to a standard 1D barcode format such as `BF_CODE128` on which DBR applies the deviation.

3. `BarcodeReaderTaskSetting.BarcodeFormatIds` should be set to `BF_NONSTANDARD_BARCODE`, which means non-standard barcodes are to be read.

The following shows a standard Code128 barcode with a module size of 2px followed by a non-standard Code128 barcode which consists of bars with a deviation of 4px.

![standard-code128][5]

![code128-deviation][6]

To read this non-standard barcode, we can set the deviation to 2 as shown in the following template:

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
            "BarcodeFormatIds" : ["BF_NONSTANDARD_BARCODE"],
            "BarcodeFormatSpecificationNameArray": "FS_0"
        }
    ],
    "BarcodeFormatSpecificationOptions": [
        {
            "Name" : "FS_0",
            "BarcodeFormatIds": ["BF_NONSTANDARD_BARCODE"],
            "StandardFormat": "BF_CODE_128",
            "AllModuleDeviation" : 2
        }
    ]
}
```

## HeadModuleRatio, TailModuleRatio

These parameters specify the exception bars used as the start or stop symbols of a non-standard 1D barcode.

The last parameter [`AllModuleDeviation`](#allmoduledeviation) handles barcodes consisting of all bars that deviate in the same way. If the bars that make up the start or stop symbol of a barcode have irregular deviations, `HeadModuleRatio` and `TailModuleRatio` can be used to specify them.

Just like [`AllModuleDeviation`](#allmoduledeviation), you need to set the following parameters to utilize `HeadModuleRatio` and `TailModuleRatio`:

1. `BarcodeFormatSpecification.BarcodeFormatIds` should be set to `BF_NONSTANDARD_BARCODE`, which indicates that settings in current `BarcodeFormatSpecification` apply only to non-standard barcodes.

2. `BarcodeFormatSpecification.StandardFormat` should be set to a standard 1D barcode format such as `BF_CODE128` on which DBR applies the deviation.

3. `BarcodeReaderTaskSetting.BarcodeFormatIds` should be set to `BF_NONSTANDARD_BARCODE`, which means non-standard barcodes are to be read.

The image below is such a non-standard barcode: it has irregular start bars with a ratio of 2:1:1:3:3:1 and irregular stop bars with a ratio of 2:3:3:2:2:2:3.

![nonstandard-start-end][7]

If the barcode conforms to the standard (Code Set C), it should have start bars with a ratio of 2:1:1:2:3:2 and stop bars with a ratio of 2:3:3:1:1:1:2 like this:

![standard-start-end][8]

The following template demostrates how to use `HeadModuleRatio` and `TailModuleRatio` to tell DBR about the irregular start and stop symbols of the barcode:

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
            "BarcodeFormatIds" : ["BF_NONSTANDARD_BARCODE"],
            "BarcodeFormatSpecificationNameArray": "FS_0"
        }
    ],
    "BarcodeFormatSpecificationOptions": [
        {
            "Name" : "FS_0",
            "BarcodeFormatIds": ["BF_NONSTANDARD_BARCODE"],
            "StandardFormat": "BF_CODE_128",
            "HeadModuleRatio": "211331",
            "TailModuleRatio": "2332223",
            "Code128Subset": "C"
        }
    ]
}
```

## StandardFormat

This parameter specifies a standard barcode format based on which a non-standard format is defined. See it in action with the parameters [`AllModuleDeviation`](#allmoduledeviation), [`HeadModuleRatio`](#headmoduleratio-tailmoduleratio) and [`TailModuleRatio`](#headmoduleratio-tailmoduleratio).

## AustralianPostEncodingTable

Australia Post Barcodes contain a segment of customer information that can be decoded using one of two standard-defined decoding tables (CTable, NTable). This parameter is used to specify which table should be used.

|Name|Description|
|---|---|
|CTable|This table allows A..Z, a..z, 1..9, space and # sign.|
|NTable|This table only allows digits.|

This parameter can be set to "C" or "N" and the default value is "C".

The following template demostrates how to use `AustralianPostEncodingTable` to tell DBR to decode Australia Post Barcodes using NTable:

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
            "BarcodeFormatIds" : ["BF_AUSTRALIANPOST"],
            "BarcodeFormatSpecificationNameArray": "FS_0"
        }
    ],
    "BarcodeFormatSpecificationOptions": [
        {
            "Name" : "FS_0",
            "BarcodeFormatIds": ["BF_AUSTRALIANPOST"],
            "AustralianPostEncodingTable": "N"
        }
    ]
}
```

## MinQuietZoneWidth

Quiet zone is the blank margin on both sides of the barcode that tells the barcode reader where the barcode symbol starts and stops. Ideally, there should be enough space on both ends. However, real-life barcodes may have thinner margins than expected. To handle this, we can use `MinQuietZoneWidth` to specify the minimum width of the quiet zone.

![barcode-quietzone-definition][9]

Here is a sample image with a very narrow quite zone:

![barcode-narrow-wide-quietzone][10]

In this case, we can set `MinQuietZoneWidth` to 1 or 0:

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
            "BarcodeFormatSpecificationNameArray": "FS_0"
        }
    ],
    "BarcodeFormatSpecificationOptions": [
        {
            "Name" : "FS_0",
            "BarcodeFormatIds": ["BF_ONED"],
            "MinQuietZoneWidth": 1
        }
    ]
}
```

## ModuleSizeRangeArray

The module size is the width of the thinnest possible bar for 1D barcodes or the width of the smallest building block for a 2D barcode. By default, DBR will try to locate and decode barcodes with any module size. In some cases, you may only be interested in barcodes with certain module sizes. In this case, you can use `ModuleSizeRangeArray` to specify a range of different module sizes for DBR to use when reading barcodes.

The allowed values range from 0 to 0x7fffffff in pixels.

The template below limits the module size to 10 ~ 100.

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
            "BarcodeFormatSpecificationNameArray": "FS_0"
        }
    ],
    "BarcodeFormatSpecificationOptions": [
        {
            "Name" : "FS_0",
            "ModuleSizeRangeArray":[
                {
                  "MaxValue":100,
                  "MinValue":10
                }
            ] 
        }
    ]
}
```

[1]:assets/format-specification/normal-qr.png

[2]:assets/format-specification/mirror-qr.png

[3]:assets/format-specification/standard-code39.png

[4]:assets/format-specification/code39-without-start-end.png

[5]:assets/format-specification/standard-code128.png

[6]:assets/format-specification/code128-deviation.png

[7]:assets/format-specification/nonstandard-start-end.png

[8]:assets/format-specification/standard-start-end.png

[9]:assets/format-specification/barcode-quietzone-definition.png

[10]:assets/format-specification/barcode-with-narrow-quietzone.png
