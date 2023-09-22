import React from 'react';

const RatesSection: React.FC = () => {
  // Define the rate information directly within the component
  const leftRate = {
    title: 'Single Night Bookings',
    description: [
      'Ksh 4,500 per night for a single booking.',
      'Negotiable for Groups.',
    ],
  };

  const rightRate = {
    title: 'Long Stays Monthly Rate',
    description: [
      'For long stays, the monthly rates are Ksh 80,000.',
      'This price is negotiable.',
    ],
  };

  return (
    <div className='bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-5xl mx-auto'>
        <h1 className='text-3xl font-bold text-center mb-8'>Rates</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Left Rate */}
          <div className='bg-white overflow-hidden shadow rounded-lg p-6'>
            <h2 className='text-xl font-semibold text-gray-700 mb-4'>
              {leftRate.title}
            </h2>
            {leftRate.description.map((desc, index) => (
              <p key={index} className='text-gray-600 mb-2'>
                {desc}
              </p>
            ))}
          </div>

          {/* Right Rate */}
          <div className='bg-white overflow-hidden shadow rounded-lg p-6'>
            <h2 className='text-xl font-semibold text-gray-700 mb-4'>
              {rightRate.title}
            </h2>
            {rightRate.description.map((desc, index) => (
              <p key={index} className='text-gray-600 mb-2'>
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatesSection;
