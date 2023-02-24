import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { FaGithub, FaStar, FaTwitter } from 'react-icons/fa';
import MyRequests from './MyRequests';

function Navbar() {
  const router = useRouter();
  const { pathname } = router;
  const [showMyRequests, setShowMyRequests] = useState(false);

  return (
    <nav
      className={`w-full ${pathname === '/bnfbnd' && 'bg-black text-white'}`}
    >
      <div className='w-full max-w-7xl mx-auto p-4 flex items-center gap-6 justify-between relative'>
        <Link href={'/'}>
          <h2 className='text-lg font-bold'>JamBox</h2>
        </Link>
        <div className='flex items-center gap-4'>
          <button
            onClick={() => setShowMyRequests(showMyRequests ? false : true)}
            className='flex items-center gap-2'
          >
            <FaStar />
            <p>My Requests</p>
          </button>

          <div className='flex items-center gap-4'>
            <button className={`icon-btn`}>
              <FaGithub />
            </button>
            <button className={`icon-btn`}>
              <FaTwitter />
            </button>
          </div>
        </div>

        <AnimatePresence
        
        >
          {showMyRequests && (
            <ClickAwayListener onClickAway={() => setShowMyRequests(false)}>
              <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className='absolute scrollbar-hide lg:border border-slate-200 top-[100%] max-h-[80vh] overflow-y-scroll max-md:left-[50%] max-md:translate-x-[-50%] md:right-0 py-6 px-2 rounded-xl shadow-md w-full max-w-sm bg-white'>
                <MyRequests />
              </motion.div>
            </ClickAwayListener>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
