import Layout from '@layouts/sectionLayout';
import { useLocale } from '@libs/client/useLocale';
import Image from 'next/image';

interface IProps {
  [key: string]: any;
}

export default function Tutor({ tutor }: IProps) {
  const { text } = useLocale();
  return (
    <>
      <Layout padding='pt-20 pb-24 md:py-12'>
        <div className='text-2xl font-bold md:text-xl'>
          {text.courseDetail['15']}
        </div>
      </Layout>

      <Layout bgColor='bg-[#f8f8f8] md:bg-transparent'>
        <div className='relative pt-16 pb-8 md:flex md:flex-col md:items-center md:pt-0'>
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

            <div className='ml-[1.625rem] w-[27rem] md:w-56'>
              <div className='flex items-center space-x-6'>
                <span className='text-[2rem] font-bold md:text-[1.75rem]'>
                  {tutor?.name}
                </span>
                <span className='text-xl font-bold md:text-lg'>
                  {tutor?.en_name}
                </span>
              </div>

              <div className='mt-1 text-lg text-[#9e9e9e] md:text-base'>
                {tutor?.email}
              </div>

              <div className='mt-2.5 md:text-sm'>{tutor?.text}</div>
            </div>

            <svg
              width='28'
              height='28'
              viewBox='0 0 28 28'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='ml-[28.5rem] md:ml-64'
            >
              <path d='M26 0L26 26L0 26' stroke='#6B6B6B' strokeWidth='3' />
            </svg>
          </div>

          <div className='mt-6 ml-[1.625rem] md:hidden'>
            <div className='text-xl font-bold'>{text.courseDetail['16']}</div>

            <div className='mt-2.5 text-[#626262]'>
              {tutor?.career?.map((i: { [key: string]: any }) => (
                <div key={i.id}>{i.text}</div>
              ))}
            </div>
          </div>

          <div className='absolute top-1/2 right-0 h-[35.875rem] w-[36.25rem] -translate-y-1/2 md:static md:mt-6 md:h-80 md:w-full md:translate-y-0'>
            {tutor?.image && (
              <Image
                src={tutor?.image}
                alt='Tutor Image'
                layout='fill'
                objectFit='cover'
              />
            )}
          </div>

          <div className='mt-8 ml-[1.625rem] hidden md:block md:w-full'>
            <div className='text-xl font-bold md:text-base'>
              {text.courseDetail['17']}
            </div>

            <div className='mt-2.5 text-[#626262] md:text-sm'>
              {tutor?.career?.map((i: { [key: string]: any }) => (
                <div key={i.id}>{i.text}</div>
              ))}
            </div>
          </div>
        </div>
      </Layout>

      <div className='mt-40' />
    </>
  );
}
