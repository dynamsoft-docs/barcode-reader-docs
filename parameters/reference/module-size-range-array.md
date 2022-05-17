---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ModuleSizeRangeArray
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ModuleSizeRangeArray.
keywords: ModuleSizeRangeArray, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# ModuleSizeRangeArray 

`ModuleSizeRangeArray` is a parameter to specify the range of module size (in pixels) for barcodes searching and result filtering. It is not set by default which means there is no limitation on the barcode module size.

    
## Setting Methods
`ModuleSizeRangeArray` is supported to be set through JSON template.

### As JSON Parameter
`ModuleSizeRangeArray` as a JSON parameter is a JSON Object array defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| ModuleSizeRangeArray | a JSON Object defined as below |

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| MinValue | A number from [0, 360] | Sets the minimum barcode module size.  |
| MaxValue | A number from [0, 360] | Sets the maximum barcode module size. |


**JSON Example**   
```
{
    "ModuleSizeRangeArray": [
    {
        "MinValue": 3,
        "MaxValue": 20
    }
    ]
}
```


<!--
## Impacts on Performance
### Speed
Enabling `ModuleSizeRangeArray` for filtering may speed up the process.

### Read Rate
Enabling `ModuleSizeRangeArray` to filter out results may reduce the Read Rate. 

### Accuracy
Enabling `ModuleSizeRangeArray` to filter out barcodes with small module size may improve the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [Configure parameters for a certain barcode format]({{ site.scenario_settings }}format-specification.html)