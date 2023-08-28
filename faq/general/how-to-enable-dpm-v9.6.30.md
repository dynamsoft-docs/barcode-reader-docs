---
layout: default-layout
title: How to enable DPM?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, enable DPM
description: How to enable DPM?
needAutoGenerateSidebar: false
permalink: /faq/general/how-to-enable-dpm.html
---

## How to enable DPM?

[<< Back to FAQ index](index.md)

To enable DPM, assign the `DPMCRM_GENERAL` enumeration to the `DPMCodeReadingModes` array.

You can use [OutputSettingsToFile](https://www.dynamsoft.com/capture-vision/docs/server/programming/cplusplus/api-reference/capture-vision-router/settings.html?product=dbr&repoType=server#outputsettingstofile) to save the current runtime settings into a JSON file:
```
int OutputSettingsToFile(const char* templateName, const char* filePath)

```

 Here is a JSON snippet for enabling DPM, update it in your output template:

```json
	"BarcodeReaderTaskSettingOptions" : 
	[
		{
			"DPMCodeReadingModes" : 
			[
				{
					"Mode" : "DPMCRM_GENERAL"
				}
			]
        }
    ]
```

Once the JSON string is set, you can initialize the runtime settings to use it via the  [InitSettingsFromFile](https://www.dynamsoft.com/capture-vision/docs/server/programming/cplusplus/api-reference/capture-vision-router/settings.html?product=dbr&repoType=server#outputsettingstofile) to update your current runtime settings with your modified template:
```
int InitSettingsFromFile(const char* filePath, char errorMsgBuffer[]=NULL, const int errorMsgBufferLen=0)
```

Please note that if you are modifying any other settings, you can include them in the JSON string/file as well, or you can access them individually after calling either of the aforementioned methods.
