import Layout from '@layouts/sectionLayout';
import Link from 'next/link';

export default function Notice() {
  const data = [
    {
      id: 0,
      title: '2021 OKF 재외동포대학생온라인모국연수 항공료 지원 대상자',
      date: '2021.12.01',
    },
    {
      id: 1,
      title: '2021 OKF 재외동포대학생온라인모국연수 항공료 지원 대상자',
      date: '2021.12.01',
    },
    {
      id: 2,
      title: '2021 OKF 재외동포대학생온라인모국연수 항공료 지원 대상자',
      date: '2021.12.01',
    },
    {
      id: 3,
      title: '2021 OKF 재외동포대학생온라인모국연수 항공료 지원 대상자',
      date: '2021.12.01',
    },
    {
      id: 4,
      title: '2021 OKF 재외동포대학생온라인모국연수 항공료 지원 대상자',
      date: '2021.12.01',
    },
    {
      id: 5,
      title: '2021 OKF 재외동포대학생온라인모국연수 항공료 지원 대상자',
      date: '2021.12.01',
    },
    {
      id: 6,
      title: '2021 OKF 재외동포대학생온라인모국연수 항공료 지원 대상자',
      date: '2021.12.01',
    },
    {
      id: 7,
      title: '2021 OKF 재외동포대학생온라인모국연수 항공료 지원 대상자',
      date: '2021.12.01',
    },
    {
      id: 8,
      title: '2021 OKF 재외동포대학생온라인모국연수 항공료 지원 대상자',
      date: '2021.12.01',
    },
    {
      id: 9,
      title: '2021 OKF 재외동포대학생온라인모국연수 항공료 지원 대상자',
      date: '2021.12.01',
    },
  ];

  return (
    <Layout padding='pt-[4.625rem] pb-[5.688rem]'>
      <div className='flex justify-between text-[#01111e] w-full'>
        <div className='text-4xl font-bold font-sans'>NOTICE</div>

        <Link href='/'>
          <a className='flex items-center'>
            <span className='text-lg font-medium'>더보기</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='ml-2 w-3'
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

      <div className='grid grid-rows-5 grid-flow-col text-[#0111e] gap-x-[3.625rem] mt-8'>
        {data?.map((i) => (
          <Link href='/' key={i.id}>
            <a className='h-20 flex items-center justify-between border-b border-[#d6d6d6] hover:opacity-70 transition-all'>
              <div className='flex items-center space-x-3'>
                {(i.id === 0 || i.id === 1) && (
                  <div className='text-[0.812rem] font-bold py-[0.312rem] px-[0.812rem] bg-[#d60a51] text-white rounded'>
                    공 지
                  </div>
                )}
                <div className='text-lg font-medium'>{i.title}</div>
              </div>
              <div>{i.date}</div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
