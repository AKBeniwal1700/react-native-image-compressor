export const getFileSizeKB = async (
  uri: string,
): Promise<number> => {
  const response = await fetch(uri);
  const blob = await response.blob();

  return Number((blob.size / 1024).toFixed(2));
};