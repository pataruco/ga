import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getFilePaths, isMd } from '../libs/get-lessons';
// Set the AWS Region.
const REGION = 'us-east-1'; //e.g. "us-east-1"
const buckerName = 'pataruco';
// Create an Amazon S3 service client object.
const s3Client = new S3Client({ region: REGION });

const main = async () => {
  try {
    for await (const file of getFilePaths('./lessons/src/lessons')) {
      if (isMd(file)) {
        const params = {
          Bucket: buckerName,
          Key: file,
          Body: file,
        };

        const results = await s3Client.send(new PutObjectCommand(params));
        console.log({ results });
      }
    }
  } catch (error) {
    console.error(error);
  }
};

main();
