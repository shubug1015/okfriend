import Layout from '@layouts/sectionLayout';
import { useLocale } from '@libs/client/useLocale';
import { cls, clsFilter } from '@libs/client/utils';
import Link from 'next/link';
import useSWR from 'swr';

interface IProfile {
  [key: string]: any;
}

interface IUser {
  ok: boolean;
  token: string | null;
  profile: IProfile | null;
}

export default function Header() {
  const { locale, text } = useLocale();
  const { data } = useSWR<IUser>('/api/user');
  return (
    <Layout bgColor='bg-[#f4f9fb]' padding='pt-40 md:pt-32 md:pb-5'>
      <div
        className={cls(
          clsFilter(locale, 'font-nexonBold', 'font-notoSans', 'font-notoSans'),
          'flex justify-center text-4xl font-bold md:text-2xl'
        )}
      >
        {text.mypageHeader['1']}
      </div>

      <div className='flex translate-y-[4.5rem] space-x-5 md:mt-8 md:translate-y-0 md:flex-col md:space-x-0 md:space-y-2.5'>
        <div className='flex h-36 w-[48.75rem] flex-col justify-between rounded bg-white py-7 px-12 shadow-md md:h-[4.25rem] md:w-full md:flex-row md:items-center md:py-0 md:px-6'>
          <div className='text-[1.75rem] font-bold md:text-xl'>
            {data?.profile?.name}님
          </div>

          <Link href='/mypage/edit'>
            <a className='flex'>
              <span className='text-[#6b6b6b] md:text-[0.938rem]'>
                {text.mypageHeader['2']}
              </span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mt-0.5 ml-2 w-4 text-[#6b6b6b] md:ml-1 md:w-3.5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={3}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </a>
          </Link>
        </div>

        <div className='flex h-36 grow items-center justify-between rounded bg-white shadow-md md:h-[6.313rem] md:w-full'>
          <div className='flex w-full flex-col justify-between px-7'>
            <div className='flex justify-between'>
              <div className='font-bold md:text-[0.938rem]'>
                {text.mypageHeader['3']}
              </div>

              <Link href='/mypage/mileage/1'>
                <a className='flex'>
                  <span className='text-sm text-[#9e9e9e] md:text-[0.938rem]'>
                    {text.mypageHeader['4']}
                  </span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='mb-0.5 ml-1 w-3.5 text-[#9e9e9e] md:ml-1 md:w-3.5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </a>
              </Link>
            </div>
            <div className='mt-2 text-[1.75rem] font-bold md:text-[1.375rem]'>
              {data?.profile?.total_mileage.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
