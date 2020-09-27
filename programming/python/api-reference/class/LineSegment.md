---
layout: default-layout
title: Dynamsoft Barcode Reader Python API Reference - LineSegment Class
description: This page shows the LineSegment Class of Dynamsoft Barcode Reader for Python SDK.
keywords: LineSegment, class, api reference, python
needAutoGenerateSidebar: false
---

# LineSegment
Stores line segment data.

```python
class LineSegment
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`start_point`](#startpoint) | *[class Point](Point.md)* |
| [`end_point`](#endpoint) | *[class Point](Point.md)* |
| [`lines_confidence_coefficients`](#lines_confidence_coefficients) | *list[int]* |

### start_point
The start point of the line segment.   

```python
LineSegment.start_point
```

### end_point
The end point of the line segment.

```python
LineSegment.end_point
```

### lines_confidence_coefficients
The confidence coefficients for lines. There are 4 coefficients in this set:  
1. lines_confidence_coefficients\[0\] is average positive amplitude;   
2. lines_confidence_coefficients\[1\] is max positive amplitude; 
3. lines_confidence_coefficients\[2\] is average negative amplitude;   
4. lines_confidence_coefficients\[3\] is max negative amplitude.

```python
LineSegment.lines_confidence_coefficients
```
