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

When initializing the license for cloud hosted services, it is common to come across the following error message:

`Error Code - DM_LICENSE_BUFFER_FAILED. Value - 20002. Description - Failed to read or write license buffer.`

This error occurs when Dynamsoft sdk attempts to write the license file to the local usr/home directory or Home directory, but is unable to do so due to lack of permission to read or write the license file in that directory.

To resolve this issue, please set the license file cache path to a directory that your program has read and write permissions for.


Code snippet in C++
```C++
static int SetLicenseCachePath(const char* directoryPath)
```