import Banner from '@components/banner';
import PdfKo from '@components/pdf/ko';
import Popup from '@components/pdf/popup';
import SEO from '@components/seo';
import Checkbox from '@components/support/certificate/checkbox';
import { list } from '@components/support/certificate/list';
import Navigator from '@components/support/navigator';
import Layout from '@layouts/sectionLayout';
import { surveyApi } from '@libs/api';
import { useUser } from '@libs/client/useUser';
import { cls } from '@libs/client/utils';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

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
  const { token } = useUser({ isPrivate: true });
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
          Q1: data.Q1 === '기타' ? Q1_etc : data.Q1,
          Q8_5: `${Q8_5_etc} ${data.Q8_5}`,
        },
        token as string
      );
      alert('제출이 완료되었습니다');
      closePopup();
    } catch {
      alert('Error');
    }
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  const closePopup = () => setPopup(false);
  useEffect(() => {
    if (popup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [popup]);
  return (
    <>
      <SEO title='지원센터' />
      <Banner
        title='지원센터 1:1 문의하기'
        navList={['지원센터', '1:1 문의하기']}
      />
      <Navigator supportCategory='certificate' />

      <Layout bgColor='bg-[#f4f9fb]' padding='pt-16 pb-24'>
        <div>
          <div className='font-nexonBold text-4xl font-bold'>
            <span className='text-[#2fb6bc]'>이수증</span> 발급 안내
          </div>

          <div className='mt-4 text-lg'>
            아래 설문조사를 모두 마칠 경우, 이수증 발급이 가능합니다.
          </div>

          <div className='mt-14 rounded bg-white p-10 pb-16'>
            <div className='border-b border-[#9e9e9e] pb-10 text-2xl font-bold'>
              <span className='text-[#2fb6bc]'>2022</span> 재외동포대학생
              온라인연수 만족도 조사
            </div>

            {/* 문항 1 */}
            <div className='space-y-7 border-b border-dotted border-[#d6d6d6] py-12 md:h-40 md:flex-col md:justify-center md:space-y-6'>
              <div className='text-xl font-medium'>
                1. 귀하께서 개인적으로 이 프로그램에 참가한 목적은 무엇입니까?{' '}
                <span className='text-[#2fb6bc]'>* 필수</span>
              </div>

              <div className='space-y-5 md:w-full md:justify-between'>
                {[
                  '다른 국가와 문화권 재외동포 대학생들과의 온라인 만남의 기회',
                  '한국에 대한 이해 증진',
                  '재외동포에 대한 이해 증진',
                  '한국어 능력 향상',
                  '기타',
                ].map((i) => (
                  <div
                    key={i}
                    className='flex items-center space-x-4 md:flex-col md:items-center md:space-y-1'
                  >
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
                        'h-2.5 w-3.5 cursor-pointer appearance-none bg-cover outline-none'
                      )}
                    />

                    <div className='text-lg'>{i}</div>

                    {i === '기타' && (
                      <input
                        type='text'
                        {...register('Q1_etc')}
                        readOnly={watch('Q1') !== '기타'}
                        className={cls(
                          watch('Q1') !== '기타'
                            ? 'cursor-default opacity-50'
                            : '',
                          'h-10 w-[28rem] rounded-lg border border-[#d6d6d6] px-2.5 outline-none'
                        )}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* 문항 1 */}

            {/* 문항 2 */}
            <div className='space-y-7 border-b border-dotted border-[#d6d6d6] py-12 md:h-40 md:flex-col md:justify-center md:space-y-6'>
              <div className='text-xl font-medium'>
                2. 위에서 답한 ‘개인적인 참가 목적’이 달성되었다고 생각하십니까?{' '}
                <span className='text-[#2fb6bc]'>*</span>
              </div>

              <div className='space-y-5 md:w-full md:justify-between'>
                {[
                  '1) 매우 그렇다',
                  '2) 그렇다',
                  '3) 보통이다',
                  '4) 그렇지 않다',
                  '5) 전혀 그렇지 않다',
                ].map((i) => (
                  <div
                    key={i}
                    className='flex items-center space-x-4 md:flex-col md:items-center md:space-y-1'
                  >
                    <input
                      type='radio'
                      value={i}
                      {...register('Q2', {
                        required: '항목을 선택해주세요',
                      })}
                      className={cls(
                        errors?.Q2?.message
                          ? 'bg-[url("/icons/checked-error.png")]'
                          : 'bg-[url("/icons/unchecked.png")] checked:bg-[url("/icons/checked.png")]',
                        'h-2.5 w-3.5 cursor-pointer appearance-none bg-cover outline-none'
                      )}
                    />

                    <div className='text-lg'>{i}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* 문항 2 */}

            {/* 문항 3~9 */}
            {list.map((i) => (
              <div key={i.id} className='mt-14'>
                <div className='text-xl font-medium'>
                  {i.title} <span className='text-[#2fb6bc]'>*</span>
                </div>

                <div className='mt-6 flex justify-between md:mt-7'>
                  <div className='text-sm font-medium text-[#2fb6bc] md:text-xs'>
                    · 이해하고 알게 된 정도에 따라 10점에 가깝게 표시해주세요.
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
                    {j.question === '5. 기타' && (
                      <input
                        type='text'
                        {...register('Q8_5_etc')}
                        className='h-10 w-[28rem] rounded-lg border border-[#d6d6d6] px-2.5 outline-none'
                      />
                    )}
                  </Checkbox>
                ))}
              </div>
            ))}
            {/* 문항 3~9 */}

            {/* 문항 10 */}
            <div className='space-y-7 border-b border-dotted border-[#d6d6d6] py-12 md:h-40 md:flex-col md:justify-center md:space-y-6'>
              <div className='text-xl font-medium'>
                10. 연수 프로그램에 대해 어떻게 생각하시나요?{' '}
                <span className='text-[#2fb6bc]'>*</span>
              </div>

              <div className='space-y-5 md:w-full md:justify-between'>
                {[
                  '1) 더욱 확대 되어야 한다.',
                  '2) 금년과 같은 수준으로 유지',
                  '3) 금년보다 축소되어야 한다.',
                ].map((i) => (
                  <div
                    key={i}
                    className='flex items-center space-x-4 md:flex-col md:items-center md:space-y-1'
                  >
                    <input
                      type='radio'
                      value={i}
                      {...register('Q10', {
                        required: '항목을 선택해주세요',
                      })}
                      className={cls(
                        errors?.Q10?.message
                          ? 'bg-[url("/icons/checked-error.png")]'
                          : 'bg-[url("/icons/unchecked.png")] checked:bg-[url("/icons/checked.png")]',
                        'h-2.5 w-3.5 cursor-pointer appearance-none bg-cover outline-none'
                      )}
                    />

                    <div className='text-lg'>{i}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* 문항 10 */}

            {/* 문항 11 */}
            <div className='space-y-7 py-12 md:h-40 md:flex-col md:justify-center md:space-y-6'>
              <div className='text-xl font-medium'>
                11. 연수 프로그램을 친척이나 다른 친구들에게 권유하시겠습니까?{' '}
                <span className='text-[#2fb6bc]'>*</span>
              </div>

              <div className='space-y-5 md:w-full md:justify-between'>
                {['1) 권유 하겠습니다.', '2) 권유하지 않겠습니다.'].map((i) => (
                  <div
                    key={i}
                    className='flex items-center space-x-4 md:flex-col md:items-center md:space-y-1'
                  >
                    <input
                      type='radio'
                      value={i}
                      {...register('Q11', {
                        required: '항목을 선택해주세요',
                      })}
                      className={cls(
                        errors?.Q11?.message
                          ? 'bg-[url("/icons/checked-error.png")]'
                          : 'bg-[url("/icons/unchecked.png")] checked:bg-[url("/icons/checked.png")]',
                        'h-2.5 w-3.5 cursor-pointer appearance-none bg-cover outline-none'
                      )}
                    />

                    <div className='text-lg'>{i}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* 문항 11 */}

            {/* 제출하기 */}
            <div className='flex justify-center'>
              <div
                onClick={handleSubmit(onValid, onInvalid)}
                className='mt-2 flex w-96 cursor-pointer justify-center rounded-lg bg-[#2fb6bc] py-4 text-lg font-medium text-white transition-all hover:opacity-90 md:py-3 md:text-base'
              >
                제출하기
              </div>
            </div>
            {/* 제출하기 */}
          </div>
        </div>

        {popup && <Popup closePopup={closePopup} />}
      </Layout>
    </>
  );
};

export default Certificate;
