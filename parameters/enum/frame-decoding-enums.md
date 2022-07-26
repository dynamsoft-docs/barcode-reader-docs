---
layout: default-layout
title: Dynamsoft Barcode Reader Enumerations - Frame Decoding Enumerations
description: This article shows Frame Decoding Enumerations of Dynamsoft Barcode Reader.
keywords: ClarityCalculationMethod, ClarityFilterMode, frame decoding enumeration, enumeration
needAutoGenerateSidebar: true
needGenerateH3Content: false
permalink: /parameters/enum/frame-decoding-enums.html
---


# Frame Decoding Enumeration

> Note:
>
> - Frame Decoding Enumerations are removed in 9.0 version.

  | Enumeration | Description |
  |-------------|-------------|
  | [`ClarityCalculationMethod`](#claritycalculationmethod) | Describes the clarity calculation method. |
  | [`ClarityFilterMode`](#clarityfiltermode) | Describes the clarity filter mode. |
  
---

## ClarityCalculationMethod
Describes the clarity calculation method.

### Declarations

| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ClarityCalculationMethod` |
| .Net | `enum Dynamsoft.DBR.EnumClarityCalculationMethod` |
| JavaScript | `Dynamsoft.EnumClarityCalculationMethod` |
| Python | `class EnumClarityCalculationMethod(IntEnum)` |
| Java / Android | `class EnumClarityCalculationMethod` |
| ObjC / Swift | `enum EnumClarityCalculationMethod` |

### Members

| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| ECCM_CONTRAST | EnumClarityCalculationMethodContrast | 0x01 | Calculates clarity using the contrast method. |

&nbsp;

## ClarityFilterMode

Describes the clarity filter mode.

### Declarations

| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ClarityFilterMode` |
| .Net | `enum Dynamsoft.DBR.EnumClarityFilterMode` |
| JavaScript | `Dynamsoft.EnumClarityFilterMode` |
| Python | `class EnumClarityFilterMode(IntEnum)` |
| Java / Android | `class EnumClarityFilterMode` |
| ObjC / Swift | `enum EnumClarityFilterMode` |

### Members

| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| CFM_GENERAL | EnumClarityFilterModeGeneral | 0x01 | Filters the frames using the general algorithm based on calculated clarity. |
