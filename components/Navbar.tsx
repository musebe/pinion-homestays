'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const Links = [
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
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-50'>
      <div className='md:flex items-center justify-between bg-black-100 py-4 md:px-10 px-7 text-white'>
        {/* logo section */}
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
          onClick={() => setOpen(!open)}
          className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'
        >
          {open ? (
            <XMarkIcon className='text-white' />
          ) : (
            <Bars3BottomRightIcon className='text-white' />
          )}
        </div>

        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black-100 md:z-auto z-40 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-12' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li className='md:ml-8 md:my-0 my-7' key={link.name}>
              <Link
                href={link.link}
                className={link.className}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

