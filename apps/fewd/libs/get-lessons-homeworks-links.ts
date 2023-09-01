import { homeworks } from '../curriculum/homeworks';
import { lessons } from '../curriculum/lessons';

export const getLessonsHomeworksLinks = (weekNumber: number) => {
  const index = weekNumber * 2 - 2;
  return {
    lesson1: lessons[index],
    lesson2: lessons[index + 1],
    homework: homeworks[index] ?? null,
  };
};
