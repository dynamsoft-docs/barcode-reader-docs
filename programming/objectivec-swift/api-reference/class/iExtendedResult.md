---
layout: default-layout
title: Dynamsoft Barcode Reader Objective-C & Swift API Reference - iExtendedResult Class
description: This page shows the iExtendedResult Class of Dynamsoft Barcode Reader for iOS SDK.
keywords: iExtendedResult, class, api reference, objective-c, oc, swift
needAutoGenerateSidebar: false
---


# iExtendedResult

Stores the extended result. 

## Typedefs

```objc
@interface iExtendedResult
```  

---

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`resultType`](#resulttype) | [`EnumResultType`]({{ site.enumerations }}result-enums.html#resulttype) |
| [`barcodeFormat`](#barcodeformat) | [`EnumBarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) |
| [`barcodeFormatString`](#barcodeformatstring) | *NSString \** |
| [`barcodeFormat_2`](#barcodeformat_2) | [`EnumBarcodeFormat2`]({{ site.enumerations }}format-enums.html#barcodeformat_2) |
| [`barcodeFormatString_2`](#barcodeformatstring_2) | *NSString \** | 
| [`confidence`](#confidence) | *NSInteger* | 
| [`bytes`](#bytes) | *NSData \** | 
| [`bytesLength`](#byteslength) | *NSInteger* | 
| [`accompanyingTextBytes`](#accompanyingtextbytes) | *NSData \** | 
| [`accompanyingTextBytesLength`](#accompanyingtextbyteslength) | *NSInteger* | 
| [`deformation`](#deformation) | *NSInteger* | 
| [`detailedResult`](#detailedresult) | *NSObject \** |
| [`samplingImage`](#samplingimage) | [`iSamplingImageData*`](iSamplingImageData.md) |
| [`clarity`](#clarity) | *NSInteger* | 

### resultType

Extended result type. 

```objc
EnumResultType resultType
```

### barcodeFormat

Barcode type in BarcodeFormat group 1. 

```objc
EnumBarcodeFormat barcodeFormat
```

### barcodeFormatString

Barcode type in BarcodeFormat group 1 as string.

```objc
NSString* barcodeFormatString
```

### barcodeFormat_2

Barcode type in BarcodeFormat group 2.

```objc
EnumBarcodeFormat2 barcodeFormat_2
```
 
### barcodeFormatString_2

Barcode type in BarcodeFormat group 2 as string.

```objc
NSString* barcodeFormatString_2
```

### confidence

The confidence of the result.

```objc
NSInteger confidence
```

### bytes

The content in a byte array.

```objc
NSData* bytes
```

### bytesLength

The length of the byte array.

```objc
NSInteger bytesLength
```

### accompanyingTextBytes

The accompanying text content in a byte array.

```objc
NSData* accompanyingTextBytes
```

### accompanyingTextBytesLength

The length of the accompanying text byte array.

```objc
NSInteger accompanyingTextBytesLength
```

### deformation

The deformation value.

```objc
NSInteger deformation
```

### detailedResult

One of the following: [`iQRCodeDetails`](iQRCodeDetails.md), [`iPDF417Details`](iPDF417Details.md), [`iDataMatrixDetails`](iDataMatrixDetails.md), [`iAztecDetails`](iAztecDetails.md), [`iOneDCodeDetails`](iOneDCodeDetails.md).

```objc
NSObject* detailedResult
```

### samplingImage

The sampling image info.

```objc
iSamplingImageData* samplingImage
```
 
### clarity

The clarity of the barcode zone in percentage.

```objc
NSInteger clarity
```
