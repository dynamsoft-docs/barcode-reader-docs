---
layout: default-layout
title: Dynamsoft Barcode Reader Objective-C & Swift API Reference - iOneDCodeDetails Class
description: This page shows the iOneDCodeDetails Class of Dynamsoft Barcode Reader for iOS SDK.
keywords: iOneDCodeDetails, class, api reference, objective-c, oc, swift
needAutoGenerateSidebar: false
---

# iOneDCodeDetails

Stores the OneD code details.

## Typedefs

```objc
@interface iOneDCodeDetails
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`moduleSize`](#modulesize) | *NSInteger* |
| [`startCharsBytes`](#startcharsbytes) | *NSData \** |
| [`startCharsBytesLength`](#startcharsbyteslength) | *NSInteger* |
| [`stopCharsBytes`](#stopcharsbytes) | *NSData \** |
| [`stopCharsBytesLength`](#stopcharsbyteslength) | *NSInteger* |
| [`checkDigitBytes`](#checkdigitbytes) | *NSData \** |
| [`checkDigitBytesLength`](#checkdigitbyteslength) | *NSInteger* |


### moduleSize

The barcode module size (the minimum bar width in pixel).

```objc
NSInteger moduleSize
```

### startCharsBytes

The start chars in a byte array.

```objc
NSData* startCharsBytes
```

### startCharsBytesLength

The length of the start chars byte array.

```objc
NSInteger startCharsBytesLength
```

### stopCharsBytes

The stop chars in a byte array.

```objc
NSData* stopCharsBytes
```

### stopCharsBytesLength

The length of the stop chars byte array.

```objc
NSInteger stopCharsBytesLength
```

### checkDigitBytes

The check digit chars in a byte array.

```objc
NSData* checkDigitBytes
```

### checkDigitBytesLength

The length of the check digit chars byte array.

```objc
NSInteger checkDigitBytesLength
```
