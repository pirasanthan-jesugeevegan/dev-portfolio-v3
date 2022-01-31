import { useEffect } from 'react';
import NextScript from 'next/document';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import { Helmet } from 'react-helmet';
// Load other package css file
import 'rc-drawer/assets/index.css';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return (
    <>
      <Helmet>
        <script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-QLQ045WDTM`}
        />

        <script strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QLQ045WDTM', {
              page_path: window.location.pathname,
            });
                `}
        </script>
      </Helmet>

      <Component {...pageProps} />
    </>
  );
}
