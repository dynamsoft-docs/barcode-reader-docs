---
layout: default-layout
title: Dynamsoft Barcode Reader Android API Reference - DCESettingParameters Class
description: This page shows the DCESettingParameters Class of Dynamsoft Barcode Reader for Android SDK.
keywords: DCESettingParameters, class, api reference, android
needAutoGenerateSidebar: false
---

# DCESettingParameters

Stores the DCESettingParameters information.

# Attributes

| Attribute | type |
|-----------|------|
| [`_CameraInstance`](#camerainstance) | *Object* |
| [`_textResultCallback`](#textresultcallback) | [`TextResultCallback`]({{site.android_api}}interface.html#textresultcallback) |
| [`_textResultCallback_UserData`](#textresultcallbackuserdata) | *Object* |
| [`_irtCallback`](#irtcallback) | [`IntermediateResultCallback`]({{site.android_api}}interface.html#intermediateresultcallback) |
| [`_irtCallback_UserData`](#irtcallbackuserdata) | *Object* |

## _CameraInstance

```java
    Object com.dynamsoft.dbr.DCESettingParameters._CameraInstance
```

## _textResultCallback

Set text result callback.

```java
    TextResultCallback com.dynamsoft.dbr.DCESettingParameters._textResultCallback
```

The `TextResultCallback` includes the following Parameters:

- `frameID`: The ID of frame.
- `results`: The recognized barcode result of the frame.
- `userData`: Arguments passed to your function.

## _textResultCallback_UserData

Set the `UserData` of the `TextResultCallback`.

```java
    Object com.dynamsoft.dbr.DCESettingParameters._textResultCallback_UserData
```

## _irtCallback

Set intermediate result call back.

```java
    IntermediateResultCallback com.dynamsoft.dbr.DCESettingParameters._irtCallback
```

The `IntermediateResultCallback` includes the following Parameters:

- `frameID`: The ID of frame.
- `results`: The intermediate result of the frame.
- `userData`: Arguments passed to your function.

## _irtCallback_UserData

Set the `UserData` of the `IntermediateResultCallback`.

```java
    Object com.dynamsoft.dbr.DCESettingParameters._irtCallback_UserData
```
