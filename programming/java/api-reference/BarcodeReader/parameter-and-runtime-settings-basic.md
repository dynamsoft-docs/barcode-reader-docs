---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - BarcodeReader Parameter and Runtime Settings Basic Methods
description: This page shows BarcodeReader basic Runtime Settings methods of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: setModeArgument, getModeArgument, getRuntimeSettings, updateRuntimeSettings, resetRuntimeSettings, parameter and runtime settings basic methods, BarcodeReader, api reference, java
needAutoGenerateSidebar: true
---


# Java API Reference - BarcodeReader Parameter and Runtime Settings Basic Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`setModeArgument`](#setmodeargument) | Set argument value for the specified mode parameter. |
  | [`getModeArgument`](#getmodeargument) | Get argument value for the specified mode parameter. |
  | [`getRuntimeSettings`](#getruntimesettings) | Get current runtime settings. |
  | [`updateRuntimeSettings`](#updateruntimesettings) | Modify and update the current runtime settings. |
  | [`resetRuntimeSettings`](#resetruntimesettings) | Reset runtime settings to default. |

  ---



  
## setModeArgument

Sets the optional argument for a specified mode in Modes parameters.


```java
void com.dynamsoft.dbr.BarcodeReader.setModeArgument(String modesName, int index, String argumentName, String argumentValue)	throws BarcodeReaderException
```   
#### Parameters
`modesName` The mode parameter name to set argument.  
`index` The array index of mode parameter to indicate a specific mode.  
`argumentName` The name of the argument to set.  
`argumentValue` The value of the argument to set. 

#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md)


#### Remark
Check follow link for available modes and arguments:
- [`BarcodeColourModes`]({{ site.parameters_reference }}image-parameter/BarcodeColourModes.html#barcodecolourmodes)
- [`BinarizationModes`]({{ site.parameters_reference }}image-parameter/BinarizationModes.html#binarizationmodes)
- [`ColourClusteringModes`]({{ site.parameters_reference }}image-parameter/ColourClusteringModes.html#colourclusteringmodes)
- [`ColourConversionModes`]({{ site.parameters_reference }}image-parameter/ColourConversionModes.html#colourconversionmodes)
- [`DeformationResistingModes`]({{ site.parameters_reference }}image-parameter/DeformationResistingModes.html#deformationresistingmodes)
- [`ImagePreprocessingModes`]({{ site.parameters_reference }}image-parameter/ImagePreprocessingModes.html#imagepreprocessingmodes)
- [`IntermediateResultSavingMode`]({{ site.parameters_reference }}image-parameter/IntermediateResultSavingMode.html#intermediateresultsavingmode)
- [`LocalizationModes`]({{ site.parameters_reference }}image-parameter/LocalizationModes.html#localizationmodes)
- [`RegionPredetectionModes`]({{ site.parameters_reference }}image-parameter/RegionPredetectionModes.html#regionpredetectionmodes)
- [`ScaleUpModes`]({{ site.parameters_reference }}image-parameter/ScaleUpModes.html#scaleupmodes)
- [`TextAssistedCorrectionMode`]({{ site.parameters_reference }}image-parameter/TextAssistedCorrectionMode.html#textassistedcorrectionmode)
- [`TextFilterModes`]({{ site.parameters_reference }}image-parameter/TextFilterModes.html#textfiltermodes)
- [`TextureDetectionModes`]({{ site.parameters_reference }}image-parameter/TextureDetectionModes.html#texturedetectionmodes) 

#### Code Snippet
```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
PublicRuntimeSettings settings = reader.getRuntimeSettings();
settings.binarizationModes[0] = EnumBinarizationMode.BM_LOCAL_BLOCK;
reader.updateRuntimeSettings(settings);
reader.setModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", "1");
reader.destroy();
```

&nbsp;





## getModeArgument

Gets the optional argument for a specified mode in Modes parameters.

```java
String com.dynamsoft.dbr.BarcodeReader.getModeArgument(String modesName, int index, String argumentName) throws BarcodeReaderException
```   
   
#### Parameters  
`modesName` The mode parameter name to get argument.  
`index` The array index of mode parameter to indicate a specific mode.  
`argumentName` The name of the argument to get.

#### Return value
the optional argument for a specified mode in Modes parameters.

#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

#### Remark
Check follow link for available modes and arguments:
- [`BarcodeColourModes`]({{ site.parameters_reference }}image-parameter/BarcodeColourModes.html#barcodecolourmodes)
- [`BinarizationModes`]({{ site.parameters_reference }}image-parameter/BinarizationModes.html#binarizationmodes)
- [`ColourClusteringModes`]({{ site.parameters_reference }}image-parameter/ColourClusteringModes.html#colourclusteringmodes)
- [`ColourConversionModes`]({{ site.parameters_reference }}image-parameter/ColourConversionModes.html#colourconversionmodes)
- [`DeformationResistingModes`]({{ site.parameters_reference }}image-parameter/DeformationResistingModes.html#deformationresistingmodes)
- [`ImagePreprocessingModes`]({{ site.parameters_reference }}image-parameter/ImagePreprocessingModes.html#imagepreprocessingmodes)
- [`IntermediateResultSavingMode`]({{ site.parameters_reference }}image-parameter/IntermediateResultSavingMode.html#intermediateresultsavingmode)
- [`LocalizationModes`]({{ site.parameters_reference }}image-parameter/LocalizationModes.html#localizationmodes)
- [`RegionPredetectionModes`]({{ site.parameters_reference }}image-parameter/RegionPredetectionModes.html#regionpredetectionmodes)
- [`ScaleUpModes`]({{ site.parameters_reference }}image-parameter/ScaleUpModes.html#scaleupmodes)
- [`TextAssistedCorrectionMode`]({{ site.parameters_reference }}image-parameter/TextAssistedCorrectionMode.html#textassistedcorrectionmode)
- [`TextFilterModes`]({{ site.parameters_reference }}image-parameter/TextFilterModes.html#textfiltermodes)
- [`TextureDetectionModes`]({{ site.parameters_reference }}image-parameter/TextureDetectionModes.html#texturedetectionmodes)    

#### Code Snippet
```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
PublicRuntimeSettings settings = reader.getRuntimeSettings();
settings.binarizationModes[0] = EnumBinarizationMode.BM_LOCAL_BLOCK;
reader.updateRuntimeSettings(settings);
reader.setModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", "1");
String argumentValue = reader.getModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy");
reader.destroy();
```

&nbsp;





## getRuntimeSettings

Get current settings and save them into a [`PublicRuntimeSettings`](../class/PublicRuntimeSettings.md) struct.

```java
PublicRuntimeSettings com.dynamsoft.dbr.BarcodeReader.getRuntimeSettings() throws BarcodeReaderException	
```   
 
#### Return value
The struct of template settings.

#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

#### Code Snippet
```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
PublicRuntimeSettings settings = reader.getRuntimeSettings();
reader.destroy();
```

&nbsp;





## updateRuntimeSettings

Update runtime settings with a given [`PublicRuntimeSettings`](../class/PublicRuntimeSettings.md) struct.

```java
void com.dynamsoft.dbr.BarcodeReader.updateRuntimeSettings(PublicRuntimeSettings settings) throws BarcodeReaderException
```   
   
#### Parameters
`settings`	The struct of template settings.

#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

#### Code Snippet
```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
PublicRuntimeSettings settings = reader.getRuntimeSettings();
settings.deblurLevel = 9;
reader.updateRuntimeSettings(settings);
reader.destroy();
```

&nbsp;





## resetRuntimeSettings

Reset all parameters to default values.

```java
void com.dynamsoft.dbr.BarcodeReader.resetRuntimeSettings()	throws BarcodeReaderException

#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md)
```   

#### Code Snippet
```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
PublicRuntimeSettings settings = reader.getRuntimeSettings();
settings.deblurLevel = 9;
reader.updateRuntimeSettings(settings);
reader.resetRuntimeSettings();
reader.destroy();
```
