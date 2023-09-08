import select from '@inquirer/select';

import { copyLessonToPublic } from './libs/copy-lesson-to-public';
import { deleteLesson } from './libs/delete-lesson';
import { getLessonsAsChoices } from './libs/get-lessons';
import { getServer } from './libs/get-server';

const main = async () => {
  const choices = await getLessonsAsChoices();
  const lesson = await select({
    message: 'Select lesson',
    choices,
  });

  // delete public/lesson
  await deleteLesson();
  // copy lesson to public/lesson
  await copyLessonToPublic(lesson);

  const server = await getServer();
  await server.listen();
  server.printUrls();
};

main();
