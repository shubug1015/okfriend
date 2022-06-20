import type { NextPage } from 'next';
import Banner from '@components/banner';
import Layout from '@layouts/sectionLayout';
import Image, { StaticImageData } from 'next/image';
import SummaryMain from '@public/course-introduction/summary-main.png';
import SummaryGoal1 from '@public/course-introduction/summary-goal-1.png';
import SummaryGoal2 from '@public/course-introduction/summary-goal-2.png';
import SummaryGoal3 from '@public/course-introduction/summary-goal-3.png';
import SummaryGoal4 from '@public/course-introduction/summary-goal-4.png';
import SummaryGoalEn1 from '@public/course-introduction/summary-goal-en-1.png';
import SummaryGoalEn2 from '@public/course-introduction/summary-goal-en-2.png';
import SummaryGoalEn3 from '@public/course-introduction/summary-goal-en-3.png';
import SummaryGoalEn4 from '@public/course-introduction/summary-goal-en-4.png';
import SummaryGoalRu1 from '@public/course-introduction/summary-goal-ru-1.png';
import SummaryGoalRu2 from '@public/course-introduction/summary-goal-ru-2.png';
import SummaryGoalRu3 from '@public/course-introduction/summary-goal-ru-3.png';
import SummaryGoalRu4 from '@public/course-introduction/summary-goal-ru-4.png';
// import SummaryMileage1 from '@public/course-introduction/summary-mileage-1.png';
// import SummaryMileageEn1 from '@public/course-introduction/summary-mileage-en-1.png';
// import SummaryMileageRu1 from '@public/course-introduction/summary-mileage-ru-1.png';
// import SummaryMileage1m from '@public/course-introduction/summary-mileage-1-m.png';
// import SummaryMileageEn1m from '@public/course-introduction/summary-mileage-en-1-m.png';
// import SummaryMileageRu1m from '@public/course-introduction/summary-mileage-ru-1-m.png';
import MenuBar from '@components/greeting/menuBar';
import SEO from '@components/seo';
import { useLocale } from '@libs/client/useLocale';
import Link from 'next/link';
import { cls, clsFilter, imgFilter } from '@libs/client/utils';

const Greeting: NextPage = () => {
  const { locale, text } = useLocale();
  return (
    <>
      <SEO title='온라인연수 소개' />
      <Banner
        title={text.summary['1']}
        navList={[text.summary['2'], text.summary['3']]}
      />

      <MenuBar pageName={text.summary['5']} />

      <Layout>
        {/* 메인이미지1 */}
        <div className='relative mt-20 md:mt-[1.875rem]'>
          <Image
            src={SummaryMain}
            alt='Summary Page Main Image'
            objectFit='cover'
            placeholder='blur'
            quality={100}
            className='md:rounded'
          />
        </div>

        {/* 2022 재외동포 청소년 온라인 연수 */}
        <div
          className={cls(
            clsFilter(
              locale,
              'font-nexonBold',
              'font-notoSans',
              'font-notoSans'
            ),
            'mt-[1.875rem] border-b border-[#9e9e9e] pb-[1.594rem] text-4xl font-bold leading-[3.15rem] text-[#2fb6bc] md:text-[1.375rem] md:leading-[2.25rem]'
          )}
        >
          {text.summary['7']}
          <br />
          <span className='text-[#01111e]'>{text.summary['8']}</span>
        </div>

        {/* 연수목적 */}
        <div className='border-b border-[#e8e8e8] pt-[1.594rem] pb-[2.719rem] text-2xl text-[#01111e] md:text-xl'>
          <div
            className={cls(
              clsFilter(
                locale,
                'font-nexonBold',
                'font-notoSans',
                'font-notoSans'
              ),
              'font-bold leading-[2.25rem]'
            )}
          >
            {text.summary['9']}
          </div>
          <div className='mt-2 whitespace-pre-wrap text-[1.125rem] font-normal leading-[1.856rem] md:mt-[0.313rem] md:text-[0.875rem] md:leading-[1.444rem]'>
            {text.summary['10']}
          </div>
          <div className='mt-[1.063rem] flex justify-between md:mt-[1.688rem] md:grid md:grid-cols-2 md:gap-4'>
            <Image
              src={imgFilter(
                locale,
                SummaryGoal1,
                SummaryGoalEn1,
                SummaryGoalRu1
              )}
              alt='Summary Page Goal Section Image1'
              objectFit='cover'
              placeholder='blur'
              quality={100}
            />
            <Image
              src={imgFilter(
                locale,
                SummaryGoal2,
                SummaryGoalEn2,
                SummaryGoalRu2
              )}
              alt='Summary Page Goal Section Image2'
              objectFit='cover'
              placeholder='blur'
              quality={100}
            />
            <Image
              src={imgFilter(
                locale,
                SummaryGoal3,
                SummaryGoalEn3,
                SummaryGoalRu3
              )}
              alt='Summary Page Goal Section Image3'
              objectFit='cover'
              placeholder='blur'
              quality={100}
            />
            <Image
              src={imgFilter(
                locale,
                SummaryGoal4,
                SummaryGoalEn4,
                SummaryGoalRu4
              )}
              alt='Summary Page Goal Section Image4'
              objectFit='cover'
              placeholder='blur'
              quality={100}
            />
          </div>
        </div>

        {/* 연수대상 */}
        <div className='text- border-b border-[#e8e8e8] pt-[3.094rem] pb-[2.719rem] text-2xl text-[#01111e] md:pb-[1.906rem] md:pt-[1.969rem] md:text-xl'>
          <div className='flex items-center font-bold leading-[2.25rem] md:block'>
            <span
              className={cls(
                clsFilter(
                  locale,
                  'font-nexonBold',
                  'font-notoSans',
                  'font-notoSans'
                ),
                ''
              )}
            >
              {text.summary['11']}
            </span>
            <span className='ml-[0.813rem] text-[1.063rem] font-normal leading-[1.753rem] text-[#6b6b6b] md:hidden md:text-[0.875rem] md:leading-[1.444rem]'>
              {text.summary['12']}
            </span>
            <div className='hidden text-[0.875rem] font-normal leading-[1.444rem] text-[#6b6b6b] md:block'>
              {text.summary['12']}
            </div>
          </div>
          <div className='mt-[1.438rem] flex justify-between md:block'>
            <div className='w-[23.75rem] border border-[#d6d6d6] pt-[2.25rem] pb-[1.125rem] text-center text-[1.125rem] md:w-full'>
              <div className='mx-[auto] my-[0] w-[50px] h-[50px] flex justify-center items-center rounded-full bg-[#2fb6bc] py-[0.438rem] text-2xl font-bold leading-6 text-white'>
                1
              </div>
              <div className='mt-2 font-bold leading-[1.856]'>
                {text.summary['13']}
              </div>
              <div className='mt-[6px] whitespace-pre-wrap leading-6 text-[#6b6b6b]'>
                {text.summary['14-1']}
              </div>
              <ul className='mt-[6px] whitespace-pre-wrap leading-6 text-[#01111E] text-left text-[16px] pl-[62px] pr-[62px] md:pl-[36px] md:pr-[36px]'>
                <li>{text.summary['14-2']}</li>
                <li>{text.summary['14-3']}</li>
                <li>{text.summary['14-4']}</li>
                <li>{text.summary['14-5']}</li>
                <li>{text.summary['14-6']}</li>
              </ul>
            </div>
            <div className='w-[23.75rem] border border-[#d6d6d6] pt-[2.25rem] pb-[1.125rem] text-center text-[1.125rem] md:mt-[1.438rem] md:w-full'>
              <div className='mx-[auto] my-[0] w-[50px] h-[50px] flex justify-center items-center rounded-full bg-[#2fb6bc] py-[0.438rem] text-2xl font-bold leading-6 text-white'>
                2
              </div>
              <div className='mt-2 font-bold leading-[1.856]'>
                {text.summary['15']}
              </div>
              <div className='font-normal mt-[6px] whitespace-pre-wrap leading-6 text-[#6b6b6b]'>
                <p className='whitespace-pre-wrap leading-6'>
                  {text.summary['16-1']}
                  <span className='block text-[14px]'>
                    {text.summary['16-2']}
                  </span>
                </p>
                <em className='block mt-[6px] not-italic text-[16px] whitespace-pre-wrap leading-6 text-[#05AADB]'>
                  {text.summary['16-3']}
                </em>
              </div>
            </div>
            <div className='w-[23.75rem] border border-[#d6d6d6] pt-[2.25rem] pb-[1.125rem] text-center text-[1.125rem] md:mt-[1.438rem] md:w-full'>
              <div className='mx-[auto] my-[0] w-[50px] h-[50px] flex justify-center items-center rounded-full bg-[#2fb6bc] py-[0.438rem] text-2xl font-bold leading-6 text-white'>
                3
              </div>
              <div className='mt-2 font-bold leading-[1.856]'>
                {text.summary['17']}
              </div>
              <div className='mt-[6px] leading-6 text-[#6b6b6b]'>
                {text.summary['18']}
              </div>
            </div>
          </div>
        </div>

        {/* 연수방식 */}
        <div className='border-b border-[#e8e8e8] pt-[2.969rem] pb-[2.531rem] text-2xl text-[#01111e] md:pt-[1.406rem] md:text-xl'>
          <div
            className={cls(
              clsFilter(
                locale,
                'font-nexonBold',
                'font-notoSans',
                'font-notoSans'
              ),
              'font-bold leading-[2.25rem]'
            )}
          >
            {text.summary['21']}
          </div>
          <div className='mt-4 text-[1.125rem] leading-[1.856rem] md:mt-[0.313rem] md:text-[0.875rem]'>
            {text.summary['22']}
          </div>
        </div>

        {/* 문의방법 */}
        <div className='border-b border-[#e8e8e8] pt-[2.969rem] pb-[2.531rem] text-2xl text-[#01111e] md:pt-[1.406rem] md:text-xl'>
          <div
            className={cls(
              clsFilter(
                locale,
                'font-nexonBold',
                'font-notoSans',
                'font-notoSans'
              ),
              'mb-[1.188rem] font-bold leading-[2.25rem]'
            )}
          >
            {text.summary['35']}
          </div>

          <Link href='/support/contact'>
            <a className='rounded-md bg-[#2fb2bc] px-[2.875rem] py-[0.75rem] text-[1.063rem] leading-[1.594rem] text-white md:w-full'>
              {text.summary['36']}
            </a>
          </Link>
        </div>

        {/* 2022 재외동포 청소년 모국연수(온라인) */}
        <div className='border-b border-[#e8e8e8] pt-[2.906rem] pb-[2.531rem] text-2xl text-[#01111e] md:pt-[1.906rem] md:text-xl'>
          <div
            className={cls(
              clsFilter(
                locale,
                'font-nexonBold',
                'font-notoSans',
                'font-notoSans'
              ),
              'font-bold leading-[2.25rem] md:hidden md:leading-[1.875rem]'
            )}
          >
            {text.summary['23']}
          </div>
          <div className='hidden whitespace-pre-wrap font-bold leading-[2.25rem] md:block md:leading-[1.875rem]'>
            {text.summary['24']}
          </div>
          <div className='mt-[1.438rem] flex justify-between md:block'>
            <div className='w-[17.75rem] border-t-2 border-[#2fb6bc] bg-[#d5f0f2] pt-[1.438rem] pb-6 text-center md:mt-[0.938rem] md:w-full'>
              <div className='text-xl font-bold leading-[2.062rem]'>
                {text.summary['25']}
              </div>
              <div className='whitespace-pre-wrap text-[1.125rem] leading-[1.856rem]'>
                {text.summary['29']}
              </div>
            </div>
            <div className='w-[17.75rem] border-t-2 border-[#2fb6bc] bg-[#d5f0f2] pt-[1.438rem] pb-6 text-center md:mt-[1.438rem] md:w-full'>
              <div className='text-xl font-bold leading-[2.062rem]'>
                {text.summary['26']}
              </div>
              <div className='whitespace-pre-wrap text-[1.125rem] leading-[1.856rem]'>
                {text.summary['30']}
              </div>
            </div>
            <div className='w-[17.75rem] border-t-2 border-[#2fb6bc] bg-[#d5f0f2] pt-[1.438rem] pb-6 text-center md:mt-[1.438rem] md:w-full'>
              <div className='text-xl font-bold leading-[2.062rem]'>
                {text.summary['27']}
              </div>
              <div className='whitespace-pre-wrap text-[1.125rem] leading-[1.856rem]'>
                {text.summary['31']}
              </div>
            </div>
            <div className='w-[17.75rem] border-t-2 border-[#2fb6bc] bg-[#d5f0f2] pt-[1.438rem] pb-6 text-center md:mt-[1.438rem] md:w-full'>
              <div className='text-xl font-bold leading-[2.062rem]'>
                {text.summary['28']}
              </div>
              <div className='whitespace-pre-wrap text-[1.125rem] leading-[1.856rem]'>
                {text.summary['32']}
              </div>
            </div>
          </div>
        </div>

        {/* 온라인연수 마일리지 제도란? */}
        {/* <div
          className={cls(
            clsFilter(
              locale,
              'font-nexonBold',
              'font-notoSans',
              'font-notoSans'
            ),
            'mt-[5.25rem] border-b border-[#9e9e9e] pb-[1.469rem] text-4xl font-bold leading-[3.15rem] text-[#01111e] md:mt-[4.188rem] md:text-2xl'
          )}
        >
          <span className='text-[#2fb6bc]'>{text.summary['37']}</span>{' '}
          {text.summary['38']}
        </div> */}

        {/* 마일리지 제도 적립/활용 */}
        {/* <div className='border-b border-[#e8e8e8] pt-[2.656rem] pb-[1.838rem] text-2xl text-[#01111e] md:pb-[1.781rem] md:pt-[1.656rem] md:text-xl'>
          <div
            className={cls(
              clsFilter(
                locale,
                'font-nexonBold',
                'font-notoSans',
                'font-notoSans'
              ),
              'font-bold leading-[2.25rem]'
            )}
          >
            {text.summary['39']}
          </div>
          <div className='mt-4 whitespace-pre-wrap text-[1.125rem] leading-[1.856rem] md:mt-[0.313rem] md:text-[0.875rem] md:leading-[1.444rem]'>
            {text.summary['40']}
          </div>
        </div>

        <div className='border-b border-[#e8e8e8] pt-[1.849rem] pb-[2.906rem] text-2xl text-[#01111e] md:pt-[1.281rem]'>
          <div className='relative h-[256.5px] w-full md:hidden'>
            <Image
              src={imgFilter(
                locale,
                SummaryMileage1,
                SummaryMileageEn1,
                SummaryMileageRu1
              )}
              alt='Summary Page Mileage Section Image1'
              objectFit='cover'
              placeholder='blur'
              layout='fill'
              quality={100}
            />
          </div>
          <div
            className={cls(
              clsFilter(locale, 'h-[903px]', 'h-[1005px]', 'h-[1037px]'),
              'relative hidden w-full md:block'
            )}
          >
            <Image
              src={imgFilter(
                locale,
                SummaryMileage1m,
                SummaryMileageEn1m,
                SummaryMileageRu1m
              )}
              alt='Summary Page Mileage Section Image1'
              objectFit='cover'
              placeholder='blur'
              layout='fill'
              quality={100}
            />
          </div>
          <div className='mt-8 flex items-center justify-center bg-[#f8f8f8] py-[1.125rem] md:flex-col md:px-[1.563rem]'>
            <div className='mr-[7px] rounded bg-[#d60a51] py-[0.085rem] px-[0.438rem] text-[0.875rem] leading-5 text-white md:w-[5rem] md:text-center'>
              POINT 01
            </div>
            <div className='text-xl font-medium leading-7 text-[#01111e] md:mt-[0.813rem] md:text-center md:text-[0.875rem] md:leading-[1.225rem]'>
              {text.summary['41']}
            </div>
          </div>

          <div className='mt-6 flex items-center justify-center bg-[#f8f8f8] px-8 py-[1.125rem] md:flex-col md:px-[1.563rem]'>
            <div className='mr-[7px] whitespace-nowrap rounded bg-[#d60a51] py-[0.085rem] px-[0.438rem] text-[0.875rem] leading-5 text-white'>
              POINT 02
            </div>
            <div className='text-center text-xl font-medium leading-7 text-[#01111e] md:mt-[0.813rem] md:text-center md:text-[0.875rem] md:leading-[1.225rem]'>
              {text.summary['42']}
            </div>
          </div>
        </div> */}

        {/* 연수참여혜택 */}
        <div className='border-b border-[#e8e8e8] pt-[2.531rem] pb-[6.938rem] text-2xl text-[#01111e] md:pb-[3.719rem] md:pt-[2.094rem] md:text-xl'>
          <div
            className={cls(
              clsFilter(
                locale,
                'font-nexonBold',
                'font-notoSans',
                'font-notoSans'
              ),
              'font-bold leading-[2.25rem]'
            )}
          >
            {text.summary['43']}
          </div>
          <div className='mt-4 text-[1.125rem] leading-[1.856rem] md:mt-[0.313rem] md:text-[0.875rem] md:leading-[1.444rem]'>
            {text.summary['44']}
          </div>
          <div className=''>
            <div className='mt-[2.313rem] md:mt-7 md:mr-0'>
              <div className='text-[1.125rem] leading-[1.688rem] font-[500]'>
                {text.summary['45-1']}
              </div>
              <div className='relative mt-3'>
                <ul className='text-[#6B6B6B] text-[18px]'>
                  <li>{text.summary['45-2']}</li>
                  <li>{text.summary['45-3']}</li>
                  <li>{text.summary['45-4']}</li>
                </ul>
              </div>
            </div>
            <div className='mt-[2.313rem]'>
              <div className='text-[1.125rem] leading-[1.688rem] font-[500]'>
                {text.summary['46-1']}
              </div>
              <div className='relative mt-3'>
                <ul className='text-[#6B6B6B] text-[18px]'>
                  <li>{text.summary['46-2']}</li>
                  <li>{text.summary['46-3']}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Greeting;
