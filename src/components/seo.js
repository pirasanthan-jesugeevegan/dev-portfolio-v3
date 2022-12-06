import React from 'react';
import Head from 'next/head';

export default function SEO({ description, author, image, title, url }) {
  return (
    <Head>
      {/* <!-- HTML Meta Tags --> */}
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta name="author" content={author}></meta>
      <meta name="title" content={title}></meta>
      <meta name="image" content={image}></meta>

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemprop="name" content={title}></meta>
      <meta itemprop="description" content={description}></meta>
      <meta itemprop="image" content={image}></meta>

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={url}></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content={title}></meta>
      <meta property="og:description" content={description}></meta>
      <meta property="og:image" content={image}></meta>
      <meta property="og:site_name" content={`${author} Tech Blog`}></meta>

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:url" content={url}></meta>
      <meta name="twitter:site" content={`${author} Tech Blog`}></meta>

      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:description" content={description}></meta>
      <meta name="twitter:image" content={image}></meta>
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
