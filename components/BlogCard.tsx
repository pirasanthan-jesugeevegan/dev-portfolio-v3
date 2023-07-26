import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import urlFor from '../lib/urlFor';

function BlogCard({
  author,
  categories,
  title,
  comments,
  likes,
  mainImage,
  slug,
  description,
  publishedAt,
  estimatedReadingTime,
}: Post) {
  return (
    <Link
      href={`/blog/${slug.current}`}
      className="block max-w-[350px] px-4 mt-10 rounded-lg hover:[box-shadow:_3px_3px_24px_0px_#ffc35b;] transition-all hover:ring-1  group bg-secondary-shaded group"
    >
      <Image
        src={urlFor(mainImage).url()}
        alt={title}
        className="w-full -mt-8 transition-all duration-500 rounded-lg group-hover:-translate-y-0.5 group-hover:drop-shadow-xl"
        width={400}
        height={400}
      />
      <div className="px-3">
        <div className="flex gap-2 py-6">
          {categories.map((_) => (
            <div className="px-2 py-1 rounded bg-primary" key={_.title}>
              {_.title}
            </div>
          ))}
        </div>

        <h1 className="box-border m-0 min-w-0 font-bold text-2xl text-left leading-normal text-white">
          {title}
        </h1>
        <h2 className="my-10 line-clamp-3 text-l text-left leading-normal text-white">
          {description}
        </h2>
        <div className="flex items-center gap-2 mb-8">
          <Image
            src={urlFor(author?.image).url()}
            alt={`Author ${author.name}`}
            width={60}
            height={60}
            className="rounded-full shadow-md group-hover:shadow-xl"
          />
          <div className="grow">
            <p className="text-white">{author.name}</p>
            <p className="text-white">
              {new Date(publishedAt).toLocaleDateString('en', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}{' '}
              • {estimatedReadingTime} {'min'}
            </p>
          </div>
          <div className="[&_path]:fill-primary flex gap-1 items-center">
            <Icon icon={'ant-design:like-outlined'} width={24} />
            <p className="text-white">{likes}</p>
            <Icon icon={'mi:message'} width={24} />
            <p className="text-white">{comments.length}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default BlogCard;
