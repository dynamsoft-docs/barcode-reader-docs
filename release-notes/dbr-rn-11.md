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
| 11.0.4000 | [C++]({{ site.cpp_release_notes}}cpp-11.html#1104000-07152025){:target="_blank"} / [.NET]({{ site.dotnet_release_notes }}dotnet-11.html#1104000-07152025){:target="_blank"} / [Python]({{ site.python_release_notes}}python-11.html#1104000-07152025){:target="_blank"} |
| 11.0.3000 | [C++]({{ site.cpp_release_notes}}cpp-11.html#1103000-05132025){:target="_blank"} / [.NET]({{ site.dotnet_release_notes }}dotnet-11.html#1103000-05132025){:target="_blank"} / [Python]({{ site.python_release_notes}}python-11.html#1103000-05152025){:target="_blank"} / [Android]({{ site.android_release_notes}}android-11.html#1103000-05152025){:target="_blank"} / [iOS]({{ site.oc_release_notes }}ios-11.html#1103000-05152025){:target="_blank"} |
| 11.0.2000 | [Python]({{ site.python_release_notes}}python-11.html#1102000-04092025){:target="_blank"} |
| 11.0.1000 | [C++]({{ site.cpp_release_notes}}cpp-11.html#1101000-03042025){:target="_blank"} |
