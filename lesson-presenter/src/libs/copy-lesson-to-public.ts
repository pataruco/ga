import { copyFile } from 'fs/promises';
import { publicLessonPath } from './helper';

export const copyLessonToPublic = async (lessonPath: string) => {
  await copyFile(lessonPath, publicLessonPath);
};
