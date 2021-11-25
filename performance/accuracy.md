---
layout: default-layout
title: Dynamsoft Barcode Reader Performance - Accuracy
description: This page illustrates how to maximize the accuracy of Dynamsoft Barcode Reader
Keywords: accuracy
needAutoGenerateSidebar: true
noTitleIndex: true
breadcrumbText: Accuracy
---

# How to create a High-Accuracy barcode reader

Conclusion first, to maximize the accuracy of DBR in your project, you can:

- Skip processing the blurry frames:
  - Enable frame filter by using `Dynamsoft camera Enhancer`.
- Exclude the uninterest formats or areas by:
  - Specifying the supporting barcode formats.
  - Excluding the small-module barcodes.
- Filter the results by enabling:
  - Multi-frame confirmation.
  - Confidence score filter.
  - RegEx and length filter.

## Skip the Blurry Frames

Normally, the misreading is caused by the low-quality source. The low-quality source can be terribly printed barcodes or blurry images/frames. These low-quality barcodes can be recognized and localized. However, the barcode reader will take a lot of time to further process these barcodes and it is difficult to guarantee the accuracy of the results. It would be better to optimize the barcode source rather than try decoding on these low-quality barcodes.

### Frame Filter

Generally, the quality of input video streaming is determined by the performance of hardware. However, we still have solutions to deal with the blurry frames in the video streaming from the software end. `Dynamsoft Camera Enhancer` (DCE) is an SDK that provides video streaming pre-processing APIs which enable users to avoid decoding barcodes on low-quality frames. By enabling the frame filter feature of DCE, the sharpness of each frame will be detected and the low sharpness frames will be skipped in the barcode decoding process.

## Exclude the Uninterest (Before decoding)

### Specify the Barcode Format

Sometimes, misreading on an OneD barcode is caused by misrecognizing the barcode to another type. If your program is not going to process all kinds of barcodes, please be sure that you have specified the barcode formats to avoid misrecognizing. In addition, specifying the required barcode formats will also benefit the barcode reading speed.

**Related APIs**

- Struct/class `PublicRuntimeSettings`
- API `BarcodeReader.updateRuntimeSettings`
- Enum `BarcodeFormat` and `BarcodeFormat_2`

### Skip Small-Size Barcodes

When the barcode is badly printed or the input image is blurry, you might still get results from these error-prone barcodes but the correctness of the barcode result is hard to guarantee. On this occasion, you would better skip decoding on the error-prone barcodes to ensure the result accuracy even if the read rate is declined. To skip small-sized barcodes, you can use the format-specification parameters like barcodeHeightRangeArray and barcodeWidthRangeArray to specify the minimum acceptable width and height of the barcodes. To skip the blurry frame, you can skip the deblur modes by configuring the parameter DeblurModes or DeblurLevel. In addition to the parameter configuration, is it also possible to skip the error-prone barcodes by optimizing the video input when using video barcode decoding (see below).

**Related APIs**

- Parameters `BarcodeHeightRangeArray` and `BarcodeWidthRangeArray`.

## Filter the Results

### Confidence

The confidence attribute of the barcode results is determined by the reliability of that result. Users can set the `minResultConfidence` to make a filter on the barcode results by the confidence value.  For Dynamsoft Barcode Reader v8.8 or higher version, the default value of the confidence is 30, which can filter the majority of misreading barcode results.

**Related API(s)/Parameter(s)**

- minResultConfidence

### Multi-frame Confirmation

When decoding on video streaming, there are always duplicated results decoded from multiple frames for each barcode. The duplicated results can be devoted to verifying the correctness of the barcode results. Since the misreading is not frequent, when duplicated results are output in multiple frames, we can confirm the results are correct. However, if a result has never been output for a second time in a period, the result must be incorrect and we will discard it.

**Available Editions**

- Mobile
  - For mobile efitions, please use `BarcodeReader.enableResultVerification` to enable/disable the Muti-frame confirmation.
- JavaScript
  - For JavaScript edition, the multi-frame confirmation is enabled by default.

**Related APIs**

### Exclude the Uninterest results

For some scenarios, there might have some common features that can be applied to verify the correctness of the barcode result texts.

**The Text Length**

Set the minimum and maximum length of the barcode text to filter out the uninterested results. This feature can be configured via `FormatSpecification` parameter [`BarcodeTextLengthRangeArray`]({{ site.parameters_reference }}barcode-text-length-range-array.html).

**The Regular Expression Pattern**

Set the regular expression pattern of the barcode text to filter out the uninsterested results. This feature can be configured via `FormatSpecification` parameter [`BarcodeTextRegExPattern`]({{ site.parameters_reference }}barcode-text-regex-pattern.html).

## Further links

Check the Accuracy-First setting sample for further reading.

- [`Accuracy-First Settings Sample for mobile Editions`]()
- [`Accuracy-First Settings Sample for JS Editions`]()
- [`Accuracy-First Settings Sample for Desktop Editions`]()
