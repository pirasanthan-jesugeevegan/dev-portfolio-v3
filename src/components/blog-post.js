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
import PortableText from 'react-portable-text';
import Footer from './footer/footer';
import { urlFor } from '../../sanity';

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
              src={urlFor(data.author.image)}
              alt={`Published by ${data.author.name}`}
            />
            <Text
              as="p"
              variant="primaryText"
              sx={{ margin: '10px 0px', padding: '0px 10px 50px 10px' }}
            >
              Blog post by {data.author.name} - Published at{' '}
              {new Date(data._createdAt).toLocaleString()}
            </Text>
          </Flex>

          <PortableText
            sx={{ flexDirection: 'column', width: '100%' }}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={data.body}
            serializers={{
              h1: (props) => (
                <Heading
                  as="h1"
                  variant="highlight"
                  style={{
                    position: 'relative',
                  }}
                  {...props}
                />
              ),
              h4: (props) => (
                <Heading
                  as="h4"
                  variant="highlight"
                  style={{ position: 'relative' }}
                  {...props}
                />
              ),
              code: ({ children }) => (
                <pre
                  style={{
                    background: '#f4f4f4',
                    border: '1px solid #ddd',
                    borderLeft: '3px solid #FFC35B',
                    color: '#666',
                    pageBreakInside: 'avoid',
                    fontFamily: 'monospace',
                    fontSize: '15px',
                    lineHeight: '1.6',
                    marginBottom: '1.6em',
                    maxWidth: '100%',
                    overflow: 'auto',
                    padding: '1em 1.5em',
                    display: 'block',
                    wordWrap: 'break-word',
                  }}
                >
                  <code>{children}</code>
                </pre>
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
              link: ({ href, children }) => (
                <a href={href} style={{ color: '#5757f9' }}>
                  {children}
                </a>
              ),
              image: ({ asset }) => (
                <Image
                  src={urlFor(asset)}
                  sx={{
                    width: '-webkit-fill-available',
                  }}
                  alt={asset._ref}
                />
              ),
            }}
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
