---
layout: default-layout
title: Dynamsoft Barcode Reader Objective-C & Swift API Reference - iLocalizationResult Class
description: This page shows the iLocalizationResult Class of Dynamsoft Barcode Reader for iOS SDK.
keywords: iLocalizationResult, class, api reference, objective-c, oc, swift
needAutoGenerateSidebar: false
---


# iLocalizationResult

Stores the localization result.

## Typedefs

```objc
@interface iLocalizationResult
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`terminatePhase`](#terminatephase) | [`EnumTerminatePhase`]({{ site.enumerations }}parameter-mode-enums.html#terminatephase) |
| [`barcodeFormat`](#barcodeformat) | [`EnumBarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) |
| [`barcodeFormatString`](#barcodeformatstring) | *NSString \** |
| [`barcodeFormat_2 `](#barcodeformat_2 ) | [`EnumBarcodeFormat2 `]({{ site.enumerations }}format-enums.html#barcodeformat_2) |
| [`barcodeFormatString_2`](#barcodeformatstring_2) | *NSString \** |
| [`x1`](#x1) | *NSInteger* |
| [`y1`](#y1) | *NSInteger* |
| [`x2`](#x2) | *NSInteger* |
| [`y2`](#y2) | *NSInteger* |
| [`x3`](#x3) | *NSInteger* |
| [`y3`](#y3) | *NSInteger* |
| [`x4`](#x4) | *NSInteger* |
| [`y4`](#y4) | *NSInteger* |
| [`angle`](#angle) | *NSInteger* |
| [`moduleSize`](#modulesize) | *NSInteger* |
| [`pageNumber`](#pagenumber) | *NSInteger* |
| [`regionName`](#regionname) | *NSString \** |
| [`documentName`](#documentname)| *NSString \** |
| [`resultCoordinateType`](#resultcoordinatetype) | [`EnumResultCoordinateType`]({{ site.enumerations }}result-enums.html#resultcoordinatetype) |
| [`accompanyingTextBytes`](#accompanyingtextbytes) | *NSData \** |
| [`accompanyingTextBytesLength`](#accompanyingtextbyteslength) | *NSInteger* |
| [`confidence`](#confidence) | *NSInteger* |


### terminatePhase

The terminate phase of localization result.

```objc
EnumTerminatePhase terminatePhase
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

### x1

The X coordinate of the left-most point.

```objc
NSInteger x1
```

### y1

The Y coordinate of the left-most point.

```objc
NSInteger y1
```

### x2

The X coordinate of the second point in a clockwise direction.

```objc
NSInteger x2
```

### y2

The Y coordinate of the second point in a clockwise direction.

```objc
NSInteger y2
```

### x3

The X coordinate of the third point in a clockwise direction.

```objc
NSInteger x3
```

### y3

The Y coordinate of the third point in a clockwise direction.

```objc
NSInteger y3
```

### x4

The X coordinate of the fourth point in a clockwise direction.

```objc
NSInteger x4
```

### y4

The Y coordinate of the fourth point in a clockwise direction.

```objc
NSInteger y4
```

### angle

The angle of a barcode. Values range is from 0 to 360.

```objc
NSInteger angle
```

### moduleSize

The barcode module size (the minimum bar width in pixel).

```objc
NSInteger moduleSize
```

### pageNumber

The page number the barcode located in. The index is 0-based.

```objc
NSInteger pageNumber
```

### regionName

The region name the barcode located in.

```objc
NSString* regionName
```

### documentName

The document name.

```objc
NSString* documentName
```

### resultCoordinateType

The coordinate type.

```objc
EnumResultCoordinateType resultCoordinateType
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

### confidence

The confidence of the localization result.

```objc
NSInteger confidence
```
