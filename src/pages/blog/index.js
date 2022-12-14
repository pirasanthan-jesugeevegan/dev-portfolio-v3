/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import {
  jsx,
  Container,
  Flex,
  Button,
  Grid,
  Box,
  Image,
  Text,
  Badge,
  Close,
} from 'theme-ui';
import { Link as Links } from '../../components/link';
import { keyframes } from '@emotion/core';
import Footer from '../../components/footer/footer';
import Head from 'next/head';
import theme from 'theme';
import Logo from 'components/logo';
import BlogCard from 'components/blog-card';
import LogoWhite from 'assets/logo.svg';
import tpLogo from 'assets/tp-logo.svg';
import { ThemeProvider } from 'theme-ui';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from '../../components/header/mobile-drawer';
import { sanityClient } from '../../../sanity';
import { Icon } from '@iconify/react';
import { readTime } from '../../utils/read-time';
import { urlFor } from '../../../sanity';

export default function Blog({
  post,
  author,
  description = `Sharing my tips and tricks`,
  authors = 'Pirasanthan Jesugeevegan',
  image = 'https://www.pirasanth.com/_next/static/images/Profile-74b29cdf06ceec5b19d6e084caffc9e7.png',
  title = 'Blog | Pirasanth',
}) {
  const logoImg = author[0].name === 'PJ' ? LogoWhite : tpLogo;
  for (const item of post) {
    Object.assign(item, readTime(item.body));
  }
  const [searchTerm, setSearchTerm] = useState('');

  post = post.filter((p) => {
    if (searchTerm.length > 0) {
      return p.author.name === searchTerm;
    }
    return p;
  });
  useEffect(() => {}, []);
  return (
    <ThemeProvider theme={theme}>
      <DrawerProvider>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description}></meta>
          <meta name="author" content={authors}></meta>
          <meta name="title" content={title}></meta>
          <meta name="image" content={image}></meta>

          {/* <!-- Google / Search Engine Tags --> */}
          <meta itemprop="name" content={title}></meta>
          <meta itemprop="description" content={description}></meta>
          <meta itemprop="image" content={image}></meta>

          {/* <!-- Facebook Meta Tags --> */}
          <meta
            property="og:url"
            content="https://www.pirasanth.com/blog"
          ></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:title" content={title}></meta>
          <meta property="og:description" content={description}></meta>
          <meta property="og:image" content={image}></meta>

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:title" content={title}></meta>
          <meta name="twitter:description" content={description}></meta>
          <meta name="twitter:image" content={image}></meta>
        </Head>
        <header sx={styles.header} id="header" nav={true}>
          <Container sx={styles.container}>
            <Logo src={logoImg} />
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
                  'https://firebasestorage.googleapis.com/v0/b/pirasanth.appspot.com/o/Pirasanthan_Jesugeevegan_CV.pdf?alt=media&token=bc308318-ae6b-46c1-9f78-b30950d12ebb';
              }}
              className="donate__btn"
              variant="secondary"
              aria-label="CV"
            >
              <Icon icon="feather:download" /> CV{' '}
              <span style={styles.pdf}> (PDF)</span>
            </Button>

            <MobileDrawer author={author} />
          </Container>
        </header>
        <main>
          <Grid sx={styles.grid}>
            <Box sx={{ color: '#ffc35b' }}>
              <Links
                path="/"
                sx={{
                  color: '#ffc35b',
                  borderBottom: '1px dotted #ffc35b',
                  textDecoration: 'none',
                }}
              >
                <Icon
                  icon="bxs:left-arrow-circle"
                  style={{ fontSize: 'inherit', marginRight: '5px' }}
                />
                <span style={{ fontSize: '1.2rem' }}>Back to Home page</span>
              </Links>
            </Box>
            <Box sx={{ color: '#ffc35b' }}>
              <Box sx={{ display: ['block', 'none', 'none', 'none'] }}>
                <Box sx={{ position: 'sticky', top: '30px' }}>
                  <Box
                    sx={{
                      margin: '10px',
                      backgroundColor: '#252734',
                      borderRadius: '5px',
                      padding: '10px',
                      marginTop: '30px',
                    }}
                  >
                    <Text sx={{ fontSize: 'large', textAlign: 'center' }}>
                      Filter by Author
                    </Text>
                    <Box>
                      {searchTerm && (
                        <Badge
                          sx={{
                            margin: '10px',
                            alignItems: 'center',
                            display: 'inline-flex',
                          }}
                        >
                          {searchTerm}
                          <Close onClick={() => setSearchTerm('')} />
                        </Badge>
                      )}

                      {author.map((author, i) => (
                        <Box
                          p={2}
                          key={i}
                          bg="primary"
                          color="white"
                          sx={{
                            display: 'flex',
                            margin: '10px 10px',
                            borderRadius: '5px',
                            '&:hover': {
                              cursor: 'pointer',
                            },
                          }}
                          onClick={() => setSearchTerm(author.name)}
                        >
                          <Image
                            src={urlFor(author.image.asset._ref)}
                            sx={{
                              width: '20%',
                              borderRadius: '100%',
                            }}
                          />
                          <Text
                            sx={{
                              paddingBottom: '10px',
                              alignSelf: 'center',
                              padding: '10px',
                            }}
                          >
                            {author.name}
                          </Text>
                          <Flex
                            sx={{
                              fontSize: 'small',
                              justifyContent: 'space-between',
                            }}
                          ></Flex>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid gap={2} columns={[0, 0, 0, '3fr 1fr']}>
            <Box sx={styles.grid1}>
              {post.map((blog) => (
                <BlogCard
                  data={blog}
                  key={blog._id}
                  sx={{ marginBottom: '50px' }}
                />
              ))}
            </Box>
            <Box sx={{ display: ['none', 'none', 'none', 'block'] }}>
              <Box sx={{ position: 'sticky', top: '30px' }}>
                <Box
                  sx={{
                    margin: '10px',
                    backgroundColor: '#252734',
                    borderRadius: '5px',
                    padding: '10px',
                    marginTop: '30px',
                  }}
                >
                  <Text sx={{ fontSize: 'large', textAlign: 'center' }}>
                    Filter by Author
                  </Text>
                  <Box>
                    {searchTerm && (
                      <Badge
                        sx={{
                          margin: '10px',
                          alignItems: 'center',
                          display: 'inline-flex',
                        }}
                      >
                        {searchTerm}
                        <Close onClick={() => setSearchTerm('')} />
                      </Badge>
                    )}

                    {author.map((author, i) => (
                      <Box
                        p={2}
                        key={i}
                        bg="primary"
                        color="white"
                        sx={{
                          display: 'flex',
                          margin: '10px 10px',
                          borderRadius: '5px',
                          '&:hover': {
                            cursor: 'pointer',
                          },
                        }}
                        onClick={() => setSearchTerm(author.name)}
                      >
                        <Image
                          src={urlFor(author.image.asset._ref)}
                          sx={{
                            width: '30%',
                            borderRadius: '100%',
                          }}
                        />
                        <Text
                          sx={{
                            paddingBottom: '10px',
                            alignSelf: 'center',
                            padding: '10px',
                          }}
                        >
                          {author.name}
                        </Text>
                        <Flex
                          sx={{
                            fontSize: 'small',
                            justifyContent: 'space-between',
                          }}
                        ></Flex>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid sx={styles.grid}></Grid>
        </main>
        <Footer author={author} />
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
  grid1: {
    display: 'grid',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
    ],
    paddingTop: ['80px'],
    gridGap: ['37px 0', null, '24px 24px', null, '48px 24px', null, null, null],
    width: ['100%', '100%', '100%', '100%', '100%', '80%', '80%'],
    mx: 'auto',
    px: ['10px', '10px', '20px', '20px', '20px', '50px'],
  },
  grid: {
    mt: [
      '-55px',
      '-60px',
      '-60px',
      '-25px',
      '-13px',
      '-13px',
      '-13px',
      '-13px',
    ],
    paddingTop: ['150px'],
    gridGap: ['37px 0', null, '24px 24px', null, '24px 24px', null, null, null],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    px: ['10px', '10px', '50px', '100px', '50px', '150px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },

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
  const pageSlug = pageContext.query;
  const query = `*[_type == "post" && publish == true && dateTime(now()) >= dateTime(publishedAt)] {
        _id,
        _createdAt,
        title,
        likes,
        author-> {
            name,
            image
        },
        'comments': *[
          _type == "comment" &&
          post._ref == ^._id &&
          approved == true
        ],
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
