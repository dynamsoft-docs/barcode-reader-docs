---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ReturnPartialBarcodeValue
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ReturnPartialBarcodeValue.
keywords: ReturnPartialBarcodeValue, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/return-partial-barcode-value.html
---


# ReturnPartialBarcodeValue 

`ReturnPartialBarcodeValue` is a parameter to specify whether to return partial barcode value(s). It is defined as below:

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *int* | [0, 1] | 1 |


**Remarks**  
- 0: do not return partial barcode value(s).
- 1: return partial barcode value(s).


    
## Setting Methods
`ReturnPartialBarcodeValue` is supported to be set through JSON template.


### As JSON Parameter
`ReturnPartialBarcodeValue` as a JSON parameter is a number value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| ReturnPartialBarcodeValue | A number from [0, 1] |


**JSON Example**   
```
{
    "ReturnPartialBarcodeValue": 1
}
```


<!--
## Impacts on Performance
### Speed
Disabling `ReturnPartialBarcodeValue` may improve the Speed.

### Read Rate
Enabling `ReturnPartialBarcodeValue` may improve the Read Rate.

### Accuracy
Disabling `ReturnPartialBarcodeValue` may improve the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
