import 'normalize.css';
import '../styles/site/index.scss';

import Link from 'next/link';
import { memo } from 'react';

import MainLayout from '../components/main-layout';

function NotFound() {
  return (
    <MainLayout>
      <h1>Not Found 😅</h1>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </MainLayout>
  );
}

export default memo(NotFound);
