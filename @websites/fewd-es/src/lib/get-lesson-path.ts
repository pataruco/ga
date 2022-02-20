import { fewdEs } from '@shared/lessons';
import type { FEWDESLesson } from '@shared/lessons';

export const getLessonPath = (lessonName: FEWDESLesson) =>
  fewdEs[lessonName].default;

export const COURSE_NAME = 'FEWD ES';
