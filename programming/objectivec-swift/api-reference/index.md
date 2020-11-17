---
layout: default-layout
title: Dynamsoft Barcode Reader Objective-C & Swift API Reference - Main Page
description: This is the main page of Dynamsoft Barcode Reader for iOS SDK API Reference.
keywords: api reference, objective-c, oc, swift
needAutoGenerateSidebar: false
breadcrumbText: API Reference
---

# Dynamsoft Barcode Reader SDK - Objective-C & Swift API Reference

- [Attributes](#attributes)
- [Methods](#methods)
- [Error Code](#error-code)
- [Classes](#classes)
- [Enumerations](#enumerations)  

&nbsp; 

## Attributes 
  
| Attribute | Type |
|---------- | ---- |
| [`license`](#license) | *NSString\** |

### license

Stores the license used in DynamsoftBarcodeReader.

```objc
NSString* license
```

&nbsp;

## Methods

### Initialize
  
  | Method               | Description |
  |----------------------|-------------|
  | [`init`](methods/initialize.md#init) | Create an instance of Dynamsoft Barcode Reader. |


&nbsp; 


### Decode

  | Method               | Description |
  |----------------------|-------------|
  | [`decodeFileWithName`](methods/decode.md#decodefilewithname) | Decode barcodes from a specified image file. |
  | [`decodeImage`](methods/decode.md#decodeimage) | Decode barcodes from an image file in memory. |
  | [`decodeBuffer`](methods/decode.md#decodebuffer) | Decode barcodes from raw buffer. |
  | [`decodeBase64`](methods/decode.md#decodebase64) | Decode barcodes from a base64 encoded string. |
  | [`createIntermediateResult`](methods/decode.md#createintermediateresult) | Inits an intermediateResult struct with default values. |
  | [`decodeIntermediateResults`](methods/decode.md#decodeintermediateresults) | Decodes barcode from intermediate results. |


&nbsp; 


### Parameter and Runtime Settings

#### Basic
  
  | Method               | Description |
  |----------------------|-------------|
  | [`setModeArgument`](methods/parameter-and-runtime-settings-basic.md#setmodeargument) | Set argument value for the specified mode parameter. |
  | [`getModeArgument`](methods/parameter-and-runtime-settings-basic.md#getmodeargument) | Get argument value for the specified mode parameter. |
  | [`getRuntimeSettings`](methods/parameter-and-runtime-settings-basic.md#getruntimesettings) | Get current runtime settings. |
  | [`updateRuntimeSettings`](methods/parameter-and-runtime-settings-basic.md#updateruntimesettings) | Modify and update the current runtime settings. |
  | [`resetRuntimeSettings`](methods/parameter-and-runtime-settings-basic.md#resetruntimesettings) | Reset runtime settings to default. |

#### Advanced
  
  | Method               | Description |
  |----------------------|-------------|
  | [`initRuntimeSettingsWithFile`](methods/parameter-and-runtime-settings-advanced.md#initruntimesettingswithfile) | Initialize runtime settings with the settings in a given JSON file. |
  | [`initRuntimeSettingsWithString`](methods/parameter-and-runtime-settings-advanced.md#initruntimesettingswithstring) | Initialize runtime settings with the settings in a given JSON string. |
  | [`appendTplFileToRuntimeSettings`](methods/parameter-and-runtime-settings-advanced.md#appendtplfiletoruntimesettings) | Append a new template file to the current runtime settings. |
  | [`appendTplStringToRuntimeSettings`](methods/parameter-and-runtime-settings-advanced.md#appendtplstringtoruntimesettings) | Append a new template string to the current runtime settings. |
  | [`allParameterTemplateNames`](methods/parameter-and-runtime-settings-advanced.md#allparametertemplatenames) | Get the count of the parameter templates. |
  | [`outputSettingsToFile`](methods/parameter-and-runtime-settings-advanced.md#outputsettingstofile) | Output runtime settings to a settings file (JSON file). |
  | [`outputSettingsToString`](methods/parameter-and-runtime-settings-advanced.md#outputsettingstostring) | Output runtime settings to a string. |


&nbsp; 


### License
   
  | Method               | Description |
  |----------------------|-------------|
  | [`initWithLicense`](methods/license.md#initwithlicense) | Read product key and activate the SDK. |
  | [`initWithLicenseFromServer`](methods/license.md#initwithlicensefromserver) | Initialize license and connect to the specified server for online verification. |
  | [`outputLicenseToString`](methods/license.md#outputlicensetostring) | Output the license content to a string from the license server. |
  | [`initLicenseFromLTS`](methods/license.md#initlicensefromlts) | Initializes the barcode reader license and connects to the specified server for online verification. |

&nbsp; 


### Result
   
  | Method               | Description |
  |----------------------|-------------|
  | [`getIntermediateResult`](methods/result.md#getintermediateresult) | Get intermediate results. |


&nbsp; 


### Video

#### Decode
   
  | Method               | Description |
  |----------------------|-------------|
  | [`startFrameDecoding`](methods/video.md#startframedecoding) | Decode barcodes from inner frame queue. |
  | [`startFrameDecodingEx`](methods/video.md#startframedecodingex) | Decode barcodes from inner frame queue. |
  | [`appendFrame`](methods/video.md#appendframe) | Append a frame image buffer to the inner frame queue. |
  | [`stopFrameDecoding`](methods/video.md#stopframedecoding) | Stop thread used for frame decoding. |

#### Parameter
   
  | Method               | Description |
  |----------------------|-------------|
  | [`getFrameDecodingParameters`](methods/video.md#getframedecodingparameters) | Initialize frame decoding parameter. |

#### Delegate
   
  | Method               | Description |
  |----------------------|-------------|
  | [`setDBRErrorDelegate`](methods/video.md#setdbrerrordelegate) | Set callback function to process errors generated during frame decoding. |
  | [`setDBRTextResultDelegate`](methods/video.md#setdbrtextresultdelegate) | Set callback function to process text results generated during frame decoding. |
  | [`setDBRIntermediateResultDelegate`](methods/video.md#setdbrintermediateresultdelegate) | Set callback function to process intermediate results generated during frame decoding. |

#### Status retrieval
   
  | Method               | Description |
  |----------------------|-------------|
  | [`getLengthOfFrameQueue`](methods/video.md#getlengthofframequeue) | Get length of current inner frame queue. |
  

&nbsp; 

## [Error Code]({{ site.enumerations }}error-code.html)
		

&nbsp;

## [Classes]

- [`iAztecDetails`](class/iAztecDetails.md)	
- [`iContour`](class/iContour.md)	
- [`iDBRPoint`](class/iDBRPoint.md)	
- [`iDMLTSConnectionParameters`](class/iDMLTSConnectionParameters.md)		
- [`iDataMatrixDetails`](class/iDataMatrixDetails.md)		
- [`iExtendedResult`](class/iExtendedResult.md)		
- [`iFrameDecodingParameters`](class/iFrameDecodingParameters.md)	
- [`iFurtherModes`](class/iFurtherModes.md)		
- [`iImageData`](class/iImageData.md)		
- [`iIntermediateResult`](class/iIntermediateResult.md)	
- [`iLineSegment`](class/iLineSegment.md)		
- [`iLocalizationResult`](class/iLocalizationResult.md)		
- [`iOneDCodeDetails`](class/iOneDCodeDetails.md)		
- [`iPDF417Details`](class/iPDF417Details.md)		
- [`iPublicRuntimeSettings`](class/iPublicRuntimeSettings.md)		
- [`iQRCodeDetails`](class/iQRCodeDetails.md)
- [`iQuadrilateral`](class/iQuadrilateral.md)
- [`iRegionDefinition`](class/iRegionDefinition.md)		
- [`iRegionOfInterest`](class/iRegionOfInterest.md)		
- [`iSamplingImageData`](class/iSamplingImageData.md)		
- [`iTextResult`](class/iTextResult.md)


&nbsp; 


## [Enumerations]()

- [`EnumAccompanyingTextRecognitionMode`]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode)	
- [`EnumBarcodeColourMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode)	
- [`EnumBarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode)	
- [`EnumBarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat)	
- [`EnumBarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2)	
- [`EnumBinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode)
- [`EnumClarityCalculationMethod`]({{ site.enumerations }}frame-decoding-enums.html#claritycalculationmethod) 
- [`EnumClarityFilterMode`]({{ site.enumerations }}frame-decoding-enums.html#clarityfiltermode) 
- [`EnumColourClusteringMode`]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode)	
- [`EnumColourConversionMode`]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode)	
- [`EnumConflictMode`]({{ site.enumerations }}parameter-mode-enums.html#conflictmode)	
- [`EnumDeblurMode`]({{ site.enumerations }}parameter-mode-enums.html#deblurmode)
- [`EnumDeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode)
- [`EnumDMChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeway)
- [`EnumDMLicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule)
- [`EnumDMUUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod)
- [`EnumDPMCodeReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode)	
- [`EnumGrayscaleTransformationMode`]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode)	
- [`EnumImagePixelFormat`]({{ site.enumerations }}other-enums.html#imagepixelformat)	
- [`EnumImagePreprocessingMode`]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode)	
- [`EnumIMResultDataType`]({{ site.enumerations }}result-enums.html#imresultdatatype)	
- [`EnumIntermediateResultSavingMode`]({{ site.enumerations }}result-enums.html#intermediateresultsavingmode)	
- [`EnumIntermediateResultType`]({{ site.enumerations }}result-enums.html#intermediateresulttype)	
- [`EnumLocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode)
- [`EnumPDFReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#pdfreadingmode)   
- [`EnumQRCodeErrorCorrectionLevel`]({{ site.enumerations }}other-enums.html#qrcodeerrorcorrectionlevel)	
- [`EnumRegionPredetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode)	
- [`EnumResultCoordinateType`]({{ site.enumerations }}result-enums.html#resultcoordinatetype)	
- [`EnumResultType`]({{ site.enumerations }}result-enums.html#resulttype)	
- [`EnumScaleUpMode`]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode)	
- [`EnumTerminatePhase`]({{ site.enumerations }}parameter-mode-enums.html#terminatephase)	
- [`EnumTextAssistedCorrectionMode`]({{ site.enumerations }}parameter-mode-enums.html#textassistedcorrectionmode)	
- [`EnumTextFilterMode`]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode)	
- [`EnumTextResultOrderMode`]({{ site.enumerations }}result-enums.html#textresultordermode)	
- [`EnumTextureDetectionMode`]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode)



