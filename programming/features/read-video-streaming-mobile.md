---
layout: default-layout
title: Read Barcode from Video Streaming - Dynamsoft Barcode Reader SDK
description: This page describes how to read barcodes from video streaming in Dynamsoft Barcode Reader SDK.
keywords: Different Source
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
---

# Read Barcode from Video Streaming

## Configurations on the Camera

Firstly, to decode from video streaming, you have to create a camera module using the Dynamsoft Camera Enhancer. The camera module is responsible for:

- Capturing the video stream.
- Displaying the video stream on the UI.
- Transfer the captured data to the barcode reader for barcode decoding.

<div class="sample-code-prefix template2"></div>
   >- Android
   >- Objective-C
   >- Swift
   >
>
```java
private CameraEnhancer mCamera;
private CaptureVisionRouter mRouter;
@Override
protected void onCreate(Bundle savedInstanceState) {
   super.onCreate(savedInstanceState);
   setContentView(R.layout.activity_main)
   PermissionUtil.requestCameraPermission(this);
   CameraView cameraView = findViewById(R.id.camera_view);
   mCamera = new CameraEnhancer(cameraView, this);
}
```
>
```objc
@property (nonatomic, strong) DSCameraView *cameraView;
@property (nonatomic, strong) DSCameraEnhancer *dce;
...
- (void)setUpCamera {
   self.cameraView = [[DSCameraView alloc] initWithFrame:self.view.bounds];
   self.cameraView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
   [self.view insertSubview:self.cameraView atIndex:0];
   self.dce = [[DSCameraEnhancer alloc] init];
   self.dce.cameraView = self.cameraView;
}
```
>
```swift
class ViewController: UIViewController {
   var cameraView:CameraView!
   let dce = CameraEnhancer()
   func setUpCamera() {
      cameraView = .init(frame: view.bounds)
      cameraView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
      view.insertSubview(cameraView, at: 0)
      dce.cameraView = cameraView
   }
}
```

## Configure CaptureVisionRouter

### Create an instance of CaptureVisionRouter and Bind with the CameraEnhancer

Initialize Dynamsoft Barcode Reader and bind the Camera Enhancer to the Barcode Reader. The barcode reader will continuously receive video frames when the video barcode decoding thread is enabled.

<div class="sample-code-prefix template2"></div>
   >- Android
   >- Objective-C
   >- Swift
   >
>
```java
@Override
protected void onCreate(Bundle savedInstanceState) {
   ...
   mRouter = new CaptureVisionRouter(this);
   try {
      mRouter.setInput(mCamera);
   } catch (CaptureVisionRouterException e) {
      throw new RuntimeException(e);
   }
}
```
>
```objc
@property (nonatomic, strong) DSCaptureVisionRouter *cvr;
...
- (void)setUpDCV {
   self.cvr = [[DSCaptureVisionRouter alloc] init];
   NSError *error;
   [self.cvr setInput:self.dce error:&error];
}
```
>
```swift
class ViewController: UIViewController {
   let cvr = CaptureVisionRouter()
   func setUpDCV() {
      try! cvr.setInput(dce)
   }
}
```

### Implement the CaptureResult Receiver to Receive the Results

<div class="sample-code-prefix template2"></div>
   >- Android
   >- Objective-C
   >- Swift
   >
>
```java
private CameraEnhancer mCamera;
private CaptureVisionRouter mRouter;
@Override
protected void onCreate(Bundle savedInstanceState) {
   ...
   mRouter.addResultReceiver(new CapturedResultReceiver() {
      @Override
      public void onDecodedBarcodesReceived(DecodedBarcodesResult result) {
         // Add code to do when DecodedBarcodesResult received.
      }
   });
}
```
>
```objc
// Add CapturedResultReceiver to the ViewController.
@interface ViewController () <DSCapturedResultReceiver>
- (void)setUpDCV {
   ...
   // Add result receiver to the CaptureVisionRouter instance.
   [self.cvr addResultReceiver:self];
}
// Implement onDecodedBarcodesReceived method to receive the barcode decoding result.
- (void)onDecodedBarcodesReceived:(DSDecodedBarcodesResult *)result {
   // Add code to do when DecodedBarcodesResult received.
}
```
>
```swift
// Add CapturedResultReceiver to the ViewController.
class ViewController: UIViewController, CapturedResultReceiver {
   func setUpDCV() {
      ...
      // Add result receiver to the CaptureVisionRouter instance.
      cvr.addResultReceiver(self)
   }
   // Implement onDecodedBarcodesReceived method to receive the barcode decoding result.
   func onDecodedBarcodesReceived(_ result: DecodedBarcodesResult) {
      // Add code to do when DecodedBarcodesResult received.
   }
}
```

### Control the State of Barcode Decoding

<div class="sample-code-prefix template2"></div>
   >- Android
   >- Objective-C
   >- Swift
   >
>
```java
@Override
public void onResume() {
   try {
      // Open the camera when the activity appear.
      mCamera.open();
   } catch (CameraEnhancerException e) {
      e.printStackTrace();
   }
   // Start the capturing process when the activity appear.
   // You have to specify a template name to start capturing.
   // For example, we use the preset template "ReadBarcodes" to start capturing with the default barcode decoding template.
   mRouter.startCapturing(EnumPresetTemplate.PT_READ_BARCODES, null);
   super.onResume();
}
@Override
public void onPause() {
   try {
      // Close the camera when leaving the activity.
      mCamera.close();
   } catch (CameraEnhancerException e) {
      e.printStackTrace();
   }
   // Stop the capturing process when leaving the activity.
   mRouter.stopCapturing();
   super.onPause();
}
```
>
```objc
- (void)viewDidLoad {
   [super viewDidLoad];
   [self setUpCamera];
   [self setUpDCV];
}
- (void)viewWillAppear:(BOOL)animated {
   // Open the camera when the view will appear.
   [self.dce open];
   // Start the capturing process when the view will appear.
   // You have to specify a template name to start capturing.
   // For example, we use the preset template "ReadBarcodes" to start capturing with the default barcode decoding template.
   [self.cvr startCapturing:DSPresetTemplateReadBarcodes completionHandler:^(BOOL isSuccess, NSError * _Nullable error) {
      NSAssert((error == nil), error.description);
   }];
   [super viewWillAppear:animated];
}
- (void)viewWillDisappear:(BOOL)animated {
   // Close the camera when the view will disappear.
   [self.dce close];
   // Stop the capturing process when the view will disappear.
   [self.cvr stopCapturing];
   [super viewWillDisappear:animated];
}
```
>
```swift
override func viewDidLoad() {
   super.viewDidLoad()
   setUpCamera()
   setUpDCV()
}
override func viewWillAppear(_ animated: Bool) {
   // Open the camera when the view will appear.
   dce.open()
   // Start the capturing process when the view will appear.
   // You have to specify a template name to start capturing.
   // For example, we use the preset template "ReadBarcodes" to start capturing with the default barcode decoding template.
   cvr.startCapturing(PresetTemplate.readBarcodes.rawValue) { isSuccess, error in
      if (!isSuccess) {
         if let error = error {
             print("\(error)")
         }
      }
   }
   super.viewWillAppear(animated)
}
override func viewWillDisappear(_ animated: Bool) {
   // Close the camera when the view will disappear.
   dce.close()
   // Stop the capturing process when the view will disappear.
   cvr.stopCapturing()
   super.viewWillDisappear(animated)
}
```
