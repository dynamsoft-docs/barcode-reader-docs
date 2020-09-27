---
layout: default-layout
title: Dynamsoft Barcode Reader C & C++ Struct - SamplingImageData
description: This page shows the SamplingImageData struct of Dynamsoft Barcode Reader for C & C++ Language.
keywords: SamplingImageData, struct, c, c++
needAutoGenerateSidebar: false
---


# SamplingImageData
Stores the sampling image data.

## Typedefs

```cpp
typedef struct tagSamplingImageData  SamplingImageData
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`bytes`](#bytes) | *unsigned char \** |
| [`width`](#width) | *int* |
| [`height`](#height) | *int* |


### bytes
The sampling image data in a byte array.
```cpp
unsigned char* tagSamplingImageData::bytes
```

### width
The width of the sampling image.
```cpp
int tagSamplingImageData::width
```

### height
The height of the sampling image.
```cpp
int tagSamplingImageData::height
```
