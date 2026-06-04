export interface CompressByQualityOptions {
  quality: number;
}

export interface CompressBySizeOptions {
  targetSizeKB: number;
}

export interface CompressResult {
  uri: string;
  originalSizeKB: number;
  compressedSizeKB: number;
  savedPercentage: number;
}