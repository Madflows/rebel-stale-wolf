import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import Navbar from '../Navbar';

function Layout({ children }) {
  const { pathname } = useRouter();

  return (
    <Fragment>
      <Navbar />
      <div  >{children}</div>
    </Fragment>
  );
}

export default Layout;
