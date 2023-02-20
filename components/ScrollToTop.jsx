import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setVisible(scrollTop > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <button
      onClick={handleClick}
      className={`bg-slate-700 duration-300 border-white transition-all focus:!ring-2 z-xl fixed flex bottom-8 right-8 h-8 w-8 rounded-md items-center justify-center ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <FaArrowUp className='text-white' />
      <span className='sr-only'>Back to top</span>
    </button>
  );
}

export default ScrollToTop;
