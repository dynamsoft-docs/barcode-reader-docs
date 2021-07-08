---
layout: default-layout
title: Dynamsoft Barcode Reader C Language API Reference - Main Page
description: This is the main page of Dynamsoft Barcode Reader for C Language API Reference.
keywords: api reference, c
needAutoGenerateSidebar: true
needGenerateH3Content: true
---

# Dynamsoft Barcode Reader SDK - C API Reference
		
## Global Functions

### Initialize and Destroy
  
  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_CreateInstance`](methods/initialize-and-destroy.md#dbr_createinstance) | Create an instance of Dynamsoft Barcode Reader. |
  | [`DBR_DestroyInstance`](methods/initialize-and-destroy.md#dbr_destroyinstance) | Destroy the instance of Dynamsoft Barcode Reader. |


### Decode Functions

  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_DecodeFile`](methods/decode.md#dbr_decodefile) | Decode barcodes from a specified image file. |
  | [`DBR_DecodeFileInMemory`](methods/decode.md#dbr_decodefileinmemory) | Decode barcodes from an image file in memory. |
  | [`DBR_DecodeBuffer`](methods/decode.md#dbr_decodebuffer) | Decode barcodes from raw buffer. |
  | [`DBR_DecodeBase64String`](methods/decode.md#dbr_decodebase64string) | Decode barcodes from a base64 encoded string. |
  | [`DBR_DecodeDIB`](methods/decode.md#dbr_decodedib) | Decode barcode from a handle of device-independent bitmap (DIB). | 
  | [`DBR_InitIntermediateResult`](methods/decode.md#dbr_initintermediateresult) | Inits an intermediateResult struct with default values. |
  | [`DBR_DecodeIntermediateResults`](methods/decode.md#dbr_decodeintermediateresults) | Decodes barcode from intermediate results. |

### License Functions
   
  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_InitLicense`](methods/license.md#dbr_initlicense) | Read product key and activate the SDK. |
  | [`DBR_InitLicenseFromServer`](methods/license.md#dbr_initlicensefromserver) | Initialize license and connect to the specified server for online verification. |
  | [`DBR_InitLicenseFromLicenseContent`](methods/license.md#dbr_initlicensefromlicensecontent) | Initialize license from the license content on client machine for offline verification. |
  | [`DBR_OutputLicenseToString`](methods/license.md#dbr_outputlicensetostring) | Output the license content to a string from the license server. |
  | [`DBR_OutputLicenseToStringPtr`](methods/license.md#dbr_outputlicensetostringptr) | Output the license content to a string from the license server. |
  | [`DBR_FreeLicenseString`](methods/license.md#dbr_freelicensestring) | Free memory allocated for the license string. |
  | [`DBR_InitLTSConnectionParameters`](methods/license.md#dbr_initltsconnectionparameters) | Initializes a DM_LTSConnectionParameters struct with default values. |
  | [`DBR_InitLicenseFromLTS`](methods/license.md#dbr_initlicensefromlts) | Initializes the barcode reader license and connects to the specified server for online verification. |


### Basic Settings Functions
  
  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_SetModeArgument`](methods/parameter-and-runtime-settings-basic.md#dbr_setmodeargument) | Set argument value for the specified mode parameter. |
  | [`DBR_GetModeArgument`](methods/parameter-and-runtime-settings-basic.md#dbr_getmodeargument) | Get argument value for the specified mode parameter. |
  | [`DBR_GetRuntimeSettings`](methods/parameter-and-runtime-settings-basic.md#dbr_getruntimesettings) | Get current runtime settings. |
  | [`DBR_UpdateRuntimeSettings`](methods/parameter-and-runtime-settings-basic.md#dbr_updateruntimesettings) | Modify and update the current runtime settings. |
  | [`DBR_ResetRuntimeSettings`](methods/parameter-and-runtime-settings-basic.md#dbr_resetruntimesettings) | Reset runtime settings to default. |

### Advanced Settings Functions
  
  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_InitRuntimeSettingsWithFile`](methods/parameter-and-runtime-settings-advanced.md#dbr_initruntimesettingswithfile) | Initialize runtime settings with the settings in a given JSON file. |
  | [`DBR_InitRuntimeSettingsWithString`](methods/parameter-and-runtime-settings-advanced.md#dbr_initruntimesettingswithstring) | Initialize runtime settings with the settings in a given JSON string. |
  | [`DBR_AppendTplFileToRuntimeSettings`](methods/parameter-and-runtime-settings-advanced.md#dbr_appendtplfiletoruntimesettings) | Append a new template file to the current runtime settings. |
  | [`DBR_AppendTplStringToRuntimeSettings`](methods/parameter-and-runtime-settings-advanced.md#dbr_appendtplstringtoruntimesettings) | Append a new template string to the current runtime settings. |
  | [`DBR_GetParameterTemplateCount`](methods/parameter-and-runtime-settings-advanced.md#dbr_getparametertemplatecount) | Get the count of the parameter templates. |
  | [`DBR_GetParameterTemplateName`](methods/parameter-and-runtime-settings-advanced.md#dbr_getparametertemplatename) | Get the parameter template name by index. |
  | [`DBR_OutputSettingsToFile`](methods/parameter-and-runtime-settings-advanced.md#dbr_outputsettingstofile) | Output runtime settings to a settings file (JSON file). |
  | [`DBR_OutputSettingsToString`](methods/parameter-and-runtime-settings-advanced.md#dbr_outputsettingstostring) | Output runtime settings to a string. |
  | [`DBR_OutputSettingsToStringPtr`](methods/parameter-and-runtime-settings-advanced.md#dbr_outputsettingstostringptr) | Output runtime settings to a string. |
  | [`DBR_FreeSettingsString`](methods/parameter-and-runtime-settings-advanced.md#dbr_freesettingsstring) | Free memory allocated for runtime settings string. |


### Result Functions
   
  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_GetAllTextResults`](methods/result.md#dbr_getalltextresults) | Get all recognized barcode results.  |
  | [`DBR_FreeTextResults`](methods/result.md#dbr_freetextresults) | Free memory allocated for text results. |
  | [`DBR_GetIntermediateResults`](methods/result.md#dbr_getintermediateresults) | Get intermediate results. |
  | [`DBR_FreeIntermediateResults`](methods/result.md#dbr_freeintermediateresults) | Free memory allocated for the intermediate results. |


### Status Retrieval Functions
  
  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_GetErrorString`](methods/status-retrieval.md#dbr_geterrorstring) | Get error message by error code. |
  | [`DBR_GetVersion`](methods/status-retrieval.md#dbr_getversion) | Get version information of SDK. |


### Video Functions
#### Decode
   
  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_StartFrameDecoding`](methods/video.md#dbr_startframedecoding) | Decode barcodes from inner frame queue. |
  | [`DBR_StartFrameDecodingEx`](methods/video.md#dbr_startframedecodingex) | Decode barcodes from inner frame queue. |
  | [`DBR_AppendFrame`](methods/video.md#dbr_appendframe) | Append a frame image buffer to the inner frame queue. |
  | [`DBR_StopFrameDecoding`](methods/video.md#dbr_stopframedecoding) | Stop thread used for frame decoding. |

#### Parameter
   
  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_InitFrameDecodingParameters`](methods/video.md#dbr_initframedecodingparameters) | Initialize frame decoding parameter. |

#### Callback
   
  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_SetErrorCallback`](methods/video.md#dbr_seterrorcallback) | Set callback function to process errors generated during frame decoding. |
  | [`DBR_SetTextResultCallback`](methods/video.md#dbr_settextresultcallback) | Set callback function to process text results generated during frame decoding. |
  | [`DBR_SetIntermediateResultCallback`](methods/video.md#dbr_setintermediateresultcallback) | Set callback function to process intermediate results generated during frame decoding. |

#### Status retrieval
   
  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_GetLengthOfFrameQueue`](methods/video.md#dbr_getlengthofframequeue) | Get length of current inner frame queue. |
  

## Structs

 | Struct | Description |
 | ------ | ----------- |
 | [`AztecDetails`]({{ site.structs }}AztecDetails.html?src=c) | Stores the Aztec details. |
 | [`Contour`]({{ site.structs }}Contour.html?src=c) | Stores the contour information. |
 | [`DBRPoint`]({{ site.structs }}DBRPoint.html?src=c) | Stores an x- and y-coordinate pair in two-dimensional space. |
 | [`DataMatrixDetails`]({{ site.structs }}DataMatrixDetails.html?src=c) | Stores the DataMatrix details. |	
 | [`DM_LTSConnectionParameters`]({{ site.structs }}DMLTSConnectionParameters.html?src=c) | Defines a struct to configure the parameters to connect to license tracking server. |
 | [`ExtendedResult`]({{ site.structs }}ExtendedResult.html?src=c) | Stores the extended result. |
 | [`FrameDecodingParameters`]({{ site.structs }}FrameDecodingParameters.html?src=c) | Defines a struct to configure the frame decoding Parameters. |
 | [`FurtherModes`]({{ site.structs }}FurtherModes.html?src=c) | Stores the FurtherModes. |
 | [`ImageData`]({{ site.structs }}ImageData.html?src=c) | Stores the image data. |
 | [`IntermediateResult`]({{ site.structs }}IntermediateResult.html?src=c) | Stores the intermediate result. |
 | [`IntermediateResultArray`]({{ site.structs }}IntermediateResultArray.html?src=c) | Stores the intermediate result array. |
 | [`LineSegment`]({{ site.structs }}LineSegment.html?src=c) | Stores line segment data. |
 | [`LocalizationResult`]({{ site.structs }}LocalizationResult.html?src=c) | Stores the localization result. |
 | [`OneDCodeDetails`]({{ site.structs }}OneDCodeDetails.html?src=c) | Stores the OneD code details. |
 | [`PDF417Details`]({{ site.structs }}PDF417Details.html?src=c) | Stores the PDF417 details. |
 | [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html?src=c) | Defines a struct to configure the barcode reading runtime settings. |
 | [`QRCodeDetails`]({{ site.structs }}QRCodeDetails.html?src=c) | Stores the QRCode details. |
 | [`Quadrilateral`]({{ site.structs }}Quadrilateral.html?src=c) | Stores the quadrilateral.  |
 | [`RegionDefinition`]({{ site.structs }}RegionDefinition.html?src=c) | Stores the region information. |
 | [`RegionOfInterest`]({{ site.structs }}RegionOfInterest.html?src=c) | Stores the region of interest. |
 | [`SamplingImageData`]({{ site.structs }}SamplingImageData.html?src=c) | Stores the sampling image data.  |
 | [`TextResult`]({{ site.structs }}TextResult.html?src=c) | Stores the text result. |
 | [`TextResultArray`]({{ site.structs }}TextResultArray.html?src=c) | Stores the text result array. |

## Enumerations  

### Format Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`BarcodeFormat`]({{ site.enumerations }}format-enums.html?src=c#barcodeformat) | Describes the barcode types in BarcodeFormat group 1. |
  | [`BarcodeFormat_2`]({{ site.enumerations }}format-enums.html?src=c#barcodeformat_2) | Describes the barcode types in BarcodeFormat group 2. |

### Parameter Mode Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`BarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html?src=c#barcodecolourmode) | Describes the barcode colour mode. |
  | [`BarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html?src=c#barcodecomplementmode) | Describes the barcode complement mode. |
  | [`BinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html?src=c#binarizationmode) | Describes the binarization mode. |
  | [`ColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html?src=c#colourclusteringmode) | Describes the colour clustering mode. |
  | [`ColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html?src=c#colourconversionmode) | Describes the colour conversion mode. |
  | [`ConflictMode`]({{ site.enumerations }}parameter-mode-enums.html?src=c#conflictmode) | Describes the conflict mode. |
  | [`DeblurMode`]({{ site.enumerations }}parameter-mode-enums.html?src=c#deblurmode) | Describes the deblur mode. |
  | [`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html?src=c#deformationresistingmode) | Describes the deformation resisting mode. |
  | [`DPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html?src=c#dpmcodereadingmode) | Describes the DPM code reading mode. |
  | [`GrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html?src=c#grayscaletransformationmode) | Describes the grayscale transformation mode. |
  | [`ImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html?src=c#imagepreprocessingmode) | Describes the image preprocessing mode. |
  | [`LocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html?src=c#localizationmode) | Describes the localization mode. | 
  | [`PDFReadingMode`]({{ site.enumerations }}parameter-mode-enums.html?src=c#pdfreadingmode) | Describes the PDF reading mode. |
  | [`RegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html?src=c#regionpredetectionmode) | Describes the region predetection mode. |
  | [`ScaleUpMode`]({{ site.enumerations }}parameter-mode-enums.html?src=c#scaleupmode) | Describes the scale up mode. |
  | [`TerminatePhase`]({{ site.enumerations }}parameter-mode-enums.html?src=c#terminatephase) | Describes the terminate phase. |
  | [`TextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html?src=c#textfiltermode) | Describes the text filter mode. |
  | [`TextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html?src=c#texturedetectionmode) | Describes the texture detection mode. | 

### Result Related Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`IMResultDataType`]({{ site.enumerations }}result-enums.html?src=c#imresultdatatype) | Describes the intermediate result data type. |
  | [`IntermediateResultSavingMode`]({{ site.enumerations }}result-enums.html?src=c#intermediateresultsavingmode) | Describes the intermediate result saving mode. |
  | [`IntermediateResultType`]({{ site.enumerations }}result-enums.html?src=c#intermediateresulttype) | Describes the intermediate result type. |
  | [`ResultCoordinateType`]({{ site.enumerations }}result-enums.html?src=c#resultcoordinatetype) | Describes the result coordinate type. |
  | [`ResultType`]({{ site.enumerations }}result-enums.html?src=c#resulttype) | Describes the extended result type. |
  | [`TextResultOrderMode`]({{ site.enumerations }}result-enums.html?src=c#textresultordermode) | Describes the text result order mode. |

### Frame Decoding Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`ClarityCalculationMethod`]({{ site.enumerations }}frame-decoding-enums.html?src=c#claritycalculationmethod) | Describes the clarity calculation method. |
  | [`ClarityFilterMode`]({{ site.enumerations }}frame-decoding-enums.html?src=c#clarityfiltermode) | Describes the clarity filter mode. |
  
### Other Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`DM_ChargeWay`]({{ site.enumerations }}other-enums.html?src=c#dm_chargeway) | Describes the charge way. |
  | [`DM_DeploymentType`]({{ site.enumerations }}other-enums.html?src=c#dm_deploymenttype) | Describes the deployment type. |
  | [`DM_LicenseModule`]({{ site.enumerations }}other-enums.html?src=c#dm_licensemodule) | Describes Dynamsoft license modules. |
  | [`DM_UUIDGenerationMethod`]({{ site.enumerations }}other-enums.html?src=c#dm_uuidgenerationmethod) | Describes the UUID generation method. |
  | [`ImagePixelFormat`]({{ site.enumerations }}other-enums.html?src=c#imagepixelformat) | Describes the image pixel format. |
  | [`QRCodeErrorCorrectionLevel`]({{ site.enumerations }}other-enums.html?src=c#qrcodeerrorcorrectionlevel) | Describes the QR Code error correction level. |
  | [`Product`]({{ site.enumerations }}other-enums.html?src=c#product) | Describes Dynamsoft products. |


## Callbacks

  | Function | Description |
  |----------|-------------|
  | [`CB_Error`](function-pointer.md#cb_error) | Represents the function that will handle the error code returned by the SDK. |
  | [`CB_IntermediateResult`](function-pointer.md#cb_intermediateresult) | Represents the function that will handle the intermediate result array returned by the SDK. |
  | [`CB_TextResult`](function-pointer.md#cb_textresult) | Represents the function that will handle the text result array returned by the SDK. | 


