import Layout from '@layouts/sectionLayout';

interface IProps {
  data: any[];
}

export default function Tutor() {
  return (
    <>
      <Layout padding='pt-20 pb-24'>
        <div className='text-2xl font-bold'>강사소개</div>
      </Layout>

      <Layout bgColor='bg-[#f8f8f8]'>
        <div className='relative pt-16 pb-8'>
          <div>
            <svg
              width='28'
              height='28'
              viewBox='0 0 28 28'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M2 28V2H28' stroke='#6B6B6B' strokeWidth='3' />
            </svg>

            <div className='ml-[1.625rem]'>
              <div className='flex items-center space-x-6'>
                <span className='text-[2rem] font-bold'>Kim Junu</span>
                <span className='text-xl font-bold'>김준우</span>
              </div>

              <div className='text-lg text-[#9e9e9e] mt-1'>
                icessea@naver.com
              </div>

              <div className='mt-2.5'>
                글로벌 유행인 K팝과 K패션의 흐름과 트랜드를 알아보며
                <br />
                글로벌 패션을 선도하고 K패션의 글로벌 인지도를 확대하고자 함
              </div>
            </div>

            <svg
              width='28'
              height='28'
              viewBox='0 0 28 28'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='ml-[28.5rem]'
            >
              <path d='M26 0L26 26L0 26' stroke='#6B6B6B' strokeWidth='3' />
            </svg>
          </div>

          <div className='mt-6 ml-[1.625rem]'>
            <div className='text-xl font-bold'>상세 이력</div>

            <div className='text-[#626262] mt-2.5'>
              現)EBS(한국교육방송) 강사
              <br />
              現)신일고등학교 교사
              <br />
              現)EBS(한국교육방송) 강사
              <br />
              現)신일고등학교 교사
            </div>
          </div>

          <div className='absolute top-1/2 right-0 -translate-y-1/2 w-[36.25rem] h-[35.875rem] bg-slate-500'></div>
        </div>
      </Layout>

      <div className='mt-40' />
    </>
  );
}
