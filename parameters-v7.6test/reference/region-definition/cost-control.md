---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for RegionDefinition Object - Cost Control Parameters
description: This article shows Dynamsoft Barcode Reader Parameter Reference for RegionDefinition Object - Cost Control Parameters.
keywords: ExpectedBarcodesCount, RegionDefinition, cost control parameters, parameter reference, parameter 
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# RegionDefinition Object - Cost Control Parameters

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`RegionDefinition.ExpectedBarcodesCount`](#expectedbarcodescount) | Sets the expected number of barcodes to be decoded for the current region. |


---

## ExpectedBarcodesCount
Sets the expected number of barcodes to be decoded for the current region.

**Remarks**   
0: means Unknown and it will find at least one barcode.   
1: try to find one barcode. If one barcode is found, the library will stop the localization process and perform barcode decoding.   
n: try to find n barcodes. If the library only finds m (m < n) barcode, it will try different algorithms till n barcodes are found or all algorithms are used.   


### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| RegionDefinition | ExpectedBarcodesCount | *int* | [0,0x7fffffff] | 0 |

**Json Parameter Example**   
```
{
    "ExpectedBarcodesCount":0
}

```
