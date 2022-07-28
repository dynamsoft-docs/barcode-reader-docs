---
layout: default-layout
title: Dynamsoft Barcode Reader Enumerations - Parameter Mode Enumerations
description: This article shows Parameter Mode Enumerations of Dynamsoft Barcode Reader.
keywords: AccompanyingTextRecognitionMode, BarcodeColourMode, BarcodeComplementMode, BinarizationMode, ColourClusteringMode, ColourConversionMode, ConflictMode, DeformationResistingMode, DPMCodeReadingMode, GrayscaleTransformationMode, ImagePreprocessingMode, LocalizationMode, PDFReadingMode, RegionPredetectionMode, ScaleUpMode, TerminatePhase, TextAssistedCorrectionMode, TextFilterMode, TextureDetectionMode, parameter mode enumeration, enumeration
needAutoGenerateSidebar: true
needGenerateH3Content: false
permalink: /parameters/enum/parameter-mode-enums-v7.6.0.html
---

# Parameter Mode Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`AccompanyingTextRecognitionMode`](#accompanyingtextrecognitionmode) | Describes the accompanying text recognition mode. |
  | [`BarcodeColourMode`](#barcodecolourmode) | Describes the barcode colour mode. |
  | [`BarcodeComplementMode`](#barcodecomplementmode) | Describes the barcode complement mode. |
  | [`BinarizationMode`](#binarizationmode) | Describes the binarization mode. |
  | [`ColourClusteringMode`](#colourclusteringmode) | Describes the colour clustering mode. |
  | [`ColourConversionMode`](#colourconversionmode) | Describes the colour conversion mode. |
  | [`ConflictMode`](#conflictmode) | Describes the conflict mode. |
  | [`DeformationResistingMode`](#deformationresistingmode) | Describes the deformation resisting mode. |
  | [`DPMCodeReadingMode`](#dpmcodereadingmode) | Describes the DPM code reading mode. |
  | [`GrayscaleTransformationMode`](#grayscaletransformationmode) | Describes the grayscale transformation mode. |
  | [`ImagePreprocessingMode`](#imagepreprocessingmode) | Describes the image preprocessing mode. |
  | [`LocalizationMode`](#localizationmode) | Describes the localization mode. | 
  | [`PDFReadingMode`](#pdfreadingmode) | Describes the PDF reading mode.  |
  | [`RegionPredetectionMode`](#regionpredetectionmode) | Describes the region predetection mode. |
  | [`ScaleUpMode`](#scaleupmode) | Describes the scale up mode. |
  | [`TerminatePhase`](#terminatephase) | Describes the terminate phase. |
  | [`TextAssistedCorrectionMode`](#textassistedcorrectionmode) | Describes the text assisted correction mode. |
  | [`TextFilterMode`](#textfiltermode) | Describes the text filter mode. |
  | [`TextureDetectionMode`](#texturedetectionmode) | Describes the texture detection mode. | 

  


## AccompanyingTextRecognitionMode
Describes the accompanying text recognition mode.   


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum AccompanyingTextRecognitionMode` |
| .Net | `enum Dynamsoft.Barcode.EnumAccompanyingTextRecognitionMode` |
| JavaScript | `Dynamsoft.EnumAccompanyingTextRecognitionMode` |
| Python | `class EnumAccompanyingTextRecognitionMode(IntEnum)` |
| Java / Android | `class EnumAccompanyingTextRecognitionMode` |
| ObjC / Swift | `enum EnumAccompanyingTextRecognitionMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| ATRM_SKIP | EnumAccompanyingTextRecognitionModeSkip | 0x00 | Skips the accompanying text recognition. |
| ATRM_GENERAL | EnumAccompanyingTextRecognitionModeGeneral | 0x01 | Recognizes accompanying texts using the general algorithm. Check arguments of [`AccompanyingTextRecognitionModes`]({{ site.parameters_reference }}accompanying-text-recognition-modes.html) for available argument settings. |



&nbsp;



## BarcodeColourMode
Describes the barcode colour mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum BarcodeColourMode` |
| .Net | `enum Dynamsoft.Barcode.EnumBarcodeColourMode` |
| JavaScript | `Dynamsoft.EnumBarcodeColourMode` |
| Python | `class EnumBarcodeColourMode(IntEnum)` |
| Java / Android | `class EnumBarcodeColourMode` |
| ObjC / Swift | `enum EnumBarcodeColourMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| BICM_SKIP | EnumBarcodeColourModeSkip | 0x00 | Skips the barcode colour operation. |
| BICM_DARK_ON_LIGHT | EnumBarcodeColourModeDarkOnLight | 0x01 | Dark items on a light background. Check arguments of [`BarcodeColourModes`]({{ site.parameters_reference }}barcode-colour-modes.html) for available argument settings. |
| BICM_LIGHT_ON_DARK  | EnumBarcodeColourModeLightOnDark | 0x02 | Light items on a dark background. **Not supported yet**. Check arguments of [`BarcodeColourModes`]({{ site.parameters_reference }}barcode-colour-modes.html) for available argument settings. |
| BICM_DARK_ON_DARK  | EnumBarcodeColourModeDarkOnDark | 0x04 | Dark items on a dark background. **Not supported yet**. Check arguments of [`BarcodeColourModes`]({{ site.parameters_reference }}barcode-colour-modes.html) for available argument settings. |
| BICM_LIGHT_ON_LIGHT  | EnumBarcodeColourModeLightOnLight | 0x08 | Light items on a light background. **Not supported yet**. Check arguments of [`BarcodeColourModes`]({{ site.parameters_reference }}barcode-colour-modes.html) for available argument settings. |
| BICM_DARK_LIGHT_MIXED  | EnumBarcodeColourModeDarkLightMixed | 0x10 | The background is mixed by dark and light. **Not supported yet**. Check arguments of [`BarcodeColourModes`]({{ site.parameters_reference }}barcode-colour-modes.html) for available argument settings. |
| BICM_DARK_ON_LIGHT_DARK_SURROUNDING  | EnumBarcodeColourModeDarkOnLightDarkSurrounding | 0x20 | Dark item on a light background surrounded by dark. Check arguments of [`BarcodeColourModes`]({{ site.parameters_reference }}barcode-colour-modes.html) for available argument settings. |



&nbsp;



## BarcodeComplementMode
Describes the barcode complement mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum BarcodeComplementMode` |
| .Net | `enum Dynamsoft.Barcode.EnumBarcodeComplementMode` |
| JavaScript | `Dynamsoft.EnumBarcodeComplementMode` |
| Python | `class EnumBarcodeComplementMode(IntEnum)` |
| Java / Android | `class EnumBarcodeComplementMode` |
| ObjC / Swift | `enum EnumBarcodeComplementMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| BCM_SKIP | EnumBarcodeComplementModeSkip | 0x00 | Skips the barcode complement. |
| BCM_AUTO | EnumBarcodeComplementModeAuto | 0x01 | **Not supported yet.** |
| BCM_GENERAL | EnumBarcodeComplementModeGeneral | 0x02 | Complements the barcode using the general algorithm. |



&nbsp;



## BinarizationMode
Describes the binarization mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum BinarizationMode` |
| .Net | `enum Dynamsoft.Barcode.EnumBinarizationMode` |
| JavaScript | `Dynamsoft.EnumBinarizationMode` |
| Python | `class EnumBinarizationMode(IntEnum)` |
| Java / Android | `class EnumBinarizationMode` |
| ObjC / Swift | `enum EnumBinarizationMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| BM_SKIP | EnumBinarizationModeSkip | 0x00 | Skips the binarization. |
| BM_AUTO | EnumBinarizationModeAuto | 0x01 | **Not supported yet.** |
| BM_LOCAL_BLOCK | EnumBinarizationModeLocalBlock | 0x02 | Binarizes the image based on the local block. Check arguments of [`BinarizationModes`]({{ site.parameters_reference }}binarization-modes.html) for available argument settings. |



&nbsp;



## ColourClusteringMode
Describes the colour clustering mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ColourClusteringMode` |
| .Net | `enum Dynamsoft.Barcode.EnumColourClusteringMode` |
| JavaScript | `Dynamsoft.EnumColourClusteringMode` |
| Python | `class EnumColourClusteringMode(IntEnum)` |
| Java / Android | `class EnumColourClusteringMode` |
| ObjC / Swift | `enum EnumColourClusteringMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| CCM_SKIP | EnumColourClusteringModeSkip | 0x00 | Skips the colour clustering. |
| CCM_AUTO | EnumColourClusteringModeAuto | 0x01 | **Not supported yet.** |
| CCM_GENERAL_HSV | EnumColourClusteringModeGeneralHSV | 0x02 | Clusters colours using the general algorithm based on HSV. Check arguments of [`ColourClusteringModes`]({{ site.parameters_reference }}colour-clustering-modes.html) for available argument settings. |



&nbsp;



## ColourConversionMode
Describes the colour conversion mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ColourConversionMode` |
| .Net | `enum Dynamsoft.Barcode.EnumColourConversionMode` |
| JavaScript | `Dynamsoft.EnumColourConversionMode` |
| Python | `class EnumColourConversionMode(IntEnum)` |
| Java / Android | `class EnumColourConversionMode` |
| ObjC / Swift | `enum EnumColourConversionMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| CICM_SKIP | EnumColourConversionModeSkip | 0x00 | Skip the colour conversion. |
| CICM_GENERAL | EnumColourConversionModeGeneral | 0x01 | Converts a colour image to a grayscale image using the general algorithm. Check arguments of [`ColourConversionModes`]({{ site.parameters_reference }}colour-conversion-modes.html) for available argument settings. |



&nbsp;



## ConflictMode
Describes the conflict mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ConflictMode` |
| .Net | `enum Dynamsoft.Barcode.EnumConflictMode` |
| JavaScript | `Dynamsoft.EnumConflictMode` |
| Python | `class EnumConflictMode(IntEnum)` |
| Java / Android | `class EnumConflictMode` |
| ObjC / Swift | `enum EnumConflictMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| CM_IGNORE | EnumConflictModeIgnore | 0x01 | Ignores new settings and inherits the previous settings. |
| CM_OVERWRITE | EnumConflictModeOverwrite | 0x02 | Overwrites the old settings with new settings. |



&nbsp;



## DeformationResistingMode
Describes the deformation resisting mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum DeformationResistingMode` |
| .Net | `enum Dynamsoft.Barcode.EnumDeformationResistingMode` |
| JavaScript | `Dynamsoft.EnumDeformationResistingMode` |
| Python | `class EnumDeformationResistingMode(IntEnum)` |
| Java / Android | `class EnumDeformationResistingMode` |
| ObjC / Swift | `enum EnumDeformationResistingMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| DRM_SKIP | EnumDeformationResistingModeSkip | 0x00 | Skip the deformation resisting. |
| DRM_AUTO | EnumDeformationResistingModeAuto | 0x01 | **Not supported yet.** |
| DRM_GENERAL | EnumDeformationResistingModeGeneral | 0x02 | Resists deformation using the general algorithm. Check arguments of [`DeformationResistingModes`]({{ site.parameters_reference }}deformation-resisting-modes.html) for available argument settings.|



&nbsp;



## DPMCodeReadingMode
Describes the DPM code reading mode.

### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum DPMCodeReadingMode` |
| .Net | `enum Dynamsoft.Barcode.EnumDPMCodeReadingMode` |
| JavaScript | `Dynamsoft.EnumDPMCodeReadingMode` |
| Python | `class EnumDPMCodeReadingMode(IntEnum)` |
| Java / Android | `class EnumDPMCodeReadingMode` |
| ObjC / Swift | `enum EnumDPMCodeReadingMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| DPMCRM_SKIP | EnumDPMCodeReadingModeSkip | 0x00 | Skip the DPM code reading. |
| DPMCRM_AUTO | EnumDPMCodeReadingModeAuto | 0x01 | **Not supported yet.** |
| DPMCRM_GENERAL | EnumDPMCodeReadingModeGeneral | 0x02 | Reads DPM code using the general algorithm. |



&nbsp;



## GrayscaleTransformationMode
Describes the grayscale transformation mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum GrayscaleTransformationMode` |
| .Net | `enum Dynamsoft.Barcode.EnumGrayscaleTransformationMode` |
| JavaScript | `Dynamsoft.EnumGrayscaleTransformationMode` |
| Python | `class EnumGrayscaleTransformationMode(IntEnum)` |
| Java / Android | `class EnumGrayscaleTransformationMode` |
| ObjC / Swift | `enum EnumGrayscaleTransformationMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| GTM_SKIP  | EnumGrayscaleTransformationModeSkip | 0x00 | Skips grayscale transformation. |
| GTM_INVERTED  | EnumGrayscaleTransformationModeInverted | 0x01 | Transforms to inverted grayscale. Recommended for light on dark images. |
| GTM_ORIGINAL | EnumGrayscaleTransformationModeOriginal | 0x02 | Keeps the original grayscale. Recommended for dark on light images. |



&nbsp;



## ImagePreprocessingMode
Describes the image preprocessing mode.

### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ImagePreprocessingMode` |
| .Net | `enum Dynamsoft.Barcode.EnumImagePreprocessingMode` |
| JavaScript | `Dynamsoft.EnumImagePreprocessingMode` |
| Python | `class EnumImagePreprocessingMode(IntEnum)` |
| Java / Android | `class EnumImagePreprocessingMode` |
| ObjC / Swift | `enum EnumImagePreprocessingMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| IPM_SKIP | EnumImagePreprocessingModeSkip | 0x00 | Skips image preprocessing. |
| IPM_AUTO | EnumImagePreprocessingModeAuto | 0x01 | **Not supported yet.** |
| IPM_GENERAL | EnumImagePreprocessingModeGeneral | 0x02 | Takes the unpreprocessed image for following operations. |
| IPM_GRAY_EQUALIZE | EnumImagePreprocessingModeGrayEqualize | 0x04 | Preprocesses the image using the gray equalization algorithm. Check arguments of [`ImagePreprocessingModes`]({{ site.parameters_reference }}image-preprocessing-modes.html) for available argument settings. |
| IPM_GRAY_SMOOTH | EnumImagePreprocessingModeGraySmooth | 0x08 | Preprocesses the image using the gray smoothing algorithm. Check arguments of [`ImagePreprocessingModes`]({{ site.parameters_reference }}image-preprocessing-modes.html) for available argument settings. |
| IPM_SHARPEN_SMOOTH | EnumImagePreprocessingModeSharpenSmooth | 0x10 | Preprocesses the image using the sharpening and smoothing algorithm. Check arguments of [`ImagePreprocessingModes`]({{ site.parameters_reference }}image-preprocessing-modes.html) for available argument settings. |
| IPM_MORPHOLOGY  | EnumImagePreprocessingModeMorphology | 0x20 | Preprocesses the image using the morphology algorithm. Check arguments of [`ImagePreprocessingModes`]({{ site.parameters_reference }}image-preprocessing-modes.html) for available argument settings. |



&nbsp;



## LocalizationMode
Describes the localization mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum LocalizationMode` |
| .Net | `enum Dynamsoft.Barcode.EnumLocalizationMode` |
| JavaScript | `Dynamsoft.EnumLocalizationMode` |
| Python | `class EnumLocalizationMode(IntEnum)` |
| Java / Android | `class EnumLocalizationMode` |
| ObjC / Swift | `enum EnumLocalizationMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| LM_SKIP | EnumLocalizationModeSkip | 0x00 | Skips localization. |
| LM_AUTO  | EnumLocalizationModeAuto | 0x01 | Not supported yet. |
| LM_CONNECTED_BLOCKS | EnumLocalizationModeConnectedBlocks | 0x02 | Localizes barcodes by searching for connected blocks. This algorithm usually gives best result and it is recommended to set ConnectedBlocks to the highest priority. |
| LM_STATISTICS | EnumLocalizationModeStatistics | 0x04 | Localizes barcodes by groups of contiguous black-white regions. This is optimized for QRCode and DataMatrix. |
| LM_LINES | EnumLocalizationModeLines | 0x08 | Localizes barcodes by searching for groups of lines. This is optimized for 1D and PDF417 barcodes. |
| LM_SCAN_DIRECTLY | EnumLocalizationModeScanDirectly | 0x10 |  Localizes barcodes quickly. This mode is recommended in interactive scenario. Check arguments of [`LocalizationModes`]({{ site.parameters_reference }}localization-modes.html) for available argument settings. |
| LM_STATISTICS_MARKS | EnumLocalizationModeStatisticsMarks | 0x20 | Localizes barcodes by groups of marks.This is optimized for DPM codes. |
| LM_STATISTICS_POSTAL_CODE | EnumLocalizationModeStatisticsPostalCode | 0x40 | Localizes barcodes by groups of connected blocks and lines.This is optimized for postal codes. |



&nbsp;



## PDFReadingMode
Describes the PDF reading mode. 


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum PDFReadingMode` |
| .Net | `enum Dynamsoft.Barcode.EnumPDFReadingMode` |
| JavaScript | `Dynamsoft.EnumPDFReadingMode` |
| Python | `class EnumPDFReadingMode(IntEnum)` |
| Java / Android | `class EnumPDFReadingMode` |
| ObjC / Swift | `enum EnumPDFReadingMode` |



### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| PDFRM_AUTO | EnumPDFReadingModeAuto | 0x01 | Lets the library choose the reading mode automatically. |
| PDFRM_VECTOR | EnumPDFReadingModeVector | 0x02 | Detects barcode from vector data in PDF file. |
| PDFRM_RASTER | EnumPDFReadingModeRaster | 0x04 | Converts the PDF file to image(s) first, then perform barcode recognition. |



&nbsp;


## RegionPredetectionMode
Describes the region predetection mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum RegionPredetectionMode` |
| .Net | `enum Dynamsoft.Barcode.EnumRegionPredetectionMode` |
| JavaScript | `Dynamsoft.EnumRegionPredetectionMode` |
| Python | `class EnumRegionPredetectionMode(IntEnum)` |
| Java / Android | `class EnumRegionPredetectionMode` |
| ObjC / Swift | `enum EnumRegionPredetectionMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| RPM_SKIP | EnumRegionPredetectionModeSkip | 0x00 | Skips region detection. |
| RPM_AUTO | EnumRegionPredetectionModeAuto | 0x01 | Lets the library choose an algorithm automatically to detect region. |
| RPM_GENERAL | EnumRegionPredetectionModeGeneral | 0x02 | Takes the whole image as a region. |
| RPM_GENERAL_RGB_CONTRAST | EnumRegionPredetectionModeGeneralRGBContrast | 0x04 | Detects region using the general algorithm based on RGB colour contrast. Check arguments of [`RegionPredetectionModes`]({{ site.parameters_reference }}region-predetection-modes.html) for available argument settings. |
| RPM_GENERAL_GRAY_CONTRAST | EnumRegionPredetectionModeGeneralGrayContrast | 0x08 | Detects region using the general algorithm based on gray contrast. Check arguments of [`RegionPredetectionModes`]({{ site.parameters_reference }}region-predetection-modes.html) for available argument settings. |
| RPM_GENERAL_HSV_CONTRAST | EnumRegionPredetectionModeGeneralHSVContrast | 0x10 | Detects region using the general algorithm based on HSV colour contrast. Check arguments of [`RegionPredetectionModes`]({{ site.parameters_reference }}region-predetection-modes.html) for available argument settings. |



&nbsp;



## ScaleUpMode
Describes the scale up mode. 


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ScaleUpMode` |
| .Net | `enum Dynamsoft.Barcode.EnumScaleUpMode` |
| JavaScript | `Dynamsoft.EnumScaleUpMode` |
| Python | `class EnumScaleUpMode(IntEnum)` |
| Java / Android | `class EnumScaleUpMode` |
| ObjC / Swift | `enum EnumScaleUpMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| SUM_SKIP | EnumScaleUpModeSkip | 0x00 | Skip the scale-up process. |
| SUM_AUTO | EnumScaleUpModeAuto | 0x01 | The library chooses an interpolation method automatically to scale up. |
| SUM_LINEAR_INTERPOLATION | EnumScaleUpModeLinearInterpolation | 0x02 | Scales up using the linear interpolation method. Check arguments of [`ScaleUpModes`]({{ site.parameters_reference }}scale-up-modes.html) for available argument settings. |
| SUM_NEAREST_NEIGHBOUR_INTERPOLATION | EnumScaleUpModeNearestNeighbourInterpolation | 0x04 | Scales up using the nearest-neighbour interpolation method. Check arguments of [`ScaleUpModes`]({{ site.parameters_reference }}scale-up-modes.html) for available argument settings. |



&nbsp;



## TerminatePhase
Describes the terminate phase.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum TerminatePhase` |
| .Net | `enum Dynamsoft.Barcode.EnumTerminatePhase` |
| JavaScript | `Dynamsoft.EnumTerminatePhase` |
| Python | `class EnumTerminatePhase(IntEnum)` |
| Java / Android | `class EnumTerminatePhase` |
| ObjC / Swift | `enum EnumTerminatePhase` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| TP_REGION_PREDETECTED | EnumTerminatePhasePredetected | 0x01 | Exits the barcode reading algorithm after the region predetection is done. |
| TP_IMAGE_PREPROCESSED | EnumTerminatePhasePreprocecessed | 0x02 | Exits the barcode reading algorithm after the region predetection and image pre-processing is done. |
| TP_IMAGE_BINARIZED | EnumTerminatePhaseBinarized | 0x04 | Exits the barcode reading algorithm after the region predetection, image pre-processing, and image binarization are done. |
| TP_BARCODE_LOCALIZED | EnumTerminatePhasesLocalized | 0x08 | Exits the barcode reading algorithm after the region predetection, image pre-processing, image binarization, and barcode localization are done. |
| TP_BARCODE_TYPE_DETERMINED | EnumTerminatePhaseDetermined | 0x10 | Exits the barcode reading algorithm after the region predetection, image pre-processing, image binarization, barcode localization, and barcode type determining are done. |
| TP_BARCODE_RECOGNIZED | EnumTerminatePhaseRecognized | 0x20 | Exits the barcode reading algorithm after the region predetection, image pre-processing, image binarization, barcode localization, barcode type determining, and barcode recognition are done. |



&nbsp;



## TextAssistedCorrectionMode
Describes the text assisted correction mode.

### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum TextAssistedCorrectionMode` |
| .Net | `enum Dynamsoft.Barcode.EnumTextAssistedCorrectionMode` |
| JavaScript | `Dynamsoft.EnumTextAssistedCorrectionMode` |
| Python | `class EnumTextAssistedCorrectionMode(IntEnum)` |
| Java / Android | `class EnumTextAssistedCorrectionMode` |
| ObjC / Swift | `enum EnumTextAssistedCorrectionMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| TACM_SKIP | EnumTextAssistedCorrectionModeSkip | 0x00 | Skips the text assisted correction. |
| TACM_AUTO | EnumTextAssistedCorrectionModeAuto | 0x01 | **Not supported yet.** |
| TACM_VERIFYING | EnumTextAssistedCorrectionModeVerifying | 0x02 | Uses the accompanying text to verify the decoded barcode result. Check arguments of [`TextAssistedCorrectionMode`]({{ site.parameters_reference }}text-assisted-correction-mode.html) for available argument settings. |
| TACM_VERIFYING_PATCHING | EnumTextAssistedCorrectionModeVerifyingPatching | 0x04 | Uses the accompanying text to verify and patch the decoded barcode result. Check arguments of [`TextAssistedCorrectionMode`]({{ site.parameters_reference }}text-assisted-correction-mode.html) for available argument settings. |



&nbsp;



## TextFilterMode
Describes the text filter mode.

### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum TextFilterMode` |
| .Net | `enum Dynamsoft.Barcode.EnumTextFilterMode` |
| JavaScript | `Dynamsoft.EnumTextFilterMode` |
| Python | `class EnumTextFilterMode(IntEnum)` |
| Java / Android | `class EnumTextFilterMode` |
| ObjC / Swift | `enum EnumTextFilterMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| TFM_SKIP | EnumTextFilterModeSkip | 0x00 | Skip the text filtering. |
| TFM_AUTO | EnumTextFilterModeAuto | 0x01 | **Not supported yet.** |
| TFM_GENERAL_CONTOUR | EnumTextFilterModeGeneralContour | 0x02 | Filters text using the general algorithm based on contour. Check arguments of [`TextFilterModes`]({{ site.parameters_reference }}text-filter-modes.html) for available argument settings. |



&nbsp;



## TextureDetectionMode
Describes the texture detection mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum TextureDetectionMode` |
| .Net | `enum Dynamsoft.Barcode.EnumTextureDetectionMode` |
| JavaScript | `Dynamsoft.EnumTextureDetectionMode` |
| Python | `class EnumTextureDetectionMode(IntEnum)` |
| Java / Android | `class EnumTextureDetectionMode` |
| ObjC / Swift | `enum EnumTextureDetectionMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| TDM_SKIP  | EnumTextureDetectionModeSkip | 0x00 | Skips texture detection. |
| TDM_AUTO  | EnumTextureDetectionModeAuto | 0x01 | Not supported yet. |
| TDM_GENERAL_WIDTH_CONCENTRATION  | EnumTextureDetectionModeGeneralWidthConcentration | 0x02 | Detects texture using the general algorithm. Check arguments of [`TextureDetectionModes`]({{ site.parameters_reference }}texture-detection-modes.html) for available argument settings. |


