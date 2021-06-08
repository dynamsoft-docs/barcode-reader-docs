---
layout: default-layout
title: Dynamsoft Barcode Reader Android API Reference - OneDCodeDetails Class
description: This page shows the OneDCodeDetails Class of Dynamsoft Barcode Reader for Android SDK.
keywords: OneDCodeDetails, class, api reference, android
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
| [`startPatternRange`](#startpatternrange) | *float\[\]* |
| [`middlePatternRange`](#middlepatternrange) | *float\[\]* |
| [`endPatternRange`](#endpatternrange) | *float\[\]* |

### moduleSize

The barcode module size (the minimum bar width in pixel).

```java
int com.dynamsoft.dbr.OneDCodeDetails.moduleSize
```

### startCharsBytes

The start chars in a byte array.

```java
byte[] com.dynamsoft.dbr.OneDCodeDetails.startCharsBytes
```

### stopCharsBytes

The stop chars in a byte array.

```java
byte[] com.dynamsoft.dbr.OneDCodeDetails.stopCharsBytes
```

### checkDigitBytes

The check digit chars in a byte array.

```java
byte[] com.dynamsoft.dbr.OneDCodeDetails.checkDigitBytes
```

### startPatternRange

The start pattern range of the OneDcode.

```java
byte[] com.dynamsoft.dbr.OneDCodeDetails.startPatternRange
```

### middlePatternRange

The middle pattern range of the OneDcode.

```java
byte[] com.dynamsoft.dbr.OneDCodeDetails.middlePatternRange
```

### endPatternRange

The end pattern range of the OneDcode.

```java
byte[] com.dynamsoft.dbr.OneDCodeDetails.endPatternRange
```
