import { fewd } from './fewd';
import { jsd } from './jsd';

// Type definitions
export type Course = typeof jsd | typeof fewd;
export type Lesson = keyof Course;

export { fewd, jsd };
