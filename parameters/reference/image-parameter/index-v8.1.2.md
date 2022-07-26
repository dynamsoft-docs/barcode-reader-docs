---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference - ImageParameter Object
description: This page shows Dynamsoft Barcode Reader Parameter Reference - ImageParameter Object.
keywords: parameter reference, parameters, ImageParameter
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# ImageParameter Object Parameters

## Content Organization Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.Name`](#name) | The name of the ImageParameter object. |
 | [`ImageParameter.Description`](#description) | The description of the ImageParameter object. |
 | [`ImageParameter.FormatSpecificationNameArray`](#formatspecificationnamearray) | The names of the referenced FormatSpecification object(s). |
 | [`ImageParameter.RegionDefinitionNameArray`](#regiondefinitionnamearray) | The names of the referenced RegionDefinition object(s). |

### Name
The name of the ImageParameter object.  

**Remarks**      
It must be a unique name.

**JSON Definition**

| Parent Object | Key Name | Key Value Type | Description |
| ------------- | -------- | -------------- | ----------- |
| ImageParameter | Name | *string* | It must be a mandatory setting value. |

**JSON Example**   
```
{
    "Name":"ImageParameter1"
}
```


### Description
The description of the ImageParameter object.

**JSON Definition**

| Parent Object | Key Name | Key Value Type | Default Value |
| ------------- | -------- | -------------- | ------------- |
| ImageParameter | Description | *string* | "" |

**JSON Example**   
```
{
    "Description":"This template demonstrate..."
}
```
  

### FormatSpecificationNameArray
The names of the referenced FormatSpecification object(s). 

**Remarks**     
An array item is a name of any available `FormatSpecifications`.   

**JSON Definition**

| Parent Object | Key Name | Key Value Type | Default Value |
| ------------- | -------- | -------------- | ------------- |
| ImageParameter | FormatSpecificationNameArray | *string Array* | `null` |

   
**JSON Example**   
```
{
    "FormatSpecificationNameArray":[
        "FormatSpecification1",
        "FormatSpecification2"
    ]
}
```


### RegionDefinitionNameArray
The names of the referenced RegionDefinition object(s). 

**Remarks**     
An array item is a name of any available `RegionDefinitions`.    

**JSON Definition**

| Parent Object | Key Name | Key Value Type | Default Value |
| ------------- | -------- | -------------- | ------------- |
| ImageParameter | RegionDefinitionNameArray | *string Array* | `null` |


**JSON Example**   
```
{
    "RegionDefinitionNameArray":[
        "RegionDefinition1",
        "RegionDefinition2"
    ]
}
```


## Cost Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.TerminatePhase`](../terminate-phase.md) | Sets the phase where the algorithm stops. |
 | [`ImageParameter.Timeout`](../time-out.md) | Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. |
 | [`ImageParameter.MaxAlgorithmThreadCount`](../max-algorithm-thread-count.md) | Sets the number of threads the image processing algorithm will use to decode barcodes. |
 | [`ImageParameter.ExpectedBarcodesCount`](../expected-barcodes-count.md) | Sets the number of barcodes expected to be detected for each image. |


## Format Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.BarcodeFormatIds`](../barcode-format-ids.md) | Sets the formats of the barcode to be read. Barcode formats can be combined. |
 | [`ImageParameter.BarcodeFormatIds_2`](../barcode-format-ids-2.md) | Sets the formats of the barcode in BarcodeFormat group 2 to be read. Barcode formats in BarcodeFormat group 2 can be combined. |
 
 
## Image Process Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.BarcodeColourModes`](../barcode-colour-modes.md) | Sets the mode and priority for the barcode colour mode used to process the barcode zone. |
 | [`ImageParameter.BarcodeComplementModes`](../barcode-complement-modes.md) | Sets the mode and priority to complement the missing parts in the barcode. |
 | [`ImageParameter.BinarizationModes`](../binarization-modes.md) | 	Sets the mode and priority for binarization. |
 | [`ImageParameter.ColourClusteringModes`](../colour-clustering-modes.md) | Sets the mode and priority for colour categorization. Not supported yet. |
 | [`ImageParameter.ColourConversionModes`](../colour-conversion-modes.md) | Sets the mode and priority for converting a colour image to a grayscale image. |
 | [`ImageParameter.DeblurLevel`](../deblur-level.md) | Sets the degree of blurriness of the barcode. |
 | [`ImageParameter.DeblurModes`](../deblur-modes.md) | Sets the mode and priority for deblurring. |
 | [`ImageParameter.DeformationResistingModes`](../deformation-resisting-modes.md) | Sets the mode and priority for deformation resisting. |
 | [`ImageParameter.DPMCodeReadingModes`](../dpm-code-reading-modes.md) | Sets the mode and priority for DPM code reading. Not support yet. |
 | [`ImageParameter.GrayscaleTransformationModes`](../grayscale-transformation-modes.md) | Sets the mode and priority for the grayscale image conversion. |
 | [`ImageParameter.ImagePreprocessingModes`](../image-preprocessing-modes.md) | Sets the mode and priority for image preprocessing algorithms. |
 | [`ImageParameter.LocalizationModes`](../localization-modes.md) | 	Sets the mode and priority for localization algorithms. |
 | [`ImageParameter.Pages`](../pages.md) | Sets the specific pages or the range of pages of a file (.tiff or .pdf) for barcode searching. |
 | [`ImageParameter.PDFRasterDPI`](../pdf-raster-dpi.md) | Sets the output image resolution. |
 | [`ImageParameter.PDFReadingMode`](../pdf-reading-mode.md) | Sets the way to detect barcodes from a PDF file when using the DecodeFile method. |
 | [`ImageParameter.RegionPredetectionModes`](../region-predetection-modes.md) | Sets the region pre-detection mode for barcodes search. |
 | [`ImageParameter.ScaleDownThreshold`](../scale-down-threshold.md) | Sets the threshold for the image shrinking. |
 | [`ImageParameter.ScaleUpModes`](../scale-up-modes.md) | Sets the mode and priority to control the sampling methods of scale-up for linear barcodes with small module sizes. | 
 | [`ImageParameter.TextAssistedCorrectionMode`](../text-assisted-correction-mode.md) | Sets the mode of text assisted correction for barcode decoding. Not support yet. |
 | [`ImageParameter.TextFilterModes`](../text-filter-modes.md) | 	Sets the mode and priority for text filter. |
 | [`ImageParameter.TextureDetectionModes`](../texture-detection-modes.md) | 	Sets the mode and priority for texture detection. |



## Result Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.IntermediateResultTypes`](../intermediate-result-types.md) | Sets which types of intermediate result to be kept for further reference. Intermediate result types can be combined. | 
 | [`ImageParameter.IntermediateResultSavingMode`](../intermediate-result-saving-mode.md) | Sets the mode for saving the intermediate result. | 
 | [`ImageParameter.ResultCoordinateType`](../result-coordinate-type.md) | Specifies the format for the coordinates returned | 
 | [`ImageParameter.TextResultOrderModes`](../text-result-order-modes.md) | Sets the mode and priority for the order of the text results returned. | 
 | [`ImageParameter.ReturnBarcodeZoneClarity`](../return-barcode-zone-clarity.md) | Sets whether or not to return the clarity of the barcode zone. | 


