import * as os from "os";
import * as path from "path";
import * as fs from "fs";
import * as sharp from "sharp";
import * as admin from "firebase-admin";
import {OutputInfo} from "sharp";
import {ObjectMetadata} from "firebase-functions/lib/providers/storage";

export const THUMB_MAX = {
  height: 320,
  width: 320,
};
export const OPTIMIZED_MAX = {
  height: 1200,
  width: 1200,
};
export const THUMB_SUFFIX = "_thumb";
export const OPTIMIZED_SUFFIX = "_optimized";

interface TransformImageOptions {
  maxHeight: number;
  maxWidth: number;
  destinationPath: string;
  imagePath: string
}

interface ResizeOptions {
  object: ObjectMetadata;
  localImagePath: string;
}

interface ResizeUploadOptions {
  maxHeight: number;
  maxWidth: number;
  object: ObjectMetadata;
  localImagePath: string;
  destinationPath: string;
}

export function isThumbnail(object: ObjectMetadata): boolean {
  return !!object.name && object.name.includes(THUMB_SUFFIX);
}

export function isOptimizedImage(object: ObjectMetadata): boolean {
  return !!object.name && object.name.includes(OPTIMIZED_SUFFIX);
}

export function isImage(object: ObjectMetadata): boolean {
  return !!object.contentType && object.contentType.startsWith("image");
}

export function resizeImage(
    options: TransformImageOptions
): Promise<OutputInfo> {
  const {destinationPath, maxHeight, maxWidth, imagePath} = options;
  return sharp(imagePath)
      .withMetadata()
      .jpeg({quality: 80, progressive: true, mozjpeg: true})
      .resize(maxWidth, maxHeight, {
        kernel: sharp.kernel.cubic,
        fastShrinkOnLoad: false,
        withoutEnlargement: true,
        fit: "inside",
      })
      .toFile(destinationPath);
}

export async function resizeImageAndUpload(
    options: ResizeUploadOptions
): Promise<void> {
  const {
    object,
    localImagePath,
    destinationPath,
    maxHeight,
    maxWidth,
  } = options;
  if (!object.name || !object.contentType) {
    throw Error("Missing object name or content type");
  }
  const tempLocalThumbFile = path.join(os.tmpdir(), destinationPath);
  await resizeImage({
    imagePath: localImagePath,
    destinationPath: tempLocalThumbFile,
    maxHeight,
    maxWidth,
  });
  await admin.storage()
      .bucket(object.bucket)
      .upload(tempLocalThumbFile, {
        destination: destinationPath,
        metadata: {
          "contentType": object.contentType,
          "Cache-Control": "public,max-age=3600",
        },
      });
  fs.unlinkSync(tempLocalThumbFile);
}


export function buildImagePathWithSuffix(
    object: ObjectMetadata,
    suffix: string
): string {
  if (!object.name) throw Error("Missing object name");
  const fileDetails = path.parse(object.name);
  return path.normalize(
      path.join(
          fileDetails.dir,
          `${fileDetails.name}${suffix}.jpeg`
      )
  );
}

export async function generateThumbnailAndUpload(
    options: ResizeOptions
): Promise<void> {
  const {object, localImagePath} = options;
  await resizeImageAndUpload({
    object,
    localImagePath,
    maxWidth: THUMB_MAX.width,
    maxHeight: THUMB_MAX.height,
    destinationPath: buildImagePathWithSuffix(object, THUMB_SUFFIX),
  });
}

export async function optimizeImageAndUpload(
    options: ResizeOptions
): Promise<void> {
  const {object, localImagePath} = options;
  await resizeImageAndUpload({
    object,
    localImagePath,
    maxWidth: OPTIMIZED_MAX.width,
    maxHeight: OPTIMIZED_MAX.height,
    destinationPath: buildImagePathWithSuffix(object, THUMB_SUFFIX),
  });
}
