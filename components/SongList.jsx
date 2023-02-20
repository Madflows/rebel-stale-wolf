import { fetchSongs } from '@/utils/functions';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Song from './Song';

function SongList() {
  const { data, isLoading, error, isError } = useQuery(['songs'], fetchSongs);
  if (isLoading) {
    return <p>Getting songs</p>;
  }
  if (isError) {
    console.log(error);
    return <p>Error</p>;
  }
  return (
    <div className='w-full p-4 grid grid-cols-1 gap-4'>
      {data.map((song, index) => {
        if (index > 10) return;
        return <Song key={song.id} song={song} />;
      })}
    </div>
  );
}

export default SongList;
