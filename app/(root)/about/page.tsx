import React from 'react';

const RatesAndAboutPage: React.FC = () => {
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
    <div className='min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-900'>
      {/* Spacer for Navbar */}
      <div className='pt-20'></div>
      {/* About Us Section */}
      <div className='max-w-5xl mx-auto mb-12 text-white'>
        <h1 className='text-4xl font-bold text-center mb-8 underline'>
          Discover Ultimate Comfort
        </h1>
        <p className='mb-4 text-lg'>
          Experience the pinnacle of relaxation at our luxurious 2-bedroom
          accommodations situated along the scenic machakos-chumvi road at
          Kathome. Perfect for both fleeting visits and extended stays.
        </p>
        <ul className='list-disc list-inside'>
          <li>Own secure compound & parking</li>
          <li>Open outer space for games & barbecue</li>
          <li>Exceptional Lifestyle</li>
          <li>Complete 24/7 Security</li>
        </ul>
        <p className='mt-6 text-center italic font-semibold'>
          "Seamless Comfort for Memorable Stays"
        </p>
      </div>

      {/* Rates Section */}
      <div className='py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-5xl mx-auto'>
          <h1 className='text-4xl font-bold text-center mb-8 text-white underline'>
            Our Rates
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* Left Rate */}
            <div className='bg-opacity-30 bg-gray-700 hover:bg-opacity-40 transition duration-300 ease-in-out overflow-hidden shadow-lg rounded-lg p-6'>
              <h2 className='text-2xl font-semibold text-white mb-4'>
                {leftRate.title}
              </h2>
              {leftRate.description.map((desc, index) => (
                <p key={index} className='text-white mb-2'>
                  {desc}
                </p>
              ))}
            </div>

            {/* Right Rate */}
            <div className='bg-opacity-30 bg-gray-700 hover:bg-opacity-40 transition duration-300 ease-in-out overflow-hidden shadow-lg rounded-lg p-6'>
              <h2 className='text-2xl font-semibold text-white mb-4'>
                {rightRate.title}
              </h2>
              {rightRate.description.map((desc, index) => (
                <p key={index} className='text-white mb-2'>
                  {desc}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatesAndAboutPage;
