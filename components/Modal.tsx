import { Icon } from '@iconify/react';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import urlFor from '@/lib/urlFor';

export const Modal = ({
  children,
  data: { image, name, card },
}: {
  children: React.ReactNode;
  data: any;
}) => (
  <Dialog.Root>
    <Dialog.Trigger>{children}</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 pointer-events-none backdrop-blur-md" />
      <Dialog.Content className="fixed z-50 p-8 overflow-y-scroll border border-white inset-4 md:inset-x-40 bg-secondary">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-primary">{name}</h1>
          <Dialog.Close>
            <Icon icon={'basil:cross-solid'} color="#fff" width={40} />
          </Dialog.Close>
        </div>
        {/* content */}
        <section className="grid grid-cols-1 gap-4 mt-10 text-white lg:grid-cols-2">
          <div>
            <p>{card.description}</p>
            <h5 className="my-3 text-xl font-semibold underline">
              {card?.dev === true ? 'Feature:' : 'Test Scenario:'}
            </h5>
            <ul>
              {card.feature.map((feature: any) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <h5 className="my-3 text-xl font-semibold underline">
              TECHNOLOGIES USED:
            </h5>
            <ul className="list-disc list-inside">
              {card.tech.map((item: any) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <Image
            src={urlFor(image).url()}
            alt={name}
            className="object-cover justify-center"
            width={500}
            height={500}
          />{' '}
          <div className="flex">
            {card?.demo && (
              <button className="flex items-center gap-1 px-4 py-2 mr-3 text-xl uppercase rounded-lg w-min bg-primary text-secondary">
                <Icon icon={'bx:bx-show'} width={25} />
                Demo
              </button>
            )}
            {card?.code && (
              <button className="flex items-center gap-1 px-4 py-2 text-xl uppercase rounded-lg w-min bg-primary text-secondary">
                <Icon icon={'mdi:github'} width={25} />
                Code
              </button>
            )}
          </div>
        </section>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
