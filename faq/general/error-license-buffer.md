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



Code snippet in C++
```C++
static int SetLicenseCachePath(const char* directoryPath)
```