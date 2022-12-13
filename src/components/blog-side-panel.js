/** @jsx jsx */
import { jsx, Box, Flex, Heading, Button, Text } from 'theme-ui';
import { Link } from 'react-scroll';
import { readTime } from '../utils/read-time';
import { Icon } from '@iconify/react';

export default function blogSidePanel({ link, posts }) {
  for (var i = 0; i < posts?.length; i++) {
    Object.assign(posts[i], readTime(posts[i].body));
  }
  return (
    <Box sx={{ position: 'sticky', top: '30px' }}>
      {link.body.map((item, i) => {
        if (item.style === 'h4') {
          return (
            <Box key={i} sx={styles.content}>
              <Link
                activeClass="active"
                to={item.children[0].text
                  .replace(/([a-z])([A-Z])/g, '$1-$2')
                  .replace(/\s+/g, '-')
                  .toLowerCase()}
                href={`#${item.children[0].text
                  .replace(/([a-z])([A-Z])/g, '$1-$2')
                  .replace(/\s+/g, '-')
                  .toLowerCase()}`}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item?.children[0]?.text}
              </Link>
            </Box>
          );
        }
      })}
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
          Related Posts
        </Text>
        <Box>
          {posts &&
            posts?.map((item, i) => (
              <Box
                p={2}
                key={i}
                bg="primary"
                color="white"
                sx={{
                  flex: '1 1 auto',
                  margin: '10px 10px',
                  borderRadius: '5px',
                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = item.slug.current;
                }}
              >
                <Text
                  sx={{
                    paddingBottom: '10px',
                  }}
                >
                  {item.title}
                </Text>
                <Flex
                  sx={{
                    fontSize: 'small',
                    justifyContent: 'space-between',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  }}
                >
                  <Box sx={{ color: '#ffc35b', paddingRight: '10px' }}>
                    <Text>{item.author.name}</Text>
                  </Box>
                  <Box>
                    <Text>
                      {new Date(item._createdAt).toLocaleDateString('en', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}{' '}
                      •{' '}
                      <Icon
                        icon="bx:time-five"
                        sx={{ margin: '-2px', marginRight: '2px' }}
                      />
                      {item.text}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
}
const styles = {
  icons_title: { paddingRight: '10px', margin: '2px', fontSize: 'large' },
  icons: {
    margin: '3px',
    fontSize: 'x-large',
    '&:hover': {
      color: '#ffc35b',
    },
  },
  content: {
    borderLeft: '4px solid #f9f9f9',
    paddingLeft: '10px',
    marginLeft: '10px',

    a: {
      scrollBehavior: 'smooth',
      color: 'white',
      textDecoration: 'none',
      display: 'block',
      fontSize: '1.1em',
      padding: '5px 0 5px 5px',
      lineHeight: '1.2',
      borderLeft: '5px solid transparent',
      position: 'relative',
      '&.active': {
        color: 'secondary',
        borderLeftColor: 'secondary',
      },
    },
  },
};
