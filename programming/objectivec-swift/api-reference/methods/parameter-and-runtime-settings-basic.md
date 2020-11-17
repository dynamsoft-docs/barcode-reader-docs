---
layout: default-layout
title: Dynamsoft Barcode Reader Objective-C & Swift API Reference - Parameter and Runtime Settings Basic Methods
description: This page shows basic Runtime Settings methods of Dynamsoft Barcode Reader for iOS SDK.
keywords: setModeArgument, getModeArgument, getRuntimeSettings, updateRuntimeSettings, resetRuntimeSettings, parameter and runtime settings basic methods, api reference, objective-c, oc, swift
needAutoGenerateSidebar: true
---

# Objective-C API Reference - Parameter and Runtime Settings Basic Methods
   
  | Method               | Description |
  |----------------------|-------------|
  | [`setModeArgument`](#setmodeargument) | Sets the optional argument for a specified mode in Modes parameters. |
  | [`getModeArgument`](#getmodeargument) | Gets the optional argument for a specified mode in Modes parameters. |
  | [`getRuntimeSettings`](#getruntimesettings) | Get current runtime settings. |
  | [`updateRuntimeSettings`](#updateruntimesettings) | Update runtime settings with a given struct. |
  | [`resetRuntimeSettings`](#resetruntimesettings) | Resets all parameters to default values. |

---

## setModeArgument

Sets the optional argument for a specified mode in Modes parameters.

```objc
-(void)setModeArgument:(NSString* _Nonnull)modeName
                    index:(NSInteger)index 
                    argumentName:(NSString* _Nonnull)argumentName
                    argumentValue:(NSString* _Nonnull)argumentValue
                    error:(NSError* _Nullable * _Nullable)error;
```   
   
### Parameters

`[in] modesName` The mode parameter name to set argument.  
`[in] index` The array index of mode parameter to indicate a specific mode.  
`[in] argumentName` The name of the argument to set.  
`[in] argumentValue` The value of the argument to set.  
`[in,out] error` Input a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify nil for this parameter if you do not want the error information.
    
### Remark

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

### Code Snippet

Objective-C:

```objc
DynamsoftBarcodeReader *barcodeReader;
barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicense:@"t0260NwAAAHV***************"];
iPublicRuntimeSettings *settings;
NSError __autoreleasing * _Nullable error;
NSMutableArray *mArray = [NSMutableArray arrayWithArray:settings.binarizationModes];
mArray[0] = [NSNumber numberWithInteger:EnumBinarizationModeLocalBlock];
settings.binarizationModes = mArray;

[barcodeReader updateRuntimeSettings:settings error:&error];
[barcodeReader setModeArgument:@"BinarizationModes" index:0 argumentName:@"EnableFillBinaryVacancy" argumentValue:"1" error:&error];
```
Swift:

```Swift
let error: NSError? = NSError()
let mArray: NSMutableArray? = NSMutableArray()
let barcodeReader = DynamsoftBarcodeReader.init(license: "t0260NwAAAHV***************")
let settings = barcodeReader.getRuntimeSettings(error: nil)
mArray!.setArray(settings.binarizationModes as! [Any])
mArray![0] = EnumBinarizationMode.LocalBlock
settings.binarizationModes = mArray!
barcodeReader.updateRuntimeSettings(settings: settings, error: nil)
barcodeReader.setModeArgument(modeName: "BinarizationModes", index: 0, argumentName: "EnableFillBinaryVacancy", argumentValue: "1", error: &error)
```

## getModeArgument

Gets the optional argument for a specified mode in Modes parameters.

```objc
-(NSString* _Nonnull)getModeArgument:(NSString* _Nonnull)modeName
                            index:(NSInteger)index
                            argumentName:(NSString* _Nonnull)argumentName
                            error:(NSError* _Nullable * _Nullable)error;
```   
   
### Parameters 

`[in] modesName` The mode parameter name to get argument.  
`[in] index` The array index of mode parameter to indicate a specific mode.  
`[in] argumentName` The name of the argument to get.  
`[in,out] error` Input a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify nil for this parameter if you do not want the error information.

### Return value

the optional argument for a specified mode

### Remark

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

### Code Snippet

Objective-C:

```objc
DynamsoftBarcodeReader *barcodeReader;
barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicense:@"t0260NwAAAHV***************"];
iPublicRuntimeSettings *settings;
NSError __autoreleasing * _Nullable error;
NSString *argumentValue;
NSMutableArray *mArray = [NSMutableArray arrayWithArray:settings.binarizationModes];
mArray[0] = [NSNumber numberWithInteger:EnumBinarizationModeLocalBlock];
settings.binarizationModes = mArray;

[barcodeReader updateRuntimeSettings:settings error:&error];
[barcodeReader setModeArgument:@"BinarizationModes" index:0 argumentName:@"EnableFillBinaryVacancy" argumentValue:"1" error:&error];
argumentValue = [barcodeReader getModeArgument:@"BinarizationModes" index:0 argumentName:@"EnableFillBinaryVacancy" error:&error];
```
Swift:

```Swift
let error: NSError? = NSError()
let mArray: NSMutableArray? = NSMutableArray()
let barcodeReader = DynamsoftBarcodeReader.init(license: "t0260NwAAAHV***************")
let settings = barcodeReader.getRuntimeSettings(error: nil)
mArray!.setArray(settings.binarizationModes as! [Any])
mArray![0] = EnumBinarizationMode.LocalBlock
settings.binarizationModes = mArray!
barcodeReader.updateRuntimeSettings(settings: settings, error: nil)
barcodeReader.setModeArgument(modeName: "BinarizationModes", index: 0, argumentName: "EnableFillBinaryVacancy", argumentValue: "1", error: nil)
let argumentValue = barcodeReader.getModeArgument(modeName: "BinarizationModes", index: 0, argumentName: "EnableFillBinaryVacancy", error: &error)
```

## getRuntimeSettings

Get current settings and save them into a [`iPublicRuntimeSettings`](../class/iPublicRuntimeSettings.md) struct.

```objc
- (iPublicRuntimeSettings* _Nullable)getRuntimeSettings:(NSError* _Nullable * _Nullable)error;
```   
   
### Parameters

`[in,out]	error` Input a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify nil for this parameter if you do not want the error information.

### Return value

A DBRPublicRuntimeSettings storing current runtime settings.

### Code Snippet

Objective-C:

```objc
DynamsoftBarcodeReader *barcodeReader;
barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicense:@"t0260NwAAAHV***************"];
NSError __autoreleasing * _Nullable error;
[barcodeReader getRuntimeSettings:&error];
```
Swift:

```Swift
let error: NSError? = NSError()
let barcodeReader = DynamsoftBarcodeReader.init(license: "t0260NwAAAHV***************")
let licenseString = barcodeReader.getRuntimeSettings(error: &error)
```

## updateRuntimeSettings

Update runtime settings with a given [`iPublicRuntimeSettings`](../class/iPublicRuntimeSettings.md) struct.

```objc
- (void)updateRuntimeSettings:(iPublicRuntimeSettings* _Nonnull)settings
                        error:(NSError* _Nullable * _Nullable)error;
```   
   
### Parameters

`[in] settings` The struct of template settings.  
`[in,out] error` Input a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify nil for this parameter if you do not want the error information.

### Code Snippet

Objective-C:

```objc
DynamsoftBarcodeReader *barcodeReader;
barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicense:@"t0260NwAAAHV***************"];
NSError __autoreleasing * _Nullable error;
iPublicRuntimeSettings *settings;

[barcodeReader updateRuntimeSettings:settings error:&error];
```
Swift:

```Swift
let error: NSError? = NSError()
let barcodeReader = DynamsoftBarcodeReader.init(license: "t0260NwAAAHV***************")
let settings = barcodeReader.getRuntimeSettings(error: nil)
barcodeReader.updateRuntimeSettings(settings: settings, error: &error)
```

## resetRuntimeSettings

Reset all parameters to default values.

```objc
- (void)resetRuntimeSettings:(NSError* _Nullable * _Nullable)error;
```   
   
### Parameters

`[in,out] error` Input a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify nil for this parameter if you do not want the error information.

### Code Snippet

Objective-C:

```objc
DynamsoftBarcodeReader *barcodeReader;
barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicense:@"t0260NwAAAHV***************"];
NSError __autoreleasing * _Nullable error;

[barcodeReader resetRuntimeSettings:&error];
```
Swift:

```Swift
let error: NSError? = NSError()
let barcodeReader = DynamsoftBarcodeReader.init(license: "t0260NwAAAHV***************")
barcodeReader.resetRuntimeSettings(error: &error)
```