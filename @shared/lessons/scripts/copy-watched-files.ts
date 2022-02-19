import { watch, cp } from 'fs/promises';
import { extname } from 'path';

const ac = new AbortController();
const { signal } = ac;
// setTimeout(() => ac.abort(), 10000);

const isMd = (file: string) => extname(file) === '.md';
const isChange = (eventType: string) => eventType === 'change';
const toDistFolder = (filename: string) => `./dist/${filename}`;
const fromSrcFolder = (filename: string) => `./src/${filename}`;

const watchMarkdownFiles = async () => {
  try {
    const watcher = watch('./src', { recursive: true, signal });

    for await (const { eventType, filename } of watcher) {
      if (isChange(eventType) && isMd(filename)) {
        await cp(fromSrcFolder(filename), toDistFolder(filename), {
          force: true,
          recursive: true,
        });
        console.log(`File ${filename} was copied to ${toDistFolder(filename)}`);
      }
    }
  } catch (error) {
    console.error(error);
    ac.abort();
    throw error;
  }
};

const main = async () => {
  await watchMarkdownFiles();
};

main()
  .then()
  .catch((error) => console.error(error));
