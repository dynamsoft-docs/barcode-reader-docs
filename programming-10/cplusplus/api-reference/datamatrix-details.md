---
layout: default-layout
title: CDataMatrixDetails Class
description: This page shows CDataMatrixDetails class definition of Dynamsoft Barcode Reader SDK C++ Edition.
keywords: rows, columns, CDataMatrixDetails, api reference
permalink: /programming-10/cplusplus/api-reference/datamatrix-details.html
---
# CDataMatrixDetails

The CDataMatrixDetails class represents the details of a DataMatrix barcode. It is derived from the CBarcodeDetails class and contains various attributes related to the DataMatrix barcode. 

```cpp
class CDataMatrixDetails : public CBarcodeDetails
```

---

## Attributes Summary

| Attribute | Type |
|---------- | ---- |
| [`rows`](#rows) | *int* |
| [`columns`](#columns) | *int* |
| [`dataRegionRows`](#dataregionrows) | *int* |
| [`dataRegionColumns`](#dataregioncolumns) | *int* |
| [`dataRegionNumber`](#dataregionnumber) | *int* |

### rows

The row count of the DataMatrix barcode.

```cpp
int rows
```

### columns

The column count of the DataMatrix barcode.

```cpp
int columns
```

### dataRegionRows

The data region row count of the DataMatrix barcode.

```cpp
int dataRegionRows
```

### dataRegionColumns

The data region column count of the DataMatrix barcode.

```cpp
int dataRegionColumns
```

### dataRegionNumber

The data region count.

```cpp
int dataRegionNumber
```
