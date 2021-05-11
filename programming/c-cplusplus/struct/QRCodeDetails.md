---
layout: default-layout
title: Dynamsoft Barcode Reader C & C++ Struct - QRCodeDetails
description: This page shows the QRCodeDetails struct of Dynamsoft Barcode Reader for C & C++ Language.
keywords: QRCodeDetails, struct, c, c++
needAutoGenerateSidebar: false
---


# QRCodeDetails
Stores the QRCode details.  

## Typedefs

```cpp
typedef struct tagQRCodeDetails  QRCodeDetails
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`moduleSize`](#modulesize) | *int* |
| [`rows`](#rows) | *int* |
| [`columns`](#columns) | *int* |
| [`errorCorrectionLevel`](#errorcorrectionlevel) | [`QRCodeErrorCorrectionLevel`]({{ site.enumerations }}other-enums.html#qrcodeerrorcorrectionlevel) |
| [`version`](#version) | *int* |
| [`model`](#model) | *int* |
| [`mode`](#mode) | *int* |
| [`page`](#page) | *int* |
| [`totalPage`](#totalpage) | *int* |
| [`parityData`](#paritydata) | *unsigned char* |
| [`reserved`](#reserved) | *char\[16\]* |


### moduleSize
The barcode module size (the minimum bar width in pixel).  
```cpp
int tagQRCodeDetails::moduleSize
```

### rows
The row count of the barcode.  
```cpp
int tagQRCodeDetails::rows
```

### columns
The column count of the barcode. 
```cpp
int tagQRCodeDetails::columns
```

### errorCorrectionLevel
The error correction level of the barcode.  
```cpp
QRCodeErrorCorrectionLevel tagQRCodeDetails::errorCorrectionLevel
```

### version
The version of the QR Code.
```cpp
int tagQRCodeDetails::version
```

### model
Number of the models.
```cpp
int tagQRCodeDetails::model
```

### mode

Identify the first data encoding mode.

```cpp
int tagQRCodeDetails::mode
```

### page

Identify the position of the particular symbol.

```cpp
int tagQRCodeDetails::page
```

### totalPage

Identify the total number of symbols to be concatenated in the Structured Append format.

```cpp
int tagQRCodeDetails::totalPage
```

### parityData

The Parity Data shall be an 8 bit byte following the Symbol Sequence Indicator. The parity data is a value obtained by XORing byte by byte the ASCII/JIS values of all the original input data before division into symbol blocks.

```cpp
unsigned char tagQRCodeDetails::parityData
```

### reserved
Reserved memory for the struct. The length of this array indicates the size of the memory reserved for this struct.
```cpp
char tagQRCodeDetails::reserved[16]
```

