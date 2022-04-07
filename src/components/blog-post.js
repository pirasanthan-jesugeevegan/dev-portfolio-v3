import { useState, useEffect } from 'react';
import { Box, Flex, Image, Text, Avatar, Heading, Grid } from 'theme-ui';
import PortableText from '@sanity/block-content-to-react';
import { Icon } from '@iconify/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Footer from './footer/footer';
import { urlFor } from '../../sanity';
import { useCookies } from 'react-cookie';
import { Link as Links } from './link';
import { Link } from 'react-scroll';
const BlockRenderer = (props) => {
  const { style = 'normal' } = props.node;

  if (/^h\d/.test(style)) {
    return (
      <Heading
        id={
          props.node.style === 'h4'
            ? props.node.children[0].text
                .replace(/([a-z])([A-Z])/g, '$1-$2')
                .replace(/\s+/g, '-')
                .toLowerCase()
            : ''
        }
        variant="highlight"
        style={{
          position: 'relative',
          letterSpacing: 1,
          marginTop: '1.14em',
        }}
        {...props}
      />
    );
  }
  if (style === 'normal') {
    return (
      <Text
        as="p"
        variant="primaryText"
        sx={{ margin: '20px 0px' }}
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
  // if (props?.node?.markDefs[0]?._type === 'link') {
  //   <a href={props?.node?.markDefs[0]?.href} style={{ color: '#5757f9' }}>
  //     {props?.node?.children[0]?.text}
  //   </a>;
  // }
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
        alt={asset?.node?.asset?._ref}
      />
    ),
    block: BlockRenderer,
  },
  list: (props) =>
    console.log('list', props) ||
    (props.type === 'bullet' ? (
      <ul style={{ paddingBottom: '10px' }}>{props.children}</ul>
    ) : (
      <ol style={{ paddingBottom: '10px' }}>{props.children}</ol>
    )),
  listItem: (props) =>
    console.log('list', props) ||
    (props.type === 'bullet' ? (
      <li style={{ paddingBottom: '10px' }}>{props.children}</li>
    ) : (
      <li style={{ paddingBottom: '10px', fontSize: '16px' }}>
        {props.children}
      </li>
    )),
  marks: {
    em: ({ children }) => <em style={{ color: 'blue' }}>{children}</em>,
    strong: ({ children }) => (
      <strong style={{ color: '#ffc35b' }}>{children}</strong>
    ),
    code: ({ children }) => (
      <code
        style={{
          padding: '0.2em 0.4em',
          margin: '0',
          fontSize: '85%',
          backgroundColor: 'rgb(87 88 100)',
          borderRadius: '6px',
        }}
      >
        {children}
      </code>
    ),
    link: ({ mark, children }) => (
      console.log(mark),
      (
        <a
          href={mark?.href}
          style={{ color: '#ffc35b', textDecoration: 'none' }}
        >
          {children}
        </a>
      )
    ),
    li: ({ children }) => (
      <li
        style={{
          padding: '5px',
          marginLeft: '25px',
        }}
      >
        {children}
      </li>
    ),
    footnote: ({ children, markKey, mark }) => (
      <span>
        {children}
        <sup>
          {/* 
             If you want numbers here, you can reuse the reduce function from Footnotes.js
             to e.g. an object with markKey as keys and the index as values.
             {[markKey]: index}. 
          */}
          <a href={`#${markKey}`}>#</a>
        </sup>
      </span>
    ),
  },
};

export default function BlogPost({ data }) {
  const [count, setCount] = useState(data.likes);
  const [cookies, setCookie] = useCookies(['access_token']);

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
              px: [5, 5, 5, 5, 11, '25%'],
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
              px: [5, 5, 5, 5, 11, '25%'],
            }}
          />
        )}

        <Flex sx={{ px: [5, 5, 5, 5, 0, 0] }}>
          <Box
            p={2}
            bg="primary"
            sx={{
              flex: '1 2 auto',
              width: '-webkit-fill-available',
              display: ['none', 'none', 'block'],
            }}
          ></Box>
          <Box p={2} bg="muted" sx={{ flex: '1 2 auto' }}>
            <Box>
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
                  Published on{' '}
                  {new Date(data._createdAt).toLocaleDateString('en', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </Text>
              </Flex>

              <PortableText
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                blocks={data?.body}
                serializers={serializers}
              />
              <Box
                sx={{
                  fontSize: 'x-large',
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
                {count}
              </Box>
            </Box>
          </Box>
          <Box
            p={2}
            bg="muted"
            sx={{
              flex: '1 2 auto',
              width: '-webkit-fill-available',
              display: ['none', 'none', 'block'],
            }}
          >
            {/* <Box sx={styles.content}>
              {data.body.map((item, i) => {
                if (item.style === 'h4') {
                  return (
                    // <a
                    //   href={`#${item.children[0].text
                    //     .replace(/([a-z])([A-Z])/g, '$1-$2')
                    //     .replace(/\s+/g, '-')
                    //     .toLowerCase()}`}
                    //   className="post_tab-link active"
                    //   style={{
                    //     color: 'white',
                    //     textDecoration: 'none',
                    //     display: 'block',
                    //     fontSize: '1.1em',
                    //     padding: '5px 0 5px 5px',
                    //     lineHeight: '1.2',
                    //     position: 'relative',
                    //   }}
                    // >
                    //   {item.children[0].text}
                    // </a>

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
                      key={i}
                    >
                      {item?.children[0]?.text}
                    </Link>
                  );
                }
              })}
            </Box> */}
          </Box>
        </Flex>
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
  content: {
    position: 'sticky',
    top: '30px',
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
  strong: {
    boxShadow: 'inset 0 -0.2em white, inset 0 -0.25em blue',
    display: 'inline',
    position: 'relative',
    paddingBottom: '10px',
    textDecoration: 'none',
  },
};
