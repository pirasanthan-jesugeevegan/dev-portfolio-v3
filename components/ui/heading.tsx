import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import { HtmlHTMLAttributes, forwardRef } from 'react';
import { useGlitch } from 'react-powerglitch';

type ImageType = typeof Image;
interface HeadingProps extends HtmlHTMLAttributes<ImageType> {
  alt?: string;
  src: string | StaticImageData;
}

const Heading = forwardRef<ImageType, HeadingProps>(
  ({ className, alt, src }, ref) => {
    const glitch = useGlitch();
    return (
      <Image
        alt={alt!}
        src={src}
        ref={glitch.ref}
        className={cn('', {}, className)}
      />
    );
  }
);

Heading.displayName = 'Heading';
export { Heading };
