import Banner from '@components/banner';
import Input from '@components/input';
import SEO from '@components/seo';
import Navigator from '@components/support/navigator';
import Layout from '@layouts/sectionLayout';
import { contactApi } from '@libs/api';
import { cls } from '@libs/client/utils';
import type { NextPage } from 'next';
import { FieldErrors, useForm } from 'react-hook-form';

interface IForm {
  name: string;
  phoneNum: string;
  email: string;
  category: string;
  content: string;
}

const Contact: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>({
    mode: 'onSubmit',
  });
  const onValid = async ({
    name,
    phoneNum,
    email,
    category,
    content,
  }: IForm) => {
    try {
      await contactApi.submitContact(name, phoneNum, email, category, content);
      alert('문의가 제출되었습니다.');
      setValue('name', '');
      setValue('phoneNum', '');
      setValue('email', '');
      setValue('category', 'default');
      setValue('content', '');
    } catch {
      alert('Error');
    }
  };
  const onInValid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <>
      <SEO title='지원센터' />
      <Banner
        title='지원센터 1:1 문의하기'
        navList={['지원센터', '1:1 문의하기']}
      />
      <Navigator supportCategory='contact' />

      <div className='bg-[#f4f9fb]'>
        <Layout padding='pt-16 pb-24 md:pt-8'>
          <div className='font-nexonBold text-4xl font-bold leading-[3.375rem] md:text-center md:text-2xl'>
            궁금한 사항에 대해
            <br className='hidden md:block' />
            <span className='text-[#2fb6bc]'> 신속히 답변드리겠습니다.</span>
          </div>

          <div className='mt-12 w-[73.688rem] rounded bg-white py-14 px-[3.75rem] md:mt-5 md:w-full md:px-[0.813rem] md:py-8 md:text-base'>
            <div className='flex space-x-8 md:block md:space-x-0'>
              <div className='w-1/2 md:w-full'>
                {/* 이름 */}
                <div>
                  <Input
                    type='text'
                    label='이름'
                    register={register('name', {
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
                    error={errors?.name?.message}
                  />
                </div>

                {/* 전화번호  */}
                <div className='mt-7 md:mt-2'>
                  <Input
                    type='tel'
                    label='휴대폰 번호'
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
                  />
                </div>

                {/* 이메일 */}
                <div className='mt-7 md:mt-2'>
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
                  />
                </div>

                {/* 카테고리 */}
                <div className='mt-7 flex w-full flex-col md:mt-2'>
                  <label className='text-base font-medium text-[#01111e] md:text-[0.938rem]'>
                    카테고리
                  </label>

                  <div className='mt-3 flex h-[3.75rem] w-full'>
                    <select
                      defaultValue='default'
                      {...register('category', {
                        required: '카테고리를 선택해주세요',
                        validate: {
                          notDefault: (value) =>
                            value !== 'default' || '카테고리를 선택해주세요',
                        },
                      })}
                      className={cls(
                        errors?.category?.message
                          ? 'border-red-500'
                          : 'border-[#d6d6d6]',
                        'h-full w-full rounded border bg-transparent pl-4 outline-none placeholder:text-sm md:h-[45px] md:pl-1 md:text-[0.938rem]'
                      )}
                    >
                      <option value='default'>계정문의</option>
                      <option>기타</option>
                    </select>
                  </div>

                  <div className='mt-2 text-sm text-red-500'>
                    {errors?.category?.message}
                  </div>
                </div>
              </div>

              {/* 내용 */}
              <div className='w-1/2 space-y-2 md:w-full'>
                <div className='font-medium md:text-[0.938rem]'>내용</div>

                <textarea
                  placeholder='내용 입력'
                  {...register('content', {
                    required: '내용을 입력해주세요',
                    validate: {
                      notDefault: (value) =>
                        value !== 'default' || '내용을 입력해주세요',
                    },
                    minLength: {
                      message: '내용은 10글자 이상이어야 합니다',
                      value: 10,
                    },
                  })}
                  className={cls(
                    errors?.content?.message
                      ? 'border-red-500'
                      : 'border-[#d6d6d6]',
                    'h-[28rem] w-full rounded border pt-4 pl-5 text-lg font-medium outline-none placeholder:text-[#d6d6d6] md:text-[0.938rem]'
                  )}
                />

                <div className='mt-2 text-sm text-red-500'>
                  {errors?.content?.message}
                </div>
              </div>
            </div>

            <div className='flex justify-center'>
              <div
                onClick={handleSubmit(onValid, onInValid)}
                className='mt-12 h-[3.75rem] w-[23.75rem] cursor-pointer rounded bg-[#2fb6bc] pt-4 text-center text-[1.125rem] font-medium text-white md:mt-4 md:h-[2.813rem] md:w-[17.5rem] md:pt-[0.6rem] md:text-base'
              >
                문의하기
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Contact;
