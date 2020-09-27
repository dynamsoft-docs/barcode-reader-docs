---
layout: default-layout
title: Dynamsoft Barcode Reader for Python - User Guide
description: This is the user guide of Dynamsoft Barcode Reader for Python SDK.
keywords: user guide, python
needAutoGenerateSidebar: true
needGenerateH3Content: true
---

# User Guide for Python SDK

## System Requirements

- Operating systems:
    - Windows x64
    - Linux
    - Mac OS
    - Raspberry Pi (If you want to use DBR Python Edition in Raspberry Pi, please [`contact us`](#contact-us).)

- Supported Python Versions: Python 2.7 (for versions before DBR 7.4), Python 3.5, Python 3.6, Python 3.7, Python 3.8

## Installation

```
pip install dbr
```

## Getting Started: HelloWorld

1. Create a text document. Let's rename it to `BarcodeReadDemo_python.py`.
2. Import dbr package in `BarcodeReadDemo_python.py`.

   ```python
    from dbr import *
   ```

   Before this, please make sure dbr python package has been installed successful. You can start terminal or command prompt to run command "`pip show dbr`" to show dbr python package information.

3. Update the main code in `BarcodeReadDemo_python.py`.

   ```python
   license_key = "<your license key here>"
   image = r"<your image file full path>"

   reader = BarcodeReader()

   reader.init_license(license_key)

   try:
       text_results = reader.decode_file(image)

       if text_results != None:
           for text_result in text_results:
               print("Barcode Format :")
               print(text_result.barcode_format_string)
               print("Barcode Text :")
               print(text_result.barcode_text)
               print("Localization Points : ")
               print(text_result.localization_result.localization_points)
               print("-------------")
   except BarcodeReaderError as bre:
       print(bre)
   ```

    Please update `<your image file full path>` and `<your license key here>` in the code accordingly.

4. Run `BarcodeReadDemo_python.py`.

## Decoding Methods

The SDK provides multiple decoding methods that support reading barcodes from different sources, including static images,
video stream, files in memory, base64 string, etc. Here is a list of all decoding methods:

- [decode_file](api-reference/BarcodeReader/decode.md#decode_file): Reads barcodes from a specified file (BMP, JPEG, PNG, GIF, TIFF or PDF).   
- [decode_buffer](api-reference/BarcodeReader/decode.md#decode_buffer): Decodes barcodes from the memory buffer containing image pixels in defined format.   
- [decode_file_stream](api-reference/BarcodeReader/decode.md#decode_file_stream): Decodes barcodes from an image file in memory. 

You can find more samples in more programming languages at [Code Gallery](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Sample-Download.aspx).

## Barcode Reading Settings

Calling the [decoding methods](#decoding-methods) directly will use the default scanning modes and it will satisfy most of the needs. The SDK also allows you to adjust the scanning settings to optimize the scanning performance for different usage scenarios.   
   
There are two ways to change the barcode reading settings - using the PublicRuntimeSettings Class or template. For new
developers, We recommend you to start with the PublicRuntimeSettings Class; For those who are experienced with the SDK,
you may use a template which is more flexible and easier to update.

- [Use `PublicRuntimeSettings` Struct to Change Settings](#use-publicruntimesettings-struct-to-change-settings)   
- [Use A Template to Change Settings](#use-a-template-to-change-settings)   

### Use [`PublicRuntimeSettings`](api-reference/class/PublicRuntimeSettings.md) Class to Change Settings

Here are some common scanning settings you might find helpful:

- [Specify Barcode Type to Read](#specify-barcode-type-to-read)   
- [Specify Maximum Barcode Count](#specify-maximum-barcode-count)   
- [Specify a Scan Region](#specify-a-scan-region)  

For more scanning settings guide, check out the [How To](#how-to-guide) section.

#### Specify Barcode Type to Read

By default, the SDK will read all the supported barcode formats except Postal Codes and Dotcode from the image. (See [Product Overview]({{ site.introduction }}overview.html) for the full supported barcode list.)   

If your full license only covers some barcode formats, you can use `BarcodeFormatIds` and `BarcodeFormatIds_2` to specify the barcode format(s). Check out [`BarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) and [`BarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2).   

For example, to enable only 1D barcode reading, you can use the following code:

```python
license_key = "<your license key here>"
image = r"<your image file full path>"

reader = BarcodeReader()

reader.init_license(license_key)

settings = reader.get_runtime_settings()
settings.barcode_format_ids = EnumBarcodeFormat.BF_ONED

try:
    reader.update_runtime_settings(settings)
    text_results = reader.decode_file(image)

    if text_results != None:
        for text_result in text_results:
            print("Barcode Format :")
            print(text_result.barcode_format_string)
            print("Barcode Text :")
            print(text_result.barcode_text)
            print("Localization Points : ")
            print(text_result.localization_result.localization_points)
            print("-------------")
except BarcodeReaderError as bre:
    print(bre)
```

#### Specify maximum barcode count

By default, the SDK will read as many barcodes as it can. To increase the recognition efficiency, you can use `expectedBarcodesCount` to specify the maximum number of barcodes to recognize according to your scenario. 

```python
   license_key = "<your license key here>"
   image = r"<your image file full path>"

   reader = BarcodeReader()

   reader.init_license(license_key)

   settings = reader.get_runtime_settings()
   settings.expected_barcodes_count = 1

   try:
      reader.update_runtime_settings(settings)
      text_results = reader.decode_file(image)

      if text_results != None:
         for text_result in text_results:
               print("Barcode Format :")
               print(text_result.barcode_format_string)
               print("Barcode Text :")
               print(text_result.barcode_text)
               print("Localization Points : ")
               print(text_result.localization_result.localization_points)
               print("-------------")
   except BarcodeReaderError as bre:
      print(bre)
```

### Specify a scan region

By default, the barcode reader will search the whole image for barcodes. This can lead to poor performance especially when
dealing with high-resolution images. You can speed up the recognition process by restricting the scanning region.

To specify a region, you will need to define an area. The following code shows how to create a template string and define the region.

```python
   license_key = "<your license key here>"
   image = r"<your image file full path>"

   reader = BarcodeReader()

   reader.init_license(license_key)

   settings = reader.get_runtime_settings()
   settings.region_bottom  = 100
   settings.region_left    = 0
   settings.region_right   = 50
   settings.region_top     = 0
   settings.region_measured_by_percentage   = 1

   try:
      reader.update_runtime_settings(settings)
      text_results = reader.decode_file(image)

      if text_results != None:
         for text_result in text_results:
               print("Barcode Format :")
               print(text_result.barcode_format_string)
               print("Barcode Text :")
               print(text_result.barcode_text)
               print("Localization Points : ")
               print(text_result.localization_result.localization_points)
               print("-------------")
   except BarcodeReaderError as bre:
      print(bre)
```

### Use A Template to Change Settings

Besides the option of using the PublicRuntimeSettings struct, the SDK also provides [`init_runtime_settings_with_string`](api-reference/BarcodeReader/parameter-and-runtime-settings-advanced.md#init_runtime_settings_with_string) and [`init_runtime_settings_with_file`](api-reference/BarcodeReader/parameter-and-runtime-settings-advanced.md#init_runtime_settings_with_file) APIs that enable you to use a template to control all the runtime settings. With a template, instead of writing many codes to modify the settings, you can manage all the runtime settings in a JSON file/string.

```python
   license_key = "<your license key here>"
   image = r"<your image file full path>"
   json_file = r"<your template file path>"

   reader = BarcodeReader()

   reader.init_license(license_key)

   error = reader.init_runtime_settings_with_file(json_file)

   if error[0] != EnumErrorCode.DBR_OK:
      print(error[1])

   try:
      reader.update_runtime_settings(settings)
      text_results = reader.decode_file(image)

      if text_results != None:
         for text_result in text_results:
               print("Barcode Format :")
               print(text_result.barcode_format_string)
               print("Barcode Text :")
               print(text_result.barcode_text)
               print("Localization Points : ")
               print(text_result.localization_result.localization_points)
               print("-------------")
   except BarcodeReaderError as bre:
      print(bre)
```

Below is a template for your reference. To learn more about the APIs, you can check out [`PublicRuntimeSettings`](api-reference/class/PublicRuntimeSettings.md) class. 

```json
{
   "ImageParameter" : {
      "BarcodeFormatIds" : [ "BF_ALL" ],
      "BinarizationModes" : [
         {
            "BlockSizeX" : 0,
            "BlockSizeY" : 0,
            "EnableFillBinaryVacancy" : 1,
            "ImagePreprocessingModesIndex" : -1,
            "Mode" : "BM_LOCAL_BLOCK",
            "ThreshValueCoefficient" : 10
         }
      ],
      "DeblurLevel" : 9,
      "Description" : "",
      "ExpectedBarcodesCount" : 0,
      "GrayscaleTransformationModes" : [
         {
            "Mode" : "GTM_ORIGINAL"
         }
      ],
      "ImagePreprocessingModes" : [
         {
            "Mode" : "IPM_GENERAL"
         }
      ],
      "IntermediateResultSavingMode" : {
         "Mode" : "IRSM_MEMORY"
      },
      "IntermediateResultTypes" : [ "IRT_NO_RESULT" ],
      "MaxAlgorithmThreadCount" : 4,
      "Name" : "runtimesettings",
      "PDFRasterDPI" : 300,
      "Pages" : "",
      "RegionDefinitionNameArray" : null,
      "RegionPredetectionModes" : [
         {
            "Mode" : "RPM_GENERAL"
         }
      ],
      "ResultCoordinateType" : "RCT_PIXEL",
      "ScaleDownThreshold" : 2300,
      "TerminatePhase" : "TP_BARCODE_RECOGNIZED",
      "TextFilterModes" : [
         {
            "MinImageDimension" : 65536,
            "Mode" : "TFM_GENERAL_CONTOUR",
            "Sensitivity" : 0
         }
      ],
      "TextResultOrderModes" : [
         {
            "Mode" : "TROM_CONFIDENCE"
         },
         {
            "Mode" : "TROM_POSITION"
         },
         {
            "Mode" : "TROM_FORMAT"
         }
      ],
      "TextureDetectionModes" : [
         {
            "Mode" : "TDM_GENERAL_WIDTH_CONCENTRATION",
            "Sensitivity" : 5
         }
      ],
      "Timeout" : 10000
   },
   "Version" : "3.0"
}
```

## Contact Us

[Contact us](https://www.dynamsoft.com/Company/Contact.aspx) if you need any help.

