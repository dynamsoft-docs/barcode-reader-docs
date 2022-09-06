---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for EnableQRCodeModel1
description: This page shows Dynamsoft Barcode Reader Parameter Reference for EnableQRCodeModel1.
keywords: EnableQRCodeModel1, parameter reference, parameter
permalink: /parameters/reference/enable-qrcode-model1.html
---


# EnableQRCodeModel1 

`EnableQRCodeModel1` determines whether to decode QRCode model 1 barcodes. It is defined as below:

| Value Type | Value Range | Default Value | Template Structure Type |
| ---------- | ----------- | ------------- | ----------------------- |
| *int* | [0, 1] | 0  | `FormatSpecification` |

**Remarks**

- 0: Do not decode QRCode model 1 barcodes.
- 1: Decode QRCode model 1 barcodes.
- It is valid only for QRCode.

## Setting Methods

`EnableQRCodeModel1` can be set via JSON template.

### As JSON Parameter

`EnableQRCodeModel1` as a JSON parameter is an int value defined as below.

| Key Name | Key Value |
| -------- | --------- |
| EnableQRCodeModel1 | 0 or 1 |

**JSON Example**

```json
{
    "EnableQRCodeModel1": 1
}
```
