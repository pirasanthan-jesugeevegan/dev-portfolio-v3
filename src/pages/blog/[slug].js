/** @jsx jsx */
import { jsx, Container, Flex, Button, Text } from 'theme-ui';
import { keyframes } from '@emotion/core';
import React from 'react';
import theme from 'theme';
import Logo from 'components/logo';
import LogoWhite from 'assets/logo.svg';
import { ThemeProvider } from 'theme-ui';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from '../../components/header/mobile-drawer';
import { sanityClient, urlFor } from '../../../sanity';
import { Icon } from '@iconify/react';
import BlogPost from '../../components/blog-post';
import Head from 'next/head';
export default function Post({ post }) {
  return (
    <ThemeProvider theme={theme}>
      <DrawerProvider>
        <Head>
          {/* Primary Meta Tags */}
          <title>{post.title}</title>
          <meta name="title" content={post.title}></meta>
          <meta name="description" content={post.description}></meta>
          <meta name="keywords" content={post.keyword}></meta>
          <meta name="image" content={urlFor(post.mainImage)}></meta>

          {/* Google / Search Engine Tags  */}
          <meta itemprop="name" content={post.title}></meta>
          <meta itemprop="description" content={post.description}></meta>
          <meta itemprop="image" content={urlFor(post.mainImage)}></meta>

          {/* Open Graph / Facebook  */}
          <meta property="og:type" content="website"></meta>
          <meta
            property="og:url"
            content={`https://www.pirasanth.com/post/${post.slug.current}`}
          ></meta>
          <meta property="og:title" content={post.title}></meta>
          <meta property="og:description" content={post.description}></meta>
          <meta property="og:image" content={urlFor(post.mainImage)}></meta>

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image"></meta>
          <meta
            property="twitter:url"
            content={`https://www.pirasanth.com/post/${post.slug.current}`}
          ></meta>
          <meta property="twitter:title" content={post.title}></meta>
          <meta
            property="twitter:description"
            content={post.description}
          ></meta>
          <meta
            property="twitter:image"
            content={urlFor(post.mainImage)}
          ></meta>
        </Head>
        <header sx={styles.header} id="header">
          <Container sx={styles.container}>
            <Logo src={LogoWhite} />
            <Flex as="nav" sx={styles.nav}></Flex>
            <Button
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  'https://uk.linkedin.com/in/pirasanth-jesugeevegan';
              }}
              className="donate__btn"
              variant="secondary"
              aria-label="Contact"
            >
              Contact
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  'https://firebasestorage.googleapis.com/v0/b/pirasanth.appspot.com/o/Pirasanthan_Jesugeevegan_CV%20(1).pdf?alt=media&token=3cf94649-9405-4f32-88e3-0a8faf71826f';
              }}
              className="donate__btn"
              variant="secondary"
              aria-label="CV"
            >
              <Icon icon="feather:download" /> CV{' '}
              <span style={styles.pdf}> (PDF)</span>
            </Button>

            <MobileDrawer />
          </Container>
        </header>
        <main>
          <BlogPost data={post} />
        </main>
      </DrawerProvider>
    </ThemeProvider>
  );
}
const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'white',
    fontWeight: 'normal',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.5s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 24],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
      '.donate__btn': {
        borderColor: 'primary',
        color: 'primary',
        '&:hover': {
          boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',
          backgroundColor: 'primary',
          color: 'white',
        },
      },
    },
  },
  pdf: {
    fontSize: '8px',
  },
  container: {
    marginTop: '10px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    marginRight: '24px',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: '16px',
      fontWeight: '400',
      px: 25,
      cursor: 'pointer',
      lineHeight: '1.2',
      '&.active': {
        color: 'secondary',
      },
    },
  },
};

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
        keyword
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
