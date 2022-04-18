import SEO from '@components/seo';
import type { NextPage } from 'next';
import React, { useState } from 'react';
// import { usersApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import { FieldErrors, useForm } from 'react-hook-form';
import Input from '@components/input';
import { cls } from '@libs/client/utils';
import Checkbox from '@components/checkbox';
// import axios from 'axios';
// import { useAuth } from '@libs/client/useAuth';

interface IForm {
  username: string;
  password: string;
  passwordCheck: string;
  korName: string;
  engName: string;
  email: string;
  code: string;
  phoneNum: string;
  serviceAgree: boolean;
  privacyAgree: boolean;
  ageOver: string;
  adAgree: string;
}

const SignUp: NextPage = () => {
  // const { mutate } = useAuth({
  //   isPrivate: false,
  // });
  const [signup, { loading }] = useMutation('');
  const [code, setCode] = useState({
    loading: false,
    sended: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
    getValues,
  } = useForm<IForm>({
    mode: 'onChange',
  });
  const onValid = async (data: IForm) => {
    // const req = {
    //   name: data.name,
    //   nickname: data.nickname,
    //   phoneNum: data.phoneNum,
    //   username: data.username,
    //   password: data.password,
    //   adAgree: data.adAgree,
    // };
    // await signup({ req });
    // const {
    //   data: { token, profile },
    // } = await axios.get('/api/auth');
    // mutate({ ok: true, token, profile });
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  // 인증번호 코드 전송
  const sendCode = async () => {
    // setCode((prev) => ({ ...prev, loading: true }));
    // try {
    //   const { data } = await usersApi.getSignupCode(getValues('phoneNum'));
    //   if (data === 'existing_account') {
    //     setError('phoneNum', { message: '이미 가입된 전화번호입니다' });
    //     setCode((prev) => ({ ...prev, loading: false }));
    //   } else {
    //     setCode({ sended: true, loading: false });
    //   }
    // } catch {
    //   alert('Error');
    // } finally {
    //   setCode((prev) => ({ ...prev, loading: false }));
    // }
  };
  return (
    <>
      <SEO title='회원가입' />
      <div className='mx-auto my-28 flex max-w-[43.75rem] flex-col items-center rounded-lg bg-white p-[3.75rem]'>
        <h1 className='text-3xl font-bold'>회원가입</h1>

        {/* Input 필드 */}
        <div className='mt-12 w-full space-y-8'>
          <Input
            type='text'
            label='아이디'
            register={register('username', {
              required: '아이디를 입력해주세요',
              minLength: {
                message: '아이디는 4글자 이상이어야 합니다',
                value: 4,
              },
              maxLength: {
                message: '아이디는 12글자 이하여야 합니다',
                value: 12,
              },
              validate: {
                // unavailable: async (value) => {
                //   const { data } = await usersApi.checkId(value);
                //   if (data === 'available') {
                //     return true;
                //   } else {
                //     return '사용중인 아이디입니다';
                //   }
                // },
              },
            })}
            error={errors?.username?.message}
          />

          <Input
            type='password'
            label='비밀번호'
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
            label='비밀번호 확인'
            register={register('passwordCheck', {
              required: '비밀번호를 입력해주세요',
              validate: {
                notPwCheck: (value) =>
                  value === watch('password') || '비밀번호가 일치하지 않습니다',
              },
            })}
            error={errors?.passwordCheck?.message}
          />

          <div className='flex w-full flex-col'>
            <label className='font-medium'>이름</label>

            <div className='mt-2 flex h-[3.75rem] w-full space-x-3.5'>
              <div className='w-1/2'>
                <input
                  type='text'
                  placeholder='국문 이름 입력'
                  {...register('korName', {
                    required: '이름을 입력해주세요',
                    minLength: {
                      message: '이름은 2글자 이상이어야 합니다',
                      value: 2,
                    },
                    maxLength: {
                      message: '이름은 5글자 이하여야 합니다',
                      value: 5,
                    },
                  })}
                  className={cls(
                    errors?.korName?.message
                      ? 'border-red-500'
                      : 'border-[#d6d6d6]',
                    'h-full w-full rounded border bg-transparent pl-4 outline-none placeholder:text-sm'
                  )}
                />

                <div className='mt-2 text-sm text-red-500'>
                  {errors?.korName?.message}
                </div>
              </div>

              <div className='w-1/2'>
                <input
                  type='text'
                  placeholder='영문 이름 입력'
                  {...register('engName', {
                    required: '이름을 입력해주세요',
                    minLength: {
                      message: '이름은 2글자 이상이어야 합니다',
                      value: 2,
                    },
                    maxLength: {
                      message: '이름은 5글자 이하여야 합니다',
                      value: 5,
                    },
                  })}
                  className={cls(
                    errors?.engName?.message
                      ? 'border-red-500'
                      : 'border-[#d6d6d6]',
                    'h-full w-full rounded border bg-transparent pl-4 outline-none placeholder:text-sm'
                  )}
                />

                <div className='mt-2 text-sm text-red-500'>
                  {errors?.engName?.message}
                </div>
              </div>
            </div>
          </div>

          <Input
            type='tel'
            label='이메일'
            register={register('email', {
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
            error={errors?.email?.message}
            readOnly={code.sended}
          />

          <Input
            type='tel'
            label='전화번호'
            register={register('phoneNum', {
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
            error={errors?.phoneNum?.message}
            readOnly={code.sended}
          >
            <div
              onClick={() => {
                if (getValues('phoneNum') && !errors?.phoneNum?.message) {
                  sendCode();
                }
              }}
              className={cls(
                watch('phoneNum') && !errors?.phoneNum?.message
                  ? 'cursor-pointer transition-all hover:opacity-70'
                  : '',
                'ml-4 flex h-full w-[8.25rem] items-center justify-center rounded border border-[#2fb6bc] text-[#2fb6bc] font-medium text-sm'
              )}
            >
              {code.loading ? (
                <svg
                  role='status'
                  className='h-6 w-6 animate-spin fill-[#2fb6bc] text-black'
                  viewBox='0 0 100 101'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='currentColor'
                  />
                  <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='currentFill'
                  />
                </svg>
              ) : (
                '인증번호 받기'
              )}
            </div>
          </Input>

          <Input
            type='tel'
            label='인증번호'
            register={register('code', {
              required: '인증번호를 입력해주세요',
              validate: {
                // notMatch: async (value) => {
                //   const { data: checked } = await usersApi.checkCode(
                //     watch('phoneNum'),
                //     value
                //   );
                //   if (checked === 'wrong_code') {
                //     return '인증번호가 일치하지 않습니다';
                //   } else {
                //     return true;
                //   }
                // },
              },
            })}
            error={errors?.code?.message}
            readOnly={!code.sended}
          />
        </div>
        {/* Input 필드 */}

        {/* Checkbox 필드 */}
        <div className='mt-6 w-full space-y-[0.875rem]'>
          <Checkbox
            register={register('serviceAgree', {
              required: '서비스 이용약관을 체크해주세요',
            })}
            error={errors?.serviceAgree?.message}
          >
            <div>
              <span className='font-medium underline'>서비스이용약관</span>에
              동의합니다. (필수)
            </div>
          </Checkbox>

          <Checkbox
            register={register('privacyAgree', {
              required: '개인정보 수집 및 이용동의를 체크해주세요',
            })}
            error={errors?.privacyAgree?.message}
          >
            <div>
              <span className='font-medium underline'>
                개인정보 수집 및 이용동의
              </span>
              에 동의합니다. (필수)
            </div>
          </Checkbox>

          <Checkbox
            register={register('ageOver', {
              required: '만 14세 미만 아동은 법정 대리인의 동의가 필요합니다.',
            })}
            error={errors?.ageOver?.message}
          >
            <div>만 14세 이상 입니다. (필수)</div>
          </Checkbox>

          <Checkbox register={register('adAgree')}>
            <div>
              <span className='font-medium underline'>
                광고성 정보 수신동의
              </span>
              에 동의합니다. (선택)
            </div>
          </Checkbox>
        </div>
        {/* Checkbox 필드 */}

        {/* 회원가입 버튼 */}
        <div
          onClick={handleSubmit(onValid, onInvalid)}
          className='mt-12 flex h-[3.688rem] w-full cursor-pointer items-center justify-center rounded bg-[#2fb6bc] text-lg font-medium text-white transition-all hover:opacity-90'
        >
          {loading ? (
            <svg
              role='status'
              className='h-6 w-6 animate-spin fill-black text-[#2fb6bc]'
              viewBox='0 0 100 101'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                fill='currentColor'
              />
              <path
                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                fill='currentFill'
              />
            </svg>
          ) : (
            '회원가입 완료'
          )}
        </div>
        {/* 회원가입 버튼 */}
      </div>
    </>
  );
};

export default SignUp;
