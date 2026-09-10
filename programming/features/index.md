---
layout: default-layout
title: Feature Articles - Dynamsoft Barcode Reader SDK
description: A collection of feature articles that explain how to configure Dynamsoft Barcode Reader to handle specific reading scenarios, such as difficult barcode surfaces, preprocessing, result handling, and UI customization.
keywords: barcode reader, features, feature articles
needGenerateH3Content: false
---

# Feature Articles

The articles in this section explain how to configure Dynamsoft Barcode Reader to read barcodes in specific scenarios. Each article focuses on one feature and shows the parameters, modes, and code needed to apply it.

## Configuration Basics

* [Use SimplifiedCaptureVisionSettings or JSON Template](use-runtimesettings-or-templates.md): Compare the two ways to configure the SDK and learn the syntax rules of each.
* [Specify Barcode Formats and Count](barcode-formats-and-count.md): Target specific barcode formats and set the expected number of barcodes per image.
* [Control When to Terminate a Decoding Process](control-terminate-phase.md): End decoding early with `SectionArray`, `Timeout`, and `ExpectedBarcodesCount`.
* [Use Format Specific Configuration](use-format-specific-configuration.md): Apply settings for a particular barcode type with `BarcodeFormatSpecification`.
* [Read Barcode from Different Image Sources](read-different-source.md): Read from file paths, in-memory images, and raw pixel buffers.

## Scan Region and Preprocessing

* [Read a Specific Area/Region](barcode-scan-region.md): Restrict decoding to a region of interest with `TargetROIDef`.
* [Read Barcodes from a Specific Area/Region on Mobile](barcode-scan-region-mobile.md): Define a scan region on Android and iOS with Dynamsoft Camera Enhancer.
* [How To Use Region Predetection](use-region-predetection.md): Let the SDK find the regions of interest automatically.
* [How to Preprocess Images based on Different Scenarios](preprocess-images.md): Improve the detection rate with grayscale enhancement and binarization.
* [How to Read Barcodes from Large Images](read-a-large-image.md): Speed up decoding of large images with `ImageScaleSetting`.
* [How to Read Barcodes from Images with Textures](read-images-with-texture.md): Remove background texture with `TextureDetectionModes`.
* [How to Read Barcodes from an Image With Lots of Text](read-images-with-lots-of-text.md): Filter surrounding text so it does not interfere with localization.
* [How to Read Barcodes with Uneven Lighting](read-barcodes-with-uneven-lighting.md): Choose the right binarization mode for uneven lighting.
* [How to Read Barcodes with Imbalanced Colour](read-barcodes-with-imbalanced-colour.md): Tune RGB channel weights to produce a better grayscale image.

## Difficult Barcode Surfaces

* [Read Deformed Barcodes](read-deformed-barcodes.md): Read distorted barcodes on flexible packaging and cylindrical surfaces.
* [Read Incomplete Barcodes](read-incomplete-barcodes.md): Reconstruct barcodes with missing or damaged sections.
* [Read Inverted Barcodes](read-inverted-barcodes.md): Read light-on-dark barcodes.
* [How to Read High-Density QR Codes](read-dense-barcodes.md): Improve recognition of high-density QR codes.
* [How to Read Barcodes with Small Module Size](read-barcodes-with-small-module-size.md): Upscale tiny barcode symbols before recognition.

## Working with Results

* [How to Filter and Sort Barcode Results](filter-and-sort.md): Filter results by format, confidence, and region; sort by position or confidence.
* [How to Get Barcode Location](get-barcode-location.md): Retrieve the coordinates of decoded barcodes.
* [How to Get Barcode Confidence and Rotation Angle](get-confidence-rotation.md): Retrieve confidence scores and rotation angles.
* [How to Get Detailed Barcode Information](get-detailed-info.md): Access format-specific details such as module size and error correction level.
* [How to Use Intermediate Results](use-intermidiate-results.md): Access in-process data such as grayscale images and localization results.

## Video Streaming and UI

* [Read Barcode from Video Streaming (JavaScript)](read-video-streaming-js.md): Read from a live video stream with the `BarcodeScanner` class.
* [Read Barcode from Video Streaming (Mobile)](read-video-streaming-mobile.md): Capture and read video on Android and iOS with Dynamsoft Camera Enhancer.
* [Customize the UI for DBR JS](customize-the-ui.md): Customize the built-in UI of the `BarcodeScanner` class.
* [Customize the UI (Dynamsoft Camera Enhancer)](ui-customization-js.md): Customize the camera viewer UI with UI definition files and APIs.
