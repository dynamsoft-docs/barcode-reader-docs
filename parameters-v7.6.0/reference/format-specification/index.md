---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference - FormatSpecification Object
description: This page shows Dynamsoft Barcode Reader Parameter Reference - FormatSpecification Object.
keywords: parameter reference, parameters, FormatSpecification
needAutoGenerateSidebar: false
needGenerateH3Content: false
breadcrumbText: FormatSpecification
---


# Dynamsoft Barcode Reader SDK - FormatSpecification Object Parameters

## Content Organization Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.Name`](content-organization-control.md#name) | The name of the FormatSpecification object. |


## Format Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.AllModuleDeviation`](format-control.md#allmoduledeviation) | Set the module size deviation from the standard barcode module size. |
 | [`FormatSpecification.AustralianPostEncodingTable`](format-control.md#australianpostencodingtable) | Set the encoding table used to code the Customer Information Field of Australian Post Customer Barcode. | 
 | [`FormatSpecification.BarcodeAngleRangeArray`](format-control.md#barcodeanglerangearray) | Sets the range of angles (in degrees) for barcodes search. | 
 | [`FormatSpecification.BarcodeBytesLengthRangeArray`](format-control.md#barcodebyteslengthrangearray) | Sets the range of barcode bytes length for barcodes search. | 
 | [`FormatSpecification.BarcodeBytesRegExPattern`](format-control.md#barcodebytesregexpattern) | Specifies the regular express pattern of barcode byte characters. | 
 | [`FormatSpecification.BarcodeFormatIds`](format-control.md#barcodeformatids) | Sets which barcode format the current FormatSpecification configuration is applied to. | 
 | [`FormatSpecification.BarcodeFormatIds_2`](format-control.md#barcodeformatids_2) | Sets which barcode format in BarcodeFormat group 2 the current FormatSpecification configuration is applied to. |
 | [`FormatSpecification.BarcodeHeightRangeArray`](format-control.md#barcodeheightrangearray) | Sets the range of barcode heights (in pixels) to for barcodes search. | 
 | [`FormatSpecification.BarcodeTextLengthRangeArray`](format-control.md#barcodetextlengthrangearray) |	Sets the range of barcode text length for barcodes search. | 
 | [`FormatSpecification.BarcodeTextRegExPattern`](format-control.md#barcodetextregexpattern) | Specifies the regular express pattern of barcode characters. | 
 | [`FormatSpecification.BarcodeWidthRangeArray`](format-control.md#barcodewidthrangearray) | Sets the range of barcode widths (in pixels) for barcodes search.(Hint). | 
 | [`FormatSpecification.Code128Subset`](format-control.md#code128subset) | Set the code 128 subset. | 
 | [`FormatSpecification.FindUnevenModuleBarcode`](format-control.md#findunevenmodulebarcode) | Specifies whether to find barcodes with uneven barcode modules. Not support yet. | 
 | [`FormatSpecification.HeadModuleRatio`](format-control.md#headmoduleratio) | Set the module count and module size ratio of the barcode head part. | 
 | [`FormatSpecification.MinQuietZoneWidth`](format-control.md#minquietzonewidth) | The minimum width of the barcode quiet zone. | 
 | [`FormatSpecification.MirrorMode`](format-control.md#mirrormode) | Sets whether to decode mirrored barcodes. | 
 | [`FormatSpecification.ModuleSizeRangeArray`](format-control.md#modulesizerangearray) | Sets the range of module size (in pixels) for barcodes search. (Hint). |
 | [`FormatSpecification.RequireStartStopChars`](format-control.md#requirestartstopchars) |	Sets whether the start and stop characters are required when searching for Code 39 barcodes. |
 | [`FormatSpecification.StandardFormat`](format-control.md#standardformat) | Set the standard barcode format. | 
 | [`FormatSpecification.TailModuleRatio`](format-control.md#tailmoduleratio) |	Set the module count and module size ratio of the barcode tail part. | 


 
 
## Image Process Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.DeblurLevel`](image-process-control.md#deblurlevel) | Sets the degree of blurriness of the barcode for the current specified barcode format. | 
 | [`FormatSpecification.DeformationResistingModes`](image-process-control.md#deformationresistingmodes)  | Sets the mode and priority for deformation resisting for the current specified barcode format. Not support yet. |
 | [`FormatSpecification.BarcodeComplementModes`](image-process-control.md#barcodecomplementmodes) | Sets the mode and priority to complement the missing parts in the barcode for current specified barcode format. Not support yet. |
 | [`FormatSpecification.AccompanyingTextRecognitionModes`](image-process-control.md#accompanyingtextrecognitionmodes) | Sets the mode and priority to recognize accompanying text for the current specified barcode format. | 



## Result Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.MinResultConfidence`](result-control.md#minresultconfidence) | The minimum confidence of the result. | 
 | [`FormatSpecification.ReturnPartialBarcodeValue`](result-control.md#returnpartialbarcodevalue) | Sets whether or not to return partial barcode value(s). Not support yet. | 
