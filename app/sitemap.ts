import { client } from '@/lib/sanity.client';

export default async function sitemap() {
  const baseUrl = `https://pirasanth.com`;
  const postQuery = `*[_type == "post" && publish == true && dateTime(now()) >= dateTime(publishedAt)]{
    slug,
    }`;

  const blogs = await client.fetch(postQuery);
  const blog = blogs.map((_: { slug: { current: string } }) => {
    const slug = _.slug.current === '/' ? '/' : `/${_.slug.current}`;
    return slug;
  });

  const links = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
  ];
  blog.forEach((link: string) => {
    links.push({
      url: `${baseUrl}${link}`,
      lastModified: new Date(),
    });
  });
  return links;
}
