import { getAllRequests } from '@/utils/functions';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import Request from './Request';

function RequestList() {
  const [maxIndex, setMaxIndex] = useState(10);
  const { data, isLoading, error, isError } = useQuery(['requests'], getAllRequests, {
    refetchInterval: 1000,
    refetchIntervalInBackground: true
  });
  if (isLoading) {
    return <p>Getting Requests</p>;
  }
  if (isError) {
    console.log(error);
    return <p>Error</p>;
  }
  return (
    <div>
      <div className='w-full p-4 grid grid-cols-1 gap-4'>
        {data.map((song, index) => {
          if (index > maxIndex) return;
          return <Request key={song.id} song={song} />;
        })}
      </div>
      <div className='p-4'>
        <button
          onClick={() => setMaxIndex(maxIndex + 10)}
          className={`w-full py-2 px-3 bg-slate-800 text-white ${
            maxIndex >= data.length && 'hidden'
          }`}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default RequestList;
