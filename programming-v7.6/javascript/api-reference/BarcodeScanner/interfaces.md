---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API - BarcodeScanner Interfaces
description: This page shows BarcodeScanner Interfaces of Dynamsoft Barcode Reader JavaScript SDK.
keywords: FrameFilter, ScannerPlayCallbackInfo, ScanSettings, VideoDeviceInfo, interfaces, BarcodeScanner, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# Javascript API Reference - `BarcodeScanner` Interfaces

| Interface            | Description |
|----------------------|-------------|
| [`FrameFilter`](#framefilter) | Filter and discard video frames while focusing. |
| [`ScannerPlayCallbackInfo`](#scannerplaycallbackinfo) | Stores the height and width constraints of the video stream. |
| [`ScanSettings`](#scansettings) | Configures the video stream settings. |
| [`VideoDeviceInfo`](#videodeviceinfo) | Stores the video device information. | 

---

## FrameFilter

Filter and discard video frames that are out of focus during the scanning operation.

### Properties

| Property         | Type | Default Value | Description |
|------------------|------|---------------|-------------|
| region<sub>optional</sub> | [`RegionDefinition`](#regiondefinition) | <pre>{ regionLeft = 0, <br/>regionRight = 100, <br/>regionTop = 0, <br/>regionBottom = 100, <br/>regionMeasuredByPercentage = true }</pre> | Detecting area of a frame. | 
| threshold<sub>optional</sub> | *number* | `0.1` | Threshold used for filtering images. <br>Value range: [0, 1]. <br>An indicator is calculated for each frame from `AppendFrame()`. If the change rate of the indicators between the current frame and historic frames is larger than this threshold, the current frame will be discarded. |

## ScannerPlayCallbackInfo

Stores the height and width constraints of the video stream. 

### Properties

| Property         | Type | Description |
|------------------|------|-------------|
| height | *number* | The height of the video. | 
| width | *number* | The width of the video. | 

## ScanSettings

Configures the video stream settings. Previously known as `ScannerConfig`.

### Properties

| Property         | Type | Default Value | Description |
|------------------|------|---------------|-------------|
| duplicateForgetTime<sub>optional</sub> | *number* | `3000` | Ignore duplicated results found in the specified time period. Measured in ms. | 
| frameFilter<sub>optional</sub> | [`FrameFilter`](#framefilter) |  | Filter and discard video frames that are out of focus. |
| intervalTime<sub>optional</sub> | *number* | `100` | Scan interval used to allow the library to release the CPU periodically. Measured in ms. |

## VideoDeviceInfo

Stores the video device information.

### Properties

| Property           | Type | Description |
|--------------------|------|-------------|
| `deviceId` | *string* | Identifier for the represented device that is persisted across sessions. It is un-guessable by other applications and unique to the origin of the calling application. It is reset when the user clears cookies. | 
| `label` | *string* | The label describing the device. | 