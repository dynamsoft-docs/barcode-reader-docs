---
layout: default-layout
title: Dynamsoft Barcode Reader Objective-C & Swift API Reference - iAztecDetails Class
description: This page shows the iAztecDetails Class of Dynamsoft Barcode Reader for iOS SDK.
keywords: iAztecDetails, class, api reference, objective-c, oc, swift
needAutoGenerateSidebar: false
---


# iAztecDetails

Stores the Aztec details.
  

## Typedefs

```objc
@interface iAztecDetails
```  
---

## Attributes
  
| Attribute | Type |
|---------- | ----------- | 
| [`moduleSize`](#modulesize) | *NSInteger* |
| [`rows`](#rows) | *NSInteger* | 
| [`columns`](#columns) | *NSInteger* |
| [`layerNumber`](#layernumber) | *NSInteger* |
  
  
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

### layerNumber

A negative number (-1, -2, -3, -4) specifies a compact Aztec code. A positive number (1, 2, .. 32) specifies a normal (full-rang) Aztec code.  

```objc
NSInteger layerNumber
```  
