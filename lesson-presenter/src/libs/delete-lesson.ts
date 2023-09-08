import { rm } from 'fs/promises';
import { publicLessonPath } from './helper';

export const deleteLesson = async () => {
  await rm(publicLessonPath, {
    recursive: true,
    force: true,
  });
};
