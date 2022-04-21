import { cls } from '@libs/client/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';

interface IProps {
  title: string;
  content: string;
  closePopup: () => void;
}

export default function Popup({ title, content, closePopup }: IProps) {
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
  return (
    <div
      onClick={closePopup}
      className='fixed top-32 left-0 z-50 flex h-[calc(100vh-8rem)] w-screen items-center justify-center bg-[rgba(0,0,0,0.2)]'
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
        className='relative w-[60rem] rounded bg-white py-16 px-12'
      >
        <div className='absolute top-8 right-8'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 cursor-pointer'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
            onClick={closePopup}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </div>

        <div className='text-center text-3xl font-bold'>
          2022 재외동포대학생모국연수 강의별{' '}
          <span className='text-[#2fb6bc]'>설문조사</span>
        </div>

        <div className='mt-2.5 text-center text-lg font-medium'>
          2022 OKFriends CyberCamp –Youth-
        </div>

        <div className='mt-6 border-t-2 border-dotted border-[#9e9e9e] pt-6 text-center text-lg font-medium text-[#6b6b6b]'>
          이 설문은 수강생 여러분들의 의견을 수렴하여 강의의 질적 수준을
          제고하기 위해 마련된 것입니다.
          <br />
          여러분의 성실한 응답을 부탁합니다.
        </div>

        <div></div>

        <div className='flex justify-center'>
          <div
            onClick={closePopup}
            className='mt-12 flex w-96 cursor-pointer justify-center rounded-lg bg-[#2fb6bc] py-4 text-lg font-medium text-white transition-all hover:opacity-90'
          >
            제출하기
          </div>
        </div>
      </motion.div>
    </div>
  );
}
