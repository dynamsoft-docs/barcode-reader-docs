---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for BarcodeBytesRegExPattern
description: This page shows Dynamsoft Barcode Reader Parameter Reference for BarcodeBytesRegExPattern.
keywords: BarcodeBytesRegExPattern, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# BarcodeBytesRegExPattern 

`BarcodeBytesRegExPattern` is a parameter to specify the regular express pattern of barcode byte characters for barcodes searching and result filtering. It is not set by default which means there is no limitation on the barcode byte characters.

    
## Setting Methods
`BarcodeBytesRegExPattern` is supported to be set through JSON template.

### As JSON Parameter
`BarcodeBytesRegExPattern` as a JSON parameter is defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| BarcodeBytesRegExPattern | a string representing regular express pattern |


**JSON Example**   
```
{
    "BarcodeBytesRegExPattern": " ^([*].+[*]|[+].+[+])$"
}
```


<!--
## Impacts on Performance
### Speed
Enabling `BarcodeBytesRegExPattern` for filtering may speed up the process.

### Read Rate
Enabling `BarcodeBytesRegExPattern` to filter out results may reduce the Read Rate. 

### Accuracy
Enabling `BarcodeBytesRegExPattern` to filter out results may improve the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [How to filter out results]({{ site.scenario_settings }}decode-result.html)