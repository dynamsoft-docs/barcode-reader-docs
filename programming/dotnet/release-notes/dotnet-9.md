---
layout: default-layout
title: Dynamsoft Barcode Reader for .NET Language - Release Notes v9.x
description: This is the release notes page of Dynamsoft Barcode Reader for .NET Language v9.x.
keywords: release notes, .net
needGenerateH3Content: false
---

# Release Notes for .NET SDK - 9.x

## 9.0.0 (03/15/2022)

### Highlights

{%- include release-notes/product-highlight-9.0.0.md -%}



### Changelog

#### New

- Added `BF_CODE_11` under Enumeration [`EnumBarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) to specify newly supported barcode format, Code 11. 
- Added `BF2_PHARMACODE_ONE_TRACK`, `BF2_PHARMACODE_TWO_TRACK` and `BF2_PHARMACODE` under Enumeration [`EnumBarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2) to specify newly supported barcode format, Pharmacode. 
- Added a new error code [`DBRERR_PHARMACODE_LICENSE_INVALID`]({{ site.enumerations }}error-code.html#error-code--10062) which will be returned when the license of Pharmacode is invalid.
- Added `DRM_BROAD_WARP`, `DRM_LOCAL_REFERENCE` and `DRM_DEWRINKLE` under Enumeration [`EnumDeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) to apply new deformation resisting modes.
- Added a parameter [`FormatSpecification.PartitionModes`]({{ site.parameters_reference }}partition-modes.html)
- Added a parameter [`FormatSpecification.VerifyCheckDigit`]({{ site.parameters_reference }}verify-check-digit.html)
- Added an Argument [`ConfidenceThreshold`]({{ site.parameters_reference }}localization-modes.html#confidencethreshold) to the `LocalizationModes` mode arguments.
- Added a method [`InitLicense`]({{ site.dotnet_methods }}license.html#initlicense) to initialize license key and activate the SDK.

#### Changed

- Changed value of BF_ONED under Enumeration [`EnumBarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) to 0x003007FF to have BF_CODE_11 combined.
- Changed value of BF_ALL under Enumeration [`EnumBarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) to 0xFE3FFFFF to have BF_CODE_11 combined.
- Changed the behaviour of [`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) DRM_GENERAL which now only applies basic process to resist deformation.
- Changed the return value of the method [`GetIdleInstancesCount`]({{ site.dotnet_methods }}license.html#getidleinstancescount) from 0 to -1 when the available count needs to be updated from server by calling InitLicense.


#### Fixed
- Fixed a bug that might cause a crash when using multiple threads for barcode decoding.
- Fixed a bug that Function Code 1 (FNC1) character would not return if it was in the first position of GS1-128 codes.
- Other small fixes and tweaks.


#### Deprecated

The following items are now deprecated. They still work in this version but could be removed in the near future.
- Method [`InitLicenseFromServer`]({{ site.dotnet_methods }}license.html#initlicensefromserver)
- Method [`InitLicenseFromLicenseContent`]({{ site.dotnet_methods }}license.html#initlicensefromlicensecontent)
- Method [`OutputLicenseToString`]({{ site.dotnet_methods }}license.html#outputlicensetostring)
- Method [`InitDLSConnectionParameters`]({{ site.dotnet_methods }}license.html#initdlsconnectionparameters)
- Method [`InitLicenseFromDLS`]({{ site.dotnet_methods }}license.html#initlicensefromdls)
- Method [`BarcodeReader(string productKey)`]({{ site.dotnet_methods }}constructor-and-destructor.html#barcodereaderstring-productkey)
- Method [`BarcodeReader(string modulePath, string productKey)`]({{ site.dotnet_methods }}constructor-and-destructor.html#barcodereaderstring-modulepath-string-productkey)
- Attribute [`ProductKey`]({{ site.dotnet_methods }}index.html#barcodereader-attributes)
- Enumeration [`EnumDMChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeway)
- Enumeration [`EnumDMDeploymentType`]({{ site.enumerations }}other-enums.html#dm_deploymenttype)
- Enumeration [`EnumDMLicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule)
- Enumeration [`EnumDMUUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod)
- Enumeration [`EnumProduct`]({{ site.enumerations }}other-enums.html#product)


