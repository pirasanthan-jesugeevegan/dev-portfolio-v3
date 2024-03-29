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
import { readTime } from '../utils/read-time';

export default function IndexPage({ author, blogs, skills, projects }) {
  for (const blog of blogs) {
    Object.assign(blog, readTime(blog.body));
  }
  const IsPost = (blogs) => {
    for (const element of blogs) {
      if (element.publish === true) return true;
    }
  };
  IsPost(blogs);
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout author={author} user="PJ">
          <SEO
            description="Hi! I'm Pirasanth,I'm a Front-End Developer and a QA automation Engineer. Nice to meet you! Please take a look around"
            author="Pirasanthan Jesugeevegan"
            image="https://cdn.sanity.io/images/vsjc2cwt/production/587f2d39c654eef3daa04a9001373a002b23b2a5-400x400.png"
            title="Portfolio | Pirasanth"
            url="https://www.pirasanth.com"
          />
          <Hero />
          <About author={author[0]} />
          <Skills skills={author[0].skills} key={author[0].skills} />
          <Portfolio projects={projects} key={projects.title} />
          {IsPost(blogs) && <Blog blogs={blogs} key={blogs._id} />}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

export const getServerSideProps = async () => {
  const postQuery = `*[_type == "post" && publish == true && dateTime(now()) >= dateTime(publishedAt)] {
    _id,
    title,
    likes,
    body,
    publish,
    publishedAt,
    'comments': *[
          _type == "comment" &&
          post._ref == ^._id &&
          approved == true
        ],
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

  const authorQuery = `
  *[_type == "author"]
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
  const author = await sanityClient.fetch(authorQuery);
  if (!blogs.length && skills.length && projects.length) {
    return {
      props: {
        blogs: [],
        skills: [],
        projects: [],
        author: [],
      },
    };
  } else {
    return {
      props: {
        blogs,
        skills,
        projects,
        author,
      },
    };
  }
};
