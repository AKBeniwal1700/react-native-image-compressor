export interface CompressByQualityOptions {
    quality: number;
}
export declare const compressImageByQuality: (uri: string, options: CompressByQualityOptions) => Promise<{
    uri: string;
    originalSizeKB: number;
    compressedSizeKB: number;
    savedPercentage: number;
}>;
