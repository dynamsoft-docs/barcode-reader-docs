---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for StandardFormat
description: This page shows Dynamsoft Barcode Reader Parameter Reference for StandardFormat.
keywords: StandardFormat, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/standard-format.html
---


# StandardFormat 

`StandardFormat` defines the standard barcode format. It is not set by default.

| Value Type | Value Range | Default Value | Template Structure Type |
| ---------- | ----------- | ------------- | ----------------------- |
| *string* | [*`BarcodeFormat`*]({{ site.enumerations }}format-enums.html#barcodeformat) / [*`BarcodeFormat_2`*]({{ site.enumerations }}format-enums.html#barcodeformat_2) | `""` | `FormatSpecification` |

## Setting Methods
`StandardFormat` can be set via JSON template.

### As JSON Parameter
`StandardFormat` as a JSON parameter is a string value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| StandardFormat | a string value from one of the [`BarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) or [`BarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2) Enumeration items. |


**JSON Example**   
```
{
    "StandardFormat": "BF_CODE128"
}
```


<!--
## Impacts on Performance
### Speed
`StandardFormat` has no influence on the Speed.

### Read Rate
Setting `StandardFormat` to an appropriate value when detecting non-standard barcode may improve the Read Rate. 

### Accuracy
Setting `StandardFormat` to an appropriate value when detecting non-standard barcode may improve the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [Configure parameters for a certain barcode format]({{ site.scenario_settings }}format-specification.html)
