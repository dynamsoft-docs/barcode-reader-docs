---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for BarcodeHeightRangeArray
description: This page shows Dynamsoft Barcode Reader Parameter Reference for BarcodeHeightRangeArray.
keywords: BarcodeHeightRangeArray, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# BarcodeHeightRangeArray 

`BarcodeHeightRangeArray` is a parameter to specify the range of heights (in pixels) for barcodes searching and result filtering. It is not set by default which means there is no limitation on the barcode heights.

    
## Setting Methods
`BarcodeHeightRangeArray` is supported to be set through JSON template.

### As JSON Parameter
`BarcodeHeightRangeArray` as a JSON parameter is defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| BarcodeHeightRangeArray | A JSON Object array while each Object is defined as below. |

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| MinValue | A number from [0, 0x7fffffff] | Sets the minimum barcode height.  |
| MaxValue | A number from [0, 0x7fffffff] | Sets the maximum barcode height. |


**JSON Example**   
```
{
    "BarcodeHeightRangeArray": [
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
Enabling `BarcodeHeightRangeArray` for filtering may speed up the process.

### Read Rate
Enabling `BarcodeHeightRangeArray` to filter out results may reduce the Read Rate. 

### Accuracy
Enabling `BarcodeHeightRangeArray` to filter out results may improve the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [How to filter out results]({{ site.scenario_settings }}decode-result.html)
