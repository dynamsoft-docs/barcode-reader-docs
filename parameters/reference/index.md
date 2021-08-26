---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference - Main Page
description: Dynamsoft Barcode Reader Parameter Reference - Main Page
keywords: parameter reference, parameters, ImageParameter, RegionDefinition, FormatSpecification
needAutoGenerateSidebar: true
needGenerateH3Content: true
breadcrumbText: Reference
---


# Parameter Reference

 | Parameter Name | Description |
 | -------------- | ----------- | 
 
 | [`AllModuleDeviation`](.md) | Set the module size deviation from the standard barcode module size. |
 | [`AustralianPostEncodingTable`](.md) | Set the encoding table used to code the Customer Information Field of Australian Post Customer Barcode. | 
 | [`BarcodeAngleRangeArray`](.md) | Sets the range of angles (in degrees) for barcodes search. | 
 | [`BarcodeBytesLengthRangeArray`](.md) | Sets the range of barcode bytes length for barcodes search. | 
 | [`BarcodeBytesRegExPattern`](.md) | Specifies the regular express pattern of barcode byte characters. | 
 | [`BarcodeColourModes`](barcode-colour-modes.md) | Sets the mode and priority for the barcode colour mode used to process the barcode zone. |
 | [`BarcodeComplementModes`](barcode-complement-modes.md) | Sets the mode and priority to complement the missing parts in the barcode. |
 | [`BarcodeFormatIds`](.md) | Sets the formats of the barcode to be read. Barcode formats can be combined. |
 | [`BarcodeFormatIds_2`](.md) | Sets the formats of the barcode in BarcodeFormat group 2 to be read. Barcode formats in BarcodeFormat group 2 can be combined. |
 | [`BarcodeHeightRangeArray`](.md) | Sets the range of barcode heights (in pixels) to for barcodes search. | 
 | [`BarcodeTextLengthRangeArray`](.md) |	Sets the range of barcode text length for barcodes search. | 
 | [`BarcodeTextRegExPattern`](.md) | Specifies the regular express pattern of barcode characters. | 
 | [`BarcodeWidthRangeArray`](.md) | Sets the range of barcode widths (in pixels) for barcodes search.(Hint). | 
 | [`BarcodeZoneBarCountRangeArray`](.md) |	Sets the range of bar count of the barcode zone for barcodes search. | 
 | [`BarcodeZoneMinDistanceToImageBorders`](.md) |	Sets the minimum distance (in pixels) between barcode zone and image borders. | 
 | [`BinarizationModes`](binarization-modes.md) | 	Sets the mode and priority for binarization. |
 | [`Code128Subset`](.md) | Set the code 128 subset. | 
 | [`ColourClusteringModes`](colour-clustering-modes.md) | Sets the mode and priority for colour categorization. Not supported yet. |
 | [`ColourConversionModes`](colour-conversion-modes.md) | Sets the mode and priority for converting a colour image to a grayscale image. |
 | [`DeblurLevel`](.md) | Sets the degree of blurriness of the barcode. |
 | [`DeblurModes`](.md) | Sets the mode and priority for deblurring. |
 | [`DeformationResistingModes`](deformation-resisting-modes.md) | Sets the mode and priority for deformation resisting. |
 | [`DPMCodeReadingModes`](dpm-code-reading-modes.md) | Sets the mode and priority for DPM code reading. Not support yet. |
 | [`ExpectedBarcodesCount`](expected-barcodes-count.md) | Sets the number of barcodes expected to be detected for each image. |
 | [`FindUnevenModuleBarcode`](.md) | Specifies whether to find barcodes with uneven barcode modules. Not support yet. | 
 | [`GrayscaleTransformationModes`](grayscale-transformation-modes.md) | Sets the mode and priority for the grayscale image conversion. |
 | [`HeadModuleRatio`](.md) | Set the module count and module size ratio of the barcode head part. | 
 | [`ImagePreprocessingModes`](image-preprocessing-modes.md) | Sets the mode and priority for image preprocessing algorithms. |
 | [`IntermediateResultSavingMode`](.md) | Sets the mode for saving the intermediate result. | 
 | [`IntermediateResultTypes`](.md) | Sets which types of intermediate result to be kept for further reference. Intermediate result types can be combined. | 
 | [`LocalizationModes`](localization-modes.md) | 	Sets the mode and priority for localization algorithms. |
 | [`MaxAlgorithmThreadCount`](.md) | Sets the number of threads the image processing algorithm will use to decode barcodes. |
 | [`MinQuietZoneWidth`](.md) | The minimum width of the barcode quiet zone. | 
 | [`MinRatioOfBarcodeZoneWidthToHeight`](.md) |	Sets the minimum ratio (width/height) of the barcode zone. | 
 | [`MinResultConfidence`](.md) | The minimum confidence of the result. | 
 | [`MirrorMode`](.md) | Sets whether to decode mirrored barcodes. | 
 | [`ModuleSizeRangeArray`](.md) | Sets the range of module size (in pixels) for barcodes search. (Hint). |
 | [`MSICodeCheckDigitCalculation`](.md) | Sets the scheme used for calculating a check digit of an MSI barcode. |
 | [`Pages`](.md) | Sets the specific pages or the range of pages of a file (.tiff or .pdf) for barcode searching. |
 | [`PDFRasterDPI`](.md) | Sets the output image resolution. |
 | [`PDFReadingMode`](.md) | Sets the way to detect barcodes from a PDF file when using the DecodeFile method. |
 | [`RegionPredetectionModes`](.md) | Sets the region pre-detection mode for barcodes search. |
 | [`RequireStartStopChars`](.md) |	Sets whether the start and stop characters are required when searching for Code 39 barcodes. |
 | [`ResultCoordinateType`](.md) | Specifies the format for the coordinates returned | 
 | [`ReturnBarcodeZoneClarity`](.md) | Sets whether or not to return the clarity of the barcode zone. | 
 | [`ReturnPartialBarcodeValue`](.md) | Sets whether or not to return partial barcode value(s). Not support yet. | 
 | [`ScaleDownThreshold`](.md) | Sets the threshold for the image shrinking. |
 | [`ScaleUpModes`](.md) | Sets the mode and priority to control the sampling methods of scale-up for linear barcodes with small module sizes. | 
 | [`StandardFormat`](.md) | Set the standard barcode format. | 
 | [`TailModuleRatio`](.md) |	Set the module count and module size ratio of the barcode tail part. | 
 | [`TerminatePhase`](.md) | Sets the phase where the algorithm stops. |
 | [`TextFilterModes`](.md) | 	Sets the mode and priority for text filter. |
 | [`TextureDetectionModes`](.md) | 	Sets the mode and priority for texture detection. |
 | [`TextResultOrderModes`](.md) | Sets the mode and priority for the order of the text results returned. | 
 | [`Timeout`](.md) | Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. |


 | [`Top`](.md) | 	The top-most coordinate or percentage of the region. | 
 | [`Left`](.md) | 	The left-most coordinate or percentage of the region. | 
 | [`Right`](.md) | 	The right-most coordinate or percentage of the region. | 
 | [`Bottom`](.md) | 	The bottom-most coordinate or percentage of the region. | 
 | [`MeasuredByPercentage`](.md) | 	Sets whether or not to use percentages to measure the Region size. | 



 


 
 
