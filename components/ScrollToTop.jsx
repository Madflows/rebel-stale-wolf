import React, { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

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
      className={`bg-slate-700 duration-300 border-white transition-all focus:!ring-2 z-xl fixed flex bottom-8 right-8 p-[.6em] rounded-md items-center justify-center ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <AiOutlineArrowUp className='text-white text-lg' />
      <span className='sr-only'>Back to top</span>
    </button>
  );
}

export default ScrollToTop;
