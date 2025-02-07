---
layout: default-layout
title: How to debug SDK?
keywords: Dynamsoft Barcode Reader, FAQ, JS ,Mobile, tech basic, Debug, page
description: General Step to Debug?
needAutoGenerateSidebar: true
---

# Troubleshooting Dynamsoft Barcode Reader SDK

If you encounter any issues while testing or using our Web SDK, please review the following points and submit a support request if you need further assistance.

## 1. How does the error appear?

- When does the issue occur (e.g. App Build Phase/Scanning Phase/)?
- Is the CameraView open correctly?
- Is the `CapturedResultReceiver` callback triggered? This indicates that the library has been initialized and started correctly. [Refer to the documentation](https://www.dynamsoft.com/capture-vision/docs/server/programming/python/api-reference/capture-vision-router/auxiliary-classes/captured-result-receiver.html?product=dbr).

When reaching out to us, kindly provide a brief video that showcases the issue along with the conditions under which you are scanning. This will assist us in gaining a clearer understanding of the problem.

## 2. Are There Any Errors in the Console?

- If the issue occurs on mobile devices, you can obtain logs as explained
- Errors and warnings from our library or the browser can help identify the root cause. When reaching out, please provide the version of the SDK used (this can be found in the console).

## 3. Is the Issue Device-Specific?

- Is the issue confined to a particular device or operating system?
- Does the same issue occur on newer or older versions of the OS?

When contacting us, please provide details such as the device model, OS version, and SDK (including version) used. It would be always better if you could provide us a sample that could reproduce the error. This information allows us to replicate the issue on our end.

## 4. Is the Issue Present in Our Samples or Your Implementation?

- If the issue arises in your implementation, please share the relevant code related to our API.
- Let us know the exact technology stack you are using and provide a project tree structure for better context.

## 5. Is Our Live Demo Functioning Correctly on the Same Devices?

- If not, check if the WebRTC demo works by visiting the following pages:
  - [Server Online Demo](https://demo.dynamsoft.com/barcode-reader/)
  - [JS Online Demo](https://demo.dynamsoft.com/barcode-reader-js/)
  
If these demos fail to work, it suggests that browser/OS is not supported by your current technology, which is essential for our library to operate correctly.

## 7. License-Related Errors

- If you encounter a license-related error, please review the error message, as it should specify the exact reason. Additionally, ensure that you are using the correct license key in your implementation.

- If your issue persists, please reach out to us directly by submitting a support request or through Chat.
