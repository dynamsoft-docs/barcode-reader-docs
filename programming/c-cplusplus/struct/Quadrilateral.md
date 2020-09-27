---
layout: default-layout
title: Dynamsoft Barcode Reader C & C++ Struct - Quadrilateral
description: This page shows the Quadrilateral struct of Dynamsoft Barcode Reader for C & C++ Language.
keywords: Quadrilateral, struct, c, c++
needAutoGenerateSidebar: false
---


# Quadrilateral
Stores the quadrilateral.  

## Typedefs

```cpp
typedef struct tagQuadrilateral  Quadrilateral 
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`points`](#points) | [`DBRPoint`](DBRPoint.md)[4] |


### points
Four vertexes in a clockwise direction of a quadrilateral. Index 0 represents the left-most vertex. 
```cpp
DBRPoint tagQuadrilateral::points[4]
```



