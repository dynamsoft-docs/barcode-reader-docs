---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - RegionDefinition Struct
description: This page shows the RegionDefinition Struct of Dynamsoft Barcode Reader for .NET SDK.
keywords: RegionDefinition, struct, api reference, .Net
needAutoGenerateSidebar: false
---


# RegionDefinition
Stores the region information.  

```csharp
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

```csharp
int Dynamsoft.DBR.RegionDefinition.RegionTop
```

**Value Range**     
    regionMeasuredByPercentage = 0: [0, 0x7fffffff]  
    regionMeasuredByPercentage = 1: [0, 100]  
      
**Default Value**     
    0

### RegionLeft
The left-most coordinate or percentage of the region.

```csharp
int Dynamsoft.DBR.RegionDefinition.RegionLeft
```

**Value Range**     
    regionMeasuredByPercentage = 0: [0, 0x7fffffff]  
    regionMeasuredByPercentage = 1: [0, 100]  
      
**Default Value**     
    0

### RegionRight
The right-most coordinate or percentage of the region.

```csharp
int Dynamsoft.DBR.RegionDefinition.RegionRight
```

**Value Range**     
    regionMeasuredByPercentage = 0: [0, 0x7fffffff]  
    regionMeasuredByPercentage = 1: [0, 100]  
      
**Default Value**     
    0

### RegionBottom
The bottom-most coordinate or percentage of the region.

```csharp
int Dynamsoft.DBR.RegionDefinition.RegionBottom
```

**Value Range**     
    regionMeasuredByPercentage = 0: [0, 0x7fffffff]  
    regionMeasuredByPercentage = 1: [0, 100]  
      
**Default Value**     
    0
    
### RegionMeasuredByPercentage
Sets whether or not to use percentage to measure the region size.

```csharp
int Dynamsoft.DBR.RegionDefinition.RegionMeasuredByPercentage
```

**Value Range**     
    [0, 1]
      
**Default Value**     
    0
    
**Remarks**       
    When it's set to 1, the values of Top, Left, Right, Bottom indicate percentage (from 0 to 100); Otherwise, they indicate coordinates. 0: not by percentage 1: by percentage.
