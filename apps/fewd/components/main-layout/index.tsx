// 'use client';

import './style.scss';

import { ReactNode, memo } from 'react';
import Footer from '../footer';

import Header from '../header';
import MobileMenu from '../mobile-menu';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className }) => {
  return (
    <div className={`page ${className}`}>
      <Header />
      <main>{children}</main>
      <MobileMenu />
      <Footer />
    </div>
  );
};

export default memo(MainLayout);
