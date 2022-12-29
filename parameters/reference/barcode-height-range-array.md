---
layout: default-layout
title: BarcodeHeightRangeArray - Dynamsoft Barcode Reader Parameter Reference
description: This page shows Dynamsoft Barcode Reader Parameter Reference for BarcodeHeightRangeArray.
keywords: BarcodeHeightRangeArray, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/barcode-height-range-array.html
---


# BarcodeHeightRangeArray 

`BarcodeHeightRangeArray` defines the range of heights (in pixels) for barcodes searching and result filtering. It is not set by default which means there is no limitation on the barcode heights.

## Setting Methods
`BarcodeHeightRangeArray` can be set via JSON template.

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
- [Use RuntimeSettings or Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html)
- [How to filter out results]({{ site.scenario_settings }}decode-result.html)
