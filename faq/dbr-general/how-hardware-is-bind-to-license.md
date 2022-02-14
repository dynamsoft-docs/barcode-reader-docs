---
layout: default-layout
title: What information is collected while registering and lciensing a device and how it is bind to the hardware information? What hardware change would caues a new license consumption?
keywords: Dynamsoft Barcode Reader, FAQ, Pricing/Licensing, information gathered, hardware bind, new license consumption
description: What information is collected while registering and lciensing a device and how it is bind to the hardware information? What hardware change would caues a new license consumption?
needAutoGenerateSidebar: true
---

# Pricing/Licensing

## What information is collected while registering and lciensing a device and how it is bind to the hardware information? What hardware change would caues a new license consumption?

- When devices are registered, they get a UUID that is generated based on some hardware and OS info. The exact breakdown of what is collected when using the mobile edition or server/desktop edition is mentioned [here](https://www.dynamsoft.com/license-server/docs/about/terms.html?ver=latest#generate-a-uuid).
- Should the user change the OS (upgrade/downgrade), then the same device will take up a new license since the UUID that is generated for the device after the change will be different.
