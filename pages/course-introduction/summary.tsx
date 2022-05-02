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
import MenuBar from '@components/greeting/menuBar';

const Greeting: NextPage = () => {
  return (
    <>
      <Banner
        title='재외동포 대학생 온라인연수 소개'
        navList={['온라인연수 소개', '개요']}
      />

      <MenuBar pageName='개요' />

      <Layout>
        <div className='relative mt-20'>
          <Image
            src={SummaryMain}
            alt='Summary Page Main Image'
            objectFit='cover'
            placeholder='blur'
            quality={100}
          />
        </div>

        <div className='mt-[1.875rem] border-b border-[#9e9e9e] pb-[1.594rem] text-4xl font-bold leading-[3.15rem] text-[#2fb6bc]'>
          2022
          <br />
          <span className='text-[#01111e]'>재외동포 대학생 온라인 연수</span>
        </div>

        <div className='border-b border-[#e8e8e8] pt-[1.594rem] pb-[2.719rem] text-2xl text-[#01111e]'>
          <div className='font-bold leading-[2.25rem]'>연수목적</div>
          <div className='mt-2 text-[1.125rem] font-normal leading-[1.856rem]'>
            온라인 플랫폼을 중점 활용한 온라인 모국연수를 통해 재외동포 참가자
            및 국내참가자들이 모두 참여하는 온라인 소통공간 제공하며 다양한 활동
            내용을
            <br />
            온라인상으로 교류 하고자 함
          </div>
          <div className='mt-[1.063rem] flex justify-between'>
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

        <div className='border-b border-[#e8e8e8] pt-[3.094rem] pb-[2.719rem] text-2xl text-[#01111e]'>
          <div className='flex items-center font-bold leading-[2.25rem]'>
            연수대상
            <span className='ml-[0.813rem] text-[1.063rem] font-normal leading-[1.753rem] text-[#6b6b6b]'>
              ※ 국가별 상이한 학제를 감안, 만18세 예비 대학생은 연수(청소년,
              대학생)를 선택하여 신청 가능
            </span>
          </div>
          <div className='mt-[1.438rem] flex justify-between'>
            <div className='w-[23.75rem] border border-[#d6d6d6] pt-[2.25rem] pb-[1.125rem] text-center text-[1.125rem]'>
              <div className='inline rounded-full bg-[#2fb6bc] py-[0.438rem] pr-[1.063rem] pl-[1.125rem] text-2xl font-bold leading-6 text-white'>
                1
              </div>
              <div className='mt-2 font-bold leading-[1.856]'>대상 인원</div>
              <div className='fonr-normal mt-[6px] leading-6 text-[#6b6b6b]'>
                재외동포 및<br />
                국내 대학생 참가자 500여명
              </div>
            </div>
            <div className='w-[23.75rem] border border-[#d6d6d6] pt-[2.25rem] pb-[1.125rem] text-center text-[1.125rem]'>
              <div className='inline rounded-full bg-[#2fb6bc] py-[0.438rem] pr-[1.063rem] pl-[1.125rem] text-2xl font-bold leading-6 text-white'>
                2
              </div>
              <div className='mt-2 font-bold leading-[1.856]'>대상 연령</div>
              <div className='fonr-normal mt-[6px] leading-6 text-[#6b6b6b]'>
                18세부터 25세 까지의 <br />
                청소년
              </div>
            </div>
            <div className='w-[23.75rem] border border-[#d6d6d6] pt-[2.25rem] pb-[1.125rem] text-center text-[1.125rem]'>
              <div className='inline rounded-full bg-[#2fb6bc] py-[0.438rem] pr-[1.063rem] pl-[1.125rem] text-2xl font-bold leading-6 text-white'>
                3
              </div>
              <div className='mt-2 font-bold leading-[1.856]'>대상 자격</div>
              <div className='fonr-normal mt-[6px] leading-6 text-[#6b6b6b]'>
                재외동포 대학생 중<br />
                <span className='text-[0.875rem] leading-[1.444]'>
                  (5년이상 합법적으로 해외 체류 중인 학생)
                </span>
              </div>
            </div>
          </div>

          <div className='mt-[1.438rem] text-base leading-[1.65rem]'>
            ‧ 시민권자, 영주권자, 한국 국적자, 입양인 및 입양인 자녀, 다문화
            가정 자녀
            <br />
            ‧ 독립유공자 후손, 고려인 후손, 재중동포 등<br />‧ 재외동포 사회
            기여 의지 및 한인사회 봉사 실적이 우수한 학생 등
          </div>
        </div>

        <div className='border-b border-[#e8e8e8] pt-[2.969rem] pb-[2.531rem] text-2xl text-[#01111e]'>
          <div className='font-bold leading-[2.25rem]'>연수방식</div>
          <div className='mt-4 text-[1.125rem] leading-[1.856rem]'>
            OKF 온라인 플랫폼을 활용한 실시간 쌍방향 원격 연수
          </div>
        </div>

        {/* 2022 재외동포대학생(온라인) 연수 기간 */}
        <div className='border-b border-[#e8e8e8] pt-[2.906rem] pb-[2.531rem] text-2xl text-[#01111e]'>
          <div className='font-bold leading-[2.25rem]'>
            2022 재외동포대학생(온라인) 연수 기간
          </div>
          <div className='mt-[1.438rem] flex justify-between'>
            <div className='w-[17.75rem] border-t-2 border-[#2fb6bc] bg-[#d5f0f2] pt-[1.438rem] pb-6 text-center'>
              <div className='text-xl font-bold leading-[2.062rem]'>1회기</div>
              <div className='text-[1.125rem] leading-[1.856rem]'>
                2022년 7월 1일(금) ~<br />
                7월 31일(일)
              </div>
            </div>
            <div className='w-[17.75rem] border-t-2 border-[#2fb6bc] bg-[#d5f0f2] pt-[1.438rem] pb-6 text-center'>
              <div className='text-xl font-bold leading-[2.062rem]'>2회기</div>
              <div className='text-[1.125rem] leading-[1.856rem]'>
                2022년 8월 1일(일) ~<br />
                8월 31일(토)
              </div>
            </div>
            <div className='w-[17.75rem] border-t-2 border-[#2fb6bc] bg-[#d5f0f2] pt-[1.438rem] pb-6 text-center'>
              <div className='text-xl font-bold leading-[2.062rem]'>3회기</div>
              <div className='text-[1.125rem] leading-[1.856rem]'>
                2022년 9월 1일(목) ~<br />
                9월 30일(금)
              </div>
            </div>
            <div className='w-[17.75rem] border-t-2 border-[#2fb6bc] bg-[#d5f0f2] pt-[1.438rem] pb-6 text-center'>
              <div className='text-xl font-bold leading-[2.062rem]'>4회기</div>
              <div className='text-[1.125rem] leading-[1.856rem]'>
                2022년 10월 1일(토) ~<br />
                10월 31일(월)
              </div>
            </div>
          </div>
        </div>

        {/* 2022 재외동포대학생 모국연수(사전온라인) 연수 기간 */}
        <div className='border-b border-[#e8e8e8] pt-[2.531rem] pb-[2.469rem] text-2xl text-[#01111e]'>
          <div className='font-bold leading-[2.25rem]'>
            2022 재외동포대학생 모국연수(사전온라인) 연수 기간
          </div>
          <div className='mt-3 text-[1.125rem] leading-[1.856rem]'>
            - 2022년 6월 중 이수완료
          </div>
        </div>

        {/* 문의방법 */}
        <div className='mt-[2.531rem] text-2xl text-[#01111e]'>
          <div className='font-bold leading-[2.25rem]'>문의방법</div>
          <button className='mt-[1.188rem] rounded-md bg-[#2fb2bc] px-[2.875rem] py-[0.75rem] text-[1.063rem] leading-[1.594rem] text-white'>
            <a href='#'>문의하기</a>
          </button>
        </div>

        {/* 온라인연수 마일리지 제도란? */}
        <div className='mt-[5.25rem] border-b border-[#9e9e9e] pb-[1.469rem] text-4xl font-bold leading-[3.15rem] text-[#01111e]'>
          <span className='text-[#2fb6bc]'>온라인연수</span> 마일리지 제도란?
        </div>

        {/* 마일리지 제도 적립/활용 */}
        <div className='border-b border-[#e8e8e8] pt-[2.656rem] pb-[1.838rem] text-2xl text-[#01111e]'>
          <div className='font-bold leading-[2.25rem]'>
            마일리지 제도 적립/활용
          </div>
          <div className='mt-4 text-[1.125rem] leading-[1.856rem]'>
            온라인 연수의 필수, 선택, 라이브차시 프로그램을 이수시 아래의
            적립기준에 의하여 마일리지가 적립되며,
            <br />
            강의 후기 및 리뷰를 통해 추가 마일리지를 적립하여 익년도 참가 및
            당해연도 시상에 반영합니다.
          </div>
        </div>

        <div className='border-b border-[#e8e8e8] pt-[1.849rem] pb-[2.906rem] text-2xl text-[#01111e]'>
          <div className='relative h-[256.5px] w-full'>
            <Image
              src={SummaryMileage1}
              alt='Summary Page Mileage Section Image1'
              objectFit='cover'
              placeholder='blur'
              layout='fill'
              quality={100}
            />
          </div>
          <div className='mt-8 flex items-center justify-center bg-[#f8f8f8] py-[1.125rem]'>
            <div className='mr-[7px] rounded bg-[#d60a51] py-[0.085rem] px-[0.438rem] text-[0.875rem] leading-5 text-white'>
              POINT 01
            </div>
            <div className='text-xl font-medium leading-7 text-[#01111e]'>
              국내외 참가자는 해당 콘텐츠의 95%이상 시청시 마일리지 획득 가능
            </div>
          </div>
          <div className='mt-6 flex items-center justify-center bg-[#f8f8f8] py-[1.125rem]'>
            <div className='mr-[7px] rounded bg-[#d60a51] py-[0.085rem] px-[0.438rem] text-[0.875rem] leading-5 text-white'>
              POINT 02
            </div>
            <div className='text-xl font-medium leading-7 text-[#01111e]'>
              라이브 차시의 경우 라이브로 이수시 가점(+10점)이 발생함. 녹화방송
              이수시 기본 점수 5점만 부여
            </div>
          </div>
        </div>

        {/* 연수참여혜택 */}
        <div className='border-b border-[#e8e8e8] pt-[2.531rem] pb-[6.938rem] text-2xl text-[#01111e]'>
          <div className='font-bold leading-[2.25rem]'>연수참여혜택</div>
          <div className='mt-4 text-[1.125rem] leading-[1.856rem]'>
            적립 마일리지에 따른 장학금 차등지급 및 익년도 연수 참가기회 우선권
            부여, 항공료 일부 보조
          </div>
          <div className='flex'>
            <div className='mr-[1.375rem] mt-[2.313rem]'>
              <div className='text-[1.125rem] leading-[1.688rem]'>
                • 재외동포대학생 대상
              </div>
              <div className='relative mt-3 h-[302px] w-[580px]'>
                <Image
                  src={SummaryBenefit1}
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
                • 국내대학생 대상
              </div>
              <div className='relative mt-3 h-[302px] w-[580px]'>
                <Image
                  src={SummaryBenefit2}
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
