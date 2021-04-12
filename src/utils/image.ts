import buildUrl from "cloudinary-build-url";
import { Resize } from "@cld-apis/types/lib/transformation";
import { setConfig } from "cloudinary-build-url";

setConfig({
  cloudName: process.env.VUE_APP_CLOUDINARY_CLOUD_NAME,
});

export function buildResizedImageUrl(imageId: string, options: Resize): string {
  return buildUrl(imageId, {
    transformations: {
      resize: options,
    },
  });
}
