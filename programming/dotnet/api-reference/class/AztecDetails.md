---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - AztecDetails Class
description: This page shows the AztecDetails Class of Dynamsoft Barcode Reader for .NET SDK.
keywords: AztecDetails, class, api reference, .Net
needAutoGenerateSidebar: false
---


# AztecDetails
Stores the Aztec details.

```C#
public class AztecDetails
```  

---


## Attributes
  
| Attribute | Type |
|---------- | ----------- | 
| [`ModuleSize`](#modulesize) | *int* |
| [`Rows`](#rows) | *int* | 
| [`Columns`](#columns) | *int* |
| [`LayerNumber`](#layernumber) | *int* |
  
  
### ModuleSize
The barcode module size (the minimum bar width in pixel).

```C#
int Dynamsoft.Barcode.AztecDetails.ModuleSize
```  
   
### Rows
The row count of the barcode.

```C#
int Dynamsoft.Barcode.AztecDetails.Rows
```  

### Columns
The column count of the barcode.

```C#
int Dynamsoft.Barcode.AztecDetails.Columns
```  

### LayerNumber
A negative number (-1, -2, -3, -4) specifies a compact Aztec code.  
A positive number (1, 2, .. 32) specifies a normal (full-rang) Aztec code.  

```C#
int Dynamsoft.Barcode.AztecDetails.LayerNumber
```  
