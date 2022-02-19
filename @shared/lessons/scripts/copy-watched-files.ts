import { watch, cp } from 'fs/promises';
import { extname, resolve } from 'path';

const ac = new AbortController();
const { signal } = ac;
const DIST_FOLDER = './dist';
const SRC_FOLDER = './src';

const isMd = (file: string) => extname(file) === '.md';
const isChange = (eventType: string) => eventType === 'change';
const toDistFolder = (filename: string) => resolve(DIST_FOLDER, filename);
const fromSrcFolder = (filename: string) => resolve(SRC_FOLDER, filename);

const watchMarkdownFiles = async () => {
  try {
    const watcher = watch(SRC_FOLDER, { recursive: true, signal });

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
