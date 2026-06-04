# @akbeniwal/react-native-image-compressor

A lightweight image compression utility for React Native with support for quality-based and target-size-based compression.

## Features

- 🚀 Compress images by quality
- 📦 Compress images to a target file size (KB)
- 📊 Compression statistics included
- 📱 React Native support
- 🔥 TypeScript support
- ⚡ Lightweight and easy to use

## Installation

bash yarn add @akbeniwal/react-native-image-compressor

or

bash npm install @akbeniwal/react-native-image-compressor

## Usage

### Compress by Quality

ts import { compressImageByQuality, } from '@akbeniwal/react-native-image-compressor'; const result = await compressImageByQuality( imageUri, { quality: 0.7, }, ); console.log(result);

### Compress by Target Size

ts import { compressImageBySize, } from '@akbeniwal/react-native-image-compressor'; const result = await compressImageBySize( imageUri, { targetSizeKB: 300, }, ); console.log(result);

## Example Response

ts { uri: 'file:///compressed-image.jpg', originalSizeKB: 2450.32, compressedSizeKB: 321.18, savedPercentage: 86.89, }

## API

### compressImageByQuality

Compress an image using a specified quality value.

ts compressImageByQuality(uri, { quality: 0.7, });

| Property | Type   | Description                         |
| -------- | ------ | ----------------------------------- |
| quality  | number | Compression quality between 0 and 1 |

---

### compressImageBySize

Compress an image to a target size in KB.

ts compressImageBySize(uri, { targetSizeKB: 300, });

| Property     | Type   | Description                     |
| ------------ | ------ | ------------------------------- |
| targetSizeKB | number | Desired output image size in KB |

## Response

ts { uri: string; originalSizeKB: number; compressedSizeKB: number; savedPercentage: number; }

## Changelog

### v1.1.0

- Added compressImageByQuality
- Added compressImageBySize
- Added compression statistics
- Added original size and compressed size information
- Added saved percentage calculation

## License

MIT

## Author

Abhishek Beniwal
