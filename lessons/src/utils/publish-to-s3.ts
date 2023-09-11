import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { readFile } from 'fs/promises';

import { getFilePaths, isMd } from '../libs/get-lessons';

const REGION = 'us-east-1';
const buckerName = 'pataruco';

const s3Client = new S3Client({ region: REGION });

const createKey = (file: string) => {
  return `ga/${file.split('src/').pop()}`;
};

const main = async () => {
  try {
    console.log('Uploading files to S3...');

    for await (const file of getFilePaths('./lessons/src/lessons')) {
      if (isMd(file)) {
        const key = createKey(file);
        const params = {
          Bucket: buckerName,
          Key: createKey(file),
          Body: (await readFile(file, 'utf8')).toString(),
        };

        await s3Client.send(new PutObjectCommand(params));
        console.log(
          `Successfully uploaded file ${file} to ${buckerName}/${key}`
        );
      }
    }
  } catch (error) {
    console.error(error);
  }
};

main();
