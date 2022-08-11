---   
layout: default-layout
description: This article describes how to filter irrelevant text in the image to reduce incorrect positioning and increase speed
title: How to filter text in an image
keywords: text filter
needAutoGenerateSidebar: false
permalink: /parameters/scenario-settings/text-filter-v7.6.0.html
---

# How to filter text in an image

When trying to read an image where a barcode is surrounded by a large number of irrelevant characters, the presence of these words may lead to incorrect positioning, and slow down the execution speed of `DBR`. `DBR` handles such scenarios by utilizing the built-in [`TextFilterModes`]({{ site.parameters_reference }}text-filter-modes.html#textfiltermodes). 

Let us consider the following image

![text filter sample][1]

For this image, we can set [`TextFilterModes`]({{ site.parameters_reference }}text-filter-modes.html#textfiltermodes) to `TFM_GENERAL_CONTOUR` and observe through the intermediate result, `IRT_TEXT_ZONE`. For easier demonstration purposes, we have merged the result of the `IRT_TEXT_ZONE` onto the binarized result. As it shown in the following images, the algorithm has recognized almost all the characters.

![text zone img][3]

Next, these words are excluded, and we are left with the optimized image as shown below

![binary img after text filter][4]

The process of text filtering will not be performed when using the positioning methods `LM_CONNECTED_BLOCKS` and `LM_SCAN_DIRECTLY`. Therefore, if DBR only performs `LM_CONNECTED_BLOCKS` and `LM_SCAN_DIRECTLY` positioning, the intermediate result `IRT_TEXT_ZONE` will be empty data.

## Sample Template

```json
{
	"Version":"3.0",
	"ImageParameterContentArray":[
	{
		"NAME":"Test1",
		"BarcodeFormatIds":["BF_ALL"],
		"LocalizationModes":["LM_LINES"],
		"TextFilterModes":[
			{
				"Mode":"TFM_GENERAL_CONTOUR"
			}
		]
	}
	]
}
```

[1]:assets/textfilter/text-image-sample.jpg
[3]:assets/textfilter/text-coutor.png
[4]:assets/textfilter/binary-after-text-filter.png
