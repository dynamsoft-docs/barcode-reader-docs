---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - Main Page
description: This is the main page of Dynamsoft Barcode Reader for .NET SDK API Reference.
keywords: api reference, .Net
needAutoGenerateSidebar: true
needGenerateH3Content: true
---

# API Reference - .Net

## BarcodeReader Class


### `BarcodeReader` Attributes
  
  | Attribute            | Description |
  |----------------------|-------------|
  | `ProductKeys`  | Product keys used for Dynamsoft Barcode Reader. |
  

### Constructor and Destructor
   
  | Method               | Description |
  |----------------------|-------------|
  | [`BarcodeReader`](BarcodeReader/constructor-and-destructor.md#barcodereader) | Constructor of `BarcodeReader` object.|
  | [`Dispose`](BarcodeReader/constructor-and-destructor.md#dispose) | Destroys an instance of Dynamsoft Barcode Reader. |
   
 
   

### License Methods
  
  | Method               | Description |
  |----------------------|-------------|
  | [`InitLicenseFromServer`](BarcodeReader/license.md#initlicensefromserver) | Initializes license and connect to the specified server for online verification. |
  | [`InitLicenseFromLicenseContent`](BarcodeReader/license.md#initlicensefromlicensecontent) | Initializes license from the license content on client machine for offline verification. |
  | [`OutputLicenseToString`](BarcodeReader/license.md#outputlicensetostring) | Outputs the license content as an encrypted string from the license server to be used for offline license verification.|
  | [`InitDLSConnectionParameters`](BarcodeReader/license.md#initdlsconnectionparameters) | Initializes a DMDLSConnectionParameters struct with default values. |
  | [`InitLicenseFromDLS`](BarcodeReader/license.md#initlicensefromdls) | Initializes the barcode reader license and connects to the specified server for online verification. |
  | [`GetIdleInstancesCount`](BarcodeReader/license.md#getidleinstancescount) | Gets available instances count when charging by concurrent instances count. |
  | [`InitLTSConnectionParameters`](BarcodeReader/license.md#initltsconnectionparameters) | `Deprecated`. Use [InitDLSConnectionParameters](BarcodeReader/license.md#initdlsconnectionparameters) instead. |
  | [`InitLicenseFromLTS`](BarcodeReader/license.md#initlicensefromlts) | `Deprecated`. Use [InitLicenseFromDLS](BarcodeReader/license.md#initlicensefromdls) instead. |
   
   

### Decode Methods
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DecodeFile`](BarcodeReader/decode.md#decodefile) | Decodes barcodes from a specified image file. |
  | [`DecodeFileInMemory`](BarcodeReader/decode.md#decodefileinmemory) | Decode barcodes from an image file in memory. |
  | [`DecodeBuffer`](BarcodeReader/decode.md#decodebuffer) | Decodes barcodes from the memory buffer containing image pixels in defined format. |
  | [`DecodeBase64String`](BarcodeReader/decode.md#decodebase64string) | Decodes barcodes from a base64 encoded string. |
  | [`DecodeBitmap`](BarcodeReader/decode.md#decodebitmap) | Decodes barcode from a bitmap. |
  | [`InitIntermediateResult`](BarcodeReader/decode.md#initintermediateresult) | Inits an intermediateResult struct with default values. |
  | [`DecodeIntermediateResults`](BarcodeReader/decode.md#decodeintermediateresults) | Decodes barcode from intermediate results. |
  
   
 
   
   
   

### Basic Settings Methods
   
  | Method               | Description |
  |----------------------|-------------|
  | [`SetModeArgument`](BarcodeReader/parameter-and-runtime-settings-basic.md#setmodeargument) | Sets the optional argument for a specified mode in Modes parameters. |
  | [`GetModeArgument`](BarcodeReader/parameter-and-runtime-settings-basic.md#getmodeargument) | Gets the optional argument for a specified mode in Modes parameters.  |
  | [`GetRuntimeSettings`](BarcodeReader/parameter-and-runtime-settings-basic.md#getruntimesettings) | Gets current runtime settings. |
  | [`UpdateRuntimeSettings`](BarcodeReader/parameter-and-runtime-settings-basic.md#updateruntimesettings) | Update runtime settings with a given struct. |
  | [`ResetRuntimeSettings`](BarcodeReader/parameter-and-runtime-settings-basic.md#resetruntimesettings) | Resets all parameters to default values. |

### Advanced Settings Methods
  
  | Method               | Description |
  |----------------------|-------------|
  | [`InitRuntimeSettingsWithFile`](BarcodeReader/parameter-and-runtime-settings-advanced.md#initruntimesettingswithfile)  | Initializes runtime settings with the settings in a given JSON file. |
  | [`InitRuntimeSettingsWithString`](BarcodeReader/parameter-and-runtime-settings-advanced.md#initruntimesettingswithstring) | Initializes runtime settings with the settings in a given JSON string. |
  | [`AppendTplFileToRuntimeSettings`](BarcodeReader/parameter-and-runtime-settings-advanced.md#appendtplfiletoruntimesettings) | Appends a new template file to the current runtime settings. |
  | [`AppendTplStringToRuntimeSettings`](BarcodeReader/parameter-and-runtime-settings-advanced.md#appendtplstringtoruntimesettings) | Appends a new template string to the current runtime settings. |
  | [`GetAllParameterTemplateNames`](BarcodeReader/parameter-and-runtime-settings-advanced.md#getallparametertemplatenames) | Gets the parameter templates name array. |
  | [`OutputSettingsToFile`](BarcodeReader/parameter-and-runtime-settings-advanced.md#outputsettingstofile) | Outputs runtime settings to a settings file (JSON file). |
  | [`OutputSettingsToString`](BarcodeReader/parameter-and-runtime-settings-advanced.md#outputsettingstostring) | Outputs runtime settings to a string. |
   
      
 

   
### Status Retrieval Methods
   
  | Method               | Description |
  |----------------------|-------------|
  | [`GetVersion`](BarcodeReader/status-retrieval.md#getversion) | Gets version information of SDK. |
   
      
 

   
### Video Methods

#### Decode
    
   | Method               | Description |
   |----------------------|-------------|
   | [`StartFrameDecoding`](BarcodeReader/video.md#startframedecoding) | Starts a new thread to decode barcodes from the inner frame queue. |
   | [`StartFrameDecodingEx`](BarcodeReader/video.md#startframedecodingex) | Starts a new thread to decode barcodes from the inner frame queue. |
   | [`AppendFrame`](BarcodeReader/video.md#appendframe) | Appends a frame image buffer to the inner frame queue. |
   | [`StopFrameDecoding`](BarcodeReader/video.md#stopframedecoding) | Stops the frame decoding thread created by StartFrameDecoding. |

#### Parameter
   
   | Method               | Description |
   |----------------------|-------------|
   | [`InitFrameDecodingParameters`](BarcodeReader/video.md#initframedecodingparameters) | Initializes frame decoding parameters. |


#### Callback

   | Method               | Description |
   |----------------------|-------------|
   | [`SetErrorCallback`](BarcodeReader/video.md#seterrorcallback) | Set callback function to process errors generated during frame decoding. |
   | [`SetTextResultCallback`](BarcodeReader/video.md#settextresultcallback) | Set callback function to process text results generated during frame decoding. |
   | [`SetIntermediateResultCallback`](BarcodeReader/video.md#setintermediateresultcallback) | Set callback function to process intermediate results generated during frame decoding. |

#### Status retrieval
   
   | Method               | Description |
   |----------------------|-------------|
   | [`GetLengthOfFrameQueue`](BarcodeReader/video.md#getlengthofframequeue) | Gets length of current inner frame queue. |
 
   
 


### Result Methods

   | Method               | Description |
   |----------------------|-------------|
   | [`GetIntermediateResults`](BarcodeReader/result.md#getintermediateresults) | Returns intermediate results containing the original image, the colour clustered image, the binarized Image, contours, Lines, TextBlocks, etc.  |


 

## Auxiliary Classes

- [`AztecDetails`](class/AztecDetails.md)	 
- [`BarcodeReaderException`](class/BarcodeReaderException.md)	
- [`Contour`](class/Contour.md)	 
- [`DataMatrixDetails`](class/DataMatrixDetails.md)	
- [`DMDLSConnectionParameters`](class/DMDLSConnectionParameters.md) 
- [`DMLTSConnectionParameters`](class/DMLTSConnectionParameters.md) 
- [`ExtendedResult`](class/ExtendedResult.md)	
- [`FrameDecodingParameters`](class/FrameDecodingParameters.md)	
- [`ImageData`](class/ImageData.md)	 
- [`IntermediateResult`](class/IntermediateResult.md)	
- [`LineSegment`](class/LineSegment.md)	 
- [`LocalizationResult`](class/LocalizationResult.md)	
- [`OneDCodeDetails`](class/OneDCodeDetails.md)	
- [`PDF417Details`](class/PDF417Details.md)	
- [`QRCodeDetails`](class/QRCodeDetails.md)	
- [`Quadrilateral`](class/Quadrilateral.md)	 
- [`RegionOfInterest`](class/RegionOfInterest.md)	 
- [`SamplingImageData`](class/SamplingImageData.md)	 
- [`TextResult`](class/TextResult.md)	

## Structs

- [`FurtherModes`](struct/FurtherModes.md)		
- [`PublicRuntimeSettings`](struct/PublicRuntimeSettings.md)		
- [`RegionDefinition`](struct/RegionDefinition.md)		


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
  | [`DM_ChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeway) | Describes the charge way. |
  | [`DM_DeploymentType`]({{ site.enumerations }}other-enums.html#dm_deploymenttype) | Describes the deployment type. |
  | [`DM_LicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule) | Describes Dynamsoft license modules. |
  | [`DM_UUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod) | Describes the UUID generation method. |
  | [`ImagePixelFormat`]({{ site.enumerations }}other-enums.html#imagepixelformat) | Describes the image pixel format. |
  | [`QRCodeErrorCorrectionLevel`]({{ site.enumerations }}other-enums.html#qrcodeerrorcorrectionlevel) | Describes the QR Code error correction level. |
  | [`Product`]({{ site.enumerations }}other-enums.html#product) | Describes Dynamsoft products. |



## Delegates

  | Delegate | Description |
  |----------|-------------|
  | [`CB_Error`](function-pointer.md#cb_error) | Represents the method that will handle the error code returned by the SDK. |
  | [`CB_IntermediateResult`](function-pointer.md#cb_intermediateresult) | Represents the method that will handle the intermediate result array returned by the SDK. |
  | [`CB_TextResult`](function-pointer.md#cb_textresult) | Represents the method that will handle the text result array returned by the SDK. | 

   
 
