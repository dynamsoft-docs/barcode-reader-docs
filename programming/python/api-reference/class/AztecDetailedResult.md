---
layout: default-layout
title: Dynamsoft Barcode Reader Python API Reference - AztecDetailedResult Class
description: This page shows the AztecDetailedResult Class of Dynamsoft Barcode Reader for Python SDK.
keywords: AztecDetailedResult, class, api reference, python
needAutoGenerateSidebar: false
---


# AztecDetailedResult
Stores the Aztec details.

```python
class AztecDetailedResult
```  

---


## Attributes
  
| Attribute | Type |
|---------- | ----------- | 
| [`module_size`](#module_size) | *int* |
| [`rows`](#rows) | *int* | 
| [`columns`](#columns) | *int* |
| [`layer_number`](#layernumber) | *int* |
  
  
### module_size
The barcode module size (the minimum bar width in pixel).

```python
AztecDetailedResult.module_size
```  
   
### rows
The row count of the barcode.

```python
AztecDetailedResult.rows
```  

### columns
The column count of the barcode.

```python
AztecDetailedResult.columns
```  

### layer_number
A negative number (-1, -2, -3, -4) specifies a compact Aztec code.  
A positive number (1, 2, .. 32) specifies a normal (full-rang) Aztec code.  

```python
AztecDetailedResult.layer_number
```  
