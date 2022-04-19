import Detail from '@components/course/detail/detail';
import Info from '@components/course/detail/info';
import Qna from '@components/course/detail/qna';
import Review from '@components/course/detail/review';
import Tutor from '@components/course/detail/tutor';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { cls } from '@libs/client/utils';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { useState } from 'react';

interface IProps {
  params: string[];
}

const CourseDetail: NextPage<IProps> = ({ params }) => {
  const [courseType, courseCategory, page] = params;
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
        <Detail category={courseCategory} />

        <div className='mt-24 flex text-lg font-medium'>
          {sectionList.map((i) => (
            <div
              key={i.id}
              onClick={() => setSection(i.label)}
              className={cls(
                section === i.label
                  ? 'border-[#2fb6bc] text-[#2fb6bc] font-bold'
                  : 'border-transparent text-[#6b6b6b]',
                'flex w-[12.5rem] cursor-pointer justify-center border-b-4 pb-2 text-xl transition-all'
              )}
            >
              {i.label}
            </div>
          ))}
        </div>
      </Layout>

      {section === '강의소개' && <Info />}
      {section === '강사소개' && <Tutor />}
      {section === 'Q&A' && <Qna />}
      {section === '강의리뷰' && <Review />}
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      params: ctx.params?.slug,
    },
  };
};

export default CourseDetail;
