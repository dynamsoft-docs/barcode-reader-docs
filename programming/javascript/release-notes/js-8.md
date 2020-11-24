---
layout: default-layout
title: Dynamsoft Barcode Reader for JavaScript SDK - Release Notes v8.x
description: This is the release notes page of Dynamsoft Barcode Reader for JavaScript SDK v8.x.
keywords: release notes, javascript
needAutoGenerateSidebar: true
needGenerateH3Content: false
noTitleIndex: true
---

# Release Notes for JavaScript SDK - 8.x

## 8.0 (11/25/2020)

### NEW

- Added GPU acceleration on browsers supporting WebGL and OffscreenCanvas. GPU acceleration is enabled by default for browsers that support it.
- Added an experimental 'single' option for 'BarcodeScanner' 'updateRuntimeSettings' to optimize decoding speeds when reading only one barcode at a time.

### IMPROVED

- Upgraded to the latest algorithm.

### FIXED