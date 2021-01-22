---
layout: default-layout
title: Dynamsoft Barcode Reader Python API Reference - QRCodeDetailedResult Class
description: This page shows the QRCodeDetailedResult Class of Dynamsoft Barcode Reader for Python SDK.
keywords: QRCodeDetailedResult, class, api reference, python
needAutoGenerateSidebar: false
---


# QRCodeDetailedResult
Stores the QRCode details.  


```python
class QRCodeDetailedResult
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`module_size`](#module_size) | *int* |
| [`rows`](#rows) | *int* |
| [`columns`](#columns) | *int* |
| [`error_correction_level`](#error_correction_level) | [`EnumQRCodeErrorCorrectionLevel`]({{ site.enumerations }}other-enums.html#qrcodeerrorcorrectionlevel) |
| [`version`](#version) | *int* |
| [`model`](#model) | *int* |


### module_size
The barcode module size (the minimum bar width in pixel).  

```python
QRCodeDetailedResult.module_size
```

### rows
The row count of the barcode.  

```python
QRCodeDetailedResult.rows
```

### columns
The column count of the barcode. 

```python
QRCodeDetailedResult.columns
```

### error_correction_level
The error correction level of the barcode.  

```python
QRCodeDetailedResult.error_correction_level
```

### version
The version of the QR Code.

```python
QRCodeDetailedResult.version
```

### model
Number of the models.

```python
QRCodeDetailedResult.model
```
