import Header from '@components/mypage/header';
import Navigator from '@components/mypage/navigator';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import useMutation from '@libs/client/useMutation';
import { cls } from '@libs/client/utils';
import type { NextPage } from 'next';
import { FieldErrors, useForm } from 'react-hook-form';
import { useUser } from '@libs/client/useUser';
import { mypageApi } from '@libs/api';

interface IForm {
  email: string;
  phoneNum: string;
  year: string;
  month: string;
  day: string;
  introduce: string;
}

const Edit: NextPage = () => {
  const { token, profile } = useUser({ isPrivate: true });
  const [editMyInfos] = useMutation(mypageApi.editInfos);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onChange',
  });
  const onValid = ({ email, phoneNum, year, month, day, introduce }: IForm) => {
    try {
      const req = {
        ...(email && { email }),
        ...(phoneNum && { phoneNum }),
        ...(year && { year }),
        ...(month && { month }),
        ...(day && { day }),
        ...(introduce && { introduce }),
        token,
      };
      editMyInfos({ req });
      alert('회원 정보 수정이 완료되었습니다.');
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

          <div className='grow space-y-8'>
            <div className='text-2xl font-bold md:text-[1.375rem]'>
              회원 정보 수정
            </div>

            <div className='space-y-[1.875rem] md:space-y-[1.375rem]'>
              <div className='h-20 items-center space-y-3 md:space-y-2'>
                <div className='font-medium md:text-[0.938rem]'>이름</div>

                <div className='flex h-[3.75rem] items-center rounded border border-[#d6d6d6] bg-[#f8f8f8] pl-5 text-lg font-medium text-[#d6d6d6] md:h-[2.813rem] md:pl-2.5 md:text-[0.938rem]'>
                  {profile?.name}
                </div>
              </div>

              <div className='h-20 items-center space-y-3 md:space-y-2'>
                <div className='font-medium md:text-[0.938rem]'>아이디</div>

                <div className='flex h-[3.75rem] items-center rounded border border-[#d6d6d6] bg-[#f8f8f8] pl-5 text-lg font-medium text-[#d6d6d6] md:h-[2.813rem] md:pl-2.5 md:text-[0.938rem]'>
                  {profile?.username}
                </div>
              </div>

              <div className='space-y-3 md:space-y-2'>
                <div className='font-medium md:text-[0.938rem]'>국가</div>

                <div className='flex h-[3.75rem] items-center rounded border border-[#d6d6d6] bg-[#f8f8f8] pl-5 text-lg font-medium text-[#d6d6d6] md:h-[2.813rem] md:pl-2.5 md:text-[0.938rem]'>
                  {profile?.country}
                </div>
              </div>

              <div className='space-y-3 md:space-y-2'>
                <div className='font-medium md:text-[0.938rem]'>이메일</div>

                <input
                  type='text'
                  placeholder='이메일'
                  {...register('email', {
                    value: profile?.email,
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
                  className='h-[3.75rem] w-full rounded border border-[#d6d6d6] pl-5 text-lg font-medium outline-none placeholder:text-[#d6d6d6] md:h-[2.813rem] md:pl-2.5 md:text-[0.938rem]'
                />
              </div>

              <div className='space-y-3 md:space-y-2'>
                <div className='font-medium md:text-[0.938rem]'>휴대폰번호</div>

                <input
                  type='text'
                  placeholder='휴대폰번호'
                  {...register('phoneNum', {
                    value: profile?.phone_number,
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
                  className='h-[3.75rem] w-full rounded border border-[#d6d6d6] pl-5 text-lg font-medium outline-none placeholder:text-[#d6d6d6] md:h-[2.813rem] md:pl-2.5 md:text-[0.938rem]'
                />
              </div>

              {profile && (
                <div className='flex w-full flex-col'>
                  <label className='font-medium md:text-[0.938rem]'>
                    생년월일
                  </label>

                  {/* 년도 */}
                  <div className='mt-2 flex h-[3.75rem] w-full space-x-3.5 md:h-[2.813rem]'>
                    <div className='w-1/3'>
                      <select
                        defaultValue={profile?.birth.split('-')[0]}
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
                          'h-full w-full rounded border bg-transparent pl-4 outline-none placeholder:text-sm md:text-[0.938rem]'
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
                        defaultValue={profile?.birth.split('-')[1]}
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
                          'h-full w-full rounded border bg-transparent pl-4 outline-none placeholder:text-sm md:text-[0.938rem]'
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
                        defaultValue={profile?.birth.split('-')[2]}
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
                          'h-full w-full rounded border bg-transparent pl-4 outline-none placeholder:text-sm md:text-[0.938rem]'
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
              )}

              <div className='space-y-3 md:space-y-2'>
                <div className='font-medium'>자기소개</div>

                <textarea
                  placeholder='자유롭게 작성해보세요.'
                  {...register('introduce', {
                    value: profile?.introduce,
                    required: '자기소개를 입력해주세요',
                  })}
                  className='h-44 w-full rounded border border-[#d6d6d6] px-5 pt-4 text-lg font-medium outline-none placeholder:text-[#d6d6d6] md:h-52 md:px-2.5 md:pt-[0.8rem] md:text-[0.938rem]'
                />
              </div>
            </div>

            <div className='flex justify-end'>
              <div
                onClick={handleSubmit(onValid, onInvalid)}
                className='cursor-pointer rounded bg-[#2fb6bc] py-4 px-14 font-bold text-white transition-all hover:opacity-90 md:flex md:w-full md:justify-center md:px-0 md:py-3'
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
