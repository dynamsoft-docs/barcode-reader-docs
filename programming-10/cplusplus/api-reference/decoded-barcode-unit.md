# CDecodedBarcodesUnit

The `CDecodedBarcodesUnit` class represents a unit that contains decoded barcode elements. It inherits from the `CIntermediateResultUnit` class.

```cpp
class CDecodedBarcodesUnit: public CIntermediateResultUnit
```

## Methods Summary

| Method                            | Description |
|-----------------------------------|-------------|
| [`GetCount()`](#getcount)           | Gets the number of decoded barcodes in the unit.|
| [`GetDecodedBarcode()`](#getdecodedbarcode)           | Gets a pointer to the CDecodedBarcodeElement object at the specified index.|



### GetCount

Gets the number of decoded barcodes in the unit.

```cpp
virtual int GetCount() const = 0;
```

**Return value**

Returns the number of decoded barcodes in the unit.

### GetDecodedBarcode


```cpp
virtual const CDecodedBarcodeElement* GetDecodedBarcode(int index) const = 0;
```

**Parameter**

`[in] index` The index of the desired CDecodedBarcodeElement object.

**Return value**

Returns a pointer to the CDecodedBarcodeElement object at the specified index.
