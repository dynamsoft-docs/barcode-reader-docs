---
layout: default-layout
title: What are the server requirements for Dbr JS deployment?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, server requirements, deployment
description: What are the server requirements for Dbr JS deployment?
needAutoGenerateSidebar: false
---

# FAQ - JavaScript

## What are the server requirements for Dbr JS deployment?

To deploy DBR JS to the server, you need to

 1. Set the MIME type for `.wasm` as `application/wasm` on your webserver.
  
  The goal is to configure your server to send the correct Content-Type header for the wasm file so that it is processed correctly by the browser.

  Different types of webservers are configured differently, for example:

  + <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Apache_Configuration_htaccess#media_types_and_character_encodings" title="Apache">Apache</a>
  + <a target="_blank" href="https://docs.microsoft.com/en-us/iis/configuration/system.webserver/staticcontent/mimemap" title="IIS">IIS</a>
  + <a target="_blank" href="https://www.nginx.com/resources/wiki/start/topics/examples/full/#mime-types" title="NGINX">NGINX</a>

 2. Enable HTTPS

  Due to the browser <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts" title="security restriction">security restriction</a> on camera video streaming access, a secure HTTPS connection is required to use the library with camera.

  > For convenience, self-signed certificates can be used during development and testing.

