# CDeformationResistedBarcodeImageUnit

The `CDeformationResistedBarcodeImageUnit` class represents a unit that contains deformation resisted barcode image data. It inherits from the `CIntermediateResultUnit` class.

```cpp
class CDeformationResistedBarcodeImageUnit: public CIntermediateResultUnit
```

## Methods Summary

| Method                            | Description |
|-----------------------------------|-------------|
| [`GetImageData()`](#getimagedata)           | Gets the deformation resisted barcode image data.|


### GetImageData

Gets the deformation resisted barcode image data.

```cpp
virtual const CImageData* GetImageData() const = 0;
```

**Return value**

Returns a pointer to the deformation resisted barcode image data.
