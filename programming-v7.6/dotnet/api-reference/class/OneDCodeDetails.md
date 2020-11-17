---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - OneDCodeDetails Class
description: This page shows the OneDCodeDetails Class of Dynamsoft Barcode Reader for .NET SDK.
keywords: OneDCodeDetails, class, api reference, .Net
needAutoGenerateSidebar: false
---

# OneDCodeDetails
Stores the OneD code details.

```C#
public class OneDCodeDetails
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`ModuleSize`](#modulesize) | *int* |
| [`StartCharsBytes`](#startcharsbytes) | *byte[ ]* |
| [`StopCharsBytes`](#stopcharsbytes) | *byte[ ]* |
| [`CheckDigitBytes`](#checkdigitbytes) | *byte[ ]* |


### ModuleSize
The barcode module size (the minimum bar width in pixel).

```C#
int Dynamsoft.Barcode.OneDCodeDetails.ModuleSize
```

### StartCharsBytes
The start chars in a byte array.

```C#
byte[] Dynamsoft.Barcode.OneDCodeDetails.StartCharsBytes
```

### StopCharsBytes
The stop chars in a byte array.

```C#
byte[] Dynamsoft.Barcode.OneDCodeDetails.StopCharsBytes
```

### CheckDigitBytes
The check digit chars in a byte array.

```C#
byte[] Dynamsoft.Barcode.OneDCodeDetails.CheckDigitBytes
```
