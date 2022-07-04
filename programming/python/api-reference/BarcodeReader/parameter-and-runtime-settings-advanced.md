---
layout: default-layout
title: Dynamsoft Barcode Reader Python API Reference - Advanced Settings Methods
description: This page shows advanced Runtime Settings methods of Dynamsoft Barcode Reader for Python SDK.
keywords: init_runtime_settings_with_file, init_runtime_settings_with_string, append_template_file_to_runtime_settings, append_template_string_to_runtime_settings, get_all_template_names, output_settings_to_json_file, output_settings_to_json_string, Advanced Settings Methods, BarcodeReader, api reference, python
needAutoGenerateSidebar: true
---

# Advanced Settings Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`init_runtime_settings_with_file`](#init_runtime_settings_with_file)  | Initializes runtime settings with the settings in a given JSON file. |
  | [`init_runtime_settings_with_string`](#init_runtime_settings_with_string) | Initializes runtime settings with the settings in a given JSON string. |
  | [`append_template_file_to_runtime_settings`](#append_template_file_to_runtime_settings) | Appends a new template file to the current runtime settings. |
  | [`append_template_string_to_runtime_settings`](#append_template_string_to_runtime_settings) | Appends a new template string to the current runtime settings. |
  | [`get_all_template_names`](#get_all_template_names) | Gets the parameter templates name array. |
  | [`output_settings_to_json_file`](#output_settings_to_json_file) | Outputs runtime settings to a settings file (JSON file). |
  | [`output_settings_to_json_string`](#output_settings_to_json_string) | Outputs runtime settings to a string. |


## init_runtime_settings_with_file

Initialize runtime settings with the settings in a given JSON file.

```python
BarcodeReader.init_runtime_settings_with_file(json_file, conflict_mode=EnumConflictMode.CM_OVERWRITE)
```

**Parameters**  

`[in]	json_file` <*str*> : The path of the settings file.  
`[in]	conflict_mode` <*optional*><*class EnumConflictMode*> : The parameter setting mode, which decides to inherit parameters from previous template setting or overwrite previous settings and replace by new template.   

**Return Value**  

`error` <*tuple*> : error_code = error[0], error_message = error[1], if error_code != EnumErrorCode.DBR_OK, you can get the detailed error message by error_message.

**Code Snippet**  

```python
from dbr import *
reader = BarcodeReader()

error = reader.init_runtime_settings_with_file(r"C:\Program Files (x86)\Dynamsoft\{Version number}\Templates\RuntimeSettings.json")

if error[0] != 0:
    print(error[1])
```

## init_runtime_settings_with_string

Initialize runtime settings with the settings in given JSON string. 

```python
BarcodeReader.init_runtime_settings_with_string(json_string, conflict_mode=EnumConflictMode.CM_OVERWRITE)
```

**Parameters**  

`[in]	json_string` <*str*> : A JSON string that represents the content of the settings.  
`[in]	conflict_mode` <*optional*><*class EnumConflictMode*> : The parameter setting mode, which decides to inherit parameters from previous template setting or overwrite previous settings and replace by new template.    

**Return Value**  

`error` <*tuple*> : error_code = error[0], error_message = error[1], if error_code != EnumErrorCode.DBR_OK, you can get the detailed error message by error_message.

**Code Snippet**  

```python
from dbr import *
reader = BarcodeReader()

error = reader.init_runtime_settings_with_string('{"Version":"3.0", "ImageParameter":{"Name":"IP1", "BarcodeFormatIds":["BF_QR_CODE"], "ExpectedBarcodesCount":10}}')

if error[0] != 0:
    print(error[1])
```

## append_template_file_to_runtime_settings

Append a new template file to the current runtime settings.

```python
BarcodeReader.append_template_file_to_runtime_settings(json_file, conflict_mode)
```   
   
**Parameters**  
`[in]	json_file` <*str*> : A JSON template file's path.  
`[in]	conflict_mode` <*class EnumConflictMode*> : The parameter setting mode, which decides to inherit parameters from previous template setting or overwrite previous settings and replace by new template. 

**Return Value**  
`error` <*tuple*> : error_code = error[0], error_message = error[1], if error_code != EnumErrorCode.DBR_OK, you can get the detailed error message by error_message.

**Code Snippet**  
```python
from dbr import *
reader = BarcodeReader()

error = reader.init_runtime_settings_with_file(r"C:\Program Files (x86)\Dynamsoft\{Version number}\Templates\RuntimeSettings.json")

if error[0] != 0:
    print(error[1])

error = reader.append_template_file_to_runtime_settings(r"C:\Program Files (x86)\Dynamsoft\{Version number}\Templates\RuntimeSettings_2.json", EnumConflictMode.CM_OVERWRITE)

if error[0] != 0:
    print(error[1])
```




## append_template_string_to_runtime_settings

Append a new template string to the current runtime settings.

```python
BarcodeReader.append_template_string_to_runtime_settings(json_string, conflict_mode) 
```

**Parameters**  

`[in]	json_string` <*str*> : A JSON string that represents the content of the settings.   
`[in]	conflict_mode` <*class EnumConflictMode*> : The parameter setting mode, which decides to inherit parameters from previous template setting or overwrite previous settings and replace by new template. 

**Return Value**  

`error` <*tuple*> : error_code = error[0], error_message = error[1], if error_code != EnumErrorCode.DBR_OK, you can get the detailed error message by error_message.

**Code Snippet**  

```python
from dbr import *
reader = BarcodeReader()

error = reader.init_runtime_settings_with_string('{"Version":"3.0", "ImageParameter":{"Name":"IP1", "BarcodeFormatIds":["BF_QR_CODE"], "ExpectedBarcodesCount":10}}')

if error[0] != 0:
    print(error[1])
  
error = reader.append_template_string_to_runtime_settings('{"Version":"3.0", "ImageParameter":{"Name":"IP2", "BarcodeFormatIds":["BF_ONED"], "ExpectedBarcodesCount":10}}', EnumConflictMode.CM_OVERWRITE)

if error[0] != 0:
    print(error[1])
```

## get_all_template_names

Gets all parameter template names. 

```python
BarcodeReader.get_all_template_names()
```  

**Return Value**  

`template_names` <*list[str]*> : all parameter template names

**Code Snippet**  

```python
from dbr import *
reader = BarcodeReader()

error = reader.init_runtime_settings_with_string('{"Version":"3.0", "ImageParameter":{"Name":"IP1", "BarcodeFormatIds":["BF_QR_CODE"], "ExpectedBarcodesCount":10}}')

if error[0] != 0:
    print(error[1])
  
error = reader.append_template_string_to_runtime_settings('{"Version":"3.0", "ImageParameter":{"Name":"IP2", "BarcodeFormatIds":["BF_ONED"], "ExpectedBarcodesCount":10}}', EnumConflictMode.CM_OVERWRITE)

if error[0] != 0:
    print(error[1])

template_names = reader.get_all_template_names()
print('There have {0} templates.'.format(len(template_names)))
for i, template_name in range(len(template_names)), template_names:
    print("{0} : {1}".format(i+1, template_name))
```

## output_settings_to_json_file

Output runtime settings to a settings file (JSON file).

```python
BarcodeReader.output_settings_to_json_file(save_file_path)
```

**Parameters**  

`[in]	save_file_path` <*str*> : The path of the output file which stores current settings.   

**Return Value**  

`error` <*tuple*> : error_code = error[0], error_message = error[1], if error_code != EnumErrorCode.DBR_OK, you can get the detailed error message by error_message.

**Code Snippet**  

```python
from dbr import *
reader = BarcodeReader()

error = reader.init_runtime_settings_with_string('{"Version":"3.0", "ImageParameter":{"Name":"IP1", "BarcodeFormatIds":["BF_QR_CODE"], "ExpectedBarcodesCount":10}}')

if error[0] != 0:
    print(error[1])
else:
    error = reader.output_settings_to_json_file(r'template_output.json')
```

## output_settings_to_json_string

Output runtime settings to a string.

```python
BarcodeReader.output_settings_to_json_string()
```

**Return Value**  

`settings_string` <*str*> : The output string which stores the contents of current settings.

**Code Snippet**  

```python
from dbr import *
reader = BarcodeReader()

error = reader.init_runtime_settings_with_string('{"Version":"3.0", "ImageParameter":{"Name":"IP1", "BarcodeFormatIds":["BF_QR_CODE"], "ExpectedBarcodesCount":10}}')

if error[0] != 0:
    print(error[1])
else:
    json_output = reader.output_settings_to_json_string()
    print(json_output)
```
