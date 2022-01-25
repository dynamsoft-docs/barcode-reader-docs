---
layout: default-layout
title: When is singleFrameMode enabled?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, singleFrameMode
description: When is singleFrameMode enabled?
needAutoGenerateSidebar: false
---

# Tech Basic

## When is singleFrameMode enabled?

`singleFrameMode` is enable in the below two scenarios -

1. When using the library from a non-secure origin (no HTTPS).
2. When using a browser that doesn’t support `getUserMedia/MediaDevices` API that is required for video streaming.
