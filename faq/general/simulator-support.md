---
layout: default-layout
title: Does Dynamsoft Barcode Reader Android support simulator devices?
keywords: Dynamsoft Barcode Reader, FAQ, Mobile, tech basic, Android, simulator, camera
description: Does Dynamsoft Barcode Reader Android support simulator devices?
needAutoGenerateSidebar: true
---

# Does Dynamsoft Barcode Reader Android support simulator devices?

[<< Back to FAQ index](index.md)

Yes, DBR Android can support simulator devices, but in a very limited capacity. If you are only working with existing images in the device's photo library, and there is **no use of the camera whatsoever**, then DBR Android can work just fine on a simulator.

If you are attempting to test the SDK in an interactive video scenario, you will most likely encounter an error that is caused by the camera open command in the code. More specifically, when the Camera Enhancer object call for the camera to open using the [open](https://www.dynamsoft.com/camera-enhancer/docs/mobile/programming/android/primary-api/camera-enhancer.html#open) method.

Please note that DCE is currently not compatible with the simulator as the required use of a camera cannot be satisfied via the simulator.