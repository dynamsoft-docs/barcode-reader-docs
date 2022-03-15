---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for VerifyCheckDigit
description: This page shows Dynamsoft Barcode Reader Parameter Reference for VerifyCheckDigit.
keywords: VerifyCheckDigit, parameter reference, parameter
---


# VerifyCheckDigit 

`VerifyCheckDigit` is a parameter to set the value determining whether to verify the check digit in barcodes where this check digit is optional. It is defined as below:

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *int* | [0, 1] | 0  |

**Remarks**     
- 0: Do not verify the check digit.
- 1: Verify the check digit and if it does not match, no result will not be returned. Do not set this parameter to 1 for barcodes without an optional check digit.
- It is valid only for Code 11.

    
## Setting Methods
`VerifyCheckDigit` is supported to be set through JSON template.

### As JSON Parameter
`VerifyCheckDigit` as a JSON parameter is an int value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| VerifyCheckDigit | 0 or 1 |


**JSON Example**   
```
{
    "VerifyCheckDigit": 1
}
```

## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [Configure parameters for a certain barcode format]({{ site.scenario_settings }}format-specification.html)