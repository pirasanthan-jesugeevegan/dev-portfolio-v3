import Link from 'next/link';
import Image from 'next/image';
import urlFor from '../lib/urlFor';
import YoutubeEmbed from '../components/youtube-embed';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const RichTextComponent = {
  types: {
    youtube: (props: any) => <YoutubeEmbed url={props.value.url} />,
    authorReference: ({ node }: any) => <span>{node.author.name}</span>,
    code: (props: any) => (
      <SyntaxHighlighter language={props.value.language} style={oneLight}>
        {props.value.code}
      </SyntaxHighlighter>
    ),
    image: ({ value }: any) => {
      return (
        <div className="relative w-full m-10 mx-auto">
          <Image
            className="rounded-lg block mx-auto w-full"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            width={1200}
            height={800}
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="md:text-[20px] ml-10 py-5 list-disc space-y-4 pl-6">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="md:text-[20px] list-decimal list-inside space-y-4 pl-6">
        {children}
      </ol>
    ),
  },
  block: {
    normal: ({ children }: any) => (
      <p className="leading-8 my-[15px] md:text-[20px] ">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-5 font-bold text-primary">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-5 font-bold  text-primary">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-5 font-bold  text-primary">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-5 font-bold  text-primary">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#F7AB0A] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    em: ({ children }: any) => <em style={{ color: 'blue' }}>{children}</em>,
    strong: ({ children }: any) => (
      <strong className="text-primary md:text-[20px]">{children}</strong>
    ),
    code: ({ children }: any) => (
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
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#F7AB0A] hover:decoration-secondary"
        >
          {children}
        </Link>
      );
    },

    footnote: ({ children, markKey, mark }: any) => (
      <span>
        {children}
        <sup>
          <a href={`#${markKey}`}>#</a>
        </sup>
      </span>
    ),
  },
};
