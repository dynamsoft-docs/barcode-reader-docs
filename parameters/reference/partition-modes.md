---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for PartitionModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for PartitionModes.
keywords: PartitionModes, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/partition-modes.html
---


# PartitionModes 

`PartitionModes` is a parameter to set the mode used to apply partition process when decoding QRCode and DataMatrix. It is defined as below:

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *int* | 1<br>2<br>3 | 3  |

**Remarks**     
- 1: Take the whole barcode for decoding.
- 2: Partition the barcode to blocks based on alignment.
- 3: Try both above two methods.
- It works only for QRCode and DataMatrix.
<!--
PM_WHOLE_BARCODE   0x01
PM_ALIGNMENT_PARTITION  0x02
-->



    
## Setting Methods
`PartitionModes` is supported to be set through JSON template.

### As JSON Parameter
`PartitionModes` as a JSON parameter is a number value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| PartitionModes | 1, 2 or 3 |


**JSON Example**   
```
{
    "PartitionModes": 1
}
```


## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [Configure parameters for a certain barcode format]({{ site.scenario_settings }}format-specification.html)
