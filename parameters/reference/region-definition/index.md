---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference - RegionDefinition Object
description: This article shows RegionDefinition Object of Dynamsoft Barcode Reader.
keywords: parameter reference, parameters, RegionDefinition
needAutoGenerateSidebar: true
needGenerateH3Content: true
breadcrumbText: Reference
---


# RegionDefinition Object Parameters



## Content Organization Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`RegionDefinition.Name`](content-organization-control.md#name) | The name of the RegionDefinition object. |
 | [`RegionDefinition.FormatSpecificationNameArray`](content-organization-control.md#formatspecificationnamearray) | The names of the referenced FormatSpecification object(s). |


## Cost Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`RegionDefinition.ExpectedBarcodesCount`](../expected-barcodes-count.md) | Sets the expected number of barcodes to be decoded for the current region. |


## Format Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`RegionDefinition.BarcodeFormatIds`](../barcode-format-ids.md) | Sets which types of barcode(s) in BarcodeFormat group 1 to be read in this region. |
 | [`RegionDefinition.BarcodeFormatIds_2`](../barcode-format-ids-2.md) | Sets which types of barcode(s) in BarcodeFormat group 2 to be read in this region. |
 
 
## Image Process Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`RegionDefinition.Top`](../region.md) | 	The top-most coordinate or percentage of the region. | 
 | [`RegionDefinition.Left`](../region.md) | 	The left-most coordinate or percentage of the region. | 
 | [`RegionDefinition.Right`](../region.md) | 	The right-most coordinate or percentage of the region. | 
 | [`RegionDefinition.Bottom`](../region.md) | 	The bottom-most coordinate or percentage of the region. | 
 | [`RegionDefinition.MeasuredByPercentage`](../region.md) | 	Sets whether or not to use percentages to measure the Region size. | 


