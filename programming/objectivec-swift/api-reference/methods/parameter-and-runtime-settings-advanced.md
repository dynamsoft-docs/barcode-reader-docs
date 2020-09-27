---
layout: default-layout
title: Dynamsoft Barcode Reader Objective-C & Swift API Reference - Parameter and Runtime Settings Advanced Methods
description: This page shows advanced Runtime Settings methods of Dynamsoft Barcode Reader for iOS SDK.
keywords: initRuntimeSettingsWithFile, initRuntimeSettingsWithString, appendTplFileToRuntimeSettings, appendTplStringToRuntimeSettings, allParameterTemplateNames, outputSettingsToFile, outputSettingsToString, parameter and runtime settings advanced methods, api reference, objective-c, oc, swift
needAutoGenerateSidebar: true
---

# Objective-C API Reference - Parameter and Runtime Settings Advanced Methods
   
  | Method               | Description |
  |----------------------|-------------|
  | [`initRuntimeSettingsWithFile`](#initruntimesettingswithfile) | Initialize runtime settings with the settings in a given JSON file. |
  | [`initRuntimeSettingsWithString`](#initruntimesettingswithstring) | Initialize runtime settings with the settings in a given JSON string. |
  | [`appendTplFileToRuntimeSettings`](#appendtplfiletoruntimesettings) | Append a new template file to the current runtime settings. |
  | [`appendTplStringToRuntimeSettings`](#appendtplstringtoruntimesettings) | Append a new template string to the current runtime settings. |
  | [`allParameterTemplateNames`](#allparametertemplatenames) | Gets the parameter templates name array. |
  | [`outputSettingsToFile`](#outputsettingstofile) | Output runtime settings to a settings file (JSON file). |
  | [`outputSettingsToString`](#outputsettingstostring) | Output runtime settings to a string. |

---

## initRuntimeSettingsWithFile

Initialize runtime settings with the parameters obtained from a JSON file.

```objc
- (void)initRuntimeSettingsWithFile:(NSString* _Nonnull)fileName
                        conflictMode:(EnumConflictMode)conflictMode
                        error:(NSError* _Nullable * _Nullable)error;
```   
   
### Parameters

`[in] fileName` The settings file path.  
`[in] conflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template settings or to overwrite previous settings with the new template.  
`[in,out] error` Input a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify nil for this parameter if you do not want the error information.  
 
### Code Snippet

Objective-C:

```objc
DynamsoftBarcodeReader *barcodeReader;
barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicense:@"t0260NwAAAHV***************"];
NSError __autoreleasing * _Nullable error;
[barcodeReader initRuntimeSettingsWithFile:@"your template file path" conflictMode:EnumConflictModeOverwrite error:&error];
```
Swift:

```Swift
let barcodeReader = DynamsoftBarcodeReader.init(license: "t0260NwAAAHV***************")
let error: NSError? = NSError()
barcodeReader.initRuntimeSettingsWithFile(fileName:"your template file path", conflictMode:EnumConflictModeOverwrite, error:&error)
```

## initRuntimeSettingsWithString

Initialize runtime settings with the parameters obtained from a JSON string.

```objc
- (void)initRuntimeSettingsWithString:(NSString* _Nonnull)content
                        conflictMode:(EnumConflictMode)conflictMode
                        error:(NSError* _Nullable * _Nullable)error;
```   
   
### Parameters 

`[in] content` A JSON string that represents the content of the settings.  
`[in] conflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings with the new template.  
`[in,out] error` Input a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify nil for this parameter if you do not want the error information.   

### Code Snippet

Objective-C:

```objc
DynamsoftBarcodeReader *barcodeReader;
barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicense:@"t0260NwAAAHV***************"];
NSError __autoreleasing * _Nullable error;
[barcodeReader initRuntimeSettingsWithString:@"{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}" conflictMode:EnumConflictModeOverwrite error:&error];
```
Swift:

```Swift
let barcodeReader = DynamsoftBarcodeReader.init(license: "t0260NwAAAHV***************")
let error: NSError? = NSError()
barcodeReader.initRuntimeSettingsWithString(content:"{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", conflictMode:EnumConflictMode.Overwrite, error:&error)
```

## appendTplFileToRuntimeSettings

Append a new template file to the current runtime settings.

```objc
- (void)appendTplFileToRuntimeSettings:(NSString * _Nonnull)fileName
                        conflictMode:(EnumConflictMode)conflictMode
                                error:(NSError * _Nullable *_Nullable)error;
```   
 
### Parameters

`[in] fileName` The settings file path.     
`[in] conflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template settings or to overwrite previous settings with the new template.     
`[in,out] error` Input a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify nil for this parameter if you do not want the error information.    

### Code Snippet

Objective-C:

```objc
DynamsoftBarcodeReader *barcodeReader;
barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicense:@"t0260NwAAAHV***************"];
NSError __autoreleasing * _Nullable error;
[barcodeReader appendTplFileToRuntimeSettings:@"your template file path" conflictMode:EnumConflictModeIgnore error:&error];
```
Swift:

```Swift
let barcodeReader = DynamsoftBarcodeReader.init(license: "t0260NwAAAHV***************")
let error: NSError? = NSError()
barcodeReader.appendTplFileToRuntimeSettings(fileName:"your template file path", conflictMode:EnumConflictMode.Ignore, error:&error)
```

## appendTplStringToRuntimeSettings

Append a new template string to the current runtime settings.

```objc
- (void)appendTplStringToRuntimeSettings:(NSString * _Nonnull)content
                            conflictMode:(EnumConflictMode)conflictMode
                                    error:(NSError *_Nullable *_Nullable)error;
```   
   
### Parameters

`[in] content` A JSON string that represents the content of the settings.   
`[in] conflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings with the new template.   
`[in,out] error` Input a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify nil for this parameter if you do not want the error information. 

### Code Snippet

Objective-C:

```objc
DynamsoftBarcodeReader *barcodeReader;
barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicense:@"t0260NwAAAHV***************"];
NSError __autoreleasing * _Nullable error;
[barcodeReader initRuntimeSettingsWithString:@"{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}" conflictMode:EnumConflictModeOverwrite error:&error];
[barcodeReader appendTplStringToRuntimeSettings:@"{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_OneD\"], \"ExpectedBarcodesCount\":20}}" conflictMode:EnumConflictModeIgnore error:&error];
```
Swift:
```Swift
let barcodeReader = DynamsoftBarcodeReader.init(license: "t0260NwAAAHV***************")
let error: NSError? = NSError()
barcodeReader.initRuntimeSettingsWithString(content:"{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", conflictMode:EnumConflictMode.Overwrite, error:&error)
barcodeReader.appendTplStringToRuntimeSettings(content:"{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_OneD\"], \"ExpectedBarcodesCount\":20}}", conflictMode:EnumConflictMode.Ignore, error:&error)
```

## allParameterTemplateNames

Get count of parameter templates.

```objc
- (NSArray<NSString*>* _Nullable)allParameterTemplateNames: (NSError *__autoreleasing  _Nullable * _Nullable)error;
```   
   
### Parameters

`[in,out] error` Input a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify nil for this parameter if you do not want the error information.

### Return value

The template name array.

### Code Snippet

Objective-C:

```objc
DynamsoftBarcodeReader *barcodeReader;
barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicense:@"t0260NwAAAHV***************"];
NSError __autoreleasing * _Nullable error;

[barcodeReader allParameterTemplateNames:&error];
```
Swift:

```Swift
let barcodeReader = DynamsoftBarcodeReader.init(license: "t0260NwAAAHV***************")
let error: NSError? = NSError()
barcodeReader.allParameterTemplateNames(error:&error)
```

## outputSettingsToFile

Outputs runtime settings and save them into a settings file (JSON file).  

```objc
- (void)outputSettingsToFile:(NSString *_Nullable)filePath 
                settingsName:(NSString*_Nonnull)settingsName 
                        error:(NSError*_Nullable *_Nullable)error;
```   
   
### Parameters

`[in] filePath` The path of the output file which stores current settings.  
`[in] settingsName` A unique name for declaring current runtime settings.  
`[in,out] error` Input a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify nil for this parameter if you do not want the error information.

### Code Snippet

Objective-C:

```objc
DynamsoftBarcodeReader *barcodeReader;
NSString *settingsName;
barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicense:@"t0260NwAAAHV***************"];
NSError __autoreleasing * _Nullable error;
settingsName = [barcodeReader outputSettingsToFile:@"your saving file path" settingsName:@"currentRuntimeSettings" error:&error];
```
Swift:

```Swift
let barcodeReader = DynamsoftBarcodeReader.init(license: "t0260NwAAAHV***************")
let error: NSError? = NSError()
let settingsName = barcodeReader.outputSettingsToFile(filePath:"your saving file path", settingsName:"currentRuntimeSettings", error:&error)
```

## outputSettingsToString

Output runtime settings to a string.

```objc
- (NSString *_Nullable)outputSettingsToString:(NSString*_Nonnull)settingsName 
                                        error:(NSError* _Nullable * _Nullable)error;
```   
   
### Parameters

`[in] settingsName` A unique name for declaring current runtime settings.  
`[in,out] error` Input a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify nil for this parameter if you do not want the error information.

### Return value

The output string which stores the content of current settings. 

### Code Snippet

Objective-C:

```objc
DynamsoftBarcodeReader *barcodeReader;
NSString *settingsName;
barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicense:@"t0260NwAAAHV***************"];
NSError __autoreleasing * _Nullable error;
settingsName = [barcodeReader outputSettingsToString:@"currentRuntimeSettings" error:&error];
```
Swift:

```Swift
let barcodeReader = DynamsoftBarcodeReader.init(license: "t0260NwAAAHV***************")
let error: NSError? = NSError()
let settingsName = barcodeReader.outputSettingsToString(settingsName:"currentRuntimeSettings", error:&error)
```
