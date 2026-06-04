# ⚡ React Native Image Compressor

<p align="center">
  <a href="https://www.npmjs.com/package/@akbeniwal/react-native-image-compressor">
    <img src="https://img.shields.io/npm/v/@akbeniwal/react-native-image-compressor.svg?style=flat-square&color=blue" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/@akbeniwal/react-native-image-compressor">
    <img src="https://img.shields.io/npm/dm/@akbeniwal/react-native-image-compressor.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/AKBeniwal1700/react-native-image-compressor/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/@akbeniwal/react-native-image-compressor.svg?style=flat-square&color=green" alt="license" />
  </a>
  <a href="https://github.com/AKBeniwal1700/react-native-image-compressor/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" />
  </a>
</p>

A high-performance, lightweight, and fully type-safe image compression library for React Native. Keep your application fast, save users' bandwidth, and reduce server load by optimizing and compressing images on the client side before uploading them.

---

## ✨ Features

- 🚀 **Quality-Based Compression**: Compress images quickly by specifying a quality factor between `0.0` and `1.0`.
- 📦 **Target-Size-Based Compression**: Automatically and iteratively compress images to fit under a target file size (in KB).
- 📊 **Compression Statistics**: Get detailed results including compressed file URI, original size, compressed size, and percentage saved.
- ⚡ **Lightweight & Efficient**: Thin TypeScript/JavaScript wrapper built on top of native compression APIs.
- 📱 **Cross-Platform**: Supports both iOS and Android.
- 🛠 **Type-Safe**: Written in TypeScript with full autocompletion and type definitions.

---

## 📦 Installation

This library relies on [react-native-compressor](https://github.com/numandev1/react-native-compressor) as a peer dependency for native image optimization.

### 1. Install the packages

Using **Yarn**:
```bash
yarn add @akbeniwal/react-native-image-compressor react-native-compressor
```

Using **NPM**:
```bash
npm install @akbeniwal/react-native-image-compressor react-native-compressor
```

### 2. Native Setup (iOS only)

For iOS, you must link the native parts of `react-native-compressor` by installing the pods:

```bash
cd ios && pod install && cd ..
```

*Note: For Android, the native code is linked automatically via React Native Auto-Linking.*

---

## 🚀 Usage

### 1. Compress by Quality
Compress an image to a specific quality factor (0.0 to 1.0). Useful when you want a quick, single-pass compression.

```typescript
import { compressImageByQuality } from '@akbeniwal/react-native-image-compressor';

const handleCompress = async (imageUri: string) => {
  try {
    const result = await compressImageByQuality(imageUri, {
      quality: 0.7, // Quality level between 0.0 (max compression) and 1.0 (best quality)
    });

    console.log('Compressed Image Uri:', result.uri);
    console.log('Original Size:', result.originalSizeKB, 'KB');
    console.log('Compressed Size:', result.compressedSizeKB, 'KB');
    console.log('Saved:', result.savedPercentage, '%');
  } catch (error) {
    console.error('Compression failed:', error);
  }
};
```

### 2. Compress by Target Size
Automatically scale down image quality iteratively until the image fits under your specified target size in KB. Ideal for upload limits (e.g., maximum 300KB profile picture).

```typescript
import { compressImageBySize } from '@akbeniwal/react-native-image-compressor';

const handleCompressToSize = async (imageUri: string) => {
  try {
    const result = await compressImageBySize(imageUri, {
      targetSizeKB: 300, // Target size in Kilobytes (KB)
    });

    console.log('Compressed Image Uri:', result.uri);
    console.log('Saved:', result.savedPercentage, '%');
  } catch (error) {
    console.error('Target-size compression failed:', error);
  }
};
```

---

## 📊 Response Structure

Both compression functions return a promise that resolves to a `CompressResult` object:

```typescript
interface CompressResult {
  uri: string;              // Path/URI to the newly compressed image file
  originalSizeKB: number;   // Original image file size in Kilobytes
  compressedSizeKB: number; // Compressed image file size in Kilobytes
  savedPercentage: number;  // The percentage of file size saved (e.g., 86.89)
}
```

### Example Response:
```json
{
  "uri": "file:///data/user/0/com.example/cache/ReactNative-Compressor/compressed-image.jpg",
  "originalSizeKB": 2450.32,
  "compressedSizeKB": 321.18,
  "savedPercentage": 86.89
}
```

---

## 📘 API Reference

### `compressImageByQuality(uri, options)`

Compresses an image file based on a fixed quality factor.

#### Parameters:
- `uri` (`string`): The local path or web URL of the image to compress.
- `options` (`CompressByQualityOptions`):
  | Property | Type | Required | Description |
  | :--- | :--- | :--- | :--- |
  | `quality` | `number` | Yes | Compression quality from `0.0` (highest compression) to `1.0` (highest quality). |

---

### `compressImageBySize(uri, options)`

Iteratively compresses an image file until its file size is less than or equal to the target size in KB (or quality reaches `0.1`).

#### Parameters:
- `uri` (`string`): The local path or web URL of the image to compress.
- `options` (`CompressBySizeOptions`):
  | Property | Type | Required | Description |
  | :--- | :--- | :--- | :--- |
  | `targetSizeKB` | `number` | Yes | Target output image size in KB. |

---

## ⚙️ How It Works Under the Hood

1. **Size Detection**: It fetches the image URI using a lightweight `fetch` call and extracts the file size via its blob representation.
2. **Iterative Reduction (for `compressImageBySize`)**: The library starts with a high quality (`0.9`) and compresses the image. If the resulting size is still larger than your target size, it decreases the quality in steps of `0.1` and retries, stopping once the target is met or it reaches the minimum quality threshold (`0.1`).
3. **Optimized for React Native**: Leveraging `react-native-compressor` ensures that actual encoding/decoding is performed in native threads (Objective-C/Swift for iOS, Java/Kotlin for Android), preventing UI blockages.

---

## Changelog

### v1.1.0

- Added `compressImageByQuality` function.
- Added `compressImageBySize` function.
- Added detailed compression statistics (original size, compressed size, saved percentage).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**Abhishek Beniwal**
- GitHub: [@AKBeniwal1700](https://github.com/AKBeniwal1700)
