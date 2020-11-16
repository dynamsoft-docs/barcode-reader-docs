---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference - Main Page
description: Dynamsoft Barcode Reader Parameter Reference - Main Page
keywords: parameter reference, parameters, ImageParameter, RegionDefinition, FormatSpecification
needAutoGenerateSidebar: true
needGenerateH3Content: true
breadcrumbText: Reference
---


# Dynamsoft Barcode Reader SDK - Parameters


## ImageParameter Object

### Content Organization Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.Name`](image-parameter/content-organization-control.md#name) | The name of the ImageParameter object. |
 | [`ImageParameter.Description`](image-parameter/content-organization-control.md#description) | The description of the ImageParameter object. |
 | [`ImageParameter.FormatSpecificationNameArray`](image-parameter/content-organization-control.md#formatspecificationnamearray) | The names of the referenced FormatSpecification object(s). |
 | [`ImageParameter.RegionDefinitionNameArray`](image-parameter/content-organization-control.md#regiondefinitionnamearray) | The names of the referenced RegionDefinition object(s). |


### Cost Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.TerminatePhase`](image-parameter/cost-control.md#terminatephase) | Sets the phase where the algorithm stops. |
 | [`ImageParameter.Timeout`](image-parameter/cost-control.md#timeout) | Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. |
 | [`ImageParameter.MaxAlgorithmThreadCount`](image-parameter/cost-control.md#maxalgorithmthreadcount) | Sets the number of threads the image processing algorithm will use to decode barcodes. |
 | [`ImageParameter.ExpectedBarcodesCount`](image-parameter/cost-control.md#expectedbarcodescount) | Sets the number of barcodes expected to be detected for each image. |


### Format Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.BarcodeFormatIds`](image-parameter/format-control.md#barcodeformatids) | Sets the formats of the barcode to be read. Barcode formats can be combined. |
 | [`ImageParameter.BarcodeFormatIds_2`](image-parameter/format-control.md#barcodeformatids_2) | Sets the formats of the barcode in BarcodeFormat group 2 to be read. Barcode formats in BarcodeFormat group 2 can be combined. |
 
 
### Image Process Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.BarcodeColourModes`](image-parameter/BarcodeColourModes.md#barcodecolourmodes) | Sets the mode and priority for the barcode colour mode used to process the barcode zone. |
 | [`ImageParameter.BarcodeComplementModes`](image-parameter/BarcodeComplementModes.md#barcodecomplementmodes) | Sets the mode and priority to complement the missing parts in the barcode. |
 | [`ImageParameter.BinarizationModes`](image-parameter/BinarizationModes.md#binarizationmodes) | 	Sets the mode and priority for binarization. |
 | [`ImageParameter.ColourClusteringModes`](image-parameter/ColourClusteringModes.md#colourclusteringmodes) | Sets the mode and priority for colour categorization. Not supported yet. |
 | [`ImageParameter.ColourConversionModes`](image-parameter/ColourConversionModes.md#colourconversionmodes) | Sets the mode and priority for converting a colour image to a grayscale image. |
 | [`ImageParameter.DeblurLevel`](image-parameter/image-process-control.md#deblurlevel) | Sets the degree of blurriness of the barcode. |
 | [`ImageParameter.DeblurModes`](image-parameter/DeblurModes.md#deblurmodes) | Sets the mode and priority for deblurring. |
 | [`ImageParameter.DeformationResistingModes`](image-parameter/DeformationResistingModes.md#deformationresistingmodes) | Sets the mode and priority for deformation resisting. |
 | [`ImageParameter.DPMCodeReadingModes`](image-parameter/DPMCodeReadingModes.md#dpmcodereadingmodes) | Sets the mode and priority for DPM code reading. Not support yet. |
 | [`ImageParameter.GrayscaleTransformationModes`](image-parameter/GrayscaleTransformationModes.md#grayscaletransformationmodes) | Sets the mode and priority for the grayscale image conversion. |
 | [`ImageParameter.ImagePreprocessingModes`](image-parameter/ImagePreprocessingModes.md#imagepreprocessingmodes) | Sets the mode and priority for image preprocessing algorithms. |
 | [`ImageParameter.LocalizationModes`](image-parameter/LocalizationModes.md#localizationmodes) | 	Sets the mode and priority for localization algorithms. |
 | [`ImageParameter.Pages`](image-parameter/image-process-control.md#pages) | Sets the specific pages or the range of pages of a file (.tiff or .pdf) for barcode searching. |
 | [`ImageParameter.PDFRasterDPI`](image-parameter/image-process-control.md#pdfrasterdpi) | Sets the output image resolution. |
 | [`ImageParameter.PDFReadingMode`](image-parameter/image-process-control.md#pdfreadingmode) | Sets the way to detect barcodes from a PDF file when using the DecodeFile method. |
 | [`ImageParameter.RegionPredetectionModes`](image-parameter/RegionPredetectionModes.md#regionpredetectionmodes) | Sets the region pre-detection mode for barcodes search. |
 | [`ImageParameter.ScaleDownThreshold`](image-parameter/image-process-control.md#scaledownthreshold) | Sets the threshold for the image shrinking. |
 | [`ImageParameter.ScaleUpModes`](image-parameter/ScaleUpModes.md#scaleupmodes) | Sets the mode and priority to control the sampling methods of scale-up for linear barcodes with small module sizes. | 
 | [`ImageParameter.TextAssistedCorrectionMode`](image-parameter/TextAssistedCorrectionMode.md#textassistedcorrectionmode) | Sets the mode of text assisted correction for barcode decoding. Not support yet. |
 | [`ImageParameter.TextFilterModes`](image-parameter/TextFilterModes.md#textfiltermodes) | 	Sets the mode and priority for text filter. |
 | [`ImageParameter.TextureDetectionModes`](image-parameter/TextureDetectionModes.md#texturedetectionmodes) | 	Sets the mode and priority for texture detection. |



### Result Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.IntermediateResultTypes`](image-parameter/result-control.md#intermediateresulttypes) | Sets which types of intermediate result to be kept for further reference. Intermediate result types can be combined. | 
 | [`ImageParameter.IntermediateResultSavingMode`](image-parameter/result-control.md#intermediateresultsavingmode) | Sets the mode for saving the intermediate result. | 
 | [`ImageParameter.ResultCoordinateType`](image-parameter/result-control.md#resultcoordinatetype) | Specifies the format for the coordinates returned | 
 | [`ImageParameter.TextResultOrderModes`](image-parameter/result-control.md#textresultordermodes) | Sets the mode and priority for the order of the text results returned. | 
 | [`ImageParameter.ReturnBarcodeZoneClarity`](image-parameter/result-control.md#returnbarcodezoneclarity) | Sets whether or not to return the clarity of the barcode zone. | 



## RegionDefinition Object

### Content Organization Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`RegionDefinition.Name`](region-definition/content-organization-control.md#name) | The name of the RegionDefinition object. |
 | [`RegionDefinition.FormatSpecificationNameArray`](region-definition/content-organization-control.md#formatspecificationnamearray) | The names of the referenced FormatSpecification object(s). |


### Cost Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`RegionDefinition.ExpectedBarcodesCount`](region-definition/cost-control.md#expectedbarcodescount) | Sets the expected number of barcodes to be decoded for the current region. |


### Format Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`RegionDefinition..BarcodeFormatIds`](region-definition/format-control.md#barcodeformatids) | Sets which types of barcode(s) in BarcodeFormat group 1 to be read in this region. |
 | [`RegionDefinition.BarcodeFormatIds_2`](region-definition/format-control.md#barcodeformatids_2) | Sets which types of barcode(s) in BarcodeFormat group 2 to be read in this region. |
 
 
### Image Process Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`RegionDefinition.Top`](region-definition/image-process-control.md#top) | 	The top-most coordinate or percentage of the region. | 
 | [`RegionDefinition.Left`](region-definition/image-process-control.md#left) | 	The left-most coordinate or percentage of the region. | 
 | [`RegionDefinition.Right`](region-definition/image-process-control.md#right) | 	The right-most coordinate or percentage of the region. | 
 | [`RegionDefinition.Bottom`](region-definition/image-process-control.md#bottom) | 	The bottom-most coordinate or percentage of the region. | 
 | [`RegionDefinition.MeasuredByPercentage`](region-definition/image-process-control.md#measuredbypercentage) | 	Sets whether or not to use percentages to measure the Region size. | 



## FormatSpecification Object

### Content Organization Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.Name`](format-specification/content-organization-control.md#name) | The name of the FormatSpecification object. |


### Format Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.AllModuleDeviation`](format-specification/format-control.md#allmoduledeviation) | Set the module size deviation from the standard barcode module size. |
 | [`FormatSpecification.AustralianPostEncodingTable`](format-specification/format-control.md#australianpostencodingtable) | Set the encoding table used to code the Customer Information Field of Australian Post Customer Barcode. | 
 | [`FormatSpecification.BarcodeAngleRangeArray`](format-specification/format-control.md#barcodeanglerangearray) | Sets the range of angles (in degrees) for barcodes search. | 
 | [`FormatSpecification.BarcodeBytesLengthRangeArray`](format-specification/format-control.md#barcodebyteslengthrangearray) | Sets the range of barcode bytes length for barcodes search. | 
 | [`FormatSpecification.BarcodeBytesRegExPattern`](format-specification/format-control.md#barcodebytesregexpattern) | Specifies the regular express pattern of barcode byte characters. | 
 | [`FormatSpecification.BarcodeFormatIds`](format-specification/format-control.md#barcodeformatids) | Sets which barcode format the current FormatSpecification configuration is applied to. | 
 | [`FormatSpecification.BarcodeFormatIds_2`](format-specification/format-control.md#barcodeformatids_2) | Sets which barcode format in BarcodeFormat group 2 the current FormatSpecification configuration is applied to. |
 | [`FormatSpecification.BarcodeHeightRangeArray`](format-specification/format-control.md#barcodeheightrangearray) | Sets the range of barcode heights (in pixels) to for barcodes search. | 
 | [`FormatSpecification.BarcodeTextLengthRangeArray`](format-specification/format-control.md#barcodetextlengthrangearray) |	Sets the range of barcode text length for barcodes search. | 
 | [`FormatSpecification.BarcodeTextRegExPattern`](format-specification/format-control.md#barcodetextregexpattern) | Specifies the regular express pattern of barcode characters. | 
 | [`FormatSpecification.BarcodeWidthRangeArray`](format-specification/format-control.md#barcodewidthrangearray) | Sets the range of barcode widths (in pixels) for barcodes search.(Hint). | 
 | [`FormatSpecification.BarcodeZoneBarCountRangeArray`](format-specification/format-control.md#barcodezonebarcountrangearray) |	Sets the range of bar count of the barcode zone for barcodes search. | 
 | [`FormatSpecification.BarcodeZoneMinDistanceToImageBorders`](format-specification/format-control.md#barcodezonemindistancetoimageborders) |	Sets the minimum distance (in pixels) between barcode zone and image borders. | 
 | [`FormatSpecification.Code128Subset`](format-specification/format-control.md#code128subset) | Set the code 128 subset. | 
 | [`FormatSpecification.FindUnevenModuleBarcode`](format-specification/format-control.md#findunevenmodulebarcode) | Specifies whether to find barcodes with uneven barcode modules. Not support yet. | 
 | [`FormatSpecification.HeadModuleRatio`](format-specification/format-control.md#headmoduleratio) | Set the module count and module size ratio of the barcode head part. | 
 | [`FormatSpecification.MinQuietZoneWidth`](format-specification/format-control.md#minquietzonewidth) | The minimum width of the barcode quiet zone. | 
 | [`FormatSpecification.MinRatioOfBarcodeZoneWidthToHeight`](format-control.md#minratioofbarcodezonewidthtoheight) |	Sets the minimum ratio (width/height) of the barcode zone. | 
 | [`FormatSpecification.MirrorMode`](format-specification/format-control.md#mirrormode) | Sets whether to decode mirrored barcodes. | 
 | [`FormatSpecification.ModuleSizeRangeArray`](format-specification/format-control.md#modulesizerangearray) | Sets the range of module size (in pixels) for barcodes search. (Hint). |
 | [`FormatSpecification.RequireStartStopChars`](format-specification/format-control.md#requirestartstopchars) |	Sets whether the start and stop characters are required when searching for Code 39 barcodes. |
 | [`FormatSpecification.StandardFormat`](format-specification/format-control.md#standardformat) | Set the standard barcode format. | 
 | [`FormatSpecification.TailModuleRatio`](format-specification/format-control.md#tailmoduleratio) |	Set the module count and module size ratio of the barcode tail part. | 


 
 
### Image Process Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.DeblurLevel`](format-specification/image-process-control.md#deblurlevel) | Sets the degree of blurriness of the barcode for the current specified barcode format. | 
 | [`FormatSpecification.DeformationResistingModes`](format-specification/image-process-control.md#deformationresistingmodes)  | Sets the mode and priority for deformation resisting for the current specified barcode format. Not support yet. |
 | [`FormatSpecification.BarcodeComplementModes`](format-specification/image-process-control.md#barcodecomplementmodes) | Sets the mode and priority to complement the missing parts in the barcode for current specified barcode format. Not support yet. |



### Result Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.MinResultConfidence`](format-specification/result-control.md#minresultconfidence) | The minimum confidence of the result. | 
 | [`FormatSpecification.ReturnPartialBarcodeValue`](format-specification/result-control.md#returnpartialbarcodevalue) | Sets whether or not to return partial barcode value(s). Not support yet. | 
