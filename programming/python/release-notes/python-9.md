---
layout: default-layout
title: Dynamsoft Barcode Reader for Python Language - Release Notes v9.x
description: This is the release notes page of Dynamsoft Barcode Reader for Python Language v9.x.
keywords: release notes, python
needGenerateH3Content: false
---

# Release Notes for Python SDK - 9.x

## 9.0.0 (03/15/2022)

<div class="fold-panel-prefix"></div>

### Version Highlights <i class="fa fa-caret-down"></i>

<div class="fold-panel-start"></div>

{%- include release-notes/product-highlight-9.0.0.md -%}

<div class="fold-panel-end"></div>

### Edition Highlights


### Changelog

#### New

- Added error code [`DBRERR_PHARMACODE_LICENSE_INVALID`]({{ site.enumerations }}error-code.html#error-code--10062).
- Added `BF2_PHARMACODE_ONE_TRACK`, `BF2_PHARMACODE_TWO_TRACK` and `BF2_PHARMACODE` in Enumeration [`EnumBarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2)
- Added `BF_CODE_11` in Enumeration [`EnumBarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat)
- Added `DRM_BROAD_WARP`, `DRM_LOCAL_REFERENCE` and `DRM_DEWRINKLE` in Enumeration [`EnumDeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode)
- Added a parameter [`FormatSpecification.VerifyCheckDigit`]({{ site.parameters_reference }}verify-check-digit.html)
- Added an Argument [`ConfidenceThreshold`]({{ site.parameters_reference }}localization-modes.html#confidencethreshold) to the `LocalizationModes` mode arguments.

#### Changed

- Changed method [`InitLicense`]({{ site.java_methods }}license.html#initlicense) to a static method.


#### Improved


#### Fixed
- Other small fixes and tweaks.


#### Deprecated

The following items are now deprecated. They still work in this version but could be removed in the near future.
- [`initLicenseFromServer`]({{ site.java_methods }}license.html#initlicensefromserver)
- [`initLicenseFromLicenseContent`]({{ site.java_methods }}license.html#initlicensefromlicensecontent)
- [`outputLicenseToString`]({{ site.java_methods }}license.html#outputlicensetostring)
- [`initDLSConnectionParameters`]({{ site.java_methods }}license.html#initdlsconnectionparameters)
- [`initLicenseFromDLS`]({{ site.java_methods }}license.html#initlicensefromdls)
- [`Enumeration EnumDMChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeway)
- [`Enumeration EnumDMDeploymentType`]({{ site.enumerations }}other-enums.html#dm_deploymenttype)
- [`Enumeration EnumDMLicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule)
- [`Enumeration EnumDMUUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod)
- [`Enumeration EnumProduct`]({{ site.enumerations }}other-enums.html#product)


