---
layout: default-layout
title: Release Notes v9.x - Dynamsoft Barcode Reader
description: This note features the latest updates in Barcode Reader SDK version 9.x. New features were added along with various APIs deprecated, removed, and removed.
keywords: release notes, dynamsoft barcode reader
needAutoGenerateSidebar: true
needGenerateH3Content: false
noTitleIndex: true
---

# Release Notes for Dynamsoft Barcode Reader - 9.x

## 9.6

> First released: 11-29-2022

### Highlights

- **Image orientation** handling is supported by a new feature. With the new feature, you can:
  - Get a **TranformationMatrix** along with the barcode location result.
  - Implement coordinates transformation on the barcode location result with the **TransformationMatrix**.
- **DotCode** decoding is improved by optimizing the localization of DotCodes that are close to one another.
- **EAN8 barcode** decoding is improved by honing the accuracy of localization algorithms.
- **QR code** localizing is improved by reducing the mis-assemble rate of the finder patterns when using the localization mode LM_CONNECTED_BLOCK or LM_SCAN_DIRECTLY, which are designed for speed. The mis-assembling only occurs when there exist dense QR codes on the same image.
- **Mirrored rectangular DataMatrix barcode** is supported by implementing `MirrorMode` when localizing the barcodes.
- Deformed barcode decoding is improved by extending the supported modes and mode arguments of `DeformationResistingModes`.

| Versions | Available Editions |
| -------- | ------------------ |
| 9.6.60 | [C++]({{ site.cpp_release_notes}}cpp-9.html#9660-12232025) / [DotNet]({{ site.dotnet_release_notes }}dotnet-9.html#9660-12232025) / [Java]({{ site.java_release_notes }}java-9.html#9660-12232025) / [Python]({{ site.python_release_notes }}python-9.html#9660-12232025) / [Android]({{ site.android_release_notes }}android-9.html#9660-12232025) / [iOS]({{ site.oc_release_notes }}ios-9.html#9660-12232025) |
| 9.6.42 | [JavaScript]({{ site.js }}release-notes/js-9.html#9642-04292024){:target="_blank"} |
| 9.6.40 | [JavaScript]({{ site.js }}release-notes/js-9.html#9640-03182024){:target="_blank"} / [C++]({{ site.cpp_release_notes}}cpp-9.html#9640-03142024){:target="_blank"} / [DotNet]({{ site.dotnet_release_notes }}dotnet-9.html#9640-03142024){:target="_blank"} / [Java]({{ site.java_release_notes }}java-9.html#9640-03142024){:target="_blank"} / [Python]({{ site.python_release_notes }}python-9.html#9640-03142024){:target="_blank"} / [Android]({{ site.android_release_notes }}android-9.html#9640-03212024){:target="_blank"} / [iOS]({{ site.oc_release_notes }}ios-9.html#9640-03212024){:target="_blank"} |
| 9.6.33 | [JavaScript]({{ site.js }}release-notes/js-9.html#9633-02052024) |
| 9.6.32 | [JavaScript]({{ site.js }}release-notes/js-9.html#9632-12072023) |
| 9.6.31 | [JavaScript]({{ site.js }}release-notes/js-9.html#9631-10122023) |
| 9.6.30 | [C++]({{ site.cpp_release_notes}}cpp-9.html#9630-08292023) / [DotNet]({{ site.dotnet_release_notes }}dotnet-9.html#9630-08292023) / [Java]({{ site.java_release_notes }}java-9.html#9630-08292023) / [Python]({{ site.python_release_notes }}python-9.html#9630-08292023) |
| 9.6.21 | [iOS]({{ site.oc_release_notes }}ios-9.html#9621-03272023) /[JavaScript]({{ site.js }}release-notes/js-9.html#9621-08032023) |
| 9.6.20 | [JavaScript]({{ site.js }}release-notes/js-9.html#9620-04182023) / [C++]({{ site.cpp_release_notes}}cpp-9.html#9620-03162023) / [DotNet]({{ site.dotnet_release_notes }}dotnet-9.html#9620-03162023) / [Java]({{ site.java_release_notes }}java-9.html#9620-03162023) / [Python]({{ site.python_release_notes }}python-9.html#9620-03162023) / [Android]({{ site.android_release_notes }}android-9.html#9620-03162023) / [iOS]({{ site.oc_release_notes }}ios-9.html#9620-03162023) |
| 9.6.11 | [JavaScript]({{ site.js }}release-notes/js-9.html#9611-03132023) /[Android]({{ site.android_release_notes }}android-9.html#9611-01162023) |
| 9.6.10 | [JavaScript]({{ site.js }}release-notes/js-9.html#9610-02212023) / [C++]({{ site.cpp_release_notes}}cpp-9.html#9610-01102023) / [DotNet]({{ site.dotnet_release_notes }}dotnet-9.html#9610-01102023) / [Java]({{ site.java_release_notes }}java-9.html#9610-01102023) / [Python]({{ site.python_release_notes }}python-9.html#9610-01102023) / [Android]({{ site.android_release_notes }}android-9.html#9610-01102023) / [iOS]({{ site.oc_release_notes }}ios-9.html#9610-01102023) |
| 9.6.2 | [JavaScript]({{ site.js }}release-notes/js-9.html#962-01162023) |
| 9.6.1 | [JavaScript]({{ site.js }}release-notes/js-9.html#961-12192022) |
| 9.6.0 | [JavaScript]({{ site.js }}release-notes/js-9.html#960-12132022) / [C++]({{ site.cpp_release_notes}}cpp-9.html#960-11292022) / [DotNet]({{ site.dotnet_release_notes }}dotnet-9.html#960-11292022) / [Java]({{ site.java_release_notes }}java-9.html#960-11292022) / [Python]({{ site.python_release_notes }}python-9.html#960-11292022) / [Android]({{ site.android_release_notes }}android-9.html#960-12132022) / [iOS]({{ site.oc_release_notes }}ios-9.html#960-12132022) |

## 9.4

> First released: 08-30-2022

### Highlights

- **DotCode** decoding has been improved by optimizing the localization and decoding algorithm.
- **Stacked**, **skewed** or **perspective distorted OneD barcode** decoding has been improved.

| Versions | Available Editions |
| -------- | ------------------ |
| 9.4.0 | [C++]({{ site.cpp_release_notes}}cpp-9.html#940-08302022) / [DotNet]({{ site.dotnet_release_notes }}dotnet-9.html#940-08302022) / [Java]({{ site.java_release_notes }}java-9.html#940-08302022) / [Python]({{ site.python_release_notes }}python-9.html#940-08302022) / [Android]({{ site.android_release_notes }}android-9.html#940-11042022) / [iOS]({{ site.oc_release_notes }}ios-9.html#940-11042022) |

## 9.2

> First released: 06-07-2022

### Highlights

- Barcode boundary-seeking algorithm is refactored to improve stability.
- Pharmacode decoding is optimized to improve accuracy.
- The function of device-alias is added to allow users to give each device a readable name. For end-users and administrators, this makes it more friendly to distinguish between devices about license usage statistics.

| Versions | Available Editions |
| -------- | ------------------ |
| 9.3.1 | [JavaScript]({{ site.js }}release-notes/js-9.html#931-10102022) |
| 9.3.0 | [JavaScript]({{ site.js }}release-notes/js-9.html#930-09272022) |
| 9.2.13 | [JavaScript]({{ site.js }}release-notes/js-9.html#9213-08112022) |
| 9.2.12 | [JavaScript]({{ site.js }}release-notes/js-9.html#9212-08042022) /[iOS]({{ site.oc_release_notes }}ios-9.html#9212-08022022) |
| 9.2.11 | [JavaScript]({{ site.js }}release-notes/js-9.html#9211-07282022) /[iOS]({{ site.oc_release_notes }}ios-9.html#9211-07112022) |
| 9.2.10 | [Android]({{ site.android_release_notes }}android-9.html#9210-06282022) / [iOS]({{ site.oc_release_notes }}ios-9.html#9210-06282022) |
| 9.2.0 | [C++]({{ site.cpp_release_notes}}cpp-9.html#920-06072022) / [DotNet]({{ site.dotnet_release_notes }}dotnet-9.html#920-06072022) / [Java]({{ site.java_release_notes }}java-9.html#920-06072022) / [Python]({{ site.python_release_notes }}python-9.html#920-06212022) |

## 9.0

> First released: 03-15-2022

### Highlights

- Simplified the license activation steps. Different license activation APIs are integrated into `initLicense` method.
- Added support for **Pharmacode**.
- Added support for **Code 11**, a 1D format.
- Deformation resisting modes `DRM_BROAD_WARP`, `DRM_LOCAL_REFERENCE` and `DRM_DEWRINKLE` are optimized and detached from `DRM_GENERAL`. Users can specify a more effective deformation resisting mode when processing **QRCode** and **DataMatrix codes**.
- Optimized the confidence scoring system for **PDF417 codes**.

| Versions | Available Editions |
| -------- | ------------------ |
| 9.0.2 | [JavaScript]({{ site.js }}release-notes/js-9.html#902-05062022) |
| 9.0.1 | [JavaScript]({{ site.js }}release-notes/js-9.html#901-04252022) / [Android]({{ site.android }}release-notes/android-9.html#901-04202022) / [iOS]({{ site.oc }}release-notes/ios-9.html#901-04202022) |
| 9.0.0 | [JavaScript]({{ site.js }}release-notes/js-9.html#900-03242022) / C / [C++]({{ site.cpp}}release-notes/cpp-9.html#900-03152022) / [DotNet]({{ site.dotnet }}release-notes/dotnet-9.html#900-03152022) / [Python]({{ site.python_release_notes }}python-9.html#900-03312022) / [Java]({{ site.java }}release-notes/java-9.html#900-03152022) / [Android]({{ site.android }}release-notes/android-9.html#900-03222022) / [iOS]({{ site.oc }}release-notes/ios-9.html#900-03222022) |