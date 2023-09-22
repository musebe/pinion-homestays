import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type HeroSectionProps = {
  title?: string;
  description?: string;
  imagePath?: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title = 'Your Title Here',
  description = 'Some vibrant and enticing description about your product, service, or content. Make it captivating!',
  imagePath = '/hero.jpeg',
}) => {
  return (
    <div className='grid md:grid-cols-2 w-full rounded-xl overflow-hidden'>
      {/* Text section container */}
      <div className='items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white md:block hidden'>
        <h1 className='heading1 mb-4 text-center'>{title}</h1>
        <p className='text-center'>{description}</p>
        {/* Call to Action button for larger screens */}
        <div className='mt-4 text-center'>
          <Link
            href='/contact'
            className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded'
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Image section */}
      <div>
        <Image
          src={imagePath}
          alt='Description of the Image'
          width={500}
          height={500}
          objectFit='cover'
        />
      </div>
    </div>
  );
};

export default HeroSection;
