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

export default function IndexPage({ posts, skills, projects }) {
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
          <Skills skills={skills} />
          <Portfolio projects={projects} />
          {IsPost(posts) && <Blog posts={posts} />}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

export const getServerSideProps = async () => {
  const postQuery = `*[_type == "post"]{
  _id,
  title,
  publish,
  author-> {
  name,
  image
},
keyword,
slug,
mainImage,
description
}`;

  const skillQuery = `
  *[_type == "skills"] | order(order asc){
  altText,
  imgSrc,
  order,
  title
}
  `;

  const projectQuery = `
*[_type == "projects"] | order(order asc){ 
  order,
  card,
  icons,
  image,
  name,
  display
}
  `;

  const posts = await sanityClient.fetch(postQuery);
  const skills = await sanityClient.fetch(skillQuery);
  const projects = await sanityClient.fetch(projectQuery);

  if (!posts.length && skills.length && projects.length) {
    return {
      props: {
        posts: [],
        skills: [],
        projects: [],
      },
    };
  } else {
    return {
      props: {
        posts,
        skills,
        projects,
      },
    };
  }
};
