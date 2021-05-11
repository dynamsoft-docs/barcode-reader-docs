---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API Reference - BarcodeScanner Camera Control Methods
description: This page shows BarcodeScanner Camera Control Methods of Dynamsoft Barcode Reader JavaScript SDK.
keywords: getAllCameras, getCurrentCamera, setCurrentCamera, hide, show, close, isOpen, open, pause, play, stop, pauseScan, resumeScan, camera control methods, BarcodeScanner, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# JavaScript API Reference - `BarcodeScanner` Camera Control Methods

| Method               | Description |
|----------------------|-------------|
| [`getAllCameras`](#getallcameras) | Get information of all available cameras on the device. |
| [`getCurrentCamera`](#getcurrentcamera) | Get information about the currently used camera. |
| [`setCurrentCamera`](#setcurrentcamera) | Set camera by its information or device ID. |
| [`hide`](#hide) | Stop the camera and hide the camera UI element. |
| [`show`](#show) | Show the camera UI element, open the camera, and start decoding. |
| [`close`](#close) | Close and release the camera. |
| [`isOpen`](#isopen) | Check if the camera is open. |
| [`open`](#open) | Open the camera. |
| [`pause`](#pause) | Pause the video stream. |
| [`play`](#play) | Continue the video stream. |
| [`stop`](#stop) | Stop the video and release the camera. |
| [`pauseScan`](#pausescan) | Pause the video decoding process. |
| [`resumeScan`](#resumescan) | Resume the video decoding process. |

---

## getAllCameras

Get information of all available cameras on the device.

```javascript
getAllCameras() returns Promise
```

### Return Value

<code>Promise<<a href="../interfaces.html#videodeviceinfo">VideoDeviceInfo</a>[]></code>

### Sample

```javascript
let cameras = await scanner.getAllCameras();
if(cameras.length){
    await scanner.setCurrentCamera(cameras[0]);
}
```

## getCurrentCamera

Get information about the currently used camera.

```javascript
getCurrentCamera() returns Promise
```

### Return Value

<code>Promise<<a href="../interfaces.html#videodeviceinfo">VideoDeviceInfo</a>[] | null></code>

## setCurrentCamera

Set camera by its information or device ID.

```javascript
setCurrentCamera(cameraInfoOrDeviceId) returns Promise
```

### Parameters

`cameraInfoOrDeviceId` *any*

### Return Value

<code>Promise<<a href="../interfaces.html#scannerplaycallbackinfo">ScannerPlayCallbackInfo</a>></code>

### Sample

```javascript
    let cameras = await scanner.getAllCameras();
    if(cameras.length){
        await scanner.setCurrentCamera(cameras[0]);
    }
```

## hide

Stop decoding, close and release the camera, unbind from UI, and set the UI element with `display:none;`

```javascript
hide() returns void
```

### Return Value

`void`

### Sample

[Read barcodes from live camera](https://demo.dynamsoft.com/barcode-reader-js/)

## show

Bind UI, open the camera, remove the UIElement `display` style if the original style is `display:none;`, and start decoding.

```javascript
show() returns Promise
```

### Return Value

<code>Promise<<a href="../interfaces.html#scannerplaycallbackinfo">ScannerPlayCallbackInfo</a>></code>

### Sample

```javascript
await scanner.show();
```

## close

Stop decoding, close and release the camera, and unbind from UI.

```javascript
close() returns void
```

### Return Value

`void`

### Sample

[Read barcodes from live camera](https://demo.dynamsoft.com/barcode-reader-js/)

## isOpen

Check if the scanner is open.

```javascript
isOpen() returns Boolean
```

### Return Value

`Boolean`

### Sample

[Read barcodes from live camera](https://demo.dynamsoft.com/barcode-reader-js/)

## open

Bind UI, open the camera, and start decoding.

```javascript
open() returns Promise
```

### Return Value

<code>Promise<<a href="../interfaces.html#scannerplaycallbackinfo">ScannerPlayCallbackInfo</a>></code>

### Sample

```javascript
await scanner.open();
```

## pause

Pause the video stream but will not release the camera.

```javascript
pause() returns void
```

### Return Value

`void`

### Sample

[Read barcodes from live camera](https://demo.dynamsoft.com/barcode-reader-js/)

## play

Continue the video stream.

```javascript
play(deviceId, width, height) returns Promise
```

### Parameters

- `deviceId` *string*  
- `width` *number*  
- `height` *number*  

### Return Value

<code>Promise<<a href="../interfaces.html#scannerplaycallbackinfo">ScannerPlayCallbackInfo</a>></code>

### Sample

```javascript
await scanner.play();
```

## stop

Stop the video, and release the camera.

```javascript
stop() returns void
```

### Return Value

`void`

### Sample

[Read barcodes from live camera](https://demo.dynamsoft.com/barcode-reader-js/)

## pauseScan

Pause the video decoding process.

```javascript
pauseScan() returns void
```

### Return Value

`void`

### Sample

[Read barcodes from live camera](https://demo.dynamsoft.com/barcode-reader-js/)

## resumeScan

Resume the video decoding process.

```javascript
resumeScan() returns void
```

### Return Value

`void`

### Sample

[Read barcodes from live camera](https://demo.dynamsoft.com/barcode-reader-js/)

