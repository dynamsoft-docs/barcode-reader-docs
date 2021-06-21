---
layout: default-layout
title: Dynamsoft Barcode Reader for Python - User Guide
description: This is the user guide of Dynamsoft Barcode Reader for Python SDK.
keywords: user guide, python
needAutoGenerateSidebar: true
needGenerateH3Content: false
noTitleIndex: true
---

# User Guide for Python SDK

## System Requirements

- Operating systems:
    - Windows x64
    - Linux (x64, ARM32, ARM64)
    - macOS (10.15+)

- Supported Python Versions: 
    - Python 2.7 (for versions below DBR 7.2.2.3)
    - Python 3.5 (for versions below DBR 7.5)
    - Python 3.6
    - Python 3.7
    - Python 3.8
    - Python 3.9

## Installation of Dynamsoft Barcode Reader Python Package

The package name is 'dbr', which is short for Dynamsoft Barcode Reader.

```
pip install dbr
```

## Getting Started: HelloWorld

1. Create a text document. Let's rename it to `BarcodeReadDemo_python.py`.
2. Import dbr package in `BarcodeReadDemo_python.py`.

   ```python
    from dbr import *
   ```

   Before this, please make sure dbr python package has been installed successfully. You can start terminal or command prompt to run command "`pip show dbr`" to show dbr python package information.

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
               print("Barcode Format : ")
               print(text_result.barcode_format_string)
               print("Barcode Text : ")
               print(text_result.barcode_text)
               print("Localization Points : ")
               print(text_result.localization_result.localization_points)
               print("Exception : ")
               print(text_result.exception)
               print("-------------")
   except BarcodeReaderError as bre:
       print(bre)
   ```

    Please update `<your image file full path>` and `<your license key here>` in the code accordingly.

4. Run `BarcodeReadDemo_python.py`.

## Barcode Decoding Methods

The barcode reader library provides multiple decoding methods that support reading 1D and 2D barcodes from different sources, including static images,
video stream, files in memory, base64 string, etc. Here is a list of all decoding methods:

- [decode_file](api-reference/BarcodeReader/decode.md#decode_file): Reads barcodes from a specified file (BMP, JPEG, PNG, GIF, TIFF or PDF).   
- [decode_buffer](api-reference/BarcodeReader/decode.md#decode_buffer): Decodes barcodes from the memory buffer containing image pixels in defined format.  
- [decode_buffer_manually](api-reference/BarcodeReader/decode.md#decode_buffer_manually): Decodes barcodes from the memory buffer containing image pixels in defined format. 
- [decode_file_stream](api-reference/BarcodeReader/decode.md#decode_file_stream): Decodes barcodes from an image file in memory. 
- [decode_intermediate_results](api-reference/BarcodeReader/decode.md#decode_intermediate_results): Decodes barcodes from intermediate results.

You can find more samples in more programming languages at [Code Gallery](https://www.dynamsoft.com/barcode-reader/resources/code-gallery/?tag=python).

## Barcode Scanning Settings

Calling the [decoding methods](#decoding-methods) will use the default scanning modes, and it will satisfy most of the needs. The barcode package also allows you to adjust the scanning settings to optimize the scanning performance for different usage scenarios.
   
There are two ways to change the barcode reading settings. For new
developers, We recommend you to start with the PublicRuntimeSettings Class; For those who are experienced with the SDK,
you may use a template, which is more flexible and easier to update.

- [Use `PublicRuntimeSettings` Struct to Change Settings](#use-publicruntimesettings-struct-to-change-settings)   
- [Use A Template to Change Settings](#use-a-template-to-change-settings)   

### Use `PublicRuntimeSettings` Class to Change Settings

Here are some common scanning settings you might find helpful:

- [Specify Barcode Type to Read](#specify-barcode-type-to-read)   
- [Specify Maximum Barcode Count](#specify-maximum-barcode-count)   
- [Specify a Scan Region](#specify-a-scan-region)  

For more scanning settings guide, check out the [`PublicRuntimeSettings`](api-reference/class/PublicRuntimeSettings.md) Struct.

#### Specify barcode types to read
By default, the SDK will read all the supported barcode formats except Postal Codes and Dotcode from the image. If you know exactly the barcode format(s) you want to read, use `barcode_format_ids` and `barcode_format_ids_2` to specify the barcode format(s) to speed up the process and improve the accuracy. Check out [`Barcode Format Enumeration`]({{ site.enumerations }}format-enums.html) for full supported barcode list.   

For example, to read QR Code only, you can use the following code:   

```python
#...Initialization code
settings = reader.get_runtime_settings()
settings.barcode_format_ids = EnumBarcodeFormat.BF_QR_CODE
settings.barcode_format_ids_2 = EnumBarcodeFormat_2.BF2_NULL
reader.update_runtime_settings(settings)
#...Decode and do something with the result
```

#### Specify maximum barcode count

By default, the SDK will read as many barcodes as it can. If you know exactly the barcode count or the maximum count you want to read, use `expected_barcodes_count` to specify the count value to speed up the process.   

For example, to read two barcodes only, you can use the following code:   

```python
#...Initialization code
settings = reader.get_runtime_settings()
settings.expected_barcodes_count = 2
reader.update_runtime_settings(settings)
#...Decode and do something with the result
```

#### Specify a scan region

By default, the SDK will search the whole image for barcodes. This can lead to poor performance, especially when dealing with high-resolution images. If you know exactly where the barcode locates, use `region` to specify the barcode location.   

For example, to find the barcode located in the middle of the image, you can use the following code:   

```python
#...Initialization code
settings = reader.get_runtime_settings()
settings.region_left    = 25
settings.region_top     = 25
settings.region_right   = 75
settings.region_bottom  = 75
settings.region_measured_by_percentage   = 1
reader.update_runtime_settings(settings)
#...Decode and do something with the result
```

### Use A Template to Change Settings

Besides the option of using the PublicRuntimeSettings struct, the SDK also provides [`init_runtime_settings_with_string`](api-reference/BarcodeReader/parameter-and-runtime-settings-advanced.md#init_runtime_settings_with_string) and [`init_runtime_settings_with_file`](api-reference/BarcodeReader/parameter-and-runtime-settings-advanced.md#init_runtime_settings_with_file) APIs that enable you to use a template to control all the settings. With a template, instead of writing many codes to modify the settings, you can manage all the settings in a JSON file/string.

```python
#...Initialization code
error = reader.init_runtime_settings_with_file(json_file)
#...Decode and do something with the result
```

Below is a template for your reference. For more scanning settings guide, check out the [`Structure and Interfaces of Parameters`]({{ site.parameters }}structure-and-interfaces-of-parameters.html).

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
## How to Upgrade

### From version 8.0 to 8.x

`pip install dbr --upgrade`


### From version 7.x to 8.x

`pip install dbr --upgrade`

In v8.0, we introduced a new license tracking mechanism, <a href="https://www.dynamsoft.com/license-tracking/docs/about/index.html" target="_blank">License 2.0</a>. 

If you wish to use License 2.0, please refer to [this article](../../license-activation/set-full-license.md) to set the license.

After you upgraded your license to version 8.x:

Please download the samples via our <a href="https://github.com/Dynamsoft/python-barcode/tree/master/samples" target="_blank">Python GitHub Repository</a>. 
