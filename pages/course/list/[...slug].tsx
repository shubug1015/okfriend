import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import type { GetServerSidePropsContext, NextPage } from 'next';
import CourseList from '@components/course/courseList';
import { cls } from '@libs/client/utils';
import RequiredNotice from '@components/course/requiredNotice';
import ElectiveNotice from '@components/course/electiveNotice';
import Navigator from '@components/course/navigator';
import LiveNotice from '@components/course/liveNotice';
import Banner from '@components/banner';
import useSWR from 'swr';
import { courseApi } from '@libs/api';

interface IProps {
  params: string[];
}

const Course: NextPage<IProps> = ({ params }) => {
  const [courseType, courseCategory, page] = params;
  const request = `${
    courseType === 'pre-online' ? '사전 온라인 연수' : '온라인 연수'
  } - ${
    courseCategory === 'live'
      ? 'LIVE 차시'
      : courseCategory === 'required'
      ? '필수차시'
      : courseCategory === 'elective'
      ? '선택차시'
      : '지난 연수 자료'
  }`;
  const { data } = useSWR(`courseList/online/${request}`, () =>
    courseApi.getCourseList(request, page)
  );
  const navList = [
    '연수실',
    courseType === 'pre-online' ? '사전온라인연수' : '온라인연수',
    courseCategory === 'live'
      ? 'LIVE 차시'
      : courseCategory === 'required'
      ? '필수 차시'
      : courseCategory === 'elective'
      ? '선택 차시'
      : '지난 연수 자료 강의',
  ];
  return (
    <>
      <SEO title='연수실' />

      <Banner title='재외동포 대학생 연수실' navList={navList} />
      <Navigator courseType={courseType} courseCategory={courseCategory} />
      <Layout padding='pt-16 pb-32'>
        {courseCategory === 'live' && <LiveNotice />}
        {courseCategory === 'required' && <RequiredNotice />}
        {courseCategory === 'elective' && <ElectiveNotice />}

        <div className={cls(courseCategory === 'past' ? '' : 'mt-12')}>
          <CourseList data={data?.results} totalItems={2} />
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
