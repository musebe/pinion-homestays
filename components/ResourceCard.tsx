'use client';

import React, { useState } from 'react';
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import PopupCard from './PopupCard'; // Adjust path as needed

interface Props {
  id: string;
  title: string;
  description: string;
  image: string;
  downloadNumber: number;
  downloadLink: string;
}

const ResourceCard: React.FC<Props> = ({
  id,
  title,
  description,
  image,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && (
        <PopupCard
          title={title}
          description={description}
          image={image}
          onClose={() => setShowPopup(false)}
        />
      )}
      <Card className='w-full max-w-fit border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-gray-900 p-4 sm:max-w-[356px]'>
        <CardHeader
          className='cursor-pointer'
          onClick={() => setShowPopup(true)}
        >
          <div className='h-fit w-full mb-3'>
            <Image
              src={image}
              className='h-full rounded-md object-cover'
              width={500}
              height={500}
              alt={title}
            />
          </div>
          <CardTitle className='text-white paragraph-semibold line-clamp-1 w-full text-left'>
            {title}
          </CardTitle>
        </CardHeader>

        <CardFooter className='mt-3'>
          <button
            onClick={() => setShowPopup(true)}
            className='flex items-center gap-1 text-blue-600'
          >
            <span role='img' aria-label='eye'>
              👁️
            </span>
            Click for more details
          </button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ResourceCard;
