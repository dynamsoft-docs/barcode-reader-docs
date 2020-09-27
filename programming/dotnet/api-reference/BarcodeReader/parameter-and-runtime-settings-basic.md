---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - BarcodeReader Parameter and Runtime Settings Basic Methods
description: This page shows BarcodeReader basic Runtime Settings methods of Dynamsoft Barcode Reader for .NET SDK.
keywords: SetModeArgument, GetModeArgument, GetRuntimeSettings, UpdateRuntimeSettings, ResetRuntimeSettings, parameter and runtime settings basic methods, BarcodeReader, api reference, .Net
needAutoGenerateSidebar: true
---


# .Net API Reference - BarcodeReader Parameter and Runtime Settings Basic Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`SetModeArgument`](#setmodeargument) | Sets the optional argument for a specified mode in Modes parameters. |
  | [`GetModeArgument`](#getmodeargument) | Gets the optional argument for a specified mode in Modes parameters.  |
  | [`GetRuntimeSettings`](#getruntimesettings) | Get current runtime settings. |
  | [`UpdateRuntimeSettings`](#updateruntimesettings) | Update runtime settings with a given struct. |
  | [`ResetRuntimeSettings`](#resetruntimesettings) | Resets all parameters to default values. |

  ---



## SetModeArgument

Sets the optional argument for a specified mode in Modes parameters. 


```C#
EnumErrorCode Dynamsoft.Barcode.BarcodeReader.SetModeArgument(string modesName, int index, string argumentName, string argumentValue, out string errorMessage)
```   
#### Parameters
`[in]	modesName` The mode parameter name to set argument.  
`[in]	index` The array index of mode parameter to indicate a specific mode.  
`[in]	argumentName` The name of the argument to set.  
`[in]	argumentValue` The value of the argument to set.  
`[in,out]	errorMessage` The error message.

#### Return value
Returns error code.

#### Remark
Check follow link for available modes and arguments:
- [`AccompanyingTextRecognitionModes`]({{ site.parameters_reference }}image-parameter/AccompanyingTextRecognitionModes.html#accompanyingtextrecognitionmodes)
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
```C#
BarcodeReader reader = new BarcodeReader();
reader.ProductKeys = "t0260NwAAAHV***************";
PublicRuntimeSettings settings =  reader.GetRuntimeSettings();
pSettings.BinarizationModes[0] = BM_LOCAL_BLOCK;
string errorMessage;
reader.UpdateRuntimeSettings(pSettings);
EnumErrorCode error = reader.SetModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", "1", out errorMessage);
reader.Dispose();
```


&nbsp;


## GetModeArgument

Get argument value for the specified mode parameter.

```C#
EnumErrorCode Dynamsoft.Barcode.BarcodeReader.GetModeArgument(string modesName, int index, string argumentName, out string argumentValue, out string errorMessage)
```   
   
#### Parameters  
`[in]	modesName` The mode parameter name to get argument.  
`[in]	index` The array index of mode parameter to indicate a specific mode.  
`[in]	argumentName` The name of the argument to get.  
`[in,out]	argumentValue` The value of the argument to get.  
`[in,out]	errorMessage`<sub>Optional</sub> The error message.

#### Return value
Returns error code.

#### Remark
Check follow link for available modes and arguments:
- [`AccompanyingTextRecognitionModes`]({{ site.parameters_reference }}image-parameter/AccompanyingTextRecognitionModes.html#accompanyingtextrecognitionmodes)
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
```C#
BarcodeReader reader = new BarcodeReader();
reader.ProductKeys = "t0260NwAAAHV***************";
PublicRuntimeSettings settings =  reader.GetRuntimeSettings();
pSettings.BinarizationModes[0] = BM_LOCAL_BLOCK;
string errorMessage;
reader.UpdateRuntimeSettings(pSettings);
EnumErrorCode error = reader.SetModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", "1", errorMessage);
string angumentValue;
EnumErrorCode error = reader.GetModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", out angumentValue, out errorMessage);
reader.Dispose();
```


&nbsp;


## GetRuntimeSettings

Gets current settings and save it into a struct. 

```C#
PublicRuntimeSettings Dynamsoft.Barcode.BarcodeReader.GetRuntimeSettings()
```


#### Return value
The struct of template settings.


#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md) The exception thrown by Dynamsoft Barcode Reader.  

#### Code Snippet
```C#
BarcodeReader reader = new BarcodeReader();
reader.ProductKeys = "t0260NwAAAHV***************";
PublicRuntimeSettings settings =  reader.GetRuntimeSettings();
reader.Dispose();
```


&nbsp;


## UpdateRuntimeSettings

Update runtime settings with a given struct. 

```C#
void Dynamsoft.Barcode.BarcodeReader.UpdateRuntimeSettings(PublicRuntimeSettings settings)
```   
   
#### Parameters
`[in]	settings` The struct of template settings.    
 
#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md) The exception thrown by Dynamsoft Barcode Reader.  

#### Code Snippet
```C#
BarcodeReader reader = new BarcodeReader();
reader.ProductKeys = "t0260NwAAAHV***************";
PublicRuntimeSettings settings =  reader.GetRuntimeSettings();
settings.Timeout = 10000;
settings.MaxAlgorithmThreadCount = 3;
reader.UpdateRuntimeSettings(settings);
reader.Dispose();
```


&nbsp;


## ResetRuntimeSettings

Reset all parameters to default values.

```C#
void Dynamsoft.Barcode.BarcodeReader.ResetRuntimeSettings() 
```   

#### Code Snippet
```C#
BarcodeReader reader = new BarcodeReader();
reader.ProductKeys = "t0260NwAAAHV***************";
PublicRuntimeSettings settings =  reader.GetRuntimeSettings();
settings.Timeout = 10000;
settings.MaxAlgorithmThreadCount = 3;
reader.UpdateRuntimeSettings(settings);
reader.ResetRuntimeSettings();
reader.Dispose();

```
