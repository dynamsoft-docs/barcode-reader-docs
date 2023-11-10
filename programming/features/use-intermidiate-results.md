---
layout: default-layout
title: How to Use Intermediate Results
description: This page shows how to use Intermediate Results.
keywords: intermediate results, IntermediateResult, IntermediateResultUnitType, how-to guides
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
--- 

# How to Use Intermediate Results

Apart from getting the results like barcode type, value, location, Dynamsoft Barcode Reader (DBR) also provides APIs for you to obtain the intermediate results like original image, transformed grayscale image, binarized image, text zone, and more for further analysis. See enum [`IntermediateResultUnitType`]({{ site.dcv_enumerations }}core/intermediate-result-unit-type.html) for the full list of supported intermediate result types. All these results can be obtained from a specific callback function within the class `CIntermediateResultReceiver`.

**Note**: You will need a separate license to obtain the intermediate results.

Here we will show how to save the binarized image to your file system and output the localized barcode zone:

<div class="sample-code-prefix template2"></div>
   >- C++
   >
>
```cpp
class MyIntermediateResultReceiver : public CIntermediateResultReceiver
{
public:
	virtual void OnBinaryImageUnitReceived(CBinaryImageUnit* pResult, const IntermediateResultExtraInfo* info)
	{
		const CImageData* img = pResult->GetImageData();
		CImageManager* imgManager = new CImageManager;
		imgManager->SaveToFile(img, "FULL-FILE-PATH", true);
		delete imgManager, imgManager = NULL;
	}
	virtual void OnLocalizedBarcodesReceived(CLocalizedBarcodesUnit* pResult, const IntermediateResultExtraInfo* info)
	{
		int count = pResult->GetCount();
		cout << "Localized " << count << " items" << endl;
		for (int i = 0; i < count; i++) {
			const CLocalizedBarcodeElement* locBarcode = pResult->GetLocalizedBarcode(i);
			CQuadrilateral location = locBarcode->GetLocation();
			cout << "Result " << i + 1 << endl;
			cout << "	Point 0: [" << location.points[0][0] << ", " << location.points[0][1] << "]" << endl;
			cout << "	Point 1: [" << location.points[1][0] << ", " << location.points[1][1] << "]" << endl;
			cout << "	Point 2: [" << location.points[2][0] << ", " << location.points[2][1] << "]" << endl;
			cout << "	Point 3: [" << location.points[3][0] << ", " << location.points[3][1] << "]" << endl;
		}
	}
};
int main()
{
	CCaptureVisionRouter* cvr = new CCaptureVisionRouter;
    CDirectoryFetcher* dirFetcher = new CDirectoryFetcher;
    dirFetcher->SetDirectory("THE-DIRECTORY-THAT-HOLDS-THE-IMAGES");
	cvr->SetInput(dirFetcher);
	CIntermediateResultManager* irm = cvr->GetIntermediateResultManager();
	CIntermediateResultReceiver* irr = new MyIntermediateResultReceiver();
	irm->AddResultReceiver(irr);
	cvr->StartCapturing(CPresetTemplate::PT_READ_BARCODES, true);
}
```

