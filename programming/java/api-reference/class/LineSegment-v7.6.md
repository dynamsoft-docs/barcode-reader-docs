---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - LineSegment Class
description: This page shows the LineSegment Class of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: LineSegment, class, api reference, java
needAutoGenerateSidebar: false
---


# LineSegment
Stores line segment data.

  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`startPoint`](#startpoint) | [`Point`](Point.md) |
| [`endPoint`](#endpoint) | [`Point`](Point.md) |
| [`linesConfidenceCoefficients`](#linesconfidencecoefficients) | *byte\[\]* |

### startPoint
The start point of the line segment.   
```java
Point com.dynamsoft.barcode.LineSegment.startPoint
```

### endPoint
The end point of the line segment.
```java
Point com.dynamsoft.barcode.LineSegment.endPoint
```

### linesConfidenceCoefficients
The confidence coefficients for lines. There are 4 coefficients in this set:  
1. linesConfidenceCoefficients\[0\] is average positive amplitude;   
2. linesConfidenceCoefficients\[1\] is max positive amplitude; 
3. linesConfidenceCoefficients\[2\] is average negative amplitude;   
4. linesConfidenceCoefficients\[3\] is max negative amplitude.
```java
byte[] com.dynamsoft.barcode.LineSegment.linesConfidenceCoefficients
```
