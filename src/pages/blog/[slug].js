/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, useEffect } from 'react';
import { keyframes } from '@emotion/core';
import theme from 'theme';
import Head from 'next/head';
import { ThemeProvider } from 'theme-ui';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import { sanityClient, urlFor } from '../../../sanity';
import BlogPost from '../../components/blog-post';
import SEO from '../../components/seo';
import { readTime } from '../../utils/read-time';
import { getPostbyCat } from '../../service/get-post-by-cat';
import Header from '../../components/header/header';

export default function Post({ post, author }) {
  author = author.filter((auth) => auth.name === post.author.name);
  const [relatedPost, setRelatedPost] = useState(null);

  useEffect(() => {
    getPostbyCat(post.categories).then((response) => setRelatedPost(response));
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <DrawerProvider>
        <Head>
          <title>{post.title}</title>
          <meta name="description" content={post.description}></meta>
          <meta
            name="author"
            content={
              post.author.name === 'PJ'
                ? 'Pirasanth Jesugeevegan'
                : post.author.name
            }
          ></meta>
          <meta name="title" content={post.title}></meta>
          <meta name="image" content={urlFor(post.mainImage)}></meta>
          {/* <!-- Google / Search Engine Tags --> */}
          <meta itemprop="name" content={post.title}></meta>
          <meta itemprop="description" content={post.description}></meta>
          <meta itemprop="image" content={urlFor(post.mainImage)}></meta>
          {/* <!-- Facebook Meta Tags --> */}
          <meta
            property="og:url"
            content={`https://pirasanth.com/blog/${post.slug.current}`}
          ></meta>
          {/* <meta
            property="og:site_name"
            content={`https://pirasanth.com/blog/${post.slug.current}`}
          ></meta> */}
          <meta property="og:type" content="article"></meta>
          <meta property="og:title" content={post.title}></meta>
          <meta property="og:description" content={post.description}></meta>
          <meta property="og:image" content={urlFor(post.mainImage)}></meta>
          {/* <!-- Twitter Meta Tags --> */}
          <meta
            name="twitter:url"
            content={`https://pirasanth.com/blog/${post.slug.current}`}
          ></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:title" content={post.title}></meta>
          <meta name="twitter:description" content={post.description}></meta>
          <meta name="twitter:image" content={urlFor(post.mainImage)}></meta>
          <meta name="twitter:label1" content="Written by"></meta>
          <meta
            name="twitter:data1"
            content={
              post.author.name === 'PJ'
                ? 'Pirasanth Jesugeevegan'
                : post.author.name
            }
          ></meta>
          <meta name="twitter:label2" content="Filed under"></meta>
          <meta name="twitter:data2" content={post.keyword}></meta>
          <meta name="twitter:site" content="https://pirasanth.com/"></meta>
          <meta
            name="twitter:creator"
            content={
              post.author.name === 'PJ'
                ? 'Pirasanth Jesugeevegan'
                : post.author.name
            }
          ></meta>
          <meta name="og:image:width" content="2360"></meta>
          <meta name="og:image:height" content="1380"></meta>
        </Head>
        <Header nav={false} author={author} />
        <main>
          <BlogPost
            data={post}
            author={author}
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

  const query = `*[_type == "post" && slug.current == $pageSlug && publish == true && dateTime(now()) >= dateTime(publishedAt)] [0] {
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
        'comments': *[
          _type == "comment" &&
          post._ref == ^._id &&
          approved == true
        ],
        description,
        mainImage,
        slug,
        body,
        keyword,
        'previousPost': *[_type == 'post' && _createdAt < ^._createdAt][0],
        'nextPost': *[_type == 'post' && _createdAt > ^._createdAt] | order(_createdAt asc)[0]
    } 
    `;
  const authorQuery = `
  *[_type == "author"]
  `;

  const post = await sanityClient.fetch(query, { pageSlug });
  const author = await sanityClient.fetch(authorQuery);
  if (!post) {
    return { props: null, notFound: true };
  } else {
    return {
      props: {
        post,
        author,
      },
    };
  }
};
