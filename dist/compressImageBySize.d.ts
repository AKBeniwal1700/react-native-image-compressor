export interface CompressBySizeOptions {
    targetSizeKB: number;
}
export declare const compressImageBySize: (uri: string, options: CompressBySizeOptions) => Promise<{
    uri: string;
    originalSizeKB: number;
    compressedSizeKB: number;
    savedPercentage: number;
}>;
