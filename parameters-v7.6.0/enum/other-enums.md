---
layout: default-layout
title: Dynamsoft Barcode Reader Enumerations - Other Enumerations
description: This article shows other Enumerations of Dynamsoft Barcode Reader.
keywords: ImagePixelFormat, QRCodeErrorCorrectionLevel, other enumeration, enumeration
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# Other Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`ImagePixelFormat`](#imagepixelformat) | Describes the image pixel format. |
  | [`QRCodeErrorCorrectionLevel`](#qrcodeerrorcorrectionlevel) | Describes the QR Code error correction level.   |
  

## ImagePixelFormat
Describes the image pixel format.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ImagePixelFormat` |
| .Net | `enum Dynamsoft.Barcode.EnumImagePixelFormat` |
| JavaScript | `Dynamsoft.EnumImagePixelFormat` |
| Python | `class EnumImagePixelFormat(IntEnum)` |
| Java / Android | `class EnumImagePixelFormat` |
| ObjC / Swift | `enum EnumImagePixelFormat` |



### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| IPF_BINARY | EnumImagePixelFormatBinary | 0 | 0: Black, 1: White |
| IPF_BINARYINVERTED | EnumImagePixelFormatBinaryInverted | 1 | 0: Black, 1: White |
| IPF_GRAYSCALED | EnumImagePixelFormatGrayScaled | 2 | 8 bit gray |
| IPF_NV21 | EnumImagePixelFormatNV21 | 3 | NV21 |
| IPF_RGB_565 | EnumImagePixelFormatRGB_565 | 4 | 16bit with RGB channel order stored in memory from high to low address |
| IPF_RGB_555 | EnumImagePixelFormatRGB_555 | 5 | 16bit with RGB channel order stored in memory from high to low address |
| IPF_RGB_888 | EnumImagePixelFormatRGB_888 | 6 | 24bit with RGB channel order stored in memory from high to low address |
| IPF_ARGB_8888 | EnumImagePixelFormatARGB_8888 | 7 | 32bit with ARGB channel order stored in memory from high to low address |
| IPF_RGB_161616 | EnumImagePixelFormatRGB_161616 | 8 | 48bit with RGB channel order stored in memory from high to low address |
| IPF_ARGB_16161616 | EnumImagePixelFormatARGB_16161616 | 9 | 64bit with ARGB channel order stored in memory from high to low address |
| IPF_ABGR_8888 | EnumImagePixelFormatABGR_8888 | 10 | 32bit with ABGR channel order stored in memory from high to low address |
| IPF_ABGR_16161616 | EnumImagePixelFormatABGR_8888 | 11 | 64bit with ABGR channel order stored in memory from high to low address |
| IPF_BGR_888 | EnumImagePixelFormatBGR_888 | 12 | 24bit with BGR channel order stored in memory from high to low address |





## QRCodeErrorCorrectionLevel
Describes the QR Code error correction level.  


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum QRCodeErrorCorrectionLevel` |
| .Net | `enum Dynamsoft.Barcode.EnumQRCodeErrorCorrectionLevel` |
| Python | `class EnumQRCodeErrorCorrectionLevel(IntEnum)` |
| JavaScript | `Dynamsoft.EnumQRCodeErrorCorrectionLevel` |
| Java / Android | `class EnumQRCodeErrorCorrectionLevel` |
| ObjC / Swift | `enum EnumQRCodeErrorCorrectionLevel` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| QRECL_ERROR_CORRECTION_H | EnumQRCodeErrorCorrectionLevelErrorCorrectionH | 0 | Error Correction Level H (high) |
| QRECL_ERROR_CORRECTION_L | EnumQRCodeErrorCorrectionLevelErrorCorrectionL | 1 | Error Correction Level L (low) |
| QRECL_ERROR_CORRECTION_M | EnumQRCodeErrorCorrectionLevelErrorCorrectionM | 2 | Error Correction Level M (medium-low) |
| QRECL_ERROR_CORRECTION_Q | EnumQRCodeErrorCorrectionLevelErrorCorrectionQ | 3 | Error Correction Level Q (medium-high) |

