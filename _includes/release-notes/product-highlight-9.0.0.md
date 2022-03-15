
- Added support for **Code_11**.
- Added support for **Pharmacode**.
- The return value of the method `getIdleInstancesCount` is changed from 0 to -1 when all local instances become inactive.
- Optimized the algorithm on decoding **PatchCode**. The barcode reader will be able to detect the **PatchCodes** even when they are far away from the edge of the image.
- Optimized the read rate of **GS1 Databar** symbols.
- Optimized the performance of `localizationMode.OneDFastScan`.
- Optimized the confidence scoring system for **PDF417 codes**.
- Deformation resisting modes `DRM_BROAD_WARP`, `DRM_LOCAL_REFERENCE` and `DRM_DEWRINKLE` are optimized and detached from `DRM_GENERAL`. Users can specify a more effective deformation resisting mode for a certain usage scenario when decoding **QRCode** and **DataMatrix codes**.
- Fixed a bug where Function Code 1 (FNC1) character doesn't return if it is in the first position of **GS1-128 codes**.

