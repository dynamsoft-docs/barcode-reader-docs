---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - Interface
description: This page shows the interfaces of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: ErrorCallback, IntermediateResultCallback, TextResultCallback, interface, api reference, java
needAutoGenerateSidebar: false
---


# Java API Reference - Interface

  | Function | Description |
  |----------|-------------|
  | [`ErrorCallback`](#errorcallback) | Represents the method that will handle the error code returned by the SDK. |
  | [`IntermediateResultCallback`](#intermediateresultcallback) | Represents the method that will handle the intermediate result array returned by the SDK. |
  | [`TextResultCallback`](#textresultcallback) | Represents the method that will handle the text result array returned by the SDK. | 
  
---
 




## ErrorCallback
Represents the method that will handle the error code returned by the SDK.

```java
void com.dynamsoft.barcode.ErrorCallback.errorCallback(int frameId, int errorCode, Object userData)	
```   
   
#### Parameters
`frameId` 	The ID of the frame.    
`errorCode` Error Code generated when decoding the frame.
`userData` Arguments passed to your function.

&nbsp;





## IntermediateResultCallback
Represents the method that will handle the intermediate result array returned by the SDK.

```java
void com.dynamsoft.barcode.IntermediateResultCallback.intermediateResultCallback(int frameId, IntermediateResult[] results, Object userData)	
```   
   
#### Parameters
`frameId` 	The ID of the frame.  
`results` The intermediate results of the frame.   
`userData` Arguments passed to your function.   

#### See Also
[IntermediateResult](class/IntermediateResult.md)

&nbsp;





## TextResultCallback
Represents the method that will handle the error code returned by the SDK.

```java
void textResultCallback(int frameId, TextResult[] results, Object userData)
```   
   
#### Parameters
`frameId` The ID of the frame.  
`results` Recognized barcode results of the frame.   
`userData` Arguments passed to your function.

#### See Also
[TextResult](class/TextResult.md)

&nbsp;



