---
layout: default-layout
title: Dynamsoft Barcode Reader Python API Reference - LocalizationResult Class
description: This page shows the LocalizationResult Class of Dynamsoft Barcode Reader for Python SDK.
keywords: LocalizationResult, class, api reference, python
needAutoGenerateSidebar: false
---


# LocalizationResult
Stores the localization result.

```python
public class LocalizationResult
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`terminate_phase`](#terminate_phase) | [`TerminatePhase`]({{ site.enumerations }}parameter-mode-enums.html#terminatephase) |
| [`barcode_format`](#barcode_format) | [`BarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) |
| [`barcode_format_string`](#barcode_format_string) | *str* |
| [`barcode_format_2 `](#barcode_format_2 ) | [`BarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2) |
| [`barcode_format_string_2`](#barcode_format_string_2) | *str* |
| [`localization_points`](#localization_points) | *tuple* |
| [`angle`](#angle) | *int* |
| [`module_size`](#module_size) | *int* |
| [`page_number`](#page_number) | *int* |
| [`region_name`](#region_name) | *str* |
| [`document_name`](#document_name)| *str* |
| [`result_coordinate_type`](#result_coordinate_type) | [`ResultCoordinateType`]({{ site.enumerations }}result-enums.html#resultcoordinatetype) |
| [`accompanying_text_bytes`](#accompanying_text_bytes) | *bytearray* |
| [`confidence`](#confidence) | *int* |


### terminate_phase
The terminate phase of localization result.

```python
LocalizationResult.terminate_phase
```

### barcode_format
Barcode type in BarcodeFormat group 1.

```python
LocalizationResult.barcode_format
```

### barcode_format_string
Barcode type in BarcodeFormat group 1 as string.

```python
LocalizationResult.barcode_format_string
```

### barcode_format_2
Barcode type in BarcodeFormat group 2.

```python
LocalizationResult.barcode_format_2
```

### barcode_format_string_2
Barcode type in BarcodeFormat group 2 as string.

```python
LocalizationResult.barcode_format_string_2
```

### localization_points
The tuple which stores the coordinates of four result points. 

```python
LocalizationResult.localization_points
```

### angle
The angle of a barcode. Values range is from 0 to 360.

```python
LocalizationResult.angle
```

### module_size
The barcode module size (the minimum bar width in pixel).

```python
LocalizationResult.module_size
```

### page_number
The page number the barcode located in. The index is 0-based.

```python
LocalizationResult.page_number
```

### region_name
The region name the barcode located in.

```python
LocalizationResult.region_name
```

### document_name
The document name.

```python
string Dynamsoft.Barcode.LocalizationResult.document_name
```

### result_coordinate_type
The coordinate type.

```python
LocalizationResult.result_coordinate_type
```

### accompanying_text_bytes
The accompanying text content in a byte array.

```python
LocalizationResult.accompanying_text_bytes
```

### confidence
The confidence of the localization result.

```python
LocalizationResult.confidence
```
