---
layout: default-layout
title: When to use onFrameRead and when to use onUnduplicateRead?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, onFrameRead, onUnduplicateRead
description: When to use onFrameRead and when to use onUnduplicateRead?
needAutoGenerateSidebar: false
---

# FAQ - JavaScript

## When to use onFrameRead and when to use onUnduplicateRead?

`onFrameRead` is triggered with each captured video frame, whether there are barcode results or not. If a barcode is within the frame, then it will show in the `results` of onFrameRead.
`onUnduplicateRead` is triggered once a new barcode is found. This event does not repeat for the same barcode until the `duplicateForgetTime` passes.
