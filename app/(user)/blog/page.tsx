'use client';
import { Text } from '@/components/ui/text';
import { client } from '@/lib/sanity.client';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import BlogCard from '@/components/BlogCard';
import Filter from '../../../components/Filter';
import { Input } from '../../../components/Input';
import { groq } from 'next-sanity';

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

async function fetcher() {
  return await client.fetch(postQuery);
}

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    fetcher().then((_) => setPosts(_));
  }, []);

  return (
    <section className="container py-20">
      <Input
        onChange={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
        className="mb-10 -mt-5 max-md:-mt-14 md:hidden"
      />
      <Link
        href={'/'}
        className="flex items-center gap-2 border-b border-dashed group w-fit border-primary "
      >
        {/* back to home */}
        <div className="grid w-4 h-4 text-xs rounded-full place-content-center bg-primary">
          <Icon icon="octicon:arrow-left-16" />
        </div>{' '}
        <Text className="text-primary group-hover:text-primary/80">
          Back to Home page
        </Text>
      </Link>
      <div className="relative grid grid-cols-1 gap-4 my-10 max-sm:justify-items-center lg:grid-cols-3 md:grid-cols-2 md:gap-20">
        <Suspense fallback="loading">
          <div className="flex flex-wrap justify-evenly gap-4 lg:col-span-2 max-sm:justify-center">
            {posts
              .filter((_) =>
                _.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((_) => (
                <BlogCard {..._} key={_._id} />
              ))}
          </div>
        </Suspense>
        <div className="max-md:order-first md:sticky self-start md:top-32 max-w-[400px] w-full">
          <Input
            onChange={(e) =>
              setSearchQuery((e.target as HTMLInputElement).value)
            }
            className="max-md:hidden"
          />
          <Filter />
        </div>
      </div>
    </section>
  );
}
