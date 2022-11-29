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

`ReturnPartialBarcodeValue` defines whether to return partial barcode value(s). It is defined as below:

| Value Type | Value Range | Default Value | Template Structure Type |
| ---------- | ----------- | ------------- | ----------------------- |
| *int* | [0, 1] | 1 | `FormatSpecification` |


**Remarks**  
- 0: do not return partial barcode value(s).
- 1: return partial barcode value(s).


    
## Setting Methods
`ReturnPartialBarcodeValue` can be set via JSON template.


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
- [Use RuntimeSettings or Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html)
