---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - BarcodeReaderException Class
description: This page shows the BarcodeReaderException Class of Dynamsoft Barcode Reader for .NET SDK.
keywords: BarcodeReaderException, class, api reference, .Net
needAutoGenerateSidebar: false
---


# BarcodeReaderException
The exception class of Dynamsoft.BarcodeReader.

```C#
public class BarcodeReaderException : Exception
```  

---

## Attributes
  
| Attribute | Type |
|---------- | ----------- | 
| [`Code`](#code) | *EnumErrorCode* |
| [`Message`](#message) | *string* | 
| [`StackTrace`](#stacktrace) | *string* |
  
  
### Code
Gets or sets the error code. 

```C#
EnumErrorCode Dynamsoft.Barcode.BarcodeReaderException.Code
```  

### Message
Gets the message that describes the current exception. 

```C#
override string Dynamsoft.Barcode.BarcodeReaderException.Message
```  

### Code
Gets the string representation of the frames on the call stack at the time the current exception was thrown. 

```C#
override string Dynamsoft.Barcode.BarcodeReaderException.StackTrace
```  

