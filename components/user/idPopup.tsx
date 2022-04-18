import { cls } from '@libs/client/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';

interface IProps {
  username: string;
  closePopup: () => void;
}

export default function Popup({ username, closePopup }: IProps) {
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
      className='fixed top-[150px] left-0 z-50 flex h-[calc(100vh-150px)] w-screen items-center justify-center bg-[rgba(0,0,0,0.6)]'
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
        className='w-[43.75rem] rounded bg-white p-12'
      >
        <div className='flex justify-center text-3xl font-bold'>
          아이디 찾기
        </div>

        <div className='mt-3 flex justify-center'>
          아이디 찾기가 완료되었습니다.
        </div>

        <div className='mt-12 flex h-20 items-center justify-center bg-[#f4f9fb] text-lg font-medium'>
          {username}123
        </div>

        <Link href='/login'>
          <a>
            <div className='mt-6 flex cursor-pointer justify-center rounded bg-[#2fb6bc] py-4 text-lg font-medium text-white transition-all hover:opacity-90'>
              로그인
            </div>
          </a>
        </Link>

        <div className='my-6 h-px bg-[#d6d6d6]' />

        <Link href='/reset-pw'>
          <a>
            <div className='flex justify-center font-medium text-[#6b6b6b]'>
              비밀번호 찾기
            </div>
          </a>
        </Link>
      </motion.div>
    </div>
  );
}
