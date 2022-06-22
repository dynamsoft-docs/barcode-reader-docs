---
layout: default-layout
title: Dynamsoft Barcode Reader for Python Language - Release Notes v9.x
description: This is the release notes page of Dynamsoft Barcode Reader for Python Language v9.x.
keywords: release notes, python
needGenerateH3Content: false
---

# Release Notes for Python SDK - 9.x

## 9.2.0 (06/21/2022)

<div class="fold-panel-prefix"></div>

### Version Highlights <i class="fa fa-caret-down"></i>

<div class="fold-panel-start"></div>

{%- include release-notes/product-highlight-9.2.0.md -%}

<div class="fold-panel-end"></div>

### Edition Highlights

- Added macOS ARM64 support to the Python edition of the SDK.

### Changelog

#### New

- Added a new method [`set_device_friendly_name`]({{site.python_methods}}license.html#set_device_friendly_name) to set a human-readable name that identifies the device.

## 9.0.0 (03/31/2022)

<div class="fold-panel-prefix"></div>

### Version Highlights <i class="fa fa-caret-down"></i>

<div class="fold-panel-start"></div>

{%- include release-notes/product-highlight-9.0.0.md -%}

<div class="fold-panel-end"></div>

### Edition Highlights

- Added support for Python 3.10.

### Changelog

#### New

- Added `BF_CODE_11` under Enumeration [`EnumBarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) to specify newly supported barcode format, Code 11.
- Added `BF2_PHARMACODE_ONE_TRACK`, `BF2_PHARMACODE_TWO_TRACK` and `BF2_PHARMACODE` under Enumeration [`EnumBarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2) to specify newly supported barcode format, Pharmacode.
- Added error code [`DBRERR_PHARMACODE_LICENSE_INVALID`]({{ site.enumerations }}error-code.html#error-code--10062) which will be returned when the license of Pharmacode is invalid.
- Added `DRM_BROAD_WARP`, `DRM_LOCAL_REFERENCE` and `DRM_DEWRINKLE` under Enumeration [`EnumDeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) to apply new deformation resisting modes.
- Added a parameter [`FormatSpecification.PartitionModes`]({{ site.parameters_reference }}partition-modes.html)
- Added a parameter [`FormatSpecification.VerifyCheckDigit`]({{ site.parameters_reference }}verify-check-digit.html)
- Added an Argument [`ConfidenceThreshold`]({{ site.parameters_reference }}localization-modes.html#confidencethreshold) to the `LocalizationModes` mode arguments.

#### Changed

- Changed method [`init_license`]({{ site.python_methods }}license.html#init_license) to a static method.
- Changed value of BF_ONED under Enumeration [`EnumBarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) to 0x003007FF to have BF_CODE_11 combined.
- Changed value of BF_ALL under Enumeration [`EnumBarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) to 0xFE3FFFFF to have BF_CODE_11 combined.
- Changed the behaviour of [`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) DRM_GENERAL which now only applies basic process to resist deformation.
- Changed the return value of the method [get_idle_instances_count]({{ site.python_methods }}license.html#get_idle_instances_count) from 0 to -1 when the available count needs to be updated from server by calling init_license.


#### Fixed
- Fixed a bug that might cause a crash when using multiple threads for barcode decoding.
- Fixed a bug that throws exceptions when using method [get_idle_instances_count]({{ site.python_methods }}license.html#get_idle_instances_count).
- Fixed a bug that Function Code 1 (FNC1) character would not return if it was in the first position of GS1-128 codes.
- Other small fixes and tweaks.


#### Deprecated

The following items are now deprecated. They still work in this version but could be removed in the near future.
- [`init_license_from_server`]({{ site.python_methods }}license.html#init_license_from_server)
- [`init_license_from_license_content`]({{ site.python_methods }}license.html#init_license_from_license_content)
- [`output_license_to_string`]({{ site.python_methods }}license.html#output_license_to_string)
- [`init_dls_connection_parameters`]({{ site.python_methods }}license.html#init_dls_connection_parameters)
- [`init_license_from_dls`]({{ site.python_methods }}license.html#init_license_from_dls)
- [`Enumeration EnumDMChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeway)
- [`Enumeration EnumDMDeploymentType`]({{ site.enumerations }}other-enums.html#dm_deploymenttype)
- [`Enumeration EnumDMLicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule)
- [`Enumeration EnumDMUUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod)
- [`Enumeration EnumProduct`]({{ site.enumerations }}other-enums.html#product)


