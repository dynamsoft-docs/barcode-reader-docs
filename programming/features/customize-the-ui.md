---   
layout: default-layout
title: Customize the UI for DBR JS
description: This article describes how to use customize the UI used by DBR JS.
needAutoGenerateSidebar: true
keywords: ui customization
breadcrumbText: UI Customization
noTitleIndex: false
permalink: /programming/features/customize-the-ui.html
---

# Customize the UI

Typically, DBR JS reads barcodes directly from video frames. Finding and aiming at the barcode is something essential to the process, therefore, it's very important to have a good integration of the video stream for the reading process.

## The built-in UI

The `BarcodeScanner` class of DBR JS comes with a built-in UI which consists of the following elements:

* An `HTMLVideoElement` that plays the video stream from the camera and allows the SDK to manipulate the video object (in our case, the camera);
* A laser-like moving `HTMLDivElement` that indicates that the SDK is scanning a certain area of the image for barcodes;
* Two built-in `HTMLSelectElement`s that offer the options to change the camera or change the resolution of the current camera;
* An `HTMLCanvasElement` on top of the video stream which is used to highlight the location of found barcodes and show other information if required;
* Other assisting elements.

All of these elements can be customized.

## How to customize the UI

Although you can build your UI for DBR JS from scratch, we recommend that you use the default UI or just customize some element based on it to save time.

If you don't intend to change anything, then all you need is the following two lines of code which will automatically make use of the default UI.

```js
const scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
await scanner.show();
```

The default UI will come up above all other elements on the page and take the whole browser window.

In this article, we'll instead build the UI into an element on the page and customize it to our liking.

### Limit the UI within an HTMLDivElement

We'll start with the following code which shows the video stream in a plain video element.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>DBRJS - UI Customization</title>
</head>

<body>
    <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@9.0.2/dist/dbr.js"></script>
    <div id="UIElement">
        <div id="div-ui-container" style="width:100%;height:100%;position:relative;">
            <div class="dce-video-container" style="position:absolute;width:100%;height:100%;"></div>
        </div>
    </div>
    <script>
        let pScanner = null;
        (async () => {
            let scanner = await (pScanner = pScanner || Dynamsoft.DBR.BarcodeScanner.createInstance());
            await scanner.setUIElement(document.getElementById('div-ui-container'));
            await scanner.show();
        })();
    </script>
    <style>
        #UIElement {
            width: 80vw;
            height: 60vh;
            max-width: 600px;
            margin: 2vmin auto;
            text-align: center;
            font-size: medium;
        }
    </style>
</body>

</html>
```

### Add a loading indicator

The SDK takes a bit of time to initialize, for better user experience, we can add a loading indicator to inform the user that the loading is happening.

We add the following SVG into the div `div-ui-container` :

```html
<svg id="dce-loading" style="animation:turn 1.5s linear infinite;" viewBox="0 0 1024 1024" p-id="11986" width="200" height="200">
    <path d="M512.1 64.2c-35.4 0-64 28.7-64 64v128c0 35.4 28.7 64 64 64 35.4 0 64-28.7 64-64v-128c0-35.3-28.6-64-64-64zM320.4 328.3l-110.8-64c-30.6-17.7-69.8-7.2-87.4 23.4-17.7 30.6-7.2 69.8 23.4 87.4l110.8 64c30.6 17.7 69.8 7.2 87.4-23.4 17.7-30.6 7.2-69.8-23.4-87.4zM342.4 609.2c-17.7-30.6-56.8-41.1-87.4-23.4l-110.8 64c-30.6 17.7-41.1 56.8-23.4 87.4 17.7 30.6 56.8 41.1 87.4 23.4l110.8-64c30.6-17.7 41.1-56.8 23.4-87.4zM509.2 707.1c-35.4 0-64 28.7-64 64v128c0 35.4 28.7 64 64 64 35.4 0 64-28.7 64-64v-128c0-35.3-28.6-64-64-64zM875.8 652.2l-110.8-64c-30.6-17.7-69.8-7.2-87.4 23.4-17.7 30.6-7.2 69.8 23.4 87.4l110.8 64c30.6 17.7 69.8 7.2 87.4-23.4 17.7-30.6 7.2-69.7-23.4-87.4zM678.9 418.2c17.7 30.6 56.8 41.1 87.4 23.4l110.8-64c30.6-17.7 41.1-56.8 23.4-87.4-17.7-30.6-56.8-41.1-87.4-23.4l-110.8 64c-30.6 17.6-41.1 56.8-23.4 87.4z" p-id="11987"></path>
</svg>
<style>
    @keyframes turn {
        0% {
            transform: rotate(0deg);
        }

        25% {
            transform: rotate(90deg);
        }

        50% {
            transform: rotate(180deg);
        }

        75% {
            transform: rotate(270deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes dce-scanlight {
        from {
            top: 0px;
        }

        to {
            top: calc(100% - 72px)
        }
    }
</style>
```

### Customize the video

The video element covers the entire area of the element `div-ui-container` , but you may see some blank space around the video either to the top/bottom or to the left/right. This is because the aspect ratio of the element isn't exactly the same as the video stream itself. As an attempt to contain the entire video in the element, the video may get shrunk or enlarged which results in the blank space.

In some cases, we want to make the best out of the space we allocated for showing the video stream, to do this, we can call the method `setVideoFit()` and pass the value "cover".

```js
scanner.setVideoFit('cover');
```

After that, you will find that the video element is filled by the stream from the camera, although it may just be part of the video.

To go back to the origninal state, simply call

```js
scanner.setVideoFit('contain');
```

### Customize the scan indicator

We will try to replace the default laser-like indicator with someting else by adding the following code after the div with class `dce-video-container` :

```html
<div class="dce-scanarea" style="width:100%;height:100%;position:absolute;left:0;top:0;overflow:hidden;">
    <div class="dce-scanlight" hidden style="width:100%;display:none;height:70px;position:absolute;animation:3s infinite dce-scanlight;background-image:linear-gradient(#ffffff00, #ffb668);border-bottom:2px solid #ff8400;user-select:none;"></div>
</div>
```

The code defines an animated div with the class "dce-scanlight". The class name will be recognized by the SDK so that it gets shown or hidden properly.

### Customize the scanning region

Typically, we want the user to focus the camera on the barcode, which is usually in the center of the video frame. The following code shows how to constrain the area to a centered square:

```js
scanner.onPlayed = async info => {
    let sideLen = Math.min(info.width, info.height) * 0.4;
    let precentW = Math.round(sideLen / info.width * 100)
    let precentH = Math.round(sideLen / info.height * 100);
    let rs = await scanner.getRuntimeSettings();
    rs.region.regionLeft = (100 - precentW) / 2;
    rs.region.regionRight = (100 + precentW) / 2;
    rs.region.regionTop = (100 - precentH) / 2;
    rs.region.regionBottom = (100 + precentH) / 2;
    rs.region.regionMeasuredByPercentage = 1;
    await scanner.updateRuntimeSettings(rs);
}
```

The above code should be put before `await scanner.show()` to make it effective.

### Change how the barcodes are highlighted

The default color for the highlight is `rgba(254,180,32,0.3)` . We can change it with the API `barcodeFillStyle` .

```js
// Changes the highlight color to light green.
scanner.barcodeFillStyle = "rgba(73, 245, 73, 0.3)";
```

There are another two APIs in control of the width and the color of the rectangle surrounding the barcodes:

```js
// Changes the rectangle to be a green wide one.
scanner.barcodeLineWidth = 5;
scanner.barcodeStrokeStyle = "rgba(73, 245, 73, 1)";
```

### Add a viewfinder frame

Having a video playing on the page may seem a bit incongruous. we can add a viewfinder frame around the video to make it better.

To do this, we add the following code inside the div `div-ui-container` :

```html
<div id="dce-mask" hidden style="width:100%;height:100%;position:absolute;top:-10px;left:-10px;padding:10px;">
    <div class="dce-corner" style="position:absolute;width:50px;height:50px;top:0;left:0;border-left:3px solid #fe8e14;border-top:3px solid #fe8e14;"></div>
    <div class="dce-corner" style="position:absolute;width:50px;height:50px;top:0;right:0;border-right:3px solid #fe8e14;border-top:3px solid #fe8e14;"></div>
    <div class="dce-corner" style="position:absolute;width:50px;height:50px;left:0;bottom:0;border-left:3px solid #fe8e14;border-bottom:3px solid #fe8e14;"></div>
    <div class="dce-corner" style="position:absolute;width:50px;height:50px;bottom:0;right:0;border-right:3px solid #fe8e14;border-bottom:3px solid #fe8e14;"></div>
</div>
```

### Show the read result

We can show the text decoded from the barcode on the page.

This element displays the text:

```html
<input type="text" id="result" readonly="true" class="latest-result" placeholder="The Last Read Barcode">
<style>
.latest-result {
    margin: 2vh auto;
    display: block;
    padding: 0.4rem 0.8rem;
    color: inherit;
    min-width: 80vw;
    width: auto;
    border: none;
    font-size: 1rem;
    border-radius: 0.2rem;
    text-align: center;
}

.latest-result::placeholder {
    color: #B0BEC5;
}

.latest-result:focus {
    outline: none;
    box-shadow: 0.1rem 0.4rem 0.8rem #fe8e14;
}
</style>
```

The following code shows the result in the above element:

```js
scanner.onUniqueRead = (txt, result) => {
    document.getElementById('result').value = result.barcodeFormatString + ": " + txt;
    document.getElementById('result').focus();
    setTimeout(() => {
        document.getElementById('result').blur();
    }, 2000);
};
```

### Customize the controllers

The select boxes in the default UI for switching cameras or resolutions may not be necessary, in the code above, we don't even have these elements. However, it may come a time when you want to offer these features to the user, but with better-looking elements.

The following code shows how to implement two input box as selectors of camera/resolution. We can put the code before `<div id="UIElement">` .

```html
<div class="controler">
    <div class="selector">
        <div id="cam_selector_switch" class="selector_switch">
            <input id="selector_input_camera" class="selector_input" type="text" readonly autocomplete="off" placeholder="Select">
            <svg id="arrow_camera" class="arrow" viewBox="0 0 1024 1024" p-id="3019" width="13" height="13">
                <path d="M517.688889 796.444444c-45.511111 0-85.333333-17.066667-119.466667-51.2L73.955556 381.155556c-22.755556-22.755556-17.066667-56.888889 5.688888-79.644445 22.755556-22.755556 56.888889-17.066667 79.644445 5.688889l329.955555 364.088889c5.688889 5.688889 17.066667 11.377778 28.444445 11.377778s22.755556-5.688889 34.133333-17.066667l312.888889-364.088889c22.755556-22.755556 56.888889-28.444444 79.644445-5.688889 22.755556 22.755556 28.444444 56.888889 5.688888 79.644445L637.155556 739.555556c-28.444444 39.822222-68.266667 56.888889-119.466667 56.888888 5.688889 0 0 0 0 0z" p-id="3020" fill="#cccccc"></path>
            </svg>
        </div>
        <div id="options_camera" class="options unshow noheight">
            <ul id="ul_options_camera">
            </ul>
        </div>
    </div>
    <div class="selector">
        <div id="res_selector_switch" class="selector_switch">
            <input id="selector_input_resolution" class="selector_input" type="text" readonly autocomplete="off" placeholder="Select">
            <svg id="arrow_resolution" class="arrow" viewBox="0 0 1024 1024" p-id="3019" width="13" height="13">
                <path d="M517.688889 796.444444c-45.511111 0-85.333333-17.066667-119.466667-51.2L73.955556 381.155556c-22.755556-22.755556-17.066667-56.888889 5.688888-79.644445 22.755556-22.755556 56.888889-17.066667 79.644445 5.688889l329.955555 364.088889c5.688889 5.688889 17.066667 11.377778 28.444445 11.377778s22.755556-5.688889 34.133333-17.066667l312.888889-364.088889c22.755556-22.755556 56.888889-28.444444 79.644445-5.688889 22.755556 22.755556 28.444444 56.888889 5.688888 79.644445L637.155556 739.555556c-28.444444 39.822222-68.266667 56.888889-119.466667 56.888888 5.688889 0 0 0 0 0z" p-id="3020" fill="#cccccc"></path>
            </svg>
        </div>
        <div id="options_resolution" class="options unshow noheight">
            <ul id="ul_options_resolution">
                <li id="gotResolution"><span></span></li>
                <li><span id="1920x1080">ask 1920 x 1080</span></li>
                <li><span id="1280x720">ask 1280 x 720</span></li>
                <li><span id="720x576">ask 720 x 576</span></li>
                <li><span id="640x480">ask 640 x 480</span></li>
                <li><span id="480x360">ask 480 x 360</span></li>
                <li><span id="320x240">ask 320 x 240</span></li>
                <li><span id="176x144">ask 176 x 144</span></li>
            </ul>
        </div>
    </div>
</div>
```

Don't forget to add the CSS for these elements:

```css
.controler {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.selector {
    margin: 10px;
}

/* Small devices */

@media only screen and (max-width: 545px) {
    .controler {
        flex-direction: column;
    }
}

.selector_switch {
    position: relative;
    width: 250px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    line-height: 30px;
    cursor: pointer;
    transition: all 200ms;
}

.selector_switch:hover {
    border: 1px solid #b4b4b4;
}

.selector_input {
    position: absolute;
    left: 0;
    width: 100%;
    height: 30px;
    margin: 0;
    padding: 0 30px 0 15px;
    box-sizing: border-box;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    color: #606266;
}

.selector_switch svg {
    height: 30px;
    position: absolute;
    right: 5px;
}

.arrow {
    transform: rotate(0deg);
    transition: all 200ms;
}

.trans {
    transform: rotate(-180deg);
}

.options {
    position: absolute;
    width: 250px;
    max-height: 0;
    margin: 3px 0 10px 0;
    transition: max-height 200ms;
    overflow: hidden;
    border-radius: 5px;
    overflow: auto;
    z-index: 2000;
    background-color: #fff;
}

.show {
    border: 1px solid #e4e7ed;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    max-height: 200px;
}

.unshow {
    border: none;
    box-shadow: none;
}

.noheight {
    max-height: 0;
}

ul {
    list-style: none;
    margin: 5px auto;
    padding: 0;
}

ul li {
    height: 30px;
    line-height: 30px;
    text-align: left;
    cursor: pointer;
    color: #606266;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-size: 14px;
}

ul li:hover {
    background-color: #f5f7fa;
}

.selected {
    color: #fe8e14;
    font-weight: bold;
}

ul li span {
    display: inline-block;
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    padding: 0 20px;
}
```

Next, we connect these inputs with the SDK:

Add the following after `await scanner.show()` :

```js
renderCamreaSelector();
renderResolutionSelector();
```

And add the following code to the script.

```js
// define html elements needed
const camOptions = document.getElementById("options_camera");
const resOptions = document.getElementById("options_resolution");
// add the click event to the selector
document.getElementById("cam_selector_switch").addEventListener("click", toggleCamView);
document.getElementById("res_selector_switch").addEventListener("click", toggleResView);
// initial selector renderer
async function renderCamreaSelector() {
    let scanner = await pScanner;
    const cameras = await scanner.getAllCameras();
    document.getElementById("ul_options_camera").innerHTML = "";
    cameras.forEach(camera => {
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.setAttribute("id", camera.deviceId);
        span.innerText = camera.label;
        li.appendChild(span);
        document.getElementById("ul_options_camera").appendChild(li);
    });
    // highlight and display the selected option and add click event to selector
    const camOption = document.querySelectorAll("#ul_options_camera span");
    const currentCamera = await scanner.getCurrentCamera();
    camOption.forEach(sapn => {
        sapn.addEventListener("click", camOptionSelected);
        if (sapn.id === currentCamera.deviceId) {
            document.getElementById("selector_input_camera").value = sapn.innerText;
            sapn.classList.add("selected");
        } else {
            sapn.classList.remove("selected");
        }
    });
}
async function renderResolutionSelector() {
    let scanner = await pScanner;
    const currentResolution = await scanner.getResolution();
    const gotResolution = document.querySelector("#gotResolution span");
    gotResolution.innerText = 'got ' + currentResolution[0] + ' x ' + currentResolution[1];
    gotResolution.id = currentResolution[0] + 'x' + currentResolution[1];
    document.getElementById("selector_input_resolution").value = gotResolution.innerText;
    gotResolution.classList.add("selected");
    let resOption = document.querySelectorAll("#ul_options_resolution span");
    for (let i = 0; i < resOption.length; i++) {
        resOption[i].addEventListener("click", resOptionSelected);
    };
    toggleMaskView();
}
// when the selector is clicked
let animateTimer = null;
function toggleCamView(e) {
    // expanding and collapsing control options by changing the classList
    clearTimeout(animateTimer);
    camOptions.classList.toggle("noheight");
    document.getElementById("arrow_camera").classList.toggle("trans");
    const hidden = camOptions.classList.value.search("unshow");
    if (hidden !== -1) {
        camOptions.classList.replace("unshow", "show");
        document.addEventListener("click", clickToHidden);
    } else {
        // remove styles such as shadows after the transition ends
        animateTimer = setTimeout(() => {
            camOptions.classList.replace("show", "unshow");
        }, 200);
    }
}

function toggleResView(e) {
    clearTimeout(animateTimer);
    resOptions.classList.toggle("noheight");
    document.getElementById("arrow_resolution").classList.toggle("trans");
    const hidden = resOptions.classList.value.search("unshow");
    if (hidden !== -1) {
        resOptions.classList.replace("unshow", "show");
        document.addEventListener("click", clickToHidden);
    } else {
        animateTimer = setTimeout(() => {
            resOptions.classList.replace("show", "unshow");
        }, 200);
    }
}
// when option is selected
async function camOptionSelected(e) {
    let scanner = await pScanner;
    const currentCamera = await scanner.getCurrentCamera();
    if (currentCamera.deviceId === e.target.id) {
        return;
    }
    toggleMaskView();
    const cameras = await scanner.getAllCameras();
    cameras.forEach(async camera => {
        if (camera.deviceId === e.target.id) {
            try {
                await scanner.setCurrentCamera(camera);
            } catch (ex) {
                alert('Play video failed: ' + (ex.message || ex));
            }
            renderResolutionSelector();
        }
    })
}
async function resOptionSelected(e) {
    const data = e.target.id.split("x");
    let scanner = await pScanner;
    const currentResolution = await scanner.getResolution();
    if (currentResolution[0] == data[0] && currentResolution[1] == data[1]) {
        return;
    }
    toggleMaskView();
    const targetResolution = [parseInt(data[0]), parseInt(data[1])];
    await scanner.setResolution(targetResolution);
    renderResolutionSelector();
}
// camera's styles mask show or not
function toggleMaskView() {
    let dceLoading = document.getElementById('dce-loading');
    let dceMask = document.getElementById('dce-mask');
    let container = document.getElementsByClassName('dce-video-container')[0];
    let dceScanlight = document.getElementsByClassName('dce-scanlight')[0];
    dceLoading.style.display = dceLoading.style.display === "none" ? "inline-block" : "none"
    dceMask.hidden = !dceMask.hidden;
    container.hidden = !container.hidden;
    dceScanlight.hidden = !dceScanlight.hidden;
}
// click anywhere outside the options to collapse the options
function clickToHidden(e) {
    const camViewable = camOptions.classList.value.search("unshow");
    const resViewable = resOptions.classList.value.search("unshow");
    if (camViewable === -1 && e.target.id != "selector_input_camera" && e.target.id != "arrow_camera" && e.target.parentNode.id != "arrow_camera") {
        toggleCamView();
    }
    if (resViewable === -1 && e.target.id != "selector_input_resolution" && e.target.id != "arrow_resolution" && e.target.parentNode.id != "arrow_resolution") {
        toggleResView();
    }
    if (camViewable !== -1 && resViewable !== -1) {
        // trigger only once
        document.removeEventListener("click", arguments.callee)
    }
}
```

## Check the code online

The customized UI can be tested directly on [jsfiddle - DBRJS - UI Customization](https://jsfiddle.net/DynamsoftTeam/yb12gr6s/).
