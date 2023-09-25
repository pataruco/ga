import './style.scss';

import MainLayout from '../main-layout';

const WaitingAnimation = () => <span className="rotate">⏳</span>;

export default function Loading() {
  return (
    <MainLayout>
      <h1>
        Loading <WaitingAnimation />
      </h1>
    </MainLayout>
  );
}
