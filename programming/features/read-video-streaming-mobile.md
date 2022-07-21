---
layout: default-layout
title: Read Barcode from Video Streaming - Dynamsoft Barcode Reader SDK
description: This page describes how to read barcodes from video streaming in Dynamsoft Barcode Reader SDK.
keywords: Different Source
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
permalink: /programming/features/read-video-streaming-mobile.html
---

# Read Barcode from Video Streaming

## Configurations on the Camera

Firstly, to decode from video streaming, you have to create a camera module. The camera module is responsible for:

- Capturing the video streaming.
- Displaying the video streaming on the UI.
- Transfer the captured data to the barcode reader for barcode decoding.

<div class="sample-code-prefix template2"></div>
   >- Android
   >- Objective-C
   >- Swift
   >
>```java
public class MainActivity extends AppCompatActivity {
   CameraEnhancer mCamera;
   @Override
   protected void onCreate(Bundle savedInstanceState) {
      DCECameraView cameraView = findViewById(R.id.cameraView);
      // Create an instance of Dynamsoft Camera Enhancer for video streaming.
      mCamera = new CameraEnhancer(MainActivity.this);
      mCamera.setCameraView(cameraView);
   }
   @Override
   public void onResume() {
      try {
         // Open the camera when the app is resumed.
         mCamera.open();
      } catch (CameraEnhancerException e) {
         e.printStackTrace();
      }
      super.onResume();
   }
   @Override
   public void onPause() {
      try {
         // Close the camera when the app is resumed.
         mCamera.close();
      } catch (CameraEnhancerException e) {
         e.printStackTrace();
      }
      super.onPause();
   }
}
```
>```objc
@property(nonatomic, strong) DynamsoftCameraEnhancer *camera;
@property(nonatomic, strong) DCECameraView *cameraView;
- (void)configurationDCE{
   // Initialize a camera view for previewing video.
   _cameraView = [DCECameraView cameraWithFrame:self.view.bounds];
   [self.view addSubview:_cameraView];
   // Initialize the Camera Enhancer with the camera view.
   _camera = [[DynamsoftCameraEnhancer alloc] initWithView:_cameraView];
   // Open the camera
   [_camera open];
}
```
>```swift
class ViewController: UIViewController {
   var camera:DynamsoftCameraEnhancer! = nil
   var cameraView:DCECameraView! = nil
   func configurationDCE() {
      cameraView = DCECameraView.init(frame: self.view.bounds)
      self.view.addSubview(cameraView)
      // Initialize the Camera Enhancer with the camera view.
      camera = DynamsoftCameraEnhancer.init(view: cameraView)
      //Open the camera
      camera.open()
   }
}
```

## Configure Barcode Reader

### Bind the Camera to Receive Video Streaming

Initialize Dynamsoft Barcode Reader and bind the Camera Enhancer to the Barcode Reader. The barcode reader will continuously receive video frames when the video barcode decoding thread is enabled.

<div class="sample-code-prefix template2"></div>
   >- JavaScript
   >- Android
   >- Objective-C
   >- Swift
   >
>```js
```
>```java
public class MainActivity extends AppCompatActivity {
   BarcodeReader mBarcodeReader;
   @Override
   protected void onCreate(Bundle savedInstanceState) {
      ...
      try {
         // Create an instance of Dynamsoft Barcode Reader.
         mBarcodeReader = new BarcodeReader();
      } catch (BarcodeReaderException e) {
         e.printStackTrace();
      }
      // Bind the instance of Camera to the BarcodeReader
      mBarcodeReader.setCameraEnhancer(mCamera);
   }
}
```
>```objc
@property(nonatomic, strong) DynamsoftBarcodeReader *barcodeReader;
...
- (void)configurationDBR{
   // Add function configureDBR and add the following code.
   _barcodeReader = [[DynamsoftBarcodeReader alloc] init];
   // Bind the instance of Camera to the BarcodeReader
   [_barcodeReader setCameraEnhancer:_dce];
}
```
>```swift
var barcodeReader:DynamsoftBarcodeReader! = nil
...
class ViewController: UIViewController {
   // Add function configureDBR and add the following code.
   func configurationDBR() {
      barcodeReader = DynamsoftBarcodeReader.init()
      // Bind the instance of Camera to the BarcodeReader
      barcodeReader.setCameraEnhancer(dce)
   }
}
```

### Obtain Video Barcode Decoding Results

Method `startScanning` is the switch of video streaming barcode decoding. If you have bound the instance of CameraEnhancer to the BarcodeReader, you can turn on the switch by triggering `startScanning`. To turn off the video barcode decoding, you can use `stopScanning`.

`TextResultCallback` is the callback method that will be triggered each time when the BarcodeReader completed processing on a video frame. The following data will be transfered in the callback method:

- `id`: The id of the video frame. It is defined by the CameraEnhancer when the video frame is captured.
- `imageData`: The image data of the video frame. Users can obtain the image data even if there is no barcode result detected from the image.
- `textResults`: A array of `TextResult` which contains information like the text, formats and locations of the detected barcodes.

To obtain the barcode results, you have to configure the `TextResultCallback` and trigger the `startScanning` in your project.

<div class="sample-code-prefix template2"></div>
   >- Android
   >- Objective-C
   >- Swift
   >
>```java
public class MainActivity extends AppCompatActivity {
   @Override
   protected void onCreate(Bundle savedInstanceState) {
      ...
      mBarcodeReader.setTextResultListener(new TextResultListener() {
         // Obtain the recognized barcode results and display.
         @Override
         public void textResultCallback(int id, ImageData imageData, TextResult[] textResults) {
            // Add code to execute when barcode textResult is received.
         }
      });
   }
   @Override
   public void onResume() {
      try {
         mCamera.open();
      } catch (CameraEnhancerException e) {
         e.printStackTrace();
      }
      // Start Scanning when app is resumed
      mBarcodeReader.startScanning();
      super.onResume();
   }
   @Override
   public void onPause() {
      try {
         mCamera.close();
      } catch (CameraEnhancerException e) {
         e.printStackTrace();
      }
      // Stop Scanning when app is paused
      mBarcodeReader.stopScanning();
      super.onPause();
   }
}
```
>```objc
// Add DBRTextResultListener to the viewController
@interface ViewController ()<DBRTextResultListener>
...
// Add the following code in configurationDBR.
- (void)configurationDBR{
   [_barcodeReader setDBRTextResultListener:self];
   [_barcodeReader startScanning];
}
- (void)textResultCallback:(NSInteger)frameId imageData:(iImageData *)imageData results:(NSArray<iTextResult *> *)results{
   // Add code to execute when barcode textResult is received.
}
```
>```swift
var barcodeReader:DynamsoftBarcodeReader! = nil
...
// Add DBRTextResultListener to the viewController
class ViewController: UIViewController, DBRTextResultListener {
   // Add the following code in configurationDBR.
   func configurationDBR() {
      ...
      barcodeReader.setDBRTextResultListener(self)
      barcodeReader.startScanning()
   }
   func textResultCallback(_ frameId: Int, imageData: iImageData, results: [iTextResult]?) {
      // Add code to execute when barcode textResult is received.
   }
}
```
