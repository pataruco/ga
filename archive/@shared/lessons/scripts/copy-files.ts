import { extname, resolve } from 'path';
import { readdir, cp } from 'fs/promises';

// inspired by https://stackoverflow.com/a/45130990/4842303
export async function* getFilePaths(dir: string): AsyncGenerator<string> {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFilePaths(res);
    } else {
      yield res;
    }
  }
}

const isMd = (file: string) => extname(file) === '.md';

const toDistFolder = (file: string) => file.replace('/src', '/dist');

const main = async () => {
  for await (const file of getFilePaths('./src')) {
    if (isMd(file)) {
      await cp(file, toDistFolder(file), { force: true, recursive: true });
    }
  }
};

main()
  .then()
  .catch((error) => console.error(error));
