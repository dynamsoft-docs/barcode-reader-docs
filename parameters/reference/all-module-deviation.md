---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for AllModuleDeviation
description: This page shows Dynamsoft Barcode Reader Parameter Reference for AllModuleDeviation.
keywords: AllModuleDeviation, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/all-module-deviation.html
---


# AllModuleDeviation 

`AllModuleDeviation` is a parameter to specify the width deviation value (in moduleSize) of a non-standard 1D barcode type relative to the standard barcode width. It is defined as below:

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *int* | [0, 0x7fffffff] | 0 |


**Remarks**  
The unit is barcode module size. For example, if the standard barcode module size is 2px and AllModuleDeviation is 1, then the non-standard barcode module size is 4px.


    
## Setting Methods
`AllModuleDeviation` is supported to be set through JSON template.

### As JSON Parameter
`AllModuleDeviation` as a JSON parameter is a number value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| AllModuleDeviation | A number from [0, 0x7fffffff] |


**JSON Example**   
```
{
    "AllModuleDeviation": 1
}
```


<!--
## Impacts on Performance
### Speed
`AllModuleDeviation` has no influence on the Speed.

### Read Rate
Setting `AllModuleDeviation` to an appropriate value when detecting non-standard barcodes may improve the Read Rate. 

### Accuracy
Setting `AllModuleDeviation` to an appropriate value when detecting non-standard barcodes may improve the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [Configure parameters for a certain barcode format]({{ site.scenario_settings }}format-specification.html#allmoduledeviation)
