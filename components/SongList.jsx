import { useSongs } from '@/store';
import { fetchSongs } from '@/utils/functions';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from './shared/Spinner';
import Song from './Song';

function SongList() {
  const [maxIndex, setMaxIndex] = useState(50);
  const { setSongs } = useSongs();
  const { data, isLoading, error, isError } = useQuery(['songs'], fetchSongs);
  useEffect(() => {
    if (data) {
      setSongs(data);
    }
  }, [data, setSongs]);
  if (isLoading) {
    return (
      <div className='min-h-[300px] flex items-center justify-center gap-2 flex-col'>
        <Spinner />
        <p className='font-medium text-lg'>Getting songs</p>
      </div>
    );
  }
  if (isError) {
    console.log(error);
    return <p>Error</p>;
  }

  return (
    <div>
      <div className='w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
        {data.map((song, index) => {
          if (index > maxIndex) return;
          return <Song key={song.id} song={song} />;
        })}
      </div>
      <div className='p-4'>
        <button
          onClick={() => setMaxIndex(maxIndex + 10)}
          className={`w-full max-w-xs py-2 px-3 bg-slate-800 text-white ${
            maxIndex === 200 && 'hidden'
          }`}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default SongList;
