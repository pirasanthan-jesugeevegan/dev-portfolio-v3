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
  skills,
  blogs,
  description = `Sharing my tips and tricks`,
  author = 'Thanchila Pirasanthan',
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

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout user="thanchila">
          <SEO
            description={description}
            author={author}
            image={image}
            title={title}
            url={url}
          />
          <Hero user="thanchila" />
          <About user="thanchila" />
          <Skills skills={skills} key={skills.title} user="thanchila" />
          {IsPost(blogs) && <Blog blogs={blogs} key={blogs._id} />}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

export const getServerSideProps = async () => {
  const postQuery = `*[_type == "post" && author._ref in *[_type=="author" && name == "Thanchila" ]._id ]{
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
    }
`;

  const skillQuery = `
  *[_type == "skills"] | order(order asc){
  altText,
  imgSrc,
  order,
  title
}
  `;

  const blogs = await sanityClient.fetch(postQuery);
  const skills = await sanityClient.fetch(skillQuery);

  if (!blogs.length && skills.length) {
    return {
      props: {
        blogs: [],
        skills: [],
      },
    };
  } else {
    return {
      props: {
        blogs,
        skills,
      },
    };
  }
};
