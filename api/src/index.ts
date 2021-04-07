import * as functions from "firebase-functions";
import * as path from "path";
import * as os from "os";
import * as admin from "firebase-admin";
import * as mkdirp from "mkdirp";
import * as fs from "fs";
import {
  resizeImageAndUpload,
  isImage,
  isOptimizedImage,
  isThumbnail,
  buildImagePathWithSuffix,
  THUMB_MAX,
  THUMB_SUFFIX,
  OPTIMIZED_SUFFIX,
  OPTIMIZED_MAX,
} from "./utils/image";

admin.initializeApp();

const {storage} = functions;

export const optimizeImage = storage.object().onFinalize(async (object) => {
  const {name: filePath} = object;
  if (
    !filePath ||
    !isImage(object) ||
    isThumbnail(object) ||
    isOptimizedImage(object)
  ) {
    return;
  }
  const tempLocalFile = path.join(os.tmpdir(), filePath);
  const tempLocalDir = path.dirname(tempLocalFile);
  await mkdirp(tempLocalDir);

  await admin.storage()
      .bucket(object.bucket)
      .file(filePath)
      .download({destination: tempLocalFile});

  await Promise.all([
    resizeImageAndUpload({
      object,
      localImagePath: tempLocalFile,
      maxWidth: THUMB_MAX.width,
      maxHeight: THUMB_MAX.height,
      destinationPath: buildImagePathWithSuffix(object, THUMB_SUFFIX),
    }),
    resizeImageAndUpload({
      object,
      localImagePath: tempLocalFile,
      maxWidth: OPTIMIZED_MAX.width,
      maxHeight: OPTIMIZED_MAX.height,
      destinationPath: buildImagePathWithSuffix(object, OPTIMIZED_SUFFIX),
    }),
    admin.storage()
        .bucket(object.bucket)
        .file(filePath)
        .delete(),
  ]);

  fs.unlinkSync(tempLocalFile);
});
