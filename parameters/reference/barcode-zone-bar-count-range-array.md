---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for BarcodeZoneBarCountRangeArray
description: This page shows Dynamsoft Barcode Reader Parameter Reference for BarcodeZoneBarCountRangeArray.
keywords: BarcodeZoneBarCountRangeArray, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/barcode-zone-bar-count-range-array.html
---


# BarcodeZoneBarCountRangeArray 

`BarcodeZoneBarCountRangeArray` is a parameter to specify the range of bar count of the barcode zone for barcodes searching. By default, the minimum bar count is 1 and the maximum bar count is 128.

    
## Setting Methods
`BarcodeZoneBarCountRangeArray` is supported to be set through JSON template.

### As JSON Parameter
`BarcodeZoneBarCountRangeArray` as a JSON parameter is defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| BarcodeZoneBarCountRangeArray | A JSON Object array while each Object is defined as below. |

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| MinValue | A number from [1, 0x7fffffff] | Sets the minimum bar count.  |
| MaxValue | A number from [1, 0x7fffffff] | Sets the maximum bar count. |


**JSON Example**   
```
{
    "BarcodeZoneBarCountRangeArray": [
    {
        "MinValue": 1,
        "MaxValue": 128
    }
    ]
}
```


<!--
## Impacts on Performance
### Speed
Enabling `BarcodeZoneBarCountRangeArray` for filtering may speed up the process.

### Read Rate
Enabling `BarcodeZoneBarCountRangeArray` to filter out results may reduce the Read Rate. 

### Accuracy
Enabling `BarcodeZoneBarCountRangeArray` to filter out results may improve the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [How to filter out results]({{ site.scenario_settings }}decode-result.html)
