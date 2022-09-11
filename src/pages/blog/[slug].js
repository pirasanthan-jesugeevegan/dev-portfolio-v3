/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, useEffect } from 'react';
import { keyframes } from '@emotion/core';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import { sanityClient, urlFor } from '../../../sanity';
import BlogPost from '../../components/blog-post';
import SEO from '../../components/seo';
import { readTime } from '../../utils/read-time';
import { getPostbyCat } from '../../service/get-post-by-cat';
import Header from '../../components/header/header';

export default function Post({ post }) {
  const [relatedPost, setRelatedPost] = useState(null);

  useEffect(() => {
    getPostbyCat(post.categories).then((response) => setRelatedPost(response));
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <DrawerProvider>
        <SEO
          title={post.title}
          description={post.description}
          author={post.author.name}
          image={urlFor(post.mainImage)}
          url={`https://pirasanth.com/blog/${post.slug.current}`}
        />
        <Header nav={false} />
        <main>
          <BlogPost
            data={post}
            read={readTime(post.body)}
            relatedPost={relatedPost}
            key={post._id}
          />
        </main>
      </DrawerProvider>
    </ThemeProvider>
  );
}
export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const query = `*[_type == "post" && slug.current == $pageSlug] [0] {
        _id,
        _createdAt,
        title,
        likes,
        author-> {
            name,
            image
        },
        categories[] -> {
          title
  },
        description,
        mainImage,
        slug,
        body,
        keyword,
        'previousPost': *[_type == 'post' && _createdAt < ^._createdAt][0],
        'nextPost': *[_type == 'post' && _createdAt > ^._createdAt] | order(_createdAt asc)[0]
    } 
    `;
  const post = await sanityClient.fetch(query, { pageSlug });

  if (!post) {
    return { props: null, notFound: true };
  } else {
    return {
      props: {
        post,
      },
    };
  }
};
