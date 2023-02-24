import Layout from '@/components/shared/Layout';
import '@/styles/globals.css';
import { Fragment } from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import localFont from '@next/font/local';

// Font files can be colocated inside of `pages`
const walsheim = localFont({
  subsets: ['latin'],
  src: [
    {
      path: 'fonts/GTWalsheimPro-Thin.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: 'fonts/GTWalsheimPro-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: 'fonts/GTWalsheimPro-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/GTWalsheimPro-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: 'fonts/GTWalsheimPro-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: 'fonts/GTWalsheimPro-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-walsheim',
});

// Create a client
const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <main className={`${walsheim.variable} font-sans`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Toaster />
        </main>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Fragment>
  );
}
