import { jsd } from '@shared/lessons';
import type { JSDLesson } from '@shared/lessons';

export const getLessonPath = (lessonName: JSDLesson) => jsd[lessonName].default;

export const COURSE_NAME = 'FEWD ES';
