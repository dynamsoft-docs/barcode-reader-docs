---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - ImageData Class
description: This page shows the ImageData Class of Dynamsoft Barcode Reader for .NET SDK.
keywords: ImageData, class, api reference, .Net
needAutoGenerateSidebar: false
---


# ImageData
Stores the image data.  

```csharp
public class ImageData
```

---

## Attributes
    
| Attribute | Type |
|---------- | ---- |
| [`Bytes`](#bytes) | *byte[ ]* |
| [`Width`](#width) | *int* |
| [`Height`](#height) | *int* |
| [`Stride`](#stride) | *int* |
| [`Format`](#format) | [`EnumImagePixelFormat`]({{ site.enumerations }}other-enums.html#imagepixelformat) |


### Bytes
The image data content in a byte array. 

```csharp
byte[] Dynamsoft.DBR.ImageData.Bytes
```

### Width
The width of the image in pixels.  

```csharp
int Dynamsoft.DBR.ImageData.Width
```

### Height
The height of the image in pixels.  

```csharp
int Dynamsoft.DBR.ImageData.Height
```

### Stride
The stride (or scan width) of the image. 

```csharp
int Dynamsoft.DBR.ImageData.Stride
```

### Format
The image pixel format used in the image byte array. 

```csharp
EnumImagePixelFormat Dynamsoft.DBR.ImageData.Format
```
  

