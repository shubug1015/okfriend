import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { useRef, useState } from 'react';
import useInterval from '@libs/client/useInterval';
import Layout from '@layouts/sectionLayout';
import Link from 'next/link';

export default function Card() {
  const slide = [
    {
      id: 0,
      bgImg: '',
    },
    {
      id: 1,
      bgImg: '',
    },
    {
      id: 2,
      bgImg: '',
    },
    {
      id: 3,
      bgImg: '',
    },
    {
      id: 4,
      bgImg: '',
    },
    {
      id: 5,
      bgImg: '',
    },
  ];
  const slider = useRef<Slider | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [progressBar, setProgressBar] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <Layout bgColor='bg-[#01111e]' padding='py-20'>
      <div className='text-4xl font-bold font-sans text-white'>CARD NEWS</div>

      <div className='mt-11 flex justify-between text-white'>
        <div className='flex justify-between items-center'>
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

          <div className='text-sm font-bold ml-1'>0{activeSlide + 1}</div>

          <div className='w-[13.125rem] h-[0.188rem] bg-[rgba(255,255,255,0.4)] rounded-full mx-3'>
            <div
              className='bg-white h-full rounded-full'
              style={{ width: `${progressBar}%` }}
            ></div>
          </div>

          <div className='text-sm font-bold mr-1'>0{slide.length}</div>

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

        <Link href='/'>
          <a>
            <div className='py-2 px-[1.375rem] rounded-full border border-white text-lg font-bold'>
              전체보기
            </div>
          </a>
        </Link>
      </div>

      <Slider ref={slider} className='overflow-hidden mt-12' {...settings}>
        {slide.map((i) => (
          <div key={i.id} className='!flex justify-center'>
            <div className='w-80 aspect-square rounded-lg bg-slate-300'></div>
          </div>
        ))}
      </Slider>
    </Layout>
  );
}
