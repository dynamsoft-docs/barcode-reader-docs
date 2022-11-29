---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for BarcodeBytesLengthRangeArray
description: This page shows Dynamsoft Barcode Reader Parameter Reference for BarcodeBytesLengthRangeArray.
keywords: BarcodeBytesLengthRangeArray, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/barcode-bytes-length-range-array.html
---


# BarcodeBytesLengthRangeArray 

`BarcodeBytesLengthRangeArray` defines the range of barcode bytes length for barcodes searching and result filtering. It is not set by default which means there is no limitation on the barcode byte length.

| Value Type | Value Range | Default Value | Template Structure Type |
| ---------- | ----------- | ------------- | ----------------------- |
| *int* | [0, 0x7fffffff] | N/A | `FormatSpecification` |

    
## Setting Methods
`BarcodeBytesLengthRangeArray` can be set via JSON template.

### As JSON Parameter
`BarcodeBytesLengthRangeArray` as a JSON parameter is defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| BarcodeBytesLengthRangeArray | A JSON Object array while each Object is defined as below. |

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| MinValue | A number from [0, 0x7fffffff] | Sets the minimum barcode bytes length.  |
| MaxValue | A number from [0, 0x7fffffff] | Sets the maximum barcode bytes length. |


**JSON Example**   
```
{
    "BarcodeBytesLengthRangeArray": [
    {
        "MinValue": 100,
        "MaxValue": 200
    }
    ]
}
```


<!--
## Impacts on Performance
### Speed
Enabling `BarcodeBytesLengthRangeArray` for filtering may speed up the process.

### Read Rate
Enabling `BarcodeBytesLengthRangeArray` to filter out results may reduce the Read Rate. 

### Accuracy
Enabling `BarcodeBytesLengthRangeArray` to filter out results may improve the Accuracy.

-->
## Related Articles
- [Use RuntimeSettings or Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html)
- [How to filter out results]({{ site.scenario_settings }}decode-result.html)
