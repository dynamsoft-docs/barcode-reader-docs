---
layout: default-layout
title: How can I solve the "Undefined symbols for architecture armv7" error when building on iOS?
keywords: Dynamsoft Barcode Reader, FAQ, Mobile, tech basic, ios, armv7, undefined symbols
description: How can I solve the "Undefined symbols for architecture armv7" error when building on iOS?
needAutoGenerateSidebar: true
---

# How can I solve the "Undefined symbols for architecture armv7" error when building on iOS?

[<< Back to FAQ index](index.md)

DBR iOS is compatible with the arm64 and x86_64 architectures only. If you attempt to build an app that is targetting the armv7 architecture, you will be met with an error from the Barcode Reader framework saying

> Undefined symbols for architecture armv7

Please note that this will mostly occur with older versions of Xcode or iOS that are still compatible with the older iOS device models that used the armv7 architecture. For most devices that are able to run iOS 11 and higher, the architecture will be arm64.

By default, when you set the *Architectures* in *Build Settings* to the "$(ARCHS_STANDARD) - Standard Architectures (arm64)", the armv7 architecture should automaticallt not be included. To ensure that your app ignores the armv7 architecture, you can add it to the *Excluded Architectures* field of the *Build Settings*.