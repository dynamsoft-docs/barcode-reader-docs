---
layout: default-layout
title: Dynamsoft Barcode Reader Android API Reference - BarcodeReader initialization and Destroy
description: This page shows BarcodeReader initialization and Destroy methods of Dynamsoft Barcode Reader for Android SDK.
keywords: destroy, BarcodeReader, initialization and destroy, api reference, android
needAutoGenerateSidebar: true
---

# Android API Reference - BarcodeReader Initialization and Destroy

  | Method               | Description |
  |----------------------|-------------|
  | [`BarcodeReader`](#barcodereader) | Initialization of `BarcodeReader` object.|
  | [`destroy`](#destroy) | Destroys an instance of `BarcodeReader` object.|

---

## BarcodeReader Initialization

Initialization of `BarcodeReader` object without a license.

```java
com.dynamsoft.dbr.BarcodeReader.BarcodeReader() throws BarcodeReaderException
```

Initialization of `BarcodeReader` with a license.

```java
com.dynamsoft.dbr.BarcodeReader.BarcodeReader(String license)	throws Exception
```

### Exceptions

[`BarcodeReaderException`](../class/BarcodeReaderException.md)


### Remarks

If you initialize DynamsoftBarcodeReader without a license, the decoding results may be unreliable.

### Code Snippet

```java
BarcodeReader reader = new BarcodeReader();
```

```java
BarcodeReader reader = new BarcodeReade("t0260NwAAAHV***************");
```

## Destroy

```java
void com.dynamsoft.dbr.BarcodeReader.destroy()	
```

### Code Snippet

```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
reader.destroy();
```