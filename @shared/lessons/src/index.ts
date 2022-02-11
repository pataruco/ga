import { jsd } from './jsd';

// Type definitions
export type Course = typeof jsd;
export type Lesson = keyof Course;

export { jsd };
