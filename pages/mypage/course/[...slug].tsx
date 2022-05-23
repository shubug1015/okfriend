import Header from '@components/mypage/header';
import CourseList from '@components/mypage/courseList';
import Navigator from '@components/mypage/navigator';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { cls } from '@libs/client/utils';
import type { GetServerSidePropsContext, NextPage } from 'next';
// import { useState } from 'react';
import useSWR from 'swr';
import { useUser } from '@libs/client/useUser';
import { mypageApi } from '@libs/api';
import { useLocale } from '@libs/client/useLocale';
import Link from 'next/link';

interface IProps {
  slug: string[];
}

const MyCourse: NextPage<IProps> = ({ slug }) => {
  const { text } = useLocale();
  const { token } = useUser({ isPrivate: true });
  const [category, page] = slug;
  const { data } = useSWR(
    token ? `myCourseList/${category}/${page}` : null,
    () => mypageApi.myCourseList(category !== 'ongoing', page, token as string)
  );

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
              <Link href={`/mypage/course/ongoing/1`}>
                <a
                  className={cls(
                    category === 'ongoing'
                      ? ''
                      : 'cursor-pointer text-[#afafaf]',
                    'transition-all'
                  )}
                >
                  {text.mypageCourse['2']}
                </a>
              </Link>
              <Link href={`/mypage/course/completed/1`}>
                <a
                  className={cls(
                    category === 'completed'
                      ? ''
                      : 'cursor-pointer text-[#afafaf]',
                    'transition-all'
                  )}
                >
                  {text.mypageCourse['3']}
                </a>
              </Link>
            </div>

            <CourseList
              data={
                category === 'ongoing'
                  ? data?.ongoing.results
                  : data?.completed.results
              }
              totalItems={
                category === 'ongoing'
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
      slug: ctx.params?.slug,
    },
  };
};

export default MyCourse;
