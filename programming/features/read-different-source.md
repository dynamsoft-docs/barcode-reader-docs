---
layout: default-layout
title: Read Image from Different Sources - Dynamsoft Barcode Reader SDK
description: This page describes how to read images from different sources in Dynamsoft Barcode Reader SDK.
keywords: Different Source
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
permalink: /programming/features/read-different-source.html
---

# Read Barcode from Different Image Sources

The DBR algorithm provides multiple ways to read images from different sources. This article will introduce the following methods.

- `DecodeFile`: Decode barcodes from a still image. You have to specify the file path when using this method to decode the barcodes.
- `DecodeFileInMemory`: Decode barcodes from an image file in memory.
- `DecodeBuffer`: Decode barcodes with buffered image data and the width, height, strides and pixel format of the image.

## DecodeFile

<div class="sample-code-prefix template2"></div>
   >- C
   >- C++
   >- C#
   >- Java
   >- Python
   >
>```c
int errorCode = DBR_DecodeFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
```
>```c++
int errorCode = reader->DecodeFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
```
>```c#
try{
   TextResult[] result = reader.DecodeFile(@"C:\Program Files (x86)\Dynamsoft\{Version number}\Images\AllSupportedBarcodeTypes.tif", "");
} catch (BarcodeReaderException exp) {
   Console.WriteLine(exp.Message);
}
```
>```java
try{
   TextResult[] result = reader.decodeFile("your file path", "");
} catch (BarcodeReaderException ex) {
   ex.printStackTrace();
}
```
>
```python
try:
   results = dbr.decode_file(image_path)
   except BarcodeReaderError as bre:
      print(bre)
```

## DecodeFileInMemory

`DecodeFileInMemory` is the method designed for decoding barcodes from the raw image data in bytes. The required parameters are as follows:

- `fileBytes`: The image data in bytes. When images are read in memory, they are transferred into byte data.
- `templateName`: The barcode decoding template name.

<div class="sample-code-prefix template2"></div>
   >- C
   >- C++
   >- C#
   >- Java
   >- Python
   >
>```c
barcodeReader = DBR_CreateInstance();
FILE* fp;
fopen_s(&fp, "../../../images/AllSupportedBarcodeTypes.png", "rb");
if (fp == NULL) {
   perror("");
   return NULL;
}
fseek(fp, 0, SEEK_END);
long int fileSize = ftell(fp);
rewind(fp);
unsigned char* fileByte = NULL;
fileByte = (unsigned char*)malloc(fileSize + 1);
fread(fileByte, 1, fileSize, fp);
fileByte[fileSize] = '\0';
fclose(fp);
errorCode = DBR_DecodeFileInMemory(barcodeReader, fileByte, fileSize, "");
```
>```c++
FILE* fp;
fopen_s(&fp, path, "rb");
if (fp == NULL) {
   perror("");
   return NULL;
}
fseek(fp, 0, SEEK_END);
long int fileSize = ftell(fp);
rewind(fp);
unsigned char* fileByte = NULL;
fileByte = new unsigned char[fileSize + 1];
fread(fileByte, 1, fileSize, fp);
fileByte[fileSize] = '\0';
fclose(fp);
int errorCode = reader->DecodeFileInMemory(fileByte, fileSize, "");
```
>```c#
try{
   TextResult[] results = null;
   FileStream fileStream = new FileStream("your-file-path", FileMode.Open, FileAccess.Read);
   byte[] byteBuffer = new byte[fileStream.Length];
   fileStream.Read(byteBuffer, 0, (int)fileStream.Length);
   fileStream.Close();
   results = dbr.DecodeFileInMemory(byteBuffer, "");
} catch (BarcodeReaderException exp) {
   Console.WriteLine(exp.Message);
}
```
>```java
private static byte[] getFileBytes(String filePath) {
   byte[] buffer = null;
   FileInputStream fis = null;
   ByteArrayOutputStream bos = null;
   try {
      fis = new FileInputStream(new File(filePath));
      bos = new ByteArrayOutputStream();
      byte[] tempBuffer = new byte[1024];
      int iReadSize;
      while ((iReadSize = fis.read(tempBuffer)) != -1) {
         bos.write(tempBuffer, 0, iReadSize);
      }
      buffer = bos.toByteArray();
   } catch (IOException ex) {
      ex.printStackTrace();
   } finally {
      if (null != bos) {
         try {
            bos.close();
         } catch (IOException e) {
            e.printStackTrace();
         }
      }
      if (null != fis) {
         try {
            fis.close();
         } catch (IOException e) {
            e.printStackTrace();
         }
      }
   }
   return buffer;
}
TextResult[] result = reader.decodeFileInMemory(getFileBytes("your-file-path"), "");
```
>
```python
// Read the image file and transfer it into byte
with open(image_path,"rb") as f:
   bytes = f.read()
results = dbr.decode_file_stream(bytearray(bytes))
```

## DecodeBuffer

`DecodeBuffer` is the method designed for decoding barcodes from the memory buffer containing image pixels in a defined format. This API is generally used in video stream decoding. After obtaining a frame of image data, you can invoke this API to decode the frame. The required parameters are as follows:

- BufferBytes: The array of bytes that contains the image data.
- Width: The width of the image (in pixel).
- Height: The height of the image (in pixel).
- Stride: The stride (or scan width) of the image.
- Format: The image pixel format used in the image byte array. View all available templates in `EnumImagePixelFormat`.
- TemplateName: The template name. It indicates which barcode decoding template you are going to use when decoding the buffer.

<div class="sample-code-prefix template2"></div>
   >- C
   >- C++
   >- C#
   >- Java
   >- Python
   >
>```c
barcodeReader = DBR_CreateInstance();
int errorCode = DBR_DecodeBuffer(barcodeReader, pBufferBytes, iWidth, iHeight, iStride, format, "");
```
>```c++
int errorCode = reader->DecodeBuffer(pBufferBytes, iWidth, iHeight, iStride, format, "");
```
>```c#
Bitmap bBMP = new Bitmap(@"C:\Program Files (x86)\Dynamsoft\{Version number}\Images\AllSupportedBarcodeTypes.tif");
BitmapData bmdat = bBMP.LockBits(new Rectangle(Point.Empty, bBMP.Size), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
byte[] buffer = new byte[stride * bmdat.Height];
try{
   TextResult[] result = reader.DecodeBuffer(buffer, bBMP.Width, bBMP.Height, bmdat.Stride, EnumImagePixelFormat.IPF_ARGB_8888, "");
} catch (BarcodeReaderException exp) {
   Console.WriteLine(exp.Message);
}
```
>```java
ImageData image = cvtToImageData(filePath);
try {
   TextResult[] results = dbr.decodeBuffer(image.bytes, image.width, image.height, image.stride, image.format, "");
} catch (BarcodeReaderException ex){
   ex.printStackTrace();
} catch (IOException ex){
   ex.printStackTrace();
}
```
>
```python
# Decoding with opencv image.
# Convert an image to a cv buffer.
cv_buffer = cv2.imread("The file path of the image")
# Use DBR decode_buffer to decode the buffered image.
results = dbr.decode_buffer(cv_buffer)
```
