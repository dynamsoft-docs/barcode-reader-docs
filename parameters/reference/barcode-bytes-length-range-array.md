---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for BarcodeBytesLengthRangeArray
description: This page shows Dynamsoft Barcode Reader Parameter Reference for BarcodeBytesLengthRangeArray.
keywords: BarcodeBytesLengthRangeArray, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# BarcodeBytesLengthRangeArray 

`BarcodeBytesLengthRangeArray` is a parameter to specify the range of barcode bytes length for barcodes searching and result filtering. It is not set by default which means there is no limitation on the barcode byte length.

    
## Setting Methods
`BarcodeBytesLengthRangeArray` is supported to be set through JSON template.

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
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [How to filter out results]({{ site.scenario_settings }}decode-result.html)