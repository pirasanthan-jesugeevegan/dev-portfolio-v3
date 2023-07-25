import '../../styles/globals.css';
import { Montserrat } from 'next/font/google';
import Header from '../../components/Header';
import Footer from '@/sections/footer';

const montserrat = Montserrat({ subsets: ['latin'], weight: '600' });

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
