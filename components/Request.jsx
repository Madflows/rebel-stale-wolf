import Image from 'next/image';
import React from 'react'

function Request({song}) {
    return (
    <div className='rounded-md w-full bg-gray-100 p-4 flex flex-wrap items-center justify-between gap-4'>
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
      
    </div>
  );
  
}

export default Request
