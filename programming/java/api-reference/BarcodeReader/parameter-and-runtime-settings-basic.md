---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - Basic Settings Methods
description: This page shows basic Runtime Settings methods of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: setModeArgument, getModeArgument, getRuntimeSettings, updateRuntimeSettings, resetRuntimeSettings, Basic Settings Methods, BarcodeReader, api reference, java
needAutoGenerateSidebar: true
---


# Basic Settings Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`setModeArgument`](#setmodeargument) | Set argument value for the specified mode parameter. |
  | [`getModeArgument`](#getmodeargument) | Get argument value for the specified mode parameter. |
  | [`getRuntimeSettings`](#getruntimesettings) | Get current runtime settings. |
  | [`updateRuntimeSettings`](#updateruntimesettings) | Modify and update the current runtime settings. |
  | [`resetRuntimeSettings`](#resetruntimesettings) | Reset runtime settings to default. |




  
## setModeArgument

Sets the optional argument for a specified mode in Modes parameters.


```java
void com.dynamsoft.dbr.BarcodeReader.setModeArgument(String modesName, int index, String argumentName, String argumentValue)	throws BarcodeReaderException
```   
**Parameters**  
`modesName` The mode parameter name to set argument.  
`index` The array index of mode parameter to indicate a specific mode.  
`argumentName` The name of the argument to set.  
`argumentValue` The value of the argument to set. 

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md)



**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings();
settings.binarizationModes[0] = EnumBinarizationMode.BM_LOCAL_BLOCK;
reader.updateRuntimeSettings(settings);
reader.setModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", "1");
reader.destroy();
```

**Remarks**  
Check follow link for available modes and arguments:
- [`BarcodeColourModes`]({{ site.parameters_reference }}barcode-colour-modes.html#barcodecolourmodes)
- [`BinarizationModes`]({{ site.parameters_reference }}binarization-modes.html#binarizationmodes)
- [`ColourClusteringModes`]({{ site.parameters_reference }}colour-clustering-modes.html#colourclusteringmodes)
- [`ColourConversionModes`]({{ site.parameters_reference }}colour-conversion-modes.html#colourconversionmodes)
- [`DeformationResistingModes`]({{ site.parameters_reference }}deformation-resisting-modes.html#deformationresistingmodes)
- [`ImagePreprocessingModes`]({{ site.parameters_reference }}image-preprocessing-modes.html#imagepreprocessingmodes)
- [`IntermediateResultSavingMode`]({{ site.parameters_reference }}intermediate-result-saving-mode.html#intermediateresultsavingmode)
- [`LocalizationModes`]({{ site.parameters_reference }}localization-modes.html#localizationmodes)
- [`RegionPredetectionModes`]({{ site.parameters_reference }}region-predetection-modes.html#regionpredetectionmodes)
- [`ScaleUpModes`]({{ site.parameters_reference }}scale-up-modes.html#scaleupmodes)
- [`TextFilterModes`]({{ site.parameters_reference }}text-filter-modes.html#textfiltermodes)
- [`TextureDetectionModes`]({{ site.parameters_reference }}texture-detection-modes.html#texturedetectionmodes) 






## getModeArgument

Gets the optional argument for a specified mode in Modes parameters.

```java
String com.dynamsoft.dbr.BarcodeReader.getModeArgument(String modesName, int index, String argumentName) throws BarcodeReaderException
```   
   
**Parameters**    
`modesName` The mode parameter name to get argument.  
`index` The array index of mode parameter to indicate a specific mode.  
`argumentName` The name of the argument to get.

**Return Value**  
the optional argument for a specified mode in Modes parameters.

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md)


**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings();
settings.binarizationModes[0] = EnumBinarizationMode.BM_LOCAL_BLOCK;
reader.updateRuntimeSettings(settings);
reader.setModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", "1");
String argumentValue = reader.getModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy");
reader.destroy();
```

**Remarks**  
Check follow link for available modes and arguments:
- [`BarcodeColourModes`]({{ site.parameters_reference }}barcode-colour-modes.html#barcodecolourmodes)
- [`BinarizationModes`]({{ site.parameters_reference }}binarization-modes.html#binarizationmodes)
- [`ColourClusteringModes`]({{ site.parameters_reference }}colour-clustering-modes.html#colourclusteringmodes)
- [`ColourConversionModes`]({{ site.parameters_reference }}colour-conversion-modes.html#colourconversionmodes)
- [`DeformationResistingModes`]({{ site.parameters_reference }}deformation-resisting-modes.html#deformationresistingmodes)
- [`ImagePreprocessingModes`]({{ site.parameters_reference }}image-preprocessing-modes.html#imagepreprocessingmodes)
- [`IntermediateResultSavingMode`]({{ site.parameters_reference }}intermediate-result-saving-mode.html#intermediateresultsavingmode)
- [`LocalizationModes`]({{ site.parameters_reference }}localization-modes.html#localizationmodes)
- [`RegionPredetectionModes`]({{ site.parameters_reference }}region-predetection-modes.html#regionpredetectionmodes)
- [`ScaleUpModes`]({{ site.parameters_reference }}scale-up-modes.html#scaleupmodes)
- [`TextFilterModes`]({{ site.parameters_reference }}text-filter-modes.html#textfiltermodes)
- [`TextureDetectionModes`]({{ site.parameters_reference }}texture-detection-modes.html#texturedetectionmodes)    






## getRuntimeSettings

Get current settings and save them into a [`PublicRuntimeSettings`](../class/PublicRuntimeSettings.md) struct.

```java
PublicRuntimeSettings com.dynamsoft.dbr.BarcodeReader.getRuntimeSettings() throws BarcodeReaderException	
```   
 
**Return Value**  
A [`PublicRuntimeSettings`](../class/PublicRuntimeSettings.md) with current settings.

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings();
reader.destroy();
```







## updateRuntimeSettings

Update runtime settings with a given [`PublicRuntimeSettings`](../class/PublicRuntimeSettings.md) struct.

```java
void com.dynamsoft.dbr.BarcodeReader.updateRuntimeSettings(PublicRuntimeSettings settings) throws BarcodeReaderException
```   
   
**Parameters**  
`settings`	The struct of template settings.

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings();
settings.deblurLevel = 9;
reader.updateRuntimeSettings(settings);
reader.destroy();
```







## resetRuntimeSettings

Reset all parameters to default values.

```java
void com.dynamsoft.dbr.BarcodeReader.resetRuntimeSettings()	throws BarcodeReaderException

```   

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings();
settings.deblurLevel = 9;
reader.updateRuntimeSettings(settings);
reader.resetRuntimeSettings();
reader.destroy();
```
