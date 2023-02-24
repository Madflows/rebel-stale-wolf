import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className='min-h-[300px] p-4'>
      <div className='max-w-7xl w-full mx-auto lg:mt-[10dvh] grid grid-cols-1 lg:grid-cols-2 items-center'>
        <div className='flex flex-col gap-4 max-w-md'>
          <h2 className='text-2xl lg:text-6xl font-black'>
            Request Your Favorite Music, Hassle-Free
          </h2>
          <p className='text-justify'>
            Revolutionize your party experience with our innovative app! Say
            goodbye to the hassle of authentication and logging in. Our
            user-friendly interface lets you request your favorite music with
            ease.
          </p>
          <div className='flex gap-2 flex-wrap items-center max-md:justify-center w-full'>
            <Link href={"/request"} className='hero-btn'>Start Requesting</Link>
            <Link href={"/dj"} className='hero-btn-ghost'>Manage Requests</Link>
          </div>
        </div>
        <div className='p-4 flex items-center justify-center'>
          <div className='w-[400px] h-[400px] rounded-lg bg-gray-800 shadow-2xl' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
