// @ts-nocheck
'use client';
import { Heading } from '@/components/ui/heading';
import BlogCard from '@/components/BlogCard';
import BlogImg from 'assets/Blog.png';
import Link from 'next/link';

export default function Blogs({ blogs }) {
  const random = blogs.sort(() => (Math.random() > 0.5 ? 1 : -1));
  blogs = random.slice(0, 3);

  return (
    <section id="blog" className="container my-40 lg:my-56 ">
      <div className="flex items-center justify-between -mb-6 ">
        <Heading src={BlogImg} className="relative shrink-0 -z-10 min-w-fit" />
        <Link
          href={'/blog'}
          className="text-primary underline underline-offset-2 whitespace-nowrap text-[19px] font-normal leading-[30.72px]"
        >
          See full list of blogs
        </Link>
      </div>
      <div className="relative flex flex-wrap justify-evenly gap-4 max-sm:justify-center">
        {blogs.map((_) => (
          <BlogCard {..._} key={_._id} />
        ))}
      </div>
    </section>
  );
}
