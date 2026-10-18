export const drawAssetUrl = './assets/fortune-cylinder-mobile.webp';
let pending: Promise<void> | undefined;
let decodedImage: HTMLImageElement | undefined;
export function prepareDrawAsset(): Promise<void> {
  if (!pending) {
    decodedImage = new Image();
    decodedImage.src = drawAssetUrl;
    pending = decodedImage.decode().catch(error => {
      pending = undefined;
      decodedImage = undefined;
      throw error;
    });
  }
  return pending;
}
