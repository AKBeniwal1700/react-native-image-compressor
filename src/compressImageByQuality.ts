import { Image } from 'react-native-compressor';
import { getFileSizeKB } from './helpers';

export interface CompressByQualityOptions {
  quality: number;
}

export const compressImageByQuality = async (
  uri: string,
  options: CompressByQualityOptions,
) => {
  const originalSizeKB = await getFileSizeKB(uri);

  const compressedUri = await Image.compress(uri, {
    quality: options.quality,
  });

  const compressedSizeKB =
    await getFileSizeKB(compressedUri);

  const savedPercentage =
    ((originalSizeKB - compressedSizeKB) /
      originalSizeKB) *
    100;

  return {
    uri: compressedUri,
    originalSizeKB,
    compressedSizeKB,
    savedPercentage: Number(
      savedPercentage.toFixed(2),
    ),
  };
};