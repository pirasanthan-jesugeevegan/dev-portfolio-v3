import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes, forwardRef } from 'react';

interface TextProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
  primary?: boolean;
  sm?: boolean;
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, primary, sm, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(
          'leading-[38.40px] text-xl md:text-2xl text-white',
          { 'text-primary': primary, 'text-base': sm },
          className
        )}
      />
    );
  }
);

Text.displayName = 'Text';
export { Text };
