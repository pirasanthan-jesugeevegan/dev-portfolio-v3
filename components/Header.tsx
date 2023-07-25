'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import LogoWhite from 'assets/logo.svg';
import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Icon } from '@iconify/react';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const menuItems = [
    {
      path: 'about',
      label: 'About',
    },
    {
      path: 'skills',
      label: 'Skills',
    },
    {
      path: 'portfolio',
      label: 'Portfolio',
    },
    {
      path: 'blog',
      label: 'Blog',
    },
  ];

  return (
    <motion.section
      animate={{ y: [-50, 0] }}
      className="fixed inset-x-0 top-0 z-50 shadow-md bg-secondary "
    >
      <nav className="container flex items-center justify-between px-5 py-5 mx-auto space-x-2 font-bold">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              className="rounded-full"
              src={LogoWhite}
              width={50}
              height={50}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex">
          {menuItems.map(({ path, label }, i) => (
            <ScrollLink
              activeClass="active"
              to={path}
              href={`#${path}`}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}
              className="items-center hidden px-5 py-3 mx-2 text-sm text-center text-white rounded-lg md:text-base md:block"
            >
              {label}
            </ScrollLink>
          ))}
          <Link
            href="https://www.linkedin.com/in/pirasanth-jesugeevegan/"
            className="px-5 py-3 mx-2 text-sm md:text-base bg-primary text-[#252734] flex items-center rounded-lg text-center"
          >
            Contact
          </Link>
          <Link
            href="https://cdn.sanity.io/files/vsjc2cwt/production/4bc12cc417f2ab375099031780e981a6f585a6c1.pdf"
            className="px-5 py-3 mx-2 text-sm md:text-base bg-primary text-[#252734] flex items-center rounded-lg text-center"
          >
            <Icon icon="feather:download" />
            CV <p className="px-2 text-[8px]">(PDF)</p>
          </Link>
          <div className="flex items-center md:hidden">
            <button
              className="outline-none mobile-menu-button"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-primary"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </motion.section>
  );
}
