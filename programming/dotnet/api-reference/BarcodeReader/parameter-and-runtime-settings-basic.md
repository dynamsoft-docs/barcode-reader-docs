---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - Basic Settings Methods
description: This page shows basic Runtime Settings methods of Dynamsoft Barcode Reader for .NET SDK.
keywords: SetModeArgument, GetModeArgument, GetRuntimeSettings, UpdateRuntimeSettings, ResetRuntimeSettings, Basic Settings Methods, BarcodeReader, api reference, .Net
needAutoGenerateSidebar: true
---


# Basic Settings Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`SetModeArgument`](#setmodeargument) | Sets the optional argument for a specified mode in Modes parameters. |
  | [`GetModeArgument`](#getmodeargument) | Gets the optional argument for a specified mode in Modes parameters.  |
  | [`GetRuntimeSettings`](#getruntimesettings) | Get current runtime settings. |
  | [`UpdateRuntimeSettings`](#updateruntimesettings) | Update runtime settings with a given struct. |
  | [`ResetRuntimeSettings`](#resetruntimesettings) | Resets all parameters to default values. |




## SetModeArgument

Sets the optional argument for a specified mode in Modes parameters. 


```csharp
EnumErrorCode Dynamsoft.DBR.BarcodeReader.SetModeArgument(string modesName, int index, string argumentName, string argumentValue, out string errorMessage)
```   
**Parameters**  
`[in]	modesName` <*string*> : The mode parameter name to set argument.  
`[in]	index` <*int*> : The array index of mode parameter to indicate a specific mode.  
`[in]	argumentName` <*string*> : The name of the argument to set.  
`[in]	argumentValue` <*string*> : The value of the argument to set.  
`[in,out]	errorMessage` <*string*> : The error message.

**Return Value**  
Returns error code.


**Code Snippet**  
```csharp
string errorMsg;
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings =  reader.GetRuntimeSettings();
pSettings.BinarizationModes[0] = BM_LOCAL_BLOCK;
string errorMessage;
reader.UpdateRuntimeSettings(pSettings);
EnumErrorCode error = reader.SetModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", "1", out errorMessage);
reader.Dispose();
```

**Remarks**  
Check follow link for available modes and arguments:
- [`EnumBarcodeColourModes`]({{ site.parameters_reference }}barcode-colour-modes.html#barcodecolourmodes)
- [`EnumBinarizationModes`]({{ site.parameters_reference }}binarization-modes.html#binarizationmodes)
- [`EnumColourClusteringModes`]({{ site.parameters_reference }}colour-clustering-modes.html#colourclusteringmodes)
- [`EnumColourConversionModes`]({{ site.parameters_reference }}colour-conversion-modes.html#colourconversionmodes)
- [`EnumDeformationResistingModes`]({{ site.parameters_reference }}deformation-resisting-modes.html#deformationresistingmodes)
- [`EnumImagePreprocessingModes`]({{ site.parameters_reference }}image-preprocessing-modes.html#imagepreprocessingmodes)
- [`EnumIntermediateResultSavingMode`]({{ site.parameters_reference }}intermediate-result-saving-mode.html#intermediateresultsavingmode)
- [`EnumLocalizationModes`]({{ site.parameters_reference }}localization-modes.html#localizationmodes)
- [`EnumRegionPredetectionModes`]({{ site.parameters_reference }}region-predetection-modes.html#regionpredetectionmodes)
- [`EnumScaleUpModes`]({{ site.parameters_reference }}scale-up-modes.html#scaleupmodes)
- [`EnumTextFilterModes`]({{ site.parameters_reference }}text-filter-modes.html#textfiltermodes)
- [`EnumTextureDetectionModes`]({{ site.parameters_reference }}texture-detection-modes.html#texturedetectionmodes) 




## GetModeArgument

Get argument value for the specified mode parameter.

```csharp
EnumErrorCode Dynamsoft.DBR.BarcodeReader.GetModeArgument(string modesName, int index, string argumentName, out string argumentValue, out string errorMessage)
```   
   
**Parameters**    
`[in]	modesName` <*string*> : The mode parameter name to get argument.  
`[in]	index` <*int*> : The array index of mode parameter to indicate a specific mode.  
`[in]	argumentName` <*string*> : The name of the argument to get.  
`[in,out]	argumentValue` <*string*> : The value of the argument to get.  
`[in,out]	errorMessage` <*Optional*><*string*> : The error message.

**Return Value**  
Returns error code.



**Code Snippet**  
```csharp
string errorMsg;
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings =  reader.GetRuntimeSettings();
pSettings.BinarizationModes[0] = BM_LOCAL_BLOCK;
string errorMessage;
reader.UpdateRuntimeSettings(pSettings);
EnumErrorCode error = reader.SetModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", "1", errorMessage);
string angumentValue;
EnumErrorCode error = reader.GetModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", out angumentValue, out errorMessage);
reader.Dispose();
```

**Remarks**  
Check follow link for available modes and arguments:
- [`EnumBarcodeColourModes`]({{ site.parameters_reference }}barcode-colour-modes.html#barcodecolourmodes)
- [`EnumBinarizationModes`]({{ site.parameters_reference }}binarization-modes.html#binarizationmodes)
- [`EnumColourClusteringModes`]({{ site.parameters_reference }}colour-clustering-modes.html#colourclusteringmodes)
- [`EnumColourConversionModes`]({{ site.parameters_reference }}colour-conversion-modes.html#colourconversionmodes)
- [`EnumDeformationResistingModes`]({{ site.parameters_reference }}deformation-resisting-modes.html#deformationresistingmodes)
- [`EnumImagePreprocessingModes`]({{ site.parameters_reference }}image-preprocessing-modes.html#imagepreprocessingmodes)
- [`EnumIntermediateResultSavingMode`]({{ site.parameters_reference }}intermediate-result-saving-mode.html#intermediateresultsavingmode)
- [`EnumLocalizationModes`]({{ site.parameters_reference }}localization-modes.html#localizationmodes)
- [`EnumRegionPredetectionModes`]({{ site.parameters_reference }}region-predetection-modes.html#regionpredetectionmodes)
- [`EnumScaleUpModes`]({{ site.parameters_reference }}scale-up-modes.html#scaleupmodes)
- [`EnumTextFilterModes`]({{ site.parameters_reference }}text-filter-modes.html#textfiltermodes)
- [`EnumTextureDetectionModes`]({{ site.parameters_reference }}texture-detection-modes.html#texturedetectionmodes)  




## GetRuntimeSettings

Gets current settings and save it into a struct. 

```csharp
PublicRuntimeSettings Dynamsoft.DBR.BarcodeReader.GetRuntimeSettings()
```


**Return Value**  
The struct of template settings.


**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md) The exception thrown by Dynamsoft Barcode Reader.  

**Code Snippet**  
```csharp
string errorMsg;
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings =  reader.GetRuntimeSettings();
reader.Dispose();
```

**See Also**  
[`PublicRuntimeSettings`](../struct/PublicRuntimeSettings.md)





## UpdateRuntimeSettings

Update runtime settings with a given struct. 

```csharp
void Dynamsoft.DBR.BarcodeReader.UpdateRuntimeSettings(PublicRuntimeSettings settings)
```   
   
**Parameters**  
`[in]	settings` <*[PublicRuntimeSettings](../struct/PublicRuntimeSettings.md)*> : The struct of template settings.    
 
**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md) The exception thrown by Dynamsoft Barcode Reader.  

**Code Snippet**  
```csharp
string errorMsg;
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings =  reader.GetRuntimeSettings();
settings.Timeout = 10000;
settings.MaxAlgorithmThreadCount = 3;
reader.UpdateRuntimeSettings(settings);
reader.Dispose();
```

**See Also**  
[`PublicRuntimeSettings`](../struct/PublicRuntimeSettings.md)





## ResetRuntimeSettings

Reset all parameters to default values.

```csharp
void Dynamsoft.DBR.BarcodeReader.ResetRuntimeSettings() 
```   

**Code Snippet**  
```csharp
string errorMsg;
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings =  reader.GetRuntimeSettings();
settings.Timeout = 10000;
settings.MaxAlgorithmThreadCount = 3;
reader.UpdateRuntimeSettings(settings);
reader.ResetRuntimeSettings();
reader.Dispose();

```
