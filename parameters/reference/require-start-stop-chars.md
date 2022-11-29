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

`RequireStartStopChars` defines whether the start and stop characters are required when searching for common 1D barcodes. It is defined as below:

| Value Type | Value Range | Default Value | Template Structure Type |
| ---------- | ----------- | ------------- | ----------------------- |
| *int* | [0, 1] | 1 | `FormatSpecification` |


**Remarks**     
- 0: start and stop characters are not required.
- 1: start and stop characters are required.


    
## Setting Methods
`RequireStartStopChars` can be set via JSON template.

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
- [Use RuntimeSettings or Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html)
- [Configure parameters for a certain barcode format]({{ site.scenario_settings }}format-specification.html#requirestartstopchars)
