import { Box, Flex, Image, Text, Avatar, Heading, Grid } from 'theme-ui';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { urlFor } from '../../sanity';
import YoutubeEmbed from '../components/youtube-embed';
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

export const serializers = {
  types: {
    youtube: (props) => <YoutubeEmbed url={props.node.url} />,
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
          borderRadius: '10px',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
        }}
        alt={asset?.node?.asset?._ref}
      />
    ),
    block: BlockRenderer,
  },
  list: (props) =>
    // console.log('list', props) ||
    props.type === 'bullet' ? (
      <ul style={{ paddingBottom: '10px' }}>{props.children}</ul>
    ) : (
      <ol style={{ paddingBottom: '10px' }}>{props.children}</ol>
    ),
  listItem: (props) =>
    // console.log('list', props) ||
    props.type === 'bullet' ? (
      <li style={{ paddingBottom: '10px' }}>{props.children}</li>
    ) : (
      <li style={{ paddingBottom: '10px', fontSize: '16px' }}>
        {props.children}
      </li>
    ),
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
      // console.log(mark),
      <a href={mark?.href} style={{ color: '#ffc35b', textDecoration: 'none' }}>
        {children}
      </a>
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
