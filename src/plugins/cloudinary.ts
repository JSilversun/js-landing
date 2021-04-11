import { setConfig } from "cloudinary-build-url";

setConfig({
  cloudName: process.env.VUE_APP_CLOUDINARY_CLOUD_NAME,
});
