type SEOProps = {
  description: string;
  author: string;
  image: string;
  title: string;
  url: string;
};

export default function SEO({
  description,
  author,
  image,
  title,
  url,
}: SEOProps) {
  return {
    icons: {
      icon: '/icon.svg',
    },
    //<!-- HTML Meta Tags -->
    description,
    authors: [{ name: author }],
    title,
    creator: author,
    //<!-- Twitter Meta Tags -->
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: author,
      images: [image],
      site: `${author} Tech Blog`,
      url,
    },
    //<!-- Facebook Meta Tags -->
    openGraph: {
      title,
      description,
      url: 'https://nextjs.org',
      siteName: `${author} Tech Blog`,
      images: [
        {
          url: image,
          width: 800,
          height: 600,
        },
        {
          url: image,
          width: 1800,
          height: 1600,
          alt: 'My custom alt',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}
