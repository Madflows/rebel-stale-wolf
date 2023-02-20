import Layout from '@/components/shared/Layout';
import '@/styles/globals.css';
import { Fragment } from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create a client
const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <Toaster />
    </Fragment>
  );
}
