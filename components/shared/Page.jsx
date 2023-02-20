import Head from 'next/head';
import React, { Fragment } from 'react';

const Page = ({ children, title = 'Stale Wolf' }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <main className='w-full'>
        <div className='flex flex-col w-full max-w-7xl mx-auto p-4'>
          {children}
        </div>
      </main>
    </Fragment>
  );
};

export default Page;
