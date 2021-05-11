---
layout: default-layout
title: Dynamsoft Barcode Reader Objective-C & Swift API Reference - iQRCodeDetails Class
description: This page shows the iQRCodeDetails Class of Dynamsoft Barcode Reader for iOS SDK.
keywords: iQRCodeDetails, class, api reference, objective-c, oc, swift
needAutoGenerateSidebar: false
---


# iQRCodeDetails

Stores the QRCode details.  

## Typedefs

```objc
@interface iQRCodeDetails
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`moduleSize`](#modulesize) | *NSInteger* |
| [`rows`](#rows) | *NSInteger* |
| [`columns`](#columns) | *NSInteger* |
| [`errorCorrectionLevel`](#errorcorrectionlevel) | [`EnumQRCodeErrorCorrectionLevel`]({{ site.enumerations }}other-enums.html#qrcodeerrorcorrectionlevel) |
| [`version`](#version) | *NSInteger* |
| [`model`](#model) | *NSInteger* |
| [`mode`](#mode) | *NSInteger* |
| [`page`](#page) | *NSInteger* |
| [`totalPage`](#totalpage) | *NSInteger* |
| [`parityData`](#paritydata) | *byte* |


### moduleSize

The barcode module size (the minimum bar width in pixel).  

```objc
NSInteger moduleSize
```

### rows

The row count of the barcode.  

```objc
NSInteger rows
```

### columns

The column count of the barcode. 

```objc
NSInteger columns
```

### errorCorrectionLevel

The error correction level of the barcode.

```objc
EnumQRCodeErrorCorrectionLevel errorCorrectionLevel
```

### version

The version of the QR Code.

```objc
NSInteger version
```

### model

Number of the models.

```objc
NSInteger model
```


### mode

Identify the first data encoding mode.

```objc
NSInteger mode
```

### page

Identify the position of the particular symbol.

```objc
NSInteger page
```

### totalPage

Identify the total number of symbols to be concatenated in the Structured Append format.

```objc
NSInteger totalPage
```

### parityData

The Parity Data shall be an 8 bit byte following the Symbol Sequence Indicator. The parity data is a value obtained by XORing byte by byte the ASCII/JIS values of all the original input data before division into symbol blocks.

```objc
byte parityData
```
