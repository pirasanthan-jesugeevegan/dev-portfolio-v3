'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from '../components/ui/text';
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center mb-20">
      <div className="flex items-center gap-3">
        <Link href="/">
          <Image
            className="rounded-full"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MiIgaGVpZ2h0PSI3MiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0ZGQzM1QiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzYgNzJjMTkuODgyIDAgMzYtMTYuMTE4IDM2LTM2UzU1Ljg4MiAwIDM2IDAgMCAxNi4xMTggMCAzNnMxNi4xMTggMzYgMzYgMzZ6TTI2IDE5YTMgMyAwIDAxMy0zaDE0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTIgMCA2LjI5LTQuODQgMTEuNDUtMTEgMTEuOTU5di02LjA0MkE2LjAwMiA2LjAwMiAwIDAwNDMgMjJIMzJ2MjVhMyAzIDAgMTEtNiAwVjE5em0zIDM0YTYgNiAwIDAwNi02VjI1aDhhMyAzIDAgMTEwIDZoLTJ2MTZjMCA2LjYyNy01LjM3MyAxMi0xMiAxMnMtMTItNS4zNzMtMTItMTJhMyAzIDAgMTE2IDAgNiA2IDAgMDA2IDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
            width={40}
            height={40}
            alt="logo"
          />
        </Link>
        <Text sm primary>
          <span className="text-white">©2021</span> Pirasanthan Jesugeevegan
        </Text>
      </div>
      <div className="flex items-center gap-4">
        {social.map((_) => (
          <Link href={_.href} key={_.href}>
            <Icon className="[&_path]:fill-white" icon={_.icon} width={26} />
          </Link>
        ))}
      </div>
    </footer>
  );
}

const social = [
  { icon: 'akar-icons:linkedin-fill', href: '/' },
  { icon: 'mdi:github', href: '/' },
  { icon: 'mdi:instagram', href: '/' },
];
