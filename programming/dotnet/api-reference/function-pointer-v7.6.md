---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - Function Pointers
description: This page shows Function Pointers of Dynamsoft Barcode Reader for .NET SDK.
keywords: CB_Error, CB_IntermediateResult, CB_TextResult, function pointers, api reference, .Net
needAutoGenerateSidebar: false
---


# .Net API Reference - Function Pointers

  | Function | Description |
  |----------|-------------|
  | [`CB_Error`](#cb_error) | Represents the method that will handle the error code returned by the SDK. |
  | [`CB_IntermediateResult`](#cb_intermediateresult) | Represents the method that will handle the intermediate result array returned by the SDK. |
  | [`CB_TextResult`](#cb_textresult) | Represents the method that will handle the text result array returned by the SDK. | 
  
---
 


## CB_Error
Represents the method that will handle the error code returned by the SDK. 

```C#
delegate void Dynamsoft.Barcode.CB_Error(int frameId, int errorCode, IntPtr pUser)
```   
   
#### Parameters
`[in, out] frameId` The id of the frame.  
`[in, out] errorCode` Error Code generated when decoding the frame.  
`[in, out] pUser` Arguments pass to your function.  


&nbsp; 


## CB_IntermediateResult
Represents the method that will handle the intermediate result array returned by the SDK. 

```C#
delegate void Dynamsoft.Barcode.CB_IntermediateResult(int frameId, IntermediateResult[] intermediateResults, IntPtr pUser)
```   
   
#### Parameters
`[in, out] frameId` The id of the frame.  
`[in, out] intermediateResults` The intermediate results of the frame. 
`[in, out] pUser` Arguments pass to your function.  


&nbsp; 


## CB_TextResult
Represents the method that will handle the text result array returned by the SDK. 

```C#
delegate void Dynamsoft.Barcode.CB_TextResult(int frameId, TextResult[]  textResults, IntPtr pUser) 
```   
   
#### Parameters
`[in, out] frameId` The id of the frame.  
`[in, out] intermediateResults` The intermediate results of the frame. 
`[in, out] pUser` Arguments pass to your function. 

