import select from '@inquirer/select';

import { copyFile, rm } from 'fs/promises';
import { getLessonsAsChoices } from './libs/get-lessons';
import { getServer } from './libs/get-server';
import { publicLessonPath } from './libs/helper';

const main = async () => {
  // Get lessons paths
  const choices = await getLessonsAsChoices();
  // Prompt user
  const lessonPath = await select({
    message: 'Select lesson',
    choices,
  });

  // delete public/lesson
  await rm(publicLessonPath, {
    recursive: true,
    force: true,
  });

  // copy lesson to public/lesson
  await copyFile(lessonPath, publicLessonPath);

  // Serve remark slides
  const server = await getServer();
  await server.listen();
  server.printUrls();
};

main();
