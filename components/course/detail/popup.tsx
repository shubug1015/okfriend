import { surveyApi } from '@libs/api';
import { IUser } from '@libs/client/useUser';
import { cls, clsFilter } from '@libs/client/utils';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import useSWR from 'swr';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useLocale } from '@libs/client/useLocale';

interface IForm {
  Q1: string;
  Q2: string;
  Q3: string;
  Q4: string;
  Q5: string;
  Q6: string;
  Q7: string;
}

interface IProps {
  id: string;
  closePopup: () => void;
}

const popupVar = {
  invisible: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Popup({ id, closePopup }: IProps) {
  const { locale, text } = useLocale();
  const { data: myData } = useSWR<IUser>('/api/user');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onChange',
  });
  const onValid = async (data: IForm) => {
    try {
      await surveyApi.courseSurvey(id, { ...data }, myData?.token as string);
      alert('제출이 완료되었습니다');
      closePopup();
    } catch {
      alert('Error');
    }
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  useEffect(() => {
    disableBodyScroll(document.body);
    return () => {
      enableBodyScroll(document.body);
    };
  }, []);
  return (
    <div
      onClick={closePopup}
      className='fixed top-0 left-0 z-[9999] flex h-screen w-screen items-start justify-center overflow-y-scroll bg-[rgba(0,0,0,0.2)] py-40'
    >
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
          return;
        }}
        variants={popupVar}
        initial='invisible'
        animate='visible'
        exit='exit'
        className='relative w-[60rem] rounded bg-white py-16 px-12 md:w-[330px] md:rounded-2xl md:px-3 md:py-12'
      >
        <div className='absolute top-8 right-8 md:-top-10 md:right-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 cursor-pointer'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
            onClick={closePopup}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </div>

        <div
          className={cls(
            clsFilter(
              locale,
              'font-nexonBold',
              'font-notoSans',
              'font-notoSans'
            ),
            'text-center text-3xl font-bold leading-[1.5] md:text-[1.375rem]'
          )}
        >
          {text.courseSurvey['1']}{' '}
          <span className='text-[#2fb6bc]'>{text.courseSurvey['2']}</span>
        </div>

        <div className='mt-2.5 text-center text-lg font-medium md:mt-5 md:tracking-tight'>
          2022 OKFriends CyberCamp -Youth-
        </div>

        <div className='mt-6 whitespace-pre-wrap border-t-2 border-dotted border-[#9e9e9e] pt-6 text-center text-lg font-medium text-[#6b6b6b] md:text-sm'>
          {text.courseSurvey['3']}
        </div>

        <div className='mt-12 flex justify-between border-b border-[#d6d6d6] pb-3 md:mt-7'>
          <div className='text-sm font-medium text-[#2fb6bc] md:text-xs'>
            {text.courseSurvey['4']}
          </div>

          <div className='flex space-x-5 md:hidden'>
            <div className='flex w-6 justify-center text-sm font-medium text-[#6b6b6b]'>
              1
            </div>
            <div className='flex w-6 justify-center text-sm font-medium text-[#6b6b6b]'>
              2
            </div>
            <div className='flex w-6 justify-center text-sm font-medium text-[#6b6b6b]'>
              3
            </div>
            <div className='flex w-6 justify-center text-sm font-medium text-[#6b6b6b]'>
              4
            </div>
            <div className='flex w-6 justify-center text-sm font-medium text-[#6b6b6b]'>
              5
            </div>
          </div>
        </div>

        {/* 문항 1 */}
        <div className='flex h-20 items-center justify-between border-b border-dotted border-[#d6d6d6] md:h-40 md:flex-col md:justify-center md:space-y-6'>
          <div className='pl-1 text-lg md:text-sm'>
            {text.courseSurvey['5']} <br className='md:hidden' />
            {text.courseSurvey['6']}
          </div>

          <div className='flex space-x-5 md:w-full md:justify-between'>
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className='flex md:flex-col md:items-center md:space-y-1'
              >
                <div className='hidden text-sm font-medium text-[#6b6b6b] md:block'>
                  {i}
                </div>
                <input
                  type='radio'
                  value={i}
                  {...register('Q1', {
                    required: '항목을 선택해주세요',
                  })}
                  className={cls(
                    errors?.Q1?.message ? 'border-red-500' : 'border-[#d6d6d6]',
                    'h-6 w-6 cursor-pointer appearance-none rounded-full border-2 bg-cover outline-none checked:border-none checked:bg-[url("/icons/radio-checked.png")]'
                  )}
                />
              </div>
            ))}
          </div>
        </div>
        {/* 문항 1 */}

        {/* 문항 2 */}
        <div className='flex h-20 items-center justify-between border-b border-dotted border-[#d6d6d6] md:h-40 md:flex-col md:justify-center md:space-y-6'>
          <div className='pl-1 text-lg md:text-sm'>
            {text.courseSurvey['7']} <br className='md:hidden' />
            {text.courseSurvey['8']}
          </div>

          <div className='flex space-x-5 md:w-full md:justify-between'>
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className='flex md:flex-col md:items-center md:space-y-1'
              >
                <div className='hidden text-sm font-medium text-[#6b6b6b] md:block'>
                  {i}
                </div>
                <input
                  type='radio'
                  value={i}
                  {...register('Q2', {
                    required: '항목을 선택해주세요',
                  })}
                  className={cls(
                    errors?.Q2?.message ? 'border-red-500' : 'border-[#d6d6d6]',
                    'h-6 w-6 cursor-pointer appearance-none rounded-full border-2 bg-cover outline-none checked:border-none checked:bg-[url("/icons/radio-checked.png")]'
                  )}
                />
              </div>
            ))}
          </div>
        </div>
        {/* 문항 2 */}

        {/* 문항 3 */}
        <div className='flex h-20 items-center justify-between border-b border-dotted border-[#d6d6d6] md:h-40 md:flex-col md:justify-center md:space-y-6'>
          <div className='pl-1 text-lg md:text-sm'>
            {text.courseSurvey['9']} <br className='md:hidden' />
            {text.courseSurvey['10']}
          </div>

          <div className='flex space-x-5 md:w-full md:justify-between'>
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className='flex md:flex-col md:items-center md:space-y-1'
              >
                <div className='hidden text-sm font-medium text-[#6b6b6b] md:block'>
                  {i}
                </div>
                <input
                  type='radio'
                  value={i}
                  {...register('Q3', {
                    required: '항목을 선택해주세요',
                  })}
                  className={cls(
                    errors?.Q3?.message ? 'border-red-500' : 'border-[#d6d6d6]',
                    'h-6 w-6 cursor-pointer appearance-none rounded-full border-2 bg-cover outline-none checked:border-none checked:bg-[url("/icons/radio-checked.png")]'
                  )}
                />
              </div>
            ))}
          </div>
        </div>
        {/* 문항 3 */}

        {/* 문항 4 */}
        <div className='flex h-20 items-center justify-between border-b border-dotted border-[#d6d6d6] md:h-40 md:flex-col md:justify-center md:space-y-6'>
          <div className='pl-1 text-lg md:text-sm'>
            {text.courseSurvey['11']}
          </div>

          <div className='flex space-x-5 md:w-full md:justify-between'>
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className='flex md:flex-col md:items-center md:space-y-1'
              >
                <div className='hidden text-sm font-medium text-[#6b6b6b] md:block'>
                  {i}
                </div>
                <input
                  type='radio'
                  value={i}
                  {...register('Q4', {
                    required: '항목을 선택해주세요',
                  })}
                  className={cls(
                    errors?.Q4?.message ? 'border-red-500' : 'border-[#d6d6d6]',
                    'h-6 w-6 cursor-pointer appearance-none rounded-full border-2 bg-cover outline-none checked:border-none checked:bg-[url("/icons/radio-checked.png")]'
                  )}
                />
              </div>
            ))}
          </div>
        </div>
        {/* 문항 4 */}

        {/* 문항 5 */}
        <div className='flex h-20 items-center justify-between border-b border-dotted border-[#d6d6d6] md:h-40 md:flex-col md:justify-center md:space-y-6'>
          <div className='pl-1 text-lg md:text-sm'>
            {text.courseSurvey['12']}
          </div>

          <div className='flex space-x-5 md:w-full md:justify-between'>
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className='flex md:flex-col md:items-center md:space-y-1'
              >
                <div className='hidden text-sm font-medium text-[#6b6b6b] md:block'>
                  {i}
                </div>
                <input
                  type='radio'
                  value={i}
                  {...register('Q5', {
                    required: '항목을 선택해주세요',
                  })}
                  className={cls(
                    errors?.Q5?.message ? 'border-red-500' : 'border-[#d6d6d6]',
                    'h-6 w-6 cursor-pointer appearance-none rounded-full border-2 bg-cover outline-none checked:border-none checked:bg-[url("/icons/radio-checked.png")]'
                  )}
                />
              </div>
            ))}
          </div>
        </div>
        {/* 문항 5 */}

        {/* 문항 6 */}
        <div className='flex h-20 items-center justify-between border-b border-dotted border-[#d6d6d6] md:h-40 md:flex-col md:justify-center md:space-y-6'>
          <div className='pl-1 text-lg md:text-sm'>
            {text.courseSurvey['13']}
          </div>

          <div className='flex space-x-5 md:w-full md:justify-between'>
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className='flex md:flex-col md:items-center md:space-y-1'
              >
                <div className='hidden text-sm font-medium text-[#6b6b6b] md:block'>
                  {i}
                </div>
                <input
                  type='radio'
                  value={i}
                  {...register('Q6', {
                    required: '항목을 선택해주세요',
                  })}
                  className={cls(
                    errors?.Q6?.message ? 'border-red-500' : 'border-[#d6d6d6]',
                    'h-6 w-6 cursor-pointer appearance-none rounded-full border-2 bg-cover outline-none checked:border-none checked:bg-[url("/icons/radio-checked.png")]'
                  )}
                />
              </div>
            ))}
          </div>
        </div>
        {/* 문항 6 */}

        {/* 문항 7 */}
        <div className='mt-8 space-y-3 md:space-y-2'>
          <div className='font-medium'>{text.courseSurvey['14']}</div>

          <textarea
            placeholder={text.courseSurvey['15']}
            {...register('Q7', {
              required: '항목 입력해주세요',
            })}
            className='h-40 w-full rounded border border-[#d6d6d6] px-5 pt-4 outline-none placeholder:text-[#d6d6d6] md:h-52 md:px-2.5 md:pt-[0.8rem] md:text-[0.938rem]'
          />
        </div>
        {/* 문항 7 */}

        {/* 제출하기 */}
        <div className='flex justify-center'>
          <div
            onClick={handleSubmit(onValid, onInvalid)}
            className='mt-12 flex w-96 cursor-pointer justify-center rounded-lg bg-[#2fb6bc] py-4 text-lg font-medium text-white transition-all hover:opacity-90 md:py-3 md:text-base'
          >
            {text.courseSurvey['16']}
          </div>
        </div>
        {/* 제출하기 */}
      </motion.div>
    </div>
  );
}
