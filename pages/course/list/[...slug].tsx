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
import { useRouter } from 'next/router'
import {useEffect} from "react";

const useRestrictCourseEntryByStage = ({profile, doThis}: {profile: any; doThis: boolean}) => {
  const router = useRouter();

  useEffect(() => {
    const impl = async () => {
      let errorMessage: string | undefined;

      if (!doThis) {
        // do nothing.
      } else if (profile == null) {
        errorMessage = '강좌를 시청하기 위해서는 로그인이 필요합니다.';
      } else {
        const now = new Date();
        switch (profile.stage) {
          case 1: {
            const julyBegin = new Date('2022-07-01');
            const julyEnd = new Date('2022-08-01');

            const isNowInJuly = julyBegin.valueOf() <= now.valueOf() && now.valueOf() < julyEnd.valueOf();

            if (!isNowInJuly) {
              errorMessage = '강좌를 시청 가능한 날짜가 아닙니다.(1기는 7월에 시청가능)';
            }

            break;
          }

          case 2: {
            const augustBegin = new Date('2022-08-01');
            const augustEnd = new Date('2022-09-01');

            const isNowInAugust = augustBegin.valueOf() <= now.valueOf() && now.valueOf () < augustEnd.valueOf();

            if (!isNowInAugust) {
              errorMessage = '강좌를 시청 가능한 날짜가 아닙니다.(2기는 8월에 시청가능)';
            }

            break;
          }

          case 3: {
            const septemberBegin = new Date('2022-09-01');
            const septemberEnd = new Date('2022-10-01');

            const isNowInSeptember = septemberBegin.valueOf() <= now.valueOf() && now.valueOf() < septemberEnd.valueOf();

            if (!isNowInSeptember) {
              errorMessage = '강좌를 시청 가능한 날짜가 아닙니다.(3기는 9월에 시청가능)';
            }

            break;
          }

          case 4: {
            const octoberBegin = new Date('2022-10-01');
            const octoberEnd = new Date('2022-11-01');

            const isNowInOctober = octoberBegin.valueOf() <= now.valueOf() && now.valueOf() < octoberEnd.valueOf();

            if (!isNowInOctober) {
              errorMessage = '강좌를 시청 가능한 날짜가 아닙니다.(4기는 10월에 시청가능)';
            }

            break;
          }
        }
      }


      if (errorMessage != null) {
        alert(errorMessage);
        await router.push('/');
      }
    };

    impl();
  }, []);
};

interface IProps {
  params: string[];
}

const Course: NextPage<IProps> = ({ params }) => {
  const { locale, text } = useLocale();
  const { profile } = useUser({ isPrivate: true });
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

  useRestrictCourseEntryByStage({profile, doThis: courseType === 'online'});

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
