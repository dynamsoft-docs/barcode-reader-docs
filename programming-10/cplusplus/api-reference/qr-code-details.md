---
layout: default-layout
title: CQRCodeDetails Class
description: This page shows CQRCodeDetails class definition of Dynamsoft Barcode Reader SDK C++ Edition.
keywords: rows, columns, errorCorrectionLevel, version, model, CQRCodeDetails, api reference
permalink: /programming-10/cplusplus/api-reference/qr-code-details.html
---
# CQRCodeDetails

The CQRCodeDetails class represents the details of a QR Code barcode. It is derived from the CBarcodeDetails class and contains various attributes related to the QR Code barcode. 

```cpp
class CQRCodeDetails : public CBarcodeDetails
```

---

## Attributes Summary

| Attribute | Type |
|---------- | ---- |
| [`rows`](#rows) | *int* |
| [`columns`](#columns) | *int* |
| [`errorCorrectionLevel`](#errorcorrectionlevel) | *QRCodeErrorCorrectionLevel* |
| [`version`](#version) | *int* |
| [`model`](#model) | *int* |
| [`mode`](#mode) | *int* |
| [`page`](#page) | *int* |
| [`totalPage`](#totalpage) | *int* |
| [`parityData`](#paritydata) | *unsigned char* |

### rows

The row count of the QR Code barcode.

```cpp
int rows
```

### columns

The column count of the QR Code barcode.

```cpp
int columns
```

### errorCorrectionLevel

The error correction level of the QR Code barcode.

```cpp
QRCodeErrorCorrectionLevel errorCorrectionLevel
```

### version

The version of the QR Code barcode.

```cpp
int version
```

### model

Number of models of the QR Code barcode.

```cpp
int model
```

### mode

Identify the first data encoding mode of the QR Code barcode.

```cpp
int mode
```

### page

Identify the position of the particular symbol in the Structured Append format of the QR Code barcode.

```cpp
int page
```

### totalPage

Identify the total number of symbols to be concatenated in the Structured Append format of the QR Code barcode.

```cpp
int totalPage
```

### parityData

The Parity Data shall be an 8 bit byte following the Symbol Sequence Indicator. The parity data is a value obtained by XORing byte by byte the ASCII/JIS values of all the original input data before division into symbol blocks.

```cpp
unsigned char parityData
```