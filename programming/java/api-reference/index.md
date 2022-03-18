---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - Main Page
description: This is the main page of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: api reference, java
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# API Reference - Java
   
## BarcodeReader Class

### Initialize and Destroy
   
  | Method               | Description |
  |----------------------|-------------|
  | [`BarcodeReader`](BarcodeReader/initialize-and-destroy.md#barcodereader) | Initialization of `BarcodeReader` object.|
  | [`destroy`](BarcodeReader/initialize-and-destroy.md#destroy) | Destroys an instance of `BarcodeReader` object.|
   

### License Methods
  
  | Method               | Description |
  |----------------------|-------------|
  | [`initLicense`](BarcodeReader/license.md#initlicense) | Initializes license key and activate the SDK. |
  | [`getIdleInstancesCount`](BarcodeReader/license.md#getidleinstancescount) | Gets available instances count when charging by concurrent instances count. |
  | [`initLicenseFromServer`](BarcodeReader/license.md#initlicensefromserver) | `Deprecated` |
  | [`initLicenseFromLicenseContent`](BarcodeReader/license.md#initlicensefromlicensecontent) | `Deprecated` |
  | [`outputLicenseToString`](BarcodeReader/license.md#outputlicensetostring) | `Deprecated` |
  | [`initDLSConnectionParameters`](BarcodeReader/license.md#initdlsconnectionparameters) | `Deprecated` |
  | [`initLicenseFromDLS`](BarcodeReader/license.md#initlicensefromdls) | `Deprecated` |
  | [`initLTSConnectionParameters`](BarcodeReader/license.md#initltsconnectionparameters) | `Deprecated` |
  | [`initLicenseFromLTS`](BarcodeReader/license.md#initlicensefromlts) | `Deprecated` |


### Decode Methods
   
  | Method               | Description |
  |----------------------|-------------|
  | [`decodeFile`](BarcodeReader/decode.md#decodefile) | Decode barcodes from a specified image file. |
  | [`decodeFileInMemory`](BarcodeReader/decode.md#decodefileinmemory) | Decode barcodes from an image file in memory. |
  | [`decodeBuffer`](BarcodeReader/decode.md#decodebuffer) | Decode barcodes from raw buffer. |
  | [`decodeBase64String`](BarcodeReader/decode.md#decodebase64string) | Decode barcodes from a base64 encoded string. |
  | [`decodeBufferedImage`](BarcodeReader/decode.md#decodebufferedimage) | Decodes barcode from a buffered imag (bitmap). |
  | [`initIntermediateResult`](BarcodeReader/decode.md#initintermediateresult) | Inits an intermediateResult struct with default values. |
  | [`decodeIntermediateResults`](BarcodeReader/decode.md#decodeintermediateresults) | Decodes barcode from intermediate results. |
   
   
   
### Basic Settings Methods
   
  | Method               | Description |
  |----------------------|-------------|
  | [`setModeArgument`](BarcodeReader/parameter-and-runtime-settings-basic.md#setmodeargument) | Set argument value for the specified mode parameter. |
  | [`getModeArgument`](BarcodeReader/parameter-and-runtime-settings-basic.md#getmodeargument) | Get argument value for the specified mode parameter. |
  | [`getRuntimeSettings`](BarcodeReader/parameter-and-runtime-settings-basic.md#getruntimesettings) | Get current runtime settings. |
  | [`updateRuntimeSettings`](BarcodeReader/parameter-and-runtime-settings-basic.md#updateruntimesettings) | Modify and update the current runtime settings. |
  | [`resetRuntimeSettings`](BarcodeReader/parameter-and-runtime-settings-basic.md#resetruntimesettings) | Reset runtime settings to default. |

### Advanced Settings Methods
  
  | Method               | Description |
  |----------------------|-------------|
  | [`initRuntimeSettingsWithFile`](BarcodeReader/parameter-and-runtime-settings-advanced.md#initruntimesettingswithfile)  | Initialize runtime settings with the settings in a given JSON file. |
  | [`initRuntimeSettingsWithString`](BarcodeReader/parameter-and-runtime-settings-advanced.md#initruntimesettingswithstring) | Initialize runtime settings with the settings in a given JSON string. |
  | [`appendTplFileToRuntimeSettings`](BarcodeReader/parameter-and-runtime-settings-advanced.md#appendtplfiletoruntimesettings) | Append a new template file to the current runtime settings. |
  | [`appendTplStringToRuntimeSettings`](BarcodeReader/parameter-and-runtime-settings-advanced.md#appendtplstringtoruntimesettings) | Append a new template string to the current runtime settings. |
  | [`getAllParameterTemplateNames`](BarcodeReader/parameter-and-runtime-settings-advanced.md#getallparametertemplatenames) | Gets the parameter templates name array. |
  | [`outputSettingsToFile`](BarcodeReader/parameter-and-runtime-settings-advanced.md#outputsettingstofile) | Output runtime settings to a settings file (JSON file). |
  | [`outputSettingsToString`](BarcodeReader/parameter-and-runtime-settings-advanced.md#outputsettingstostring) | Output runtime settings to a string. |
   
      
   
   
### Result Methods
   
  | Method               | Description |
  |----------------------|-------------|
  | [`getIntermediateResults`](BarcodeReader/result.md#getintermediateresults) | Get intermediate results. |
   
      


   
### Status Retrieval Methods
   
  | Method               | Description |
  |----------------------|-------------|
  | [`getVersion`](BarcodeReader/status-retrieval.md#getversion) | Get version information of SDK.|
   
      


   
### Video Methods

#### Decode
    
   | Method               | Description |
   |----------------------|-------------|
   | [`startFrameDecoding`](BarcodeReader/video.md#startframedecoding) | Decode barcodes from inner frame queue. |
   | [`startFrameDecodingEx`](BarcodeReader/video.md#startframedecodingex) | Decode barcodes from inner frame queue. |
   | [`appendFrame`](BarcodeReader/video.md#appendframe) | Append a frame image buffer to the inner frame queue. |
   | [`stopFrameDecoding`](BarcodeReader/video.md#stopframedecoding) | Stop thread used for frame decoding. |

#### Parameter
   
   | Method               | Description |
   |----------------------|-------------|
   | [`initFrameDecodingParameters`](BarcodeReader/video.md#initframedecodingparameters) | Initialize frame decoding parameter. |

#### Callback
   
   | Method               | Description |
   |----------------------|-------------|
   | [`setErrorCallback`](BarcodeReader/video.md#seterrorcallback) | Set callback interface to process errors generated during frame decoding. |
   | [`setTextResultCallback`](BarcodeReader/video.md#settextresultcallback) | Set callback interface to process text results generated during frame decoding. |
   | [`setIntermediateResultCallback`](BarcodeReader/video.md#setintermediateresultcallback) | Set callback interface to process intermediate results generated during frame decoding. |

#### Status retrieval
   
   | Method               | Description |
   |----------------------|-------------|
   | [`getLengthOfFrameQueue`](BarcodeReader/video.md#getlengthofframequeue) | Get length of current inner frame queue. |
 

## Auxiliary Classes  

- [`AztecDetails`](class/AztecDetails.md)	 
- [`BarcodeReaderException`](class/BarcodeReaderException.md)	
- [`Contour`](class/Contour.md)	 
- [`DataMatrixDetails`](class/DataMatrixDetails.md)	
- [`DMDLSConnectionParameters`](class/DMDLSConnectionParameters.md) 
- [`DMLTSConnectionParameters`](class/DMLTSConnectionParameters.md) 
- [`ExtendedResult`](class/ExtendedResult.md)	
- [`FrameDecodingParameters`](class/FrameDecodingParameters.md)	
- [`FurtherModes`](class/FurtherModes.md)
- [`ImageData`](class/ImageData.md)	 
- [`IntermediateResult`](class/IntermediateResult.md)	
- [`LineSegment`](class/LineSegment.md)	 
- [`LocalizationResult`](class/LocalizationResult.md)	
- [`OneDCodeDetails`](class/OneDCodeDetails.md)	
- [`PDF417Details`](class/PDF417Details.md)	
- [`PublicRuntimeSettings`](class/PublicRuntimeSettings.md)	
- [`QRCodeDetails`](class/QRCodeDetails.md)	
- [`Quadrilateral`](class/Quadrilateral.md)	 
- [`RegionDefinition`](class/RegionDefinition.md)	
- [`RegionOfInterest`](class/RegionOfInterest.md)	 
- [`SamplingImageData`](class/SamplingImageData.md)	 
- [`TextResult`](class/TextResult.md)	

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



## Interfaces

  | Interface | Description |
  |----------|-------------|
  | [`ErrorCallback`](interface.md#errorcallback) | Represents the method that will handle the error code returned by the SDK. |
  | [`IntermediateResultCallback`](interface.md#intermediateresultcallback) | Represents the method that will handle the intermediate result array returned by the SDK. |
  | [`TextResultCallback`](interface.md#textresultcallback) | Represents the method that will handle the text result array returned by the SDK. | 
