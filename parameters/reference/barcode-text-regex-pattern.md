---
layout: default-layout
title: BarcodeTextRegExPattern - Dynamsoft Barcode Reader Parameter Reference
description: This page shows Dynamsoft Barcode Reader Parameter Reference for BarcodeTextRegExPattern.
keywords: BarcodeTextRegExPattern, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/barcode-text-regex-pattern.html
---


# BarcodeTextRegExPattern 

`BarcodeTextRegExPattern` defines the regular expression pattern of barcode text characters for barcodes searching and result filtering. It set to an empty string by default which means there is no limitation on the barcode text characters.

| Value Type | Value Range | Default Value | Template Structure Type |
| ---------- | ----------- | ------------- | ----------------------- |
| *string* | N/A | `""` | `FormatSpecification` |

## Setting Methods
`BarcodeTextRegExPattern` can be set via JSON template.

### As JSON Parameter
`BarcodeTextRegExPattern` as a JSON parameter is defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| BarcodeTextRegExPattern | a string representing regular express pattern |

**JSON Example**   
```
{
    "BarcodeTextRegExPattern": " ^([*].+[*]|[+].+[+])$"
}
```


<!--
## Impacts on Performance
### Speed
Enabling `BarcodeTextRegExPattern` for filtering may speed up the process.

### Read Rate
Enabling `BarcodeTextRegExPattern` to filter out results may reduce the Read Rate. 

### Accuracy
Enabling `BarcodeTextRegExPattern` to filter out results may improve the Accuracy.

-->
## Related Articles
- [Use RuntimeSettings or Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html)
- [How to filter out results]({{ site.scenario_settings }}decode-result.html)
