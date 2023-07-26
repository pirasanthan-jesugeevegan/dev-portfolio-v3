import '../../../../styles/globals.css';
import { Metadata } from 'next';
import SEO from '../../../seo';
import { client } from '../../../../lib/sanity.client';
import { groq } from 'next-sanity';

export const revalidate = 60; // revalidate this page every 60 seconds
export async function generateStaticParams() {
  const query = groq`*[_type=='post']
{
slug
}`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
