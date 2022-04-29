import Layout from '@layouts/sectionLayout';
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
  const { data } = useSWR<IUser>('/api/user');
  return (
    <Layout bgColor='bg-[#f4f9fb]' padding='pt-40'>
      <div className='flex justify-center text-4xl font-bold'>마이페이지</div>

      <div className='flex translate-y-[4.5rem] space-x-5'>
        <div className='flex h-36 w-[48.75rem] flex-col justify-between rounded bg-white py-7 px-12 shadow-md'>
          <div className='text-[1.75rem] font-bold'>{data?.profile?.name}</div>

          <Link href='/mypage/edit'>
            <a className='flex'>
              <span className='text-[#6b6b6b]'>내 정보 수정</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mt-0.5 ml-2 w-4 text-[#6b6b6b]'
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

        <div className='flex h-36 grow items-center justify-between rounded bg-white shadow-md'>
          <div className='flex w-full flex-col justify-between px-7'>
            <div className='flex justify-between'>
              <div className='font-bold'>현재 마일리지</div>

              <Link href='/mypage/mileage/1'>
                <a className='flex'>
                  <span className='text-sm text-[#9e9e9e]'>마일리지 내역</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='mb-0.5 ml-1 w-3.5 text-[#9e9e9e]'
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
            <div className='mt-2 text-[1.75rem] font-bold'>
              {data?.profile?.total_mileage.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
