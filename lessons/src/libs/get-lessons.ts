import { readdir } from 'fs/promises';
import { extname, resolve } from 'path';

interface Choice {
  name: string;
  value: string;
  description?: string;
}

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

export const isMd = (file: string) => extname(file) === '.md';

let choices: Choice[] = [];

const getName = (file: string) => {
  const indexOfLessons = file.split('/').indexOf('lessons');
  return file
    .split('/')
    .splice(indexOfLessons + 1)
    .join('/')
    .replace('.md', '');
};

const getValue = (file: string) => {
  const indexOfRoot = file.split('/').indexOf('ga');

  return file
    .split('/')
    .splice(indexOfRoot + 1)
    .join('/');
};

export const getLessonsAsChoices = async () => {
  for await (const file of getFilePaths('./lessons/src/lessons')) {
    if (isMd(file)) {
      choices.push({
        name: getName(file),
        value: getValue(file),
      });
    }
  }
  return choices;
};
