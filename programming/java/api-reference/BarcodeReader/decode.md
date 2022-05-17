---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - BarcodeReader Decode Methods
description: This page shows BarcodeReader Decode methods of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: decodeFile, decodeFileInMemory, decodeBuffer, decodeBase64String, decodeBufferedImage, decode methods, BarcodeReader, api reference, java
needAutoGenerateSidebar: true
---


# Decode Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`decodeFile`](#decodefile) | Decode barcodes from a specified image file. |
  | [`decodeFileInMemory`](#decodefileinmemory) | Decode barcodes from an image file in memory. |
  | [`decodeBuffer`](#decodebuffer) | Decode barcodes from raw buffer. |
  | [`decodeBase64String`](#decodebase64string) | Decode barcodes from a base64 encoded string. |
  | [`decodeBufferedImage`](#decodebufferedimage) | Decodes barcode from a buffered imag (bitmap). |
  | [`initIntermediateResult`](#initintermediateresult) | Inits an intermediateResult struct with default values. |
  | [`decodeIntermediateResults`](#decodeintermediateresults) | Decodes barcode from intermediate results. |


## DecodeFile

Decode barcodes from a specified image file.

```java
TextResult[] com.dynamsoft.dbr.BarcodeReader.decodeFile(String fileFullPath, String templateName)	throws BarcodeReaderException	
```   
   
**Parameters**  
`fileFullPath`	A string defining the file path. It supports BMP, TIFF, JPG, PNG and PDF files.
`templateName`  The template name.

**Return Value**  
An array of [`TextResult`](../class/TextResult.md)

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
TextResult[] result = reader.decodeFile("your file path", "");
reader.destroy();
```




## DecodeFileInMemory

Decode barcodes from an image file in memory.   

```java
TextResult[] com.dynamsoft.dbr.BarcodeReader.decodeFileInMemory(byte[] fileBytes, String templateName) throws BarcodeReaderException
```   
   
**Parameters**  
`fileBytes` The image file bytes in memory.  
`templateName` The template name.

**Return Value**  
An array of [`TextResult`](../class/TextResult.md) 

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
//get bufferBytes from other component
TextResult[] result = reader.decodeFileInMemory(bufferBytes, "");
reader.destroy();
```



```java
TextResult[] com.dynamsoft.dbr.BarcodeReader.decodeFileInMemory(InputStream fileStream, String templateName) throws BarcodeReaderException, IOException
```   
   
**Parameters**  
`fileStream` The image file bytes in memory.  
`templateName` The template name.

**Return Value**  
An array of [`TextResult`](../class/TextResult.md)

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md), IOException

**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
//get FileInputStream fis from other component
TextResult[] result = reader.decodeFileInMemory(fis, "");
reader.destroy();
```





## DecodeBuffer

Decode barcodes from the memory buffer containing image pixels in a defined format.

```java
TextResult[] com.dynamsoft.dbr.BarcodeReader.decodeBuffer(byte[] buffer, int width, int height, int stride, int enumImagePixelFormat, String templateName)	throws BarcodeReaderException	
```   
   
**Parameters**  
`buffer` The array of bytes which contain the image data.   
`Width` The width of the image in pixels.   
`Height` The height of the image in pixels.   
`Stride` The stride (or scan width) of the image.   
`format` The image pixel format used in the image byte array.   
`templateName` The template name.

**Return Value**  
An array of [`TextResult`](../class/TextResult.md)

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
byte[] bufferBytes;
int iWidth = 0;
int iHeight = 0;
int iStride = 0;
int format;
GetBufferFromFile("your file path", bufferBytes, iWidth, iHeight, iStride, format);
TextResult[] result = reader.decodeBuffer(bufferBytes, iWidth,  iHeight, iStride, format, "");
reader.destroy();
```







## DecodeBase64String

Decode barcode from an image file encoded as a base64 string.

```java
TextResult[] com.dynamsoft.dbr.BarcodeReader.decodeBase64String(String base64, String templateName)	throws BarcodeReaderException
```   
   
**Parameters**  
`base64`	A base64 encoded string that represents an image.   
`templateName` The template name.

**Return Value**  
An array of [`TextResult`](../class/TextResult.md)

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
TextResult[] result = reader.decodeBase64String("file in base64 string", "");
reader.destroy();
```







## DecodeBufferedImage

Decodes barcode from a buffered imag (bitmap).

```java
TextResult[] com.dynamsoft.dbr.BarcodeReader.decodeBufferedImage(BufferedImage image, String templateName)	throws IOException, BarcodeReaderException
```   
   
**Parameters**  
`image` The image to be decoded.  
`templateName` The template name.

**Return Value**  
An array of [`TextResult`](../class/TextResult.md)

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md), IOException

**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
//get BufferedImage input from other component
TextResult[] result = reader.decodeBufferedImage(input, "");
reader.destroy();
```




## initIntermediateResult

Initiates an intermediateResult struct with default values.

```java
IntermediateResult com.dynamsoft.dbr.BarcodeReader.initIntermediateResult(int resultType)	throws BarcodeReaderException	
```   

**Parameters**  
`resultType`	The type of the intermediate result to init.   
   
**Return Value**  
An [`IntermediateResult`](../class/IntermediateResult.md) class with default values.

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
IntermediateResult imResult = reader.initIntermediateResult(EnumIntermediateResultType.IRT_ORIGINAL_IMAGE);
```




## decodeIntermediateResults

Decodes barcode from intermediate results.

```java
TextResult[] com.dynamsoft.dbr.BarcodeReader.decodeIntermediateResults(IntermediateResults[] results, String templateName)	throws BarcodeReaderException	
```   
   
**Parameters**  
`results`	The intermediate result array for decoding.   
`templateName`  The template name.

**Return Value**  
An array of [`TextResult`](../class/TextResult.md)

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md)

**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings(); settings.intermediateResultTypes = EnumIntermediateResultType.IRT_ORIGINAL_IMAGE;
reader.updateRuntimeSettings(settings);
reader.decodeFile("your file path", "");
IntermediateResult[] irtResult = reader.getIntermediateResults();
TextResult[] result = reader.decodeIntermediateResults(irtResult, "");
```




