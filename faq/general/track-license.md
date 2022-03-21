---
layout: default-layout
title: How do you track the number of devices?
keywords: Dynamsoft Barcode Reader, FAQ, Pricing/Licensing, General, track license
description: How do you track the number of devices?
needAutoGenerateSidebar: false
---

# FAQ - General

## How do you track the number of devices?

The Dynamsoft License Server (Dynamsoft hosted or self-hosted) is able to keep a track of the number of devices in different ways, depending on the edition of the SDK.

- On the browser (JS Edition), a device is counted as a specific browser on that device. This license gets cached in the indexedDB of the browser. If another browser is used, or the indexedDB is cleared, then a new license seat is taken up by the same device.
- With other editions of the SDK, a local license is assigned to the device that is identified by a UUID, which is unique to each device.
