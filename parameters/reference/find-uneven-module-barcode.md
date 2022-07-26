---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for FindUnevenModuleBarcode
description: This page shows Dynamsoft Barcode Reader Parameter Reference for FindUnevenModuleBarcode.
keywords: FindUnevenModuleBarcode, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/find-uneven-module-barcode.html
---


# FindUnevenModuleBarcode 

`FindUnevenModuleBarcode` is a parameter to specify whether to find barcodes with uneven barcode modules. It is defined as below:

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *int* | [0, 1] | 1 |


**Remarks**  
- 0: do not find barcodes with uneven barcode modules.
- 1: find barcodes with uneven barcode modules.


    
## Setting Methods
`FindUnevenModuleBarcode` is supported to be set through JSON template.

### As JSON Parameter
`FindUnevenModuleBarcode` as a JSON parameter is a number value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| FindUnevenModuleBarcode | A number from [0, 1] |


**JSON Example**   
```
{
    "FindUnevenModuleBarcode": 1
}
```


<!--
## Impacts on Performance
### Speed
`FindUnevenModuleBarcode` has no influence on the Speed.

### Read Rate
Setting `FindUnevenModuleBarcode` to an appropriate value when detecting non-standard barcodes may improve the Read Rate. 

### Accuracy
Setting `FindUnevenModuleBarcode` to an appropriate value when detecting non-standard barcodes may improve the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [Configure parameters for a certain barcode format]({{ site.scenario_settings }}format-specification.html)
