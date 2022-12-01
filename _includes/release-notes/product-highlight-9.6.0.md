
- **Image orientation** handling is supported by a new feature. With the new feature, you can:
  - Get a **TranformationMatrix** along with the barcode location result.
  - Implement coordinates transformation on the barcode location result with the **TransformationMatrix**.
- **DotCode** decoding is improved by optimizing the localization of DotCodes that are close to one another.

<div align="center">
    <p><img src="{{site.mobile_assets}}dotcode-v9.6.png" width="20%" alt="dotcode"></p>
</div>

- **EAN8 barcode** decoding is improved by honing the accuracy of localization algorithms.
- **QR code** localizing is improved by reducing the mis-assemble rate of the finder patterns when using the localization mode LM_CONNECTED_BLOCK or LM_SCAN_DIRECTLY, which are designed for speed. The mis-assembling only occurs when there exist dense QR codes on the same image.
- **Mirrored rectangular DataMatrix barcode** is supported by implementing `MirrorMode` when localizing the barcodes.

<div align="center">
    <p><img src="{{site.mobile_assets}}rectangle-datamatrix.png" width="20%" alt="datamatrix"></p>
</div>

- Deformed barcode decoding is improved by extending the supported modes and mode arguments of `DeformationResistingModes`.

