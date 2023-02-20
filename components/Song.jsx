import { getYearFromDate } from '@/utils/functions';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import Spinner from './shared/Spinner';
import axios from 'axios';

function Song({ song }) {
  const [addRequest, setAddRequest] = useState(false);

  function makeARequest() {
    return axios.post(
      'http://localhost:5000/api/request',
      {
        name: `${song.name} - ${song.artists[0].name}`,
        cover: `${song.album.cover[0].url}`,
      },
      {
        withCredentials: true,
      }
    );
  }
  const [loading, setLoading] = useState(false);
  const { isLoading, isError, error, isSuccess } = useQuery(
    ['addSong', song],
    makeARequest,
    {
      refetchOnWindowFocus: false,
      enabled: addRequest,
    }
  );
  useEffect(() => {
    if (isLoading && addRequest) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isLoading, addRequest]);
  useEffect(() => {
    if (isSuccess) {
      toast.success('Song add to request');
      setAddRequest(false);
    }
  }, [isSuccess]);
  useEffect(() => {
    if (isError) {
      console.log(error);
      toast.error('Error requesting your song');
      setAddRequest(false);

    }
  }, [isError, error]);

  return (
    <div className='rounded-md w-full bg-gray-100 p-4 flex flex-wrap items-center justify-between gap-4'>
      <div className='flex gap-4 items-center'>
        <Image
          width={100}
          height={100}
          className='rounded-md'
          alt={`${song.name}`}
          src={song.album.cover[0].url}
        />
        <div className='flex flex-col gap-2 items-start'>
          <h2 className='font-bold'>{song.name}</h2>
          <p className='text-xs font-medium text-slate-600'>
            {song.artists[0].name}
          </p>
          <p className='text-sm'>{getYearFromDate(song.album.date)}</p>
        </div>
      </div>
      <button
        onClick={() => setAddRequest(true)}
        className='py-2 px-3 text-sm font-bold rounded-md w-full md:w-fit bg-slate-800 text-white'
      >
        {!loading ? 'Add to request' : <Spinner />}
      </button>
    </div>
  );
}

export default Song;
