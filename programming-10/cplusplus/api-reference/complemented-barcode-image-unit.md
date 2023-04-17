# CComplementedBarcodeImageUnit

The `CComplementedBarcodeImageUnit` class represents a unit that contains complemented barcode image data. It inherits from the `CIntermediateResultUnit` class.

```cpp
class CComplementedBarcodeImageUnit: public CIntermediateResultUnit
```

## Methods Summary

| Method                            | Description |
|-----------------------------------|-------------|
| [`GetImageData()`](#getimagedata)           | Gets the complemented barcode image data.|


### GetImageData

Gets the complemented barcode image data.

```cpp
virtual const CImageData* GetImageData() const = 0;
```

**Return value**

Returns a pointer to the complemented image of the barcode.
