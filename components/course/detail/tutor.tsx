import Layout from '@layouts/sectionLayout';
import Image from 'next/image';

interface IProps {
  [key: string]: any;
}

export default function Tutor({ tutor }: IProps) {
  console.log(tutor);
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
                <span className='text-[2rem] font-bold'>{tutor?.en_name}</span>
                <span className='text-xl font-bold'>{tutor?.name}</span>
              </div>

              <div className='mt-1 text-lg text-[#9e9e9e]'>{tutor?.email}</div>

              <div className='mt-2.5'>{tutor?.text}</div>
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

            <div className='mt-2.5 text-[#626262]'>
              {tutor?.career.map((i: { [key: string]: any }) => (
                <div key={i.id}>{i.text}</div>
              ))}
            </div>
          </div>

          <div className='absolute top-1/2 right-0 h-[35.875rem] w-[36.25rem] -translate-y-1/2'>
            {tutor?.image && (
              <Image
                src={tutor?.image}
                alt='Tutor Image'
                layout='fill'
                objectFit='cover'
              />
            )}
          </div>
        </div>
      </Layout>

      <div className='mt-40' />
    </>
  );
}
