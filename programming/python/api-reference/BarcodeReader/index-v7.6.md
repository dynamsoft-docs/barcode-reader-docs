---
layout: default-layout
title: Dynamsoft Barcode Reader Python API Reference - BarcodeReader Methods
description: This page shows BarcodeReader Methods of Dynamsoft Barcode Reader for Python SDK.
keywords: methods, BarcodeReader, api reference, python
needAutoGenerateSidebar: false
breadcrumbText: BarcodeReader Methods
---

# Dynamsoft Barcode Reader SDK - Python BarcodeReader Methods


## Constructor and Destructor
   
  | Method               | Description |
  |----------------------|-------------|
  | [`BarcodeReader`](constructor-and-destructor.md#barcodereader) | Constructor of `BarcodeReader` object.|

## Decode
   
  | Method               | Description |
  |----------------------|-------------|
  | [`decode_file`](decode.md#decode_file) | Decodes barcodes from a specified image file. |
  | [`decode_buffer`](decode.md#decode_buffer) | Decodes barcodes from the memory buffer containing image pixels in defined format.  |
  | [`decode_file_stream`](decode.md#decode_file_stream) | Decodes barcodes from an image file in memory. |
  | [`decode_buffer_manually`](decode.md#decode_buffer_manually) | Decodes barcodes from the memory buffer containing image pixels in defined format. |

## Parameter and Runtime Settings

### Basic
   
  | Method               | Description |
  |----------------------|-------------|
  | [`set_mode_argument`](parameter-and-runtime-settings-basic.md#set_mode_argument) | Sets the optional argument for a specified mode in Modes parameters. |
  | [`get_mode_argument`](parameter-and-runtime-settings-basic.md#get_mode_argument) | Gets the optional argument for a specified mode in Modes parameters.  |
  | [`get_runtime_settings`](parameter-and-runtime-settings-basic.md#get_runtime_settings) | Gets current runtime settings. |
  | [`update_runtime_settings`](parameter-and-runtime-settings-basic.md#update_runtime_settings) | Update runtime settings with a given struct. |
  | [`reset_runtime_settings`](parameter-and-runtime-settings-basic.md#reset_runtime_settings) | Resets all parameters to default values. |

### Advanced
  
  | Method               | Description |
  |----------------------|-------------|
  | [`init_runtime_settings_with_file`](parameter-and-runtime-settings-advanced.md#init_runtime_settings_with_file)  | Initializes runtime settings with the settings in a given JSON file. |
  | [`init_runtime_settings_with_string`](parameter-and-runtime-settings-advanced.md#init_runtime_settings_with_string) | Initializes runtime settings with the settings in a given JSON string. |
  | [`append_template_file_to_runtime_settings`](parameter-and-runtime-settings-advanced.md#append_template_file_to_runtime_settings) | Appends a new template file to the current runtime settings. |
  | [`append_template_string_to_runtime_settings`](parameter-and-runtime-settings-advanced.md#append_template_string_to_runtime_settings) | Appends a new template string to the current runtime settings. |
  | [`get_all_template_names`](parameter-and-runtime-settings-advanced.md#get_all_template_names) | Gets the parameter templates name array. |
  | [`output_settings_to_json_file`](parameter-and-runtime-settings-advanced.md#output_settings_to_json_file) | Outputs runtime settings to a settings file (JSON file). |
  | [`output_settings_to_json_string`](parameter-and-runtime-settings-advanced.md#output_settings_to_json_string) | Outputs runtime settings to a string. |

## License
  
  | Method               | Description |
  |----------------------|-------------|
  | [`init_license`](license.md#init_license) | Reads product key and activates the SDK.  |
  | [`init_license_from_server`](license.md#init_license_from_server) | Initializes license and connect to the specified server for online verification. |
  | [`init_license_from_license_content`](license.md#init_license_from_license_content) | Initializes license from the license content on client machine for offline verification. |
  | [`output_license_to_string`](license.md#output_license_to_string) | Outputs the license content as an encrypted string from the license server to be used for offline license verification.|

## Video

### Decode
    
   | Method               | Description |
   |----------------------|-------------|
   | [`start_video_mode`](video.md#start_video_mode) | Starts a new thread to decode barcodes from the inner frame queue. |
   | [`append_video_frame`](video.md#append_video_frame) | Appends a frame image buffer to the inner frame queue. |
   | [`stop_video_mode`](video.md#stop_video_mode) | Stops the frame decoding thread created by start_video_mode(). |

### Parameter
   
   | Method               | Description |
   |----------------------|-------------|
   | [`init_frame_decoding_parameters`](video.md#init_frame_decoding_parameters) | Initializes frame decoding parameters. |


### Status retrieval
   
   | Method               | Description |
   |----------------------|-------------|
   | [`get_length_of_frame_queue`](video.md#get_length_of_frame_queue) | Gets length of current inner frame queue. |

## `BarcodeReader` Attributes
  
  | Attribute            | Description |
  |----------------------|-------------|
  | `version`  | dbr-python version |
  | `dbr_version`  | Dynamsoft Barcode Reader version |
