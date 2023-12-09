'use client';

import 'normalize.css';
import '../../../styles/site/index.scss';

import MainLayout from 'apps/fewd/components/main-layout';
import RandomYear from 'apps/fewd/components/random-year';
import { memo } from 'react';

async function Index() {
  return (
    <MainLayout>
      <h1>Random year</h1>
      <RandomYear />
    </MainLayout>
  );
}

export default memo(Index);
