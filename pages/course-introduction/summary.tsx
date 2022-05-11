import type { NextPage } from 'next';
import Banner from '@components/banner';
import Online from '@components/greeting/online';
import Layout from '@layouts/sectionLayout';
import Image from 'next/image';
import SummaryMain from '@public/course-introduction/summary-main.png';
import SummaryGoal1 from '@public/course-introduction/summary-goal-1.png';
import SummaryGoal2 from '@public/course-introduction/summary-goal-2.png';
import SummaryGoal3 from '@public/course-introduction/summary-goal-3.png';
import SummaryGoal4 from '@public/course-introduction/summary-goal-4.png';
import SummaryBenefit1 from '@public/course-introduction/summary-benefit-1.png';
import SummaryMileage1 from '@public/course-introduction/summary-mileage-1.png';
import SummaryBenefit2 from '@public/course-introduction/summary-benefit-2.png';
import SummaryBenefit1m from '@public/course-introduction/summary-benefit-1-m.png';
import SummaryBenefit2m from '@public/course-introduction/summary-benefit-2-m.png';
import SummaryMileage1m from '@public/course-introduction/summary-mileage-1-m.png';
import MenuBar from '@components/greeting/menuBar';
import SEO from '@components/seo';
import { useLocale } from '@libs/client/useLocale';

const Greeting: NextPage = () => {
  const { text } = useLocale();
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

        {/* 2022 재외동포 대학생 온라인 연수 */}
        <div className='mt-[1.875rem] border-b border-[#9e9e9e] pb-[1.594rem] font-nexonBold text-4xl font-bold leading-[3.15rem] text-[#2fb6bc] md:text-[1.375rem] md:leading-[2.25rem]'>
          {text.summary['7']}
          <br />
          <span className='text-[#01111e]'>{text.summary['8']}</span>
        </div>

        {/* 연수목적 */}
        <div className='border-b border-[#e8e8e8] pt-[1.594rem] pb-[2.719rem] text-2xl text-[#01111e] md:text-xl'>
          <div className='font-nexonBold font-bold leading-[2.25rem]'>
            {text.summary['9']}
          </div>
          <div className='mt-2 whitespace-pre-wrap text-[1.125rem] font-normal leading-[1.856rem] md:mt-[0.313rem] md:text-[0.875rem] md:leading-[1.444rem]'>
            {text.summary['10']}
          </div>
          <div className='mt-[1.063rem] flex justify-between md:mt-[1.688rem] md:grid md:grid-cols-2 md:gap-4'>
            <Image
              src={SummaryGoal1}
              alt='Summary Page Goal Section Image1'
              objectFit='cover'
              placeholder='blur'
              quality={100}
            />
            <Image
              src={SummaryGoal2}
              alt='Summary Page Goal Section Image1'
              objectFit='cover'
              placeholder='blur'
              quality={100}
            />
            <Image
              src={SummaryGoal3}
              alt='Summary Page Goal Section Image1'
              objectFit='cover'
              placeholder='blur'
              quality={100}
            />
            <Image
              src={SummaryGoal4}
              alt='Summary Page Goal Section Image1'
              objectFit='cover'
              placeholder='blur'
              quality={100}
            />
          </div>
        </div>

        {/* 연수대상 */}
        <div className='text- border-b border-[#e8e8e8] pt-[3.094rem] pb-[2.719rem] text-2xl text-[#01111e] md:pb-[1.906rem] md:pt-[1.969rem] md:text-xl'>
          <div className='flex items-center font-bold leading-[2.25rem] md:block'>
            <span className='font-nexonBold'>{text.summary['11']}</span>
            <span className='ml-[0.813rem] text-[1.063rem] font-normal leading-[1.753rem] text-[#6b6b6b] md:hidden md:text-[0.875rem] md:leading-[1.444rem]'>
              ※ 국가별 상이한 학제를 감안, 만18세 예비 대학생은 연수(청소년,
              대학생)를 선택하여 신청 가능
            </span>
            <div className='hidden text-[0.875rem] font-normal leading-[1.444rem] text-[#6b6b6b] md:block'>
              {text.summary['12']}
            </div>
          </div>
          <div className='mt-[1.438rem] flex justify-between md:block'>
            <div className='w-[23.75rem] border border-[#d6d6d6] pt-[2.25rem] pb-[1.125rem] text-center text-[1.125rem] md:w-full'>
              <div className='inline rounded-full bg-[#2fb6bc] py-[0.438rem] pr-[1.063rem] pl-[1.125rem] text-2xl font-bold leading-6 text-white'>
                1
              </div>
              <div className='mt-2 font-bold leading-[1.856]'>
                {text.summary['13']}
              </div>
              <div className='fonr-normal mt-[6px] whitespace-pre-wrap leading-6 text-[#6b6b6b]'>
                {text.summary['14']}
              </div>
            </div>
            <div className='w-[23.75rem] border border-[#d6d6d6] pt-[2.25rem] pb-[1.125rem] text-center text-[1.125rem] md:mt-[1.438rem] md:w-full'>
              <div className='inline rounded-full bg-[#2fb6bc] py-[0.438rem] pr-[1.063rem] pl-[1.125rem] text-2xl font-bold leading-6 text-white'>
                2
              </div>
              <div className='mt-2 font-bold leading-[1.856]'>
                {text.summary['15']}
              </div>
              <div className='fonr-normal mt-[6px] whitespace-pre-wrap leading-6 text-[#6b6b6b]'>
                {text.summary['16']}
              </div>
            </div>
            <div className='w-[23.75rem] border border-[#d6d6d6] pt-[2.25rem] pb-[1.125rem] text-center text-[1.125rem] md:mt-[1.438rem] md:w-full'>
              <div className='inline rounded-full bg-[#2fb6bc] py-[0.438rem] pr-[1.063rem] pl-[1.125rem] text-2xl font-bold leading-6 text-white'>
                3
              </div>
              <div className='mt-2 font-bold leading-[1.856]'>
                {text.summary['17']}
              </div>
              <div className='fonr-normal mt-[6px] leading-6 text-[#6b6b6b]'>
                {text.summary['18']}
                <br />
                <span className='text-[0.875rem] leading-[1.444]'>
                  {text.summary['19']}
                </span>
              </div>
            </div>
          </div>

          <div className='mt-[1.438rem] whitespace-pre-wrap text-base leading-[1.65rem] md:mt-[0.75rem] md:text-[0.875rem] md:leading-[1.444rem]'>
            {text.summary['20']}
          </div>
        </div>

        {/* 연수방식 */}
        <div className='border-b border-[#e8e8e8] pt-[2.969rem] pb-[2.531rem] text-2xl text-[#01111e] md:pt-[1.406rem] md:text-xl'>
          <div className='font-nexonBold font-bold leading-[2.25rem]'>
            {text.summary['21']}
          </div>
          <div className='mt-4 text-[1.125rem] leading-[1.856rem] md:mt-[0.313rem] md:text-[0.875rem]'>
            {text.summary['22']}
          </div>
        </div>

        {/* 2022 재외동포대학생(온라인) 연수 기간 */}
        <div className='border-b border-[#e8e8e8] pt-[2.906rem] pb-[2.531rem] text-2xl text-[#01111e] md:pt-[1.906rem] md:text-xl'>
          <div className='font-nexonBold font-bold leading-[2.25rem] md:hidden md:leading-[1.875rem]'>
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

        {/* 2022 재외동포대학생 모국연수(사전온라인) 연수 기간 */}
        <div className='border-b border-[#e8e8e8] pt-[2.531rem] pb-[2.469rem] text-2xl text-[#01111e] md:pt-[1.281rem] md:pb-[1.781rem] md:text-xl'>
          <div className='font-nexonBold font-bold leading-[2.25rem] md:leading-[1.875rem]'>
            {text.summary['33']}
          </div>
          <div className='mt-3 text-[1.125rem] leading-[1.856rem] md:text-[0.875rem]'>
            {text.summary['34']}
          </div>
        </div>

        {/* 문의방법 */}
        <div className='mt-[2.531rem] text-2xl text-[#01111e] md:text-[1.375rem]'>
          <div className='font-nexonBold font-bold leading-[2.25rem]'>
            {text.summary['35']}
          </div>
          <button className='mt-[1.188rem] rounded-md bg-[#2fb2bc] px-[2.875rem] py-[0.75rem] text-[1.063rem] leading-[1.594rem] text-white md:w-full'>
            <a href='#'>{text.summary['36']}</a>
          </button>
        </div>

        {/* 온라인연수 마일리지 제도란? */}
        <div className='mt-[5.25rem] border-b border-[#9e9e9e] pb-[1.469rem] font-nexonBold text-4xl font-bold leading-[3.15rem] text-[#01111e] md:mt-[4.188rem] md:text-2xl'>
          <span className='text-[#2fb6bc]'>{text.summary['37']}</span>{' '}
          {text.summary['38']}
        </div>

        {/* 마일리지 제도 적립/활용 */}
        <div className='border-b border-[#e8e8e8] pt-[2.656rem] pb-[1.838rem] text-2xl text-[#01111e] md:pb-[1.781rem] md:pt-[1.656rem] md:text-xl'>
          <div className='font-nexonBold font-bold leading-[2.25rem]'>
            {text.summary['39']}
          </div>
          <div className='mt-4 whitespace-pre-wrap text-[1.125rem] leading-[1.856rem] md:mt-[0.313rem] md:text-[0.875rem] md:leading-[1.444rem]'>
            {text.summary['40']}
          </div>
        </div>

        <div className='border-b border-[#e8e8e8] pt-[1.849rem] pb-[2.906rem] text-2xl text-[#01111e] md:pt-[1.281rem]'>
          <div className='relative h-[256.5px] w-full md:hidden'>
            <Image
              src={SummaryMileage1}
              alt='Summary Page Mileage Section Image1'
              objectFit='cover'
              placeholder='blur'
              layout='fill'
              quality={100}
            />
          </div>
          <div className='relative hidden h-[903px] w-full md:block'>
            <Image
              src={SummaryMileage1m}
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

          <div className='mt-6 flex items-center justify-center bg-[#f8f8f8] py-[1.125rem] md:flex-col md:px-[1.563rem]'>
            <div className='mr-[7px] rounded bg-[#d60a51] py-[0.085rem] px-[0.438rem] text-[0.875rem] leading-5 text-white'>
              POINT 02
            </div>
            <div className='text-xl font-medium leading-7 text-[#01111e] md:mt-[0.813rem] md:text-center md:text-[0.875rem] md:leading-[1.225rem]'>
              {text.summary['42']}
            </div>
          </div>
        </div>

        {/* 연수참여혜택 */}
        <div className='border-b border-[#e8e8e8] pt-[2.531rem] pb-[6.938rem] text-2xl text-[#01111e] md:pb-[3.719rem] md:pt-[2.094rem] md:text-xl'>
          <div className='font-nexonBold font-bold leading-[2.25rem]'>
            {text.summary['43']}
          </div>
          <div className='mt-4 text-[1.125rem] leading-[1.856rem] md:mt-[0.313rem] md:text-[0.875rem] md:leading-[1.444rem]'>
            {text.summary['44']}
          </div>
          <div className='flex md:block'>
            <div className='mr-[1.375rem] mt-[2.313rem] md:mt-7 md:mr-0'>
              <div className='text-[1.125rem] leading-[1.688rem]'>
                {text.summary['45']}
              </div>
              <div className='relative mt-3 h-[302px] w-[580px] md:hidden'>
                <Image
                  src={SummaryBenefit1}
                  alt='Summary Page Benefit Section Image1'
                  objectFit='cover'
                  placeholder='blur'
                  layout='fill'
                  quality={100}
                />
              </div>
              <div className='relative mt-3 hidden h-[497px] w-full md:block'>
                <Image
                  src={SummaryBenefit1m}
                  alt='Summary Page Benefit Section Image1'
                  objectFit='cover'
                  placeholder='blur'
                  layout='fill'
                  quality={100}
                />
              </div>
            </div>
            <div className='mt-[2.313rem]'>
              <div className='text-[1.125rem] leading-[1.688rem]'>
                {text.summary['46']}
              </div>
              <div className='relative mt-3 h-[302px] w-[580px] md:hidden'>
                <Image
                  src={SummaryBenefit2}
                  alt='Summary Page Benefit Section Image2'
                  objectFit='cover'
                  placeholder='blur'
                  layout='fill'
                  quality={100}
                />
              </div>
              <div className='relative mt-3 hidden h-[302px] w-full md:block'>
                <Image
                  src={SummaryBenefit2m}
                  alt='Summary Page Benefit Section Image2'
                  objectFit='cover'
                  placeholder='blur'
                  layout='fill'
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Greeting;
