---
layout: default-layout
title: When is a new license spot taken when using a per-device licensing model?
keywords: Dynamsoft Barcode Reader, FAQ, Sales & Licensing, per-device, new license
description: When is a new license spot taken when using a per-device licensing model?
needAutoGenerateSidebar: false
---

# When is a new license spot taken when using a per-device licensing model?

[<< Back to FAQ index](index.md)

A new license spot is required in any of these three conditions -

- if you use another browser.
- if you clear the cookies or indexedDB of the browser.
- if you open the page in the Incognito mode.

When a device is registered under the license, the info is stored in the indexedDB of the specific browser's memory. Should the cache/cookies be cleared, another browser gets used, or an Incognito window of the main browser is used (when using incognito, the browser starts with a 'fresh' indexedDB), then a new license seat is configured for that same device.
