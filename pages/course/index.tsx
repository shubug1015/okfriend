import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import type { NextPage } from 'next';
import Link from 'next/link';

const Course: NextPage = () => {
  return (
    <>
      <SEO title='연수실' />
      <Layout padding='pt-20 pb-24'>
        <div className='flex justify-center text-4xl font-bold'>
          제외동포 대학생 연수실
        </div>
        <div className='flex justify-center mt-4 font-bold'>
          사전온라인연수 / 온라인연수 바로가기
        </div>

        <div className='mt-16 flex justify-center space-x-5'>
          <div className='w-1/2 h-[26rem] bg-slate-300 rounded-lg flex flex-col items-center justify-center space-y-6'>
            <div className='text-white text-[1.625rem] font-bold'>
              사전 온라인연수
            </div>

            <Link href='/course/pre-online/required/1'>
              <a>
                <div className='flex justify-center items-center text-xl font-bold text-white border border-white rounded-lg w-44 h-[3.75rem] cursor-pointer bg-[rgba(0,0,0,0.5)]'>
                  바로가기
                </div>
              </a>
            </Link>
          </div>

          <div className='w-1/2 h-[26rem] bg-slate-300 rounded-lg flex flex-col items-center justify-center space-y-6'>
            <div className='text-white text-[1.625rem] font-bold'>
              온라인연수
            </div>
            <Link href='/course/online/live/1'>
              <a>
                <div className='flex justify-center items-center text-xl font-bold text-white border border-white rounded-lg w-44 h-[3.75rem] cursor-pointer bg-[rgba(0,0,0,0.5)]'>
                  바로가기
                </div>
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Course;
