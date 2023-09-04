'use client';

import '../../../styles/slides/index.scss';

import { useRouter } from 'next/navigation';
import Script from 'next/script';
import { memo, useEffect } from 'react';

import { routesByWeek } from '../../../curriculum/weeks';
import { instantiateSlides } from '../../../libs/instantiate-slides';

interface LessonPageProps {
  params: {
    slug: string;
  };
}

function Page({ params: { slug } }: LessonPageProps) {
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
}

export async function generateStaticParams() {
  return routesByWeek
    .flatMap(({ lesson1: { link: link1 }, lesson2: { link: link2 } }) => {
      return [link1, link2];
    })
    .map((slug) => ({
      params: {
        slug,
      },
    }));
}

export default memo(Page);
