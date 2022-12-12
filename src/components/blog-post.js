import { useState, useEffect } from 'react';
import { Box, Flex, Image, Text, Avatar, Heading, Grid } from 'theme-ui';
import PortableText from '@sanity/block-content-to-react';
import { Icon } from '@iconify/react';
import Footer from './footer/footer';
import ShareLogo from './share-social';
import { urlFor } from '../../sanity';
import { useCookies } from 'react-cookie';
import { Link as Links } from './link';
import BlogSidePanel from './blog-side-panel';
import BlogNextPrevious from './blog-next-previous';
import { serializers } from '../utils/serializers';
import { updatePost } from '../service/update-post';
import CommentForm from '../components/comment-form';
import Comments from '../components/comments';

export default function BlogPost({ data, read, relatedPost, author }) {
  const [postId] = useState(data._id);
  const [count, setCount] = useState(data.likes);
  const [cookies, setCookie] = useCookies(['access_token']);
  const [commentClick, setCommentClick] = useState(false);
  relatedPost = relatedPost?.filter((post) => post.title != data.title);

  const onBtnClick = () => {
    if (cookies.access_token === undefined || cookies.access_token !== postId) {
      setCookie('access_token', postId, {
        path: '/',
      });
      setCount(count + 1);
    } else {
      setCookie('access_token', false, {
        path: '/',
      });
      setCount(count - 1);
    }
  };
  useEffect(() => {
    if (cookies.access_token) {
      const mutations = [
        {
          patch: {
            query: `*[_id == '${data._id}']`,
            set: {
              likes: count,
            },
          },
        },
      ];
      updatePost(mutations);
    }
  }, [count]);

  return (
    <section id={data._id}>
      <Grid>
        {data.mainImage && data.mainImage ? (
          <Image
            src={urlFor(data.mainImage)}
            sx={{
              width: '-webkit-fill-available',
              paddingTop: '100px',
              minWidth: '-1px',
              px: [5, 5, 5, 5, 11, '20%'],
            }}
            alt={data.title}
          />
        ) : (
          <Image
            src="https://t4.ftcdn.net/jpg/04/73/76/11/360_F_473761115_7xCb8mFgbU4O6jG28bjVCSusuSw2RK44.jpg"
            sx={{
              width: '-webkit-fill-available',
              paddingTop: '100px',
              minWidth: '-1px',
              px: [5, 5, 5, 5, 11, '20%'],
            }}
          />
        )}

        <Flex sx={{ px: [5, 5, 5, 5, 0, 0] }}>
          <Box
            p={2}
            bg="primary"
            sx={{
              flex: '1 2 auto',
              width: '50%',
              display: ['none', 'none', 'block'],
            }}
          ></Box>
          <Box p={2} bg="muted" sx={{ flex: '1 2 auto' }}>
            <Box>
              <Box sx={{ color: '#ffc35b' }}>
                <Links
                  path="/blog"
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
                  <span style={{ fontSize: '1.2rem' }}>Back to Blog page</span>
                </Links>
              </Box>
              <Heading
                as="h1"
                variant="highlight"
                style={{ position: 'relative', fontSize: 'xx-large' }}
              >
                {data.title}
              </Heading>
              <Box sx={{ display: 'inline-flex' }}>
                {data?.categories?.map((item, i) => (
                  <Text
                    key={i}
                    sx={{
                      marginRight: '10px',
                      padding: '2px 6px',
                      color: '#323444',
                      backgroundColor: '#ffc35b',
                      borderRadius: '5px',
                      fontWeight: '500',
                      letterSpacing: '1px',
                      textAlign: 'center',
                      minWidth: '45px',
                      boxShadow: '4px 3px 14px 0px hsl(0deg 0% 13%)',
                    }}
                  >
                    {item.title}
                  </Text>
                ))}
              </Box>
              <Text as="p" variant="primaryText" sx={{ color: 'grey' }}>
                {data.description}
              </Text>
              <Flex sx={{ marginTop: '-10px' }}>
                <Links
                  sx={{ minWidth: 'auto' }}
                  path={data.author.name === 'PJ' ? '/' : '/thanchila'}
                >
                  <Avatar
                    sx={{ maxWidth: 'fit-content' }}
                    src={urlFor(data.author.image)}
                    alt={`Published by ${data.author.name}`}
                  />
                </Links>

                <Text
                  as="p"
                  variant="primaryText"
                  sx={{ margin: '10px 0px', padding: '0px 10px 10px 10px' }}
                >
                  Blog post by{' '}
                  <span style={{ color: '#ffc35b' }}>{data.author.name}</span> •{' '}
                  {new Date(data._createdAt).toLocaleDateString('en', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                  • <span style={{ color: '#ffc35b' }}>{read.text}</span>
                </Text>
              </Flex>

              <PortableText
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                blocks={data?.body}
                serializers={serializers}
              />
            </Box>
            <Flex>
              <Box
                p={2}
                bg="primary"
                color="white"
                sx={{
                  display: ['-webkit-inline-box', 'flex'],
                  flex: '1 1 auto',
                  fontSize: 'x-large',
                }}
              >
                <Box
                  sx={{
                    padding: ['5px', '10px'],
                    '&:hover': {
                      color: '#ffc35b',
                    },
                  }}
                >
                  <Icon
                    icon="ant-design:like-outlined"
                    color={cookies.access_token === 'true' ? '#ffc35b' : null}
                    onClick={onBtnClick}
                  />{' '}
                  {count}{' '}
                </Box>
                <Box
                  sx={{
                    padding: ['5px', '10px'],
                    '&:hover': {
                      color: '#ffc35b',
                    },
                  }}
                >
                  <Icon
                    icon="majesticons:comment-2-text-line"
                    color={commentClick === true ? '#ffc35b' : null}
                  />{' '}
                  {data.comments.length}{' '}
                </Box>
              </Box>

              <Box
                sx={{ display: 'flex', alignItems: 'center' }}
                p={2}
                bg="muted"
              >
                <ShareLogo data={data} />
              </Box>
            </Flex>
            <CommentForm post={data} />
            {data.comments.length > 0 && <Comments comments={data.comments} />}
            <BlogNextPrevious data={data} />
          </Box>

          <Box
            p={2}
            bg="muted"
            sx={{
              flex: '1 2 auto',
              width: '50%',
              display: ['none', 'none', 'block'],
            }}
          >
            {relatedPost && <BlogSidePanel link={data} posts={relatedPost} />}
          </Box>
        </Flex>
      </Grid>
      <Footer author={author} />
    </section>
  );
}
