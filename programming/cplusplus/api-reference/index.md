---
layout: default-layout
title: Dynamsoft Barcode Reader C++ API Reference - Main Page
description: This is the main page of Dynamsoft Barcode Reader for C++ API Reference.
keywords: api reference, c++
needAutoGenerateSidebar: true
needGenerateH3Content: true
---

# C++ Language API Reference

## CBarcodeReader class
### Constructor and Destructor
   
  | Method               | Description |
  |----------------------|-------------|
  | [`CBarcodeReader`](cbarcodereader-methods/constructor-and-destructor.md#cbarcodereader) | Default constructor of `CBarcodeReader` object.|
  | [`~CBarcodeReader`](cbarcodereader-methods/constructor-and-destructor.md#~cbarcodereader) | Destructor of `CBarcodeReader` object.|
      

### License Methods
  
  | Method               | Description |
  |----------------------|-------------|
  | [`InitLicense`](cbarcodereader-methods/license.md#initlicense) | Initializes license key and activate the SDK. |
  | [`GetIdleInstancesCount`](cbarcodereader-methods/license.md#getidleinstancescount) | Gets available instances count when charging by concurrent instances count. |
  | [`SetDeviceFriendlyName`](cbarcodereader-methods/license.md#setdevicefriendlyname) | Sets a human-readable name that identifies the device. |
  | [`InitLicenseFromServer`](cbarcodereader-methods/license.md#initlicensefromserver) | `Deprecated` |
  | [`InitLicenseFromLicenseContent`](cbarcodereader-methods/license.md#initlicensefromlicensecontent) | `Deprecated` |
  | [`OutputLicenseToString`](cbarcodereader-methods/license.md#outputlicensetostring) | `Deprecated` |
  | [`OutputLicenseToStringPtr`](cbarcodereader-methods/license.md#outputlicensetostringptr) | `Deprecated` |
  | [`FreeLicenseString`](cbarcodereader-methods/license.md#freelicensestring) | `Deprecated` |
  | [`InitDLSConnectionParameters`](cbarcodereader-methods/license.md#initdlsconnectionparameters) | `Deprecated` |
  | [`InitLicenseFromDLS`](cbarcodereader-methods/license.md#initlicensefromdls) | `Deprecated` |
  | [`InitLTSConnectionParameters`](cbarcodereader-methods/license.md#initltsconnectionparameters) | `Deprecated` |
  | [`InitLicenseFromLTS`](cbarcodereader-methods/license.md#initlicensefromlts) | `Deprecated` |
   

### Decode Methods
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DecodeFile`](cbarcodereader-methods/decode.md#decodefile) | Decode barcodes from a specified image file. |
  | [`DecodeFileInMemory`](cbarcodereader-methods/decode.md#decodefileinmemory) | Decode barcodes from an image file in memory. |
  | [`DecodeBuffer`](cbarcodereader-methods/decode.md#decodebuffer) | Decode barcodes from raw buffer. |
  | [`DecodeBase64String`](cbarcodereader-methods/decode.md#decodebase64string) | Decode barcodes from a base64 encoded string. |
  | [`DecodeDIB`](cbarcodereader-methods/decode.md#decodedib) | Decode barcode from a handle of device-independent bitmap (DIB). |
  | [`InitIntermediateResult`](cbarcodereader-methods/decode.md#initintermediateresult) | Inits an intermediateResult struct with default values. |
  | [`DecodeIntermediateResults`](cbarcodereader-methods/decode.md#decodeintermediateresults) | Decodes barcode from intermediate results. |
      
### Basic Settings Methods
   
  | Method               | Description |
  |----------------------|-------------|
  | [`SetModeArgument`](cbarcodereader-methods/parameter-and-runtime-settings-basic.md#setmodeargument) | Set argument value for the specified mode parameter. |
  | [`GetModeArgument`](cbarcodereader-methods/parameter-and-runtime-settings-basic.md#getmodeargument) | Get argument value for the specified mode parameter. |
  | [`GetRuntimeSettings`](cbarcodereader-methods/parameter-and-runtime-settings-basic.md#getruntimesettings) | Get current runtime settings. |
  | [`UpdateRuntimeSettings`](cbarcodereader-methods/parameter-and-runtime-settings-basic.md#updateruntimesettings) | Modify and update the current runtime settings. |
  | [`ResetRuntimeSettings`](cbarcodereader-methods/parameter-and-runtime-settings-basic.md#resetruntimesettings) | Reset runtime settings to default. |

### Advanced Settings Methods
  
  | Method               | Description |
  |----------------------|-------------|
  | [`InitRuntimeSettingsWithFile`](cbarcodereader-methods/parameter-and-runtime-settings-advanced.md#initruntimesettingswithfile)  | Initialize runtime settings with the settings in a given JSON file. |
  | [`InitRuntimeSettingsWithString`](cbarcodereader-methods/parameter-and-runtime-settings-advanced.md#initruntimesettingswithstring) | Initialize runtime settings with the settings in a given JSON string. |
  | [`AppendTplFileToRuntimeSettings`](cbarcodereader-methods/parameter-and-runtime-settings-advanced.md#appendtplfiletoruntimesettings) | Append a new template file to the current runtime settings. |
  | [`AppendTplStringToRuntimeSettings`](cbarcodereader-methods/parameter-and-runtime-settings-advanced.md#appendtplstringtoruntimesettings) | Append a new template string to the current runtime settings. |
  | [`GetParameterTemplateCount`](cbarcodereader-methods/parameter-and-runtime-settings-advanced.md#getparametertemplatecount) | Get the count of the parameter templates. |
  | [`GetParameterTemplateName`](cbarcodereader-methods/parameter-and-runtime-settings-advanced.md#getparametertemplatename) | Get the parameter template name by index. |
  | [`OutputSettingsToFile`](cbarcodereader-methods/parameter-and-runtime-settings-advanced.md#outputsettingstofile) | Output runtime settings to a settings file (JSON file). |
  | [`OutputSettingsToString`](cbarcodereader-methods/parameter-and-runtime-settings-advanced.md#outputsettingstostring) | Output runtime settings to a string. |
  | [`OutputSettingsToStringPtr`](cbarcodereader-methods/parameter-and-runtime-settings-advanced.md#outputsettingstostringptr) | Output runtime settings to a string. |
  | [`FreeSettingsString`](cbarcodereader-methods/parameter-and-runtime-settings-advanced.md#freesettingsstring) | Free memory allocated for runtime settings string. |
   
      


   
   
   

   
   
### Result Methods
   
  | Method               | Description |
  |----------------------|-------------|
  | [`GetAllTextResults`](cbarcodereader-methods/result.md#getalltextresults) | Get all recognized barcode results. |
  | [`FreeTextResults`](cbarcodereader-methods/result.md#freetextresults) | Free memory allocated for text results. |
  | [`GetIntermediateResults`](cbarcodereader-methods/result.md#getintermediateresults) | Get intermediate results. |
  | [`FreeIntermediateResults`](cbarcodereader-methods/result.md#freeintermediateresults) | Free memory allocated for the intermediate results. |
   
   
### Status Retrieval Methods
   
  | Method               | Description |
  |----------------------|-------------|
  | [`GetErrorString`](cbarcodereader-methods/status-retrieval.md#geterrorstring) | Get error message by error code.|
  | [`GetVersion`](cbarcodereader-methods/status-retrieval.md#getversion) | Get version information of SDK.|
   
   
### Video Methods

#### Decode
    
   | Method               | Description |
   |----------------------|-------------|
   | [`StartFrameDecoding`](cbarcodereader-methods/video.md#startframedecoding) | Decode barcodes from inner frame queue. |
   | [`StartFrameDecodingEx`](cbarcodereader-methods/video.md#startframedecodingex) | Decode barcodes from inner frame queue. |
   | [`AppendFrame`](cbarcodereader-methods/video.md#appendframe) | Append a frame image buffer to the inner frame queue. |
   | [`StopFrameDecoding`](cbarcodereader-methods/video.md#stopframedecoding) | Stop thread used for frame decoding. |

#### Parameter
   
   | Method               | Description |
   |----------------------|-------------|
   | [`InitFrameDecodingParameters`](cbarcodereader-methods/video.md#initframedecodingparameters) | Initialize frame decoding parameter. |

#### Callback
   
   | Method               | Description |
   |----------------------|-------------|
   | [`SetErrorCallback`](cbarcodereader-methods/video.md#seterrorcallback) | Set callback function to process errors generated during frame decoding. |
   | [`SetTextResultCallback`](cbarcodereader-methods/video.md#settextresultcallback) | Set callback function to process text results generated during frame decoding. |
   | [`SetIntermediateResultCallback`](cbarcodereader-methods/video.md#setintermediateresultcallback) | Set callback function to process intermediate results generated during frame decoding. |

#### Status retrieval
   
   | Method               | Description |
   |----------------------|-------------|
   | [`GetLengthOfFrameQueue`](cbarcodereader-methods/video.md#getlengthofframequeue) | Get length of current inner frame queue. |
 


## Structs

 | Struct | Description |
 | ------ | ----------- |
 | [`AztecDetails`]({{ site.structs }}AztecDetails.html?src=cpp) | Stores the Aztec details. |
 | [`Contour`]({{ site.structs }}Contour.html?src=cpp) | Stores the contour information. |
 | [`DBRPoint`]({{ site.structs }}DBRPoint.html?src=cpp) | Stores an x- and y-coordinate pair in two-dimensional space. |
 | [`DataMatrixDetails`]({{ site.structs }}DataMatrixDetails.html?src=cpp) | Stores the DataMatrix details. |	
 | [`DM_DLSConnectionParameters`]({{ site.structs }}DMDLSConnectionParameters.html?src=c) | `Deprecated` |
 | [`DM_LTSConnectionParameters`]({{ site.structs }}DMLTSConnectionParameters.html?src=c) | `Deprecated` |
 | [`ExtendedResult`]({{ site.structs }}ExtendedResult.html?src=cpp) | Stores the extended result. |
 | [`FrameDecodingParameters`]({{ site.structs }}FrameDecodingParameters.html?src=cpp) | Defines a struct to configure the frame decoding Parameters. |
 | [`FurtherModes`]({{ site.structs }}FurtherModes.html?src=cpp) | Stores the FurtherModes. |
 | [`ImageData`]({{ site.structs }}ImageData.html?src=cpp) | Stores the image data. |
 | [`IntermediateResult`]({{ site.structs }}IntermediateResult.html?src=cpp) | Stores the intermediate result. |
 | [`IntermediateResultArray`]({{ site.structs }}IntermediateResultArray.html?src=cpp) | Stores the intermediate result array. |
 | [`LineSegment`]({{ site.structs }}LineSegment.html?src=cpp) | Stores line segment data. |
 | [`LocalizationResult`]({{ site.structs }}LocalizationResult.html?src=cpp) | Stores the localization result. |
 | [`OneDCodeDetails`]({{ site.structs }}OneDCodeDetails.html?src=cpp) | Stores the OneD code details. |
 | [`PDF417Details`]({{ site.structs }}PDF417Details.html?src=cpp) | Stores the PDF417 details. |
 | [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html?src=cpp) | Defines a struct to configure the barcode reading runtime settings. |
 | [`QRCodeDetails`]({{ site.structs }}QRCodeDetails.html?src=cpp) | Stores the QRCode details. |
 | [`Quadrilateral`]({{ site.structs }}Quadrilateral.html?src=cpp) | Stores the quadrilateral.  |
 | [`RegionDefinition`]({{ site.structs }}RegionDefinition.html?src=cpp) | Stores the region information. |
 | [`RegionOfInterest`]({{ site.structs }}RegionOfInterest.html?src=cpp) | Stores the region of interest. |
 | [`SamplingImageData`]({{ site.structs }}SamplingImageData.html?src=cpp) | Stores the sampling image data.  |
 | [`TextResult`]({{ site.structs }}TextResult.html?src=cpp) | Stores the text result. |
 | [`TextResultArray`]({{ site.structs }}TextResultArray.html?src=cpp) | Stores the text result array. |



## Enumerations  

### Format Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`BarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) | Describes the barcode types in BarcodeFormat group 1. |
  | [`BarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2) | Describes the barcode types in BarcodeFormat group 2. |

### Parameter Mode Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`BarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode) | Describes the barcode colour mode. |
  | [`BarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode) | Describes the barcode complement mode. |
  | [`BinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode) | Describes the binarization mode. |
  | [`ColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode) | Describes the colour clustering mode. |
  | [`ColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode) | Describes the colour conversion mode. |
  | [`ConflictMode`]({{ site.enumerations }}parameter-mode-enums.html#conflictmode) | Describes the conflict mode. |
  | [`DeblurMode`]({{ site.enumerations }}parameter-mode-enums.html#deblurmode) | Describes the deblur mode. |
  | [`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) | Describes the deformation resisting mode. |
  | [`DPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode) | Describes the DPM code reading mode. |
  | [`GrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode) | Describes the grayscale transformation mode. |
  | [`ImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode) | Describes the image preprocessing mode. |
  | [`LocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) | Describes the localization mode. | 
  | [`PDFReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#pdfreadingmode) | Describes the PDF reading mode. |
  | [`RegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode) | Describes the region predetection mode. |
  | [`ScaleUpMode`]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode) | Describes the scale up mode. |
  | [`TerminatePhase`]({{ site.enumerations }}parameter-mode-enums.html#terminatephase) | Describes the terminate phase. |
  | [`TextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode) | Describes the text filter mode. |
  | [`TextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode) | Describes the texture detection mode. | 

### Result Related Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`IMResultDataType`]({{ site.enumerations }}result-enums.html#imresultdatatype) | Describes the intermediate result data type. |
  | [`IntermediateResultSavingMode`]({{ site.enumerations }}result-enums.html#intermediateresultsavingmode) | Describes the intermediate result saving mode. |
  | [`IntermediateResultType`]({{ site.enumerations }}result-enums.html#intermediateresulttype) | Describes the intermediate result type. |
  | [`ResultCoordinateType`]({{ site.enumerations }}result-enums.html#resultcoordinatetype) | Describes the result coordinate type. |
  | [`ResultType`]({{ site.enumerations }}result-enums.html#resulttype) | Describes the extended result type. |
  | [`TextResultOrderMode`]({{ site.enumerations }}result-enums.html#textresultordermode) | Describes the text result order mode. |

### Frame Decoding Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`ClarityCalculationMethod`]({{ site.enumerations }}frame-decoding-enums.html#claritycalculationmethod) | Describes the clarity calculation method. |
  | [`ClarityFilterMode`]({{ site.enumerations }}frame-decoding-enums.html#clarityfiltermode) | Describes the clarity filter mode. |
  
### Other Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`DM_ChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeway) | `Deprecated` |
  | [`DM_DeploymentType`]({{ site.enumerations }}other-enums.html#dm_deploymenttype) | `Deprecated` |
  | [`DM_LicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule) | `Deprecated` |
  | [`DM_UUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod) | `Deprecated` |
  | [`ImagePixelFormat`]({{ site.enumerations }}other-enums.html#imagepixelformat) | Describes the image pixel format. |
  | [`QRCodeErrorCorrectionLevel`]({{ site.enumerations }}other-enums.html#qrcodeerrorcorrectionlevel) | Describes the QR Code error correction level. |
  | [`Product`]({{ site.enumerations }}other-enums.html#product) | `Deprecated` |




## Callbacks

  | Method | Description |
  |----------|-------------|
  | [`CB_Error`](function-pointer.md#cb_error) | Represents the method that will handle the error code returned by the SDK. |
  | [`CB_IntermediateResult`](function-pointer.md#cb_intermediateresult) | Represents the method that will handle the intermediate result array returned by the SDK. |
  | [`CB_TextResult`](function-pointer.md#cb_textresult) | Represents the method that will handle the text result array returned by the SDK. | 
