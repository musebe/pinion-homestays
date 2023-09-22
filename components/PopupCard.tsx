import React from 'react';
import Image from 'next/image';

interface PopupCardProps {
  title: string;
  description: string;
  image: string;
  onClose: () => void;
}

const CloseIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M6 18L18 6M6 6l12 12'
    />
  </svg>
);

const PopupCard: React.FC<PopupCardProps> = ({
  title,
  description,
  image,
  onClose,
}) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div
        className='bg-black bg-opacity-50 absolute inset-0'
        onClick={onClose}
      ></div>

      <div className='relative w-full max-w-2xl bg-gray-900 border border-gray-700 rounded-lg shadow-xl transition-transform transform scale-95 hover:scale-100'>
        <div className='relative'>
          <button
            onClick={onClose}
            className='absolute top-2 right-2 bg-white p-2 rounded-full transition-colors hover:bg-gray-200'
            aria-label='Close'
          >
            <CloseIcon />
          </button>
          <Image
            src={image}
            className='rounded-t-lg object-cover'
            width={800}
            height={450}
            alt={title}
          />
        </div>

        <div className='text-white p-4'>{description}</div>
      </div>
    </div>
  );
};

export default PopupCard;
