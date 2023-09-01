'use client';

import Script from 'next/script';

import { SlideStyles } from '@ga/styles';
import { instantiateSlides } from '../../../libs/instantiate-slides';
SlideStyles;

interface LessonPageProps {
  params: {
    slug: string;
  };
}

const Page: React.FC<LessonPageProps> = ({ params: { slug } }) => {
  return (
    <>
      <Script
        src="https://remarkjs.com/downloads/remark-latest.min.js"
        onLoad={() => {
          instantiateSlides(
            `https://pataruco.s3.amazonaws.com/ga/lessons/fewd/${slug}.md`
          );
        }}
      />
    </>
  );
};

export default Page;
