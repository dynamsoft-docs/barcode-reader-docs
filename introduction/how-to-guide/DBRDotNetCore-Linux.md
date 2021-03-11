# .Net core Barcode Reader SDK

## Environment

- DBR version: 8.1.2
- DotNet version: 3.1.407
- Linux release: Ubuntu 16.04

## Installation

### Copy dbr library

```shell
cp ~/DynamsoftBarcodeReader/Lib/Linux/* /usr/lib
```

### Create project

```shell
mkdir TestDbrDotCore
cd TestDbrDotCore
dotnet new console
```

### Write a barcode reader application in Program.cs

You could refer to .Net user guide [here](https://www.dynamsoft.com/barcode-reader/programming/dotnet/user-guide.html?ver=latest).

### Modify TestDbrDotCore.csproj

```html
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>netcoreapp3.1</TargetFramework>
  </PropertyGroup>
  <ItemGroup>
   <Reference Include="DynamsoftCommon">
         <HintPath>DynamsoftCommon.dll</HintPath>
   </Reference>
   <Reference Include="Dynamsoft.BarcodeReader">
         <HintPath>Dynamsoft.BarcodeReader.dll</HintPath>
   </Reference>
  </ItemGroup>
</Project>
```

### Copy the .Net core library to the project

```shell
cp DynamsoftCommon.dll Dynamsoft.BarcodeReader.dll ~/TestDbrDotCore
```

## Run your project

```shell
dotnet restore
dotnet build
dotnet run
```
