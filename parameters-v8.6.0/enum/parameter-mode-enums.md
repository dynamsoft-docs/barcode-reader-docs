---
layout: default-layout
title: Dynamsoft Barcode Reader Enumerations - Parameter Mode Enumerations
description: This article shows Parameter Mode Enumerations of Dynamsoft Barcode Reader.
keywords: BarcodeColourMode, BarcodeComplementMode, BinarizationMode, ColourClusteringMode, ColourConversionMode, ConflictMode, DeblurMode, DeformationResistingMode, DPMCodeReadingMode, GrayscaleTransformationMode, ImagePreprocessingMode, LocalizationMode, PDFReadingMode, RegionPredetectionMode, ScaleUpMode, TerminatePhase, TextFilterMode, TextureDetectionMode, parameter mode enumeration, enumeration
needAutoGenerateSidebar: true
needGenerateH3Content: false
---

# Parameter Mode Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`BarcodeColourMode`](#barcodecolourmode) | Describes the barcode colour mode. |
  | [`BarcodeComplementMode`](#barcodecomplementmode) | Describes the barcode complement mode. |
  | [`BinarizationMode`](#binarizationmode) | Describes the binarization mode. |
  | [`ColourClusteringMode`](#colourclusteringmode) | Describes the colour clustering mode. |
  | [`ColourConversionMode`](#colourconversionmode) | Describes the colour conversion mode. |
  | [`ConflictMode`](#conflictmode) | Describes the conflict mode. |
  | [`DeblurMode`](#deblurmode) | Describes the deblur mode. |
  | [`DeformationResistingMode`](#deformationresistingmode) | Describes the deformation resisting mode. |
  | [`DPMCodeReadingMode`](#dpmcodereadingmode) | Describes the DPM code reading mode. |
  | [`GrayscaleTransformationMode`](#grayscaletransformationmode) | Describes the grayscale transformation mode. |
  | [`ImagePreprocessingMode`](#imagepreprocessingmode) | Describes the image preprocessing mode. |
  | [`LocalizationMode`](#localizationmode) | Describes the localization mode. | 
  | [`PDFReadingMode`](#pdfreadingmode) | Describes the PDF reading mode.  |
  | [`RegionPredetectionMode`](#regionpredetectionmode) | Describes the region predetection mode. |
  | [`ScaleUpMode`](#scaleupmode) | Describes the scale up mode. |
  | [`TerminatePhase`](#terminatephase) | Describes the terminate phase. |
  | [`TextFilterMode`](#textfiltermode) | Describes the text filter mode. |
  | [`TextureDetectionMode`](#texturedetectionmode) | Describes the texture detection mode. | 


## BarcodeColourMode
Describes the barcode colour mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum BarcodeColourMode` |
| .Net | `enum Dynamsoft.DBR.EnumBarcodeColourMode` |
| JavaScript | `Dynamsoft.DBR.EnumBarcodeColourMode` |
| Python | `class EnumBarcodeColourMode(IntEnum)` |
| Java / Android | `class EnumBarcodeColourMode` |
| ObjC / Swift | `enum EnumBarcodeColourMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description | Valid Argument(s) |
| -------------------------- | ------------------- | ----- | ----------- | ----------------- |
| BICM_SKIP | EnumBarcodeColourModeSkip | 0x00 | Skips the barcode colour operation. | `N/A` |
| BICM_DARK_ON_LIGHT | EnumBarcodeColourModeDarkOnLight | 0x01 | Dark items on a light background. | [`LightReflection`]({{ site.parameters_reference }}barcode-colour-modes.html#lightreflection) |
| BICM_LIGHT_ON_DARK  | EnumBarcodeColourModeLightOnDark | 0x02 | Light items on a dark background. **Not supported yet**.  | `N/A` |
| BICM_DARK_ON_DARK  | EnumBarcodeColourModeDarkOnDark | 0x04 | Dark items on a dark background. **Not supported yet**.  | `N/A` |
| BICM_LIGHT_ON_LIGHT  | EnumBarcodeColourModeLightOnLight | 0x08 | Light items on a light background. **Not supported yet**.  | `N/A` |
| BICM_DARK_LIGHT_MIXED  | EnumBarcodeColourModeDarkLightMixed | 0x10 | The background is mixed by dark and light. **Not supported yet**.  | `N/A` |
| BICM_DARK_ON_LIGHT_DARK_SURROUNDING  | EnumBarcodeColourModeDarkOnLightDarkSurrounding | 0x20 | Dark item on a light background surrounded by dark.  | [`LightReflection`]({{ site.parameters_reference }}barcode-colour-modes.html#lightreflection) |







## BarcodeComplementMode
Describes the barcode complement mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum BarcodeComplementMode` |
| .Net | `enum Dynamsoft.DBR.EnumBarcodeComplementMode` |
| JavaScript | `Dynamsoft.DBR.EnumBarcodeComplementMode` |
| Python | `class EnumBarcodeComplementMode(IntEnum)` |
| Java / Android | `class EnumBarcodeComplementMode` |
| ObjC / Swift | `enum EnumBarcodeComplementMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| BCM_SKIP | EnumBarcodeComplementModeSkip | 0x00 | Skips the barcode complement. |
| BCM_AUTO | EnumBarcodeComplementModeAuto | 0x01 | **Not supported yet.** |
| BCM_GENERAL | EnumBarcodeComplementModeGeneral | 0x02 | Complements the barcode using the general algorithm. |







## BinarizationMode
Describes the binarization mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum BinarizationMode` |
| .Net | `enum Dynamsoft.DBR.EnumBinarizationMode` |
| JavaScript | `Dynamsoft.DBR.EnumBinarizationMode` |
| Python | `class EnumBinarizationMode(IntEnum)` |
| Java / Android | `class EnumBinarizationMode` |
| ObjC / Swift | `enum EnumBinarizationMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description | Valid Argument(s) |
| -------------------------- | ------------------- | ----- | ----------- | ----------------- |
| BM_SKIP | EnumBinarizationModeSkip | 0x00 | Skips the binarization. | `N/A` |
| BM_AUTO | EnumBinarizationModeAuto | 0x01 | **Not supported yet.** | `N/A` |
| BM_LOCAL_BLOCK | EnumBinarizationModeLocalBlock | 0x02 | Binarizes the image based on the local block. | [`BlockSizeX`]({{ site.parameters_reference }}binarization-modes.html#blocksizex)<br>[`BlockSizeY`]({{ site.parameters_reference }}binarization-modes.html#blocksizey)<br>[`EnableFillBinaryVacancy`]({{ site.parameters_reference }}binarization-modes.html#enablefillbinaryvacancy)<br>[`ImagePreprocessingModesIndex`]({{ site.parameters_reference }}binarization-modes.html#imagepreprocessingmodesindex)<br>[`ThresholdCompensation`]({{ site.parameters_reference }}binarization-modes.html#thresholdcompensation)<br> |
| BM_THRESHOLD | EnumBinarizationModeThreshold | 0x04 | Performs image binarization based on the given threshold. | [`BinarizationThreshold`]({{ site.parameters_reference }}binarization-modes.html#binarizationThreshold)<br>[`ImagePreprocessingModesIndex`]({{ site.parameters_reference }}binarization-modes.html#imagepreprocessingmodesindex) |







## ColourClusteringMode
Describes the colour clustering mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ColourClusteringMode` |
| .Net | `enum Dynamsoft.DBR.EnumColourClusteringMode` |
| JavaScript | `Dynamsoft.DBR.EnumColourClusteringMode` |
| Python | `class EnumColourClusteringMode(IntEnum)` |
| Java / Android | `class EnumColourClusteringMode` |
| ObjC / Swift | `enum EnumColourClusteringMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description | Valid Argument(s) |
| -------------------------- | ------------------- | ----- | ----------- | ----------------- |
| CCM_SKIP | EnumColourClusteringModeSkip | 0x00 | Skips the colour clustering. | `N/A` |
| CCM_AUTO | EnumColourClusteringModeAuto | 0x01 | **Not supported yet.** | `N/A` |
| CCM_GENERAL_HSV | EnumColourClusteringModeGeneralHSV | 0x02 | Clusters colours using the general algorithm based on HSV. | [`Sensitivity`]({{ site.parameters_reference }}colour-clustering-modes.html#sensitivity) |







## ColourConversionMode
Describes the colour conversion mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ColourConversionMode` |
| .Net | `enum Dynamsoft.DBR.EnumColourConversionMode` |
| JavaScript | `Dynamsoft.DBR.EnumColourConversionMode` |
| Python | `class EnumColourConversionMode(IntEnum)` |
| Java / Android | `class EnumColourConversionMode` |
| ObjC / Swift | `enum EnumColourConversionMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description | Valid Argument(s) |
| -------------------------- | ------------------- | ----- | ----------- | ----------------- |
| CICM_SKIP | EnumColourConversionModeSkip | 0x00 | Skip the colour conversion. | `N/A` |
| CICM_GENERAL | EnumColourConversionModeGeneral | 0x01 | Converts a colour image to a grayscale image using the general algorithm. | [`BlueChannelWeight`]({{ site.parameters_reference }}colour-conversion-modes.html#bluechannelweight)<br>[`GreenChannelWeight`]({{ site.parameters_reference }}colour-conversion-modes.html#greenchannelweight)<br>[`RedChannelWeight`]({{ site.parameters_reference }}colour-conversion-modes.html#redchannelweight) |







## ConflictMode
Describes the conflict mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ConflictMode` |
| .Net | `enum Dynamsoft.DBR.EnumConflictMode` |
| JavaScript | `Dynamsoft.DBR.EnumConflictMode` |
| Python | `class EnumConflictMode(IntEnum)` |
| Java / Android | `class EnumConflictMode` |
| ObjC / Swift | `enum EnumConflictMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| CM_IGNORE | EnumConflictModeIgnore | 0x01 | Ignores new settings and inherits the previous settings. |
| CM_OVERWRITE | EnumConflictModeOverwrite | 0x02 | Overwrites the old settings with new settings. |







## DeblurMode
Describes the deblur mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum DeblurMode` |
| .Net | `enum Dynamsoft.DBR.EnumDeblurMode` |
| JavaScript | `Dynamsoft.DBR.EnumDeblurMode` |
| Python | `class EnumDeblurMode(IntEnum)` |
| Java / Android | `class EnumDeblurMode` |
| ObjC / Swift | `enum EnumDeblurMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| DM_SKIP | EnumDeblurModeSkip | 0x00 | Skips the deblur process. |
| DM_DIRECT_BINARIZATION | EnumDeblurModeDirectBinarization | 0x01 | Performs deblur process using the direct binarization algorithm. |
| DM_THRESHOLD_BINARIZATION | EnumDeblurModeThresholdBinarization | 0x02 | Performs deblur process using the threshold binarization algorithm. |
| DM_GRAY_EQUALIZATION | EnumDeblurModeGrayEqualization | 0x04 | Performs deblur process using the gray equalization algorithm.|
| DM_SMOOTHING | EnumDeblurModeSmoothing | 0x08 | Performs deblur process using the smoothing algorithm.|
| DM_MORPHING | EnumDeblurModeMorphing | 0x10 | Performs deblur process using the morphing algorithm.|
| DM_DEEP_ANALYSIS | EnumDeblurModeDeepAnalysis | 0x20 | Performs deblur process using the deep analysis algorithm. |
| DM_SHARPENING | EnumDeblurModeSharpening | 0x40 | Performs deblur process using the sharpening algorithm. |
| DM_BASED_ON_LOC_BIN | EnumDeblurModeBasedOnLocBin | 0x80 | Performs deblur process based on the binary image from the localization process. |
| DM_SHARPENING_SMOOTHING | EnumDeblurModeSharpeningSmoothing | 0x100 | Performs deblur process using the sharpening and smoothing algorithm.|







## DeformationResistingMode
Describes the deformation resisting mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum DeformationResistingMode` |
| .Net | `enum Dynamsoft.DBR.EnumDeformationResistingMode` |
| JavaScript | `Dynamsoft.DBR.EnumDeformationResistingMode` |
| Python | `class EnumDeformationResistingMode(IntEnum)` |
| Java / Android | `class EnumDeformationResistingMode` |
| ObjC / Swift | `enum EnumDeformationResistingMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description | Valid Argument(s) |
| -------------------------- | ------------------- | ----- | ----------- | ----------------- |
| DRM_SKIP | EnumDeformationResistingModeSkip | 0x00 | Skip the deformation resisting. | `N/A` |
| DRM_AUTO | EnumDeformationResistingModeAuto | 0x01 | **Not supported yet.** | `N/A` |
| DRM_GENERAL | EnumDeformationResistingModeGeneral | 0x02 | Resists deformation using the general algorithm. | [`Level`]({{ site.parameters_reference }}deformation-resisting-modes.html#level) |







## DPMCodeReadingMode
Describes the DPM code reading mode.

### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum DPMCodeReadingMode` |
| .Net | `enum Dynamsoft.DBR.EnumDPMCodeReadingMode` |
| JavaScript | `Dynamsoft.DBR.EnumDPMCodeReadingMode` |
| Python | `class EnumDPMCodeReadingMode(IntEnum)` |
| Java / Android | `class EnumDPMCodeReadingMode` |
| ObjC / Swift | `enum EnumDPMCodeReadingMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| DPMCRM_SKIP | EnumDPMCodeReadingModeSkip | 0x00 | Skip the DPM code reading. |
| DPMCRM_AUTO | EnumDPMCodeReadingModeAuto | 0x01 | **Not supported yet.** |
| DPMCRM_GENERAL | EnumDPMCodeReadingModeGeneral | 0x02 | Reads DPM code using the general algorithm. |







## GrayscaleTransformationMode
Describes the grayscale transformation mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum GrayscaleTransformationMode` |
| .Net | `enum Dynamsoft.DBR.EnumGrayscaleTransformationMode` |
| JavaScript | `Dynamsoft.DBR.EnumGrayscaleTransformationMode` |
| Python | `class EnumGrayscaleTransformationMode(IntEnum)` |
| Java / Android | `class EnumGrayscaleTransformationMode` |
| ObjC / Swift | `enum EnumGrayscaleTransformationMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| GTM_SKIP  | EnumGrayscaleTransformationModeSkip | 0x00 | Skips grayscale transformation. |
| GTM_INVERTED  | EnumGrayscaleTransformationModeInverted | 0x01 | Transforms to inverted grayscale. Recommended for light on dark images. |
| GTM_ORIGINAL | EnumGrayscaleTransformationModeOriginal | 0x02 | Keeps the original grayscale. Recommended for dark on light images. |







## ImagePreprocessingMode
Describes the image preprocessing mode.

### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ImagePreprocessingMode` |
| .Net | `enum Dynamsoft.DBR.EnumImagePreprocessingMode` |
| JavaScript | `Dynamsoft.DBR.EnumImagePreprocessingMode` |
| Python | `class EnumImagePreprocessingMode(IntEnum)` |
| Java / Android | `class EnumImagePreprocessingMode` |
| ObjC / Swift | `enum EnumImagePreprocessingMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description | Valid Argument(s) |
| -------------------------- | ------------------- | ----- | ----------- | ----------------- |
| IPM_SKIP | EnumImagePreprocessingModeSkip | 0x00 | Skips image preprocessing. | `N/A` |
| IPM_AUTO | EnumImagePreprocessingModeAuto | 0x01 | **Not supported yet.** | `N/A` |
| IPM_GENERAL | EnumImagePreprocessingModeGeneral | 0x02 | Takes the unpreprocessed image for following operations. | `N/A` |
| IPM_GRAY_EQUALIZE | EnumImagePreprocessingModeGrayEqualize | 0x04 | Preprocesses the image using the gray equalization algorithm. | [`Sensitivity`]({{ site.parameters_reference }}image-preprocessing-modes.html#sensitivity) |
| IPM_GRAY_SMOOTH | EnumImagePreprocessingModeGraySmooth | 0x08 | Preprocesses the image using the gray smoothing algorithm. | [`SmoothBlockSizeX`]({{ site.parameters_reference }}image-preprocessing-modes.html#smoothblocksizex)<br>[`SmoothBlockSizeY`]({{ site.parameters_reference }}image-preprocessing-modes.html#smoothblocksizey) |
| IPM_SHARPEN_SMOOTH | EnumImagePreprocessingModeSharpenSmooth | 0x10 | Preprocesses the image using the sharpening and smoothing algorithm. | [`SmoothBlockSizeX`]({{ site.parameters_reference }}image-preprocessing-modes.html#smoothblocksizex)<br>[`SmoothBlockSizeY`]({{ site.parameters_reference }}image-preprocessing-modes.html#smoothblocksizey)<br>[`SharpenBlockSizeX`]({{ site.parameters_reference }}image-preprocessing-modes.html#sharpenblocksizex)<br>[`SharpenBlockSizeY`]({{ site.parameters_reference }}image-preprocessing-modes.html#sharpenblocksizey) |
| IPM_MORPHOLOGY  | EnumImagePreprocessingModeMorphology | 0x20 | Preprocesses the image using the morphology algorithm. | [`MorphOperation`]({{ site.parameters_reference }}image-preprocessing-modes.html#morphoperation)<br>[`MorphShape`]({{ site.parameters_reference }}image-preprocessing-modes.html#morphshape)<br>[`MorphOperationKernelSizeX`]({{ site.parameters_reference }}image-preprocessing-modes.html#morphoperationkernelsizex)<br>[`MorphOperationKernelSizeY`]({{ site.parameters_reference }}image-preprocessing-modes.html#morphoperationkernelsizey) |







## LocalizationMode
Describes the localization mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum LocalizationMode` |
| .Net | `enum Dynamsoft.DBR.EnumLocalizationMode` |
| JavaScript | `Dynamsoft.DBR.EnumLocalizationMode` |
| Python | `class EnumLocalizationMode(IntEnum)` |
| Java / Android | `class EnumLocalizationMode` |
| ObjC / Swift | `enum EnumLocalizationMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description | Valid Argument(s) |
| -------------------------- | ------------------- | ----- | ----------- | ----------------- |
| LM_SKIP | EnumLocalizationModeSkip | 0x00 | Skips localization. | `N/A` |
| LM_AUTO  | EnumLocalizationModeAuto | 0x01 | Not supported yet. | `N/A` |
| LM_CONNECTED_BLOCKS | EnumLocalizationModeConnectedBlocks | 0x02 | Localizes barcodes by searching for connected blocks. This algorithm usually gives best result and it is recommended to set ConnectedBlocks to the highest priority. | `N/A` |
| LM_STATISTICS | EnumLocalizationModeStatistics | 0x04 | Localizes barcodes by groups of contiguous black-white regions. This is optimized for QRCode and DataMatrix. | `N/A` |
| LM_LINES | EnumLocalizationModeLines | 0x08 | Localizes barcodes by searching for groups of lines. This is optimized for 1D and PDF417 barcodes. | `N/A` |
| LM_SCAN_DIRECTLY | EnumLocalizationModeScanDirectly | 0x10 |  Localizes barcodes quickly. This mode is recommended in interactive scenario. | [`ScanStride`]({{ site.parameters_reference }}localization-modes.html#scanstride)<br>[`ScanDirection`]({{ site.parameters_reference }}localization-modes.html#scandirection) |
| LM_STATISTICS_MARKS | EnumLocalizationModeStatisticsMarks | 0x20 | Localizes barcodes by groups of marks.This is optimized for DPM codes. | `N/A` |
| LM_STATISTICS_POSTAL_CODE | EnumLocalizationModeStatisticsPostalCode | 0x40 | Localizes barcodes by groups of connected blocks and lines.This is optimized for postal codes. | `N/A` |
| LM_CENTRE | EnumLocalizationModeCentre | 0x80 | Localizes barcodes from the centre of the image. | `N/A` |







## PDFReadingMode
Describes the PDF reading mode. 


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum PDFReadingMode` |
| .Net | `enum Dynamsoft.DBR.EnumPDFReadingMode` |
| JavaScript | `Dynamsoft.DBR.EnumPDFReadingMode` |
| Python | `class EnumPDFReadingMode(IntEnum)` |
| Java / Android | `class EnumPDFReadingMode` |
| ObjC / Swift | `enum EnumPDFReadingMode` |



### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| PDFRM_AUTO | EnumPDFReadingModeAuto | 0x01 | Lets the library choose the reading mode automatically. |
| PDFRM_VECTOR | EnumPDFReadingModeVector | 0x02 | Detects barcode from vector data in PDF file. |
| PDFRM_RASTER | EnumPDFReadingModeRaster | 0x04 | Converts the PDF file to image(s) first, then perform barcode recognition. |






## RegionPredetectionMode
Describes the region predetection mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum RegionPredetectionMode` |
| .Net | `enum Dynamsoft.DBR.EnumRegionPredetectionMode` |
| JavaScript | `Dynamsoft.DBR.EnumRegionPredetectionMode` |
| Python | `class EnumRegionPredetectionMode(IntEnum)` |
| Java / Android | `class EnumRegionPredetectionMode` |
| ObjC / Swift | `enum EnumRegionPredetectionMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description | Valid Argument(s) |
| -------------------------- | ------------------- | ----- | ----------- | ----------------- |
| RPM_SKIP | EnumRegionPredetectionModeSkip | 0x00 | Skips region detection. | `N/A` |
| RPM_AUTO | EnumRegionPredetectionModeAuto | 0x01 | Lets the library choose an algorithm automatically to detect region. | `N/A` |
| RPM_GENERAL | EnumRegionPredetectionModeGeneral | 0x02 | Takes the whole image as a region. | `N/A` |
| RPM_GENERAL_RGB_CONTRAST | EnumRegionPredetectionModeGeneralRGBContrast | 0x04 | Detects region using the general algorithm based on RGB colour contrast. | [`MinImageDimension`]({{ site.parameters_reference }}region-predetection-modes.html#minimagedimension)<br>[`Sensitivity`]({{ site.parameters_reference }}region-predetection-modes.html#sensitivity)<br>[`SpatialIndexBlockSize`]({{ site.parameters_reference }}region-predetection-modes.html#spatialindexblocksize) |
| RPM_GENERAL_GRAY_CONTRAST | EnumRegionPredetectionModeGeneralGrayContrast | 0x08 | Detects region using the general algorithm based on gray contrast. | [`MinImageDimension`]({{ site.parameters_reference }}region-predetection-modes.html#minimagedimension)<br>[`Sensitivity`]({{ site.parameters_reference }}region-predetection-modes.html#sensitivity)<br>[`SpatialIndexBlockSize`]({{ site.parameters_reference }}region-predetection-modes.html#spatialindexblocksize) |
| RPM_GENERAL_HSV_CONTRAST | EnumRegionPredetectionModeGeneralHSVContrast | 0x10 | Detects region using the general algorithm based on HSV colour contrast. | [`AspectRatioRange`]({{ site.parameters_reference }}region-predetection-modes.html#aspectratiorange)<br>[`FindAccurateBoundary`]({{ site.parameters_reference }}region-predetection-modes.html#findaccurateboundary)<br>[`ForeAndBackgroundColours`]({{ site.parameters_reference }}region-predetection-modes.html#foreandbackgroundcolours)<br>[`HeightRange`]({{ site.parameters_reference }}region-predetection-modes.html#heightrange)<br>[`MinImageDimension`]({{ site.parameters_reference }}region-predetection-modes.html#minimagedimension)<br>[`RelativeBarcodeRegions`]({{ site.parameters_reference }}region-predetection-modes.html#relativebarcoderegions)<br>[`Sensitivity`]({{ site.parameters_reference }}region-predetection-modes.html#sensitivity)<br>[`SpatialIndexBlockSize`]({{ site.parameters_reference }}region-predetection-modes.html#spatialindexblocksize)<br>[`WidthRange`]({{ site.parameters_reference }}region-predetection-modes.html#widthrange) |







## ScaleUpMode
Describes the scale up mode. 


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ScaleUpMode` |
| .Net | `enum Dynamsoft.DBR.EnumScaleUpMode` |
| JavaScript | `Dynamsoft.DBR.EnumScaleUpMode` |
| Python | `class EnumScaleUpMode(IntEnum)` |
| Java / Android | `class EnumScaleUpMode` |
| ObjC / Swift | `enum EnumScaleUpMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description | Valid Argument(s) |
| -------------------------- | ------------------- | ----- | ----------- | ----------------- |
| SUM_SKIP | EnumScaleUpModeSkip | 0x00 | Skip the scale-up process. | `N/A` |
| SUM_AUTO | EnumScaleUpModeAuto | 0x01 | The library chooses an interpolation method automatically to scale up. | `N/A` |
| SUM_LINEAR_INTERPOLATION | EnumScaleUpModeLinearInterpolation | 0x02 | Scales up using the linear interpolation method. | [`AcuteAngleWithXThreshold`]({{ site.parameters_reference }}scale-up-modes.html#acuteanglewithxthreshold)<br>[`ModuleSizeThreshold`]({{ site.parameters_reference }}scale-up-modes.html#modulesizethreshold)<br>[`TargetModuleSize`]({{ site.parameters_reference }}scale-up-modes.html#targetmodulesize) |
| SUM_NEAREST_NEIGHBOUR_INTERPOLATION | EnumScaleUpModeNearestNeighbourInterpolation | 0x04 | Scales up using the nearest-neighbour interpolation method. | [`AcuteAngleWithXThreshold`]({{ site.parameters_reference }}scale-up-modes.html#acuteanglewithxthreshold)<br>[`ModuleSizeThreshold`]({{ site.parameters_reference }}scale-up-modes.html#modulesizethreshold)<br>[`TargetModuleSize`]({{ site.parameters_reference }}scale-up-modes.html#targetmodulesize) |







## TerminatePhase
Describes the terminate phase.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum TerminatePhase` |
| .Net | `enum Dynamsoft.DBR.EnumTerminatePhase` |
| JavaScript | `Dynamsoft.DBR.EnumTerminatePhase` |
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








## TextFilterMode
Describes the text filter mode.

### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum TextFilterMode` |
| .Net | `enum Dynamsoft.DBR.EnumTextFilterMode` |
| JavaScript | `Dynamsoft.DBR.EnumTextFilterMode` |
| Python | `class EnumTextFilterMode(IntEnum)` |
| Java / Android | `class EnumTextFilterMode` |
| ObjC / Swift | `enum EnumTextFilterMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description | Valid Argument(s) |
| -------------------------- | ------------------- | ----- | ----------- | ----------------- |
| TFM_SKIP | EnumTextFilterModeSkip | 0x00 | Skip the text filtering. | `N/A` |
| TFM_AUTO | EnumTextFilterModeAuto | 0x01 | **Not supported yet.** | `N/A` |
| TFM_GENERAL_CONTOUR | EnumTextFilterModeGeneralContour | 0x02 | Filters text using the general algorithm based on contour. | [`MinImageDimension`]({{ site.parameters_reference }}text-filter-modes.html#minimagedimension)<br>[`Sensitivity`]({{ site.parameters_reference }}text-filter-modes.html#sensitivity) |







## TextureDetectionMode
Describes the texture detection mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum TextureDetectionMode` |
| .Net | `enum Dynamsoft.DBR.EnumTextureDetectionMode` |
| JavaScript | `Dynamsoft.DBR.EnumTextureDetectionMode` |
| Python | `class EnumTextureDetectionMode(IntEnum)` |
| Java / Android | `class EnumTextureDetectionMode` |
| ObjC / Swift | `enum EnumTextureDetectionMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description | Valid Argument(s) |
| -------------------------- | ------------------- | ----- | ----------- | ----------------- |
| TDM_SKIP  | EnumTextureDetectionModeSkip | 0x00 | Skips texture detection. | `N/A` |
| TDM_AUTO  | EnumTextureDetectionModeAuto | 0x01 | Not supported yet. | `N/A` |
| TDM_GENERAL_WIDTH_CONCENTRATION  | EnumTextureDetectionModeGeneralWidthConcentration | 0x02 | Detects texture using the general algorithm. | [`Sensitivity`]({{ site.parameters_reference }}texture-detection-modes.html#sensitivity) |


