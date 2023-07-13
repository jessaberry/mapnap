import { S3 } from "aws-sdk/clients/s3";
import aws from "aws-sdk";

aws.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

/*
function getPresignUrlPromiseFunction(s3, s3Params): Promise<string>{
  return new Promise(async (resolve, reject) => {
    try {
      await s3.getSignedUrl('putObject', s3Params, function (err,         data) {
        if (err) {
          return reject(err);
        }
        resolve(data);
      });
    } catch (error) {
      return reject(error);
    }
  });
}

app.all('/presignedurl', (req, res) => {
  aws.config.update({
    region: AWS_REGION,
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
  });
  const s3Params = {
    Bucket: S3BucketName,
    Key: fileName,
    Expires: 60 * 60,
    ContentType: 'image/*'
  };
  const url = await getPresignUrlPromiseFunction(s3, s3Params);
  if(url) return url;
}



export async function getS3SignUrl(filename, filetype){
  const headers = new Headers({ 'Content-Type': 'application/json'
  });
  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ fileName, fileType: fileType })
  };
  const response = await fetch(`${baseUrl}/presignedurl`,
    options);
  const presignedUrl = await response.json();
  return presignedUrl
}

 */
