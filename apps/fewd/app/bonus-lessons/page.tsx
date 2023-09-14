'use client';

import 'normalize.css';
import '../../styles/site/index.scss';

import MainLayout from 'apps/fewd/components/main-layout';
import Link from 'next/link';
import { memo } from 'react';
import styled from 'styled-components';

import { bonusLessons } from '../../curriculum/bonus-lessons';

const StyledMainLayout = styled(MainLayout)`
  main li {
    margin-bottom: 0.75rem;
  }
`;

async function Index() {
  return (
    <StyledMainLayout>
      <h1>Bonus Lessons</h1>
      <ol>
        {bonusLessons.map(({ link, content }, i) => (
          <li key={link + i}>
            <Link href={`/bonus-lessons/${link}`}>{content}</Link>
          </li>
        ))}
      </ol>
    </StyledMainLayout>
  );
}

export default memo(Index);
