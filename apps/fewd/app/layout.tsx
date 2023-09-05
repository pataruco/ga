import { Metadata } from 'next';
import { memo } from 'react';
import { Providers } from '../redux/provider';
import { BASE_URL, about } from '../utils/metadata';
import StyledComponentsRegistry from './registry';

export const metadata: Metadata = {
  title: 'FEWD | GA London',
  description: about as string,
  manifest: `${BASE_URL}/manifest.json`,
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}

export default memo(RootLayout);
