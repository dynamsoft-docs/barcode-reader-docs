---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API - BarcodeReader
description: This page shows the BarcodeReader Class of Dynamsoft Barcode Reader JavaScript SDK.
keywords: RuntimeSettings, BarcodeReader, api reference, javascript, js
needAutoGenerateSidebar: false
noTitleIndex: true
breadcrumbText: RuntimeSettings
---


# RuntimeSettings

`interface` RuntimeSettings

* barcodeFormatIds: *number &#124; [EnumBarcodeFormat](../enum/EnumBarcodeFormat.md)*

  > Sets the formats of the barcode in BarcodeFormat group 1 to be read. Barcode formats in BarcodeFormat group 1 can be combined.
  > ```js
  > let runtimeSettings = await reader.getRuntimeSettings();
  > runtimeSettings.barcodeFormatIds = Dynamsoft.DBR.EnumBarcodeFormat.BF_ONED &#124; Dynamsoft.DBR.EnumBarcodeFormat.BF_QR_CODE;
  > await reader.updateRuntimeSettings(runtimeSettings);
  > ```

  <br>

* barcodeFormatIds_2: *number &#124; [EnumBarcodeFormat_2](../enum/EnumBarcodeFormat_2.md)*

  > Sets the formats of the barcode in BarcodeFormat group 2 to be read. Barcode formats in BarcodeFormat group 1 can be combined.

  <br>

* deblurLevel: *number*

  > Sets the degree of blurriness of the barcode.

  <br>

* expectedBarcodesCount: *number*

  > Sets the number of barcodes expected to be detected for each image.

  <br>

* localizationModes: *number&#91;&#93; &#124; [EnumLocalizationMode](../enum/EnumLocalizationMode.md)&#91;&#93;*

  > Sets the mode and priority for localization algorithms.

  <br>

* minResultConfidence: *number*

  <br>

* region: *[RegionDefinition](RegionDefinition.md) &#124; [RegionDefinition](RegionDefinition.md)&#91;&#93;*

  > Sets the region definition including the regionTop, regionLeft, regionRight, regionBottom and regionMeasuredByPercentage.
  >
  > ```js
  > // Use a region of center 50% width and 50% height
  > let runtimeSettings = await reader.getRuntimeSettings();
  > runtimeSettings.region.regionLeft = 25;
  > runtimeSettings.region.regionTop = 25;
  > runtimeSettings.region.regionRight = 75;
  > runtimeSettings.region.regionBottom = 75;
  > runtimeSettings.region.regionMeasuredByPercentage = true;
  > await reader.updateRuntimeSettings(runtimeSettings);
  > ```
  >
  > Experimental feature:
  >
  > In [BarcodeScanner](../BarcodeScanner.md), `region` can be an array. For example `region = [r0, r1, r2]`, 0th frame use `r0`, 1st use `r1`, 2nd use `r2`, 3rd use `r0`, and then loop like this. 
  >
  > ```js
  > let runtimeSettings = await reader.getRuntimeSettings();
  > runtimeSettings.region = [
  >   null, // full image
  >   {regionLeft:25,regionTop:25,regionRight:75,regionBottom:75,regionMeasuredByPercentage:true}, // center 50% 
  >   {regionLeft:5,regionTop:45,regionRight:95,regionBottom:55,regionMeasuredByPercentage:true}, // width 90%, height 10% 
  > ];
  > await reader.updateRuntimeSettings(runtimeSettings);
  > ```

  <br>

* resultCoordinateType: *number &#124; [EnumResultCoordinateType](../enum/EnumResultCoordinateType.md)*

  <br>

* timeout: *number*

  > Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. 
  > It does not include the time taken to load/decode an image (Tiff, PNG, etc) from disk into memory.

  <br>

Some advanced parameters are not listed. See [C++ PublicRuntimeSettings](https://www.dynamsoft.com/barcode-reader/programming/c-cplusplus/struct/PublicRuntimeSettings.html?src=cpp&&ver=latest) for more info.


