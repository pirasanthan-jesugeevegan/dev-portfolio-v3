import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = `Hi! I'm Pirasanth,I'm a Front-End Developer and a QA automation Engineer. Nice to meet you! Please take a look around`,
  author = 'Pirasanthan Jesugeevegan',
  image = 'https://www.pirasanth.com/_next/static/images/Profile-74b29cdf06ceec5b19d6e084caffc9e7.png',
  title = 'Home | Portfolio',
}) {
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
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
