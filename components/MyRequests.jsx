import { getMyRequests, getRelativeTime } from '@/utils/functions';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from './shared/Spinner';

function MyRequests() {
  const { data, isLoading, isError, error } = useQuery(
    ['my-requests'],
    getMyRequests
  );
  if (isLoading) {
    return (
      <div className='max-h-[300px] flex flex-col gap-2 items-center justify-center'>
        <Spinner />
        <p>Getting your requests</p>
      </div>
    );
  }

  if (isError) {
    console.log(error);
    <div className='bg-red-100 p-4 flex items-center justify-center'>
      <p>There was an error</p>
    </div>;
  }
  if (data?.length === 0) {
    return (
      <div className='w-full rounded-md p-4 bg-yellow-50 flex items-center justify-center'>
        <p>
          Oops! Looks like you haven&#39;t made a request yet. Please make a
          request and try again!
        </p>
      </div>
    );
  }
  return (
    <div className='w-full z-40 p-2 flex flex-col gap-2'>
      {data.map((item) => (
        <RequestCard item={item} key={item._id} />
      ))}
    </div>
  );
}

function RequestCard({ item }) {
  return (
    <div className='w-full rounded-md p-3 bg-gray-50'>
      <div className='flex flex-col items-start gap-2 w-full'>
        <p>
          <b>{item.name}</b> by <b>{item.artist}</b>
        </p>
        <div className='flex items-center text-[9px]'>
          {item.isAvailable && <p className='badge'>Available</p>}
          {item.isPlayed && <p className='badge'>Played</p>}
        </div>
        <p>Requested {getRelativeTime(item.requestedOn)}</p>
      </div>
    </div>
  );
}
export default MyRequests;
