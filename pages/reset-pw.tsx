import Popup from '@components/user/pwPopup';
import Input from '@components/input';
import SEO from '@components/seo';
// import { usersApi } from '@libs/api';
import { cls } from '@libs/client/utils';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { usersApi } from '@libs/api';
import { useUser } from '@libs/client/useUser';
// import { useAuth } from '@libs/client/useAuth';

interface IForm {
  username: string;
  email: string;
  code: string;
}

const ResetPw: NextPage = () => {
  useUser({});
  const [popup, setPopup] = useState(false);
  const closePopup = () => setPopup(false);

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
    try {
      setPopup(true);
    } catch {
      alert('Error');
    }
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  // 인증번호 코드 전송
  const sendCode = async () => {
    setCode((prev) => ({ ...prev, loading: true }));
    try {
      const { data } = await usersApi.getCode(
        getValues('email'),
        getValues('username')
      );
      if (data === 'unexisting user') {
        setError('username', {
          message: '존재하지 않는 아이디입니다',
        });
        setCode((prev) => ({ ...prev, loading: false }));
      } else if (data === 'unmatched email') {
        setError('email', {
          message: '아이디에 해당하는 이메일이 아닙니다',
        });
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

  useEffect(() => {
    if (popup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [popup]);
  return (
    <>
      <SEO title='비밀번호 찾기' />
      <div className='bg-[#f4f9fb] pt-48 pb-28 md:pt-28 md:pb-12'>
        <div className='mx-auto flex max-w-[43.75rem] flex-col items-center rounded-lg bg-white p-[3.75rem] md:max-w-[330px] md:py-9 md:px-3.5'>
          <h1 className='font-nexonBold text-3xl font-bold md:text-2xl'>
            비밀번호 찾기
          </h1>
          <h2 className='mt-3 text-lg font-medium text-[#6b6b6b] md:text-center md:text-base'>
            회원 가입 시 등록한 정보로 비밀번호를 찾을 수 있습니다.
          </h2>

          <form onSubmit={handleSubmit(onValid, onInvalid)} className='w-full'>
            {/* Input 필드 */}
            <div className='mt-12 w-full space-y-8 md:mt-7 md:space-y-5'>
              <Input
                type='text'
                label='아이디'
                register={register('username', {
                  required: '아이디를 입력해주세요',
                })}
                error={errors?.username?.message}
              />

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
                <div
                  onClick={() => {
                    if (
                      getValues('username') &&
                      getValues('email') &&
                      !errors?.username?.message &&
                      !errors?.email?.message
                    ) {
                      sendCode();
                    }
                  }}
                  className={cls(
                    watch('username') &&
                      watch('email') &&
                      !errors?.username?.message &&
                      !errors?.email?.message
                      ? 'cursor-pointer transition-all hover:opacity-70'
                      : '',
                    'ml-4 flex h-full w-[7.5rem] items-center justify-center rounded border border-[#2fb6bc] text-sm font-medium text-[#2fb6bc] md:ml-2 md:w-24'
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
                    '인증번호 전송'
                  )}
                </div>
              </Input>

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
                      if (checked === 'unmatched email') {
                        return '';
                      }
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
            </div>
            {/* Input 필드 */}

            {/* 비밀번호 찾기 버튼 */}
            <button
              type='submit'
              className='mt-8 flex h-[3.688rem] w-full cursor-pointer items-center justify-center rounded bg-[#2fb6bc] text-lg font-medium text-white transition-all hover:opacity-90 md:h-[2.813rem] md:text-base'
            >
              패스워드 재설정
            </button>
            {/* 비밀번호 찾기 버튼 */}
          </form>

          <div className='mt-10 flex items-center font-medium text-[#6b6b6b] md:mt-8 md:text-sm'>
            <Link href='/find-id'>
              <a>아이디 찾기</a>
            </Link>
          </div>
        </div>
      </div>

      {popup && (
        <Popup username={getValues('username')} closePopup={closePopup} />
      )}
    </>
  );
};

export default ResetPw;
