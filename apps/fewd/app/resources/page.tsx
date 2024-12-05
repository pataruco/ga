import 'normalize.css';
import '../../styles/site/index.scss';
import './style.scss';

import MainLayout from 'apps/fewd/components/main-layout';
import Link from 'next/link';
import { memo } from 'react';

const resources = [
  {
    content: 'Things we learnt',
    link: 'things-we-learnt',
  },
  {
    content: 'Random year',
    link: 'random-year',
  },
  {
    content: 'Student randomniser',
    link: 'student-randomniser',
  },
];

async function Index() {
  return (
    <MainLayout>
      <h1>Resources</h1>
      <ul>
        {resources.map(({ link, content }, i) => (
          <li key={link + i}>
            <Link href={`/resources/${link}`}>{content}</Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

export default memo(Index);
