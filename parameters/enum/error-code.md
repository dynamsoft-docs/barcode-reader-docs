---
layout: default-layout
title: Dynamsoft Barcode Reader Enumerations - Error Code
description: This article shows Error Code of Dynamsoft Barcode Reader.
keywords: error code, enumeration
needAutoGenerateSidebar: false
---

# Dynamsoft Barcode Reader - Error Code  
  
## Error code common to all programming languages

  | Erorr Code (except ObjC/Swift) | Erorr Code (ObjC/Swift) | Value | Description |
  |--------------------------------|-------------------------|-------|-------------|
  | `DBR_OK` | `EnumErrorCode_OK` | 0 | Successful. |
  | `DBRERR_UNKNOWN` | `EnumErrorCode_Unknown ` | -10000 | Unknown error. |
  | `DBRERR_NO_MEMORY` | `EnumErrorCode_No_Memory`| -10001 | Not enough memory to perform the operation. |
  | `DBRERR_NULL_POINTER` | `EnumErrorCode_Null_Pointer` | -10002 | Null pointer. |
  | `DBRERR_LICENSE_INVALID` | `EnumErrorCode_License_Invalid` | -10003 | The license is invalid. |
  | `DBRERR_LICENSE_EXPIRED` | `EnumErrorCode_License_Expired` | -10004 | The license has expired. |
  | `DBRERR_FILE_NOT_FOUND` | `EnumErrorCode_File_Not_Found` | -10005 | The file is not found. |
  | `DBRERR_FILETYPE_NOT_SUPPORTED` | `EnumErrorCode_Filetype_Not_Supported` | -10006 | The file type is not supported. |
  | `DBRERR_BPP_NOT_SUPPORTED` | `EnumErrorCode_BPP_Not_Supported` | -10007 | The BPP (Bits Per Pixel) is not supported. |
  | `DBRERR_INDEX_INVALID` | `EnumErrorCode_Index_Invalid` | -10008 | The index is invalid. |
  | `DBRERR_BARCODE_FORMAT_INVALID` | `EnumErrorCode_Barcode_Format_Invalid` | -10009 | The barcode format is invalid. |
  | `DBRERR_CUSTOM_REGION_INVALID` | `EnumErrorCode_Custom_Region_Invalid` | -10010 | The input region value parameter is invalid. |
  | `DBRERR_MAX_BARCODE_NUMBER_INVALID` | `EnumErrorCode_Max_Barcode_Number_Invalid` | -10011 | The maximum barcode number is invalid. |
  | `DBRERR_IMAGE_READ_FAILED` | `EnumErrorCode_Image_Read_Failed` | -10012 | Failed to read the image. |
  | `DBRERR_TIFF_READ_FAILED` | `EnumErrorCode_TIFF_Read_Failed` | -10013 | Failed to read the TIFF image. |
  | `DBRERR_QR_LICENSE_INVALID` |	`EnumErrorCode_QR_License_Invalid` | -10016 | The QR Code license is invalid. | 
  | `DBRERR_1D_LICENSE_INVALID` | `EnumErrorCode_1D_License_Invalid` | -10017 | The 1D Barcode license is invalid. |
  | `DBRERR_DIB_BUFFER_INVALID` | `EnumErrorCode_DIB_Buffer_Invalid` | -10018 | The DIB (Device-Independent Bitmaps) buffer is invalid. |
  | `DBRERR_PDF417_LICENSE_INVALID` | `EnumErrorCode_PDF417_License_Invalid` | -10019 | The PDF417 license is invalid. |
  | `DBRERR_DATAMATRIX_LICENSE_INVALID` | `EnumErrorCode_Datamatrix_License_Invalid` | -10020 | The DATAMATRIX license is invalid. |
  | `DBRERR_PDF_READ_FAILED` | `EnumErrorCode_PDF_Read_Failed` | -10021 | Failed to read the PDF file. |
  | `DBRERR_PDF_DLL_MISSING` | `EnumErrorCode_PDF_DLL_Missing` | -10022 | The PDF DLL is missing. |
  | `DBRERR_PAGE_NUMBER_INVALID` | `EnumErrorCode_Page_Number_Invalid` | -10023 | The page number is invalid. |
  | `DBRERR_CUSTOM_SIZE_INVALID` | `EnumErrorCode_Custom_Size_Invalid` | -10024 | The custom size is invalid. |
  | `DBRERR_CUSTOM_MODULESIZE_INVALID` | `EnumErrorCode_Custom_Modulesize_Invalid` | -10025 | The custom module size is invalid. |
  | `DBRERR_RECOGNITION_TIMEOUT` | `EnumErrorCode_Recognition_Timeout` | -10026 | Recognition timeout. |
  | `DBRERR_JSON_PARSE_FAILED` | `EnumErrorCode_Json_Parse_Failed` | -10030 | Failed to parse JSON string. |
  | `DBRERR_JSON_TYPE_INVALID` | `EnumErrorCode_Json_Type_Invalid` | -10031 | The value type is invalid. |
  | `DBRERR_JSON_KEY_INVALID` | `EnumErrorCode_Json_Key_Invalid` | -10032 | The key is invalid. |
  | `DBRERR_JSON_VALUE_INVALID` | `EnumErrorCode_Json_Value_Invalid` | -10033 | The value is invalid or out of range. |
  | `DBRERR_JSON_NAME_KEY_MISSING` | `EnumErrorCode_Json_Name_Key_Missing` | -10034 | The mandatory key "Name" is missing. |
  | `DBRERR_JSON_NAME_VALUE_DUPLICATED` | `EnumErrorCode_Json_Name_Value_Duplicated` | -10035 | The value of the key "Name" is duplicated. |
  | `DBRERR_TEMPLATE_NAME_INVALID` | `EnumErrorCode_Template_Name_Invalid` | -10036 | The template name is invalid. |
  | `DBRERR_JSON_NAME_REFERENCE_INVALID` | `EnumErrorCode_Json_Name_Reference_Invalid` | -10037 | The name reference is invalid. |
  | `DBRERR_PARAMETER_VALUE_INVALID` | `EnumErrorCode_Parameter_Value_Invalid` | -10038 | The parameter value is invalid or out of range. |
  | `DBRERR_DOMAIN_NOT_MATCHED` | `EnumErrorCode_Domain_Not_Matched` | -10039 | The domain of your current site does not match the domain bound in the current product key. |
  | `DBRERR_RESERVEDINFO_NOT_MATCHED` |	`EnumErrorCode_ReservedInfo_Not_Matched` | -10040 | The reserved info does not match the reserved info bound in the current product key. |
  | `DBRERR_AZTEC_LICENSE_INVALID` | `EnumErrorCode_AZTEC_License_Invalid` | -10041	 | The AZTEC license is invalid. |
  | `DBRERR_LICENSE_DLL_MISSING` | `EnumErrorCode_License_Dll_Missing` | -10042 | The License DLL is missing. |
  | `DBRERR_LICENSEKEY_NOT_MATCHED` | `EnumErrorCode_Licensekey_Not_Matched` | -10043 | The license key does not match the license content. |
  | `DBRERR_REQUESTED_FAILED` | `EnumErrorCode_Requested_Failed` | -10044 | Failed to request the license content. |
  | `DBRERR_LICENSE_INIT_FAILED` | `EnumErrorCode_License_Init_Failed` | -10045 | Failed to init the license. |
  | `DBRERR_PATCHCODE_LICENSE_INVALID` | `EnumErrorCode_Patchcode_License_Invalid` | -10046 | The Patchcode license is invalid. |
  | `DBRERR_POSTALCODE_LICENSE_INVALID` | `EnumErrorCode_Postalcode_License_Invalid` | -10047 | The Postal code license is invalid. |
  | `DBRERR_DPM_LICENSE_INVALID` | `EnumErrorCode_DPM_License_Invalid` | -10048 | The DPM license is invalid. |
  | `DBRERR_FRAME_DECODING_THREAD_EXISTS` | `EnumErrorCode_Frame_Decoding_Thread_Exists` | -10049 | The frame decoding thread already exists. |
  | `DBRERR_STOP_DECODING_THREAD_FAILED` | `EnumErrorCode_Stop_Decoding_Thread_Failed` | -10050 | Failed to stop the frame decoding thread. |
  | `DBRERR_SET_MODE_ARGUMENT_ERROR` | `EnumErrorCode_Set_Mode_Argument_Error` | -10051 | Failed to set mode's argument. |
  | `DBRERR_LICENSE_CONTENT_INVALID` | `EnumErrorCode_License_Content_Invalid` | -10052 | The license content is invalid. |
  | `DBRERR_LICENSE_KEY_INVALID` | `EnumErrorCode_License_Key_Invalid` | -10053 | The license key is invalid. |
  | `DBRERR_LICENSE_DEVICE_RUNS_OUT` | `EnumErrorCode_License_Device_Runs_Out` | -10054 | The device number in the license key runs out. |
  | `DBRERR_GET_MODE_ARGUMENT_ERROR` | `EnumErrorCode_GET_MODE_ARGUMENT_ERROR` | -10055 | Failed to get mode's argument. |
  | `DBRERR_IRT_LICENSE_INVALID` | `EnumErrorCode_IRT_LICENSE_INVALID` | -10056 | The Intermediate Result Types license is invalid. |
  | `DBRERR_MAXICODE_LICENSE_INVALID` | `EnumErrorCode_MAXICODE_LICENSE_INVALID` | -10057 | The Maxicode license is invalid. |
  | `DBRERR_GS1_DATABAR_LICENSE_INVALID` | `EnumErrorCode_GS1_DATABAR_LICENSE_INVALID` | -10058 | The GS1 Databar license is invalid. |
  | `DBRERR_GS1_COMPOSITE_LICENSE_INVALID` | `EnumErrorCode_GS1_COMPOSITE_LICENSE_INVALID` | -10059 | The GS1 Composite code license is invalid. |
  | `DBRERR_PANORAMA_LICENSE_INVALID` | `EnumErrorCode_PANORAMA_LICENSE_INVALID` | -10060 | The panorama license is invalid. |
  | `DBRERR_DOTCODE_LICENSE_INVALID` | `EnumErrorCode_DOTCODE_LICENSE_INVALID` | -10061 | The DotCode license is invalid. |


## Error code for specific programming languages  

### Java/Android/JavaScript

  | Erorr Code | Value | Description |
  |------------|-------|-------------|
  | `DBR_SYSTEM_EXCEPTION` | 1 | System exception. |

### .Net

  | Erorr Code | Value | Description |
  |------------|-------|-------------|
  | `DBR_SYSTEM_EXCEPTION` | 1 | System exception. |
  | `DBRERR_LOAD_MODULE_DLL_FAILED` | 2 | Failed to load module dll. |
