---
layout: default-layout
title: How to resolve error -10022 the PDF DLL is missing?
keywords: Dynamsoft Barcode Reader, FAQ, Pricing/Licensing, General, ensure no overuse
description: How to resolve error -10022 the PDF DLL is missing?
needAutoGenerateSidebar: false
---

## The error message "-10022 The PDF DLL is missing" on Linux

[<< Back to FAQ index](index.md)

The error message "-10022 The PDF DLL is missing" suggests that the Dynamsoft Barcode Reader is looking for a DLL file, which is typically used in Windows environments, rather than a shared object (SO) file, which is used in Linux environments. This could be an issue with how the error message is generated or with how the library is handling file dependencies.

> For Windows x86:
> `DynamicPdf.dll` > `DynamicPdfCore.dll`

> For Windows x64:
> `DynamicPdfx64.dll` > `DynamicPdfCorex64.dll`

> For Linux:  
> `libDynamicPdf.so` > `libDynamicPdfCore.so`

To resolve this issue, please run following command on console to check if all dependencies are installed

```
ldd /lib/libDynamicPdf.so
```

> Tips:
> Generally, libatomic1 is not installed on ARM64, while it does appear to exist on the AMD64 image. If you are using ARM64, you could test if libatomic1 is installed.
