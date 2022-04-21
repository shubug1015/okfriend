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
  year: string;
  month: string;
  day: string;
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

              <div className='space-y-3'>
                <div className='font-medium'>국가</div>

                <div className='flex h-[3.75rem] items-center rounded border border-[#d6d6d6] bg-[#f8f8f8] pl-5 text-lg font-medium text-[#d6d6d6]'>
                  korea
                </div>
              </div>

              <div className='space-y-3'>
                <div className='font-medium'>이메일</div>

                <input
                  type='text'
                  placeholder='이메일'
                  {...register('email', {
                    required: '이메일을 입력해주세요',
                    validate: {
                      notEmail: (value) => {
                        const regEmail =
                          /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
                        if (regEmail.test(value)) {
                          return true;
                        } else {
                          return '올바른 이메일을 입력해주세요';
                        }
                      },
                    },
                  })}
                  className='h-[3.75rem] w-full rounded border border-[#d6d6d6] pl-5 text-lg font-medium outline-none placeholder:text-[#d6d6d6]'
                />
              </div>

              <div className='space-y-3'>
                <div className='font-medium'>휴대폰번호</div>

                <input
                  type='text'
                  placeholder='휴대폰번호'
                  {...register('phoneNum', {
                    required: '전화번호를 입력해주세요',
                    validate: {
                      notPhoneNum: (value) => {
                        const regPhoneNum =
                          /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
                        if (regPhoneNum.test(value)) {
                          return true;
                        } else {
                          return '올바른 전화번호를 입력해주세요';
                        }
                      },
                    },
                  })}
                  className='h-[3.75rem] w-full rounded border border-[#d6d6d6] pl-5 text-lg font-medium outline-none placeholder:text-[#d6d6d6]'
                />
              </div>

              <div className='flex w-full flex-col'>
                <label className='font-medium'>생년월일</label>

                {/* 년도 */}
                <div className='mt-2 flex h-[3.75rem] w-full space-x-3.5'>
                  <div className='w-1/3'>
                    <select
                      defaultValue='default'
                      {...register('year', {
                        required: '년도를 선택해주세요',
                        validate: {
                          notDefault: (value) =>
                            value !== 'default' || '년도를 선택해주세요',
                        },
                      })}
                      className={cls(
                        errors?.year?.message
                          ? 'border-red-500'
                          : 'border-[#d6d6d6]',
                        'h-full w-full rounded border bg-transparent pl-4 outline-none placeholder:text-sm'
                      )}
                    >
                      <option value='default' disabled hidden>
                        년(4자)
                      </option>
                      {[...Array(20)].map((_, index) => (
                        <option key={index}>{index + 2003}</option>
                      ))}
                    </select>
                  </div>
                  {/* 년도 */}

                  {/* 월 */}
                  <div className='w-1/3'>
                    <select
                      defaultValue='default'
                      {...register('month', {
                        required: '월을 선택해주세요',
                        validate: {
                          notDefault: (value) =>
                            value !== 'default' || '월을 선택해주세요',
                        },
                      })}
                      className={cls(
                        errors?.month?.message
                          ? 'border-red-500'
                          : 'border-[#d6d6d6]',
                        'h-full w-full rounded border bg-transparent pl-4 outline-none placeholder:text-sm'
                      )}
                    >
                      <option value='default' disabled hidden>
                        월
                      </option>
                      {[...Array(12)].map((_, index) => (
                        <option key={index}>{index + 1}</option>
                      ))}
                    </select>
                  </div>
                  {/* 월 */}

                  {/* 일 */}
                  <div className='w-1/3'>
                    <select
                      defaultValue='default'
                      {...register('day', {
                        required: '일을 선택해주세요',
                        validate: {
                          notDefault: (value) =>
                            value !== 'default' || '일을 선택해주세요',
                        },
                      })}
                      className={cls(
                        errors?.day?.message
                          ? 'border-red-500'
                          : 'border-[#d6d6d6]',
                        'h-full w-full rounded border bg-transparent pl-4 outline-none placeholder:text-sm'
                      )}
                    >
                      <option value='default' disabled hidden>
                        일
                      </option>
                      {[...Array(31)].map((_, index) => (
                        <option key={index}>{index + 1}</option>
                      ))}
                    </select>
                  </div>
                  {/* 일 */}
                </div>

                <div className='mt-2 text-sm text-red-500'>
                  {(errors?.year?.message ||
                    errors?.year?.message ||
                    errors?.year?.message) &&
                    '생년월일을 선택해주세요'}
                </div>
              </div>

              <div className='space-y-3'>
                <div className='font-medium'>자기소개</div>

                <textarea
                  placeholder='자유롭게 작성해보세요.'
                  {...register('introduction', {
                    required: '자기소개를 입력해주세요',
                  })}
                  className='h-44 w-full rounded border border-[#d6d6d6] pt-4 pl-5 text-lg font-medium outline-none placeholder:text-[#d6d6d6]'
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
