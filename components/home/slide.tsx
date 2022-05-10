import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import SlideBg1 from '@public/home/slide-bg-1.png';
import SlideBg2 from '@public/home/slide-bg-2.png';
import { useRef, useState } from 'react';
import useInterval from '@libs/client/useInterval';

export default function Slide() {
  const slide = [
    {
      id: 0,
      bgImg: SlideBg1,
      title: '2022 OKFriends\nCyberCamp',
      text: '재외동포 대학생 온라인 모국연수',
    },
    {
      id: 1,
      bgImg: SlideBg2,
      title: '2022 OKFriends\nCyberCamp',
      text: '재외동포 대학생 온라인 모국연수',
    },
  ];
  const slider = useRef<Slider | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [progressBar, setProgressBar] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    afterChange: (index: number) => {
      setActiveSlide(index);
      setProgressBar(0);
    },
  };

  useInterval(() => {
    if (progressBar >= 100) {
      setProgressBar(0);
      nextSlide();
    } else {
      if (progressBar === 0) {
        setTimeout(() => setProgressBar((prev) => prev + 0.2), 500);
      } else {
        setProgressBar((prev) => prev + 0.2);
      }
    }
  }, 10);

  const prevSlide = () => {
    slider.current?.slickPrev();
  };

  const nextSlide = () => {
    slider.current?.slickNext();
  };

  return (
    <div className='relative h-[57rem] w-screen md:h-[25.125rem]'>
      <Slider ref={slider} className='h-full overflow-hidden' {...settings}>
        {slide.map((i) => (
          <div
            key={i.id}
            className='relative !flex h-[57rem] w-screen flex-col items-center justify-center text-white md:h-[25.125rem]'
          >
            <div className='absolute -z-[1] h-full w-full'>
              <div className='relative h-full w-full'>
                <Image
                  src={i.bgImg}
                  alt='Slide Image'
                  layout='fill'
                  objectFit='cover'
                  placeholder='blur'
                />
              </div>
            </div>

            <div className='whitespace-pre-wrap text-center font-quicksand text-[5rem] font-bold leading-none drop-shadow-md md:text-[2.5rem]'>
              {i.title}
            </div>

            <div className='mt-6 text-2xl font-bold drop-shadow-md md:text-xl'>
              {i.text}
            </div>
          </div>
        ))}
      </Slider>

      <div className='absolute left-1/2 bottom-10 -translate-y-1/2 space-y-4 md:hidden'>
        <svg
          width='21'
          height='30'
          viewBox='0 0 21 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='1.60059'
            y='0.75'
            width='18.5'
            height='28.5'
            rx='9.25'
            stroke='white'
            strokeWidth='1.5'
          />
          <circle cx='10.8506' cy='9.9043' r='2.5' fill='white' />
        </svg>

        <svg
          width='22'
          height='15'
          viewBox='0 0 22 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='animate-bounce'
        >
          <path
            d='M1.23646 0.35688C0.881273 0.143769 0.420577 0.258943 0.207466 0.614128C-0.00564486 0.969313 0.109529 1.43001 0.464714 1.64312L1.23646 0.35688ZM10.8506 7L10.4647 7.64312L10.8506 7.87464L11.2365 7.64312L10.8506 7ZM21.2365 1.64312C21.5916 1.43001 21.7068 0.969313 21.4937 0.614128C21.2806 0.258943 20.8199 0.143769 20.4647 0.35688L21.2365 1.64312ZM0.464714 1.64312L10.4647 7.64312L11.2365 6.35688L1.23646 0.35688L0.464714 1.64312ZM11.2365 7.64312L21.2365 1.64312L20.4647 0.35688L10.4647 6.35688L11.2365 7.64312Z'
            fill='white'
          />
          <path
            d='M1.23646 6.65961C0.881273 6.4465 0.420577 6.56168 0.207466 6.91686C-0.00564486 7.27205 0.109529 7.73274 0.464714 7.94585L1.23646 6.65961ZM10.8506 13.3027L10.4647 13.9459L10.8506 14.1774L11.2365 13.9459L10.8506 13.3027ZM21.2365 7.94585C21.5916 7.73274 21.7068 7.27205 21.4937 6.91686C21.2806 6.56168 20.8199 6.4465 20.4647 6.65961L21.2365 7.94585ZM0.464714 7.94585L10.4647 13.9459L11.2365 12.6596L1.23646 6.65961L0.464714 7.94585ZM11.2365 13.9459L21.2365 7.94585L20.4647 6.65961L10.4647 12.6596L11.2365 13.9459Z'
            fill='white'
          />
        </svg>
      </div>

      <div className='relative mx-auto w-full max-w-[1400px]'>
        <div className='absolute left-0 bottom-0 flex h-[3.813rem] w-[21.5rem] items-center justify-center bg-[#231916] md:left-1/2 md:h-9 md:w-48 md:-translate-x-1/2'>
          <svg
            width='7'
            height='9'
            viewBox='0 0 7 9'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={prevSlide}
            className='cursor-pointer'
          >
            <path
              d='M-1.96701e-07 4.5L6.75 0.602886L6.75 8.39711L-1.96701e-07 4.5Z'
              fill='white'
            />
          </svg>

          <div className='ml-1 text-sm font-bold text-white md:text-xs'>
            0{activeSlide + 1}
          </div>

          <div className='mx-3 h-[0.188rem] w-[13.125rem] rounded-full bg-[rgba(255,255,255,0.4)] md:mx-1 md:w-28'>
            <div
              className='h-full rounded-full bg-white'
              style={{ width: `${progressBar}%` }}
            ></div>
          </div>

          <div className='mr-1 text-sm font-bold text-white md:text-xs'>
            0{slide.length}
          </div>

          <svg
            width='7'
            height='9'
            viewBox='0 0 7 9'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={nextSlide}
            className='cursor-pointer'
          >
            <path d='M7 4.5L0.25 8.39711L0.25 0.602885L7 4.5Z' fill='white' />
          </svg>
        </div>
      </div>
    </div>
  );
}
