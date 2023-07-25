import { Text } from '@/components/ui/text';
import Image from 'next/image';

export default function Filter() {
  return (
    <section className="h-fit  p-5 rounded-lg   mb-10 bg-[#252734]">
      <Text className="py-4 text-center">Filter by Author</Text>
      <div className="space-y-2.5">
        {authors.map((_) => (
          <div
            key={_.name}
            className="bg-[#323444] p-3 gap-3 cursor-pointer group rounded-lg flex items-center"
          >
            <Image
              src={_.image}
              alt={_.name}
              width={100}
              className="rounded-full group-hover:ring-1 "
              height={200}
            />
            <Text>{_.name}</Text>
          </div>
        ))}
      </div>
    </section>
  );
}

const authors = [
  {
    name: 'PJ',
    image:
      'https://cdn.sanity.io/images/vsjc2cwt/production/587f2d39c654eef3daa04a9001373a002b23b2a5-400x400.png',
  },
  {
    name: 'Thanchila',
    image:
      'https://cdn.sanity.io/images/vsjc2cwt/production/0763ddabdd3f23cdc320daf6d4009dbb3d79a0cb-400x400.png',
  },
];
