import '../../styles/globals.css';
import { Montserrat } from 'next/font/google';
import Header from '../../components/Header';
import Footer from '@/sections/footer';
import { Metadata } from 'next';
import SEO from '../seo';
const montserrat = Montserrat({ subsets: ['latin'], weight: '600' });

export const metadata: Metadata = SEO({
  description:
    "Hi! I'm Pirasanth,I'm a Front-End Developer and a QA automation Engineer. Nice to meet you! Please take a look around",
  author: 'Pirasanthan Jesugeevegan',
  image:
    'https://cdn.sanity.io/images/vsjc2cwt/production/587f2d39c654eef3daa04a9001373a002b23b2a5-400x400.png',
  title: 'Portfolio | Pirasanth',
  url: 'https://www.pirasanth.com',
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`mx-auto bg-secondary pt-24 ${montserrat.className} `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
