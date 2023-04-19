---
layout: default-layout
title: CAztecDetails Class
description: This page shows CAztecDetails class definition of Dynamsoft Barcode Reader SDK C++ Edition.
keywords: rows, columns, layerNumber, CAztecDetails, api reference
permalink: /programming-10/cplusplus/api-reference/aztec-details.html
---
# CAztecDetails

The CAztecDetails class represents a barcode in Aztec format. It inherits from the CBarcodeDetails class and contains information about the row count, column count, and layer number of the barcode.

```cpp
class CAztecDetails : public CBarcodeDetails
```

---

## Attributes Summary

| Attribute | Type |
|---------- | ---- |
| [`rows`](#rows) | *int* |
| [`columns`](#columns) | *int* |
| [`layerNumber`](#layernumber) | *int* |

## Methods Summary

This class does not have any public methods.

### rows

The number of rows in the Aztec barcode.

```cpp
int rows
```

### columns

The number of columns in the Aztec barcode.

```cpp
int columns
```

### layerNumber

Specifies the layer number of the Aztec barcode. A negative number (-1, -2, -3, -4) specifies a compact Aztec code. A positive number (1, 2, .. 32) specifies a normal (full-range) Aztec code.

```cpp
int layerNumber
```