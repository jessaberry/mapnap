import "../common/environments-and-constants.mjs";

import multer from "multer";
import path from "path";

import s3Storage from "../db/s3conn.js";
import router from "../routes/mediaFiles.mjs";

import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

function sanitizeFile(file, cb) {
  // Define the allowed extension
  const fileExtensions = process.env.AWS_S3_ALLOWED_MEDIA_EXTENSIONS.split("|");

  // Check allowed extensions
  const isAllowedExtensions = fileExtensions.includes(
    path.extname(file.originalname.toLowerCase())
  );

  // Mime type must be an image
  const isAllowedMimeType = process.env.AWS_S3_ALLOWED_MEDIA_MIME_TYPES.some(
    (substr) => file.mimetype.startsWith(substr)
  );

  if (isAllowedExtensions && isAllowedMimeType) {
    return cb(null, true); // no errors
  } else {
    // pass error msg to callback, which can be displayed in frontend
    cb("Error: File type not allowed!");
  }
}

const uploadMediaFile = multer({
  storage: s3Storage,
  fileFilter: (req, file, callback) => {
    sanitizeFile(file, callback);
  },
  limits: {
    fileSize:
      1024 * 1024 * Number(process.env.AWS_S3_MAX_ALLOWED_MEDIA_FILE_SIZE),
  },
});

export default uploadMediaFile;
