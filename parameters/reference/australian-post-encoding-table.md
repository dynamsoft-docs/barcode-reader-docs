---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for AustralianPostEncodingTable
description: This page shows Dynamsoft Barcode Reader Parameter Reference for AustralianPostEncodingTable.
keywords: AustralianPostEncodingTable, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/australian-post-encoding-table.html
---


# AustralianPostEncodingTable 

`AustralianPostEncodingTable` is a parameter to specify the encoding table used to code the Customer Information Field of Australian Post Customer Barcode. It is defined as below:

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string* | "C"<br>"N" | "C"  |


    
## Setting Methods
`AustralianPostEncodingTable` is supported to be set through JSON template.

### As JSON Parameter
`AustralianPostEncodingTable` as a JSON parameter is a number value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| AustralianPostEncodingTable | "C" or "N" as a string |


**JSON Example**   
```
{
    "AustralianPostEncodingTable": "N"
}
```


<!--
## Impacts on Performance
### Speed
`AustralianPostEncodingTable` has no influence on the Speed.

### Read Rate
Setting `AustralianPostEncodingTable` to an appropriate value when detecting Australian Post Customer Barcode may improve the Read Rate. 

### Accuracy
Setting `AustralianPostEncodingTable` to an appropriate value when detecting Australian Post Customer Barcode may improve the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [Configure parameters for a certain barcode format]({{ site.scenario_settings }}format-specification.html#australianpostencodingtable)
