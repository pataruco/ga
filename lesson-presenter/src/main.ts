import select from '@inquirer/select';

import { getLessonsAsChoices } from './libs/get-lessons';

const main = async () => {
  const choices = await getLessonsAsChoices();
  const answer = await select({
    message: 'Select lesson',
    choices,
  });

  console.log({ answer });
};

main();
