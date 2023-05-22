---
layout: default-layout
title: BarcodeAngleRangeArray - Dynamsoft Barcode Reader Parameter Reference
description: This page shows Dynamsoft Barcode Reader Parameter Reference for BarcodeAngleRangeArray.
keywords: BarcodeAngleRangeArray, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/barcode-angle-range-array.html
---


# BarcodeAngleRangeArray 

`BarcodeAngleRangeArray` defines the range of angles (in degrees) for barcodes searching and result filtering. It is not set by default which means there is no limitation on the barcode angles.
    
## Setting Methods
`BarcodeAngleRangeArray` can be set via JSON template.

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
- [Use RuntimeSettings or Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html)
- [How to filter out results]({{ site.scenario_settings }}decode-result.html)
