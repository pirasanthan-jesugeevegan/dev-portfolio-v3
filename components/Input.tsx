import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { HtmlHTMLAttributes, forwardRef } from 'react';

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          'mb-2 max-md:sticky top-[88px]  md:top-32 z-50 bg-[#252734] max-w-md mx-auto focus-within:ring-1 px-5 group text-neutral-400 flex items-center ring-primary rounded-lg focus-within:shadow-2xl  shadow-primary',
          {},
          className
        )}
      >
        <input
          ref={ref}
          {...props}
          className="w-full py-3 bg-transparent outline-none "
          placeholder="Search Blogs"
        />
        <Icon
          icon="ion:search"
          className="p-2 text-4xl rounded-lg cursor-pointer group-focus-within:text-primary hover:bg-primary/10"
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
export { Input };
