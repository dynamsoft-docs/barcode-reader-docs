---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for MSICodeCheckDigitCalculation
description: This page shows Dynamsoft Barcode Reader Parameter Reference for MSICodeCheckDigitCalculation.
keywords: MSICodeCheckDigitCalculation, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/msi-code-check-digit-calculation.html
---


# MSICodeCheckDigitCalculation 

`MSICodeCheckDigitCalculation` defines the scheme used for calculating a check digit of an MSI barcode. It is defined as below:

| Value Type | Value Range | Default Value | Template Structure Type |
| ---------- | ----------- | ------------- | ----------------------- |
| *string* | "MSICCDC_NO_CHECK_DIGIT"<br>"MSICCDC_MOD_10"<br>"MSICCDC_MOD_11"<br>"MSICCDC_MOD_1110"<br>"MSICCDC_MOD_1010" | "MSICCDC_MOD_10"  | `FormatSpecification` |

    
## Setting Methods
`MSICodeCheckDigitCalculation` can be set via JSON template.

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
- [Use RuntimeSettings or Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html)
