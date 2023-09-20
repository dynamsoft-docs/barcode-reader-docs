---
layout: default-layout
title: How to resolve error failed to read or write license buffer?
keywords: Dynamsoft Barcode Reader, FAQ, offline, license type
description: How to resolve error failed to read or write license buffer?
needAutoGenerateSidebar: false
permalink: /faq/general/error-license-buffer.html
---

## How to resolve error failed to read or write license buffer?

[<< Back to FAQ index](index.md)

For cloud hosted services, it is more likely to encounter the following error when initializing the license:

`Error Code - DM_LICENSE_BUFFER_FAILED. Value - 20002. Description - Failed to read or write license buffer.`

Dynamsoft sdk writes license file to local usr/home directory or Home directory. The error means there is no permission to write/read the license file to the directory. 

To fix the issue, please set license file cache path to a directory where your program has read and write permissions.




Code snippet in C:
```C
char errorBuf[512];
DBR_SetLicenseCachePath("DIRECTORY-PATH-FOR-LICENSE-CACHE");
DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
void* barcodeReader = DBR_GetInstance();
```
Code snippet in C++
```C++
char errorBuf[512];
dynamsoft::dbr::CBarcodeReader::SetLicenseCachePath("DIRECTORY-PATH-FOR-LICENSE-CACHE");
dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
CBarcodeReader* reader = CBarcodeReader::GetInstance();
```
Code snippet in C#:
```C#
string errorMsg;
BarcodeReader.SetLicenseCachePath("DIRECTORY-PATH-FOR-LICENSE-CACHE");
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = BarcodeReader.GetInstance();
```
Code snippet in Java:
```Java
BarcodeReader.setLicenseCachePath("DIRECTORY-PATH-FOR-LICENSE-CACHE");
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = BarcodeReader.getInstance();
```
Code snippet in Python:
```Python
BarcodeReader.set_license_cache_path("DIRECTORY-PATH-FOR-LICENSE-CACHE")
BarcodeReader.init_license("YOUR-LICENSE-KEY")
reader = BarcodeReader()
```