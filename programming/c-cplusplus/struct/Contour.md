---
layout: default-layout
title: Dynamsoft Barcode Reader C & C++ Struct - Contour
description: This page shows the Contour struct of Dynamsoft Barcode Reader for C & C++ Language.
keywords: Contour, struct, c, c++
needAutoGenerateSidebar: false
---


# Contour
Stores the contour information.

## Typedefs

```cpp
typedef struct tagContour  Contour
```  

---

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`pointsCount`](#pointscount) |  *int* |
| [`points`](#points) | [DBRPoint](DBRPoint.md) \* |


### pointsCount
The total points count of the contour.
```cpp
int tagContour::pointsCount
```  
  
### points
The points array.
```cpp
DBRPoint* tagContour::points
```  
