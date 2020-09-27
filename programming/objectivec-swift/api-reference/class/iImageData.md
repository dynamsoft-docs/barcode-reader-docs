---
layout: default-layout
title: Dynamsoft Barcode Reader Objective-C & Swift API Reference - iImageData Class
description: This page shows the iImageData Class of Dynamsoft Barcode Reader for iOS SDK.
keywords: iImageData, class, api reference, objective-c, oc, swift
needAutoGenerateSidebar: false
---


# iImageData

Stores the image data.  

## Typedefs

```objc
@interface iImageData
```

---

## Attributes
    
| Attribute | Type |
|---------- | ---- |
| [`bytesLength`](#byteslength) | *NSInteger* |
| [`bytes`](#bytes) | *unsigned char\** |
| [`width`](#width) | *NSInteger* |
| [`height`](#height) | *NSInteger* |
| [`stride`](#stride) | *NSInteger* |
| [`format`](#format) | [`EnumImagePixelFormat`]({{ site.enumerations }}other-enums.html#imagepixelformat) |


### bytesLength

The length of the image data byte array. 

```objc
NSInteger bytesLength
```

### bytes

The image data content in a byte array. 

```objc
unsigned char* bytes
```

### width

The width of the image in pixels.  

```objc
NSInteger width
```

### height

The height of the image in pixels.  

```objc
NSInteger height
```

### stride

The stride (or scan width) of the image. 

```objc
NSInteger stride
```

### format

The image pixel format used in the image byte array. 

```objc
EnumImagePixelFormat format
```
  

