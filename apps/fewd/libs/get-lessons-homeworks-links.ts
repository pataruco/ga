import { homeworks } from '../curriculum/homeworks';
import { lessons } from '../curriculum/lessons';

export const getLessonsHomeworksLinks = (weekNumber: number) => ({
  lesson1: lessons[weekNumber - 1],
  lesson2: lessons[weekNumber],
  homework: homeworks[weekNumber - 1] ?? null,
});
