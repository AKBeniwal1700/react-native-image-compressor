"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compressImageBySize = void 0;
const react_native_compressor_1 = require("react-native-compressor");
const helpers_1 = require("./helpers");
const compressImageBySize = async (uri, options) => {
    const originalSizeKB = await (0, helpers_1.getFileSizeKB)(uri);
    let quality = 0.9;
    let compressedUri = uri;
    let compressedSizeKB = originalSizeKB;
    while (quality >= 0.1) {
        compressedUri = await react_native_compressor_1.Image.compress(uri, {
            quality,
        });
        compressedSizeKB =
            await (0, helpers_1.getFileSizeKB)(compressedUri);
        if (compressedSizeKB <=
            options.targetSizeKB) {
            break;
        }
        quality -= 0.1;
    }
    const savedPercentage = ((originalSizeKB - compressedSizeKB) /
        originalSizeKB) *
        100;
    return {
        uri: compressedUri,
        originalSizeKB,
        compressedSizeKB,
        savedPercentage: Number(savedPercentage.toFixed(2)),
    };
};
exports.compressImageBySize = compressImageBySize;
