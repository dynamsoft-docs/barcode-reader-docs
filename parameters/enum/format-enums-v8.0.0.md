---
layout: default-layout
title: Dynamsoft Barcode Reader Enumerations - Format Enumerations
description: This article shows Format Enumerations of Dynamsoft Barcode Reader.
keywords: BarcodeFormat, BarcodeFormat_2, format enumeration, enumeration
needAutoGenerateSidebar: true
needGenerateH3Content: false
permalink: /parameters/enum/format-enums-v8.0.0.html
---


# Dynamsoft Barcode Reader Enumeration - Format Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`BarcodeFormat`](#barcodeformat) | Describes the barcode types in BarcodeFormat group 1. |
  | [`BarcodeFormat_2`](#barcodeformat_2) | Describes the barcode types in BarcodeFormat group 2. |
  
---



## BarcodeFormat
Describes the barcode types in BarcodeFormat group 1. All the formats can be combined, such as BF_CODE_39 | BF_CODE_128. Note: The barcode format our library will search for is composed of [BarcodeFormat group 1](#barcodeformat) and [BarcodeFormat group 2](#barcodeformat_2), so you need to specify the barcode format in group 1 and group 2 individually.

### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum BarcodeFormat` |
| .Net | `enum Dynamsoft.DBR.EnumBarcodeFormat ` |
| JavaScript | `Dynamsoft.EnumBarcodeFormat` |
| Python | `class EnumBarcodeFormat(IntEnum)` |
| Java / Android | `class EnumBarcodeFormat` |
| ObjC / Swift | `enum EnumBarcodeFormat` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| BF_ALL | EnumBarcodeFormatALL | -32505857 | All supported formats in [BarcodeFormat group 1](#barcodeformat). |
| BF_ONED | EnumBarcodeFormatONED  | 0x000007FF | Combined value of BF_CODABAR, BF_CODE_128, BF_CODE_39, BF_CODE_39_Extended, BF_CODE_93, BF_EAN_13, BF_EAN_8, INDUSTRIAL_25, BF_ITF, BF_UPC_A, BF_UPC_E. |
| BF_GS1_DATABAR | EnumBarcodeFormatGS1DATABAR | 0x0003F800 | Combined value of BF_GS1_DATABAR_OMNIDIRECTIONAL, BF_GS1_DATABAR_TRUNCATED, BF_GS1_DATABAR_STACKED, BF_GS1_DATABAR_STACKED_OMNIDIRECTIONAL, BF_GS1_DATABAR_EXPANDED, BF_GS1_DATABAR_EXPANDED_STACKED, BF_GS1_DATABAR_LIMITED. | 
| BF_NULL | EnumBarcodeFormatNULL | 0x00 | No barcode format in [BarcodeFormat group 1](#barcodeformat). |
| BF_CODE_39 | EnumBarcodeFormatCODE39 | 0x01 | Code 39 |
| BF_CODE_128 | EnumBarcodeFormatCODE128 | 0x02 | Code 128 |
| BF_CODE_93 | EnumBarcodeFormatCODE93 | 0x04 | Code 93 |
| BF_CODABAR | EnumBarcodeFormatCODABAR | 0x08 | Codabar |
| BF_ITF  | EnumBarcodeFormatITF | 0x10 | ITF |
| BF_EAN_13 | EnumBarcodeFormatEAN13 | 0x20 | EAN-13 |
| BF_EAN_8 | EnumBarcodeFormatEAN8 | 0x40 | EAN-8 |
| BF_UPC_A | EnumBarcodeFormatUPCA | 0x80 | UPC-A |
| BF_UPC_E | EnumBarcodeFormatUPCE | 0x100 | UPC-E |
| BF_INDUSTRIAL_25 | EnumBarcodeFormatINDUSTRIAL | 0x200 | Industrial 2 of 5 |
| BF_CODE_39_EXTENDED | EnumBarcodeFormatCODE39EXTENDED | 0x400 | Code 39 Extended |
| BF_GS1_DATABAR_OMNIDIRECTIONAL | EnumBarcodeFormatGS1DATABAROMNIDIRECTIONAL | 0x800 | GS1 Databar Omnidirectional |
| BF_GS1_DATABAR_TRUNCATED | EnumBarcodeFormatGS1DATABARTRUNCATED | 0x1000 | GS1 Databar Truncated |
| BF_GS1_DATABAR_STACKED | EnumBarcodeFormatGS1DATABARSTACKED | 0x2000 | GS1 Databar Stacked |
| BF_GS1_DATABAR_STACKED_OMNIDIRECTIONAL | EnumBarcodeFormatGS1DATABARSTACKEDOMNIDIRECTIONAL | 0x4000 | GS1 Databar Stacked Omnidirectional |
| BF_GS1_DATABAR_EXPANDED | EnumBarcodeFormatGS1DATABAREXPANDED | 0x8000 | GS1 Databar Expanded |
| BF_GS1_DATABAR_EXPANDED_STACKED | EnumBarcodeFormatGS1DATABAREXPANDEDSTACKED | 0x10000 | GS1 Databar Expaned Stacked |
| BF_GS1_DATABAR_LIMITED | EnumBarcodeFormatGS1DATABARLIMITED | 0x20000 | GS1 Databar Limited |
| BF_PATCHCODE | EnumBarcodeFormatPATCHCODE | 0x00040000 | Patch code |
| BF_MICRO_PDF417 | EnumBarcodeFormatMICROPDF417 | 0x00080000 | Micro PDF417 |
| BF_PDF417 | EnumBarcodeFormatPDF417 | 0x02000000 | PDF417 |
| BF_QR_CODE | EnumBarcodeFormatQRCODE | 0x04000000 | QRCode |
| BF_DATAMATRIX | EnumBarcodeFormatDATAMATRIX | 0x08000000 | DataMatrix |
| BF_AZTEC | EnumBarcodeFormatAZTEC | 0x10000000 | AZTEC |
| BF_MAXICODE | EnumBarcodeFormatMAXICODE | 0x20000000 | MAXICODE |
| BF_MICRO_QR | EnumBarcodeFormatMICROQR | 0x40000000 | Micro QR Code |
| BF_GS1_COMPOSITE | EnumBarcodeFormatGS1COMPOSITE | -2147483648 | GS1 Composite Code |



&nbsp;



## BarcodeFormat_2
Describes the barcode types in BarcodeFormat group 2. Note: The barcode format our library will search for is composed of [BarcodeFormat group 1](#barcodeformat) and [BarcodeFormat group 2](#barcodeformat_2), so you need to specify the barcode format in group 1 and group 2 individually.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum BarcodeFormat_2` |
| .Net | `enum Dynamsoft.DBR.EnumBarcodeFormat_2` |
| JavaScript | `Dynamsoft.EnumBarcodeFormat_2` |
| Python | `class EnumBarcodeFormat_2(IntEnum)` |
| Java / Android | `class EnumBarcodeFormat_2` |
| ObjC / Swift | `enum EnumBarcodeFormat_2` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| BF2_POSTALCODE | EnumBarcodeFormat2POSTALCODE | 0x01F00000 | Combined value of BF2_USPSINTELLIGENTMAIL, BF2_POSTNET, BF2_PLANET, BF2_AUSTRALIANPOST, BF2_RM4SCC. |
| BF2_NULL | EnumBarcodeFormat2NULL | 0x00 | No barcode format in [BarcodeFormat group 2](#barcodeformat_2). |
| BF2_NONSTANDARD_BARCODE | EnumBarcodeFormat2NONSTANDARDBARCODE | 0x01 | Nonstandard barcode |
| BF2_USPSINTELLIGENTMAIL | EnumBarcodeFormat2USPSINTELLIGENTMAIL | 0x00100000 | USPS Intelligent Mail |
| BF2_POSTNET | EnumBarcodeFormat2POSTNET | 0x00200000 | Postnet |
| BF2_PLANET | EnumBarcodeFormat2PLANET | 0x00400000 | Planet |
| BF2_AUSTRALIANPOST | EnumBarcodeFormat2AUSTRALIANPOST | 0x00800000 | Australian Post |
| BF2_RM4SCC | EnumBarcodeFormat2RM4SCC | 0x01000000 | Royal Mail 4-State Customer Barcode |
| BF2_DOTCODE | EnumBarcodeFormat2DOTCODE | 0x02 | DotCode |

