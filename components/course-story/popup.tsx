import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

interface IProps {
  data: { [key: string]: any }[];
  index: number;
  closePopup: () => void;
  prevPopup: () => void;
  nextPopup: () => void;
}

const popupVar = {
  invisible: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Popup({
  data,
  index,
  closePopup,
  prevPopup,
  nextPopup,
}: IProps) {
  useEffect(() => {
    disableBodyScroll(document.body);
    return () => {
      enableBodyScroll(document.body);
    };
  }, []);
  return (
    <div
      onClick={closePopup}
      className='fixed top-0 left-0 z-[9999] flex h-screen w-screen items-center justify-between overflow-y-scroll bg-[rgba(0,0,0,0.8)] px-12 md:px-4'
    >
      {index !== 0 ? (
        <div
          onClick={(e) => {
            e.stopPropagation();
            prevPopup();
          }}
          className='flex aspect-square w-9 cursor-pointer items-center justify-center rounded-full border border-white md:mr-4'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </div>
      ) : (
        <div className='w-9' />
      )}

      <motion.div
        onClick={(e) => {
          e.stopPropagation();
          return;
        }}
        variants={popupVar}
        initial='invisible'
        animate='visible'
        exit='exit'
        className='relative w-[1180px]'
      >
        <div className='mb-10 text-center text-[1.875rem] font-bold text-white md:mb-6 md:text-xl md:font-medium'>
          {data[index]?.name}
        </div>

        <div className='relative h-[41.5rem] w-full md:h-[11.625rem]'>
          <Image
            src={data[index]?.image}
            alt='Gallery Image'
            layout='fill'
            objectFit='cover'
            className='rounded'
          />
        </div>
      </motion.div>

      {index + 1 !== data.length ? (
        <div
          onClick={(e) => {
            e.stopPropagation();
            nextPopup();
          }}
          className='flex aspect-square w-9 cursor-pointer items-center justify-center rounded-full border border-white md:ml-4'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 5l7 7-7 7'
            />
          </svg>
        </div>
      ) : (
        <div className='w-9' />
      )}
    </div>
  );
}
