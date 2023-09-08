import select from '@inquirer/select';

import { getLessonsAsChoices } from './libs/get-lessons';
import { getServer } from './libs/get-server';

const main = async () => {
  const choices = await getLessonsAsChoices();
  const answer = await select({
    message: 'Select lesson',
    choices,
  });

  console.log({ answer });

  const server = await getServer();

  await server.listen();

  console.log({ server: server.config.root });

  server.printUrls();
};

main();
