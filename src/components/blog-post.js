import {
  Box,
  Card,
  Flex,
  Image,
  Text,
  Avatar,
  Container,
  Heading,
  Grid,
} from 'theme-ui';
import PortableText from '@sanity/block-content-to-react';

import SyntaxHighlighter from 'react-syntax-highlighter';

import Footer from './footer/footer';
import { urlFor } from '../../sanity';

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
  return (
    <section id={data._id}>
      <Grid>
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
        <Box sx={styles.box}>
          <Heading
            as="h1"
            variant="highlight"
            style={{ position: 'relative', fontSize: 'xx-large' }}
          >
            {data.title}
          </Heading>
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
