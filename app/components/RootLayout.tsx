'use client';

type RootLayoutProps = {
  children: React.ReactNode;
};

export const RootLayoutClient = ({ children }: RootLayoutProps) => {
  return <>{children}</>;
};