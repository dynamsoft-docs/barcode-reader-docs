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
