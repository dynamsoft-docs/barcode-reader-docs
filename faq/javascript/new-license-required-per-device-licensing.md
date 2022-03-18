---
layout: default-layout
title: When is a new license required in per-device licensing model?
keywords: Dynamsoft Barcode Reader, FAQ, Sales & Licensing, per-device, new license
description: When is a new license required in per-device licensing model?
needAutoGenerateSidebar: false
---

# FAQ - JavaScript

## When is a new license required in a per-device licensing model?

A new license spot is required in any of these three conditions -

- if you use another browser.
- if you clear the cookies or indexedDB of the browser.
- if you open the page in the Incognito mode.

When a device is registered under the license, the info is stored in the indexedDB of the specific browser memory. Should the cache/cookies be cleared, another browser gets used, or Incognito is used (when using incognito, the browser starts with a ‘fresh’ indexedDB).
