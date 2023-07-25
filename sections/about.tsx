'use client';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import AboutImg from 'assets/About.png';
import Image from 'next/image';
import Link from 'next/link';
import { useGlitch } from 'react-powerglitch';
import urlFor from '@/lib/urlFor';

export default function About({ author }: { author: Author }) {
  const NEXT_PUBLIC_SANITY_PROJECT_ID =
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const NEXT_PUBLIC_SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const getUrlFromId = (ref: { split: (arg0: string) => [any, any, any] }) => {
    const [_file, id, extension] = ref.split('-');
    return `https://cdn.sanity.io/files/${NEXT_PUBLIC_SANITY_PROJECT_ID}/${NEXT_PUBLIC_SANITY_DATASET}/${id}.${extension}`;
  };

  const glitch = useGlitch();
  return (
    <section id="about" className="container mb-20">
      <div className="grid items-center grid-cols-1 gap-10 max-lg:justify-items-center md:grid-cols-2 ">
        <div className="px-5">
          <Heading className="-ml-5" src={AboutImg} />
          <Text primary className="relative z-10 -mt-4">
            {author.about.header}
          </Text>
          <Text>
            <br />
            {author.about.p1}
            <br />
            <br />
            {author.about.p2}
          </Text>
        </div>
        <div className="flex max-md:order-last items-center max-[400px]:w-full my-8 lg:w-screen w-max max-sm:p-1 bg-secondary-shaded rounded-xl h-min">
          <div ref={glitch.ref}>
            <Image
              src={urlFor(author.image).url()}
              alt="Profile Image"
              width={400}
              className="relative z-10 rounded rotate-6 ring-secondary ring-4 "
              height={400}
            />
          </div>
        </div>
        {author?.achievements &&
          author?.achievements.map((achievement: any) => (
            <Link
              href={getUrlFromId(achievement.document.asset._ref)}
              className="block lg:p-8"
              target="_blank"
              key={achievement.title}
            >
              <Image
                src={urlFor(achievement.value).url()}
                alt={achievement.title}
                width={180}
                height={180}
              />
            </Link>
          ))}
      </div>
    </section>
  );
}
