---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for EnableDataMatrixECC000-140
description: This page shows Dynamsoft Barcode Reader Parameter Reference for EnableDataMatrixECC000-140.
keywords: EnableDataMatrixECC000-140, parameter reference, parameter
permalink: /parameters/reference/enable-datamatrix-ecc000-140.html
---


# EnableDataMatrixECC000-140 

`EnableDataMatrixECC000-140` is a parameter to set the value determining whether to decode DataMatrix ECC000-140 barcodes. It is defined as below:

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *int* | [0, 1] | 0  |

**Remarks**

- 0: Do not decode DataMatrix ECC000-140 barcodes.
- 1: Decode DataMatrix ECC000-140 barcodes.
- It is valid only for DataMatrix.

## Setting Methods

`EnableDataMatrixECC000-140` is supported to be set through JSON template.

### As JSON Parameter

`EnableDataMatrixECC000-140` as a JSON parameter is an int value defined as below.

| Key Name | Key Value |
| -------- | --------- |
| EnableDataMatrixECC000-140 | 0 or 1 |

**JSON Example**

```json
{
    "EnableDataMatrixECC000-140": 1
}
```
