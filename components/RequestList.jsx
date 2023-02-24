import { getAllRequests } from '@/utils/functions';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import {AiOutlineFileDone} from 'react-icons/ai';
import Request from './Request';
import Spinner from './shared/Spinner';

function RequestList() {
  const [maxIndex, setMaxIndex] = useState(10);
  const { data, isLoading, error, isError } = useQuery(['requests'], getAllRequests, {
    refetchInterval: 1000,
    refetchIntervalInBackground: true
  });
 if (isLoading) {
   return (
     <div className='min-h-[300px] flex items-center justify-center gap-2 flex-col'>
       <Spinner />
       <p className='font-medium text-xs'>Getting requests</p>
     </div>
   );
 }
  if (isError) {
    console.log(error);
    return <p>Error</p>;
  }
  if (data.length === 0) {
    return (
      <div className='p-4 bg-yellow-50 rounded-xl gap-3 flex flex-col items-center justify-center min-h-[300px]'>
        <AiOutlineFileDone className='text-4xl text-slate-800' />
        <p className='text-center font-bold text-slate-800'>Wow, Looks like we&#39;re all caught up on requests!</p>
      </div>
    );
  }
  return (
    <div>
      <div className='w-full p-4 grid grid-cols-1 gap-4'>
        {data.map((song, index) => {
          if (index > maxIndex) return;
          return <Request key={song._id} song={song} />;
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
