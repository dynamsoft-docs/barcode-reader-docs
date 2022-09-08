---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for Pages
description: This page shows Dynamsoft Barcode Reader Parameter Reference for Pages.
keywords: Pages, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /parameters/reference/pages.html
---


# Pages 

`Pages` defines pages or the range of pages of a file (.tiff or .pdf) for barcode searching. By default, there is no restriction on the number of pages that can be decoded in a single file.

| Value Type | Value Range | Default Value | Template Structure Type |
| ---------- | ----------- | ------------- | ----------------------- |
| *string* | N/A | `""` | `ImageParameter` |
    
## Setting Methods
`Pages` can be set via JSON template.

### As JSON Parameter
`Pages` as a JSON parameter is a string value defined as below.   

| Key Name | Key Value |
| -------- | --------- |
| Pages | A string of one or more of the following data, separated by commas:<br>1. One int value which represents a specified page index;<br>2. One Expression, start index and stop index connected with ""-"", which represents a specified page index range; |


**JSON Example**   
```
{
    "Pages": "0,3,5,7-10"
}
```


<!--
## Impacts on Performance
### Speed
Searching barcodes on fewer pages may improve the Speed.

### Read Rate
Searching barcodes on more pages may improve the Read Rate.

### Accuracy
`Pages` has no influence on the Accuracy.

-->
## Related Articles
- [How to set DBR parameters]({{ site.scenario_settings }}how-to-set-parameters.html)
- [How to process multi-page TIF & PDF]({{ site.scenario_settings }}multipage-imgs-and-pdf.html)
