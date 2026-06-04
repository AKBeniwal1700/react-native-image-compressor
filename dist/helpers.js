"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileSizeKB = void 0;
const getFileSizeKB = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return Number((blob.size / 1024).toFixed(2));
};
exports.getFileSizeKB = getFileSizeKB;
