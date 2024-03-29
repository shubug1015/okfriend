import Input from '@components/input';
import SEO from '@components/seo';
import { usersApi } from '@libs/api';
import { useUser } from '@libs/client/useUser';
import useMutation from '@libs/client/useMutation';
import { cls, clsFilter } from '@libs/client/utils';
import axios from 'axios';
import type { NextPage } from 'next';
import Link from 'next/link';
import { FieldErrors, useForm } from 'react-hook-form';
import { useLocale } from '@libs/client/useLocale';

interface IForm {
  username: string;
  password: string;
}

const Login: NextPage = () => {
  const { locale, text } = useLocale();
  const { mutate } = useUser({});
  const [login, { loading, error }] = useMutation(usersApi.loginNextApi);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onChange',
  });
  const onValid = async (data: IForm) => {
    const req = {
      username: data.username,
      password: data.password,
    };

    await login({ req });
    const {
      data: { token, profile },
    } = await axios.get('/api/user');
    mutate({ ok: true, token, profile });
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <>
      <SEO title='로그인' />
      <div className='bg-[#f4f9fb] pt-48 pb-28 md:pt-28 md:pb-12'>
        <div className='mx-auto flex max-w-[43.75rem] flex-col items-center rounded-lg bg-white p-[3.75rem] md:max-w-[330px] md:py-9 md:px-3.5'>
          <h1
            className={cls(
              clsFilter(
                locale,
                'font-nexonBold',
                'font-notoSans',
                'font-notoSans'
              ),
              'text-3xl font-bold md:text-2xl'
            )}
          >
            {text.login['1']}
          </h1>

          <form onSubmit={handleSubmit(onValid, onInvalid)} className='w-full'>
            {/* Input 필드 */}
            <div className='mt-12 w-full space-y-8 md:mt-7 md:space-y-5'>
              <Input
                type='text'
                label={text.login['2']}
                register={register('username', {
                  required: text.loginError['1'],
                })}
                error={errors?.username?.message}
              />

              <Input
                type='password'
                label={text.login['4']}
                register={register('password', {
                  required: text.loginError['2'],
                })}
                error={errors?.password?.message}
              />
            </div>

            <div
              className={cls(
                error ? 'mt-4' : '',
                'flex items-center text-sm text-red-500'
              )}
            >
              {error && text.loginError['3']}
            </div>
            {/* Input 필드 */}

            {/* 로그인 버튼 */}
            <button
              type='submit'
              className={cls(
                error ? 'mt-4' : 'mt-8 md:mt-10',
                'flex h-[3.688rem] w-full cursor-pointer items-center justify-center rounded bg-[#2fb6bc] text-lg font-medium text-white transition-all hover:opacity-90 md:h-[2.813rem] md:text-base'
              )}
            >
              {loading ? (
                <svg
                  role='status'
                  className='h-6 w-6 animate-spin fill-[#01111e] text-[#2fb6bc]'
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
                text.login['6']
              )}
            </button>
            {/* 로그인 버튼 */}
          </form>

          <div className='my-6 h-px w-full bg-[#d6d6d6]' />

          {/* 회원가입 버튼 */}
          <Link href='/signup'>
            <a className='flex h-[3.688rem] w-full items-center justify-center rounded border border-[#2fb6bc] text-lg font-medium text-[#2fb6bc] transition-all hover:opacity-70 md:h-[2.813rem] md:text-base'>
              {text.login['7']}
            </a>
          </Link>
          {/* 회원가입 버튼 */}

          <div className='mt-10 flex items-center font-medium text-[#6b6b6b] md:mt-8 md:text-sm'>
            <Link href='/find-id'>
              <a>{text.login['8']}</a>
            </Link>

            <div className='mx-5 text-xs text-[#d6d6d6]'>|</div>

            <Link href='/reset-pw'>
              <a>{text.login['9']}</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
