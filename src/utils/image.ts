import buildUrl from "cloudinary-build-url";
import { Resize } from "@cld-apis/types/lib/transformation";

export function buildResizedImageUrl(imageId: string, options: Resize): string {
  return buildUrl(imageId, {
    transformations: {
      resize: options,
    },
  });
}
