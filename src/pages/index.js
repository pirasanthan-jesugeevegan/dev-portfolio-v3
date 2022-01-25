import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import { sanityClient } from '../../sanity';
import theme from 'theme';
import Hero from 'sections/hero';
import SEO from 'components/seo';
import Layout from 'components/layout';
import About from 'sections/about';
import Skills from 'sections/skills';
import Portfolio from 'sections/portfolio';
import Blog from 'sections/blog';

export default function IndexPage({ posts }) {
  const IsPost = (posts) => {
    for (const element of posts) {
      if (element.publish === true) return true;
    }
  };
  IsPost(posts);
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO />
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          {IsPost(posts) && <Blog posts={posts} />}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
  _id,
  title,
  publish,
  author-> {
  name,
  image
},
slug,
mainImage,
description
}`;
  const posts = await sanityClient.fetch(query);

  if (!posts.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts,
      },
    };
  }
};
