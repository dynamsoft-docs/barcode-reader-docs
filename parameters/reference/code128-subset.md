---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for Code128Subset
description: This page shows Dynamsoft Barcode Reader Parameter Reference for Code128Subset.
keywords: Code128Subset, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/code128-subset.html
---


# Code128Subset 

`Code128Subset` is a parameter to specify the subset of Code 128. It is defined as below:

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string* | "A"<br>"B"<br>"C" | ""  |


    
## Setting Methods
`Code128Subset` is supported to be set through JSON template.

### As JSON Parameter
`Code128Subset` as a JSON parameter is a string value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| Code128Subset | "A", "B" or "C" as a string |


**JSON Example**   
```
{
    "Code128Subset": "A"
}
```


<!--
## Impacts on Performance
### Speed
`Code128Subset` has no influence on the Speed.

### Read Rate
Setting `Code128Subset` to an appropriate value when detecting non-standard Code128 may improve the Read Rate. 

### Accuracy
Setting `Code128Subset` to an appropriate value when detecting non-standard Code128 may improve the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [Configure parameters for a certain barcode format]({{ site.scenario_settings }}format-specification.html)
