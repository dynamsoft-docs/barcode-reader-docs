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

When you want to customize the UI, we can leverage the extensive customization features provided by Dynamsoft Camera Enhancer (DCE) to achieve this.

## Use the built-in UI

DCE includes several pre-defined UIs in the `DCE-LIB-PACKAGE/dist/xxxx.ui.html` (or `node_modules/dynamsoft-camera-enhancer/dist/xxxx.ui.html`).
If you are using a CDN, please find [`dce.ui.html`](https://cdn.jsdelivr.net/npm/dynamsoft-camera-enhancer@latest/dist/dce.ui.html) and [`dce.mobile-native.ui.html`](https://cdn.jsdelivr.net/npm/dynamsoft-camera-enhancer@latest/dist/dce.mobile-native.ui.html).

* `dce.ui.html`: The default UI used by CameraView.createInstance() for simple use cases.
* `dce.mobile-native.ui.html`: A mobile-inspired UI with auto flash, suitable for most websites. Activate it with `CameraView.createInstance('@engineResourcePath/dce.mobile-native.ui.html')`.

When `cameraEnhancer.open()` is called, the UI elements are dynamically bound to functions based on their class names, such as `dce-xxxx`.

## Modify the UI dynamically

To customize the UI, call `view.getUIElement()` to access the HTMLElement containing all UI elements. Before `cameraEnhancer.open()`, you can modify the UI by editing CSS, adding/removing elements, or restructuring the HTML. This usually works without issues, though testing is recommended.

After `cameraEnhancer.open()`, UI adjustments are possible via JavaScript, but handle elements with `dce-` prefixed class names carefully, as they may be linked to specific logic.

## Define the UI in a separate HTML

For less dynamic but more structured customization, create a copy of the desired `xxxx.ui.html`, modify it as needed, and store it in your project's `public` folder. Use this customized UI with `CameraView.createInstance('PATH-TO/xxxx.ui.html')`.

## Integrate HTML into Your Project

Alternatively, `CameraView.createInstance()` accepts an `HTMLElement` directly. This allows you to build and manage the UI within your webpage. For example, set the UI using `CameraView.createInstance(document.getElementById('my-custom-ui'))`.

Let's see the following example.

**Practise: customize base on `dce.ui.html`**

Start by opening dce.ui.html in your editor to review its content. You can copy several elements from this file.

Next, create a new HTML page, beginning by embedding only the video:

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