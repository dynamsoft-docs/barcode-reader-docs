---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for BarcodeBytesRegExPattern
description: This page shows Dynamsoft Barcode Reader Parameter Reference for BarcodeBytesRegExPattern.
keywords: BarcodeBytesRegExPattern, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/barcode-bytes-regex-pattern.html
---


# BarcodeBytesRegExPattern 

`BarcodeBytesRegExPattern` defines the regular expression pattern of barcode byte characters for barcode searching and result filtering. It is set to an empty string by default which means there is no limitation on the barcode byte characters.

| Value Type | Value Range | Default Value | Template Structure Type |
| ---------- | ----------- | ------------- | ----------------------- |
| *string* | N/A | `""` | `FormatSpecification` |


## Setting Methods
`BarcodeBytesRegExPattern` can be set via JSON template.

### As JSON Parameter
`BarcodeBytesRegExPattern` as a JSON parameter is defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| BarcodeBytesRegExPattern | a string representing regular expression pattern |


**JSON Example**   
```
{
    "BarcodeBytesRegExPattern": " ^([*].+[*]|[+].+[+])$"
}
```


<!--
## Impacts on Performance
### Speed
Enabling `BarcodeBytesRegExPattern` for filtering may speed up the process.

### Read Rate
Enabling `BarcodeBytesRegExPattern` to filter out results may reduce the Read Rate. 

### Accuracy
Enabling `BarcodeBytesRegExPattern` to filter out results may improve the Accuracy.

-->
## Related Articles
- [Use RuntimeSettings or Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html)
- [How to filter out results]({{ site.scenario_settings }}decode-result.html)
