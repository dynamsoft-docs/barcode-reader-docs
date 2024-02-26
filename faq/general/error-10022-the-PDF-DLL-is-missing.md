---
layout: default-layout
title: How to resolve error -10022 the PDF DLL is missing?
keywords: Dynamsoft Barcode Reader, FAQ, Dependency, General, ensure no overuse
description: How to resolve error -10022 the PDF DLL is missing?
needAutoGenerateSidebar: false
---

## How to troubleshoot error message "-10022 The PDF DLL is missing"

[<< Back to FAQ index](index.md)

The error message "-10022 The PDF DLL is missing" suggests that the Dynamsoft Barcode Reader is looking for a DLL file, which is typically used in Windows environments,rather than a shared object (SO) file, which is used in Linux environments. However,you might also encounter same error message in Linux (They indicate the same issue), since we have unified error message library. This error could be an issue with how the error message is generated or with how the library is handling file dependencies.

- For Windows:
  `DynamicPdf.dll` // If you are using Winodws x86
  `DynamicPdfCore.dll` // If you are using Winodws x86
  `DynamicPdfx64.dll` // If you are using Winodws x64
  `DynamicPdfCorex64.dll` // If you are using Winodws x64

To check if all dependencies is properly installed, you could use following method:
Use `dumpbin` command line tool to check dependency.

```
 dumpbin/dependents your_ddl_file.ddl
```

- For Linux:  
  `libDynamicPdf.so`
  `libDynamicPdfCore.so`

To resolve this issue, please run following command on console to check if all dependencies are installed

```
ldd /lib/libDynamicPdf.so
```

> Tips:
> Generally, libatomic1 is not installed on ARM64, while it does appear to exist on the AMD64 image. If you are using ARM64, you could test if libatomic1 is installed.
