---
layout: default-layout
title: Dynamsoft Barcode Reader Enumerations - Other Enumerations
description: This article shows other Enumerations of Dynamsoft Barcode Reader.
keywords: DM_ChargeWay, DM_DeploymentType, DM_LicenseModule, DM_UUIDGenerationMethod, ImagePixelFormat, QRCodeErrorCorrectionLevel, other enumeration, enumeration
needAutoGenerateSidebar: true
needGenerateH3Content: false
permalink: /parameters/enum/other-enums-v8.2.5.html
---


# Dynamsoft Barcode Reader Enumeration - Other Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`DM_ChargeWay`](#dm_chargeway) | Describes the charge way. |
  | [`DM_DeploymentType`](#dm_deploymenttype) | Describes the deployment type. |
  | [`DM_LicenseModule`](#dm_licensemodule) | Describes Dynamsoft license modules. |
  | [`DM_UUIDGenerationMethod`](#dm_uuidgenerationmethod) | Describes the UUID generation method. |
  | [`ImagePixelFormat`](#imagepixelformat) | Describes the image pixel format. |
  | [`QRCodeErrorCorrectionLevel`](#qrcodeerrorcorrectionlevel) | Describes the QR Code error correction level.   |
  
---


## DM_ChargeWay
Describes charge way.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum DM_ChargeWay` |
| .Net | `enum Dynamsoft.EnumDMChargeWay` |
| JavaScript | `N/A` |
| Python | `class EnumDMChargeWay(IntEnum)` |
| Java / Android | `class EnumDMChargeWay` |
| ObjC / Swift | `enum EnumDMChargeWay` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| DM_CW_AUTO | EnumDMChargeWayAuto | 0 | The charge way automatically determined by the license server. |
| DM_CW_DEVICE_COUNT | EnumDMChargeWayDeviceCount | 1 | Charges by the count of devices. |
| DM_CW_SCAN_COUNT | EnumDMChargeWayScanCount | 2 | Charges by the count of barcode scans.|
| DM_CW_CONCURRENT_DEVICE_COUNT | EnumDMChargeWayConcurrentDeviceCount | 3 | Charges by the count of concurrent devices. |
| DM_CW_APP_DOMAIN_COUNT | EnumDMChargeWayAppDomainCount | 6 | Charges by the count of app domains. |
| DM_CW_ACTIVE_DEVICE_COUNT | EnumDMChargeWayActiveDeviceCount | 8 | Charges by the count of active devices. |
| DM_CW_INSTANCE_COUNT | EnumDMChargeWayInstanceCount | 9 | Charges by the count of instances. |
| DM_CW_CONCURRENT_INSTANCE_COUNT | EnumDMChargeWayConcurrentInstanceCount | 10 | Charges by the count of concurrent instances. |




&nbsp;

## DM_DeploymentType
Describes the deployment type.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum DM_DeploymentType` |
| .Net | `enum Dynamsoft.EnumDMDeploymentType` |
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



&nbsp;

## DM_LicenseModule
Describes Dynamsoft license modules.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum DM_LicenseModule` |
| .Net | `enum Dynamsoft.EnumDMLicenseModule` |
| JavaScript | `N/A` |
| Python | `class EnumDMLicenseModule(IntEnum)` |
| Java / Android | `class EnumDMLicenseModule` |
| ObjC / Swift | `enum EnumDMLicenseModule` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| DM_LM_ONED | EnumDMLicenseModuleONED | 1 | One-D barcodes license module |
| DM_LM_QR_CODE | EnumDMLicenseModuleQRCODE | 2 | QR Code barcodes license module |
| DM_LM_PDF417 | EnumDMLicenseModulePDF417 | 3 | PDF417 barcodes license module |
| DM_LM_DATAMATRIX | EnumDMLicenseModuleDATAMATRIX | 4 | DATAMATRIX barcodes license module |
| DM_LM_AZTEC | EnumDMLicenseModuleAZTEC | 5 | Aztec barcodes license module |
| DM_LM_MAXICODE | EnumDMLicenseModuleMAXICODE | 6 | MAXICODE barcodes license module|
| DM_LM_PATCHCODE | EnumDMLicenseModulePatchCode | 7 |Patch code barcodes license module |
| DM_LM_GS1_DATABAR | EnumDMLicenseModuleGS1DATABAR | 8 | GS1 Databar barcodes license module |
| DM_LM_GS1_COMPOSITE | EnumDMLicenseModuleGS1COMPOSITE | 9 | GS1 Composite Code barcodes license module |
| DM_LM_POSTALCODE | EnumDMLicenseModulePOSTALCODE | 10 | Postal code barcodes license module |
| DM_LM_DOTCODE | EnumDMLicenseModuleDOTCODE | 11 | DotCode barcodes license module|
| DM_LM_DDM_LM_INTERMEDIATE_RESULTATAMATRIX | EnumDMLicenseModuleINTERMEDIATERESULT | 12 | Intermediate result license module |
| DM_LM_DPM | EnumDMLicenseModuleDPM | 13 |DATAMATRIX DPM (Direct Part Marking) license module |
| DM_LM_NONSTANDARD_BARCODE | EnumDMLicenseModuleNONSTANDARDBARCODE | 16 | Nonstandard barcodes license module|


&nbsp;

## DM_UUIDGenerationMethod
Describes UUID generation method.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum DM_UUIDGenerationMethod` |
| .Net | `enum Dynamsoft.EnumDMUUIDGenerationMethod` |
| JavaScript | `N/A` |
| Python | `class EnumDMUUIDGenerationMethod(IntEnum)` |
| Java / Android | `class EnumDMUUIDGenerationMethod` |
| ObjC / Swift | `enum EnumDMUUIDGenerationMethod` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| DM_UUIDGM_RANDOM | EnumDMUUIDGenerationMethodRandom | 1 | Generates UUID with random values. |
| DM_UUIDGM_HARDWARE | EnumDMUUIDGenerationMethodHardware | 2 | Generates UUID based on hardware info. |



&nbsp;



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


&nbsp;



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
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| QRECL_ERROR_CORRECTION_H | EnumQRCodeErrorCorrectionLevelErrorCorrectionH | 0 | Error Correction Level H (high) |
| QRECL_ERROR_CORRECTION_L | EnumQRCodeErrorCorrectionLevelErrorCorrectionL | 1 | Error Correction Level L (low) |
| QRECL_ERROR_CORRECTION_M | EnumQRCodeErrorCorrectionLevelErrorCorrectionM | 2 | Error Correction Level M (medium-low) |
| QRECL_ERROR_CORRECTION_Q | EnumQRCodeErrorCorrectionLevelErrorCorrectionQ | 3 | Error Correction Level Q (medium-high) |

