---
layout: default-layout
title: Dynamsoft Barcode Reader C & C++ Struct - PublicRuntimeSettings
description: This page shows the PublicRuntimeSettings struct of Dynamsoft Barcode Reader for C & C++ Language.
keywords: PublicRuntimeSettings, struct, c, c++
needAutoGenerateSidebar: false
---


# PublicRuntimeSettings
Defines a struct to configure the barcode reading runtime settings. These settings control the barcode recognition process such as which barcode types to decode.

## Typedefs

```cpp
typedef struct tagPublicRuntimeSettings  PublicRuntimeSettings
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`terminatePhase`](#terminatephase) | [`TerminatePhase`]({{ site.enumerations }}parameter-mode-enums.html#terminatephase) |
| [`timeout`](#timeout) | *int* |
| [`maxAlgorithmThreadCount`](#maxalgorithmthreadcount) | *int* |
| [`expectedBarcodesCount`](#expectedbarcodescount) | *int* |
| [`barcodeFormatIds`](#barcodeformatids) | *int* |
| [`barcodeFormatIds_2`](#barcodeformatids_2) | *int* |
| [`pdfRasterDPI`](#pdfrasterdpi) | *int* |
| [`scaleDownThreshold`](#scaledownthreshold) | *int* |
| [`binarizationModes`](#binarizationmodes) | [`BinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode)\[8\] |
| [`localizationModes`](#localizationmodes) | [`LocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode)\[8\] |
| [`furtherModes`](#furthermodes) | [`FurtherModes`](FurtherModes.md) |
| [`deblurLevel`](#deblurlevel) | *int* |
| [`intermediateResultTypes`](#intermediateresulttypes) | *int* |
| [`intermediateResultSavingMode`](#intermediateresultsavingmode) | [`IntermediateResultSavingMode`]({{ site.enumerations }}result-enums.html#intermediateresultsavingmode) |
| [`resultCoordinateType`](#resultcoordinatetype) | [`ResultCoordinateType`]({{ site.enumerations }}result-enums.html#resultcoordinatetype) |
| [`textResultOrderModes`](#textresultordermodes) | [`TextResultOrderMode`]({{ site.enumerations }}result-enums.html#textresultordermode)\[8\] |
| [`returnBarcodeZoneClarity`](#returnbarcodezoneclarity) | *int* |
| [`region`](#region) | [`RegionDefinition`](RegionDefinition.md) |
| [`minBarcodeTextLength`](#minbarcodetextlength) | *int* |
| [`minResultConfidence`](#minresultconfidence) | *int* |
| [`scaleUpModes`](#scaleupmodes) | [`ScaleUpMode`]({{ site.enumerations }}parameter-mode-enums.html#scaleupmodes)\[8\] |
| [`pdfReadingMode`](#pdfreadingmode) | [`PDFReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#pdfreadingmode) | 
| [`reserved`](#reserved) | *char\[84\]* |


### terminatePhase
Sets the phase to stop the barcode reading algorithm.
```cpp
TerminatePhase tagPublicRuntimeSettings::terminatePhase
```
- **Value range**   
    Any one of the [`TerminatePhase`]({{ site.enumerations }}parameter-mode-enums.html#terminatephase) Enumeration items
      
- **Default value**   
    `TP_BARCODE_RECOGNIZED`
    
- **Remark**   
    When the recognition result is not desired, you can set this parameter can be set to skip certain processing stages.
    
- **See also**  
    [`TerminatePhase`]({{ site.enumerations }}parameter-mode-enums.html#terminatephase)
      

### timeout
Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. It does not include the time taken to load/decode an image (TIFF, PNG, etc.) from disk into memory.
```cpp
int tagPublicRuntimeSettings::timeout
```
- **Value range**   
    [0, 0x7fffffff]
      
- **Default value**   
    10000
    
- **Remark**   
    If you want to stop reading barcodes after a certain period of time, you can use this parameter to set a timeout.
    

### maxAlgorithmThreadCount
Sets the number of threads the image processing algorithm will use to decode barcodes.
```cpp
int tagPublicRuntimeSettings::timeout
```
- **Value range**   
    [1, 4]
      
- **Default value**   
    4
    
- **Remark**   
    To keep a balance between speed and quality, the library concurrently runs four different threads for barcode decoding by default.

### expectedBarcodesCount
Sets the number of barcodes expected to be detected for each image.
```cpp
int tagPublicRuntimeSettings::expectedBarcodesCount
```
- **Value range**   
    [0, 0x7fffffff]
      
- **Default value**   
    0
    
- **Remark**   
    0: means Unknown and it will find at least one barcode. 1: try to find one barcode. If one barcode is found, the library will stop the localization process and perform barcode decoding. n: try to find n barcodes. If the library only finds m (m<n) barcode, it will try different algorithms till n barcodes are found or all algorithms are tried.

### barcodeFormatIds
Sets the formats of the barcode in BarcodeFormat group 1 to be read. Barcode formats in BarcodeFormat group 1 can be combined.
```cpp
int tagPublicRuntimeSettings::barcodeFormatIds
```
- **Value range**   
    A combined value of [`BarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) Enumeration items
      
- **Default value**   
    `BF_ALL`
    
- **Remark**   
    If the barcode type(s) are certain, specifying the barcode type(s) to be read will speed up the recognition process. The barcode format our library will search for is composed of [BarcodeFormat group 1]({{ site.enumerations }}format-enums.html#barcodeformat) and [BarcodeFormat group 2]({{ site.enumerations }}format-enums.html#barcodeformat_2), so you need to specify the barcode format in group 1 and group 2 individually.
    
- **See also**  
    [`BarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat), [`BarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2)
      
### barcodeFormatIds_2
Sets the formats of the barcode in BarcodeFormat group 2 to be read. Barcode formats in BarcodeFormat group 2 can be combined.
```cpp
int tagPublicRuntimeSettings::barcodeFormatIds_2
```
- **Value range**   
    A combined value of [`BarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2) Enumeration items
      
- **Default value**   
    `BF2_NULL`
    
- **Remark**   
    If the barcode type(s) are certain, specifying the barcode type(s) to be read will speed up the recognition process. The barcode format our library will search for is composed of [BarcodeFormat group 1]({{ site.enumerations }}format-enums.html#barcodeformat) and [BarcodeFormat group 2]({{ site.enumerations }}format-enums.html#barcodeformat_2), so you need to specify the barcode format in group 1 and group 2 individually.
    
- **See also**  
    [`BarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat), [`BarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2)

### pdfRasterDPI
Sets the output image resolution.
```cpp
int tagPublicRuntimeSettings::pdfRasterDPI
```
- **Value range**   
    [100, 600]
      
- **Default value**   
    300
    
- **Remark**   
    When decoding barcodes from a PDF file using the DecodeFile method, the library will convert the PDF file to image(s) first, then perform barcode recognition.

### scaleDownThreshold
Sets the threshold for the image shrinking.
```cpp
int tagPublicRuntimeSettings::scaleDownThreshold
```
- **Value range**   
    [512, 0x7fffffff]
      
- **Default value**   
    2300
    
- **Remark**   
    If the shorter edge size is larger than the given threshold value, the library will calculate the required height and width of the barcode image and shrink the image to that size before localization. Otherwise, the library will perform barcode localization on the original image.

### binarizationModes
Sets the mode and priority for binarization.
```cpp
BinarizationMode tagPublicRuntimeSettings::binarizationModes[8]
```
- **Value range**   
    Each array item can be any one of the [`BinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode) Enumeration items.
      
- **Default value**   
    `[BM_LOCAL_BLOCK,BM_SKIP,BM_SKIP,BM_SKIP,BM_SKIP,BM_SKIP,BM_SKIP,BM_SKIP]`
    
- **Remark**   
    The array index represents the priority of the item. The smaller index is, the higher priority is.
    
- **See also**   
    [`BinarizationMode`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode)


### localizationModes
Sets the mode and priority for localization algorithms.
```cpp
LocalizationMode tagPublicRuntimeSettings::localizationModes[8]
```
- **Value range**   
    Each array item can be any one of the [`LocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) Enumeration items.
      
- **Default value**   
    `[LM_CONNECTED_BLOCKS, LM_SCAN_DIRECTLY, LM_STATISTICS, LM_LINES, LM_SKIP, LM_SKIP, LM_SKIP, LM_SKIP]`
    
- **Remark**   
    The array index represents the priority of the item. The smaller index is, the higher priority is.
    
- **See also**   
    [`LocalizationMode`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode)  


### furtherModes
Sets further modes.
```cpp
FurtherModes tagPublicRuntimeSettings::furtherModes
```

### deblurLevel
Sets the degree of blurriness of the barcode.
```cpp
int tagPublicRuntimeSettings::deblurLevel
```
- **Value range**   
    [0, 9]
      
- **Default value**   
    9
    
- **Remark**   
    If you have a blurry image, you can set this property to a larger value. The higher the value set, the more effort the library will spend to decode images, but it may also slow down the recognition process.

### intermediateResultTypes
Sets which types of intermediate result to be kept for further reference. Intermediate result types can be combined.
```cpp
int tagPublicRuntimeSettings::intermediateResultTypes
```
- **Value range**   
    A combined value of [`IntermediateResultType`]({{ site.enumerations }}result-enums.html#intermediateresulttype) Enumeration items
      
- **Default value**   
    0
    
- **See also**   
    [`IntermediateResultType`]({{ site.enumerations }}result-enums.html#intermediateresulttype)

### intermediateResultSavingMode
Sets the mode for saving intermediate result.
```cpp
IntermediateResultSavingMode tagPublicRuntimeSettings::intermediateResultSavingMode
```
- **Value range**   
    A value of [`IntermediateResultSavingMode`]({{ site.enumerations }}result-enums.html#intermediateresultsavingmode) Enumeration items
      
- **Default value**   
    IRSM_MEMORY
    
- **See also**   
    [`IntermediateResultSavingMode`]({{ site.enumerations }}result-enums.html#intermediateresultsavingmode)

### resultCoordinateType
Specifies the format for the coordinates returned.
```cpp
ResultCoordinateType tagPublicRuntimeSettings::resultCoordinateType
```
- **Value range**   
    Any one of the [`ResultCoordinateType`]({{ site.enumerations }}result-enums.html#resultcoordinatetype) Enumeration items
      
- **Default value**   
    IRSM_MEMORY
    
- **See also**   
    [`ResultCoordinateType`]({{ site.enumerations }}result-enums.html#resultcoordinatetype)


### textResultOrderModes
Sets the mode and priority for the order of the text results returned.
```cpp
TextResultOrderMode tagPublicRuntimeSettings::textResultOrderModes[8]
```
- **Value range**   
    Each array item can be any one of the [`TextResultOrderMode`]({{ site.enumerations }}result-enums.html#textresultordermode) Enumeration items.
      
- **Default value**   
    `[TROM_CONFIDENCE, TROM_POSITION, TROM_FORMAT, TROM_SKIP, TROM_SKIP, TROM_SKIP, TROM_SKIP, TROM_SKIP]`
    
- **Remark**   
    The array index represents the priority of the item. The smaller the index, the higher the priority.   
 
- **See also**    
    [`TextResultOrderMode`]({{ site.enumerations }}result-enums.html#textresultordermode)

### returnBarcodeZoneClarity
Sets whether or not to return the clarity of the barcode zone.
```cpp
int tagPublicRuntimeSettings::returnBarcodeZoneClarity
```
- **Value range**   
    [0,1]
      
- **Default value**   
    0
    
- **Remark**   
    0: Do not return the clarity of the barcode zone; 1: Return the clarity of the barcode zone.  

### region
Sets the region definition including regionTop, regionLeft, regionRight, regionBottom, and regionMeasuredByPercentage.
```cpp
RegionDefinition tagPublicRuntimeSettings::region
```

### minBarcodeTextLength
Sets the range of barcode text length for barcodes search.
```cpp
int tagPublicRuntimeSettings::minBarcodeTextLength
```
- **Value range**   
    [0, 0x7fffffff]
      
- **Default value**   
    0
    
- **Remark**   
    0: means no limitation on the barcode text length. 

### minResultConfidence
The minimum confidence of the result.
```cpp
int tagPublicRuntimeSettings::minResultConfidence
```
- **Value range**   
    [0, 100]
      
- **Default value**   
    0
    
- **Remark**   
    0: means no limitation on the result confidence.

### scaleUpModes
Sets the mode and priority to control the sampling methods of scale-up for linear barcode with small module sizes.
```cpp
ScaleUpMode tagPublicRuntimeSettings::scaleUpModes[8]
```
- **Value range**   
    Each array item can be any one of the [`ScaleUpMode`]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode) Enumeration items.
      
- **Default value**   
    `[SUM_AUTO, SUM_SKIP, SUM_SKIP, SUM_SKIP, SUM_SKIP, SUM_SKIP, SUM_SKIP, SUM_SKIP]`
    
- **Remark**   
    The array index represents the priority of the item. The smaller the index, the higher the priority.   
 
- **See also**    
    [`ScaleUpMode`]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode)


### pdfReadingMode
Sets the way to detect barcodes from a PDF file when using the DecodeFile method.
```cpp
PDFReadingMode tagPublicRuntimeSettings::pdfReadingMode
```
- **Value range**   
    Any one of the [`PDFReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#pdfreadingmode) Enumeration items. 
      
- **Default value**   
    `PDFRM_AUTO`  
 
- **See also**    
    [`PDFReadingMode`]({{ site.enumerations }}parameter-mode-enums.html#pdfreadingmode) 


### reserved
Reserved memory for struct. The length of this array indicates the size of the memory reserved for this struct.
```cpp
char tagPublicRuntimeSettings::reserved[84]
```
