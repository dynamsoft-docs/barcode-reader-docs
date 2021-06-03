---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - AztecDetails Class
description: This page shows the AztecDetails Class of Dynamsoft Barcode Reader for .NET SDK.
keywords: AztecDetails, class, api reference, .Net
needAutoGenerateSidebar: false
---


# AztecDetails
Stores the Aztec details.

```csharp
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

```csharp
int Dynamsoft.AztecDetails.ModuleSize
```  
   
### Rows
The row count of the barcode.

```csharp
int Dynamsoft.AztecDetails.Rows
```  

### Columns
The column count of the barcode.

```csharp
int Dynamsoft.AztecDetails.Columns
```  

### LayerNumber
A negative number (-1, -2, -3, -4) specifies a compact Aztec code.  
A positive number (1, 2, .. 32) specifies a normal (full-rang) Aztec code.  

```csharp
int Dynamsoft.AztecDetails.LayerNumber
```  
