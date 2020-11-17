---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - OneDCodeDetails Class
description: This page shows the OneDCodeDetails Class of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: OneDCodeDetails, class, api reference, java
needAutoGenerateSidebar: false
---

# OneDCodeDetails
Stores the OneD code details.
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`moduleSize`](#modulesize) | *int* |
| [`startCharsBytes`](#startcharsbytes) | *byte\[\]* |
| [`stopCharsBytes`](#stopcharsbytes) | *byte\[\]* |
| [`checkDigitBytes`](#checkdigitbytes) | *byte\[\]* |


### moduleSize
The barcode module size (the minimum bar width in pixel).
```java
int com.dynamsoft.dbr.LocalizationResult.moduleSize
```

### startCharsBytes
The start chars in a byte array.
```java
byte[] com.dynamsoft.dbr.LocalizationResult.startCharsBytes
```

### stopCharsBytes
The stop chars in a byte array.
```java
byte[] com.dynamsoft.dbr.LocalizationResult.stopCharsBytes
```

### checkDigitBytes
The check digit chars in a byte array.
```java
byte[] com.dynamsoft.dbr.LocalizationResult.checkDigitBytes
```

