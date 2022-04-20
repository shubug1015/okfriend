import Header from '@components/mypage/header';
import CourseList from '@components/mypage/courseList';
import Navigator from '@components/mypage/navigator';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import useMutation from '@libs/client/useMutation';
import { cls } from '@libs/client/utils';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

interface IForm {
  email: string;
  phoneNum: string;
  introduction: string;
}

const Edit: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IForm>({
    mode: 'onChange',
  });
  const onValid = (data: IForm) => {
    // try {
    //   const req = {
    //     password: data.password,
    //     token,
    //   };
    //   editMyInfos({ req });
    // } catch {
    //   alert('Error');
    // }
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <>
      <SEO title='마이페이지' />

      <Header />

      <Layout padding='pt-12 pb-44'>
        <div className='mt-[4.5rem] flex space-x-20'>
          <Navigator />

          <div className='grow space-y-8'>
            <div className='text-2xl font-bold'>내 강의실</div>

            <div className='space-y-[1.875rem]'>
              <div className='h-20 items-center space-y-3'>
                <div className='font-medium'>이름</div>

                <div className='flex h-[3.75rem] items-center rounded border border-[#d6d6d6] bg-[#f8f8f8] pl-5 text-lg font-medium text-[#d6d6d6]'>
                  홍길동
                </div>
              </div>

              <div className='h-20 items-center space-y-3'>
                <div className='font-medium'>아이디</div>

                <div className='flex h-[3.75rem] items-center rounded border border-[#d6d6d6] bg-[#f8f8f8] pl-5 text-lg font-medium text-[#d6d6d6]'>
                  testid000
                </div>
              </div>

              <div className='h-20 items-center space-y-3'>
                <div className='font-medium'>국가</div>

                <div className='flex h-[3.75rem] items-center rounded border border-[#d6d6d6] bg-[#f8f8f8] pl-5 text-lg font-medium text-[#d6d6d6]'>
                  korea
                </div>
              </div>

              <div className='h-20 items-center space-y-3'>
                <div className='font-medium'>이메일</div>

                <input
                  type='text'
                  placeholder='이메일'
                  {...register('email', {
                    value: '',
                    required: '비밀번호를 입력해주세요',
                    validate: {
                      //   notPw: (value) => {
                      //   },
                    },
                  })}
                  className='h-[3.75rem] w-full rounded border border-[#d6d6d6] pl-5 text-lg font-medium placeholder:text-[#d6d6d6]'
                />
              </div>
            </div>

            <div className='flex justify-end'>
              <div
                onClick={handleSubmit(onValid, onInvalid)}
                className='cursor-pointer rounded bg-[#2fb6bc] py-4 px-14 font-bold text-white transition-all hover:opacity-90'
              >
                변경하기
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Edit;
