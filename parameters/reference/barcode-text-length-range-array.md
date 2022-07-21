---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for BarcodeTextLengthRangeArray
description: This page shows Dynamsoft Barcode Reader Parameter Reference for BarcodeTextLengthRangeArray.
keywords: BarcodeTextLengthRangeArray, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/barcode-text-length-range-array.html
---


# BarcodeTextLengthRangeArray 

`BarcodeTextLengthRangeArray` is a parameter to specify the range of barcode text length for barcodes searching and result filtering. It is not set by default which means there is no limitation on the barcode text length.

    
## Setting Methods
`BarcodeTextLengthRangeArray` is supported to be set through JSON template.

### As JSON Parameter
`BarcodeTextLengthRangeArray` as a JSON parameter is defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| BarcodeTextLengthRangeArray | A JSON Object array while each Object is defined as below. |

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| MinValue | A number from [0, 0x7fffffff] | Sets the minimum barcode text length.  |
| MaxValue | A number from [0, 0x7fffffff] | Sets the maximum barcode text length. |


**JSON Example**   
```
{
    "BarcodeTextLengthRangeArray": [
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
Enabling `BarcodeTextLengthRangeArray` for filtering may speed up the process.

### Read Rate
Enabling `BarcodeTextLengthRangeArray` to filter out results may reduce the Read Rate. 

### Accuracy
Enabling `BarcodeTextLengthRangeArray` to filter out results may improve the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [How to filter out results]({{ site.scenario_settings }}decode-result.html)
