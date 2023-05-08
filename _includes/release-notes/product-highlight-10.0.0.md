
`DynamsoftBarcodeReader` SDK has been refactored to integrate with `DynamsoftCaptureVision (DCV)` architecture, which is newly established to aggregate the features of functional products powered by Dynamsoft. The features are designed to be pluggable, customizable and interactable. In addition, the functional products share the computation so that their processing speed is much higher than working individually.

* `DynamsoftCaptureVision` architecture consists of:
  * `ImageSourceAdapter(ISA)`, the standard input interface for you to convert image data from different sources into the standard input image data. In addition, `ISA` incorporates an image buffer management system that allows instant access to the buffered image data.
  * `CaptureVisionRouter (CVR)`, an engine for you to update templates, retrieve images from `ISA`, coordinate corresponding functional products and dispatch the results to the receivers.
  * Functional products that perform image processing, content understanding and semantic processing. The functional products are pluggable and passively called by CVR when they are required.
  * Result receiver interfaces. You can implement `CapturedResultReceiver (CRR)` to receive the `CapturedResults` that output when the processing on an image is finalized. You can also implement `IntermediateResultReceiver (IRR)` to get timely results from different stages of the workflow.
* The parameter template system has been comprehensively upgraded.
  * Multiple algorithm task settings are available. You can define barcode decoding, label recognizing, document scanning and semantic processing tasks in one template file.
  * Extended the feature of the ROI system. By configuring the `target ROI` parameters, you can not only specify an `ROI` on the original image but also define the dependencies of the algorithm tasks. This feature enables you to customize the workflow when processing complex scenarios.
  * The image processing parameters are separated from the task parameters so that the template settings become more clear and concise.
* The `intermediate result` system has been improved.
  * Achieved the `intermediate result` sharing between different functional products. The results that have the same image source and processing parameters are directly reused, which speeds up the image processing workflow. You don’t need to add any additional code to enable the `intermediate result` sharing. The library can recognize all the reusable results automatically based on the template file you uploaded.
  * The readability and interactivity of the `intermediate results` are enhanced. `IntermediateResultReceiver` allows you to receive up to 27 different types of `Intermediate results`. You can clearly read which stage of the algorithm each result is output from. In addition, `IntermediateResultManager` allows you to intervene in the workflows by modifying the `intermediate results`.

