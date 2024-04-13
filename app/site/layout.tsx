import React from 'react';

import Navigation from '@/components/site/navigation';

type SiteLayoutProps = {
  children: React.ReactNode;
};

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <main className="h-full">
      <Navigation />
      {children}
    </main>
  );
};

export default SiteLayout;
