/** @jsx jsx */
import { jsx } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import Layout from 'components/layout';
import SEO from 'components/seo';
import Hero from 'sections/hero';
import About from 'sections/about';
import Skills from 'sections/skills';
import Blog from 'sections/blog';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';
import { sanityClient } from '../../../sanity';
import { readTime } from '../../utils/read-time';

export default function Than({
  blogs,
  author,
  description = `Sharing my tips and tricks`,
  authors = 'Thanchila Pirasanthan',
  image = 'https://www.pirasanth.com/_next/static/images/ThanProfile-060bec4e6588edbbd53761dfeeea5167.png',
  title = 'Blog | Thanchila',
  url = 'https://www.pirasanth.com/thanchila',
}) {
  for (const blog of blogs) {
    Object.assign(blog, readTime(blog.body));
  }
  const IsPost = (blogs) => {
    for (const element of blogs) {
      if (element.publish === true) return true;
    }
  };
  IsPost(blogs);
  blogs = blogs.filter((blog) => {
    return blog.author.name === 'Thanchila';
  });
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout author={author} user="Thanchila">
          <SEO
            description={description}
            author={authors}
            image={image}
            title={title}
            url={url}
          />
          <Hero user="thanchila" />
          <About author={author[1]} />
          <Skills skills={author[1].skills} key={author[1].skills} />
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
    body,
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
