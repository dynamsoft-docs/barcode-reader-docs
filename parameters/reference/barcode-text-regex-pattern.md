---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for BarcodeTextRegExPattern
description: This page shows Dynamsoft Barcode Reader Parameter Reference for BarcodeTextRegExPattern.
keywords: BarcodeTextRegExPattern, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# BarcodeTextRegExPattern 

`BarcodeTextRegExPattern` is a parameter to specify the regular express pattern of barcode text characters for barcodes searching and result filtering. It is not set by default which means there is no limitation on the barcode text characters.

    
## Setting Methods
`BarcodeTextRegExPattern` is supported to be set through JSON template.

### As JSON Parameter
`BarcodeTextRegExPattern` as a JSON parameter is defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| BarcodeTextRegExPattern | a string representing regular express pattern |

**JSON Example**   
```
{
    "BarcodeTextRegExPattern": " ^([*].+[*]|[+].+[+])$"
}
```


<!--
## Impacts on Performance
### Speed
Enabling `BarcodeTextRegExPattern` for filtering may speed up the process.

### Read Rate
Enabling `BarcodeTextRegExPattern` to filter out results may reduce the Read Rate. 

### Accuracy
Enabling `BarcodeTextRegExPattern` to filter out results may improve the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [How to filter out results]({{ site.scenario_settings }}decode-result.html)