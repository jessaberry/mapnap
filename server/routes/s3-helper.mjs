import { Upload } from "@aws-sdk/lib-storage";
import { PutObjectCommand, S3Client, S3 } from "@aws-sdk/client-s3";
import "../common/environments-and-constants.mjs";
import express from "express";

const router = express.Router();

import { mediaFilesCollectionName } from "../common/environments-and-constants.mjs";

import https from "https";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { fromIni } from "@aws-sdk/credential-provider-ini";

const credentials = fromIni({ profile: "default" });
import {
  getSignedUrl,
  S3RequestPresigner,
} from "@aws-sdk/s3-request-presigner";
import { parseUrl } from "@aws-sdk/url-parser";
import { formatUrl } from "@aws-sdk/util-format-url";
import { Hash } from "@aws-sdk/hash-node";

const region = process.env.AWS_REGION;
const bucket = process.env.AWS_S3_MEDIA_FILES_BUCKET_NAME;

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const Bucket = process.env.S3_BUCKET;

router.get("/get-presigned-upload-params-without-client/", async (req, res) => {
  const key = req.body.file;
  console.log(key);

  const url = parseUrl(`https://${bucket}.s3.${region}.amazonaws.com/${key}`);
  console.log(url);
  const presigner = new S3RequestPresigner({
    credentials: fromIni(),
    region,
    sha256: Hash.bind(null, "sha256"),
  });

  const signedUrlObject = await presigner.presign(
    new HttpRequest({ ...url, method: "PUT" })
  );
  try {
    let result = await formatUrl(signedUrlObject);
    res.send(result).status(200);
  } catch (error) {
    res.send(error).status(500);
  }
});

router.get(
  "/get-presigned-upload-params-with-client/:key",
  async (req, res) => {
    const key = req.params.key;
    console.log(key);
    console.log(bucket);
    try {
      const client = new S3Client({ region });
      const command = new PutObjectCommand({ Bucket: bucket, Key: key });
      let result = await getSignedUrl(client, command, {
        expiresIn: parseInt(process.env.AWS_S3_PRESIGNED_URL_EXPIRY_DURATION),
      });
      res.send(result).status(200);
    } catch (error) {
      res.send(error).status(500);
    }
  }
);

/*
function put(url, data) {
    return new Promise((resolve, reject) => {
        const req = https.request(
            url,
            {method: "PUT", headers: {"Content-Length": new Blob([data]).size}},
            (res) => {
                let responseBody = "";
                res.on("data", (chunk) => {
                    responseBody += chunk;
                });
                res.on("end", () => {
                    resolve(responseBody);
                });
            }
        );
        req.on("error", (err) => {
            reject(err);
        });
        req.write(data);
        req.end();
    });
}
*/
/*
export const main = async () => {
    const REGION = process.env.AWS_REGION;
    const BUCKET = process.env.AWS_S3_MEDIA_FILES_BUCKET_NAME;
    const KEY = "example_file.txt";

    // There are two ways to generate a presigned URL.
    // 1. Use createPresignedUrl without the S3 client.
    // 2. Use getSignedUrl in conjunction with the S3 client and GetObjectCommand.
    try {
        const noClientUrl = await createPresignedUrlWithoutClient({
            region: REGION,
            bucket: BUCKET,
            key: KEY,
        });

        const clientUrl = await createPresignedUrlWithClient({
            region: REGION,
            bucket: BUCKET,
            key: KEY,
        });

        // After you get the presigned URL, you can provide your own file
        // data. Refer to put() above.
        console.log("Calling PUT using presigned URL without client");
        await put(noClientUrl, "Hello World");

        console.log("Calling PUT using presigned URL with client");
        await put(clientUrl, "Hello World");

        console.log("\nDone. Check your S3 console.");
    } catch (err) {
        console.error(err);
    }
};*/

export default router;
