---
layout: default-layout
title: CDecodedBarcodeElement Class
description: This page shows CDecodedBarcodeElement class definition of Dynamsoft Barcode Reader SDK C++ Edition.
keywords: GetText, GetBytes, GetBytesLength, CDecodedBarcodeElement, api reference
permalink: /programming-10/cplusplus/api-reference/decoded-barcode-element.html
---
# CDecodedBarcodeElement

The CDecodedBarcodeElement class represents a decoded barcode element. It inherits from the CLocalizedBarcodeElement class and provides additional functionality for retrieving information about the decoded barcode.

```cpp
class CDecodedBarcodeElement : public CLocalizedBarcodeElement
```

*Namespace:* dynamsoft::dbr::intermediate_results

---

## Methods Summary

| Method | Description |
| --- | --- |
| [`~CDecodedBarcodeElement`](#cdecodedbarcodeelement) | Destructor. |
| [`GetText()`](#gettext) | Gets the text of the decoded barcode. |
| [`GetBytes()`](#getbytes)| Gets the raw bytes of the decoded barcode.|
| [`GetBytesLength()`](#getbyteslength)  | Gets the length of the raw bytes of the decoded barcode.|
| [`GetDetails()`](#getdetails) | Gets the details of the decoded barcode.|
| [`IsDPM()`](#isdpm)| Determines whether the decoded barcode is a DPM (Direct Part Marking) code.|
| [`IsMirrored()`](#ismirrored)| Determines whether the decoded barcode is mirrored.|
| [`GetExtendedBarcodeResultsCount()`](#getextendedbarcoderesultscount) | Gets the number of extended barcode results for the decoded barcode.|
| [`GetExtendedBarcodeResult()`](#getextendedbarcoderesult) | Gets the extended barcode result at the specified index for the decoded barcode.|

### ~CDecodedBarcodeElement

Destructor.

```cpp
virtual ~CDecodedBarcodeElement() {}
```

### GetText

Gets the text of the decoded barcode.

```cpp
virtual const char* GetText() const = 0;
```

**Return value**

Returns a pointer to the text of the decoded barcode.

### GetBytes

Gets the raw bytes of the decoded barcode.

```cpp
virtual unsigned char* GetBytes() const = 0;
```

**Return value**

Returns a pointer to the raw bytes of the decoded barcode.

### GetBytesLength

Gets the length of the raw bytes of the decoded barcode.

```cpp
virtual int GetBytesLength() const = 0;
```

**Return value**

Returns the length of the raw bytes of the decoded barcode.

### GetDetails

Gets the details of the decoded barcode.

```cpp
virtual const CBarcodeDetails* GetDetails() const = 0;
```

**Return value**

Returns a pointer to the details of the decoded barcode.

### IsDPM

Determines whether the decoded barcode is a DPM (Direct Part Marking) code.

```cpp
virtual bool IsDPM() const = 0;
```

**Return value**

Returns true if the decoded barcode is a DPM code, false otherwise.

### IsMirrored

Determines whether the decoded barcode is mirrored.

```cpp
virtual bool IsMirrored() const = 0;
```

**Return value**

Returns true if the decoded barcode is mirrored, false otherwise.

### GetExtendedBarcodeResultsCount

Gets the number of extended barcode results for the decoded barcode.

```cpp
virtual int GetExtendedBarcodeResultsCount() const = 0;
```

**Return value**

Returns the number of extended barcode results for the decoded barcode.

### GetExtendedBarcodeResult

Gets the extended barcode result at the specified index for the decoded barcode.

```cpp
virtual const CExtendedBarcodeResult* GetExtendedBarcodeResult(int index) const = 0;
```

**Parameters**

`[in] index` The index of the extended barcode result to retrieve.

**Return value**

Returns a pointer to the extended barcode result at the specified index for the decoded barcode.
