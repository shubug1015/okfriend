import Detail from '@components/course/detail/detail';
import Info from '@components/course/detail/info';
import Qna from '@components/course/detail/qna';
import Review from '@components/course/detail/review';
import Tutor from '@components/course/detail/tutor';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { courseApi } from '@libs/api';
import { IUser } from '@libs/client/useUser';
import { cls } from '@libs/client/utils';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { useState } from 'react';
import useSWR from 'swr';

interface IProps {
  slug: string[];
}

const CourseDetail: NextPage<IProps> = ({ slug }) => {
  const { data: myData } = useSWR<IUser>('/api/user');
  const [, , id] = slug;
  const { data, mutate } = useSWR(myData?.token ? 'courseDetail' : null, () =>
    courseApi.detail(id, myData?.token)
  );
  const courseData = data?.lecture || data;

  const [section, setSection] = useState('강의소개');
  const sectionList = [
    {
      id: 0,
      label: '강의소개',
    },
    {
      id: 1,
      label: '강사소개',
    },
    {
      id: 2,
      label: 'Q&A',
    },
    {
      id: 3,
      label: '강의리뷰',
    },
  ];
  return (
    <>
      <SEO title='연수실' />
      <Layout padding='pt-32 bg-[#f4f9fb]'>
        <Detail
          data={courseData}
          isRegistered={data?.lecture ? true : false}
          mutate={mutate}
        />

        <div className='mt-24 flex text-lg font-medium'>
          {sectionList.map((i) => (
            <div
              key={i.id}
              onClick={() => setSection(i.label)}
              className={cls(
                section === i.label
                  ? 'border-[#2fb6bc] font-bold text-[#2fb6bc]'
                  : 'border-transparent text-[#6b6b6b]',
                'flex w-[12.5rem] cursor-pointer justify-center border-b-4 pb-2 text-xl transition-all'
              )}
            >
              {i.label}
            </div>
          ))}
        </div>
      </Layout>

      {section === '강의소개' && <Info info={courseData?.detail} />}
      {section === '강사소개' && <Tutor tutor={courseData?.tutor} />}
      {section === 'Q&A' && <Qna />}
      {section === '강의리뷰' && <Review data={courseData} mutate={mutate} />}
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

export default CourseDetail;
