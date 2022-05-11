import Layout from '@layouts/sectionLayout';
import { cls } from '@libs/client/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Popup from '@components/course/detail/popup';
import { courseApi } from '@libs/api';
import { useRouter } from 'next/router';
import { IUser } from '@libs/client/useUser';
import useSWR from 'swr';
import Vimeo from '@u-wave/react-vimeo';

interface IProps {
  [key: string]: any;
  progress: number;
  isRegistered: boolean;
  completed: boolean;
  survey: boolean;
  mutate: (args: { [key: string]: any }) => void;
}

export default function Detail({
  data,
  progress,
  isRegistered,
  completed,
  survey,
  mutate,
}: IProps) {
  const { data: myData } = useSWR<IUser>('/api/user');
  const router = useRouter();
  const [, category, id] = router.query.slug as string[];

  const [isPlaying, setIsPlaying] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [popup, setPopup] = useState(false);
  const closePopup = () => setPopup(false);

  const copyUrl = () => {
    const url = window.location.href;
    navigator.clipboard

      .writeText(url)
      .then(() => alert('링크가 복사되었습니다.'));
  };

  const registerCourse = () => {
    if (myData?.token) {
      try {
        courseApi.registerCourse(id, myData?.token as string);
        mutate({ ...data });
      } catch {
        alert('Error');
      }
    } else {
      router.push('/login');
    }
  };

  useEffect(() => {
    if (popup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [popup]);

  // useEffect(() => {
  //   const setProgress = () => {
  //     courseApi.sendProgress(id, progressPer, myData?.token as string);
  //   };
  //   router.events.on('routeChangeStart', setProgress);
  //   window.addEventListener('beforeunload', setProgress);
  //   return () => {
  //     router.events.off('routeChangeStart', setProgress);
  //     window.removeEventListener('beforeunload', setProgress);
  //   };
  // }, [myData, progressPer]);

  const setProgress = async () => {
    try {
      await courseApi.sendProgress(
        id,
        progressPercent,
        myData?.token as string
      );
    } catch {
      alert('Error');
    }
  };

  useEffect(() => {
    if (isPlaying) {
      let timer = setInterval(setProgress, 10000);
      return () => clearInterval(timer);
    }
  }, [isPlaying]);
  return (
    <>
      <div>
        <div className='flex justify-between space-x-20 md:flex-col md:space-x-0 md:space-y-6'>
          {/* 썸네일 */}
          <div className='relative h-[26.125rem] w-[44.688rem] md:h-48 md:w-full'>
            {isRegistered ? (
              <Vimeo
                video={data?.url}
                className='h-full w-full'
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onTimeUpdate={(e) => setProgressPercent(e.percent * 100)}
              />
            ) : (
              data?.thumbnail && (
                <Image
                  src={data?.thumbnail}
                  alt='Course Thumbnail'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg'
                />
              )
            )}
          </div>
          {/* 썸네일 */}

          {/* 강의 상세정보 */}
          <div className='flex w-[23.75rem] flex-col justify-center md:w-full'>
            {/* 카테고리 */}
            <div
              className={cls(
                category === 'live' ? 'bg-[#f6a500]' : 'bg-[#d60a51]',
                'flex h-[1.875rem] w-[4.375rem] items-center justify-center rounded-md text-xs font-bold text-white'
              )}
            >
              {category === 'live'
                ? 'LIVE 차시'
                : category === 'required'
                ? '필수 차시'
                : category === 'elective'
                ? '선택 차시'
                : '지난 강의'}
            </div>
            {/* 카테고리 */}

            {/* 강의명 */}
            <div className='mt-4 text-3xl font-bold md:mt-3 md:text-2xl'>
              {data?.name}
            </div>
            {/* 강의명 */}

            {/* 강사명 & 강의 길이 */}
            <div className='mt-1.5 text-sm md:mt-4'>
              {data?.tutor.name} · {data?.total_time}
            </div>
            {/* 강사명 & 강의 길이 */}

            {/* 간략 설명 */}
            <div className='mt-5 md:mt-2.5 md:text-sm'>{data?.text}</div>
            {/* 간략 설명 */}

            {/* 복사 & 구매 버튼 */}
            <div className='mt-8 space-y-3 md:mt-6'>
              {isRegistered ? (
                <div className='flex h-[3.625rem] items-center justify-center rounded-lg bg-[#01111e] font-bold text-white'>
                  수강중인 강의
                </div>
              ) : (
                <div
                  onClick={registerCourse}
                  className='flex h-[3.625rem] cursor-pointer items-center justify-center rounded-lg bg-[#01111e] font-bold text-white transition-all hover:opacity-90'
                >
                  강의 듣기
                </div>
              )}

              <div className='grid grid-cols-2 gap-x-5'>
                {category === 'past' ? (
                  <>
                    <div className='flex h-[3.625rem] cursor-pointer items-center justify-center space-x-2 rounded-lg border border-[#9e9e9e] transition-all hover:opacity-70'>
                      <svg
                        width='21'
                        height='20'
                        viewBox='0 0 21 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='translate-y-px'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M17.5833 7.5C17.5833 5.83333 16.3333 4.25 14.5 4.25C12.5833 4.25 11.3333 5.60833 10.5 7.025C9.66667 5.60833 8.41667 4.25 6.5 4.25C4.66667 4.25 3.41667 5.7225 3.41667 7.5C3.41667 11.35 7.54083 13.8892 10.5 15.5192C13.4592 13.8892 17.5833 11.35 17.5833 7.5ZM1.75 7.35333C1.75 4.6725 3.80167 2.5 6.33333 2.5C8.58333 2.5 9.66667 3.33333 10.5 4.33333C11.3333 3.33333 12.4167 2.5 14.6667 2.5C17.1983 2.5 19.25 4.6725 19.25 7.35333C19.25 12.3558 14.4033 15.4333 10.5 17.5C6.59667 15.4333 1.75 12.3558 1.75 7.35333Z'
                          fill='#01111E'
                        />
                      </svg>
                      <div>2075</div>
                    </div>

                    <div
                      onClick={copyUrl}
                      className='flex h-[3.625rem] cursor-pointer items-center justify-center space-x-2 rounded-lg border border-[#9e9e9e] transition-all hover:opacity-70'
                    >
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='translate-y-px'
                      >
                        <path
                          d='M14.1673 16.6693H5.00065C4.08018 16.6693 3.33398 15.9231 3.33398 15.0026V5.83594C3.33398 4.91546 4.08018 4.16927 5.00065 4.16927H7.50065C7.96089 4.16927 8.33398 4.54237 8.33398 5.0026C8.33398 5.46284 7.96089 5.83594 7.50065 5.83594H5.00065V15.0026H14.1673V12.5026C14.1673 12.0424 14.5404 11.6693 15.0007 11.6693C15.4609 11.6693 15.834 12.0424 15.834 12.5026V15.0026C15.834 15.9231 15.0878 16.6693 14.1673 16.6693ZM10.34 10.8365C10.0146 11.1615 9.48726 11.161 9.16251 10.8353C8.83826 10.5101 8.83863 9.98379 9.16334 9.65908L13.8198 5.0026H11.6673C11.2071 5.0026 10.834 4.62951 10.834 4.16927C10.834 3.70903 11.2071 3.33594 11.6673 3.33594H15.9509C16.3466 3.33594 16.6673 3.65667 16.6673 4.05231V8.33594C16.6673 8.79617 16.2942 9.16927 15.834 9.16927C15.3737 9.16927 15.0007 8.79617 15.0007 8.33594V6.18177L10.34 10.8365Z'
                          fill='#01111E'
                        />
                      </svg>

                      <div>공유</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      onClick={() => {
                        if (completed) {
                          if (survey) {
                            alert('이미 설문조사를 완료하였습니다.');
                          } else {
                            setPopup(true);
                          }
                        } else {
                          alert('강의 수강 완료 시 가능합니다.');
                        }
                      }}
                      className='flex h-[3.625rem] cursor-pointer items-center justify-center rounded-lg border border-[#9e9e9e] text-[#6b6b6b] transition-all hover:opacity-70'
                    >
                      필수 설문조사
                    </div>

                    <a
                      href={data?.syllabus}
                      download
                      target='_blank'
                      rel='noreferrer'
                      className='flex h-[3.625rem] cursor-pointer items-center justify-center rounded-lg border border-[#9e9e9e] text-[#6b6b6b] transition-all hover:opacity-70'
                    >
                      강의 계획서
                    </a>
                  </>
                )}
              </div>
            </div>
            {/* 복사 & 구매 버튼 */}
          </div>
          {/* 강의 상세정보 */}
        </div>

        {/* 진행률 */}
        {isRegistered && (
          <div className='mt-5 flex w-[44.688rem] items-center space-x-4 md:mt-8 md:w-full md:flex-col md:items-start md:space-x-0 md:space-y-4'>
            <div className='flex h-9 w-24 items-center justify-center rounded-lg border border-[#d60a51] text-lg font-bold text-[#d60a51]'>
              진행률
            </div>

            <div className='h-3 grow rounded-full bg-[#d6d6d6] md:h-2 md:w-full'>
              <div
                className='h-3 rounded-full bg-[#d60a51] md:h-2'
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
        {/* 진행률 */}
      </div>

      {popup && <Popup id={id} closePopup={closePopup} />}
    </>
  );
}
