import Header from '@components/mypage/header';
import Navigator from '@components/mypage/navigator';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import useMutation from '@libs/client/useMutation';
import type { NextPage } from 'next';
import { FieldErrors, useForm } from 'react-hook-form';
import { useUser } from '@libs/client/useUser';
import { mypageApi } from '@libs/api';
import { useLocale } from '@libs/client/useLocale';

interface IForm {
  password: string;
  passwordCheck: string;
}

const ResetPw: NextPage = () => {
  const { text } = useLocale();
  const { token } = useUser({ isPrivate: true });
  const [editMyInfos] = useMutation(mypageApi.editInfos);
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

      <Layout padding='pt-12 pb-44 md:pt-7 md:pb-14'>
        <div className='mt-[4.5rem] flex space-x-20 md:mt-0 md:flex-col md:space-x-0 md:space-y-8'>
          <Navigator />

          <div className='grow space-y-6'>
            <div className='text-2xl font-bold md:text-[1.375rem]'>
              {text.mypageResetPw['1']}
            </div>

            <div className='divide-y-[#eeeeee] divide-y rounded border border-[#d6d6d6] p-10 md:divide-transparent md:border-transparent md:p-0'>
              {/* 현재 비밀번호 */}
              <div className='flex h-20 items-center md:h-auto md:flex-col md:items-start md:justify-between'>
                <div className='w-48 font-medium text-[#6b6b6b] md:mt-3 md:flex md:h-12 md:w-full md:items-center md:text-[0.938rem]'>
                  {text.mypageResetPw['2']}
                </div>

                <div className='md:flex md:h-12 md:w-full md:items-center md:border-b md:border-[#d6d6d6] md:pl-2.5 md:text-[0.938rem]'>
                  **********
                </div>
              </div>
              {/* 현재 비밀번호 */}

              {/* 새 비밀번호 */}
              <div className='flex h-20 items-center md:h-auto md:flex-col md:items-start md:justify-between'>
                <div className='w-48 font-medium text-[#6b6b6b] md:mt-3 md:flex md:h-12 md:w-full md:items-center md:pb-1 md:text-[0.938rem]'>
                  {text.mypageResetPw['3']}
                </div>

                <div className='md:w-full'>
                  <input
                    type='password'
                    placeholder={text.mypageResetPw['4']}
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
                    className='outline-none placeholder:text-[#d6d6d6] md:h-12 md:w-full md:flex-col md:items-start md:justify-between md:border-b md:border-[#d6d6d6] md:pl-2.5 md:pb-1 md:text-[0.938rem]'
                  />

                  <div className='mt-2 text-xs text-red-500'>
                    {errors?.password?.message}
                  </div>
                </div>
              </div>
              {/* 새 비밀번호 */}

              {/* 새 비밀번호 확인 */}
              <div className='flex h-20 items-center md:h-auto md:flex-col md:items-start md:justify-between'>
                <div className='w-48 font-medium text-[#6b6b6b] md:mt-3 md:flex md:h-12 md:w-full md:items-center md:text-[0.938rem]'>
                  {text.mypageResetPw['5']}
                </div>

                <div className='md:w-full'>
                  <input
                    type='password'
                    placeholder={text.mypageResetPw['6']}
                    {...register('passwordCheck', {
                      value: '',
                      required: '비밀번호를 입력해주세요',
                      validate: {
                        notPwCheck: (value) =>
                          value === watch('password') ||
                          '비밀번호가 일치하지 않습니다',
                      },
                    })}
                    className='outline-none placeholder:text-[#d6d6d6] md:h-12 md:w-full md:flex-col md:items-start md:justify-between md:border-b md:border-[#d6d6d6] md:pl-2.5 md:pb-1 md:text-[0.938rem]'
                  />
                </div>

                <div className='mt-2 text-xs text-red-500'>
                  {errors?.passwordCheck?.message}
                </div>
              </div>
              {/* 새 비밀번호 확인 */}
            </div>

            <div className='flex justify-end'>
              <div
                onClick={handleSubmit(onValid, onInvalid)}
                className='cursor-pointer rounded bg-[#2fb6bc] py-4 px-14 font-bold text-white transition-all hover:opacity-90 md:flex md:w-full md:justify-center md:px-0 md:py-3'
              >
                {text.mypageResetPw['7']}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ResetPw;
