'use client';

import { RecoilRoot, atom } from 'recoil';

export const defaulState = {
  bonusLessonsIsOpen: false,
  mobileMenuIsOpen: false,
  projectsMenuIsOpen: false,
  weekIsOpen: false,
};

export const navigationMenuState = atom({
  key: 'navigation-menu',
  default: defaulState,
});

export default function RecoidContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
