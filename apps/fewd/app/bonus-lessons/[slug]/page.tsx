'use client';

import 'normalize.css';
import '../../../styles/slides/index.scss';

import { useRouter } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

import { instantiateSlides } from '../../../libs/instantiate-slides';

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
        router.push('/bonus-lessons');
      }
    });
  }, [slideUrl]);

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
