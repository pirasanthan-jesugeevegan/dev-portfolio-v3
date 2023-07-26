import Skills from '../../sections/skills';
import Hero from '../../sections/hero';
import About from '../../sections/about';
import Portfolio from '../../sections/portfolio';
import Blogs from '../../sections/blogs';
import { client } from '../../lib/sanity.client';
import { groq } from 'next-sanity';

export default async function Home() {
  const authorQuery = groq`
  *[_type == "author"]
  `;
  const projectQuery = groq`
*[_type == "projects"] | order(order asc){ 
  order,
  tag,
  card,
  icons,
  image,
  name,
  display
}
  `;
  const postQuery = groq`*[_type == "post" && publish == true && dateTime(now()) >= dateTime(publishedAt)] {
    _id,
    title,
    likes,
    body,
    publish,
    publishedAt,
    'comments': *[
          _type == "comment" &&
          post._ref == ^._id &&
          approved == true
        ],
    categories[] -> {
            title
    },
    author-> {
    name,
    image,
  },
  keyword,
  slug,
  mainImage,
  description,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
  }`;
  const author = await client.fetch(authorQuery);
  const projects = await client.fetch(projectQuery);
  const blogs = await client.fetch(postQuery);

  return (
    <div className="justify-center sm:mx-10 ">
      <Hero />
      <div className="md:-mx-10 mt-[80px]  md:overflow-hidden">
        <About author={author[0]} />
        <Skills skills={author[0].skills} />
        <Portfolio projects={projects} key={projects.title} />
        <Blogs blogs={blogs} key={blogs._id} />
      </div>
    </div>
  );
}
