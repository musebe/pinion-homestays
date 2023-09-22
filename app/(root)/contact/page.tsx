import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className='min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-900'>
      {/* Spacer for Navbar */}
      <div className='pt-20'></div>

      {/* Contact Us Section */}
      <div className='max-w-5xl mx-auto mb-12 text-white'>
        <h1 className='text-4xl font-bold text-center mb-8 underline'>
          Get in Touch
        </h1>
        <p className='mb-4 text-lg'>
          We'd love to hear from you. Whether you have a question about rates,
          stays, or anything else, our team is ready to answer all your
          inquiries.
        </p>

        {/* Contact Form */}
        <div className='mt-8'>
          <div className='mb-4'>
            <label
              className='block text-white text-sm font-bold mb-2'
              htmlFor='name'
            >
              Name:
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              placeholder='Your Name'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-white text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email:
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Your Email'
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-white text-sm font-bold mb-2'
              htmlFor='message'
            >
              Message:
            </label>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32'
              id='message'
              placeholder='Your Message'
            ></textarea>
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
