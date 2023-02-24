import { SongList } from '@/components';
import Hero from '@/components/Hero';
import Page from '@/components/shared/Page';
import Head from 'next/head';
import { Fragment } from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>JamBox - Request your favorite music.</title>
      </Head>
      <div>
        <Hero />
      </div>
    </>
  );
}
