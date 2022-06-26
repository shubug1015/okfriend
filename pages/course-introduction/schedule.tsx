import Banner from '@components/banner';
import { NextPage } from 'next';
import Image, { StaticImageData } from 'next/image';
import Schedule from '@public/course-introduction/schedule.png';
import ScheduleEn from '@public/course-introduction/schedule-en.png';
import ScheduleRu from '@public/course-introduction/schedule-ru.png';
import ScheduleMo from '@public/course-introduction/schedule-mo.png';
import ScheduleEnMo from '@public/course-introduction/schedule-en-mo.png';
import ScheduleRuMo from '@public/course-introduction/schedule-ru-mo.png';
import Layout from '@layouts/sectionLayout';
import MenuBar from '@components/greeting/menuBar';
import SEO from '@components/seo';
import { useLocale } from '@libs/client/useLocale';
import { cls, clsFilter, imgFilter } from '@libs/client/utils';

const TrainingSchedule: NextPage = () => {
  const { locale, text } = useLocale();
  return (
    <>
      <SEO title='온라인연수 소개' />
      <Banner
        title={text.schedule['1']}
        navList={[text.schedule['2'], text.schedule['3']]}
      />

      <MenuBar pageName={text.schedule['6']} />

      <Layout>
        <div className='pt-[4.089rem] pb-[10.375rem] md:pt-6 md:pb-11'>
          {/* 연수 편성표 */}
          <div
            className={cls(
              clsFilter(
                locale,
                'font-nexonBold',
                'font-notoSans',
                'font-notoSans'
              ),
              'text-4xl font-bold leading-[3.15rem] text-[#01111e] md:text-xl'
            )}
          >
            {text.schedule['7']}
            <span className='text-[#05aadb]'>{text.schedule['8']}</span>{' '}
            {text.schedule['9']}
          </div>
          <div
            className={cls(
              clsFilter(locale, 'h-[1023px]', 'h-[1023px]', 'h-[1083px]'),
              'relative mt-[1.375rem] w-full md:hidden'
            )}
          >
            <Image
              src={imgFilter(locale, Schedule, ScheduleEn, ScheduleRu)}
              alt='Schedule Page Image 1'
              objectFit='cover'
              placeholder='blur'
              layout='fill'
              quality={100}
            />
          </div>
          <div
            className={cls(
              clsFilter(locale, 'h-[2224px]', 'h-[2934px]', 'h-[3474px]'),
              'relative mt-[2.063rem] hidden w-full md:block'
            )}
          >
            <Image
              src={imgFilter(locale, ScheduleMo, ScheduleEnMo, ScheduleRuMo)}
              alt='Schedule Page Image 1'
              objectFit='cover'
              placeholder='blur'
              layout='fill'
              quality={100}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TrainingSchedule;
