---
layout: default-layout
title: Dynamsoft Barcode Reader C++ API Reference - Main Page
description: This is the main page of Dynamsoft Barcode Reader for C++ API Reference.
keywords: api reference, c++
needAutoGenerateSidebar: true
needGenerateH3Content: true
---

# Dynamsoft Barcode Reader SDK - C++ API Reference

## CBarcodeReader class
### Constructor and Destructor
   
  | Method               | Description |
  |----------------------|-------------|
  | [`CBarcodeReader`](constructor-and-destructor.md#cbarcodereader) | Default constructor of `CBarcodeReader` object.|
  | [`~CBarcodeReader`](constructor-and-destructor.md#~cbarcodereader) | Destructor of `CBarcodeReader` object.|
      
   
### Decode Methods
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DecodeFile`](decode.md#decodefile) | Decode barcodes from a specified image file. |
  | [`DecodeFileInMemory`](decode.md#decodefileinmemory) | Decode barcodes from an image file in memory. |
  | [`DecodeBuffer`](decode.md#decodebuffer) | Decode barcodes from raw buffer. |
  | [`DecodeBase64String`](decode.md#decodebase64string) | Decode barcodes from a base64 encoded string. |
  | [`DecodeDIB`](decode.md#decodedib) | Decode barcode from a handle of device-independent bitmap (DIB). |
  | [`InitIntermediateResult`](decode.md#initintermediateresult) | Inits an intermediateResult struct with default values. |
  | [`DecodeIntermediateResults`](decode.md#decodeintermediateresults) | Decodes barcode from intermediate results. |
      
### License Methods
  
  | Method               | Description |
  |----------------------|-------------|
  | [`InitLicense`](license.md#initlicense) | Read product key and activate the SDK. |
  | [`InitLicenseFromServer`](license.md#initlicensefromserver) | Initialize license and connect to the specified server for online verification. |
  | [`InitLicenseFromLicenseContent`](license.md#initlicensefromlicensecontent) | Initialize license from the license content on client machine for offline verification. |
  | [`OutputLicenseToString`](license.md#outputlicensetostring) | Output the license content to a string from the license server. |
  | [`OutputLicenseToStringPtr`](license.md#outputlicensetostringptr) | Output the license content to a string from the license server. |
  | [`FreeLicenseString`](license.md#freelicensestring) | Free memory allocated for the license string. |
  | [`InitLTSConnectionParameters`](license.md#initltsconnectionparameters) | Initializes a DM_LTSConnectionParameters struct with default values. |
  | [`InitLicenseFromLTS`](license.md#initlicensefromlts) | Initializes the barcode reader license and connects to the specified server for online verification. |
   

### Basic Settings Methods
   
  | Method               | Description |
  |----------------------|-------------|
  | [`SetModeArgument`](parameter-and-runtime-settings-basic.md#setmodeargument) | Set argument value for the specified mode parameter. |
  | [`GetModeArgument`](parameter-and-runtime-settings-basic.md#getmodeargument) | Get argument value for the specified mode parameter. |
  | [`GetRuntimeSettings`](parameter-and-runtime-settings-basic.md#getruntimesettings) | Get current runtime settings. |
  | [`UpdateRuntimeSettings`](parameter-and-runtime-settings-basic.md#updateruntimesettings) | Modify and update the current runtime settings. |
  | [`ResetRuntimeSettings`](parameter-and-runtime-settings-basic.md#resetruntimesettings) | Reset runtime settings to default. |

### Advanced Settings Methods
  
  | Method               | Description |
  |----------------------|-------------|
  | [`InitRuntimeSettingsWithFile`](parameter-and-runtime-settings-advanced.md#initruntimesettingswithfile)  | Initialize runtime settings with the settings in a given JSON file. |
  | [`InitRuntimeSettingsWithString`](parameter-and-runtime-settings-advanced.md#initruntimesettingswithstring) | Initialize runtime settings with the settings in a given JSON string. |
  | [`AppendTplFileToRuntimeSettings`](parameter-and-runtime-settings-advanced.md#appendtplfiletoruntimesettings) | Append a new template file to the current runtime settings. |
  | [`AppendTplStringToRuntimeSettings`](parameter-and-runtime-settings-advanced.md#appendtplstringtoruntimesettings) | Append a new template string to the current runtime settings. |
  | [`GetParameterTemplateCount`](parameter-and-runtime-settings-advanced.md#getparametertemplatecount) | Get the count of the parameter templates. |
  | [`GetParameterTemplateName`](parameter-and-runtime-settings-advanced.md#getparametertemplatename) | Get the parameter template name by index. |
  | [`OutputSettingsToFile`](parameter-and-runtime-settings-advanced.md#outputsettingstofile) | Output runtime settings to a settings file (JSON file). |
  | [`OutputSettingsToString`](parameter-and-runtime-settings-advanced.md#outputsettingstostring) | Output runtime settings to a string. |
  | [`OutputSettingsToStringPtr`](parameter-and-runtime-settings-advanced.md#outputsettingstostringptr) | Output runtime settings to a string. |
  | [`FreeSettingsString`](parameter-and-runtime-settings-advanced.md#freesettingsstring) | Free memory allocated for runtime settings string. |
   
      


   
   
   

   
   
### Result Methods
   
  | Method               | Description |
  |----------------------|-------------|
  | [`GetAllTextResults`](result.md#getalltextresults) | Get all recognized barcode results. |
  | [`FreeTextResults`](result.md#freetextresults) | Free memory allocated for text results. |
  | [`GetIntermediateResults`](result.md#getintermediateresults) | Get intermediate results. |
  | [`FreeIntermediateResults`](result.md#freeintermediateresults) | Free memory allocated for the intermediate results. |
   
   
### Status Retrieval Methods
   
  | Method               | Description |
  |----------------------|-------------|
  | [`GetErrorString`](status-retrieval.md#geterrorstring) | Get error message by error code.|
  | [`GetVersion`](status-retrieval.md#getversion) | Get version information of SDK.|
   
   
### Video Methods

#### Decode
    
   | Method               | Description |
   |----------------------|-------------|
   | [`StartFrameDecoding`](video.md#startframedecoding) | Decode barcodes from inner frame queue. |
   | [`StartFrameDecodingEx`](video.md#startframedecodingex) | Decode barcodes from inner frame queue. |
   | [`AppendFrame`](video.md#appendframe) | Append a frame image buffer to the inner frame queue. |
   | [`StopFrameDecoding`](video.md#stopframedecoding) | Stop thread used for frame decoding. |

#### Parameter
   
   | Method               | Description |
   |----------------------|-------------|
   | [`InitFrameDecodingParameters`](video.md#initframedecodingparameters) | Initialize frame decoding parameter. |

#### Callback
   
   | Method               | Description |
   |----------------------|-------------|
   | [`SetErrorCallback`](video.md#seterrorcallback) | Set callback function to process errors generated during frame decoding. |
   | [`SetTextResultCallback`](video.md#settextresultcallback) | Set callback function to process text results generated during frame decoding. |
   | [`SetIntermediateResultCallback`](video.md#setintermediateresultcallback) | Set callback function to process intermediate results generated during frame decoding. |

#### Status retrieval
   
   | Method               | Description |
   |----------------------|-------------|
   | [`GetLengthOfFrameQueue`](video.md#getlengthofframequeue) | Get length of current inner frame queue. |
 


## Structs

 | Struct | Description |
 | ------ | ----------- |
 | [`AztecDetails`]({{ site.structs }}AztecDetails.html?src=cpp) | Stores the Aztec details. |
 | [`Contour`]({{ site.structs }}Contour.html?src=cpp) | Stores the contour information. |
 | [`DBRPoint`]({{ site.structs }}DBRPoint.html?src=cpp) | Stores an x- and y-coordinate pair in two-dimensional space. |
 | [`DataMatrixDetails`]({{ site.structs }}DataMatrixDetails.html?src=cpp) | Stores the DataMatrix details. |	
 | [`DM_LTSConnectionParameters`]({{ site.structs }}DMLTSConnectionParameters.html?src=cpp) | Defines a struct to configure the parameters to connect to license tracking server. |
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
  | [`BarcodeFormat`]({{ site.enumerations }}format-enums.html?src=cpp#barcodeformat) | Describes the barcode types in BarcodeFormat group 1. |
  | [`BarcodeFormat_2`]({{ site.enumerations }}format-enums.html?src=cpp#barcodeformat_2) | Describes the barcode types in BarcodeFormat group 2. |

### Parameter Mode Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`BarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html?src=cpp#barcodecolourmode) | Describes the barcode colour mode. |
  | [`BarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html?src=cpp#barcodecomplementmode) | Describes the barcode complement mode. |
  | [`BinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html?src=cpp#binarizationmode) | Describes the binarization mode. |
  | [`ColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html?src=cpp#colourclusteringmode) | Describes the colour clustering mode. |
  | [`ColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html?src=cpp#colourconversionmode) | Describes the colour conversion mode. |
  | [`ConflictMode`]({{ site.enumerations }}parameter-mode-enums.html?src=cpp#conflictmode) | Describes the conflict mode. |
  | [`DeblurMode`]({{ site.enumerations }}parameter-mode-enums.html?src=cpp#deblurmode) | Describes the deblur mode. |
  | [`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html?src=cpp#deformationresistingmode) | Describes the deformation resisting mode. |
  | [`DPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html?src=cpp#dpmcodereadingmode) | Describes the DPM code reading mode. |
  | [`GrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html?src=cpp#grayscaletransformationmode) | Describes the grayscale transformation mode. |
  | [`ImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html?src=cpp#imagepreprocessingmode) | Describes the image preprocessing mode. |
  | [`LocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html?src=cpp#localizationmode) | Describes the localization mode. | 
  | [`PDFReadingMode`]({{ site.enumerations }}parameter-mode-enums.html?src=cpp#pdfreadingmode) | Describes the PDF reading mode. |
  | [`RegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html?src=cpp#regionpredetectionmode) | Describes the region predetection mode. |
  | [`ScaleUpMode`]({{ site.enumerations }}parameter-mode-enums.html?src=cpp#scaleupmode) | Describes the scale up mode. |
  | [`TerminatePhase`]({{ site.enumerations }}parameter-mode-enums.html?src=cpp#terminatephase) | Describes the terminate phase. |
  | [`TextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html?src=cpp#textfiltermode) | Describes the text filter mode. |
  | [`TextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html?src=cpp#texturedetectionmode) | Describes the texture detection mode. | 

### Result Related Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`IMResultDataType`]({{ site.enumerations }}result-enums.html?src=cpp#imresultdatatype) | Describes the intermediate result data type. |
  | [`IntermediateResultSavingMode`]({{ site.enumerations }}result-enums.html?src=cpp#intermediateresultsavingmode) | Describes the intermediate result saving mode. |
  | [`IntermediateResultType`]({{ site.enumerations }}result-enums.html?src=cpp#intermediateresulttype) | Describes the intermediate result type. |
  | [`ResultCoordinateType`]({{ site.enumerations }}result-enums.html?src=cpp#resultcoordinatetype) | Describes the result coordinate type. |
  | [`ResultType`]({{ site.enumerations }}result-enums.html?src=cpp#resulttype) | Describes the extended result type. |
  | [`TextResultOrderMode`]({{ site.enumerations }}result-enums.html?src=cpp#textresultordermode) | Describes the text result order mode. |

### Frame Decoding Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`ClarityCalculationMethod`]({{ site.enumerations }}frame-decoding-enums.html?src=cpp#claritycalculationmethod) | Describes the clarity calculation method. |
  | [`ClarityFilterMode`]({{ site.enumerations }}frame-decoding-enums.html?src=cpp#clarityfiltermode) | Describes the clarity filter mode. |
  
### Other Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`DM_ChargeWay`]({{ site.enumerations }}other-enums.html?src=cpp#dm_chargeway) | Describes the charge way. |
  | [`DM_DeploymentType`]({{ site.enumerations }}other-enums.html?src=cpp#dm_deploymenttype) | Describes the deployment type. |
  | [`DM_LicenseModule`]({{ site.enumerations }}other-enums.html?src=cpp#dm_licensemodule) | Describes Dynamsoft license modules. |
  | [`DM_UUIDGenerationMethod`]({{ site.enumerations }}other-enums.html?src=cpp#dm_uuidgenerationmethod) | Describes the UUID generation method. |
  | [`ImagePixelFormat`]({{ site.enumerations }}other-enums.html?src=cpp#imagepixelformat) | Describes the image pixel format. |
  | [`QRCodeErrorCorrectionLevel`]({{ site.enumerations }}other-enums.html?src=cpp#qrcodeerrorcorrectionlevel) | Describes the QR Code error correction level. |
  | [`Product`]({{ site.enumerations }}other-enums.html?src=cpp#product) | Describes Dynamsoft products. |




# Callbacks

  | Method | Description |
  |----------|-------------|
  | [`CB_Error`](function-pointer.md#cb_error) | Represents the method that will handle the error code returned by the SDK. |
  | [`CB_IntermediateResult`](function-pointer.md#cb_intermediateresult) | Represents the method that will handle the intermediate result array returned by the SDK. |
  | [`CB_TextResult`](function-pointer.md#cb_textresult) | Represents the method that will handle the text result array returned by the SDK. | 
