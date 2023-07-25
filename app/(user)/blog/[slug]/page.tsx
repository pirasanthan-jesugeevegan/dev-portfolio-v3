/* eslint-disable @next/next/no-async-client-component */
'use client';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { client } from '../../../../lib/sanity.client';
import urlFor from '../../../../lib/urlFor';
import { PortableText } from '@portabletext/react';
import { RichTextComponent } from '../../../../components/RichTextComponent';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import ShareLogo from '@/components/ShareSocial';

type Props = {
  params: {
    slug: string;
  };
};
const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
        ...,
         "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
         'comments': *[
          _type == "comment" &&
          post._ref == ^._id &&
          approved == true
        ],
        author ->,
        categories[]->
    }
    `;
async function Post({ params: { slug } }: Props) {
  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 ">
        <Image
          className="object-cover object-center mx-auto lg:w-3/4"
          src={urlFor(post.mainImage).url()}
          alt={post.author.name}
          width={1200}
          height={800}
        />

        <div className="flex">
          <div className="w-[15%] hidden md:block"></div>
          <div className="md:w-[70%] overflow-clip">
            <Link
              href={'/blog'}
              className="flex items-center gap-2 border-b border-dashed group w-fit border-primary pt-2"
            >
              <div className="grid w-4 h-4 text-xs rounded-full place-content-center bg-primary">
                {' '}
                <Icon icon="octicon:arrow-left-16" />
              </div>
              <p className="text-primary group-hover:text-primary/80">
                Back to Blog page
              </p>
            </Link>
            <section className=" text-primary">
              <div className="flex flex-col justify-between md:flex-row gap-y-5">
                <div>
                  <h1 className="text-3xl font-extrabold pt-2">{post.title}</h1>
                  <h2 className="text-[20px] font-extrabold text-gray-500 pt-2">
                    {post.description}
                  </h2>
                  <div className="flex pt-2 pb-6">
                    <Image
                      src={urlFor(post.author?.image).url()}
                      alt={`Author ${post.author.name}`}
                      width={60}
                      height={60}
                      className="rounded-full shadow-md group-hover:shadow-xl"
                    />
                    <div className="grow p-[5px]">
                      <p className=" text-primary">{post.author.name}</p>
                      <p className="text-white">
                        {new Date(post.publishedAt).toLocaleDateString('en', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}{' '}
                        • {post.estimatedReadingTime} {'min read'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <PortableText value={post.body} components={RichTextComponent} />
            <div className="flex items-center gap-2 py-6">
              Tagged with:
              {post.categories.map((_) => (
                <div className="px-2 py-1 rounded bg-primary" key={_.title}>
                  {_.title}
                </div>
              ))}
            </div>
            <div className="flex ">
              <div className=" flex  w-1/2">
                <div className="flex items-center px-2">
                  <Icon
                    className="text-2xl mx-1"
                    icon="ant-design:like-outlined"
                  />
                  {post.comments.length}
                </div>
                <div className="flex items-center px-2">
                  <Icon
                    className="text-2xl mx-1"
                    icon="majesticons:comment-2-text-line"
                  />{' '}
                  {post.comments.length}
                </div>
              </div>
              <div className="w-1/2 ">
                <ShareLogo post={post} />
              </div>
            </div>
          </div>
          <div className="w-[15%] hidden md:block"></div>
        </div>
        <div className="relative flex flex-col justify-between min-h-56 md:flex-row"></div>
      </section>
    </article>
  );
}

export default Post;
