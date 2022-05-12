import Header from '@components/mypage/header';
import CourseList from '@components/mypage/courseList';
import Navigator from '@components/mypage/navigator';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { cls } from '@libs/client/utils';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { useState } from 'react';
import useSWR from 'swr';
import { useUser } from '@libs/client/useUser';
import { mypageApi } from '@libs/api';
import { useLocale } from '@libs/client/useLocale';

interface IProps {
  page: string;
}

const MyCourse: NextPage<IProps> = ({ page }) => {
  const { text } = useLocale();
  const { token } = useUser({ isPrivate: true });
  const { data } = useSWR(token ? `myCourseList/${page}` : null, () =>
    mypageApi.myCourseList(page, token as string)
  );
  const [category, setCategory] = useState('진행중');
  return (
    <>
      <SEO title='마이페이지' />

      <Header />

      <Layout padding='pt-12 pb-44 md:pt-7 md:pb-14'>
        <div className='mt-[4.5rem] flex space-x-20 md:mt-0 md:flex-col md:space-x-0 md:space-y-8'>
          <Navigator />

          <div className='grow space-y-6 md:space-y-5'>
            <div className='text-2xl font-bold md:text-[1.375rem]'>
              {text.mypageCourse['1']}
            </div>

            <div className='flex space-x-5 text-lg font-medium md:text-base'>
              <div
                onClick={() => setCategory('진행중')}
                className={cls(
                  category === '진행중' ? '' : 'cursor-pointer text-[#afafaf]',
                  'transition-all'
                )}
              >
                {text.mypageCourse['2']}
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
                {text.mypageCourse['3']}
              </div>
            </div>

            <CourseList
              category={category}
              data={
                category === '진행중'
                  ? data?.ongoing.results
                  : data?.completed.results
              }
              totalItems={
                category === '진행중'
                  ? data?.ongoing.count
                  : data?.completed.count
              }
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
      page: ctx.params?.page,
    },
  };
};

export default MyCourse;
