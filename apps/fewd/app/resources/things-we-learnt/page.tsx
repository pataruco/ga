import 'normalize.css';
import '../../../styles/site/index.scss';

import MainLayout from 'apps/fewd/components/main-layout';
import Recap from 'apps/fewd/components/recap';
import { memo } from 'react';

async function Index() {
  return (
    <MainLayout>
      <h1>Things we learnt</h1>
      <Recap />
    </MainLayout>
  );
}

export default memo(Index);
