import Header from '@components/mypage/header';
import CourseList from '@components/mypage/courseList';
import Navigator from '@components/mypage/navigator';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import useMutation from '@libs/client/useMutation';
import { cls } from '@libs/client/utils';
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface IProps {
  params: string[];
}

const MyCourse: NextPage<IProps> = ({ params }) => {
  const [category, setCategory] = useState('진행중');
  return (
    <>
      <SEO title='마이페이지' />

      <Header />

      <Layout padding='pt-12 pb-44'>
        <div className='mt-[4.5rem] flex space-x-20'>
          <Navigator />

          <div className='grow space-y-6'>
            <div className='text-2xl font-bold'>내 강의실</div>

            <div className='flex space-x-5 text-lg font-medium'>
              <div
                onClick={() => setCategory('진행중')}
                className={cls(
                  category === '진행중' ? '' : 'cursor-pointer text-[#afafaf]',
                  'transition-all'
                )}
              >
                수강중인 강의
              </div>
              <div
                onClick={() => setCategory('수강완료')}
                className={cls(
                  category === '수강완료'
                    ? ''
                    : 'cursor-pointer text-[#afafaf]',
                  'transition-all'
                )}
              >
                수강완료
              </div>
            </div>

            <CourseList
              category={category}
              data={category === '진행중' ? [0, 1] : [0, 1]}
              count={category === '진행중' ? 2 : 2}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      params: ctx.params?.page,
    },
  };
};

export default MyCourse;
