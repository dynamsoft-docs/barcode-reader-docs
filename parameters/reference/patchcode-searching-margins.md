---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for PatchCodeSearchingMargins
description: This page shows Dynamsoft Barcode Reader Parameter Reference for PatchCodeSearchingMargins.
keywords: PatchCodeSearchingMargins, parameter reference, parameter
permalink: /parameters/reference/patchcode-searching-margins.html
---


# PatchCodeSearchingMargins 

`PatchCodeSearchingMargins` is a parameter to specify the margins where to search PatchCode.

## Setting Methods
`PatchCodeSearchingMargins` can be set via JSON template.

### As JSON Parameter
`PatchCodeSearchingMargins` as a JSON parameter is a JSON Object defined as below.

| Key Name | Key Value |
| -------- | --------- |
| PatchCodeSearchingMargins | A JSON object defined as below |

| Key Name | Key Value | Description |
| -------- | --------- | ----------- |
| Top | A number from [1, 0x7fffffff] when MeasuredByPercentage=0 or [1, 50] when MeasuredByPercentage=1 | The height of the top margin. When MeasuredByPercentage=1, it's the percentage value of the image height. When MeasuredByPercentage=0, it's a pixel value. |
| Left | A number from [1, 0x7fffffff] when MeasuredByPercentage=0 or [1, 50] when MeasuredByPercentage=1 | The width of the left margin. When MeasuredByPercentage=1, it's the percentage value of the image width. When MeasuredByPercentage=0, it's a pixel value. |
| Right | A number from [1, 0x7fffffff] when MeasuredByPercentage=0 or [1, 50] when MeasuredByPercentage=1 | The width of the right margin. When MeasuredByPercentage=1, it's the percentage value of the image width. When MeasuredByPercentage=0, it's a pixel value. |
| Bottom | A number from [1, 0x7fffffff] when MeasuredByPercentage=0 or [1, 50] when MeasuredByPercentage=1 | The height of the bottom margin. When MeasuredByPercentage=1, it's the percentage value of the image height. When MeasuredByPercentage=0, it's a pixel value. |
| MeasuredByPercentage | A number from [0, 1] | Sets whether or not to use percentages to measure the PatchCodeSearchingMargins size. |

**JSON Example**

```json
{
    "PatchCodeSearchingMargins": 
    {
        "Top": 25, 
        "Left": 25, 
        "Right": 25, 
        "Bottom": 25, 
        "MeasuredByPercentage": 1
    }
}
```
