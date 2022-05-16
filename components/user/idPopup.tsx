import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useLocale } from '@libs/client/useLocale';
import { cls, clsFilter } from '@libs/client/utils';

interface IProps {
  username: string;
  closePopup: () => void;
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

export default function Popup({ username, closePopup }: IProps) {
  const { locale, text } = useLocale();
  useEffect(() => {
    disableBodyScroll(document.body);
    return () => {
      enableBodyScroll(document.body);
    };
  }, []);
  return (
    <div
      onClick={closePopup}
      className='fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.6)]'
    >
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
          return;
        }}
        variants={popupVar}
        initial='invisible'
        animate='visible'
        exit='exit'
        className='w-[43.75rem] rounded bg-white p-12 md:w-[330px] md:py-9 md:px-3.5'
      >
        <div
          className={cls(
            clsFilter(
              locale,
              'font-nexonBold',
              'font-notoSans',
              'font-notoSans'
            ),
            'flex justify-center text-3xl font-bold md:text-2xl'
          )}
        >
          {text.findIdPopup['1']}
        </div>

        <div className='mt-3 flex justify-center'>{text.findIdPopup['2']}</div>

        <div className='mt-12 flex h-20 items-center justify-center bg-[#f4f9fb] text-lg font-medium md:mt-8 md:h-[2.813rem] md:text-base'>
          {username}
        </div>

        <Link href='/login'>
          <a>
            <div className='mt-6 flex cursor-pointer justify-center rounded bg-[#2fb6bc] py-4 text-lg font-medium text-white transition-all hover:opacity-90 md:py-2.5 md:text-base'>
              {text.findIdPopup['3']}
            </div>
          </a>
        </Link>

        <div className='my-6 h-px bg-[#d6d6d6]' />

        <Link href='/reset-pw'>
          <a>
            <div className='flex justify-center font-medium text-[#6b6b6b] md:text-sm'>
              {text.findIdPopup['4']}
            </div>
          </a>
        </Link>
      </motion.div>
    </div>
  );
}
