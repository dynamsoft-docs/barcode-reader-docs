---
layout: default-layout
title: How to resolve error -10022 the PDF DLL is missing?
keywords: Dynamsoft Barcode Reader, FAQ, Dependency, General, pdf, missing
description: How to resolve error -10022 the PDF DLL is missing?
needAutoGenerateSidebar: false
---

## How to troubleshoot error message "-10022 The PDF DLL is missing"

[<< Back to FAQ index](index.md)


The error message `-10022 The PDF DLL is missing` indicates that the Dynamsoft Barcode Reader is looking for a PDF DLL file, which is typically used in Windows environments. However, this error message may also appear in Linux environments, as both cases point to the same issue due to a shared error message library.

This error occurs when the necessary PDF library files required for handling PDF files are either missing or the required dependencies are not in the correct path.

### To resolve this issue you could try the following methods

Please check if the PDF library files are located in the same directory as the Dynamsoft Barcode Reader library (e.g. DynamsoftBarcodeReaderx64.dll). If they are not, kindly copy the PDF library files to that location and try again.

**For Windows x86:**

- `DynamicPdf.dll`

- `DynamicPdfCore.dll`
  
- `DynamicImage.dll`
  
**For Windows x64:**

- `DynamicPdfx64.dll`

- `DynamicPdfCorex64.dll`
  
- `DynamicImagex64.dll`

**For Linux:**

- `libDynamicPdf.so`

- `libDynamicPdfCore.so`

If you still have this issue, please check if all dependencies are installed based on your OS.

**For Windows:**
Use `dumpbin` command line tool to check dependency.

```
dumpbin/dependents your_ddl_file.ddl
```
 
 **For Linux:**
 Run the following command on the console to check if all dependencies are installed.
 
 ```
 ldd /lib/libDynamicPdf.so
 ```
 
 > Tips:
 > Generally, libatomic1 is not installed on ARM64, while it does appear to exist on the AMD64 image. If you are using ARM64, you could test if libatomic1 is installed.
