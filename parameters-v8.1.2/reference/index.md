---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference - Main Page
description: Dynamsoft Barcode Reader Parameter Reference - Main Page
keywords: parameter reference, parameters
needAutoGenerateSidebar: false
---


# Parameter Reference

 | Parameter Name | Description |
 | -------------- | ----------- |  
 | [`AllModuleDeviation`](all-module-deviation.md) | Set the module size deviation from the standard barcode module size. |
 | [`AustralianPostEncodingTable`](australian-post-encoding-table.md) | Set the encoding table used to code the Customer Information Field of Australian Post Customer Barcode. | 
 | [`BarcodeAngleRangeArray`](barcode-angle-range-array.md) | Sets the range of angles (in degrees) for barcodes searching. | 
 | [`BarcodeBytesLengthRangeArray`](barcode-bytes-length-range-array.md) | Sets the range of barcode bytes length for barcodes searching. | 
 | [`BarcodeBytesRegExPattern`](barcode-bytes-regex-pattern.md) | Specifies the regular express pattern of barcode byte characters. | 
 | [`BarcodeColourModes`](barcode-colour-modes.md) | Sets the mode and priority for the barcode colour mode used to process the barcode zone. |
 | [`BarcodeComplementModes`](barcode-complement-modes.md) | Sets the mode and priority to complement the missing parts in the barcode. |
 | [`BarcodeFormatIds`](barcode-format-ids.md) | Sets the formats of the barcode to be read. Barcode formats can be combined. |
 | [`BarcodeFormatIds_2`](barcode-format-ids-2.md) | Sets the formats of the barcode in BarcodeFormat group 2 to be read. Barcode formats in BarcodeFormat group 2 can be combined. |
 | [`BarcodeHeightRangeArray`](barcode-height-range-array.md) | Sets the range of barcode heights (in pixels) to for barcodes searching. | 
 | [`BarcodeTextLengthRangeArray`](barcode-text-length-range-array.md) |	Sets the range of barcode text length for barcodes searching. | 
 | [`BarcodeTextRegExPattern`](barcode-text-regex-pattern.md) | Specifies the regular express pattern of barcode characters. | 
 | [`BarcodeWidthRangeArray`](barcode-width-range-array.md) | Sets the range of barcode widths (in pixels) for barcodes searching.(Hint). | 
 | [`BarcodeZoneBarCountRangeArray`](barcode-zone-bar-count-range-array.md) |	Sets the range of bar count of the barcode zone for barcodes searching. | 
 | [`BarcodeZoneMinDistanceToImageBorders`](barcode-zone-min-distance-to-image-borders.md) | Sets the minimum distance (in pixels) between barcode zone and image borders. | 
 | [`BinarizationModes`](binarization-modes.md) | 	Sets the mode and priority for binarization. |
 | [`Code128Subset`](code128-subset.md) | Set the code 128 subset. | 
 | [`ColourClusteringModes`](colour-clustering-modes.md) | Sets the mode and priority for colour categorization. Not supported yet. |
 | [`ColourConversionModes`](colour-conversion-modes.md) | Sets the mode and priority for converting a colour image to a grayscale image. |
 | [`DeblurLevel`](deblur-level.md) | Sets the degree of blurriness of the barcode. |
 | [`DeblurModes`](deblur-modes.md) | Sets the mode and priority for deblurring. |
 | [`DeformationResistingModes`](deformation-resisting-modes.md) | Sets the mode and priority for deformation resisting. |
 | [`DPMCodeReadingModes`](dpm-code-reading-modes.md) | Sets the mode and priority for DPM code reading. |
 | [`ExpectedBarcodesCount`](expected-barcodes-count.md) | Sets the number of barcodes expected to be detected for each image. |
 | [`FindUnevenModuleBarcode`](find-uneven-module-barcode.md) | Specifies whether to find barcodes with uneven barcode modules. Not support yet. | 
 | [`GrayscaleTransformationModes`](grayscale-transformation-modes.md) | Sets the mode and priority for the grayscale image conversion. |
 | [`HeadModuleRatio`](head-module-ratio.md) | Set the module count and module size ratio of the barcode head part. | 
 | [`ImagePreprocessingModes`](image-preprocessing-modes.md) | Sets the mode and priority for image preprocessing algorithms. |
 | [`IntermediateResultSavingMode`](intermediate-result-saving-mode.md) | Sets the mode for saving the intermediate result. | 
 | [`IntermediateResultTypes`](intermediate-result-types.md) | Sets which types of intermediate result to be kept for further reference. Intermediate result types can be combined. | 
 | [`LocalizationModes`](localization-modes.md) | 	Sets the mode and priority for localization algorithms. |
 | [`MaxAlgorithmThreadCount`](max-algorithm-thread-count.md) | Sets the number of threads the image processing algorithm will use to decode barcodes. |
 | [`MinQuietZoneWidth`](min-quiet-zone-width.md) | The minimum width of the barcode quiet zone. | 
 | [`MinRatioOfBarcodeZoneWidthToHeight`](min-ratio-of-barcode-zone-width-to-height.md) | Sets the minimum ratio (width/height) of the barcode zone. | 
 | [`MinResultConfidence`](min-result-confidence.md) | The minimum confidence of the result. | 
 | [`MirrorMode`](mirror-mode.md) | Sets whether to decode mirrored barcodes. | 
 | [`ModuleSizeRangeArray`](module-size-range-array.md) | Sets the range of module size (in pixels) for barcodes searching. (Hint). |
 | [`MSICodeCheckDigitCalculation`](msi-code-check-digit-calculation.md) | Sets the scheme used for calculating a check digit of an MSI barcode. |
 | [`Pages`](pages.md) | Sets the specific pages or the range of pages of a file (.tiff or .pdf) for barcode searching. |
 | [`PDFRasterDPI`](pdf-raster-dpi.md) | Sets the output image resolution. |
 | [`PDFReadingMode`](pdf-reading-mode.md) | Sets the way to detect barcodes from a PDF file when using the DecodeFile method. |
 | [`Region`](region.md) | Sets the region for barcodes searching. |
 | [`RegionPredetectionModes`](region-predetection-modes.md) | Sets the region pre-detection mode for barcodes searching. |
 | [`RequireStartStopChars`](require-start-stop-chars.md) |	Sets whether the start and stop characters are required when searching for Code 39 barcodes. |
 | [`ResultCoordinateType`](result-coordinate-type.md) | Specifies the format for the coordinates returned | 
 | [`ReturnBarcodeZoneClarity`](return-barcode-zone-clarity.md) | Sets whether or not to return the clarity of the barcode zone. | 
 | [`ReturnPartialBarcodeValue`](return-partial-barcode-value.md) | Sets whether or not to return partial barcode value(s). Not support yet. | 
 | [`ScaleDownThreshold`](scale-down-threshold.md) | Sets the threshold for the image shrinking. |
 | [`ScaleUpModes`](scale-up-modes.md) | Sets the mode and priority to control the sampling methods of scale-up for linear barcodes with small module sizes. | 
 | [`StandardFormat`](standard-format.md) | Set the standard barcode format. | 
 | [`TailModuleRatio`](tail-module-ratio.md) |	Set the module count and module size ratio of the barcode tail part. | 
 | [`TerminatePhase`](terminate-phase.md) | Sets the phase where the algorithm stops. |
 | [`TextAssistedCorrectionMode`](text-assisted-correction-mode.md) | Sets the mode of text assisted correction for barcode decoding. Not support yet. |
 | [`TextFilterModes`](text-filter-modes.md) | 	Sets the mode and priority for text filter. |
 | [`TextureDetectionModes`](texture-detection-modes.md) | 	Sets the mode and priority for texture detection. |
 | [`TextResultOrderModes`](text-result-order-modes.md) | Sets the mode and priority for the order of the text results returned. | 
 | [`Timeout`](time-out.md) | Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. |

