import { fewd } from '@shared/lessons';
import type { FEWDLesson } from '@shared/lessons';

export const getLessonPath = (lessonName: FEWDLesson) =>
  fewd[lessonName].default;

export const COURSE_NAME = 'FEWD';
