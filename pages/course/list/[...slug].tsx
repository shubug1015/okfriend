import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import type { GetServerSidePropsContext, NextPage } from 'next';
import CourseList from '@components/course/courseList';
import { cls } from '@libs/client/utils';
import RequiredNotice from '@components/course/requiredNotice';
import ElectiveNotice from '@components/course/electiveNotice';
import Navigator from '@components/course/navigator';
// import LiveNotice from '@components/course/liveNotice';
import Banner from '@components/banner';
import useSWR from 'swr';
import { courseApi } from '@libs/api';
import { useLocale } from '@libs/client/useLocale';
import { useUser } from '@libs/client/useUser';

interface IProps {
  params: string[];
}

const Course: NextPage<IProps> = ({ params }) => {
  const { locale, text } = useLocale();
  useUser({ isPrivate: true });
  const [courseType, courseCategory, page] = params;
  const request = `${
    courseType === 'pre-online' ? '사전 연수' : '온라인 연수'
  } - ${
    courseCategory === 'live'
      ? 'LIVE 차시'
      : courseCategory === 'required'
      ? '필수차시'
      : courseCategory === 'elective'
      ? '선택차시'
      : '지난 연수 자료'
  }`;
  const { data } = useSWR(
    `${locale}/courseList/online/${courseType}/${courseCategory}/${page}`,
    () => courseApi.getCourseList(locale, request, page)
  );
  const navList = [
    text.preCourseHeader['2'],
    courseType === 'pre-online'
      ? text.preCourseHeader['3']
      : text.courseHeader['3'],
    courseCategory === 'live'
      ? 'LIVE 차시'
      : courseCategory === 'required'
      ? text.preCourseHeader['4']
      : courseCategory === 'elective'
      ? text.preCourseHeader['5']
      : text.preCourseHeader['6'],
  ];
  return (
    <>
      <SEO title='연수실' />

      <Banner title={text.preCourseHeader['1']} navList={navList} />
      <Navigator courseType={courseType} courseCategory={courseCategory} />
      <Layout padding='pt-16 pb-32 md:pt-6 md:pb-14'>
        {/* {courseCategory === 'live' && <LiveNotice />} */}
        {courseCategory === 'required' && <RequiredNotice />}
        {courseCategory === 'elective' && <ElectiveNotice />}

        <div className={cls(courseCategory === 'past' ? '' : 'mt-12')}>
          <CourseList data={data?.results} totalItems={data?.count} />
        </div>
      </Layout>
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

export default Course;
