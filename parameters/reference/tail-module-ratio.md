---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for TailModuleRatio
description: This page shows Dynamsoft Barcode Reader Parameter Reference for TailModuleRatio.
keywords: TailModuleRatio, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# TailModuleRatio 

`TailModuleRatio` is a parameter to specify the module count and module size ratio of the barcode tail part.
    
## Setting Methods
`TailModuleRatio` is supported to be set through JSON template.

### As JSON Parameter
`TailModuleRatio` as a JSON parameter is a string value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| TailModuleRatio | a string representing the module count and module size |


**JSON Example**   
```
{
    "TailModuleRatio": "2331112"
}
```


<!--
## Impacts on Performance
### Speed
`TailModuleRatio` has no influence on the Speed.

### Read Rate
Setting `TailModuleRatio` to an appropriate value when detecting non-standard barcode may improve the Read Rate. 

### Accuracy
Setting `TailModuleRatio` to an appropriate value when detecting non-standard barcode may improve the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [Configure parameters for a certain barcode format]({{ site.scenario_settings }}format-specification.html)