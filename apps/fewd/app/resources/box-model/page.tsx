'use client';

import 'apps/fewd/styles/site/index.scss';
import 'normalize.css';

import BoxModel from 'apps/fewd/components/box-model';
import MainLayout from 'apps/fewd/components/main-layout';
import { memo } from 'react';

async function Index() {
  return (
    <MainLayout>
      <h1>Interactive box-model demo</h1>
      <p>
        Adjust the sliders to see how the box changes and generates the
        necessary code.
      </p>
      <BoxModel />
    </MainLayout>
  );
}

export default memo(Index);
