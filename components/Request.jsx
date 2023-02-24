import Image from 'next/image';
import React from 'react';
import {MdOutlineNotInterested} from 'react-icons/md';
import {IoPlay} from 'react-icons/io5';
import { markAsPlayed, markAsUnavailable } from '@/utils/functions';

function Request({song}) {
    return (
      <div className='rounded-md w-full bg-gray-50 p-4 flex flex-wrap items-center justify-between gap-4'>
        <div className='flex gap-4 items-center'>
          <Image
            width={100}
            height={100}
            className='rounded-md'
            alt={`${song.name}`}
            src={song.cover}
          />
          <div className='flex flex-col gap-2 items-start'>
            <h2 className='font-bold'>{song.name}</h2>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <button onClick={() => markAsPlayed(song._id)} className='text-lg p-[0.6em] flex items-center gap-2 bg-slate-800 text-white'>
            <IoPlay />
            <p className='max-md:hidden flex text-base'>Mark as played</p>
          </button>
          <button onClick={() => markAsUnavailable(song._id)} className='text-lg  p-[0.6em] bg-red-50 text-red-400 ring-red-300 flex items-center gap-2'>
            <MdOutlineNotInterested />
            <p className='max-md:hidden flex text-base'>Not Available</p>
          </button>
        </div>
      </div>
    );
  
}

export default Request
