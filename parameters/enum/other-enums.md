---
layout: default-layout
title: Dynamsoft Barcode Reader Enumerations - Other Enumerations
description: This article shows other Enumerations of Dynamsoft Barcode Reader.
keywords: DM_ChargeWay, DM_DeploymentType, DM_LicenseModule, DM_UUIDGenerationMethod, ImagePixelFormat, QRCodeErrorCorrectionLevel, PresetTemplate, other enumeration, enumeration
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# Other Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`ImagePixelFormat`](#imagepixelformat) | Describes the image pixel format. |
  | [`QRCodeErrorCorrectionLevel`](#qrcodeerrorcorrectionlevel) | Describes the QR Code error correction level.   |
  | [`PresetTemplate`](#presettemplate) | Describes the preset parameter setting templates. |
  | [`DM_ChargeWay`](#dm_chargeway) | `Deprecated` |
  | [`DM_DeploymentType`](#dm_deploymenttype) | `Deprecated` |
  | [`DM_LicenseModule`](#dm_licensemodule) | `Deprecated` |
  | [`DM_UUIDGenerationMethod`](#dm_uuidgenerationmethod) | `Deprecated` |
  | [`Product`](#product) | `Deprecated` |

## ImagePixelFormat
Describes the image pixel format.

### Declarations

| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ImagePixelFormat` |
| .Net | `enum Dynamsoft.DBR.EnumImagePixelFormat` |
| JavaScript | `Dynamsoft.EnumImagePixelFormat` |
| Python | `class EnumImagePixelFormat(IntEnum)` |
| Java / Android | `class EnumImagePixelFormat` |
| ObjC / Swift | `enum EnumImagePixelFormat` |

### Members

| Member (except ObjC/Swift) | Member (ObjC) | Member (Swift) | Value | Description |
| -------------------------- | ------------- | -------------- | ----- | ----------- |
| IPF_BINARY | EnumImagePixelFormatBinary | binary | 0 | 0: Black, 1: White |
| IPF_BINARYINVERTED | EnumImagePixelFormatBinaryInverted | binaryInverted | 1 | 0: Black, 1: White |
| IPF_GRAYSCALED | EnumImagePixelFormatGrayScaled | grayScaled | 2 | 8 bit gray |
| IPF_NV21 | EnumImagePixelFormatNV21 | NV21 | 3 | NV21 |
| IPF_RGB_565 | EnumImagePixelFormatRGB_565 | RGB_565 | 4 | 16bit with RGB channel order stored in memory from high to low address |
| IPF_RGB_555 | EnumImagePixelFormatRGB_555 | RGB_555 | 5 | 16bit with RGB channel order stored in memory from high to low address |
| IPF_RGB_888 | EnumImagePixelFormatRGB_888 | RGB_888 | 6 | 24bit with RGB channel order stored in memory from high to low address |
| IPF_ARGB_8888 | EnumImagePixelFormatARGB_8888 | ARGB_8888 | 7 | 32bit with ARGB channel order stored in memory from high to low address |
| IPF_RGB_161616 | EnumImagePixelFormatRGB_161616 | RGB_161616 | 8 | 48bit with RGB channel order stored in memory from high to low address |
| IPF_ARGB_16161616 | EnumImagePixelFormatARGB_16161616 | ARGB_16161616 | 9 | 64bit with ARGB channel order stored in memory from high to low address |
| IPF_ABGR_8888 | EnumImagePixelFormatABGR_8888 | ABGR_8888 | 10 | 32bit with ABGR channel order stored in memory from high to low address |
| IPF_ABGR_16161616 | EnumImagePixelFormatABGR_8888 | ABGR_8888 | 11 | 64bit with ABGR channel order stored in memory from high to low address |
| IPF_BGR_888 | EnumImagePixelFormatBGR_888 | BGR_888 | 12 | 24bit with BGR channel order stored in memory from high to low address |

## QRCodeErrorCorrectionLevel
Describes the QR Code error correction level.  

### Declarations

| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum QRCodeErrorCorrectionLevel` |
| .Net | `enum Dynamsoft.DBR.EnumQRCodeErrorCorrectionLevel` |
| Python | `class EnumQRCodeErrorCorrectionLevel(IntEnum)` |
| JavaScript | `Dynamsoft.EnumQRCodeErrorCorrectionLevel` |
| Java / Android | `class EnumQRCodeErrorCorrectionLevel` |
| ObjC / Swift | `enum EnumQRCodeErrorCorrectionLevel` |

### Members

| Member (except ObjC/Swift) | Member (ObjC) |  Member (Swift) | Value | Description |
| -------------------------- | ------------- | --------------- | ----- | ----------- |
| QRECL_ERROR_CORRECTION_H | EnumQRCodeErrorCorrectionLevelErrorCorrectionH | errorCorrectionH | 0 | Error Correction Level H (high) |
| QRECL_ERROR_CORRECTION_L | EnumQRCodeErrorCorrectionLevelErrorCorrectionL | errorCorrectionL | 1 | Error Correction Level L (low) |
| QRECL_ERROR_CORRECTION_M | EnumQRCodeErrorCorrectionLevelErrorCorrectionM | errorCorrectionM | 2 | Error Correction Level M (medium-low) |
| QRECL_ERROR_CORRECTION_Q | EnumQRCodeErrorCorrectionLevelErrorCorrectionQ | errorCorrectionQ | 3 | Error Correction Level Q (medium-high) |

## PresetTemplate

Describes the preset parameter setting templates.

### Declaration

| Language | Declaration |
| -------- | ----------- |
| Android | `class EnumPresetTemplate` |
| Objc / Swift | `enum EnumPresetTemplate` |

### Members

| Member (except ObjC/Swift) | Member (ObjC) |  Member (Swift) | Value | Description |
| -------------------------- | ------------- | --------------- | ----- | ----------- |
| DEFAULT | EnumPresetTemplateDefault | default | 0 | The default parameter configuration for video barcode decoding. |
| VIDEO_SINGLE_BARCODE | EnumPresetTemplateVideoSingleBarcode | videoSingleBarcode | 1 | The template for decoding a single barcode from the video. |
| VIDEO_SPEED_FIRST | EnumPresetTemplateVideoSpeedFirst | videoSpeedFirst | 2 | The speed optimized template for video barcode decoding. |
| VIDEO_READ_RATE_FIRST | EnumPresetTemplateVideoReadRateFirst | videoReadRateFirst | 3 | The read rate optimized template for video barcode decoding. |
| IMAGE_SPEED_FIRST | EnumPresetTemplateImageSpeedFirst | imageSpeedFirst | 4 | The speed optimized template for image barcode decoding. |
| IMAGE_READ_RATE_FIRST | EnumPresetTemplateImageReadRateFirst | imageReadRateFirst | 5 | The read rate optimized template for image barcode decoding. |
| IMAGE_DEFAULT | EnumPresetTemplateImageDefault | imageDefault | 6 | The default parameter configuration for image barcode decoding. |

## DM_ChargeWay

`Deprecated`. It still works in this version but could be removed in the near future.

### Declarations

| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum DM_ChargeWay` |
| .Net | `enum Dynamsoft.DBR.EnumDMChargeWay` |
| JavaScript | `N/A` |
| Python | `class EnumDMChargeWay(IntEnum)` |
| Java / Android | `class EnumDMChargeWay` |
| ObjC / Swift | `enum EnumDMChargeWay` |

### Members

| Member (except ObjC/Swift) | Member (ObjC) |  Member (Swift) | Value | Description |
| -------------------------- | ------------- | --------------- | ----- | ----------- |
| DM_CW_AUTO | EnumDMChargeWayAuto | auto | 0 | The charge way automatically determined by the license server. |
| DM_CW_DEVICE_COUNT | EnumDMChargeWayDeviceCount | deviceCount | 1 | Charges by the count of devices. |
| DM_CW_SCAN_COUNT | EnumDMChargeWayScanCount | scanCount | 2 | Charges by the count of barcode scans.|
| DM_CW_CONCURRENT_DEVICE_COUNT | EnumDMChargeWayConcurrentDeviceCount | concurrentDeviceCount | 3 | Charges by the count of concurrent devices. |
| DM_CW_APP_DOMAIN_COUNT | EnumDMChargeWayAppDomainCount | appDomainCount | 6 | Charges by the count of app domains. |
| DM_CW_ACTIVE_DEVICE_COUNT | EnumDMChargeWayActiveDeviceCount | activeDeviceCount | 8 | Charges by the count of active devices. |
| DM_CW_INSTANCE_COUNT | EnumDMChargeWayInstanceCount | instanceCount | 9 | Charges by the count of instances. |
| DM_CW_CONCURRENT_INSTANCE_COUNT | EnumDMChargeWayConcurrentInstanceCount | concurrentInstanceCount | 10 | Charges by the count of concurrent instances. |

## DM_DeploymentType

`Deprecated`. It still works in this version but could be removed in the near future.

### Declarations

| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum DM_DeploymentType` |
| .Net | `enum Dynamsoft.DBR.EnumDMDeploymentType` |
| JavaScript | `N/A` |
| Python | `class EnumDMDeploymentType(IntEnum)` |
| Java | `class EnumDMDeploymentType` |
| Android | `N/A` |
| ObjC / Swift | `N/A` |

### Members

| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| DM_DT_SERVER | N/A | 1 | Server deployment type |
| DM_DT_DESKTOP | N/A | 2 | Desktop |
| DM_DT_EMBEDDED_DEVICE | N/A | 6 | Embedded device deployment type |
| DM_DT_OEM | N/A | 7 | OEM deployment type |

## DM_LicenseModule

`Deprecated`. It still works in this version but could be removed in the near future.

### Declarations

| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum DM_LicenseModule` |
| .Net | `enum Dynamsoft.DBR.EnumDMLicenseModule` |
| JavaScript | `N/A` |
| Python | `class EnumDMLicenseModule(IntEnum)` |
| Java / Android | `class EnumDMLicenseModule` |
| ObjC / Swift | `enum EnumDMLicenseModule` |

### Members

| Member (except ObjC/Swift) | Member (ObjC) |  Member (Swift) | Value | Description |
| -------------------------- | ------------- | --------------- | ----- | ----------- |
| DM_LM_ONED | EnumDMLicenseModuleONED | ONED | 1 | One-D barcodes license module |
| DM_LM_QR_CODE | EnumDMLicenseModuleQRCODE | QRCODE | 2 | QR Code barcodes license module |
| DM_LM_PDF417 | EnumDMLicenseModulePDF417 | PDF417 | 3 | PDF417 barcodes license module |
| DM_LM_DATAMATRIX | EnumDMLicenseModuleDATAMATRIX | DATAMATRIX | 4 | DATAMATRIX barcodes license module |
| DM_LM_AZTEC | EnumDMLicenseModuleAZTEC | AZTEC | 5 | Aztec barcodes license module |
| DM_LM_MAXICODE | EnumDMLicenseModuleMAXICODE | MAXICODE | 6 | MAXICODE barcodes license module|
| DM_LM_PATCHCODE | EnumDMLicenseModulePatchCode | patchCode | 7 |Patch code barcodes license module |
| DM_LM_GS1_DATABAR | EnumDMLicenseModuleGS1DATABAR | GS1DATABAR | 8 | GS1 Databar barcodes license module |
| DM_LM_GS1_COMPOSITE | EnumDMLicenseModuleGS1COMPOSITE | GS1COMPOSITE | 9 | GS1 Composite Code barcodes license module |
| DM_LM_POSTALCODE | EnumDMLicenseModulePOSTALCODE | POSTALCODE | 10 | Postal code barcodes license module |
| DM_LM_DOTCODE | EnumDMLicenseModuleDOTCODE | DOTCODE | 11 | DotCode barcodes license module|
| DM_LM_DDM_LM_INTERMEDIATE_RESULTATAMATRIX | EnumDMLicenseModuleINTERMEDIATERESULT | INTERMEDIATERESULT | 12 | Intermediate result license module |
| DM_LM_DPM | EnumDMLicenseModuleDPM | DPM | 13 |DATAMATRIX DPM (Direct Part Marking) license module |
| DM_LM_NONSTANDARD_BARCODE | EnumDMLicenseModuleNONSTANDARDBARCODE | NONSTANDARDBARCODE | 16 | Nonstandard barcodes license module|

## DM_UUIDGenerationMethod

`Deprecated`. It still works in this version but could be removed in the near future.

### Declarations

| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum DM_UUIDGenerationMethod` |
| .Net | `enum Dynamsoft.DBR.EnumDMUUIDGenerationMethod` |
| JavaScript | `N/A` |
| Python | `class EnumDMUUIDGenerationMethod(IntEnum)` |
| Java / Android | `class EnumDMUUIDGenerationMethod` |
| ObjC / Swift | `enum EnumDMUUIDGenerationMethod` |

### Members

| Member (except ObjC/Swift) | Member (ObjC) |  Member (Swift) | Value | Description |
| -------------------------- | ------------- | --------------- | ----- | ----------- |
| DM_UUIDGM_RANDOM | EnumDMUUIDGenerationMethodRandom | random | 1 | Generates UUID with random values. |
| DM_UUIDGM_HARDWARE | EnumDMUUIDGenerationMethodHardware | hardware | 2 | Generates UUID based on hardware info. |

## Product

`Deprecated`. It still works in this version but could be removed in the near future.

### Declarations

| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum Product` |
| .Net | `enum Dynamsoft.EnumProduct` |
| JavaScript | `Dynamsoft.EnumProduct` |
| Python | `class EnumProduct(IntEnum)` |
| Java / Android | `class EnumProduct` |
| ObjC / Swift | `enum EnumProduct` |

### Members

| Member (except ObjC/Swift) | Member (ObjC) |  Member (Swift) | Value | Description |
| -------------------------- | ------------- | --------------- | ----- | ----------- |
| PROD_DBR | EnumProductDBR | DBR | 0x0001 | Dynamsoft Barcode Reader |
| PROD_DLR | EnumProductDLR | DLR | 0x0002 | Dynamsoft Label Recognition |
| PROD_DWT | EnumProductDWT | DWT | 0x0004 | Dynamic Web Twain |
| PROD_DCE | EnumProductDCE | DCE | 0x0008 | Dynamsoft Camera Enhancer |
| PROD_DPS | EnumProductDPS | DPS | 0x0010 | Dynamsoft Panorama |
| PROD_ALL | EnumProductALL | ALL | 0xFFFF | All Dynamsoft products |
