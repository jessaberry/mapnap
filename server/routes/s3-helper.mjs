import "../common/environments-and-constants.mjs";
import express from "express";

const router = express.Router();

import {HttpRequest} from "@aws-sdk/protocol-http";
import {fromIni} from "@aws-sdk/credential-provider-ini";
import {
    S3RequestPresigner,
} from "@aws-sdk/s3-request-presigner";
import {parseUrl} from "@aws-sdk/url-parser";
import {formatUrl} from "@aws-sdk/util-format-url";
import {Hash} from "@aws-sdk/hash-node";

const region = process.env.AWS_REGION;
const bucket = process.env.AWS_S3_MEDIA_FILES_BUCKET_NAME;

router.get("/get-presigned-upload/", async (req, res) => {

    const key = req.query.key;
    console.log(key);

    const url = parseUrl(`https://${bucket}.s3.${region}.amazonaws.com/${key}`);
    console.log(url);
    const presigner = new S3RequestPresigner({
        credentials: fromIni(),
        region,
        sha256: Hash.bind(null, "sha256"),
    });
    console.log(presigner);

    const signedUrlObject = await presigner.presign(
        new HttpRequest({...url, method: "PUT"})
    );
    try {
        let result = formatUrl(signedUrlObject);

        const j = JSON.stringify(result);
        res.send(j).status(200);
    } catch (error) {
        res.send(error).status(500);
    }
});
export default router;
