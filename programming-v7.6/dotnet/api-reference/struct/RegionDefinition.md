---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - RegionDefinition Struct
description: This page shows the RegionDefinition Struct of Dynamsoft Barcode Reader for .NET SDK.
keywords: RegionDefinition, struct, api reference, .Net
needAutoGenerateSidebar: false
---


# RegionDefinition
Stores the region information.  

```C#
public struct RegionDefinition
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`RegionTop`](#regiontop) | *int* |
| [`RegionLeft`](#regionleft) | *int* |
| [`RegionRight`](#regionright) | *int* |
| [`RegionBottom`](#regionbottom) | *int* |
| [`RegionMeasuredByPercentage`](#regionmeasuredbypercentage) | *int* |


### RegionTop
The top-most coordinate or percentage of the region.

```C#
int Dynamsoft.Barcode.RegionDefinition.RegionTop
```

- **Value range**   
    regionMeasuredByPercentage = 0: [0, 0x7fffffff]  
    regionMeasuredByPercentage = 1: [0, 100]  
      
- **Default value**   
    0

### RegionLeft
The left-most coordinate or percentage of the region.

```C#
int Dynamsoft.Barcode.RegionDefinition.RegionLeft
```

- **Value range**   
    regionMeasuredByPercentage = 0: [0, 0x7fffffff]  
    regionMeasuredByPercentage = 1: [0, 100]  
      
- **Default value**   
    0

### RegionRight
The right-most coordinate or percentage of the region.

```C#
int Dynamsoft.Barcode.RegionDefinition.RegionRight
```

- **Value range**   
    regionMeasuredByPercentage = 0: [0, 0x7fffffff]  
    regionMeasuredByPercentage = 1: [0, 100]  
      
- **Default value**   
    0

### RegionBottom
The bottom-most coordinate or percentage of the region.

```C#
int Dynamsoft.Barcode.RegionDefinition.RegionBottom
```

- **Value range**   
    regionMeasuredByPercentage = 0: [0, 0x7fffffff]  
    regionMeasuredByPercentage = 1: [0, 100]  
      
- **Default value**   
    0
    
### RegionMeasuredByPercentage
Sets whether or not to use percentage to measure the region size.

```C#
int Dynamsoft.Barcode.RegionDefinition.RegionMeasuredByPercentage
```

- **Value range**   
    [0, 1]
      
- **Default value**   
    0
    
- **Remark**   
    When it's set to 1, the values of Top, Left, Right, Bottom indicate percentage (from 0 to 100); Otherwise, they indicate coordinates. 0: not by percentage 1: by percentage.
