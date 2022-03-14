
- Added support for **Code_11**.
- Added support for **Pharmacode**.
- The return value of the method `getIdleInstancesCount` is changed from 0 to -1 when all local instances become inactive.
- Optimized the algorithm on decoding PatchCode. The barcode reader will be able to detect the **PatchCodes** even when they are far away from the edge of the image.
- Optimized the read rate of **GS1 Databar** symbols.
- Optimized the performance of `localizationMode.OneDFastScan`.
- Optimized the confidence scoring system for **PDF417 codes**.
- Added new `DeformationResistingModes `DRM_BROAD_WARP`, `DRM_LOCAL_REFERENCE` and `DRM_DEWRINKLE` to optimize the deformation resisting algorithm for **QRCode** and **DataMatrix codes**. 
- Added function 1 symbol character code of the GS1-128 at the beginning of the `barcodeText`.

