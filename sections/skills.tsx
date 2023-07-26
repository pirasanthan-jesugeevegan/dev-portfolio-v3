'use client';
import React from 'react';
import Image from 'next/image';
import Header from 'assets/Skills.png';
import { Icon } from '@iconify/react';
import { useGlitch } from 'react-powerglitch';
import { Heading } from '@/components/ui/heading';
interface Skill {
  _key: string;
  altText: string;
  imgSrc: string;
  order?: number;
  title: string;
}
interface Props {
  skills: Skill[];
}

function Skills({ skills }: Props) {
  return (
    <section id='skills' className='relative -mx-8 bg-secondary-shaded top-24'>
      <div className='container px-4'>
        <Heading src={Header} className='relative px-4 -top-20' />
        <div className='pb-2 sm:pb-24'>
          <div className='px-10 lg:px-8'>
            <div className='grid items-center grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
              {skills.map((skill) => (
                <div
                  key={skill._key}
                  className='flex items-center [&_path]:fill-primary'
                >
                  <Icon
                    className='object-contain col-span-2 lg:col-span-1'
                    icon={skill.imgSrc}
                    width='70'
                  />
                  <div className='ml-10 text-xl text-primary'>
                    {skill.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <br />
        </div>
      </div>
    </section>
  );
}

export default Skills;
