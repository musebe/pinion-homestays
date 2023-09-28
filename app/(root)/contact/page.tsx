import React from 'react';

// SVG Icons
const PhoneIcon: React.FC = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M6.383 13.309a16.178 16.178 0 006.834 6.834l2.318-2.317a1 1 0 011.098-.219c1.516.608 3.134.92 4.768.928a1 1 0 001-1V4a1 1 0 00-1-1c-9.941 0-18 8.059-18 18a1 1 0 001 1c.097 0 .194-.004.291-.012a15.14 15.14 0 013.49-.926 1 1 0 01.803 1.309z'
      fill='currentColor'
    />
  </svg>
);

const EmailIcon: React.FC = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M21 4a1 1 0 00-1-1H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V9.414l-8 8-8-8V5h14v6.586l-6.293 6.293a1 1 0 001.414 1.414L12 13.414l6.293 6.293a.997.997 0 001.414 0 1 1 0 000-1.414L13.414 11.586V5h5.5z'
      fill='currentColor'
    />
  </svg>
);

const ContactPage: React.FC = () => {
  return (
    <div className='min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-900'>
      {/* Spacer for Navbar */}
      <div className='pt-20'></div>

      {/* Contact Us Section */}
      <div className='max-w-5xl mx-auto mb-12 text-white space-y-12'>
        <h1 className='text-4xl font-bold text-center mb-8 underline'>
          Pinion Homestays Machakos
        </h1>
        <p className='text-lg text-center'>
          The home is approximately: 40 minutes to Nairobi , 15 minutes to
          Machakos town, 10 minutes to Konza city, 10 minutes to Machakos
          People's park. We'd love to hear from you. Whether you have a question
          about rates, stays, or anything else, our team is ready to answer all
          your inquiries.
        </p>

        <div className='flex flex-wrap md:flex-nowrap space-y-6 md:space-y-0 md:space-x-6'>
          {/* Contact Details */}
          <div className='w-full md:w-1/2'>
            <h2 className='text-2xl font-bold mb-4'>Contact Details</h2>
            <ul className='space-y-4'>
              <li>
                <strong>Direct Line 1:</strong> +254-721784605
              </li>

              <li>
                <strong>Direct Line 2:</strong> +254-799353386
              </li>
              <li>
                <strong>Email:</strong> [Your Email Here]
              </li>
              <li>
                <strong>Location:</strong> Machakos, Kenya
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className='w-full md:w-1/2'>
            <div className='mt-8 space-y-4'>
              <div>
                <label
                  className='block text-white text-sm font-bold mb-2'
                  htmlFor='name'
                >
                  Name:
                </label>
                <input
                  className='w-full py-2 px-3 bg-white text-gray-900 rounded focus:outline-none focus:border-blue-500'
                  id='name'
                  type='text'
                  placeholder='Your Name'
                />
              </div>
              <div>
                <label
                  className='block text-white text-sm font-bold mb-2'
                  htmlFor='email'
                >
                  Email:
                </label>
                <input
                  className='w-full py-2 px-3 bg-white text-gray-900 rounded focus:outline-none focus:border-blue-500'
                  id='email'
                  type='email'
                  placeholder='Your Email'
                />
              </div>
              <div>
                <label
                  className='block text-white text-sm font-bold mb-2'
                  htmlFor='message'
                >
                  Message:
                </label>
                <textarea
                  className='w-full py-2 px-3 bg-white text-gray-900 rounded focus:outline-none focus:border-blue-500 h-32'
                  id='message'
                  placeholder='Your Message'
                ></textarea>
              </div>
              <div>
                <button
                  className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
                  type='button'
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className='bg-gray-700 h-64 rounded shadow-lg flex items-center justify-center text-xl'>
          Map Placeholder
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
