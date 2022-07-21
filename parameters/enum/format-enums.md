---
layout: default-layout
title: Dynamsoft Barcode Reader Enumerations - Format Enumerations
description: This article shows Format Enumerations of Dynamsoft Barcode Reader.
keywords: BarcodeFormat, BarcodeFormat_2, format enumeration, enumeration
needAutoGenerateSidebar: true
needGenerateH3Content: false
permalink: /parameters/enum/format-enums.html
---


# Format Enumeration
The barcode format our library will search for is composed of [BarcodeFormat group 1](#barcodeformat) and [BarcodeFormat group 2](#barcodeformat_2), so you need to specify the barcode format in group 1 and group 2 individually.

| Enumeration | Description |
|-------------|-------------|
| [`BarcodeFormat`](#barcodeformat) | Describes the barcode types in BarcodeFormat group 1. |
| [`BarcodeFormat_2`](#barcodeformat_2) | Describes the barcode types in BarcodeFormat group 2. |

## BarcodeFormat
Describes the barcode types in BarcodeFormat group 1. 

### Declarations

| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum BarcodeFormat` |
| .Net | `enum Dynamsoft.EnumBarcodeFormat ` |
| JavaScript | `Dynamsoft.DBR.EnumBarcodeFormat` |
| Python | `class EnumBarcodeFormat(IntEnum)` |
| Java / Android | `class EnumBarcodeFormat` |
| ObjC / Swift | `enum EnumBarcodeFormat` |

### Members

| Member (except ObjC/Swift) | Member (ObjC) | Member (Swift) | Value | Description |
| -------------------------- | ------------- | -------------- | ----- | ----------- |
| BF_ALL | EnumBarcodeFormatALL | ALL | 0xFE3FFFFF | All supported formats in [BarcodeFormat group 1](#barcodeformat). |
| BF_ONED | EnumBarcodeFormatONED  | ONED | 0x003007FF | Combined value of BF_CODABAR, BF_CODE_128, BF_CODE_39, BF_CODE_39_Extended, BF_CODE_93, BF_EAN_13, BF_EAN_8, INDUSTRIAL_25, BF_ITF, BF_UPC_A, BF_UPC_E, BF_MSI_CODE, BF_CODE_11. |
| BF_GS1_DATABAR | EnumBarcodeFormatGS1DATABAR | GS1DATABAR | 0x0003F800 | Combined value of BF_GS1_DATABAR_OMNIDIRECTIONAL, BF_GS1_DATABAR_TRUNCATED, BF_GS1_DATABAR_STACKED, BF_GS1_DATABAR_STACKED_OMNIDIRECTIONAL, BF_GS1_DATABAR_EXPANDED, BF_GS1_DATABAR_EXPANDED_STACKED, BF_GS1_DATABAR_LIMITED. |
| BF_NULL | EnumBarcodeFormatNULL | NULL | 0x00 | No barcode format in [BarcodeFormat group 1](#barcodeformat). |
| BF_CODE_39 | EnumBarcodeFormatCODE39 | CODE39 | 0x01 | Code 39 |
| BF_CODE_128 | EnumBarcodeFormatCODE128 | CODE128 | 0x02 | Code 128 |
| BF_CODE_93 | EnumBarcodeFormatCODE93 | CODE93 | 0x04 | Code 93 |
| BF_CODABAR | EnumBarcodeFormatCODABAR | CODABAR | 0x08 | Codabar |
| BF_ITF  | EnumBarcodeFormatITF | ITF | 0x10 | ITF |
| BF_EAN_13 | EnumBarcodeFormatEAN13 | EAN13 | 0x20 | EAN-13 |
| BF_EAN_8 | EnumBarcodeFormatEAN8 | EAN8 | 0x40 | EAN-8 |
| BF_UPC_A | EnumBarcodeFormatUPCA | UPCA | 0x80 | UPC-A |
| BF_UPC_E | EnumBarcodeFormatUPCE | UPCE | 0x100 | UPC-E |
| BF_INDUSTRIAL_25 | EnumBarcodeFormatINDUSTRIAL | INDUSTRIAL | 0x200 | Industrial 2 of 5 |
| BF_MSI_CODE | EnumBarcodeFormatMSICODE | MSICODE | 0x100000 | MSI Code |
| BF_CODE_39_EXTENDED | EnumBarcodeFormatCODE39EXTENDED | CODE39EXTENDED | 0x400 | Code 39 Extended |
| BF_CODE_11 | EnumBarcodeFormatCODE11 | CODE11 | 0x200000 | Code 11 |
| BF_GS1_DATABAR_OMNIDIRECTIONAL | EnumBarcodeFormatGS1DATABAROMNIDIRECTIONAL | GS1DATABAROMNIDIRECTIONAL | 0x800 | GS1 Databar Omnidirectional |
| BF_GS1_DATABAR_TRUNCATED | EnumBarcodeFormatGS1DATABARTRUNCATED | GS1DATABARTRUNCATED | 0x1000 | GS1 Databar Truncated |
| BF_GS1_DATABAR_STACKED | EnumBarcodeFormatGS1DATABARSTACKED | GS1DATABARSTACKED | 0x2000 | GS1 Databar Stacked |
| BF_GS1_DATABAR_STACKED_OMNIDIRECTIONAL | EnumBarcodeFormatGS1DATABARSTACKEDOMNIDIRECTIONAL | GS1DATABARSTACKEDOMNIDIRECTIONAL | 0x4000 | GS1 Databar Stacked Omnidirectional |
| BF_GS1_DATABAR_EXPANDED | EnumBarcodeFormatGS1DATABAREXPANDED | GS1DATABAREXPANDED | 0x8000 | GS1 Databar Expanded |
| BF_GS1_DATABAR_EXPANDED_STACKED | EnumBarcodeFormatGS1DATABAREXPANDEDSTACKED | GS1DATABAREXPANDEDSTACKED | 0x10000 | GS1 Databar Expaned Stacked |
| BF_GS1_DATABAR_LIMITED | EnumBarcodeFormatGS1DATABARLIMITED | GS1DATABARLIMITED | 0x20000 | GS1 Databar Limited |
| BF_PATCHCODE | EnumBarcodeFormatPATCHCODE | PATCHCODE | 0x00040000 | Patch code |
| BF_MICRO_PDF417 | EnumBarcodeFormatMICROPDF417 | MICROPDF417 | 0x00080000 | Micro PDF417 |
| BF_PDF417 | EnumBarcodeFormatPDF417 | PDF417 | 0x02000000 | PDF417 |
| BF_QR_CODE | EnumBarcodeFormatQRCODE | QRCODE  | 0x04000000 | QRCode |
| BF_DATAMATRIX | EnumBarcodeFormatDATAMATRIX | DATAMATRIX | 0x08000000 | DataMatrix |
| BF_AZTEC | EnumBarcodeFormatAZTEC | AZTEC | 0x10000000 | AZTEC |
| BF_MAXICODE | EnumBarcodeFormatMAXICODE | MAXICODE | 0x20000000 | MAXICODE |
| BF_MICRO_QR | EnumBarcodeFormatMICROQR | MICROQR | 0x40000000 | Micro QR Code |
| BF_GS1_COMPOSITE | EnumBarcodeFormatGS1COMPOSITE | GS1COMPOSITE | -2147483648 | GS1 Composite Code |

&nbsp;

## BarcodeFormat_2

Describes the barcode types in BarcodeFormat group 2.

### Declarations

| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum BarcodeFormat_2` |
| .Net | `enum Dynamsoft.EnumBarcodeFormat_2` |
| JavaScript | `Dynamsoft.DBR.EnumBarcodeFormat_2` |
| Python | `class EnumBarcodeFormat_2(IntEnum)` |
| Java / Android | `class EnumBarcodeFormat_2` |
| ObjC / Swift | `enum EnumBarcodeFormat_2` |

### Members

| Member (except ObjC/Swift) | Member (ObjC) | Member (Swift) | Value | Description |
| -------------------------- | ------------- | -------------- | ----- | ----------- |
| BF2_POSTALCODE | EnumBarcodeFormat2POSTALCODE | POSTALCODE | 0x01F00000 | Combined value of BF2_USPSINTELLIGENTMAIL, BF2_POSTNET, BF2_PLANET, BF2_AUSTRALIANPOST, BF2_RM4SCC. |
| BF2_PHARMACODE | EnumBarcodeFormat2PHARMACODE | PHARMACODE | 0x0C | Combined value of BF2_PHARMACODE_ONE_TRACK, BF2_PHARMACODE_TWO_TRACK. |
| BF2_NULL | EnumBarcodeFormat2NULL | NULL | 0x00 | No barcode format in [BarcodeFormat group 2](#barcodeformat_2). |
| BF2_NONSTANDARD_BARCODE | EnumBarcodeFormat2NONSTANDARDBARCODE | NONSTANDARDBARCODE | 0x01 | Nonstandard barcode |
| BF2_USPSINTELLIGENTMAIL | EnumBarcodeFormat2USPSINTELLIGENTMAIL | USPSINTELLIGENTMAIL | 0x00100000 | USPS Intelligent Mail |
| BF2_POSTNET | EnumBarcodeFormat2POSTNET | POSTNET | 0x00200000 | Postnet |
| BF2_PLANET | EnumBarcodeFormat2PLANET | PLANET | 0x00400000 | Planet |
| BF2_AUSTRALIANPOST | EnumBarcodeFormat2AUSTRALIANPOST | AUSTRALIANPOST | 0x00800000 | Australian Post |
| BF2_RM4SCC | EnumBarcodeFormat2RM4SCC | RM4SCC | 0x01000000 | Royal Mail 4-State Customer Barcode |
| BF2_DOTCODE | EnumBarcodeFormat2DOTCODE | DOTCODE | 0x02 | DotCode |
| BF2_PHARMACODE_ONE_TRACK | EnumBarcodeFormat2PHARMACODE_ONE_TRACK | PHARMACODE_ONE_TRACK | 0x04 | Pharmacode One-Track |
| BF2_PHARMACODE_TWO_TRACK | EnumBarcodeFormat2PHARMACODE_TWO_TRACK | PHARMACODE_TWO_TRACK | 0x08 | Pharmacode Two-Track |
