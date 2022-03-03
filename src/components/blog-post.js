import { useState, useEffect } from 'react';
import { Box, Flex, Image, Text, Avatar, Heading, Grid } from 'theme-ui';
import PortableText from '@sanity/block-content-to-react';
import { Icon } from '@iconify/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Footer from './footer/footer';
import { urlFor } from '../../sanity';
import { useCookies } from 'react-cookie';
import { Link } from './link';

const BlockRenderer = (props) => {
  const { style = 'normal' } = props.node;

  if (/^h\d/.test(style)) {
    return (
      <Heading
        as={style}
        variant="highlight"
        style={{ position: 'relative', letterSpacing: 1, marginTop: '3.14em' }}
        {...props}
      />
    );
  }
  if (style === 'normal') {
    return (
      <Text
        as="p"
        variant="primaryText"
        // sx={props?.node?.children[0]?.marks[0] ? { color: '#ffc35b' } : ''}
        {...props}
      />
    );
  }
  if (style === 'blockquote') {
    return (
      <blockquote
        style={{
          boxShadow: '#ffc35b 3px 0px 0px 0px inset',
          paddingLeft: '23px',
          marginLeft: '0px',
          fontStyle: 'italic',
        }}
      >
        {props.children}
      </blockquote>
    );
  }
  if (props?.node?.markDefs[0]?._type === 'link') {
    <a href={props?.node?.markDefs[0]?.href} style={{ color: '#5757f9' }}>
      {props?.node?.children[0]?.text}
    </a>;
  }
  // Fall back to default handling
  return PortableText.defaultSerializers.types.block(props);
};
const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    code: (props) => (
      <SyntaxHighlighter
        language={props.node.language || 'gherkin'}
        customStyle={{ padding: '1rem', fontSize: '14px', borderRadius: '5px' }}
        wrapLines="false"
      >
        {props.node.code}
      </SyntaxHighlighter>
    ),
    image: (asset) => (
      <Image
        src={urlFor(asset.node)}
        sx={{
          width: '-webkit-fill-available',
        }}
        alt={asset.node.asset._ref}
      />
    ),
    block: BlockRenderer,
  },
};

export default function BlogPost({ data }) {
  const [count, setCount] = useState(data.likes);
  const [cookies, setCookie] = useCookies(['access_token']);
  console.log(cookies.access_token);
  const onBtnClick = () => {
    if (cookies.access_token === undefined) {
      setCookie('access_token', true, {
        path: '/',
      });
      setCount(count + 1);
    } else if (cookies.access_token === 'false') {
      setCookie('access_token', true, {
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

    fetch(
      `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
      {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN}`,
        },
        body: JSON.stringify({ mutations }),
      }
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }, [count]);

  return (
    <section id={data._id}>
      <Grid>
        <Box sx={styles.box}>
          <Image
            src={urlFor(data.mainImage)}
            sx={{
              width: '-webkit-fill-available',
              paddingTop: '100px',
              minWidth: '-1px',
              paddingBottom: '5%',
            }}
            alt={data.title}
          />
          <Box sx={{ color: '#ffc35b' }}>
            <Link
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
            </Link>
          </Box>
          <Heading
            as="h1"
            variant="highlight"
            style={{ position: 'relative', fontSize: 'xx-large' }}
          >
            {data.title}
          </Heading>
          <Box sx={{ display: 'inline-flex' }}>
            {data?.categories?.map((item) => (
              <Text
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
            <Avatar
              sx={{ minWidth: 'auto' }}
              src={urlFor(data.author.image)}
              alt={`Published by ${data.author.name}`}
            />
            <Text
              as="p"
              variant="primaryText"
              sx={{ margin: '10px 0px', padding: '0px 10px 10px 10px' }}
            >
              Blog post by{' '}
              <span style={{ color: '#ffc35b' }}>{data.author.name}</span> -
              Published at {new Date(data._createdAt).toLocaleDateString('uk')}
            </Text>
          </Flex>

          <PortableText
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            blocks={data?.body}
            serializers={serializers}
          />
          <Box sx={{ fontSize: 'x-large' }}>
            <Icon
              icon="ant-design:like-outlined"
              color={cookies.access_token === 'true' ? '#ffc35b' : null}
              onClick={onBtnClick}
            />{' '}
            {count}
          </Box>
        </Box>
      </Grid>
      <Footer />
    </section>
  );
}

const styles = {
  box: {
    px: [5, 5, 5, 5, 11, '25%'],
  },
  banner: {
    container: {
      display: 'flex',
      pt: [11],
    },

    contentBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    },
  },
};
