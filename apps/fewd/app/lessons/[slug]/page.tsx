'use client';

import Script from 'next/script';

import { SlideStyles } from '@ga/styles';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { instantiateSlides } from '../../../libs/instantiate-slides';
SlideStyles;

interface LessonPageProps {
  params: {
    slug: string;
  };
}

const Page: React.FC<LessonPageProps> = ({ params: { slug } }) => {
  const router = useRouter();
  const slideUrl = `https://pataruco.s3.amazonaws.com/ga/lessons/fewd/${slug}.md`;

  useEffect(() => {
    fetch(slideUrl).then((response) => {
      if (response.status !== 200) {
        router.push('/lessons');
      }
    });
  }, [slideUrl]);

  // TODO: add back to lessons here and remove from slides-deck
  return (
    <>
      <Script
        src="https://remarkjs.com/downloads/remark-latest.min.js"
        onLoad={() => {
          instantiateSlides(slideUrl);
        }}
      />
    </>
  );
};

export default Page;
