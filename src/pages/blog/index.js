/** @jsx jsx */
import { jsx, Container, Flex, Button, Grid, Box } from 'theme-ui';
import { Link as Links } from '../../components/link';
import { keyframes } from '@emotion/core';
import Footer from '../../components/footer/footer';
import Head from 'next/head';
import theme from 'theme';
import Logo from 'components/logo';
import BlogCard from 'components/blog-card';
import LogoWhite from 'assets/logo.svg';
import { ThemeProvider } from 'theme-ui';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from '../../components/header/mobile-drawer';
import { sanityClient } from '../../../sanity';
import { Icon } from '@iconify/react';
import { readTime } from '../../utils/read-time';

export default function Blog({
  post,
  author,
  description = `Sharing my tips and tricks`,
  authors = 'Pirasanthan Jesugeevegan',
  image = 'https://www.pirasanth.com/_next/static/images/Profile-74b29cdf06ceec5b19d6e084caffc9e7.png',
  title = 'Blog | Pirasanth',
}) {
  for (const item of post) {
    Object.assign(item, readTime(item.body));
  }
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
          <meta property="og:url" content="https://www.pirasanth.com"></meta>
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
          </Grid>
          <Grid sx={styles.grid}>
            {post.map((blog) => (
              <BlogCard
                data={blog}
                key={blog._id}
                sx={{ marginBottom: '50px' }}
              />
            ))}
          </Grid>
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
  const query = `*[_type == "post"] {
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
