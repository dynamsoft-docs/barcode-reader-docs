---
layout: default-layout
title: Release Notes v11.x - Dynamsoft Barcode Reader
description: This note features the latest updates in Barcode Reader SDK version 11.x. New features were added along with various APIs deprecated, removed, and removed.
keywords: release notes, dynamsoft barcode reader
needAutoGenerateSidebar: true
needGenerateH3Content: false
noTitleIndex: true
---

# Release Notes for Dynamsoft Barcode Reader - 11.x

## 11.2 (10/14/2025)

### ✨ Key Highlights

**AI-Powered Barcode Detection & Decoding**
- 🧠 **First-to-Market AI Localization**: Revolutionary [`OneDLocalization`]({{ site.dcvb_parameters_reference }}barcode-reader-task-settings/localization-modes.html#modelnamearray) and [`DataMatrixQRCodeLocalization`]({{ site.dcvb_parameters_reference }}barcode-reader-task-settings/localization-modes.html#modelnamearray) neural network models for superior detection of **blurred/low-resolution 1D codes** and **DataMatrix/QR codes with missing or damaged finder patterns**
- ⚡ **Specialized Decoders**: Cutting-edge [`EAN13Decoder`]({{ site.dcvb_parameters_reference }}barcode-reader-task-settings/deblur-modes.html#modelnamearray) and [`Code128Decoder`]({{ site.dcvb_parameters_reference }}barcode-reader-task-settings/deblur-modes.html#modelnamearray) models deliver unprecedented accuracy for **blurred and long-distance** scenarios
- 🔍 **Enhanced Clarity Processing**: Completely redesigned [`OneDDeblur`]({{ site.dcvb_parameters_reference }}barcode-reader-task-settings/deblur-modes.html#modelnamearray) model with superior **motion blur and focus blur** recovery algorithms
- 🎯 **Flexible Model Configuration**: Advanced `ModelNameArray` parameter enables on-demand model loading and precise selection for specific barcode scenarios

**Precision Control**
- ⚙️ **Granular Deblur Methods**: Fine-tuned [`DM_DEEP_ANALYSIS`]({{ site.dcvb_parameters_reference }}barcode-reader-task-settings/deblur-modes.html#dm_deep_analysis) with specialized method control - `OneDGeneral`, `TwoDGeneral`, and `EAN13Enhanced` for targeted optimization
- 🎯 **Smart Barcode Counting**: New [`ExpectedBarcodesCount`]({{ site.dcvb_parameters_reference }}barcode-format-specification/expected-barcodes-count.html) parameter enables **format-specific quantity control** and **early termination optimization** for known-quantity scenarios
- 🔍 **Advanced Region Detection**: New [`RPM_GRAY_CONSISTENCY`]({{ site.dcvb_parameters_reference }}image-parameter/region-predetection-modes.html#rpm_gray_consistency) mode enables precise region detection based on **grayscale uniformity** and **local consistency** for document and label processing

| Versions | Available Editions |
| -------- | ------------------ |
| 11.2.5000 | [C++]({{ site.cpp_release_notes}}cpp-11.html#1125000-12162025){:target="_blank"} / [.NET]({{ site.dotnet_release_notes }}dotnet-11.html#1125000-12162025){:target="_blank"} / [Python]({{ site.python_release_notes}}python-11.html#1125000-12162025){:target="_blank"} / [Java]({{ site.java_release_notes}}java-11.html#1125000-12162025){:target="_blank"} / [Android]({{ site.android_release_notes}}android-11.html#1125000-12162025){:target="_blank"} / [iOS]({{ site.oc_release_notes }}ios-11.html#1125000-12162025){:target="_blank"} |
| 11.2.4000 | [JavaScript]({{ site.js_release_notes}}js-11.html#1124000-11112025){:target="_blank"} |
| 11.2.3000 | [Android]({{ site.android_release_notes}}android-11.html#1123000-11052025){:target="_blank"} / [iOS]({{ site.oc_release_notes }}ios-11.html#1123000-11052025){:target="_blank"} / [Flutter]({{ site.flutter_release_notes }}flutter-11.html#1123000-11062025){:target="_blank"} / [MAUI]({{ site.maui_release_notes }}maui-11.html#1123000-11202025){:target="_blank"} / [React Native]({{ site.react_native_release_notes }}react-native-11.html#1123000-12042025){:target="_blank"} |
| 11.2.2000 | [JavaScript]({{ site.js_release_notes}}js-11.html#1122000-11042025){:target="_blank"} |
| 11.2.1100 | [Java]({{ site.java_release_notes}}java-11.html#1121100-10282025){:target="_blank"} |
| 11.2.1000 | [C++]({{ site.cpp_release_notes}}cpp-11.html#1121000-10142025){:target="_blank"} / [.NET]({{ site.dotnet_release_notes }}dotnet-11.html#1121000-10142025){:target="_blank"} / [Python]({{ site.python_release_notes}}python-11.html#1121000-10142025){:target="_blank"} / [Java]({{ site.java_release_notes}}java-11.html#1121000-10142025){:target="_blank"} / [Android]({{ site.android_release_notes}}android-11.html#1121000-10162025){:target="_blank"} / [iOS]({{ site.oc_release_notes }}ios-11.html#1121000-10162025){:target="_blank"} |

## 11.0 (03/04/2025)

### Highlights

- Workflow Improvements
  - Restructured the parameter control hierarchy at all levels for finer scope definition and more granular process management, with the stage level newly added.
  - Enabled custom combinations and sequences of sections, increasing flexibility and operational customization under specific conditions.

- Deep Learning Integration
  - Improved the reading rate of 1D barcode by introducing a new deblurring deep-learning model.
  - Lowered the error rate of 1D and DataMatrix barcode localization using custom deep-learning object detection.

- Algorithm Enhancements
  - Enabled deduplication at the Region of Interest (ROI) level to consolidate results from multiple tasks.
  - Improved the **CODE_128** and **DataMatrix** DeepAnalysis algorithms for better decoding accuracy and performance.
  - Added support for new barcode types: **CODE_32**, **MATRIX_25**, **KIX**, and **TELEPEN**.

- Engineering Optimizations
  - Unified template-loading logic to reduce I/O overhead.
  - Added support for capturing data from multi-page files, including **PDF** and **TIFF** formats.
  - Implemented conversion functionality between `CImageData` and image files, including both on-disk and in-memory files.


| Versions | Available Editions |
| -------- | ------------------ |
| 11.0.6100 | [Java]({{ site.java_release_notes}}java-11.html#1106100-08192025){:target="_blank"} |
| 11.0.6000 | [JavaScript]({{ site.js_release_notes}}js-11.html#1106000-08142025){:target="_blank"} / [C++]({{ site.cpp_release_notes}}cpp-11.html#1106000-08062025){:target="_blank"} / [.NET]({{ site.dotnet_release_notes }}dotnet-11.html#1106000-08062025){:target="_blank"} / [Python]({{ site.python_release_notes}}python-11.html#1106000-08062025){:target="_blank"} / [Java]({{ site.java_release_notes}}java-11.html#1106000-08062025){:target="_blank"} |
| 11.0.4000 | [C++]({{ site.cpp_release_notes}}cpp-11.html#1104000-07152025){:target="_blank"} / [.NET]({{ site.dotnet_release_notes }}dotnet-11.html#1104000-07152025){:target="_blank"} / [Python]({{ site.python_release_notes}}python-11.html#1104000-07152025){:target="_blank"} |
| 11.0.3000 | [JavaScript]({{ site.js_release_notes}}js-11.html#1103000-07092025){:target="_blank"} / [C++]({{ site.cpp_release_notes}}cpp-11.html#1103000-05132025){:target="_blank"} / [.NET]({{ site.dotnet_release_notes }}dotnet-11.html#1103000-05132025){:target="_blank"} / [Python]({{ site.python_release_notes}}python-11.html#1103000-05152025){:target="_blank"} / [Android]({{ site.android_release_notes}}android-11.html#1103000-05152025){:target="_blank"} / [iOS]({{ site.oc_release_notes }}ios-11.html#1103000-05152025){:target="_blank"} |
| 11.0.2000 | [Python]({{ site.python_release_notes}}python-11.html#1102000-04092025){:target="_blank"} |
| 11.0.1000 | [C++]({{ site.cpp_release_notes}}cpp-11.html#1101000-03042025){:target="_blank"} |
