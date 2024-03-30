import { MDXProvider } from '@mdx-js/react';
import { ReactNode } from 'react';

('use client');
const ContentLayout = (children?: ReactNode) => {
  return <MDXProvider>{children}</MDXProvider>;
};

export default ContentLayout;
