import 'normalize.css';
import '../../styles/site/index.scss';
import './style.scss';

import MainLayout from 'apps/fewd/components/main-layout';
import Link from 'next/link';

import { bonusLessons } from '../../curriculum/bonus-lessons';

async function Index() {
  return (
    <MainLayout>
      <h1>Bonus Lessons</h1>
      <ol>
        {bonusLessons.map(({ link, content }, i) => (
          <li key={link + i}>
            <Link href={`/bonus-lessons/${link}`}>{content}</Link>
          </li>
        ))}
      </ol>
    </MainLayout>
  );
}

export default Index;
