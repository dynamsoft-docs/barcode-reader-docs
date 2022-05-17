---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for MirrorMode
description: This page shows Dynamsoft Barcode Reader Parameter Reference for MirrorMode.
keywords: MirrorMode, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# MirrorMode 

`MirrorMode` is a parameter to specify whether to decode mirrored barcodes. It is defined as below:

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string* | "MM_NORMAL"<br>"MM_MIRROR"<br>"MM_BOTH" | "MM_NORMAL"  |

**Remarks**     
- "MM_NORMAL": Doesn't decode mirror barcodes.
- "MM_MIRROR": Decodes mirror barcodes only.
- "MM_BOTH": Decodes both normal and mirror barcodes.


    
## Setting Methods
`MirrorMode` is supported to be set through JSON template.

### As JSON Parameter
`MirrorMode` as a JSON parameter is a number value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| MirrorMode | "MM_NORMAL", "MM_MIRROR" or "MM_BOTH" as a string |


**JSON Example**   
```
{
    "MirrorMode": "MM_NORMAL"
}
```


<!--
## Impacts on Performance
### Speed
`MirrorMode` has no influence on the Speed.

### Read Rate
Setting `MirrorMode` to an appropriate value may improve the Read Rate. 

### Accuracy
`MirrorMode` has no influence on the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [Configure parameters for a certain barcode format]({{ site.scenario_settings }}format-specification.html)