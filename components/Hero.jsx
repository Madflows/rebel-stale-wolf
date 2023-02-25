import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import {LilitaOne} from '@next/font/google'

const Hero = () => {
  return (
    <section className='min-h-[300px] p-4'>
      <div className='max-w-7xl w-full mx-auto lg:mt-[10dvh] grid grid-cols-1 lg:grid-cols-2 items-center'>
        <div className='flex flex-col gap-4 max-w-md'>
          <h2 className='text-2xl lg:text-6xl font-bold max-md:text-center'>
            Request Your Favorite Music
            <br />
            Hassle-Free
          </h2>
          <p className='text-left max-md:text-center'>
            Revolutionize your party experience with our innovative app! Say
            goodbye to the hassle of authentication and logging in. Our
            user-friendly interface lets you request your favorite music with
            ease.
          </p>
          <div className='flex gap-2 max-sm:flex-wrap items-center max-md:justify-center w-full'>
            <Link
              href={'/request'}
              className='hero-btn text-center rounded-[8px]'
            >
              Start Requesting
            </Link>
            <Link
              href={'/dj'}
              className='hero-btn-ghost text-center rounded-[8px]'
            >
              Manage Requests
            </Link>
          </div>
        </div>
        <div className='p-4 flex items-center justify-center'>
          <div className='w-[400px] h-[400px] rounded-lg overflow-hidden'>
            {/* <Image
              width={400}
              height={400}
              className='absolute inset-0 h-full w-full'
              src='/assets/floating-gradient.jpg'
              alt='grain'
            /> */}
            <h3
              className='relative bg-clip-text text-transparent grid grid-cols-3 text-[7em] w-full text-center leading-none font-black gap-2'
              style={{
                backgroundImage: 'url(/assets/floating-gradient.jpg)',
              }}
            >
              {['J', 'A', 'M', 'B', 'O', 'X'].map((item, index) => (
                <motion.span drag key={item + index}>{item}</motion.span>
              ))}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
