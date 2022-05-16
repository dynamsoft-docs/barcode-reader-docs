---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - Advanced Settings Methods
description: This page shows advanced Runtime Settings methods of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: initRuntimeSettingsWithFile, initRuntimeSettingsWithString, appendTplFileToRuntimeSettings, appendTplStringToRuntimeSettings, getAllParameterTemplateNames, outputSettingsToFile, outputSettingsToString, Advanced Settings Methods, BarcodeReader, api reference, java
needAutoGenerateSidebar: true
---

# Advanced Settings Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`initRuntimeSettingsWithFile`](#initruntimesettingswithfile)  | Initialize runtime settings with the settings in a given JSON file. |
  | [`initRuntimeSettingsWithString`](#initruntimesettingswithstring) | Initialize runtime settings with the settings in a given JSON string. |
  | [`appendTplFileToRuntimeSettings`](#appendtplfiletoruntimesettings) | Append a new template file to the current runtime settings. |
  | [`appendTplStringToRuntimeSettings`](#appendtplstringtoruntimesettings) | Append a new template string to the current runtime settings. |
  | [`getAllParameterTemplateNames`](#getallparametertemplatenames) | Gets the parameter templates name array. |
  | [`outputSettingsToFile`](#outputsettingstofile) | Output runtime settings to a settings file (JSON file). |
  | [`outputSettingsToString`](#outputsettingstostring) | Output runtime settings to a string. |







## initRuntimeSettingsWithFile

Initialize runtime settings with the settings in a given JSON file.

```java
void com.dynamsoft.dbr.BarcodeReader.initRuntimeSettingsWithFile(String filePath, int enumConflictMode) throws BarcodeReaderException
```   

**Parameters**  
`filePath` The path of the settings file.  
`enumConflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings and replace with the new template. 

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
reader.initRuntimeSettingsWithFile("your template file path", EnumConflictMode.CM_OVERWRITE);
reader.destroy();
```

 





## initRuntimeSettingsWithString

Initialize runtime settings with the settings in a given JSON string.


```java
void com.dynamsoft.dbr.BarcodeReader.initRuntimeSettingsWithString(String content, int enumConflictMode)throws BarcodeReaderException
```   
   
**Parameters**  
`content` A JSON string that represents the content of the settings.   
`enumConflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings and replace with the new template. 

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
reader.initRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", EnumConflictMode.CM_OVERWRITE);
reader.destroy();
```

 





## appendTplFileToRuntimeSettings

Append a new template file to the current runtime settings.

```java
void com.dynamsoft.dbr.BarcodeReader.appendTplFileToRuntimeSettings(String filePath, int enumConflictMode) throws BarcodeReaderException
```   
   
**Parameters**  
`filePath` The path of the settings file.  
`enumConflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings with the new template. 

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
reader.appendTplFileToRuntimeSettings("your template file path", EnumConflictMode.CM_IGNORE);
reader.destroy();
```

 





## appendTplStringToRuntimeSettings

Append a new template string to the current runtime settings.

```java
void com.dynamsoft.dbr.BarcodeReader.appendTplStringToRuntimeSettings(String content, int enumConflictMode)	throws BarcodeReaderException	
```   

   
**Parameters**  
`content` A JSON string that represents the content of the settings.  
`enumConflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings with the new template.  

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
reader.initRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", EnumConflictMode.CM_OVERWRITE);
reader.appendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_OneD\"], \"ExpectedBarcodesCount\":20}}", EnumConflictMode.CM_IGNORE);
reader.destroy();
```

 





## getAllParameterTemplateNames
Gets the parameter templates name array.

```java
String [] com.dynamsoft.dbr.BarcodeReader.getAllParameterTemplateNames()		
```   

**Return Value**  
The template name array.

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
String[] templateNames = reader.getAllParameterTemplateNames();
reader.destroy();
```







## outputSettingsToFile
Output runtime settings to a settings file (JSON file).

```java
void com.dynamsoft.dbr.BarcodeReader.outputSettingsToFile(String filePath, String settingsName) throws BarcodeReaderException
```   
   
**Parameters**  
`filePath` The output file path which stores current settings.  
`settingsName` A unique name for declaring current runtime settings.


**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
reader.outputSettingsToFile("your saving file path", "currentRuntimeSettings");
reader.destroy();
```

 





## outputSettingsToString
Output runtime settings to a string.

```java
String com.dynamsoft.dbr.BarcodeReader.outputSettingsToString(String settingsName) throws BarcodeReaderException
```   
   
**Parameters**   
`settingsName` A unique name for declaring current runtime settings.  

**Return Value**  
The output string which stores the contents of current settings.

**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
String settingStr = reader.outputSettingsToString("currentRuntimeSettings");
reader.destroy();
```





