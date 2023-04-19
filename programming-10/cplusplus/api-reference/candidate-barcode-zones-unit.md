---
layout: default-layout
title: CCandidateBarcodeZonesUnit Class
description: This page shows CCandidateBarcodeZonesUnit class definition of Dynamsoft Barcode Reader SDK C++ Edition.
keywords: GetCount, GetCandidateBarcodeZone, CCandidateBarcodeZonesUnit, api reference
permalink: /programming-10/cplusplus/api-reference/candidate-barcode-zones-unit.html
---
# CCandidateBarcodeZonesUnit

The `CCandidateBarcodeZonesUnit` class represents a unit that contains candidate barcode zones unit. It inherits from the `CIntermediateResultUnit` class.

```cpp
class CCandidateBarcodeZonesUnit: public CIntermediateResultUnit
```

## Methods Summary

| Method                            | Description |
|-----------------------------------|-------------|
| [`GetCount()`](#getcount)           | Gets the number of candidate barcode zones in the unit.|
| [`GetCandidateBarcodeZone()`](#getcandidatebarcodezone)           | Gets the specific candidate barcode zone in the region.|

### GetCount

Gets the number of localized barcodes in the unit.

```cpp
virtual int GetCount() const = 0;
```

**Return value**

Returns the number of candidate barcode zones in the unit.


### GetCandidateBarcodeZone

Gets a pointer to a specific candidate barcode zone element.

```cpp
virtual int GetCandidateBarcodeZone(int index, CQuadrilateral *quad) const = 0;
```

**Parameters**
`[in] index` The index of the candidate barcode zone element.
`[out]quad` The quadrilateral of the candidate barcode zone element.

**Return value**

Returns 0 if successful, otherwise returns a negative value.