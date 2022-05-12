import SEO from '@components/seo';
import type { NextPage } from 'next';
import React, { useState } from 'react';
// import { usersApi } from '@libs/api';
import useMutation from '@libs/client/useMutation';
import { FieldErrors, useForm } from 'react-hook-form';
import Input from '@components/input';
import { cls } from '@libs/client/utils';
import Checkbox from '@components/checkbox';
import { useUser } from '@libs/client/useUser';
import { usersApi } from '@libs/api';
import { Local, NotLocal } from '@components/svg';
import axios from 'axios';
// import axios from 'axios';
// import { useAuth } from '@libs/client/useAuth';

interface IForm {
  stage: string;
  username: string;
  password: string;
  passwordCheck: string;
  korName: string;
  engName: string;
  year: string;
  month: string;
  day: string;
  country: string;
  email: string;
  code: string;
  phoneNum: string;
  serviceAgree: boolean;
  privacyAgree: boolean;
  ageOver: string;
  adAgree: string;
}

const SignUp: NextPage = () => {
  const { mutate } = useUser({});
  const [signup, { loading }] = useMutation(usersApi.signupNextApi);
  const [local, setLocal] = useState<boolean | null>(null);
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
  const onValid = async ({
    stage,
    username,
    password,
    korName,
    engName,
    year,
    month,
    day,
    country,
    email,
    phoneNum,
    adAgree,
  }: IForm) => {
    const req = {
      local,
      stage,
      username,
      password,
      korName,
      engName,
      year,
      month,
      day,
      country,
      email,
      phoneNum,
      adAgree,
    };
    await signup({ req });
    const {
      data: { token, profile },
    } = await axios.get('/api/user');
    mutate({ ok: true, token, profile });
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  // 인증번호 코드 전송
  const sendCode = async () => {
    setCode((prev) => ({ ...prev, loading: true }));
    try {
      const { data } = await usersApi.getSignupCode(getValues('email'));
      if (data === 'existing_account') {
        setError('email', { message: '이미 가입된 이메일입니다' });
        setCode((prev) => ({ ...prev, loading: false }));
      } else {
        setCode({ sended: true, loading: false });
      }
    } catch {
      alert('Error');
    } finally {
      setCode((prev) => ({ ...prev, loading: false }));
    }
  };
  return (
    <>
      <SEO title='회원가입' />
      <div className='bg-[#f4f9fb] pt-48 pb-28 md:pt-28 md:pb-12'>
        <div className='mx-auto flex max-w-[43.75rem] flex-col items-center rounded-lg bg-white p-[3.75rem] md:max-w-[330px] md:py-9 md:px-3.5'>
          <h1 className='font-nexonBold text-3xl font-bold md:text-2xl'>
            회원가입
          </h1>

          {local === null ? (
            <div>
              {/* 가입유형 */}
              <div className='mt-4 text-center text-lg font-medium text-[#6b6b6b] md:text-base'>
                가입유형을 선택해주세요.
              </div>

              <div className='mt-10 flex space-x-5 md:mt-8 md:flex-col md:space-x-0 md:space-y-5'>
                <div
                  onClick={() => setLocal(true)}
                  className='flex h-[12.7rem] w-[17.5rem] cursor-pointer flex-col items-center justify-center space-y-4 rounded-lg border border-[#2fb6bc] transition-all hover:opacity-70'
                >
                  <Local />
                  <div className='text-lg font-medium text-[#2fb6bc]'>
                    국내 대학생
                  </div>
                </div>
                <div
                  onClick={() => setLocal(false)}
                  className='flex h-[12.7rem] w-[17.5rem] cursor-pointer flex-col items-center justify-center space-y-2.5 rounded-lg border border-[#2fb6bc] transition-all hover:opacity-70'
                >
                  <NotLocal />
                  <div className='text-lg font-medium text-[#2fb6bc]'>
                    재외동포대학생
                  </div>
                </div>
              </div>
              {/* 가입유형 */}
            </div>
          ) : (
            <>
              {/* Input 필드 */}
              <div className='mt-12 w-full space-y-8 md:mt-7 md:space-y-5'>
                {/* 가입유형 */}
                <div className='flex w-full flex-col'>
                  <label className='font-medium md:text-[0.938rem]'>
                    기수 선택
                  </label>

                  <div className='mt-5 flex w-full space-x-16 md:mt-4 md:space-x-6'>
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className='flex items-center space-x-1.5'>
                        <input
                          type='radio'
                          value={i}
                          {...register('stage', {
                            required: '기수를 선택해주세요',
                          })}
                          className={cls(
                            errors?.stage?.message
                              ? 'border-red-500'
                              : 'border-[#d6d6d6]',
                            'h-6 w-6 cursor-pointer appearance-none rounded-full border-2 bg-cover outline-none checked:border-none checked:bg-[url("/icons/radio-checked.png")] md:h-5 md:w-5'
                          )}
                        />

                        <div className='text-lg md:text-[0.938rem]'>{i}기</div>
                      </div>
                    ))}
                  </div>

                  <div className='mt-2 text-sm text-red-500'>
                    {errors?.stage?.message && '기수를 선택해주세요'}
                  </div>
                </div>
                {/* 가입유형 */}

                {/* 아이디 */}
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
                      unavailable: async (value) => {
                        const { data } = await usersApi.checkId(value);
                        if (data === 'available') {
                          return true;
                        } else {
                          return '사용중인 아이디입니다';
                        }
                      },
                    },
                  })}
                  error={errors?.username?.message}
                />
                {/* 아이디 */}

                {/* 비밀번호 */}
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
                {/* 비밀번호 */}

                {/* 비밀번호 확인 */}
                <Input
                  type='password'
                  label='비밀번호 확인'
                  register={register('passwordCheck', {
                    required: '비밀번호를 입력해주세요',
                    validate: {
                      notPwCheck: (value) =>
                        value === watch('password') ||
                        '비밀번호가 일치하지 않습니다',
                    },
                  })}
                  error={errors?.passwordCheck?.message}
                />
                {/* 비밀번호 확인 */}

                {/* 이름 */}
                <div className='flex w-full flex-col'>
                  <label className='font-medium md:text-[0.938rem]'>이름</label>

                  {/* 국문 이름 */}
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
                          'h-full w-full rounded border bg-transparent pl-4 outline-none placeholder:text-sm md:h-[2.813rem] md:pl-2.5 md:text-[0.938rem]'
                        )}
                      />
                    </div>
                    {/* 국문 이름 */}

                    {/* 영문 이름 */}
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
                            value: 20,
                          },
                        })}
                        className={cls(
                          errors?.engName?.message
                            ? 'border-red-500'
                            : 'border-[#d6d6d6]',
                          'h-full w-full rounded border bg-transparent pl-4 outline-none placeholder:text-sm md:h-[2.813rem] md:pl-2.5 md:text-[0.938rem]'
                        )}
                      />
                    </div>
                    {/* 영문 이름 */}
                  </div>

                  <div className='mt-2 text-sm text-red-500'>
                    {(errors?.korName?.message || errors?.engName?.message) &&
                      '이름을 입력해주세요'}
                  </div>
                </div>
                {/* 이름 */}

                {/* 생년월일 */}
                <div className='flex w-full flex-col'>
                  <label className='font-medium md:text-[0.938rem]'>
                    생년월일
                  </label>

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
                          'h-full w-full rounded border bg-transparent pl-4 outline-none placeholder:text-sm md:h-[2.813rem] md:pl-2.5 md:text-[0.938rem]'
                        )}
                      >
                        <option value='default' disabled hidden>
                          년(4자)
                        </option>
                        {[...Array(123)].map((_, index) => (
                          <option key={index}>{index + 1900}</option>
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
                          'h-full w-full rounded border bg-transparent pl-4 outline-none placeholder:text-sm md:h-[2.813rem] md:pl-2.5 md:text-[0.938rem]'
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
                          'h-full w-full rounded border bg-transparent pl-4 outline-none placeholder:text-sm md:h-[2.813rem] md:pl-2.5 md:text-[0.938rem]'
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
                {/* 생년월일 */}

                {/* 국가 */}
                <Input
                  type='text'
                  label='국가'
                  register={register('country', {
                    required: '국가 입력해주세요',
                  })}
                  error={errors?.country?.message}
                />
                {/* 국가 */}

                {/* 이메일 */}
                <Input
                  type='text'
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
                >
                  {/* 인증번호 받기 */}
                  <div
                    onClick={() => {
                      if (getValues('email') && !errors?.email?.message) {
                        sendCode();
                      }
                    }}
                    className={cls(
                      watch('email') && !errors?.email?.message
                        ? 'cursor-pointer transition-all hover:opacity-70'
                        : '',
                      'ml-4 flex h-full w-[8.25rem] items-center justify-center rounded border border-[#2fb6bc] text-sm font-medium text-[#2fb6bc] md:ml-2 md:w-32 md:text-xs'
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
                  {/* 인증번호 받기 버튼 */}
                </Input>
                {/* 이메일 */}

                {/* 인증번호 */}
                <Input
                  type='tel'
                  label='인증번호'
                  register={register('code', {
                    required: '인증번호를 입력해주세요',
                    validate: {
                      notMatch: async (value) => {
                        const { data: checked } = await usersApi.checkCode(
                          watch('email'),
                          value
                        );
                        if (checked === 'wrong_code') {
                          return '인증번호가 일치하지 않습니다';
                        } else {
                          return true;
                        }
                      },
                    },
                  })}
                  error={errors?.code?.message}
                  readOnly={!code.sended}
                />
                {/* 인증번호 */}

                {/* 휴대폰 번호 */}
                <Input
                  type='tel'
                  label='휴대폰 번호'
                  register={register('phoneNum', {
                    required: '휴대폰 번호를 입력해주세요',
                    validate: {
                      notPhoneNum: (value) => {
                        const regPhoneNum =
                          /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
                        if (regPhoneNum.test(value)) {
                          return true;
                        } else {
                          return '올바른 휴대폰 번호를 입력해주세요';
                        }
                      },
                    },
                  })}
                  error={errors?.phoneNum?.message}
                />
                {/* 휴대폰 번호 */}
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
                  <div className='md:text-sm md:tracking-tight'>
                    <span className='font-medium underline '>
                      서비스이용약관
                    </span>
                    에 동의합니다. (필수)
                  </div>
                </Checkbox>

                <Checkbox
                  register={register('privacyAgree', {
                    required: '개인정보 수집 및 이용동의를 체크해주세요',
                  })}
                  error={errors?.privacyAgree?.message}
                >
                  <div className='md:text-sm md:tracking-tight'>
                    <span className='font-medium underline '>
                      개인정보 수집 및 이용동의
                    </span>
                    에 동의합니다. (필수)
                  </div>
                </Checkbox>

                <Checkbox
                  register={register('ageOver', {
                    required:
                      '만 14세 미만 아동은 법정 대리인의 동의가 필요합니다.',
                  })}
                  error={errors?.ageOver?.message}
                >
                  <div className='md:text-sm md:tracking-tight'>
                    만 14세 이상 입니다. (필수)
                  </div>
                </Checkbox>

                <Checkbox register={register('adAgree')}>
                  <div className='md:text-sm md:tracking-tight'>
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
                className='mt-12 flex h-[3.688rem] w-full cursor-pointer items-center justify-center rounded bg-[#2fb6bc] text-lg font-medium text-white transition-all hover:opacity-90 md:mt-8 md:h-[2.813rem] md:text-base'
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
