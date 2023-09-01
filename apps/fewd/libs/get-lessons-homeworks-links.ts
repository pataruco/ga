import { homeworks } from '../curriculum/homeworks';
import { lessons } from '../curriculum/lessons';

export const getLessonsHomeworksLinks = (weekNumber: number) => {
  // FIXME: this is a hack to make the first week work
  const index = weekNumber === 1 ? weekNumber - 1 : weekNumber;

  return {
    lesson1: lessons[index],
    lesson2: lessons[index + 1],
    homework: homeworks[index] ?? null,
  };
};
