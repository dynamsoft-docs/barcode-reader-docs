---
layout: default-layout
title: Dynamsoft Barcode Reader Objective-C & Swift API Reference - DCESettingParameters Class
description: This page shows the DCESettingParameters Class of Dynamsoft Barcode Reader for iOS SDK.
keywords: DCESettingParameters, class, api reference, iOS
needAutoGenerateSidebar: false
---

# DCESettingParameters

Stores the DCESettingParameters information.

# Attributes

| Attribute | type |
|-----------|------|
| [`cameraInstance`](#camerainstance) | *DynamsoftCameraEnhancer* |
| [`textResultDelegate`](#textresultdelegate) | *DBRTextResultDelegate* |
| [`textResultData`](#textresultdata) | *NSObject* |
| [`intermediateResultDelegate`](#intermediateresultdelegate) | *DBRIntermediateResultDelegate* |
| [`intermediateResultData`](#intermediateresultdata) | *NSObject* |

## cameraInstance

The instance of Camera Enhancer. This instance will enable DBR to fetch frames from the Camera Enhancer frame queue and also take control of the status of camera.

```objectivec
    DynamsoftCameraEnhancer* cameraInstance
```

## textResultDelegate

Set text result delegate.

```objectivec
    DBRTextResultDelegate* textResultDelegate
```

The `textResultDelegate` includes the following Parameters:

- `frameID`: The ID of frame.
- `results`: The recognized barcode result of the frame.
- `userData`: Arguments passed to your function.

## textResultData

Set the `UserData` of the `textResultDelegate`.

```objectivec
    NSObject* textResultData
```

## intermediateResultDelegate

Set intermediate result delegate.

```objectivec
    DBRIntermediateResultDelegate* intermediateResultDelegate
```

The `intermediateResultDelegate` includes the following Parameters:

- `frameID`: The ID of frame.
- `results`: The intermediate result of the frame.
- `userData`: Arguments passed to your function.

## intermediateResultData

Set the `UserData` of the `intermediateResultDelegate`.

```objectivec
    NSObject* intermediateResultData
```
