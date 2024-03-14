---
layout: default-layout
title: Proguard Instructions - Dynamsoft Barcode Reader Android FAQ
description: This page shows how to configure proguard-rules file of your project.
keywords: Proguard, android
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
---

# How to prevent project build failure after shrinking code?

[<< Back to FAQ index](index.md)

This page provides you a possible solution when your project build fails after implementing the code obfuscation.

Generally, you don't have to add any configurations when shrinking your code because **proguard rule** is already configured in the aar. However, if you still build failed after shrinking code, you can try to add the following code in the **proguard-rule.pro** file of your project.

```bash
-keep class com.dynamsoft.dbr.** { *; }
# Uncomment the following line when your project use Dynamsoft Camera Enhancer as well. 
#-keep class com.dynamsoft.dce.** { *; }
-keepclasseswithmembernames class * {
    native <methods>;
}
```
