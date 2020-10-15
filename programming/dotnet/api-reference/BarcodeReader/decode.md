---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - BarcodeReader Decode Methods
description: This page shows BarcodeReader Decode methods of Dynamsoft Barcode Reader for .NET SDK.
keywords: DecodeFile, DecodeFileInMemory, DecodeBuffer, DecodeBase64String, DecodeBitmap, decode methods, BarcodeReader, api reference, .Net
needAutoGenerateSidebar: true
---


# .Net API Reference - BarcodeReader Decode Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`DecodeFile`](#decodefile) | Decode barcodes from a specified image file. |
  | [`DecodeFileInMemory`](#decodefileinmemory) | Decode barcodes from an image file in memory. |
  | [`DecodeBuffer`](#decodebuffer) | Decode barcodes from raw buffer. |
  | [`DecodeBase64String`](#decodebase64string) | Decode barcodes from a base64 encoded string. |
  | [`DecodeBitmap`](#decodebitmap) | Decodes barcode from a bitmap. |

  ---




## DecodeFile

Decode barcodes from a specified image file.

```C#
TextResult[] Dynamsoft.Barcode.BarcodeReader.DecodeFile(string fileName, string templateName) 	
```

#### Parameters
`[in] fileName` <*string*> : A string defining the file name.   
`[in] templateName` <*string*> : The template name.

#### Return value
All barcode text results decoded successfully. 

#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md) The exception thrown by Dynamsoft Barcode Reader.  


#### Code Snippet
```C#
BarcodeReader reader = new BarcodeReader();
reader.ProductKeys = "t0260NwAAAHV***************";
TextResult[] result = reader.DecodeFile(@"C:\Program Files (x86)\Dynamsoft\{Version number}\Images\AllSupportedBarcodeTypes.tif", "");
reader.Dispose();
```

#### See Also
[`TextResult`](../class/TextResult.md)

&nbsp;


## DecodeFileInMemory

Decode barcodes from an image file in memory.   

```C#
TextResult[] Dynamsoft.Barcode.BarcodeReader.DecodeFileInMemory(byte[] fileStream, string templateName)  
```   
   
#### Parameters
`[in]	fileStream` <*byte[]*> : The image file bytes in memory.  
`[in] templateName` <*string*> : The template name. 

#### Return value
All barcode text results decoded successfully. 

#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md) The exception thrown by Dynamsoft Barcode Reader.  

#### Code Snippet
```C#
BarcodeReader reader = new BarcodeReader();
reader.ProductKeys = "t0260NwAAAHV***************";
byte[] fileStream = GetFileStream(@"C:\Program Files (x86)\Dynamsoft\{Version number}\Images\AllSupportedBarcodeTypes.tif");
TextResult[] result = reader.DecodeFileInMemory(fileStream, "");
reader.Dispose();
```

#### See Also
[`TextResult`](../class/TextResult.md)

&nbsp;


## DecodeBuffer

Decode barcodes from the memory buffer containing image pixels in defined format.

```C#
TextResult[] Dynamsoft.Barcode.BarcodeReader.DecodeBuffer(byte[] buffer, int width, int height, int stride, EnumImagePixelFormat imagePixelFormat, string templateName)	
```
   
#### Parameters
`[in]	buffer` <*byte[]*> : The array of bytes which contain the image data.  
`[in]	width` <*int*> : The width of the image in pixels.
`[in]	height` <*int*> : The height of the image in pixels.
`[in]	stride` <*int*> : The stride of the image (also called scan width).  
`[in]	imagePixelFormat` <*[EnumImagePixelFormat]({{ site.enumerations }}other-enums.html#imagepixelformat)*> : The image pixel format used in the image byte array. 
`[in] templateName` <*string*> : The template name.

#### Return value
All barcode text results decoded successfully. 

#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md) The exception thrown by Dynamsoft Barcode Reader.  

#### Code Snippet
```C#
BarcodeReader reader = new BarcodeReader();
reader.ProductKeys = "t0260NwAAAHV***************";
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

#### See Also 
[`TextResult`](../class/TextResult.md)


&nbsp;


## DecodeBase64String

Decode barcode from an image file encoded as a base64 string.

```C#
TextResult[] Dynamsoft.Barcode.BarcodeReader.DecodeBase64String(string base64, string templateName)	
```   

#### Parameters
`[in]	base64` <*string*> : A base64 encoded string that represents an image.   
`[in] templateName` <*string*> : The template name.

#### Return value
All barcode text results decoded successfully. 

#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md) The exception thrown by Dynamsoft Barcode Reader. 

#### Code Snippet
```C#
BarcodeReader reader = new BarcodeReader();
reader.ProductKeys = "t0260NwAAAHV***************";
byte[] byteFileStream = GetFileStream(@"C:\Program Files (x86)\Dynamsoft\{Version number}\Images\AllSupportedBarcodeTypes.tif");
string base64String = GetFileBase64String(byteFileStream);
TextResult[] result = reader.DecodeBase64String(base64String, "");
reader.Dispose();
```

#### See Also 
[`TextResult`](../class/TextResult.md)

&nbsp;


## DecodeBitmap

Decodes barcode from a bitmap.

```C#
TextResult[] Dynamsoft.Barcode.BarcodeReader.DecodeBitmap(Bitmap bitMap, string templateName)
```   
   
#### Parameters
`[in]	bitMap` <*Bitmap*> : The image to be decoded.  
`[in] templateName` <*string*> : The template name.

#### Return value
All barcode text results decoded successfully. 

#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md) The exception thrown by Dynamsoft Barcode Reader. 

#### Code Snippet
```C#
BarcodeReader reader = new BarcodeReader();
reader.ProductKeys = "t0260NwAAAHV***************";
Bitmap bBMP = new Bitmap(@"C:\Program Files (x86)\Dynamsoft\{Version number}\Images\AllSupportedBarcodeTypes.tif");
TextResult[] result = reader.DecodeBitmap(bBMP, "");
reader.Dispose();
```

#### See Also 
[`TextResult`](../class/TextResult.md)