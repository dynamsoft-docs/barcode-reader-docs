---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - RegionDefinition Class
description: This page shows the RegionDefinition Class of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: RegionDefinition, class, api reference, java
needAutoGenerateSidebar: false
---


# RegionDefinition
Stores the region information. 
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`regionTop`](#regiontop) | *int* |
| [`regionLeft`](#regionleft) | *int* |
| [`regionRight`](#regionright) | *int* |
| [`regionBottom`](#regionbottom) | *int* |
| [`regionMeasuredByPercentage`](#regionmeasuredbypercentage) | *int* |


### regionTop
The top-most coordinate or percentage of the region.
```java
int com.dynamsoft.barcode.RegionDefinition.regionTop
```
- **Value range**   
    regionMeasuredByPercentage = 0: [0, 0x7fffffff]  
    regionMeasuredByPercentage = 1: [0, 100]  
      
- **Default value**   
    0

### regionLeft
The left-most coordinate or percentage of the region.
```java
int com.dynamsoft.barcode.RegionDefinition.regionLeft
```
- **Value range**   
    regionMeasuredByPercentage = 0: [0, 0x7fffffff]  
    regionMeasuredByPercentage = 1: [0, 100]  
      
- **Default value**   
    0

### regionRight
The right-most coordinate or percentage of the region.
```java
int com.dynamsoft.barcode.RegionDefinition.regionRight
```
- **Value range**   
    regionMeasuredByPercentage = 0: [0, 0x7fffffff]  
    regionMeasuredByPercentage = 1: [0, 100]  
      
- **Default value**   
    0

### regionBottom
The bottom-most coordinate or percentage of the region.
```java
int com.dynamsoft.barcode.RegionDefinition.regionBottom
```
- **Value range**   
    regionMeasuredByPercentage = 0: [0, 0x7fffffff]  
    regionMeasuredByPercentage = 1: [0, 100]  
      
- **Default value**   
    0
    
### regionMeasuredByPercentage
Sets whether or not to use percentage to measure the region size.
```java
int com.dynamsoft.barcode.RegionDefinition.regionMeasuredByPercentage
```
- **Value range**   
    [0, 1]
      
- **Default value**   
    0
    
- **Remark**   
    When it's set to 1, the values of Top, Left, Right, Bottom indicate percentage (from 0 to 100); Otherwise, they indicate coordinates. 0: not by percentage 1: by percentage.
