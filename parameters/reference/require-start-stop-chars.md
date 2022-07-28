---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for RequireStartStopChars
description: This page shows Dynamsoft Barcode Reader Parameter Reference for RequireStartStopChars.
keywords: RequireStartStopChars, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/require-start-stop-chars.html
---


# RequireStartStopChars 

`RequireStartStopChars` is a parameter to specify whether the start and stop characters are required when searching for Code 39 barcodes. It is defined as below:

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *int* | [0, 1] | 1 |


**Remarks**     
- 0: start and stop characters are not required.
- 1: start and stop characters are required.


    
## Setting Methods
`RequireStartStopChars` is supported to be set through JSON template.

### As JSON Parameter
`RequireStartStopChars` as a JSON parameter is a number value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| RequireStartStopChars | A number from [0, 1] |


**JSON Example**   
```
{
    "RequireStartStopChars": 1
}
```


<!--
## Impacts on Performance
### Speed
`RequireStartStopChars` has no influence on the Speed.

### Read Rate
Setting `RequireStartStopChars` to an appropriate value may improve the Read Rate. 

### Accuracy
Setting `RequireStartStopChars` to an appropriate value may improve the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [Configure parameters for a certain barcode format]({{ site.scenario_settings }}format-specification.html#requirestartstopchars)
