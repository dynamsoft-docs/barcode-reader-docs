---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference - RegionDefinition Object
description: This article shows RegionDefinition Object of Dynamsoft Barcode Reader.
keywords: parameter reference, parameters, RegionDefinition
needAutoGenerateSidebar: true
needGenerateH3Content: true
breadcrumbText: Reference
---


# Dynamsoft Barcode Reader SDK - RegionDefinition Object Parameters


## 

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


