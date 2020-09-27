---
layout: default-layout
title: Dynamsoft Barcode Reader C & C++ Struct - DataMatrixDetails
description: This page shows the DataMatrixDetails struct of Dynamsoft Barcode Reader for C & C++ Language.
keywords: DataMatrixDetails, struct, c, c++
needAutoGenerateSidebar: false
---


# DataMatrixDetails
Stores the DataMatrix details.

## Typedefs

```cpp
typedef struct tagDataMatrixDetails  DataMatrixDetails
```  

---

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`moduleSize`](#modulesize) | *int* |
| [`rows`](#rows) | *int* | 
| [`columns`](#columns) | *int* |
| [`dataRegionRows`](#dataregionrows) | *int* | 
| [`dataRegionColumns`](#dataregioncolumns) | *int* |
| [`dataRegionNumber`](#dataregionnumber) | *int* |
| [`reserved`](#reserved) | *char\[32\]* |


### moduleSize
The barcode module size (the minimum bar width in pixel).
```cpp
int tagDataMatrixDetails::moduleSize
```

### rows
The row count of the barcode.
```cpp
int tagDataMatrixDetails::rows
```

### columns
The column count of the barcode.
```cpp
int tagDataMatrixDetails::columns
```

### dataRegionRows 
The data region row count of the barcode.
```cpp
int tagDataMatrixDetails::dataRegionRows
```

### dataRegionColumns
The data region column count of the barcode.
```cpp
int tagDataMatrixDetails::dataRegionColumns
```

### dataRegionNumber
The data region count.
```cpp
int tagDataMatrixDetails::dataRegionNumber
```

### reserved
Reserved memory for the struct. The length of this array indicates the size of the memory reserved for this struct.
```cpp
char tagDataMatrixDetails::reserved[32]
```
