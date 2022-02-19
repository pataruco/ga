import { fewd, seiEs, jsd, fewdEs } from '@shared/lessons';
import type { FEWDLesson, JSDLesson, FEWDESLesson } from '@shared/lessons';

const isFewd = (slidePath: string) => slidePath.includes('/fewd/');
const isJsd = (slidePath: string) => slidePath.includes('/jsd/');
const isSeiEs = (slidePath: string) => slidePath.includes('/sei-es/');
const isFewdEs = (slidePath: string) => slidePath.includes('/fewd-es/');

const lessonName = (slidePath: string) =>
  slidePath.split('/').pop()?.replace('.md', '');

const getSeiEsPath = (slidePath: string): unknown => {
  const unitProperty = slidePath
    .split('/')
    .splice(-2, 1)
    .pop()
    ?.replace('-', '');

  if (unitProperty) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return seiEs[unitProperty][lessonName(slidePath)].default;
  }
};

export const getLessonPath = (slidePath: string): unknown => {
  let path;

  switch (true) {
    case isSeiEs(slidePath):
      path = getSeiEsPath(slidePath);
      break;
    case isFewd(slidePath):
      path = fewd[lessonName(slidePath) as FEWDLesson].default;
      break;
    case isJsd(slidePath):
      path = jsd[lessonName(slidePath) as JSDLesson].default;
      break;
    case isFewdEs(slidePath):
      path = fewdEs[lessonName(slidePath) as FEWDESLesson].default;
      break;
  }

  return path;
};
