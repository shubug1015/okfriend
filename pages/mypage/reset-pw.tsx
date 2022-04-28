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
import { useUser } from '@libs/client/useUser';
import { usersApi } from '@libs/api';

interface IForm {
  password: string;
  passwordCheck: string;
}

const ResetPw: NextPage = () => {
  const { token } = useUser({ isPrivate: true });
  const [editMyInfos] = useMutation(usersApi.editInfos);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IForm>({
    mode: 'onChange',
  });
  const onValid = ({ password }: IForm) => {
    try {
      const req = {
        password,
        token,
      };
      editMyInfos({ req });
      alert('비밀번호 변경이 완료되었습니다.');
    } catch {
      alert('Error');
    }
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

          <div className='grow space-y-6'>
            <div className='text-2xl font-bold'>내 강의실</div>

            <div className='divide-y-[#eeeeee] divide-y rounded border border-[#d6d6d6] p-10'>
              <div className='flex h-20 items-center'>
                <div className='w-48 font-medium text-[#6b6b6b]'>
                  현재 비밀번호
                </div>

                <div>**********</div>
              </div>

              <div className='flex h-20 items-center'>
                <div className='w-48 font-medium text-[#6b6b6b]'>
                  새 비밀번호
                </div>

                <div>
                  <input
                    type='password'
                    placeholder='새 비밀번호'
                    {...register('password', {
                      value: '',
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
                    className='outline-none placeholder:text-[#d6d6d6]'
                  />

                  <div className='mt-2 text-xs text-red-500'>
                    {errors?.password?.message}
                  </div>
                </div>
              </div>

              <div className='flex h-20 items-center'>
                <div className='w-48 font-medium text-[#6b6b6b]'>
                  새 비밀번호 확인
                </div>

                <div>
                  <input
                    type='password'
                    placeholder='새 비밀번호 확인'
                    {...register('passwordCheck', {
                      value: '',
                      required: '비밀번호를 입력해주세요',
                      validate: {
                        notPwCheck: (value) =>
                          value === watch('password') ||
                          '비밀번호가 일치하지 않습니다',
                      },
                    })}
                    className='outline-none placeholder:text-[#d6d6d6]'
                  />
                </div>

                <div className='mt-2 text-xs text-red-500'>
                  {errors?.passwordCheck?.message}
                </div>
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

export default ResetPw;
