import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

function Navbar() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <nav className='w-full'>
      <div className='w-full max-w-7xl mx-auto p-4 flex items-center gap-6 justify-end'>
        <div className='flex items-center gap-4'>
          <button className='icon-btn'>
            <FaGithub />
          </button>
          <button className='icon-btn'>
            <FaTwitter />
          </button>
        </div>

        <Link role={"button"} href="/dj" className={`bg-slate-900 btn text-white py-2 px-4 ${pathname === '/dj' ? 'hidden' : 'flex'}`}>
          Switch to DJ
        </Link>
        <Link role={"button"} href="/" className={`bg-slate-900 btn text-white py-2 px-4 ${pathname === '/' ? 'hidden' : 'flex'}`}>
          Switch to User
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
