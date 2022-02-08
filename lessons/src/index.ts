import { jsd } from './jsd';

// Type definitions
export type Lessons = typeof jsd;
export type Lesson = keyof Lessons;

export { jsd };
