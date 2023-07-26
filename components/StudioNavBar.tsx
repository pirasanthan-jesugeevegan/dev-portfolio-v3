import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import { NavbarProps } from 'sanity';

function StudioNavBar(props: NavbarProps) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-primary flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-primary mr-2" />
          Go To Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavBar;
