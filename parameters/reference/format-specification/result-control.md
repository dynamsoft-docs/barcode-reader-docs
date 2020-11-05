---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for FormatSpecification Object - Result Control Parameters
description: This page shows Dynamsoft Barcode Reader Parameter Reference for FormatSpecification Object - Result Control Parameters.
keywords: MinResultConfidence, ReturnPartialBarcodeValue, FormatSpecification, result control parameters, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: false
---

# FormatSpecification Object - Result Control Parameters

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.MinResultConfidence`](#minresultconfidence) | The minimum confidence of the result. | 
 | [`FormatSpecification.ReturnPartialBarcodeValue`](#returnpartialbarcodevalue) | Sets whether or not to return partial barcode value(s). Not support yet. | 

---


## MinResultConfidence
The minimum confidence of the result.   

**Remarks**   
0: means no limitation on the confidence. 

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | MinResultConfidence | *int* | [0,100] | 0 |


**Json Parameter Example**   
```
{
    "MinResultConfidence":10
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html) | [`minResultConfidence`]({{ site.structs }}PublicRuntimeSettings.html#minresultconfidence) | *int* | [0, 100] | 0 |

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)



&nbsp;



## ReturnPartialBarcodeValue
Sets whether or not to return partial barcode value(s).   
**Not support yet.**    
&nbsp;

**Remarks**   
0: do not return partial barcode value(s).   
1: return partial barcode value(s).


### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | ReturnPartialBarcodeValue | *int* | [0,1] | 1 |


**Json Parameter Example**   
```
{
    "ReturnPartialBarcodeValue":0
}
```
