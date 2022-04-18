import Input from '@components/input';
// import { usersApi } from '@libs/api';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

interface IProps {
  username: string;
  closePopup: () => void;
}

interface IForm {
  password: string;
  passwordCheck: string;
}

export default function Popup({ username, closePopup }: IProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm<IForm>({
    mode: 'onChange',
  });
  const onValid = async (data: IForm) => {
    // try {
    //   await usersApi.resetPw(username, data.password);
    //   router.push('/login');
    // } catch {
    //   alert('Error');
    // }
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

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
          비밀번호 재설정
        </div>

        <div className='mt-12 w-full space-y-8'>
          <Input
            type='password'
            label='새 비밀번호'
            register={register('password', {
              required: '비밀번호를 입력해주세요',
              validate: {
                notPw: (value) => {
                  const regPw =
                    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
                  if (regPw.test(value)) {
                    return true;
                  } else {
                    return '비밀번호는 8자리 이상 / 1개 이상의 문자, 숫자, 특수문자가 포함되어야 합니다';
                  }
                },
              },
            })}
            error={errors?.password?.message}
          />

          <Input
            type='password'
            label='새 비밀번호 확인'
            register={register('passwordCheck', {
              required: '비밀번호를 입력해주세요',
              validate: {
                notPwCheck: (value) =>
                  value === watch('password') || '비밀번호가 일치하지 않습니다',
              },
            })}
            error={errors?.passwordCheck?.message}
          />
        </div>

        <div
          onClick={handleSubmit(onValid, onInvalid)}
          className='mt-6 flex cursor-pointer justify-center rounded text-white bg-[#2fb6bc] py-4 text-lg font-medium transition-all hover:opacity-90'
        >
          패스워드 재설정 완료
        </div>
      </motion.div>
    </div>
  );
}
