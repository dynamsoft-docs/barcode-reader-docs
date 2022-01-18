---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for BarcodeAngleRangeArray
description: This page shows Dynamsoft Barcode Reader Parameter Reference for BarcodeAngleRangeArray.
keywords: BarcodeAngleRangeArray, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# BarcodeAngleRangeArray 

`BarcodeAngleRangeArray` is a parameter to specify the range of angles (in degrees) for barcodes searching and result filtering. It is not set by default which means there is no limitation on the barcode angles.

    
## Setting Methods
`BarcodeAngleRangeArray` is supported to be set through JSON template.

### As JSON Parameter
`BarcodeAngleRangeArray` as a JSON parameter is defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| BarcodeAngleRangeArray | A JSON Object array while each Object is defined as below. |

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| MinValue | A number from [0, 360] | Sets the minimum barcode angle.  |
| MaxValue | A number from [0, 360] | Sets the maximum barcode angle . |


**JSON Example**   
```
{
    "BarcodeAngleRangeArray": [
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
Enabling `BarcodeAngleRangeArray` for filtering may speed up the process.

### Read Rate
Enabling `BarcodeAngleRangeArray` to filter out results may reduce the Read Rate. 

### Accuracy
Enabling `BarcodeAngleRangeArray` to filter out results may improve the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [How to filter out results]({{ site.scenario_settings }}decode-result.html)