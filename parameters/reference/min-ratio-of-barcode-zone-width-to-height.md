---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for MinRatioOfBarcodeZoneWidthToHeight
description: This page shows Dynamsoft Barcode Reader Parameter Reference for MinRatioOfBarcodeZoneWidthToHeight.
keywords: MinRatioOfBarcodeZoneWidthToHeight, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/min-ratio-of-barcode-zone-width-to-height.html
---


# MinRatioOfBarcodeZoneWidthToHeight 

`MinRatioOfBarcodeZoneWidthToHeight` is a parameter to specify the minimum ratio (width/height) of the barcode zone. It is defined as below:

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *int* | [0, 10000] | 0 |


**Remarks**  
- 0: means no limitation.

    
## Setting Methods
`MinRatioOfBarcodeZoneWidthToHeight` is supported to be set through JSON template.

### As JSON Parameter
`MinRatioOfBarcodeZoneWidthToHeight` as a JSON parameter is a number value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| MinRatioOfBarcodeZoneWidthToHeight | A number from [0, 10000] |


**JSON Example**   
```
{
    "MinRatioOfBarcodeZoneWidthToHeight": 100
}
```


<!--
## Impacts on Performance
### Speed
Enabling `MinRatioOfBarcodeZoneWidthToHeight` for filtering may speed up the process.

### Read Rate
Enabling `MinRatioOfBarcodeZoneWidthToHeight` to filter out results may reduce the Read Rate. 

### Accuracy
Enabling `MinRatioOfBarcodeZoneWidthToHeight` to filter out results may improve the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [How to filter out results]({{ site.scenario_settings }}decode-result.html)
