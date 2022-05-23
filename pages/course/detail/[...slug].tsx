import Detail from '@components/course/detail/detail';
import Info from '@components/course/detail/info';
// import Qna from '@components/course/detail/qna';
import Review from '@components/course/detail/review';
import Tutor from '@components/course/detail/tutor';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { courseApi } from '@libs/api';
import { useLocale } from '@libs/client/useLocale';
import { IUser, useUser } from '@libs/client/useUser';
import { cls, clsFilter } from '@libs/client/utils';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';

interface IProps {
  slug: string[];
}

const CourseDetail: NextPage<IProps> = ({ slug }) => {
  const { locale, text } = useLocale();
  useUser({ isPrivate: true });
  const { data: myData } = useSWR<IUser>('/api/user');
  const [, category, id] = slug;
  const { data, mutate } = useSWR(
    myData?.token
      ? `${locale}/courseDetail/logged`
      : `${locale}/courseDetail/unlogged`,
    () => courseApi.detail(locale, id, myData?.token)
  );
  const courseData = data?.lecture || data;

  const [section, setSection] = useState(
    category === 'past' ? text.courseDetail['13'] : text.courseDetail['11']
  );
  const sectionList =
    category === 'past'
      ? [
          {
            id: 0,
            label: text.courseDetail['13'],
          },
        ]
      : [
          {
            id: 0,
            label: text.courseDetail['11'],
          },
          {
            id: 1,
            label: text.courseDetail['12'],
          },
          // {
          //   id: 2,
          //   label: 'Q&A',
          // },
          {
            id: 3,
            label: text.courseDetail['13'],
          },
        ];
  return (
    <>
      <SEO title={courseData?.name} />
      <Layout bgColor='bg-[#f4f9fb]' padding='pt-32 md:pt-28'>
        <Detail
          data={courseData}
          progress={data?.total_progress}
          isRegistered={data?.lecture ? true : false}
          completed={data?.completed}
          survey={data?.survey}
          mutate={mutate}
        />

        <div className='mt-24 flex text-lg font-medium md:mt-14 md:grid md:grid-cols-2 md:gap-y-6'>
          {sectionList.map((i) => (
            <div
              key={i.id}
              onClick={() => setSection(i.label)}
              className={cls(
                section === i.label
                  ? 'border-[#2fb6bc] font-bold text-[#2fb6bc]'
                  : 'border-transparent text-[#6b6b6b]',
                clsFilter(locale, 'w-[12.5rem]', 'w-40', 'w-96'),
                'flex cursor-pointer justify-center border-b-4 pb-2 text-xl transition-all md:w-full md:pb-3'
              )}
            >
              {i.label}
            </div>
          ))}
        </div>
      </Layout>

      {section === text.courseDetail['11'] && (
        <Info info={courseData?.detail} />
      )}
      {section === text.courseDetail['12'] && (
        <Tutor tutor={courseData?.tutor} />
      )}
      {/* {section === 'Q&A' && <Qna />} */}
      {section === text.courseDetail['13'] && (
        <Review data={courseData} mutate={mutate} />
      )}
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
