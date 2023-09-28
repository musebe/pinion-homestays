'use client';

import React, { FC, useState } from 'react';
import Link from 'next/link';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

type LinkType = {
  name: string;
  link: string;
  className: string;
};

const Navbar: FC = () => {
  const links: LinkType[] = [
    {
      name: 'Home',
      link: '/',
      className: 'body-text !font-normal',
    },
    {
      name: 'About Us',
      link: '/about',
      className: 'body-text text-gradient_blue-purple !font-bold',
    },
    {
      name: 'Contact Us',
      link: '/contact',
      className: 'body-text !font-normal',
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-50'>
      <div className='md:flex items-center justify-between py-7 md:px-10 px-7 bg-black-100 text-white'>
        {/* Logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <Link
            href='/'
            className='body-text text-gradient_blue-purple !font-bold'
          >
            Pinion Homestays
          </Link>
        </div>

        {/* Menu icon */}
        <div
          onClick={toggleMenu}
          className='absolute right-8 top-1/2 transform -translate-y-1/2 cursor-pointer md:hidden w-7 h-7'
        >
          {isMenuOpen ? (
            <XMarkIcon className='text-white' />
          ) : (
            <Bars3BottomRightIcon className='text-white' />
          )}
        </div>

        {/* Link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black-100 md:z-auto z-40 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isMenuOpen ? 'top-12' : 'top-[-490px]'
          }`}
        >
          {links.map(({ name, link, className }) => (
            <li key={name} className='md:ml-8 md:my-0 my-7'>
              <Link href={link} className={className} onClick={toggleMenu}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
