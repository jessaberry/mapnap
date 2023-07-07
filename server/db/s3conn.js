import path from "path";
import "../loadEnvironment.mjs";

import multerS3 from 'multer-s3';
import { S3Client } from '@aws-sdk/client-s3';


const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY_ID
  },
  region: process.env.AWS_REGION
})

const s3Storage = multerS3({
  s3: s3,
  bucket: '{process.env.AWS_S3_MEDIA_FILES_BUCKET_NAME}',
  acl: 'public-read',
  contentType: multerS3.AUTO_CONTENT_TYPE,
  metadata: (req, file, cb) => {
    cb(null, { fieldName: file.fieldname})
  },
  key: (req, file, cb) => {
    const fileName = Date.now() + "_" + file.fieldname + "_" + file.originalname;
    cb(null, fileName);
  }
});


export default s3Storage;

