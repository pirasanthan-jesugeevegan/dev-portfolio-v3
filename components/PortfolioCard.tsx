import { Modal } from '@/components/Modal';
import Ribbon from '@/components/ui/ribbon';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import urlFor from '@/lib/urlFor';

export default function PortfolioCard({ ...props }) {
  const { icons, image, name, tag } = props;

  return (
    <Modal data={props}>
      <div className="relative max-w-[350px] hover:[box-shadow:_3px_3px_24px_0px_#ffc35b;] transition-all w-full">
        {tag && <Ribbon>{tag}</Ribbon>}
        <Image
          src={urlFor(image).url()}
          alt={`${tag} on ${name}`}
          className="object-cover w-full"
          width={400}
          height={400}
        />
        <div className="rounded-b-lg bg-secondary-shaded pb-14">
          <p className="py-6 text-center text-white text-[28px] font-normal leading-[23px]">
            {name}
          </p>
          <div className="flex flex-wrap justify-center gap-5 px-2">
            {icons.map((icon: any) => (
              <Icon
                icon={
                  icon.includes('simple-icons') || icon.includes('mdi')
                    ? icon
                    : `simple-icons:${icon}`
                }
                key={icon}
                className="[&_path]:fill-primary text-5xl w-8"
                fill="#ffc35b"
              />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
