import React from 'react';
import { sanityClient } from '../../sanity';

export default function SiteMap() {
  return <div>loading</div>;
}

export const getServerSideProps = async ({ res }) => {
  const baseUrl = `https://pirasanth.com`;
  const postQuery = `*[_type == "post" && publish == true && dateTime(now()) >= dateTime(publishedAt)]{
    slug,
    }`;

  const blogs = await sanityClient.fetch(postQuery);

  const countries = blogs.map((page) => {
    const slug = page.slug.current === '/' ? '/' : `/${page.slug.current}`;
    return `
        <loc>${baseUrl}/blog${slug}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      `;
  });
  const domain = `<loc>${baseUrl}</loc>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>`;
  const than = `<loc>${baseUrl}/thanchila</loc>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>`;
  const blog = `<loc>${baseUrl}/blog</loc>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>`;
  const locations = [domain, blog, than, ...countries];
  const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${locations
          .map((location) => {
            return `<url>
                      ${location}
                    </url>
                  `;
          })
          .join('')}
    </urlset>
    `;
  res.setHeader('Content-Type', 'text/xml');
  res.write(createSitemap());
  res.end();
  return {
    props: {},
  };
};
