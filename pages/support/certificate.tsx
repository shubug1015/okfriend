import Banner from '@components/banner';
import Popup from '@components/pdf/popup';
import SEO from '@components/seo';
import Checkbox from '@components/support/certificate/checkbox';
import { useList } from '@components/support/certificate/list';
import Navigator from '@components/support/navigator';
import Layout from '@layouts/sectionLayout';
import { surveyApi } from '@libs/api';
import { useLocale } from '@libs/client/useLocale';
import { useUser } from '@libs/client/useUser';
import { cls, clsFilter } from '@libs/client/utils';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import useSWR from 'swr';

interface IForm {
  Q1: string;
  Q1_etc: string;
  Q2: string;
  Q3_1: string;
  Q3_2: string;
  Q3_3: string;
  Q3_4: string;
  Q3_5: string;
  Q3_6: string;
  Q3_7: string;
  Q3_8: string;
  Q4_1: string;
  Q4_2: string;
  Q4_3: string;
  Q4_4: string;
  Q4_5: string;
  Q5_1: string;
  Q5_2: string;
  Q5_3: string;
  Q5_4: string;
  Q6_1: string;
  Q6_2: string;
  Q6_3: string;
  Q6_4: string;
  Q6_5: string;
  Q7_1: string;
  Q7_2: string;
  Q7_3: string;
  Q7_4: string;
  Q8_1: string;
  Q8_2: string;
  Q8_3: string;
  Q8_4: string;
  Q8_5: string;
  Q8_5_etc: string;
  Q9_1: string;
  Q9_2: string;
  Q9_3: string;
  Q9_4: string;
  Q9_5: string;
  Q9_6: string;
  Q9_7: string;
  Q10: string;
  Q11: string;
}

const Certificate: NextPage = () => {
  const { locale, text } = useLocale();
  const { token, profile } = useUser({ isPrivate: true });
  const router = useRouter();
  const { data } = useSWR(token ? 'checkCertificate' : null, () =>
    surveyApi.checkCertificate(token as string)
  );
  const [popup, setPopup] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IForm>({
    mode: 'onChange',
  });

  const onValid = async ({ Q1_etc, Q8_5_etc, ...data }: IForm) => {
    try {
      await surveyApi.certificateSurvey(
        {
          ...data,
          Q1: data.Q1 === text.certificate['20'] ? Q1_etc : data.Q1,
          Q8_5: `${Q8_5_etc} ${data.Q8_5}`,
        },
        token as string
      );
      alert('제출이 완료되었습니다');
      setPopup(true);
    } catch {
      alert('Error');
    }
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  // useEffect(() => {
  //   if (profile?.survey) {
  //     setPopup(true);
  //   }
  // }, [profile?.survey]);

  if (data === 'there are uncompleted lectures') {
    alert('미완료된 강의가 있습니다.');
    router.back();
  }
  return (
    <>
      <SEO title='지원센터' />
      <Banner
        title={text.certificate['1']}
        navList={[text.certificate['2'], text.certificate['3']]}
      />
      <Navigator supportCategory='certificate' />

      <Layout bgColor='bg-[#f4f9fb]' padding='pt-16 pb-24 md:pt-8'>
        <div>
          <div
            className={cls(
              clsFilter(
                locale,
                'font-nexonBold',
                'font-notoSans',
                'font-notoSans'
              ),
              'text-4xl font-bold md:text-center md:text-2xl'
            )}
          >
            <span className='text-[#2fb6bc]'>{text.certificate['8']}</span>{' '}
            {text.certificate['9']}
          </div>

          <div className='mt-4 text-lg md:mt-[0.563rem] md:text-center md:text-[0.813rem]'>
            {text.certificate['10']}
          </div>

          <div className='mt-14 rounded bg-white p-10 pb-16 md:mt-[1.313rem] md:px-[1.313rem]'>
            <div className='border-b border-[#9e9e9e] pb-10 text-2xl font-bold md:pb-4 md:text-base md:tracking-tighter'>
              <span className='text-[#2fb6bc]'>{text.certificate['11']}</span>{' '}
              {text.certificate['12']}
              <div className='mt-2 hidden whitespace-pre-wrap text-center text-sm font-medium text-[#2fb6bc] md:block'>
                {text.certificate['13']}
              </div>
            </div>

            {/* 문항 1 */}
            <div className='space-y-7 border-b border-dotted border-[#d6d6d6] py-12 md:h-[21rem] md:flex-col md:justify-center md:space-y-6 md:py-4'>
              <div className='text-xl font-medium md:text-sm md:font-bold md:tracking-tighter'>
                {text.certificate['14']}{' '}
                <span className='text-[#2fb6bc]'>{text.certificate['15']}</span>
              </div>

              <div className='space-y-5 md:w-full md:justify-between'>
                {[
                  text.certificate['16'],
                  text.certificate['17'],
                  text.certificate['18'],
                  text.certificate['19'],
                  text.certificate['20'],
                ].map((i) => (
                  <div key={i} className='flex items-center space-x-4'>
                    <input
                      type='radio'
                      value={i}
                      {...register('Q1', {
                        required: '항목을 선택해주세요',
                      })}
                      className={cls(
                        errors?.Q1?.message
                          ? 'bg-[url("/icons/checked-error.png")]'
                          : 'bg-[url("/icons/unchecked.png")] checked:bg-[url("/icons/checked.png")]',
                        'h-2.5 w-3.5 cursor-pointer appearance-none bg-cover bg-no-repeat outline-none md:flex-none md:bg-contain'
                      )}
                    />

                    <div className='text-lg md:grow md:text-sm'>{i}</div>

                    {i === text.certificate['20'] && (
                      <input
                        type='text'
                        {...register('Q1_etc')}
                        readOnly={watch('Q1') !== text.certificate['20']}
                        className={cls(
                          watch('Q1') !== text.certificate['20']
                            ? 'cursor-default opacity-50'
                            : '',
                          'h-10 w-[12rem] rounded-lg border border-[#d6d6d6] px-2.5 outline-none'
                        )}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* 문항 1 */}

            {/* 문항 2 */}
            <div className='space-y-7 border-b border-dotted border-[#d6d6d6] py-12 md:h-[19rem] md:flex-col md:justify-center md:space-y-6 md:py-4'>
              <div className='text-xl font-medium md:text-sm md:font-bold md:leading-6 md:tracking-tighter'>
                {text.certificate['21']}{' '}
                <span className='text-[#2fb6bc]'>*</span>
              </div>

              <div className='space-y-5 md:w-full md:justify-between'>
                {[
                  text.certificate['22'],
                  text.certificate['23'],
                  text.certificate['24'],
                  text.certificate['25'],
                  text.certificate['26'],
                ].map((i, index) => (
                  <div key={i} className='flex items-center space-x-4'>
                    <input
                      type='radio'
                      value={index + 1}
                      {...register('Q2', {
                        required: '항목을 선택해주세요',
                      })}
                      className={cls(
                        errors?.Q2?.message
                          ? 'bg-[url("/icons/checked-error.png")]'
                          : 'bg-[url("/icons/unchecked.png")] checked:bg-[url("/icons/checked.png")]',
                        'h-2.5 w-3.5 cursor-pointer appearance-none bg-cover bg-no-repeat outline-none md:bg-contain'
                      )}
                    />

                    <div className='text-lg md:text-sm'>{i}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* 문항 2 */}

            {/* 문항 3~9 */}
            {useList().map((i) => (
              <div key={i.id} className='mt-14 md:mt-4'>
                <div className='text-xl font-medium md:text-sm md:font-bold md:tracking-tighter'>
                  {i.title} <span className='text-[#2fb6bc]'>*</span>
                </div>

                <div className='mt-6 flex justify-between md:mt-2'>
                  <div className='text-sm font-medium text-[#2fb6bc] md:hidden md:text-xs'>
                    {text.certificate['28']}
                  </div>

                  <div className='flex space-x-5 md:hidden'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                      <div
                        key={i}
                        className='flex w-6 justify-center text-sm font-medium text-[#6b6b6b]'
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                </div>

                {i.list.map((j) => (
                  <Checkbox
                    key={j.id}
                    question={j.question}
                    register={register(j.num, {
                      required: '항목을 선택해주세요',
                    })}
                    error={errors[j.num]?.message}
                  >
                    {j.question === text.certificate['69'] && (
                      <input
                        type='text'
                        {...register('Q8_5_etc')}
                        className='h-10 w-[28rem] rounded-lg border border-[#d6d6d6] px-2.5 outline-none md:w-full md:text-sm'
                      />
                    )}
                  </Checkbox>
                ))}
              </div>
            ))}
            {/* 문항 3~9 */}

            {/* 문항 10 */}
            <div className='space-y-7 border-b border-dotted border-[#d6d6d6] py-12 md:h-[12rem] md:flex-col md:justify-center md:space-y-6 md:py-4'>
              <div className='text-xl font-medium md:text-sm md:font-bold md:tracking-tighter'>
                {text.certificate['79']}{' '}
                <span className='text-[#2fb6bc]'>*</span>
              </div>

              <div className='space-y-5 md:w-full md:justify-between'>
                {[
                  text.certificate['80'],
                  text.certificate['81'],
                  text.certificate['82'],
                ].map((i, index) => (
                  <div key={i} className='flex items-center space-x-4'>
                    <input
                      type='radio'
                      value={index + 1}
                      {...register('Q10', {
                        required: '항목을 선택해주세요',
                      })}
                      className={cls(
                        errors?.Q10?.message
                          ? 'bg-[url("/icons/checked-error.png")]'
                          : 'bg-[url("/icons/unchecked.png")] checked:bg-[url("/icons/checked.png")]',
                        'h-2.5 w-3.5 cursor-pointer appearance-none bg-cover bg-no-repeat outline-none md:bg-contain'
                      )}
                    />

                    <div className='text-lg md:text-sm'>{i}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* 문항 10 */}

            {/* 문항 11 */}
            <div className='space-y-7 py-12 md:h-[12rem] md:flex-col md:justify-center md:space-y-6 md:py-4'>
              <div className='text-xl font-medium md:text-sm md:tracking-tighter'>
                {text.certificate['83']}{' '}
                <span className='text-[#2fb6bc]'>*</span>
              </div>

              <div className='space-y-5 md:w-full md:justify-between'>
                {[text.certificate['84'], text.certificate['85']].map(
                  (i, index) => (
                    <div key={i} className='flex items-center space-x-4'>
                      <input
                        type='radio'
                        value={index + 1}
                        {...register('Q11', {
                          required: '항목을 선택해주세요',
                        })}
                        className={cls(
                          errors?.Q11?.message
                            ? 'bg-[url("/icons/checked-error.png")]'
                            : 'bg-[url("/icons/unchecked.png")] checked:bg-[url("/icons/checked.png")]',
                          'h-2.5 w-3.5 cursor-pointer appearance-none bg-cover bg-no-repeat outline-none md:bg-contain'
                        )}
                      />

                      <div className='text-lg md:text-sm'>{i}</div>
                    </div>
                  )
                )}
              </div>
            </div>
            {/* 문항 11 */}

            {/* 제출하기 */}
            <div className='flex justify-center'>
              <div
                onClick={handleSubmit(onValid, onInvalid)}
                className='mt-2 flex w-96 cursor-pointer justify-center rounded-lg bg-[#2fb6bc] py-4 text-lg font-medium text-white transition-all hover:opacity-90 md:py-3 md:text-base'
              >
                {text.certificate['86']}
              </div>
            </div>
            {/* 제출하기 */}
          </div>
        </div>

        {popup && <Popup />}
      </Layout>
    </>
  );
};

export default Certificate;
