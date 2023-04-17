# CScaledUpBarcodeImageUnit

The `CScaledUpBarcodeImageUnit` class represents a unit that contains scaled up barcode image. It inherits from the `CIntermediateResultUnit` class.

```cpp
class CScaledUpBarcodeImageUnit: public CIntermediateResultUnit
```

## Methods Summary

| Method                            | Description |
|-----------------------------------|-------------|
| [`GetImageData()`](#getimagedata)           | Gets the scaled up barcode image data.|


### GetImageData

Gets the scaled up barcode image data.

```cpp
virtual const CImageData* GetImageData() const = 0;
```

**Return value**

Returns a pointer to the scaled up image of the barcode.
