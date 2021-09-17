---
layout: default-layout
title: Dynamsoft Barcode Reader Python API Reference - BarcodeReader Parameter and Runtime Settings Basic Methods
description: This page shows BarcodeReader basic Runtime Settings methods of Dynamsoft Barcode Reader for Python SDK.
keywords: set_mode_argument, get_mode_argument, get_runtime_settings, update_runtime_settings, reset_runtime_settings, parameter and runtime settings basic methods, BarcodeReader, api reference, python
needAutoGenerateSidebar: true
---


# Python API Reference - BarcodeReader Parameter and Runtime Settings Basic Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`set_mode_argument`](#set_mode_argument) | Sets the optional argument for a specified mode in Modes parameters. |
  | [`get_mode_argument`](#get_mode_argument) | Gets the optional argument for a specified mode in Modes parameters.  |
  | [`get_runtime_settings`](#get_runtime_settings) | Get current runtime settings. |
  | [`update_runtime_settings`](#update_runtime_settings) | Update runtime settings with a given struct. |
  | [`reset_runtime_settings`](#reset_runtime_settings) | Resets all parameters to default values. |

  ---

## set_mode_argument

Sets the optional argument for a specified mode in Modes parameters. 

```python
BarcodeReader.set_mode_argument(modes_name, index, argument_name, argument_value)
```

### Parameters

- `[in]	modes_name` <*str*> : The mode(s) parameter name to set argument.  
- `[in]	index` <*int*> : The array index of modes parameter to indicate a specific mode.   
- `[in]	argument_name` <*str*> : The name of the argument to set.  
- `[in]	argument_value` <*str*> : The value of the argument to set.  

### Return value

`error` <*tuple*> : error_code = error[0], error_message = error[1], if error_code != EnumErrorCode.DBR_OK, you can get the detailed error message by error_message.

### Remark

Check follow link for available modes and arguments:

- [`AccompanyingTextRecognitionModes`]({{ site.parameters_reference }}accompanying-text-recognition-modes.html#accompanyingtextrecognitionmodes)
- [`BarcodeColourModes`]({{ site.parameters_reference }}barcode-colour-modes.html#barcodecolourmodes)
- [`BinarizationModes`]({{ site.parameters_reference }}binarization-modes.html#binarizationmodes)
- [`ColourClusteringModes`]({{ site.parameters_reference }}colour-clustering-modes.html#colourclusteringmodes)
- [`ColourConversionModes`]({{ site.parameters_reference }}colour-conversion-modes.html#colourconversionmodes)
- [`DeformationResistingModes`]({{ site.parameters_reference }}deformation-resisting-modes.html#deformationresistingmodes)
- [`ImagePreprocessingModes`]({{ site.parameters_reference }}image-preprocessing-modes.html#imagepreprocessingmodes)
- [`IntermediateResultSavingMode`]({{ site.parameters_reference }}intermediate-result-saving-mode.html#intermediateresultsavingmode)
- [`LocalizationModes`]({{ site.parameters_reference }}localization-modes.html#localizationmodes)
- [`RegionPredetectionModes`]({{ site.parameters_reference }}region-predetection-modes.html#regionpredetectionmodes)
- [`ScaleUpModes`]({{ site.parameters_reference }}scale-up-modes.html#scaleupmodes)
- [`TextAssistedCorrectionMode`]({{ site.parameters_reference }}text-assisted-correction-mode.html)
- [`TextFilterModes`]({{ site.parameters_reference }}text-filter-modes.html#textfiltermodes)
- [`TextureDetectionModes`]({{ site.parameters_reference }}texture-detection-modes.html#texturedetectionmodes) 

### Code Snippet

```python
from dbr import *
reader = BarcodeReader()

settings = reader.get_runtime_settings()
settings.binarization_modes[0] = EnumBinarizationMode.BM_LOCAL_BLOCK

try:
    reader.update_runtime_settings(settings)
    error = reader.set_mode_argument("BinarizationModes", 0, "EnableFillBinaryVacancy", "1")
    if error[0] != 0:
        print(error[1])
except BarcodeReaderError as e:
    print(e)
```

## get_mode_argument

Get argument value for the specified mode parameter.

```python
BarcodeReader.get_mode_argument(modes_name, index, argument_name)
```

### Parameters  

- `[in]	modes_name` <*str*> : The mode(s) parameter name to get argument.  
- `[in]	index` <*int*> : The array index of modes parameter to indicate a specific mode.   
- `[in]	argument_name` <*str*> : The name of the argument to get.  

### Return value

`argument_value` <*str*> : The value of the argument to get.

### Exception

[`BarcodeReaderError`](../class/BarcodeReaderError.md) : If error happens, this function will throw a BarcodeReaderError exception that can report the detailed error message.

### Remark

Check follow link for available modes and arguments:

- [`AccompanyingTextRecognitionModes`]({{ site.parameters_reference }}accompanying-text-recognition-modes.html#accompanyingtextrecognitionmodes)
- [`BarcodeColourModes`]({{ site.parameters_reference }}barcode-colour-modes.html#barcodecolourmodes)
- [`BinarizationModes`]({{ site.parameters_reference }}binarization-modes.html#binarizationmodes)
- [`ColourClusteringModes`]({{ site.parameters_reference }}colour-clustering-modes.html#colourclusteringmodes)
- [`ColourConversionModes`]({{ site.parameters_reference }}colour-conversion-modes.html#colourconversionmodes)
- [`DeformationResistingModes`]({{ site.parameters_reference }}deformation-resisting-modes.html#deformationresistingmodes)
- [`ImagePreprocessingModes`]({{ site.parameters_reference }}image-preprocessing-modes.html#imagepreprocessingmodes)
- [`IntermediateResultSavingMode`]({{ site.parameters_reference }}intermediate-result-saving-mode.html#intermediateresultsavingmode)
- [`LocalizationModes`]({{ site.parameters_reference }}localization-modes.html#localizationmodes)
- [`RegionPredetectionModes`]({{ site.parameters_reference }}region-predetection-modes.html#regionpredetectionmodes)
- [`ScaleUpModes`]({{ site.parameters_reference }}scale-up-modes.html#scaleupmodes)
- [`TextAssistedCorrectionMode`]({{ site.parameters_reference }}text-assisted-correction-mode.html)
- [`TextFilterModes`]({{ site.parameters_reference }}text-filter-modes.html#textfiltermodes)
- [`TextureDetectionModes`]({{ site.parameters_reference }}texture-detection-modes.html#texturedetectionmodes)

### Code Snippet

```python
from dbr import *
reader = BarcodeReader()

settings = reader.get_runtime_settings()
settings.binarization_modes[0] = EnumBinarizationMode.BM_LOCAL_BLOCK
try:
    reader.update_runtime_settings(settings)
    error = reader.set_mode_argument("BinarizationModes", 0, "EnableFillBinaryVacancy", "1")

    value = reader.get_mode_argument("BinarizationModes", 0, "EnableFillBinaryVacancy")
    print(value)
except BarcodeReaderError as e:
    print(e)
```

## get_runtime_settings

Gets current settings and save it into a PublicRuntimeSetting object. 

```python
BarcodeReader.get_runtime_settings()
```

### Return value

`runtime_settings` <*class PublicRuntimeSetting*> : The PublicRuntimeSetting object of current runtime settings.

### Code Snippet

```python
from dbr import *
reader = BarcodeReader()

settings = reader.get_runtime_settings()
print(settings.barcode_format_ids)
print(settings.excepted_barcodes_count)
```

## update_runtime_settings

Update runtime settings with a given PublicRuntimeSetting object. 

```python
BarcodeReader.update_runtime_settings(settings)
```

### Parameters

`[in]	settings` <*class PublicRuntimeSetting*> : a PublicRuntimeSetting object.    
 
### Exception

[`BarcodeReaderError`](../class/BarcodeReaderError.md) : If error happens, this function will throw a BarcodeReaderError exception that can report the detailed error message.

### Code Snippet

```python
from dbr import *
reader = BarcodeReader()

settings = reader.get_runtime_settings()
settings.barcode_format_ids = EnumBarcodeFormat.BF_ONED
settings.excepted_barcodes_count = 4
try:
    reader.update_runtime_settings(settings)
    changed_settings = reader.get_runtime_settings()
    print(changed_settings.barcode_format_ids)
    print(changed_settings.excepted_barcodes_count)
except BarcodeReaderError as e:
    print(e)
```

## reset_runtime_settings

Reset all parameters to default values.

```python
BarcodeReader.reset_runtime_settings() 
```

### Code Snippet

```python
from dbr import *
reader = BarcodeReader()

settings = reader.get_runtime_settings()
settings.barcode_format_ids = EnumBarcodeFormat.BF_ONED
settings.excepted_barcodes_count = 4
try:
    reader.update_runtime_settings(settings)
    changed_settings = reader.get_runtime_settings()
    print(changed_settings.barcode_format_ids)
    print(changed_settings.excepted_barcodes_count)

    reader.reset_runtime_settings()
    reset_settings = reader.get_runtime_settings()
    print(reset_settings.barcode_format_ids)
    print(reset_settings.excepted_barcodes_count)
except BarcodeReaderError as e:
    print(e)
```
