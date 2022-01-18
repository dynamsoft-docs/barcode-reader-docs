---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for MSICodeCheckDigitCalculation
description: This page shows Dynamsoft Barcode Reader Parameter Reference for MSICodeCheckDigitCalculation.
keywords: MSICodeCheckDigitCalculation, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# MSICodeCheckDigitCalculation 

`MSICodeCheckDigitCalculation` is a parameter to specify the scheme used for calculating a check digit of an MSI barcode. It is defined as below:

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string* | "MSICCDC_NO_CHECK_DIGIT"<br>"MSICCDC_MOD_10"<br>"MSICCDC_MOD_11"<br>"MSICCDC_MOD_1110"<br>"MSICCDC_MOD_1010" | "MSICCDC_MOD_10"  |

    
## Setting Methods
`MSICodeCheckDigitCalculation` is supported to be set through JSON template.

### As JSON Parameter
`MSICodeCheckDigitCalculation` as a JSON parameter is a number value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| MSICodeCheckDigitCalculation | "MSICCDC_NO_CHECK_DIGIT", "MSICCDC_MOD_10", "MSICCDC_MOD_11", "MSICCDC_MOD_1110" or "MSICCDC_MOD_1010" as a string |


**JSON Example**   
```
{
    "MSICodeCheckDigitCalculation": "MSICCDC_MOD_10"
}
```


<!--
## Impacts on Performance
### Speed
`MSICodeCheckDigitCalculation` has no influence on the Speed.

### Read Rate
`MSICodeCheckDigitCalculation` has no influence on the Read Rate.

### Accuracy
`MSICodeCheckDigitCalculation` has no influence on the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
