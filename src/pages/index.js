import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import Hero from 'sections/hero';
import SEO from 'components/seo';
import Layout from 'components/layout';
import About from 'sections/about';
import Skills from 'sections/skills';
import Portfolio from 'sections/portfolio';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Home | Portfolio" />
          <Hero />
          <About />
          <Skills />
          <Portfolio />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
