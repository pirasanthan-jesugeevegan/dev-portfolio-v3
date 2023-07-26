import '../../../styles/globals.css';
import { Metadata } from 'next';
import SEO from '../../seo';

export const metadata: Metadata = SEO({
  description: 'Sharing my tips and tricks',
  author: 'Pirasanthan Jesugeevegan',
  image:
    'https://cdn.sanity.io/images/vsjc2cwt/production/587f2d39c654eef3daa04a9001373a002b23b2a5-400x400.png',
  title: 'Blog | Pirasanth',
  url: 'https://www.pirasanth.com/blog',
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
