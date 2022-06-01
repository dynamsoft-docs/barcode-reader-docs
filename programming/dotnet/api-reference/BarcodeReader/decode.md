---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - BarcodeReader Decode Methods
description: This page shows BarcodeReader Decode methods of Dynamsoft Barcode Reader for .NET SDK.
keywords: DecodeFile, DecodeFileInMemory, DecodeBuffer, DecodeBase64String, DecodeBitmap, decode methods, BarcodeReader, api reference, .Net
needAutoGenerateSidebar: true
---


# Decode Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`DecodeFile`](#decodefile) | Decode barcodes from a specified image file. |
  | [`DecodeFileInMemory`](#decodefileinmemory) | Decode barcodes from an image file in memory. |
  | [`DecodeBuffer`](#decodebuffer) | Decode barcodes from raw buffer. |
  | [`DecodeBase64String`](#decodebase64string) | Decode barcodes from a base64 encoded string. |
  | [`DecodeBitmap`](#decodebitmap) | Decodes barcode from a bitmap. |
  | [`InitIntermediateResult`](#initintermediateresult) | Inits an intermediateResult struct with default values. |
  | [`DecodeIntermediateResults`](#decodeintermediateresults) | Decodes barcode from intermediate results. |





## DecodeFile

Decode barcodes from a specified image file.

```csharp
TextResult[] Dynamsoft.DBR.BarcodeReader.DecodeFile(string fileName, string templateName) 	
```

**Parameters**  
`[in] fileName` <*string*> : A string defining the file name. It supports BMP, JPEG, PNG, TIFF and PDF files.  
`[in] templateName` <*string*> : The template name.

**Return Value**  
[`TextResult`](../class/TextResult.md) array.

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md) The exception thrown by Dynamsoft Barcode Reader.  


**Code Snippet**  
```csharp
string errorMsg;
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = new BarcodeReader();
TextResult[] result = reader.DecodeFile(@"C:\Program Files (x86)\Dynamsoft\{Version number}\Images\AllSupportedBarcodeTypes.tif", "");
reader.Dispose();
```





## DecodeFileInMemory

Decode barcodes from an image file in memory.   

```csharp
TextResult[] Dynamsoft.DBR.BarcodeReader.DecodeFileInMemory(byte[] fileStream, string templateName)  
```   
   
**Parameters**  
`[in]	fileStream` <*byte[]*> : The image file bytes in memory.  
`[in] templateName` <*string*> : The template name. 

**Return Value**  
[`TextResult`](../class/TextResult.md) array.

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md) The exception thrown by Dynamsoft Barcode Reader.  

**Code Snippet**  
```csharp
string errorMsg;
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = new BarcodeReader();
byte[] fileStream = GetFileStream(@"C:\Program Files (x86)\Dynamsoft\{Version number}\Images\AllSupportedBarcodeTypes.tif");
TextResult[] result = reader.DecodeFileInMemory(fileStream, "");
reader.Dispose();
```






## DecodeBuffer

Decode barcodes from the memory buffer containing image pixels in a defined format.

```csharp
TextResult[] Dynamsoft.DBR.BarcodeReader.DecodeBuffer(byte[] buffer, int width, int height, int stride, EnumImagePixelFormat imagePixelFormat, string templateName)	
```
   
**Parameters**  
`[in]	buffer` <*byte[]*> : The array of bytes which contain the image data.  
`[in]	width` <*int*> : The width of the image in pixels.
`[in]	height` <*int*> : The height of the image in pixels.
`[in]	stride` <*int*> : The stride of the image (also called scan width).  
`[in]	imagePixelFormat` <*[EnumImagePixelFormat]({{ site.enumerations }}other-enums.html#imagepixelformat)*> : The image pixel format used in the image byte array. 
`[in] templateName` <*string*> : The template name.

**Return Value**  
[`TextResult`](../class/TextResult.md) array.

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md) The exception thrown by Dynamsoft Barcode Reader.  

**Code Snippet**  
```csharp
string errorMsg;
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = new BarcodeReader();
Bitmap bBMP = new Bitmap(@"C:\Program Files (x86)\Dynamsoft\{Version number}\Images\AllSupportedBarcodeTypes.tif");
BitmapData bmdat = bBMP.LockBits(new Rectangle(Point.Empty, bBMP.Size), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
int width = bBMP.Width;
int height = bBMP.Height;
int stride = bmdat.Stride;
byte[] buffer = new byte[stride * bmdat.Height];
Marshal.Copy(bmdat.Scan0, buffer, 0, buffer.Length);
bBMP.UnlockBits(bmdat);
EnumImagePixelFormat imagePixelFormat = EnumImagePixelFormat.IPF_ARGB_8888;
TextResult[] result = reader.DecodeBuffer(buffer, width, height, stride, imagePixelFormat, "");
reader.Dispose();
```






## DecodeBase64String

Decode barcode from an image file encoded as a base64 string.

```csharp
TextResult[] Dynamsoft.DBR.BarcodeReader.DecodeBase64String(string base64, string templateName)	
```   

**Parameters**  
`[in]	base64` <*string*> : A base64 encoded string that represents an image.   
`[in] templateName` <*string*> : The template name.

**Return Value**  
All barcode text results decoded successfully. 

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md) The exception thrown by Dynamsoft Barcode Reader. 

**Code Snippet**  
```csharp
string errorMsg;
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = new BarcodeReader();
byte[] byteFileStream = GetFileStream(@"C:\Program Files (x86)\Dynamsoft\{Version number}\Images\AllSupportedBarcodeTypes.tif");
string base64String = GetFileBase64String(byteFileStream);
TextResult[] result = reader.DecodeBase64String(base64String, "");
reader.Dispose();
```

**See Also**   
[`TextResult`](../class/TextResult.md)




## DecodeBitmap

Decodes barcode from a bitmap.

```csharp
TextResult[] Dynamsoft.DBR.BarcodeReader.DecodeBitmap(Bitmap bitMap, string templateName)
```   
   
**Parameters**  
`[in]	bitMap` <*Bitmap*> : The image to be decoded.  
`[in] templateName` <*string*> : The template name.

**Return Value**  
[`TextResult`](../class/TextResult.md) array.

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md) The exception thrown by Dynamsoft Barcode Reader. 

**Code Snippet**  
```csharp
string errorMsg;
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = new BarcodeReader();
Bitmap bBMP = new Bitmap(@"C:\Program Files (x86)\Dynamsoft\{Version number}\Images\AllSupportedBarcodeTypes.tif");
TextResult[] result = reader.DecodeBitmap(bBMP, "");
reader.Dispose();
```







## InitIntermediateResult

Inits an intermediateResult struct with default values.

```csharp
IntermediateResult Dynamsoft.DBR.BarcodeReader.InitIntermediateResult(EnumIntermediateResultType intermediateResultType) 	
```

**Parameters**  
`intermediateResultType` : The type of the intermediate result to init.   

**Return Value**  
[`IntermediateResult`](../class/IntermediateResult.md) with default values


**Code Snippet**  
```csharp
BarcodeReader reader = new BarcodeReader();
IntermediateResult imResult = reader.InitIntermediateResult(EnumIntermediateResultType.IRT_ORIGINAL_IMAGE);
```






## DecodeIntermediateResults

Decodes barcode from intermediate results.

```csharp
TextResult[] Dynamsoft.DBR.BarcodeReader.DecodeIntermediateResults(IntermediateResult[] intermediateResultArray, string templateName) 	
```

**Parameters**  
`intermediateResultArray` : The intermediate result array for decoding.   
`templateName` : The template name.

**Return Value**  
[`TextResult`](../class/TextResult.md) array.

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md) The exception thrown by Dynamsoft Barcode Reader.  


**Code Snippet**  
```csharp
string errorMsg;
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.GetRuntimeSettings();
settings.IntermediateResultType = (int)EnumIntermediateResultType.IRT_ORIGINAL_IMAGE;
reader.UpdateRuntimeSettings(settings);
reader.DecodeFile("Your file path", "");
IntermediateResult[] IMRs = reader.GetIntermediateResults();
TextResult[] result = reader.DecodeIntermediateResults(IMRs, "");
```





