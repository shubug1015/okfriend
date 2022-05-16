import Banner from '@components/banner';
import Input from '@components/input';
import SEO from '@components/seo';
import Navigator from '@components/support/navigator';
import Layout from '@layouts/sectionLayout';
import { contactApi } from '@libs/api';
import { useLocale } from '@libs/client/useLocale';
import { cls, clsFilter } from '@libs/client/utils';
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
  const { locale, text } = useLocale();
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
      alert(text.contactError['1']);
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
        title={text.supportStoryHeader['1']}
        navList={[text.supportStoryHeader['2'], text.supportStoryHeader['5']]}
      />
      <Navigator supportCategory='contact' />

      <div className='bg-[#f4f9fb]'>
        <Layout padding='pt-16 pb-24 md:pt-8'>
          <div
            className={cls(
              clsFilter(
                locale,
                'font-nexonBold',
                'font-notoSans',
                'font-notoSans'
              ),
              'text-4xl font-bold leading-[3.375rem] md:text-center md:text-2xl'
            )}
          >
            {text.contact['1']}
            <br className='hidden md:block' />
            <span className='text-[#2fb6bc]'> {text.contact['2']}</span>
          </div>

          <div className='mt-12 w-[73.688rem] rounded bg-white py-14 px-[3.75rem] md:mt-5 md:w-full md:px-[0.813rem] md:py-8 md:text-base'>
            <div className='flex space-x-8 md:block md:space-x-0'>
              <div className='w-1/2 md:w-full'>
                {/* 이름 */}
                <div>
                  <Input
                    type='text'
                    label={text.contact['3']}
                    register={register('name', {
                      required: text.contactError['2'],
                      minLength: {
                        message: text.contactError['3'],
                        value: 2,
                      },
                      maxLength: {
                        message: text.contactError['4'],
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
                    label={text.contact['5']}
                    register={register('phoneNum', {
                      required: text.contactError['5'],
                      validate: {
                        notPhoneNum: (value) => {
                          const regPhoneNum =
                            /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
                          if (regPhoneNum.test(value)) {
                            return true;
                          } else {
                            return text.contactError['6'];
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
                    label={text.contact['7']}
                    register={register('email', {
                      required: text.contactError['7'],
                      validate: {
                        notEmail: (value) => {
                          const regEmail =
                            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
                          if (regEmail.test(value)) {
                            return true;
                          } else {
                            return text.contactError['8'];
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
                    {text.contact['9']}
                  </label>

                  <div className='mt-3 flex h-[3.75rem] w-full'>
                    <select
                      defaultValue='default'
                      {...register('category', {
                        required: text.contactError['9'],
                        validate: {
                          notDefault: (value) =>
                            value !== 'default' || text.contactError['9'],
                        },
                      })}
                      className={cls(
                        errors?.category?.message
                          ? 'border-red-500'
                          : 'border-[#d6d6d6]',
                        'h-full w-full rounded border bg-transparent pl-4 outline-none placeholder:text-sm md:h-[45px] md:pl-1 md:text-[0.938rem]'
                      )}
                    >
                      <option value='default'>{text.contact['10']}</option>
                      <option>{text.contact['11']}</option>
                      <option>{text.contact['12']}</option>
                      <option>{text.contact['13']}</option>
                      <option>{text.contact['14']}</option>
                    </select>
                  </div>

                  <div className='mt-2 text-sm text-red-500'>
                    {errors?.category?.message}
                  </div>
                </div>
              </div>

              {/* 내용 */}
              <div className='w-1/2 space-y-2 md:w-full'>
                <div className='font-medium md:text-[0.938rem]'>
                  {text.contact['15']}
                </div>

                <textarea
                  placeholder={text.contact['16']}
                  {...register('content', {
                    required: text.contactError['10'],
                    validate: {
                      notDefault: (value) =>
                        value !== 'default' || text.contactError['10'],
                    },
                    minLength: {
                      message: text.contactError['11'],
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
                {text.contact['17']}
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Contact;
