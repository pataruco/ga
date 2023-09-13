'use client';

import 'normalize.css';
import '../../../styles/slides/index.scss';

import { useRouter } from 'next/navigation';
import Script from 'next/script';
import { memo, useEffect } from 'react';
import { LearningResource, WithContext } from 'schema-dts';

import { bonusLessons } from '../../../curriculum/bonus-lessons';
import { instantiateSlides } from '../../../libs/instantiate-slides';

interface LessonPageProps {
  params: {
    slug: string;
  };
}

function Page({ params: { slug } }: LessonPageProps) {
  const router = useRouter();
  const slideUrl = `https://pataruco.s3.amazonaws.com/ga/lessons/fewd/${slug}.md`;

  const lesson = bonusLessons.find((lesson) => lesson.link === slug);

  const jsonLd: WithContext<LearningResource> = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: 'Front End Web Development',
    creator: {
      '@type': 'Organization',
      name: 'General Assembly',
    },
    teaches: lesson?.content,
  };

  useEffect(() => {
    fetch(slideUrl).then((response) => {
      if (response.status !== 200) {
        router.push('/bonus-lessons');
      }
    });
  }, [slideUrl]);

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: parse jsonLd
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        src="https://remarkjs.com/downloads/remark-latest.min.js"
        onLoad={() => {
          instantiateSlides(slideUrl);
        }}
      />
    </>
  );
}

export default memo(Page);
