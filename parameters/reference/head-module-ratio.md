---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for HeadModuleRatio
description: This page shows Dynamsoft Barcode Reader Parameter Reference for HeadModuleRatio.
keywords: HeadModuleRatio, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/head-module-ratio.html
---


# HeadModuleRatio 

`HeadModuleRatio` is a parameter to specify the module count and module size ratio of the barcode head part.
    
## Setting Methods
`HeadModuleRatio` is supported to be set through JSON template.

### As JSON Parameter
`HeadModuleRatio` as a JSON parameter is a string value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| HeadModuleRatio | a string representing the module count and module size |


**JSON Example**   
```
{
    "HeadModuleRatio": "211412"
}
```


<!--
## Impacts on Performance
### Speed
`HeadModuleRatio` has no influence on the Speed.

### Read Rate
Setting `HeadModuleRatio` to an appropriate value when detecting non-standard barcode may improve the Read Rate. 

### Accuracy
Setting `HeadModuleRatio` to an appropriate value when detecting non-standard barcode may improve the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [Configure parameters for a certain barcode format]({{ site.scenario_settings }}format-specification.html)
