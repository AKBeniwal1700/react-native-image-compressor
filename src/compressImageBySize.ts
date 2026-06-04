import { Image } from 'react-native-compressor';
import { getFileSizeKB } from './helpers';

export interface CompressBySizeOptions {
  targetSizeKB: number;
}

export const compressImageBySize = async (
  uri: string,
  options: CompressBySizeOptions,
) => {
  const originalSizeKB =
    await getFileSizeKB(uri);

  let quality = 0.9;
  let compressedUri = uri;
  let compressedSizeKB =
    originalSizeKB;

  while (quality >= 0.1) {
    compressedUri = await Image.compress(uri, {
      quality,
    });

    compressedSizeKB =
      await getFileSizeKB(compressedUri);

    if (
      compressedSizeKB <=
      options.targetSizeKB
    ) {
      break;
    }

    quality -= 0.1;
  }

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