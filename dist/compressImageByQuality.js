"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compressImageByQuality = void 0;
const react_native_compressor_1 = require("react-native-compressor");
const helpers_1 = require("./helpers");
const compressImageByQuality = async (uri, options) => {
    const originalSizeKB = await (0, helpers_1.getFileSizeKB)(uri);
    const compressedUri = await react_native_compressor_1.Image.compress(uri, {
        quality: options.quality,
    });
    const compressedSizeKB = await (0, helpers_1.getFileSizeKB)(compressedUri);
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
exports.compressImageByQuality = compressImageByQuality;
