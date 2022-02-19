import { fewd } from './fewd';
import { jsd } from './jsd';
import { unit1 } from './sei-es/unit-1';
import { unit2 } from './sei-es/unit-2';
import { unit4 } from './sei-es/unit-4';
import { fewdEs } from './fewd-es';

const seiEs = {
  unit1,
  unit2,
  unit4,
};

// Type definitions
export type JSDCourse = typeof jsd;
export type JSDLesson = keyof JSDCourse;

export type FEWDCourse = typeof fewd;
export type FEWDLesson = keyof FEWDCourse;

export interface SEIES {
  unit1: typeof unit1;
  unit2: typeof unit2;
  unit4: typeof unit4;
}
export type SEIESUnit = keyof SEIES;
export type SEIESLesson = keyof SEIESUnit;

export type FEWDESCourse = typeof fewdEs;
export type FEWDESLesson = keyof FEWDCourse;

export { fewd, jsd, seiEs, fewdEs };
