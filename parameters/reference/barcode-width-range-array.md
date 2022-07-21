---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for BarcodeWidthRangeArray
description: This page shows Dynamsoft Barcode Reader Parameter Reference for BarcodeWidthRangeArray.
keywords: BarcodeWidthRangeArray, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/barcode-width-range-array.html
---


# BarcodeWidthRangeArray 

`BarcodeWidthRangeArray` is a parameter to specify the range of widths (in pixels) for barcodes searching and result filtering. It is not set by default which means there is no limitation on the barcode widths.

    
## Setting Methods
`BarcodeWidthRangeArray` is supported to be set through JSON template.

### As JSON Parameter
`BarcodeWidthRangeArray` as a JSON parameter is defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| BarcodeWidthRangeArray | A JSON Object array while each Object is defined as below. |

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| MinValue | A number from [0, 0x7fffffff] | Sets the minimum barcode width.  |
| MaxValue | A number from [0, 0x7fffffff] | Sets the maximum barcode width. |


**JSON Example**   
```
{
    "BarcodeWidthRangeArray": [
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
Enabling `BarcodeWidthRangeArray` for filtering may speed up the process.

### Read Rate
Enabling `BarcodeWidthRangeArray` to filter out results may reduce the Read Rate. 

### Accuracy
Enabling `BarcodeWidthRangeArray` to filter out results may improve the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [How to filter out results]({{ site.scenario_settings }}decode-result.html)
