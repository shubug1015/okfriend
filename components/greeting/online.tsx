import Image from 'next/image';
import Bg1 from '@public/course-introduction/bg1.png';
import Sign1 from '@public/course-introduction/sign1.png';
import Bg2 from '@public/course-introduction/bg2.png';
import Sign2 from '@public/course-introduction/sign2.png';

export default function Online() {
  return (
    <div>
      <div className='relative'>
        <div className='absolute top-1/2 left-1/2 z-[-1] h-full w-full -translate-x-1/2 -translate-y-1/2'>
          <Image
            src={Bg1}
            alt='Background Image1'
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            quality={100}
          />
        </div>

        <div className='flex justify-center'>
          <div className='flex w-[61.25rem] justify-end'>
            <div className='w-[32rem] pt-[4.214rem] pb-[29.25rem]'>
              <div className='text-[2.5rem] leading-[3.438rem] text-[#01111e]'>
                온라인연수에 참여한 여러분,
                <br />
                <span className='font-bold text-[#2fb6bc]'>
                  진심으로 환영합니다.
                </span>
              </div>
              <svg
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mt-[10.875rem]'
              >
                <path d='M2 28V2H28' stroke='#F8F8F8' strokeWidth='4' />
              </svg>
              <div className='ml-[1.625rem]'>
                <div className='text-xl font-bold text-white'>
                  2022 재외동포 대학생 온라인연수
                </div>
                <div className='mt-[15px] text-[2.5rem] leading-[55px] text-white'>
                  재외동포재단 이사장
                  <br />
                  <span className='font-bold text-[#2fb6bc]'>
                    김성곤입니다.
                  </span>
                </div>
              </div>
              <div className='flex translate-y-[-20] justify-end'>
                <svg
                  width='28'
                  height='28'
                  viewBox='0 0 28 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='mr-[4.25rem]'
                >
                  <path d='M26 0L26 26L0 26' stroke='#F8F8F8' strokeWidth='4' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='mt-[-331px] h-[35.875rem] w-[61.25rem] bg-slate-400' />
      </div>

      <div className='flex flex-col items-center pb-20'>
        <div className='mt-10 w-[61.25rem] text-[1.875rem] font-bold leading-6 text-[#01111e]'>
          2022 재외동포 대학생 온라인연수에 참여한 여러분, 진심으로 환영합니다.
        </div>
        <div className='mt-[1.813rem] w-[61.25rem] text-[1.125rem] font-normal leading-[1.856rem] text-[#6b6b6b]'>
          2022 재외동포 대학생 온라인연수 방문을 진심으로 환영합니다.
          <br />
          <br />
          재외동포 대학생 온라인연수는 시공간을 넘어 모국 대한민국의 전통과
          현대를 아우르는 다양한 콘텐츠를 통해 한민족 공동체성을 지닌
          세계한인으로 성장할 수 있도록 마련한 축제의 장입니다.
          <br />
          <br />
          재외동포 대학생 여러분!
          <br />
          세계가 하나로 연결된 '글로벌 시대'속 재외동포 대학생 여러분들은 한민족
          정체성을 지닌 '세계 한인'이자 널리 인간세계를 이롭게 하는 홍익인간의
          가치를 실현할 수 있는 '세계시민'입니다. 이번 온라인 모국연수 참여를
          통해 좋은 친구들 많이 만나시고 앞으로 세계 무대에서 활약할 여러분들의
          모습도 마음껏 그려보시기를 바랍니다.
          <br />
          <br />
          감사합니다.
          <div className='mt-[0.813rem] text-right'>
            <Image
              src={Sign1}
              alt='Sign Image1'
              objectFit='cover'
              placeholder='blur'
              quality={100}
            />
          </div>
        </div>
      </div>

      <div className='relative'>
        <div className='absolute top-1/2 left-1/2 z-[-1] h-full w-full -translate-x-1/2 -translate-y-1/2'>
          <div className='relative h-full w-full'>
            <Image
              src={Bg2}
              alt='Background Image2'
              layout='fill'
              objectFit='cover'
              placeholder='blur'
              quality={100}
            />
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='flex w-[61.25rem] justify-end'>
            <div className='w-[450px] pt-[5.691rem] pb-[24.938rem]'>
              <div className='text-[2.5rem] leading-[3.438rem] text-[#01111e]'>
                재외동포 대학생 여러분,
                <br />
                <span className='font-bold text-[#2fb6bc]'>
                  진심으로 반갑습니다.
                </span>
              </div>
              <svg
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mt-[14.938rem]'
              >
                <path d='M2 28V2H28' stroke='#F8F8F8' strokeWidth='4' />
              </svg>

              <div className='ml-[1.625rem]'>
                <div className='text-xl font-bold text-white'>
                  2022 재외동포 대학생 온라인연수
                </div>
                <div className='mt-[15px] text-[2.5rem] leading-[55px] text-white'>
                  사업단장&nbsp;
                  <span className='font-bold text-[#2fb6bc]'>
                    오문범입니다.
                  </span>
                </div>
              </div>

              <div className='flex justify-end'>
                <svg
                  width='28'
                  height='28'
                  viewBox='0 0 28 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M26 0L26 26L0 26' stroke='#F8F8F8' strokeWidth='4' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='mt-[-269px] h-[35.875rem] w-[61.25rem] bg-slate-400' />
      </div>

      <div className='flex flex-col items-center pb-[4.796rem]'>
        <div className='mt-10 w-[61.25rem] text-[1.875rem] font-bold leading-[2.813rem] text-[#01111e]'>
          재외동포 대학생 온라인연수에 참여한 재외동포 대학생 여러분,
          반갑습니다.
        </div>
        <div className='mt-[2.188rem] w-[61.25rem] text-[1.125rem] font-normal leading-[1.856rem] text-[#9e9e9e]'>
          세계한인 청년대학생 여러분 반갑습니다
          <br />
          <br />
          우리가 살아가는 공간은 달라도 코리안이라는 이름 하나로 한민족 공동체의
          일원임을 경험했던 재외동포대학생모국연수가 2022년 여름 대한민국
          서울에서 개최됩니다
          <br />
          <br />
          코로나19 팬데믹으로 지난 2년간 우리의 만남은 제한된 상황에 멈추고
          말았습니다. 물론 코로나19의 여파가 완전히 사라지진 않았지만, 2022년
          올해는 온라인과 오프라인을 겸해 모국연수사업이 다시 시작됩니다.
          <br />
          <br />
          3년만에 재개되는 이번 연수는 같은 시대를 살아가는 글로벌코리안
          청년들이 모국 대한민국을 방문해 서울과 부산 등 전국 6개 도시에서
          우리의 문화와 역사, 그리고 세계의 보편적 가치에 대해 함께 체험하고
          토론하는 의미있는 시간이 될 것입니다.
          <br />
          <br />
          또한 지난해에 이어 온라인 컨텐츠를 대폭 보완한 2022
          재외동포대학생사이버캠프 역시 온라인 웹페이지를 통해 진행됩니다.
          <br />
          시간과 공간을 넘어 어디서든 세계한인 청년들의 교류의 기회가 될 이번
          온/오프라인 연수에 여러분의 열정적인 참여를 기대합니다.
          <br />
          <br />
          감사합니다
          <div className='mt-10 text-right'>
            <Image
              src={Sign2}
              alt='Sign Image2'
              objectFit='cover'
              placeholder='blur'
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
