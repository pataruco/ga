import { fewd } from './fewd';
import { jsd } from './jsd';

// Type definitions
export type JSDCourse = typeof jsd;
export type JSDLesson = keyof JSDCourse;

export type FEWDCourse = typeof fewd;
export type FEWDLesson = keyof FEWDCourse;

export { fewd, jsd };
