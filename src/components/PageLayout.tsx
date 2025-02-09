import { ReactNode } from 'react';

interface PageLayoutProps {
  title: string;
  children: ReactNode;
}

const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="pt-16 lg:pt-0 lg:pl-64 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-12 px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">{title}</h1>
        <div className="prose max-w-none">{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
