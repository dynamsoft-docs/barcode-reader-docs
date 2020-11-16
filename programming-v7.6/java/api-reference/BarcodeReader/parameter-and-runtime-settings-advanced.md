---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - BarcodeReader Parameter and Runtime Settings Advanced Methods
description: This page shows BarcodeReader advanced Runtime Settings methods of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: initRuntimeSettingsWithFile, initRuntimeSettingsWithString, appendTplFileToRuntimeSettings, appendTplStringToRuntimeSettings, getAllParameterTemplateNames, outputSettingsToFile, outputSettingsToString, parameter and runtime settings advanced methods, BarcodeReader, api reference, java
needAutoGenerateSidebar: true
---

# Java API Reference - BarcodeReader Parameter and Runtime Settings Advanced Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`initRuntimeSettingsWithFile`](#initruntimesettingswithfile)  | Initialize runtime settings with the settings in a given JSON file. |
  | [`initRuntimeSettingsWithString`](#initruntimesettingswithstring) | Initialize runtime settings with the settings in a given JSON string. |
  | [`appendTplFileToRuntimeSettings`](#appendtplfiletoruntimesettings) | Append a new template file to the current runtime settings. |
  | [`appendTplStringToRuntimeSettings`](#appendtplstringtoruntimesettings) | Append a new template string to the current runtime settings. |
  | [`getAllParameterTemplateNames`](#getallparametertemplatenames) | Gets the parameter templates name array. |
  | [`outputSettingsToFile`](#outputsettingstofile) | Output runtime settings to a settings file (JSON file). |
  | [`outputSettingsToString`](#outputsettingstostring) | Output runtime settings to a string. |

  ---






## initRuntimeSettingsWithFile

Initialize runtime settings with the settings in a given JSON file.

```java
void com.dynamsoft.barcode.BarcodeReader.initRuntimeSettingsWithFile(String filePath, int enumConflictMode) throws BarcodeReaderException
```   

#### Parameters
`filePath` The path of the settings file.  
`enumConflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings and replace with the new template. 

#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

#### Code Snippet
```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
reader.initRuntimeSettingsWithFile("your template file path", EnumConflictMode.CM_OVERWRITE);
reader.destroy();
```

&nbsp; 





## initRuntimeSettingsWithString

Initialize runtime settings with the settings in a given JSON string.


```java
void com.dynamsoft.barcode.BarcodeReader.initRuntimeSettingsWithString(String content, int enumConflictMode)throws BarcodeReaderException
```   
   
#### Parameters
`content` A JSON string that represents the content of the settings.   
`enumConflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings and replace with the new template. 

#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

#### Code Snippet
```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
reader.initRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", EnumConflictMode.CM_OVERWRITE);
reader.destroy();
```

&nbsp; 





## appendTplFileToRuntimeSettings

Append a new template file to the current runtime settings.

```java
void com.dynamsoft.barcode.BarcodeReader.appendTplFileToRuntimeSettings(String filePath, int enumConflictMode) throws BarcodeReaderException
```   
   
#### Parameters
`filePath` The path of the settings file.  
`enumConflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings with the new template. 

#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

#### Code Snippet
```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
reader.appendTplFileToRuntimeSettings("your template file path", EnumConflictMode.CM_IGNORE);
reader.destroy();
```

&nbsp; 





## appendTplStringToRuntimeSettings

Append a new template string to the current runtime settings.

```java
void com.dynamsoft.barcode.BarcodeReader.appendTplStringToRuntimeSettings(String content, int enumConflictMode)	throws BarcodeReaderException	
```   

   
#### Parameters
`content` A JSON string that represents the content of the settings.  
`enumConflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings with the new template.  

#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

#### Code Snippet
```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
reader.initRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", EnumConflictMode.CM_OVERWRITE);
reader.appendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_OneD\"], \"ExpectedBarcodesCount\":20}}", EnumConflictMode.CM_IGNORE);
reader.destroy();
```

&nbsp; 





## getAllParameterTemplateNames
Gets the parameter templates name array.

```java
String [] com.dynamsoft.barcode.BarcodeReader.getAllParameterTemplateNames()		
```   

#### Return value
The template name array.

#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

#### Code Snippet
```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
String[] templateNames = reader.getAllParameterTemplateNames();
reader.destroy();
```

&nbsp;





## outputSettingsToFile
Output runtime settings to a settings file (JSON file).

```java
void com.dynamsoft.barcode.BarcodeReader.outputSettingsToFile(String filePath, String settingsName) throws BarcodeReaderException
```   
   
#### Parameters
`filePath` The output file path which stores current settings.  
`settingsName` A unique name for declaring current runtime settings.


#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

#### Code Snippet
```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
reader.outputSettingsToFile("your saving file path", "currentRuntimeSettings");
reader.destroy();
```

&nbsp; 





## outputSettingsToString
Output runtime settings to a string.

```java
String com.dynamsoft.barcode.BarcodeReader.outputSettingsToString(String settingsName) throws BarcodeReaderException
```   
   
#### Parameters 
`settingsName` A unique name for declaring current runtime settings.  

#### Return value
The output string which stores the contents of current settings.

#### Code Snippet
```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
String settingStr = reader.outputSettingsToString("currentRuntimeSettings");
reader.destroy();
```

&nbsp;



