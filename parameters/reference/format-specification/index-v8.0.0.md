---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference - FormatSpecification Object
description: This page shows Dynamsoft Barcode Reader Parameter Reference - FormatSpecification Object.
keywords: parameter reference, parameters, FormatSpecification
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# FormatSpecification Object Parameters

## Content Organization Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.Name`](#name) | The name of the FormatSpecification object. |

### Name
The name of the FormatSpecification object.

**Remarks**      
It must be a unique name.

**JSON Definition**

| Parent Object | Key Name | Key Value Type | Default Value |
| ------------- | -------- | -------------- | ------------- |
| FormatSpecification | Name | *string* | It must be a mandatory setting value. |

**JSON Example**   
```
{
    "Name":"FormatSpecification1"
}
```

## Format Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.AllModuleDeviation`](../all-module-deviation.md) | Set the module size deviation from the standard barcode module size. |
 | [`FormatSpecification.AustralianPostEncodingTable`](../australian-post-encoding-table.md) | Set the encoding table used to code the Customer Information Field of Australian Post Customer Barcode. | 
 | [`FormatSpecification.BarcodeAngleRangeArray`](../barcode-angle-range-array.md) | Sets the range of angles (in degrees) for barcodes search. | 
 | [`FormatSpecification.BarcodeBytesLengthRangeArray`](../barcode-bytes-length-range-array.md) | Sets the range of barcode bytes length for barcodes search. | 
 | [`FormatSpecification.BarcodeBytesRegExPattern`](../barcode-bytes-regex-pattern.md) | Specifies the regular express pattern of barcode byte characters. | 
 | [`FormatSpecification.BarcodeFormatIds`](../barcode-format-ids.md) | Sets which barcode format the current FormatSpecification configuration is applied to. | 
 | [`FormatSpecification.BarcodeFormatIds_2`](../barcode-format-ids-2.md) | Sets which barcode format in BarcodeFormat group 2 the current FormatSpecification configuration is applied to. |
 | [`FormatSpecification.BarcodeHeightRangeArray`](../barcode-height-range-array.md) | Sets the range of barcode heights (in pixels) to for barcodes search. | 
 | [`FormatSpecification.BarcodeTextLengthRangeArray`](../barcode-text-length-range-array.md) |	Sets the range of barcode text length for barcodes search. | 
 | [`FormatSpecification.BarcodeTextRegExPattern`](../barcode-text-regex-pattern.md) | Specifies the regular express pattern of barcode characters. | 
 | [`FormatSpecification.BarcodeWidthRangeArray`](../barcode-width-range-array.md) | Sets the range of barcode widths (in pixels) for barcodes search.(Hint). | 
 | [`FormatSpecification.BarcodeZoneBarCountRangeArray`](../barcode-zone-bar-count-range-array.md) |	Sets the range of bar count of the barcode zone for barcodes search. | 
 | [`FormatSpecification.BarcodeZoneMinDistanceToImageBorders`](../barcode-zone-min-distance-to-image-borders.md) |	Sets the minimum distance (in pixels) between barcode zone and image borders. | 
 | [`FormatSpecification.Code128Subset`](../code128-subset.md) | Set the code 128 subset. | 
 | [`FormatSpecification.FindUnevenModuleBarcode`](../find-uneven-module-barcode.md) | Specifies whether to find barcodes with uneven barcode modules. Not support yet. | 
 | [`FormatSpecification.HeadModuleRatio`](../head-module-ratio.md) | Set the module count and module size ratio of the barcode head part. | 
 | [`FormatSpecification.MinQuietZoneWidth`](../min-quiet-zone-width.md) | The minimum width of the barcode quiet zone. | 
 | [`FormatSpecification.MinRatioOfBarcodeZoneWidthToHeight`](../min-ratio-of-barcode-zone-width-to-height.md) |	Sets the minimum ratio (width/height) of the barcode zone. | 
 | [`FormatSpecification.MirrorMode`](../mirror-mode.md) | Sets whether to decode mirrored barcodes. | 
 | [`FormatSpecification.ModuleSizeRangeArray`](../module-size-range-array.md) | Sets the range of module size (in pixels) for barcodes search. (Hint). |
 | [`FormatSpecification.RequireStartStopChars`](../require-start-stop-chars.md) |	Sets whether the start and stop characters are required when searching for Code 39 barcodes. |
 | [`FormatSpecification.StandardFormat`](../standard-format.md) | Set the standard barcode format. | 
 | [`FormatSpecification.TailModuleRatio`](../tail-module-ratio.md) |	Set the module count and module size ratio of the barcode tail part. | 


 
 
## Image Process Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.DeblurLevel`](../deblur-level.md) | Sets the degree of blurriness of the barcode for the current specified barcode format. | 
 | [`FormatSpecification.DeformationResistingModes`](../deformation-resisting-modes.md)  | Sets the mode and priority for deformation resisting for the current specified barcode format. Not support yet. |
 | [`FormatSpecification.BarcodeComplementModes`](../barcode-complement-modes.md) | Sets the mode and priority to complement the missing parts in the barcode for current specified barcode format. Not support yet. |



## Result Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.MinResultConfidence`](../min-result-confidence.md) | The minimum confidence of the result. | 
 | [`FormatSpecification.ReturnPartialBarcodeValue`](../return-partial-barcode-value.md) | Sets whether or not to return partial barcode value(s). Not support yet. | 
