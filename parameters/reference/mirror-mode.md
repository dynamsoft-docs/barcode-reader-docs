---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for MirrorMode
description: This page shows Dynamsoft Barcode Reader Parameter Reference for MirrorMode.
keywords: MirrorMode, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/mirror-mode.html
---


# MirrorMode 

`MirrorMode` defines whether to decode mirrored barcodes. It is defined as below:

| Value Type | Value Range | Default Value | Template Structure Type |
| ---------- | ----------- | ------------- | ----------------------- |
| *string* | "MM_NORMAL"<br>"MM_MIRROR"<br>"MM_BOTH" | For `QRCode`, `DataMatrix`, `PDF417`, `AZTEC`, `Micro QR Code`, `Micro PDF417`, `DotCode` and `Pharmacode Two-Track`, it's "MM_BOTH". <br> For other barcode types, it's "MM_NORMAL". | `FormatSpecification` |

**Remarks**     
- "MM_NORMAL": Doesn't decode mirror barcodes.
- "MM_MIRROR": Decodes mirror barcodes only.
- "MM_BOTH": Decodes both normal and mirror barcodes.


    
## Setting Methods
`MirrorMode` can be set via JSON template.

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
- [Use RuntimeSettings or Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html)
- [Configure parameters for a certain barcode format]({{ site.scenario_settings }}format-specification.html)
