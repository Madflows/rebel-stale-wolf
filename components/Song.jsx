import { getYearFromDate } from '@/utils/functions';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import Spinner from './shared/Spinner';
import axios from 'axios';

function Song({ song }) {
  const [loading, setLoading] = useState(false);
  function makeARequest(song) {
    setLoading(true);
    axios
      .post(
        `https://stalewolf.onrender.com/api/request`,
        {
          name: `${song.name}`,
          artist: `${song.artists[0].name}`,
          year: `${getYearFromDate(song.album.date)}`,
          cover: `${song.album.cover[0].url}`,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => res.data)
      .then(() => {
        toast.success(`${song.name} requested`);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
        setLoading(false);
      });
  }

  return (
    <div className='rounded-md w-full bg-gray-100 p-4 flex flex-wrap items-center justify-between gap-4'>
      <div className='flex gap-4 items-center'>
        <Image
          width={100}
          height={100}
          loading={"lazy"}
          className='rounded-md'
          alt={`${song.name}`}
          src={song.album.cover[0].url}
        />
        <div className='flex flex-col gap-2 items-start'>
          <h2 className='font-semibold text-slate-900 text-lg'>{song.name}</h2>
          <p className='text-xs font-medium text-slate-600'>
            {song.artists[0].name}
          </p>
          <p className='text-sm'>{getYearFromDate(song.album.date)}</p>
        </div>
      </div>
      <button
        onClick={() => makeARequest(song)}
        className='py-2 px-3 text-sm font-bold h-[40px] min-w-[150px] rounded-md w-full sm:w-fit bg-slate-800 text-white'
      >
        {loading ? <Spinner /> : 'Add to request'}
      </button>
    </div>
  );
}

export default Song;
