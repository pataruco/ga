/* import {SlidesDeck} from "@ga/components" */
import type { FEWDLesson } from '@ga/lessons';
import { fewd } from '@ga/lessons';
import Script from 'next/script';

export const getLessonPath = (lessonName: FEWDLesson) =>
  fewd[lessonName].default;

export const COURSE_NAME = 'FEWD';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Script src="https://remarkjs.com/downloads/remark-latest.min.js" />
      <div>My Post: {params.slug}</div>
    </>
  );
}
