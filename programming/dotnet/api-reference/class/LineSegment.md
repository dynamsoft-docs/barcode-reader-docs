---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - LineSegment Class
description: This page shows the LineSegment Class of Dynamsoft Barcode Reader for .NET SDK.
keywords: LineSegment, class, api reference, .Net
needAutoGenerateSidebar: false
---

# LineSegment
Stores line segment data.

```csharp
public class LineSegment
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`StartPoint`](#startpoint) | *Point* |
| [`EndPoint`](#endpoint) | *Point* |
| [`LinesConfidenceCoefficients`](#linesconfidencecoefficients) | *byte[ ]* |

### StartPoint
The start point of the line segment.   

```csharp
Point Dynamsoft.DBR.LineSegment.StartPoint
```

### EndPoint
The end point of the line segment.

```csharp
Point Dynamsoft.DBR.LineSegment.EndPoint
```

### LinesConfidenceCoefficients
The confidence coefficients for lines. There are 4 coefficients in this set:  
1. linesConfidenceCoefficients\[0\] is average positive amplitude;   
2. linesConfidenceCoefficients\[1\] is max positive amplitude; 
3. linesConfidenceCoefficients\[2\] is average negative amplitude;   
4. linesConfidenceCoefficients\[3\] is max negative amplitude.

```csharp
byte[] Dynamsoft.DBR.LineSegment.LinesConfidenceCoefficients
```
