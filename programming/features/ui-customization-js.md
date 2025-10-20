---
layout: default-layout
title: Customize the UI - Dynamsoft Barcode Reader SDK
description: This page describes how to customize the UI in Dynamsoft Barcode Reader SDK.
keywords: UI customization
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
---

# Customize the UI

## Use the built-in UI

The pre-defined UI provided by Dynamsoft Barcode Reader can be found at [`dce.ui.xml`](https://cdn.jsdelivr.net/npm/dynamsoft-barcode-reader-bundle@latest/dist/ui/dce.ui.xml). The main UI elements in this file are prefixed with `dce-` and they are dynamically bound to functions when the application initiates.

## Modify the UI dynamically

To customize the UI, call `cameraView.getUIElement()` to access the `HTMLElement` that contains all UI components. Before calling `cameraEnhancer.open()`, you can modify the UI by editing CSS, adding or removing elements, or restructuring the HTML.

After `cameraEnhancer.open()`, UI adjustments are still possible via JavaScript. However, handle elements with class names prefixed with `dce-` carefully, as they may be tied to specific internal logic.

## Define the UI in a separate HTML

For less dynamic but more structured customization, create a copy of `dce.ui.xml`, modify it as needed, and store it in your project. Use this customized UI with `Dynamsoft.DCE.CameraView.createInstance('PATH-TO/xxxx.ui.xml')`.

## Integrate HTML into Your Project

Alternatively, `CameraView.createInstance()` accepts an `HTMLElement` directly. This allows you to build and manage the UI within your webpage. For example, set the UI using `CameraView.createInstance(document.getElementById('my-custom-ui'))`.

Let's look at the following example.

**Practice: Customize Based on `dce.ui.xml`**

Start by opening `dce.ui.xml` in your editor to review its contents. You can copy several elements from this file as needed.

Next, create a new HTML page, starting by embedding only the video:

```html
<div id="enhancerUIContainer" style="width:1280px;height:720px;background:#ddd;" >
  <div class="dce-video-container" style="width:100%;height:100%;"></div>
</div>
<script>
    (async () => {
      // Initializes the license for using the SDK in the application.
      Dynamsoft.License.LicenseManager.initLicense("DLS2eyJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSJ9");
      // Create 'CameraView' instance and pass the element "enhancerUIContainer" as its UI.
      let cameraView = await Dynamsoft.DCE.CameraView.createInstance(document.getElementById("enhancerUIContainer"));
      let cameraEnhancer = await Dynamsoft.DCE.CameraEnhancer.createInstance(cameraView);
      await cameraEnhancer.open();
    })();
</script>
```

> The video element will automatically be created and appended to the `dce-video-container` div.

Next, add the camera and resolution list. If the classes match the default ones (`dce-sel-camera` and `dce-sel-resolution`), the SDK will populate them and manage switching.

```html
<div id="enhancerUIContainer" style="position:relative;width:1280px;height:720px;background:#ddd;" >
  <div class="dce-video-container" style="width:100%;height:100%;"></div>
  <div style="position: absolute;left: 0;top: 0;">
    <select class="dce-sel-camera" style="display: block;"></select>
  </div>
</div>
```

```html
<div id="enhancerUIContainer" style="position:relative;width:1280px;height:720px;background:#ddd;" >
  <div class="dce-video-container" style="width:100%;height:100%;"></div>
  <div style="position:absolute;left:0;top:0;">
    <select class="dce-sel-camera" style="display:block;"></select>
    <select class="dce-sel-resolution" style="display:block;margin-top:5px;"></select>
  </div>
</div>
```

> By default, only 3 hard-coded resolutions (1920 x 1080, 1280 x 720, 640 x 480) are available. You can show a customized set of options by hardcoding them.

```html
<select class="dce-sel-resolution">
    <option class="dce-opt-gotResolution" value="got"></option>
    <option data-width="1920" data-height="1080">1920x1080</option>
    <option data-width="1280" data-height="720">1280x720</option>
    <option data-width="640" data-height="480">640x480</option>
</select>
```

> Ensure the selected resolution is supported by the camera. If not, the closest supported resolution will be used. The `dce-opt-gotResolution` class shows the **actual resolution**.
