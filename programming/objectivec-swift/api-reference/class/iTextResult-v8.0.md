---
layout: default-layout
title: Dynamsoft Barcode Reader Objective-C & Swift API Reference - iTextResult Class
description: This page shows the iTextResult Class of Dynamsoft Barcode Reader for iOS SDK.
keywords: iTextResult, class, api reference, objective-c, oc, swift
needAutoGenerateSidebar: false
---


# iTextResult

Stores the text result.

## Typedefs

```objc
@interface iTextResult
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`barcodeFormat`](#barcodeformat) | [`EnumBarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) |
| [`barcodeFormatString`](#barcodeformatstring) | *NSString \** |
| [`barcodeFormat_2`](#barcodeformat_2) | [`EnumBarcodeFormat2`]({{ site.enumerations }}format-enums.html#barcodeformat_2) |
| [`barcodeFormatString_2`](#barcodeformatstring_2) | *NSString \** |
| [`barcodeText`](#barcodetext) | *NSString \** |
| [`barcodeBytes`](#barcodebytes) | *NSData \** |
| [`localizationResult`](#localizationresult) | [`iLocalizationResult`](iLocalizationResult.md)\* |
| [`detailedResult`](#detailedresult) | *NSObject \** |
| [`extendedResults`](#extendedResults) | [`NSArray<iExtendedResult*>*`](iExtendedResult.md)\* |


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

### barcodeText

The barcode text, ends by '\0'.

```objc
NSString* barcodeText
```

### barcodeBytes

The barcode content in a byte array.

```objc
NSData* barcodeBytes
```

### localizationResult

The corresponding localization result.

```objc
iLocalizationResult* localizationResult
```

### detailedResult

One of the following: [`iQRCodeDetails`](iQRCodeDetails.md), [`iPDF417Details`](iPDF417Details.md), [`iDataMatrixDetails`](iDataMatrixDetails.md), [`iAztecDetails`](iAztecDetails.md), [`iOneDCodeDetails`](iOneDCodeDetails.md).

```objc
NSObject* detailedResult
```

### extendedResults

The extended result array.

```objc
NSArray<iExtendedResult*>* extendedResults
```
