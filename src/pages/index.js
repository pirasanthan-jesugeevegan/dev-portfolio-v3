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

export default function IndexPage({ blogs, skills, projects }) {
  // console.log(blogs);
  // var now = new Date(
  //   new Date().toString().split('GMT')[0] + ' UTC'
  // ).toISOString();
  // console.log(
  //   new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString()
  // );

  // if (blogs[1].publishedAt > now) {
  //   console.log('Selected date is in the past');
  // } else {
  //   console.log('Selected date is NOT in the past');
  // }
  const IsPost = (blogs) => {
    for (const element of blogs) {
      if (element.publish === true) return true;
    }
  };
  IsPost(blogs);
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO />
          <Hero />
          <About />
          <Skills skills={skills} key={skills.title} />
          <Portfolio projects={projects} key={projects.title} />
          {IsPost(blogs) && <Blog blogs={blogs} key={blogs._id} />}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

export const getServerSideProps = async () => {
  const postQuery = `*[_type == "post"]{
  _id,
  title,
  likes,
  publish,
  publishedAt,
  categories[] -> {
          title
  },
  author-> {
  name,
  image,
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
  tag,
  card,
  icons,
  image,
  name,
  display
}
  `;

  const blogs = await sanityClient.fetch(postQuery);
  const skills = await sanityClient.fetch(skillQuery);
  const projects = await sanityClient.fetch(projectQuery);

  if (!blogs.length && skills.length && projects.length) {
    return {
      props: {
        blogs: [],
        skills: [],
        projects: [],
      },
    };
  } else {
    return {
      props: {
        blogs,
        skills,
        projects,
      },
    };
  }
};
