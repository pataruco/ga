import 'normalize.css';
import '../../styles/site/index.scss';
import './style.scss';

import MainLayout from 'apps/fewd/components/main-layout';
import { about, author } from 'apps/fewd/utils/metadata';
import Link from 'next/link';
import { memo } from 'react';
import { Course, WithContext } from 'schema-dts';

import { lessons } from '../../curriculum/lessons';

async function Index() {
  const jsonLd: WithContext<Course> = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Front End Web Development',
    about,
    author,
    courseCode: 'FEWD',
    maintainer: author,
    creator: {
      '@type': 'Organization',
      name: 'General Assembly',
    },
  };

  return (
    <MainLayout>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Parse jsonLd
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1>Lessons</h1>
      <ol>
        {lessons.map(({ link, content }, i) => (
          <li key={link + i}>
            <Link href={`/lessons/${link}`}>{content}</Link>
          </li>
        ))}
      </ol>
    </MainLayout>
  );
}

export default memo(Index);
